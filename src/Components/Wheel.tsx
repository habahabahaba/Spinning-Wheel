// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import { useMemo } from 'react';
// Context:
// Hooks:
// Components:
import Sector from './Sector';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface Option {
  label: string;
  fillColor?: string;
  textColor?: string;
  angle?: number;
}
interface WheelProps {
  radius: number;
  options: Option[];
  fillColors: string[];
}

const Wheel: FC<WheelProps> = ({ radius, options, fillColors }) => {
  const center = useMemo(() => ({ x: radius, y: radius }), [radius]);

  const diameter = 2 * radius;

  const anglePerSector = 360 / options.length;

  // JSX:
  const sectors = useMemo(
    () =>
      options.map((option, i) => {
        // Convert to SVG coordinate system (0° = right)
        const startAngle = i * anglePerSector + 90; // Subtract 90° to align 0° with right
        const endAngle = (i + 1) * anglePerSector + 90;
        return (
          <Sector
            key={i}
            index={i}
            totalSectors={options.length}
            center={center}
            radius={radius}
            startAngle={startAngle}
            endAngle={endAngle}
            label={option.label}
            fillColor={option.fillColor || fillColors[i % fillColors.length]}
            // fillColor='green'
          />
        );
      }),
    [fillColors, options, center, radius, anglePerSector]
  );

  return (
    <div
      style={{
        border: 'solid black',
        borderRadius: '50%',
        padding: '0',
        height: `${diameter}px`,
      }}
    >
      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
      >
        {sectors}
      </svg>
    </div>
  );
};

export default Wheel;
