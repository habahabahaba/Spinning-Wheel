// Constants:
// Types, interfaces and enumns:
import type { RemoteFontNames, AllSubsets } from '../constants/fonts';

// Exponential backoff delay generator with jitter
function getRetryDelay(attempt: number): number {
  const baseDelay = Math.min(2000 * Math.pow(2, attempt - 1), 30000);
  const jitter = Math.random() * 1000;
  return baseDelay + jitter;
}

// Batch size by browser and subsets count, clamped min/max per browser
export function getBatchSize(userAgent: string, subsetsCount: number): number {
  if (/firefox/i.test(userAgent)) {
    // Firefox: min 1 font, max 3, scaled inversely by subsets count (more subsets => smaller batch)
    return Math.max(1, Math.min(3, Math.floor(6 / subsetsCount)));
  }
  if (/chrome/i.test(userAgent)) {
    // Chrome: min 3 fonts, max 6, scaled by subsets count
    return Math.max(3, Math.min(6, Math.floor(12 / subsetsCount)));
  }
  // Default browsers: min 2, max 5
  return Math.max(2, Math.min(5, Math.floor(10 / subsetsCount)));
}

// Check if font is fully loaded (no more pending subsets)
export function isFontFullyLoaded(pendingSubsets: Set<string>): boolean {
  return pendingSubsets.size === 0;
}

// Create URL for a font subset
export function createFontUrl(
  fontName: RemoteFontNames,
  subset: AllSubsets
): string {
  const fontId = fontName.toLowerCase().replace(/\s+/g, '-');
  return `url(${fontId}@latest/files/${fontId}-${subset}-600-normal.woff2) format('woff2')`;
}

// Load a font subset with retry logic
export async function loadFontSubsetWithRetry(
  fontName: RemoteFontNames,
  subset: AllSubsets,
  attempt = 1
): Promise<void> {
  try {
    const fontFace = new FontFace(fontName, createFontUrl(fontName, subset), {
      weight: '600',
      display: 'block',
    });
    const loadedFace = await fontFace.load();
    document.fonts.add(loadedFace);

    // Confirm the font subset is loaded (check for font+weight)
    await new Promise<void>((resolve) => {
      const check = () => {
        if (document.fonts.check(`600 16px "${fontName}"`)) {
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      check();
    });
  } catch (err) {
    if (attempt >= 5) {
      console.error(
        `Font subset load failed after 5 attempts: ${fontName} [${subset}]`,
        err
      );
      throw err; // Final failure, bubble up
    }
    const delay = getRetryDelay(attempt);
    await new Promise((r) => setTimeout(r, delay));
    return loadFontSubsetWithRetry(fontName, subset, attempt + 1);
  }
}

export async function loadSubset(
  fontName: RemoteFontNames,
  subset: AllSubsets
): Promise<void> {
  const fontUrl = createFontUrl(fontName, subset);

  const fontFace = new FontFace(fontName, fontUrl, {
    weight: '600',
    display: 'block',
  });

  const loadedFace = await fontFace.load();
  document.fonts.add(loadedFace);

  // Ensure it is fully available before resolving
  await document.fonts.ready;

  // Optionally, check it's visible:
  await document.fonts.load('600 1em ' + fontName);
}

// Retry helper with exponential backoff
// export async function loadFontSubsetWithRetry(
//   fontName: RemoteFontNames,
//   subset: AllSubsets,
//   attempt: number = 1
// ): Promise<void> {
//   try {
//     await loadSubset(fontName, subset);
//   } catch (error) {
//     const maxAttempts = 4;

//     if (attempt >= maxAttempts) {
//       throw new Error(`Max retry attempts reached for ${fontName} - ${subset}`);
//     }

//     const delay = Math.min(500 * 2 ** (attempt - 1), 5000); // cap at 5s

//     console.warn(
//       `Retrying ${fontName} (${subset}) [attempt ${attempt}] after ${delay}ms`
//     );

//     await new Promise((resolve) => setTimeout(resolve, delay));

//     return loadFontSubsetWithRetry(fontName, subset, attempt + 1);
//   }
// }
