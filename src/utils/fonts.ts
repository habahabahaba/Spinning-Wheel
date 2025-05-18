// Constants:
import { REMOTE_FONT_SUBSETS } from '../constants/fonts';
// Store:
import useBoundStore from '../store/boundStore';
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
  return `url(https://cdn.jsdelivr.net/fontsource/fonts/${fontId}@latest/${subset}-600-normal.woff2) format('woff2')`;
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

export default async function initiateFontLoading() {
  const ua = navigator.userAgent;

  // Clone subsets per font
  const pendingSubsetsPerFont = {} as Record<RemoteFontNames, Set<AllSubsets>>;
  for (const [font, subsets] of Object.entries(REMOTE_FONT_SUBSETS) as [
    RemoteFontNames,
    AllSubsets[]
  ][]) {
    pendingSubsetsPerFont[font] = new Set(subsets);
  }

  const retryAttempts: Record<string, number> = {};
  let numberOfPendingFonts = Object.keys(pendingSubsetsPerFont).length;

  // Store actions
  const getState = useBoundStore.getState();
  const { fontsLoadStates, markLoadedFont, markAllFontsReady } = getState;

  // Early exit if already loaded
  if (Object.values(fontsLoadStates).every(Boolean)) {
    markAllFontsReady(true);
    return;
  }

  // Flatten subset list
  const allFontSubsetPairs: {
    fontName: RemoteFontNames;
    subset: AllSubsets;
  }[] = [];

  for (const [fontName, subsets] of Object.entries(pendingSubsetsPerFont) as [
    RemoteFontNames,
    Set<AllSubsets>
  ][]) {
    if (!fontsLoadStates[fontName]) {
      for (const subset of subsets) {
        allFontSubsetPairs.push({ fontName, subset });
      }
    }
  }

  async function loadBatch(
    batch: { fontName: RemoteFontNames; subset: AllSubsets }[]
  ) {
    await Promise.all(
      batch.map(async ({ fontName, subset }) => {
        try {
          await loadFontSubsetWithRetry(
            fontName,
            subset,
            retryAttempts[`${fontName}-${subset}`] || 1
          );

          // Mark subset loaded
          pendingSubsetsPerFont[fontName].delete(subset);

          // Font fully loaded
          if (
            isFontFullyLoaded(pendingSubsetsPerFont[fontName]) &&
            !fontsLoadStates[fontName]
          ) {
            markLoadedFont(fontName);
            if (--numberOfPendingFonts <= 0) {
              markAllFontsReady(true);
            }
          }
        } catch (err) {
          console.error(
            `Failed to load font subset: ${fontName} [${subset}]`,
            err
          );
        }
      })
    );
  }

  // Load in batches
  let i = 0;
  const total = allFontSubsetPairs.length;
  while (i < total) {
    const batchFonts = new Set<string>();
    let batchSize = 0;

    for (let j = i; j < total; j++) {
      batchFonts.add(allFontSubsetPairs[j].fontName);
      const subsetsCount =
        pendingSubsetsPerFont[allFontSubsetPairs[j].fontName].size || 1;
      batchSize = getBatchSize(ua, subsetsCount);
      if (j - i + 1 >= batchSize) break;
    }

    const batch = allFontSubsetPairs.slice(i, i + batchSize);
    await loadBatch(batch);
    i += batchSize;
  }
}
