// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import { useRef, useState } from 'react';
// Context:
// Hooks:
import { useSpinAnimation } from '../hooks/useSpinAnimation';
// Components:
import Wheel from './Wheel';
import Arrow from './Arrow';
import SpinButton from './SpinButton';
import ResultDisplayModal from './ResultDisplayModal';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { ModalHandle } from './Modal';
export interface Outcome {
  label: string;
  fillColor?: string;
  textColor?: string;
  fontFamily?: string;
  angle?: number;
}
// const outcomes1 = createOutcomes(2, (i) => ({
//   label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
// }));
// const outcomes2 = createOutcomes(22, (i) => ({
//   label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
// }));
// const outcomes3 = createOutcomes(72, (i) => ({
//   label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
// }));
// const outcomes4 = createOutcomes(7, (i) => ({
//   label: `Outcome-${i + 1}-x`,
// }));
// const outcomes5 = createOutcomes(22, (i) => ({
//   label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
// }));
const outcomes6 = createOutcomes(72, (i) => ({
  label: `Outcome-${i + 1}`,
}));

const FILL_COLORS = ['#e6b89c', '#fe938c', '#ead2ac', '#9cafb7'];

const WHEEL_RADIUS = 360;

function createOutcomes(
  quantity: number,
  labelFn: (i: number) => Outcome
): Outcome[] {
  return new Array(quantity).fill(0).map((_, i) => labelFn(i));
}
const Main: FC = () => {
  // State:
  const [currentOutcome, setCurrentOutcome] = useState<number>(0);

  // const [isShowingResult, setIsShowingResult] = useState(false);

  // Refs:
  const wheelRef = useRef<SVGSVGElement>(null);
  const resultModalRef = useRef<ModalHandle>(null);

  const { windUp, cancelAnimations, spin, wheelState } =
    useSpinAnimation(wheelRef);

  // Handlers
  function handleClick() {
    if (wheelState !== 'idle') return;
  }

  const mouseDownTimeRef = useRef<number | null>(null);

  function handleMouseDown() {
    if (wheelState !== 'idle') return;
    mouseDownTimeRef.current = Date.now();
    // setIsWinding(true);
    windUp();
  }

  function handleMouseLeave() {
    if (wheelState !== 'windingUp') return;
    cancelAnimations();
    // setIsWinding(false);
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
          Math.floor(outcomes6.length * (1 - resultingTurn)) % outcomes6.length
      );
    }
    // setIsWinding(false);
  }

  // JSX:

  return (
    <main>
      <div
        style={{
          position: 'relative',
          border: '1px solid black',
          borderRadius: '50%',
          boxShadow: '0px 0px 10px 0px black',
          //   height: 'fit-content',
          //   padding: 0,
        }}
      >
        <Wheel
          radius={WHEEL_RADIUS}
          outcomes={outcomes6}
          fillColors={FILL_COLORS}
          wheelRef={wheelRef}
        />
        <Arrow arrowIdx={1} />
        <SpinButton
          fillColors={FILL_COLORS}
          wheelRadius={WHEEL_RADIUS}
          wheelState={wheelState}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        />
        <ResultDisplayModal
          label={outcomes6[currentOutcome]['label']}
          backgroundColor={
            outcomes6[currentOutcome]['fillColor'] ||
            FILL_COLORS[currentOutcome % FILL_COLORS.length]
          }
          fontFamily={outcomes6[currentOutcome]['fontFamily']}
          ref={resultModalRef}
        />
      </div>
    </main>
  );
};

export default Main;
