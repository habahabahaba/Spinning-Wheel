// Utils:
import { maxInscribedRectangle, evaluateRectangleInSector } from './geometry';
// import { polarToCartesian } from './geometry';
import { normalizeBoxValue } from './css';

// Types, interfaces and enumns:
interface FontSizeCalculationOptions {
  text: string;
  fontFamily: string;
  containerHeight: number;
  containerWidth: number;
  fontWeight?: number;
  lineHeight?: number;
  boxSizing?: 'content-box' | 'border-box';
  containerPadding?:
    | number
    | [number, number]
    | [number, number, number, number];
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
  childMargin?: number | [number, number] | [number, number, number, number];
  childPadding?: number | [number, number] | [number, number, number, number];
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
}

let measurementCanvas: HTMLCanvasElement | null = null;
let measurementCtx: CanvasRenderingContext2D | null = null;

function getMeasurementContext() {
  if (!measurementCanvas) {
    measurementCanvas = document.createElement('canvas');
    measurementCtx = measurementCanvas.getContext('2d')!;
  }
  return measurementCtx!;
}

export function detectFirefoxTextZoomRatio({
  font = '600 16px Arial',
  text = 'mmmmmmmmmm',
  calibratedWidth = 142.8000030517578,
}: {
  font?: string;
  text?: string;
  calibratedWidth?: number;
} = {}): number {
  const isFirefox =
    typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);
  if (!isFirefox) return 1;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.warn('Canvas 2D context not available');
    return 1;
  }

  ctx.font = font;
  const actualWidth = ctx.measureText(text).width;

  // Clean up
  canvas.width = 0;
  canvas.height = 0;

  // console.log(
  //   `[detectFirefoxTextZoomRatio] ratio: ${calibratedWidth / actualWidth}`
  // );

  return calibratedWidth / actualWidth;
}
/**
 * Measures text dimensions accounting for precise font metrics
 * @param text - Text to measure
 * @param fontSize - Font size with units (e.g., "14px")
 * @param fontFamily - Font stack
 * @param fontWeight - Font weight
 * @returns {width: number, height: number} - Exact bounding box dimensions
 */
function measureTextBox(
  text: string,
  fontSize: string,
  fontFamily: string,
  fontWeight: string,
  textScale: number = 1
): { width: number; height: number } {
  const ctx = getMeasurementContext();
  ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;

  // Measure width
  const width = ctx.measureText(text).width / 1;

  // Measure height using actual bounding boxes
  const metrics = ctx.measureText(text);
  const height =
    (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) / 1;

  // Correction for text-only-zoom in FIREFOX:

  return {
    width: Math.ceil(width * textScale),
    height: Math.ceil(height * textScale),
  };
}

/**
 * Advanced text truncation with ellipsis placement options
 * @param text - Text content to truncate
 * @param fontSize - Font size with units (e.g., "16px")
 * @param fontFamily - Font family stack (e.g., "Arial, sans-serif")
 * @param fontWeight - Font weight (e.g., "normal", "bold", "600")
 * @param availableWidth - Maximum allowed width in pixels
 * @param options - Configuration options
 * @param options.ellipsis - Custom ellipsis string (default: '…')
 * @param options.minChars - Minimum characters to keep (default: 1)
 * @param options.rtl - Right-to-left text direction (default: false)
 * @param options.position - Ellipsis position ('start' | 'middle' | 'end') (default: 'middle')
 * @returns Truncated string with ellipsis (or empty string if no fit)
 */
export function truncateTextWithEllipsis(
  text: string,
  fontSize: string,
  fontFamily: string,
  fontWeight: string = '600',
  availableWidth: number,
  options: {
    ellipsis?: string;
    minChars?: number;
    rtl?: boolean;
    position?: 'start' | 'middle' | 'end';
  } = {}
): string {
  const {
    ellipsis = '…',
    minChars = 1,
    rtl = false,
    position = 'middle',
  } = options;

  if (!text || availableWidth <= 0) return '';

  // Use measureTextBox for accurate measurements
  const measure = (str: string) =>
    measureTextBox(str, fontSize, fontFamily, fontWeight);

  // Measure ellipsis first
  const ellipsisMetrics = measure(ellipsis);
  const ellipsisWidth = ellipsisMetrics.width;

  // Can't even fit ellipsis alone
  if (availableWidth < ellipsisWidth) {
    const firstCharWidth = measure(text[0]).width;
    return firstCharWidth <= availableWidth ? text[0] : '';
  }

  // Check if full text fits
  const fullMetrics = measure(text);
  if (fullMetrics.width <= availableWidth) return text;

  // Truncation strategies
  const truncationStrategies = {
    start: (visibleChars: number) =>
      rtl
        ? text.substring(0, visibleChars) + ellipsis
        : ellipsis + text.slice(-visibleChars),

    end: (visibleChars: number) =>
      rtl
        ? ellipsis + text.slice(-visibleChars)
        : text.substring(0, visibleChars) + ellipsis,

    middle: (visibleChars: number) => {
      const firstPart = Math.ceil(visibleChars / 2);
      const lastPart = Math.floor(visibleChars / 2);
      return rtl
        ? text.substring(0, firstPart) + ellipsis + text.slice(-lastPart)
        : text.substring(0, firstPart) + ellipsis + text.slice(-lastPart);
    },
  };

  // Binary search with more precise measurements
  let low = minChars;
  let high = text.length;
  let bestResult = '';

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const testStr = truncationStrategies[position](mid);
    const testWidth = measure(testStr).width;

    if (testWidth <= availableWidth) {
      bestResult = testStr;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // Fallback with minChars if no better solution found
  if (!bestResult && minChars > 0) {
    const minStr = truncationStrategies[position](minChars);
    if (measure(minStr).width <= availableWidth) {
      return minStr;
    }
  }

  return bestResult || '';
}

/**
 * Calculates optimal text layout parameters for rendering text within a circular sector.
 *
 * @param label - The text content to be rendered
 * @param fontFamily - CSS font-family string
 * @param fontWeight - CSS font-weight string/number
 * @param radius - Radius of the circular sector in pixels
 * @param sectorAngleDeg - Angle of the sector in degrees (0-360)
 *
 * @returns An object containing:
 *   - `text`: The final text (possibly truncated)
 *   - `fontSize`: The optimal font size in pixels
 *   - `distanceFromApex`: Distance from sector apex to text center along central radius
 *
 * @remarks
 * The function performs the following steps:
 * 1. Picks a minimum font size.
 * 2. Checks if text fits at minimum font size (considering both height and width constraints)
 * 3. If not, truncates text to fit while maintaining minimum font size
 * 4. If text fits, calculates maximum possible font size using sector geometry
 * 5. Determines optimal text position along the central radius
 *
 * @example
 * ```ts
 * const layout = calculateTextLayout(
 *   "Sample Text",
 *   "Arial",
 *   "bold",
 *   100,
 *   45
 * );
 * ```
 *
 * @see {@link measureTextBox} for text measurement
 * @see {@link evaluateRectangleInSector} for sector fitting logic
 * @see {@link maxInscribedRectangle} for maximum rectangle calculation
 * @see {@link truncateTextWithEllipsis} for text truncation
 */
const fontSizeCache = new Map<string, number>();
export function calculateTextLayout(
  label: string,
  fontFamily: string,
  fontWeight: string,
  radius: number,
  sectorAngleDeg: number,
  textScale: number = 1
): {
  text: string;
  fontSize: number;
  distanceFromApex: number;
  textScale?: number;
} {
  // Pick reasonable minimal font size
  const FontRadiusRatio = 0.035;
  const minFontSize = Math.max(12, Math.ceil(radius * FontRadiusRatio));

  // Test fit at minFontSize
  const minMetrics = measureTextBox(
    label,
    `${minFontSize}px`,
    fontFamily,
    fontWeight,
    textScale
  );

  const minFitEvaluation = evaluateRectangleInSector(
    sectorAngleDeg,
    radius,
    minMetrics.height,
    minMetrics.width,
    0.16
  );

  // Handle cases where text doesn't fit at minFontSize
  if (!minFitEvaluation.validHeight || minFitEvaluation.arcOvershoot > 0) {
    // Calculate available width (original width minus overshoot)
    const availableWidth =
      minMetrics.width - Math.max(0, minFitEvaluation.arcOvershoot);

    // Truncate with exact available width
    const truncated = truncateTextWithEllipsis(
      label,
      `${minFontSize}px`,
      fontFamily,
      fontWeight,
      availableWidth,
      { position: 'middle' }
    );

    // Verify truncated text fits
    const truncatedMetrics = measureTextBox(
      truncated,
      `${minFontSize}px`,
      fontFamily,
      fontWeight,
      textScale
    );
    const truncatedFit = evaluateRectangleInSector(
      sectorAngleDeg,
      radius,
      truncatedMetrics.height,
      truncatedMetrics.width,
      0.13
    );
    if (!truncatedFit.validHeight) {
      // console.log(`[calculateTextLayout] NO fit`);
      return { text: '', fontSize: 0, distanceFromApex: 0 };
    }

    return {
      text: truncated,
      fontSize: minFontSize,
      distanceFromApex: truncatedFit.distanceFromApex, // truncated width is already as wide as possible, there's no space between it and the arc
    };
  }

  // Calculate maximum possible size (existing optimal scaling logic)
  const aspectRatio = minMetrics.width / minMetrics.height;
  const maxRect = maxInscribedRectangle(sectorAngleDeg, radius, aspectRatio);

  let maxFontSize: number;
  const fontKey = `${maxRect.maxHeight}-${fontFamily}-${fontWeight}-${label}`;
  const cachedFontSize = fontSizeCache.get(fontKey);
  if (cachedFontSize) {
    maxFontSize = cachedFontSize;
  } else {
    maxFontSize = Math.floor(
      minFontSize * (maxRect.maxHeight / minMetrics.height)
    );
    fontSizeCache.set(fontKey, maxFontSize);
  }

  const maxMetrics = measureTextBox(
    label,
    `${maxFontSize}px`,
    fontFamily,
    fontWeight,
    textScale
  );

  // Final positioning with arcOvershoot awareness
  const maxFitEvaluation = evaluateRectangleInSector(
    sectorAngleDeg,
    radius,
    maxMetrics.height,
    maxMetrics.width,
    0.1
  );

  const arcPadding = Math.min(5, -maxFitEvaluation.arcOvershoot / 2); // Apply small padding, if space allows for it.
  const distanceFromApex =
    maxFitEvaluation.distanceFromApex -
    maxFitEvaluation.arcOvershoot -
    arcPadding;

  return {
    text: label,
    fontSize: maxFontSize,
    distanceFromApex,
  };
}

/**
 * Calculates the maximum font size for text to fit within a container while respecting all CSS constraints
 */
export function fontSizeForTextInElement({
  text,
  fontFamily,
  containerHeight,
  containerWidth,
  fontWeight = 600,
  lineHeight = 1.25,
  boxSizing = 'border-box',
  containerPadding = 0,
  childMargin = 0,
  childPadding = 0,
  wordBreak = 'break-word',
  whiteSpace = 'normal',
}: FontSizeCalculationOptions): number {
  // Create measurement container
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.visibility = 'hidden';
  container.style.boxSizing = boxSizing;
  container.style.width = `${containerWidth}px`;
  container.style.wordBreak = wordBreak;
  container.style.whiteSpace = whiteSpace;

  // Apply container padding
  const padding = normalizeBoxValue(containerPadding);
  container.style.padding = padding.map((v) => `${v}px`).join(' ');

  // Create measurement child element
  const child = document.createElement('div');
  child.style.fontFamily = fontFamily;
  child.style.fontWeight = fontWeight.toString();
  child.style.lineHeight = lineHeight.toString();
  child.textContent = text;
  child.style.margin = normalizeBoxValue(childMargin)
    .map((v) => `${v}px`)
    .join(' ');
  child.style.padding = normalizeBoxValue(childPadding)
    .map((v) => `${v}px`)
    .join(' ');
  container.appendChild(child);
  document.body.appendChild(container);

  // Binary search implementation
  let minSize = 1;
  let maxSize = Math.min(containerHeight, 1000);
  let optimalSize = minSize;

  while (minSize <= maxSize) {
    const midSize = Math.floor((minSize + maxSize) / 2);
    child.style.fontSize = `${midSize}px`;

    if (container.scrollHeight <= containerHeight) {
      optimalSize = midSize;
      minSize = midSize + 1;
    } else {
      maxSize = midSize - 1;
    }
  }

  document.body.removeChild(container);
  return optimalSize;
}
