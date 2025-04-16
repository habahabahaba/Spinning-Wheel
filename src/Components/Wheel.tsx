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
import Arrow from './Arrow';
import ResultDisplayModal from './ResultDisplayModal';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { ModalHandle } from './Modal';
interface Outcome {
  label: string;
  fillColor?: string;
  textColor?: string;
  fontFamily?: string;
  angle?: number;
}
interface WheelProps {
  radius: number;
  outcomes: Outcome[];
  fillColors: string[];
}

const Wheel: FC<WheelProps> = ({ radius, outcomes, fillColors }) => {
  // State:
  const [currentOutcome, setCurrentOutcome] = useState<number>(0);
  const [isWinding, setIsWinding] = useState(false);
  // const [isShowingResult, setIsShowingResult] = useState(false);

  // Refs:
  const wheelRef = useRef<SVGSVGElement>(null);
  const resultModalRef = useRef<ModalHandle>(null);

  const { windUp, cancelAnimations, spin, wheelState } =
    useSpinAnimation(wheelRef);

  const center = useMemo(() => ({ x: radius, y: radius }), [radius]);

  const diameter = 2 * radius;

  const anglePerSector = 360 / outcomes.length;

  // Handlers
  function handleClick() {
    if (wheelState !== 'idle') return;
  }

  const mouseDownTimeRef = useRef<number | null>(null);

  function handleMouseDown() {
    if (wheelState !== 'idle') return;
    mouseDownTimeRef.current = Date.now();
    setIsWinding(true);
    windUp();
  }

  function handleMouseLeave() {
    if (wheelState !== 'windingUp') return;
    cancelAnimations();
    setIsWinding(false);
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
          console.log(`START callback`);
        },
        () => {
          console.log(`END callback`);
          resultModalRef.current?.handleShowModal();
        }
      );
      console.log(`[Wheel] resultingTurn: ${resultingTurn}`);
      setCurrentOutcome(
        () =>
          Math.floor(outcomes.length * (1 - resultingTurn)) % outcomes.length
      );
    }
    setIsWinding(false);
  }

  // JSX:
  const sectors = useMemo(
    () =>
      outcomes.map((outcome, i) => {
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
            label={outcome.label}
            fillColor={outcome.fillColor || fillColors[i % fillColors.length]}
            isHighlighted={wheelState === 'idle' && i === currentOutcome}
          />
        );
      }),
    [
      fillColors,
      outcomes,
      center,
      radius,
      anglePerSector,
      currentOutcome,
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

        <Arrow arrowIdx={2} />
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
            backgroundColor: isWinding ? 'red' : 'white',
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
          Result index:
          <b> {wheelState === 'idle' ? ` ${currentOutcome}` : ' ?'}</b>
        </span>
      </div>
      <ResultDisplayModal
        label={outcomes[currentOutcome]['label']}
        backgroundColor={
          outcomes[currentOutcome]['fillColor'] ||
          fillColors[currentOutcome % fillColors.length]
        }
        fontFamily={outcomes[currentOutcome]['fontFamily']}
        ref={resultModalRef}
      />
    </div>
  );
};

export default Wheel;
