import { getChordLength, polarToCartesian } from '../utils/math';

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
    const scaledMinSafeDistance =
      scaledLineHeight / (2 * Math.tan((anglePerSector / 2) * (Math.PI / 180)));

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
