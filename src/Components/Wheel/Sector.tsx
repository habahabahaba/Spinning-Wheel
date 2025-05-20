// Utils:
import { polarToCartesian } from '../../utils/geometry';
import { calculateTextLayout } from '../../utils/text';
// 3rd party:
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
  center: { x: number; y: number };
  radius: number;
  startAngle: number;
  endAngle: number;
  fillColor: string;
  textColor?: string;
  label?: string;
  fontFamily?: string;
  fontWeight?: string;
  isFirefox?: boolean;
  textScale?: number;
  isHighlighted?: boolean;
}

const Sector: FC<SectorProps> = ({
  center,
  radius,
  startAngle,
  endAngle,
  fillColor,
  textColor = '#000',
  label = '',
  fontFamily = 'Arial',
  fontWeight = '600',
  isFirefox = false,
  textScale = 1,
  isHighlighted = false,
}) => {
  const sectorAngle = endAngle - startAngle;
  const midAngle = (startAngle + endAngle) / 2;

  // Derived values:
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

  const textPos = useMemo(
    () => polarToCartesian(center.x, center.y, distanceFromApex, midAngle),
    [center, distanceFromApex, midAngle]
  );

  const textDecoration = isHighlighted ? 'underline' : '';

  // Fixing Firefox text rendering:
  const dy =
    isFirefox && fontFamily === 'arial'
      ? '0.06em'
      : ['serif', 'sans-serif'].includes(fontFamily)
      ? '0.5rem'
      : 0;
  const textUnderlineOffset =
    isFirefox &&
    !['sans-serif', 'serif', 'Yanone Kaffeesatz'].includes(fontFamily)
      ? '0.2em'
      : 'initial';

  return (
    <g>
      <path
        d={describeSector}
        fill={fillColor}
        stroke='black'
        strokeWidth={1}
        style={{
          willChange: 'transform',
          transition: 'filter 0.5s',
          filter: `${isHighlighted ? 'brightness(1.4)' : ''}`,
        }}
      />

      <text
        x={textPos.x}
        y={textPos.y}
        textAnchor='start'
        dominantBaseline='central'
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={fontSize}
        dy={dy}
        fill={textColor}
        style={{
          willChange: 'transform',
          textUnderlineOffset,
          textDecoration,
        }}
        transform={`rotate(${midAngle - 90} ${textPos.x} ${textPos.y})`}
      >
        {text}
      </text>
    </g>
  );
};

export default memo(Sector);
