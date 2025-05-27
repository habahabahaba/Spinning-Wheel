// Utils:
import { polarToCartesian } from '../utils/geometry';
import { calculateTextLayout } from '../utils/text';
// React:
import { useMemo } from 'react';
// Types, interfaces and enumns:
type Point = { x: number; y: number };
interface SectorLayoutConfig {
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
  label?: string;
  fontFamily?: string;
  fontWeight?: string;
  textScale?: number;
}
interface SectorLayout {
  describeSector: string;
  midAngle: number;
  textPosition: Point;
  text: string;
  fontSize: number;
}

export default function useSectorLayout({
  center,
  radius,
  startAngle,
  endAngle,
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

  return { describeSector, midAngle, textPosition, text, fontSize };
}
