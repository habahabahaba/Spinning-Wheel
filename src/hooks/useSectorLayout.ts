// Constants:
import { FONT_Y_OFFSET, FONT_UNDERLINE_OFFSET } from '../constants/fonts';
// Utils:
import { polarToCartesian } from '../utils/geometry';
import { calculateTextLayout } from '../utils/text';
// React:
import { useMemo } from 'react';
// Types, interfaces and enumns:
import type { Browser } from '../utils/browser';
import type { AllFontNames } from '../constants/fonts';
type Point = { x: number; y: number };
interface SectorLayoutConfig {
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
  browser: Browser;
  label?: string;
  fontFamily?: AllFontNames;
  fontWeight?: string;
  textScale?: number;
}
interface SectorLayout {
  describeSector: string;
  midAngle: number;
  textPosition: Point;
  text: string;
  fontSize: number;
  textOffsetY: string | 0;
  textUnderlineOffset: string | 0;
}

export default function useSectorLayout({
  center,
  radius,
  startAngle,
  endAngle,
  browser,
  label = '',
  fontFamily = 'Arial',
  fontWeight = '600',
  textScale = 1,
}: SectorLayoutConfig): SectorLayout {
  const sectorAngle = endAngle - startAngle;
  const midAngle = (startAngle + endAngle) / 2;

  const describeSector = useMemo(() => {
    const start = polarToCartesian(center.x, center.y, radius, endAngle);
    const end = polarToCartesian(center.x, center.y, radius, startAngle);
    const largeArc = sectorAngle > 180 ? 1 : 0;

    return `
        M ${center.x} ${center.y}
        L ${start.x} ${start.y}
        A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}
        Z
      `;
  }, [startAngle, endAngle, radius, center.x, center.y, sectorAngle]);

  // Calculate sector geometry
  const { text, fontSize, distanceFromApex } = useMemo(
    () =>
      calculateTextLayout(
        label,
        fontFamily,
        fontWeight,
        radius,
        sectorAngle,
        textScale
      ),
    [label, fontFamily, fontWeight, radius, sectorAngle, textScale]
  );

  const textPosition: Point = useMemo(
    () => polarToCartesian(center.x, center.y, distanceFromApex, midAngle),
    [center.x, center.y, distanceFromApex, midAngle]
  );

  // if (import.meta.env.DEV) {
  //   console.log(
  //     `[useSectorLayout] browser: ${browser}, fontFamily: ${fontFamily}`
  //   );
  // }

  const textOffsetY = FONT_Y_OFFSET[browser][fontFamily];

  // Firefox ONLY:
  const textUnderlineOffset = FONT_UNDERLINE_OFFSET[browser][fontFamily];

  return {
    describeSector,
    midAngle,
    textPosition,
    textOffsetY,
    text,
    textUnderlineOffset,
    fontSize,
  };
}
