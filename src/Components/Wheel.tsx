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
  const [isActive, setIsActive] = useState(false);
  // Refs:
  const wheelRef = useRef<SVGSVGElement>(null);

  const { windUp, cancelAnimations, spin, wheelState } =
    useSpinAnimation(wheelRef);

  const center = useMemo(() => ({ x: radius, y: radius }), [radius]);

  const diameter = 2 * radius;

  const anglePerSector = 360 / options.length;

  // Handlers
  function handleClick() {
    if (wheelState !== 'idle') return;
  }

  const mouseDownTimeRef = useRef<number | null>(null);

  function handleMouseDown() {
    if (wheelState !== 'idle') return;
    mouseDownTimeRef.current = Date.now();
    setIsActive(true);
    windUp();
  }

  function handleMouseLeave() {
    if (wheelState !== 'windingUp') return;
    cancelAnimations();
    setIsActive(false);
  }

  function handleMouseUp() {
    const startTime = mouseDownTimeRef.current;
    if (startTime && wheelState === 'windingUp') {
      const heldSeconds = (Date.now() - startTime) / 1000;
      const strength = Math.min(heldSeconds, 4) + 1;
      mouseDownTimeRef.current = null;

      const randomTurns = +(Math.random() * 2 + strength).toFixed(2);
      // const randomTurns = 1;
      console.log(`[Wheel] randomTurns: ${randomTurns}`);
      const resultingTurn = spin(
        randomTurns,
        () => {
          console.log(`START`);
        },
        () => {
          console.log(`END`);
        }
      );
      console.log(`[Wheel] resultingTurn: ${resultingTurn}`);
      setCurrentOption(
        () => Math.floor(options.length * (1 - resultingTurn)) % options.length
      );
    }
    setIsActive(false);
  }

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
            center={center}
            radius={radius}
            startAngle={startAngle}
            endAngle={endAngle}
            label={option.label}
            fillColor={option.fillColor || fillColors[i % fillColors.length]}
            isHighlighted={wheelState === 'idle' && i === currentOption}
          />
        );
      }),
    [
      fillColors,
      options,
      center,
      radius,
      anglePerSector,
      currentOption,
      wheelState,
    ]
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
          }}
        />
      </div>

      <div>
        <button
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          disabled={wheelState === 'spinning' || wheelState === 'cancelling'}
          style={{
            width: '8rem',
            position: 'relative',
            textAlign: 'center',
            zIndex: 5,
            backgroundColor: isActive ? 'red' : 'white',
            transition: 'background-color 5s',
          }}
        >
          {wheelState === 'spinning'
            ? 'Spinning...'
            : wheelState === 'windingUp'
            ? 'Winding...'
            : 'Spin!'}
        </button>

        <span style={{ width: '15rem', marginLeft: '1rem' }}>
          Result:
          <b> {wheelState === 'idle' ? ` ${currentOption + 1}` : ' ?'}</b>
        </span>
      </div>
    </div>
  );
};

export default Wheel;
