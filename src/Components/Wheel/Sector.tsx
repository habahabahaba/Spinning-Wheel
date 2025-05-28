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
import type { Browser } from '../../utils/browser';
import type { AllFontNames } from '../../constants/fonts';

interface SectorProps {
  center: { x: number; y: number };
  radius: number;
  startAngle: number;
  endAngle: number;
  fillColor: string;
  textColor?: string;
  label?: string;
  fontFamily?: AllFontNames;
  fontWeight?: string;
  browser?: Browser;
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
  browser = 'chrome',
  textScale = 1,
  isHighlighted = false,
}) => {
  // if (import.meta.env.DEV && startAngle === 90) {
  //   console.log(`[Sector] startAngle: ${startAngle}`);
  // }

  const {
    describeSector,
    midAngle,
    textPosition,
    textOffsetY,
    textUnderlineOffset,
    text,
    fontSize,
  } = useSectorLayout({
    center,
    radius,
    startAngle,
    endAngle,
    browser,
    label,
    fontFamily,
    fontWeight,
    textScale,
  });

  if (import.meta.env.DEV) {
    console.log(`[Sector] textUnderlineOffset: ${textUnderlineOffset}`);
  }

  const textDecoration = isHighlighted ? 'underline' : '';

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
        dy={textOffsetY}
        fill={textColor}
        style={{
          willChange: 'transform',
          textDecoration,
          textUnderlineOffset,
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
