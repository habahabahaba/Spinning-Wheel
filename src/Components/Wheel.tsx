// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import { useMemo, useRef, useState } from 'react';
// Context:
// Hooks:
import { useSpinAnimation } from '../hooks/useSpinAnimation';
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
  // State:
  const [currentOption, setCurrentOption] = useState<number>(0);
  // Refs:
  const wheelRef = useRef<SVGSVGElement>(null);

  const { spin, isSpinning } = useSpinAnimation(wheelRef);

  const center = useMemo(() => ({ x: radius, y: radius }), [radius]);

  const diameter = 2 * radius;

  const anglePerSector = 360 / options.length;

  // Handlers
  const handleClick = () => {
    const random = +(Math.random() * 2 + 1).toFixed(2);
    const accumulatedTurns = spin(random); // 👈 numberOfTurns is passed here
    console.log(`accumulatedTurns: ${accumulatedTurns}`);
    setCurrentOption(() => Math.floor(options.length * (1 - accumulatedTurns)));
  };

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
          />
        );
      }),
    [fillColors, options, center, radius, anglePerSector]
  );

  return (
    <div>
      <div
        style={{
          border: 'solid black',
          borderRadius: '50%',
          padding: '0',
          height: `${diameter}px`,
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <svg
          ref={wheelRef}
          style={{ zIndex: 0, position: 'relative' }}
          width={diameter}
          height={diameter}
          viewBox={`0 0 ${diameter} ${diameter}`}
        >
          {sectors}
        </svg>

        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 'calc(50% + 1px)',
            transform: 'translate(50%, -50%)',
            width: '15px',
            height: '2px',
            backgroundColor: 'red',
            // borderRadius: '50%',
          }}
        />
      </div>

      <div>
        <button
          onClick={handleClick}
          disabled={isSpinning}
          style={{
            width: '8rem',
            position: 'relative',
            textAlign: 'center',
            zIndex: 5,
          }}
        >
          {isSpinning ? 'Spinning...' : 'Spin!'}
        </button>

        <span style={{ width: '15rem', marginLeft: '1rem' }}>
          Result:
          {isSpinning ? ' Spinning...' : ` ${currentOption + 1}`}
        </span>
      </div>
    </div>
  );
};

export default Wheel;
