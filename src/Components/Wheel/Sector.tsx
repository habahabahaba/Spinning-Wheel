// Utils:
// 3rd party:
// Store:
// React Router:
// React:
import { memo } from 'react';
// Context:
// Hooks:
import useSectorLayout from '../../hooks/useSectorLayout';
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
  // if (import.meta.env.DEV && startAngle === 90) {
  //   console.log(`[Sector] startAngle: ${startAngle}`);
  // }

  const { describeSector, midAngle, textPosition, text, fontSize } =
    useSectorLayout({
      center,
      radius,
      startAngle,
      endAngle,
      label,
      fontFamily,
      fontWeight,
      textScale,
    });

  const textDecoration = isHighlighted ? 'underline' : '';

  // Fixing Firefox text rendering:
  const dy =
    // isFirefox && fontFamily === 'arial'
    //   ? '0.06em'
    //   :
    isFirefox && ['serif', 'sans-serif'].includes(fontFamily)
      ? '0.15ch'
      : fontFamily === 'Eczar'
      ? '0.11ch'
      : '-0.01ch';
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
        x={textPosition.x}
        y={textPosition.y}
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
        transform={`rotate(${midAngle - 90} ${textPosition.x} ${
          textPosition.y
        })`}
      >
        {text}
      </text>
    </g>
  );
};

export default memo(Sector);
