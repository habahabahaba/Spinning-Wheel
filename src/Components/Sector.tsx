// Utils:
import { polarToCartesian } from '../utils/geometry';
import { calculateTextLayout } from '../utils/text';
// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import { useMemo, memo } from 'react';
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';

interface SectorProps {
  index: number;
  totalSectors: number;
  center: { x: number; y: number };
  radius: number;
  startAngle: number;
  endAngle: number;
  fillColor: string;
  textColor?: string;
  label?: string;
  fontFamily?: string;
  fontWeight?: string;
}

// Constants for scaling font and truncation
// const MIN_SECTORS = 2;
// const MAX_SECTORS = 72;

const Sector: FC<SectorProps> = ({
  index,
  totalSectors,
  center,
  radius,
  startAngle,
  endAngle,
  fillColor,
  textColor = '#000',
  label = '',
  fontFamily = 'sans-serif',
  fontWeight = '600',
}) => {
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
      calculateTextLayout(label, fontFamily, fontWeight, radius, sectorAngle),
    [label, fontFamily, fontWeight, radius, sectorAngle]
  );

  // console.log(`[Sector.tsx] distanceFromApex: ${distanceFromApex}`);

  const textPos = useMemo(
    () => polarToCartesian(center.x, center.y, distanceFromApex, midAngle),
    [center, distanceFromApex, midAngle]
  );

  return (
    <g>
      <path
        d={describeSector}
        fill={fillColor}
        stroke='black'
        strokeWidth={1}
      />
      // null
      <text
        x={textPos.x}
        y={textPos.y}
        textAnchor='start'
        dominantBaseline='central'
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={`${fontSize}px`}
        fill={textColor}
        style={{ willChange: 'transform' }}
        transform={`rotate(${midAngle - 90} ${textPos.x} ${textPos.y})`}
      >
        {text}
      </text>
    </g>
  );
};

export default memo(Sector);
