// Utils:
import { maxInscribedRectangle, evaluateRectangleInSector } from './geometry';
import { polarToCartesian } from './geometry';

const MIN_FONT_SIZE = 14;
const FONT_FAMILY = 'monospace';
const fontCache = new Map<string, number>();

// Canvas for measuring text
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')!;

function getTextWidth(
  label: string,
  fontSize: number,
  fontFamily: string
): number {
  const cacheKey = `${label}_${fontSize}_${fontFamily}`;
  if (fontCache.has(cacheKey)) return fontCache.get(cacheKey)!;

  ctx.font = `${fontSize}px ${fontFamily}`;
  const width = ctx.measureText(label).width;
  fontCache.set(cacheKey, width);
  return width;
}

function getLineHeight(fontSize: number): number {
  return fontSize * 1.2; // Approximate for most fonts
}

export function calculateLabelPlacement({
  label,
  totalSectors,
  radius,
  center,
}: {
  label: string;
  totalSectors: number;
  radius: number;
  center: { x: number; y: number };
}) {
  const anglePerSector = 360 / totalSectors;
  const midAngle = anglePerSector / 2;

  // Step 1: Determine min safe distance for MIN_FONT_SIZE
  const lineHeight = getLineHeight(MIN_FONT_SIZE);
  const minSafeDistance =
    lineHeight / (2 * Math.tan((anglePerSector / 2) * (Math.PI / 180)));

  // Step 2: Determine label width at font size 14
  const labelWidthAtMinSize = getTextWidth(label, MIN_FONT_SIZE, FONT_FAMILY);
  const availableLength = radius - minSafeDistance;

  let finalLabel = label;
  let fontSize = MIN_FONT_SIZE;
  let startDistance = minSafeDistance;

  if (availableLength < labelWidthAtMinSize) {
    // Truncate to fit
    const avgCharWidth = getTextWidth('W', MIN_FONT_SIZE, FONT_FAMILY);
    const maxChars = Math.floor(availableLength / avgCharWidth);

    if (maxChars <= 1) {
      finalLabel = '…';
    } else {
      finalLabel = label.slice(0, maxChars - 1) + '…';
    }
  } else {
    // Step 3: scale label to largest possible size
    const aspectRatio = labelWidthAtMinSize / lineHeight;
    const maxRectHeight = Math.min(
      (2 * radius * Math.sin((anglePerSector / 2) * (Math.PI / 180))) /
        Math.sqrt(1 + aspectRatio ** 2),
      radius
    );

    fontSize = Math.floor(maxRectHeight / 1.2);
    const scaledWidth = getTextWidth(label, fontSize, FONT_FAMILY);
    const scaledLineHeight = getLineHeight(fontSize);
    // const scaledMinSafeDistance =
    //   scaledLineHeight / (2 * Math.tan((anglePerSector / 2) * (Math.PI / 180)));

    // Step 4: try to move label outward
    const maxSafeRadius = radius - scaledLineHeight / 2;
    startDistance = Math.min(radius - scaledWidth / 2, maxSafeRadius);
  }

  const { x, y } = polarToCartesian(
    center.x,
    center.y,
    startDistance,
    midAngle
  );

  return {
    fontSize,
    label: finalLabel,
    position: { x, y },
    rotation: midAngle - 90,
  };
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
  fontWeight: string
): { width: number; height: number } {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;

  // Measure width
  const width = ctx.measureText(text).width;

  // Measure height using actual bounding boxes
  const metrics = ctx.measureText(text);
  const height =
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  return {
    width: Math.ceil(width),
    height: Math.ceil(height),
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
  // console.log(`[truncateTextWithEllipsis] availableWidth: ${availableWidth}`);

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
  sectorAngleDeg: number
): { text: string; fontSize: number; distanceFromApex: number } {
  // Pick reasonable minimal font size
  const FontRadiusRatio = 0.035;
  const minFontSize = Math.max(12, Math.ceil(radius * FontRadiusRatio));

  // Test fit at minFontSize
  const minMetrics = measureTextBox(
    label,
    `${minFontSize}px`,
    fontFamily,
    fontWeight
  );
  // console.log(
  //   `[calculateTextLayout] angle: ${sectorAngleDeg},
  //     minMetrics: ${JSON.stringify(minMetrics)}`
  // );

  const minFitEvaluation = evaluateRectangleInSector(
    sectorAngleDeg,
    radius,
    minMetrics.height,
    minMetrics.width
  );
  // console.log(
  //   `[calculateTextLayout] angle: ${sectorAngleDeg},
  //     minFitEvaluation: ${JSON.stringify(minFitEvaluation)}`
  // );

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
      fontWeight
    );
    const truncatedFit = evaluateRectangleInSector(
      sectorAngleDeg,
      radius,
      truncatedMetrics.height,
      truncatedMetrics.width
    );
    if (!truncatedFit.validHeight) {
      // console.log(`[calculateTextLayout] NO fit`);
      return { text: '', fontSize: 0, distanceFromApex: 0 };
    }

    // console.log(
    //   `[calculateTextLayout] TRUNCATED FIT angle: ${sectorAngleDeg},
    //   minMetrics: ${JSON.stringify(minMetrics)}`
    // );
    // console.log(
    //   `[calculateTextLayout] TRUNCATED FIT angle: ${sectorAngleDeg},
    //   minFitEvaluation:${JSON.stringify(minFitEvaluation)}`
    // );
    // console.log(
    //   `[calculateTextLayout] TRUNCATED FIT angle: ${sectorAngleDeg},
    //   truncatedFit:${JSON.stringify(truncatedFit)}`
    // );

    return {
      text: truncated,
      fontSize: minFontSize,
      distanceFromApex: truncatedFit.distanceFromApex, // truncated width is already as wide as possible, there's no space between in and the arc
    };
  }

  // Calculate maximum possible size (existing optimal scaling logic)
  const aspectRatio = minMetrics.width / minMetrics.height;
  const maxRect = maxInscribedRectangle(sectorAngleDeg, radius, aspectRatio);

  let maxFontSize: number;
  const fontKey = `${maxRect.maxHeight}-${fontFamily}-${fontWeight}`;
  const cachedFontSize = fontSizeCache.get(fontKey);
  if (cachedFontSize) {
    // console.log(
    //   `[calculateTextLayout] NORMAL FIT angle: ${sectorAngleDeg},
    // cachedFontSize: ${cachedFontSize}`
    // );
    maxFontSize = cachedFontSize;
  } else {
    maxFontSize = Math.floor(
      minFontSize * (maxRect.maxHeight / minMetrics.height)
    );
    fontSizeCache.set(fontKey, maxFontSize);
  }
  // const maxFontSize = Math.max(
  //   minFontSize,
  //   Math.floor(minFontSize * (maxRect.maxHeight / minMetrics.height))
  // );

  // console.log(
  //   `[calculateTextLayout] NORMAL FIT angle: ${sectorAngleDeg},
  //   maxRect:${JSON.stringify(maxRect)}`
  // );

  const maxMetrics = measureTextBox(
    label,
    `${maxFontSize}px`,
    fontFamily,
    fontWeight
  );

  // Final positioning with arcOvershoot awareness
  const maxFitEvaluation = evaluateRectangleInSector(
    sectorAngleDeg,
    radius,
    maxMetrics.height,
    maxMetrics.width
  );

  // console.log(
  //   `[calculateTextLayout] NORMAL FIT angle: ${sectorAngleDeg},
  //   maxMetrics: ${JSON.stringify(maxMetrics)}`
  // );
  // console.log(
  //   `[calculateTextLayout] NORMAL FIT angle: ${sectorAngleDeg},
  //   maxFitEvaluation:${JSON.stringify(maxFitEvaluation)}`
  // );

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
