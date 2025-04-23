// Assets:
import { PALETTES } from '../assets/palettes';
// Utils:
// import { createOutcomes } from '../utils/wheelConfig';
// 3rd party:
// Store:
import useWheelStore from '../store/wheelStore';
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

// const outcomes1 = createOutcomes(2, (i) => (`Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`
// ));
// const outcomes2 = createOutcomes(22, (i) => (`Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`
// ));
// const outcomes3 = createOutcomes(72, (i) => (`Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`
// ));
// const outcomes4 = createOutcomes(7, (i) => (`Outcome-${i + 1}-x`
// ));
// const outcomes5 = createOutcomes(22, (i) => (`Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`
// ));
// const outcomes6 = createOutcomes(72, (i) => `Outcome ${i + 1}`);

const WHEEL_RADIUS = 360;

const Main: FC = () => {
  // Store:
  const { outcomes, default_fontFamily, default_palette_idx } = useWheelStore(
    (state) => state.activeConfig
  );
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
          Math.floor(outcomes.length * (1 - resultingTurn)) % outcomes.length
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
          outcomes={outcomes}
          fillColors={PALETTES[default_palette_idx]}
          fontFamily={default_fontFamily}
          wheelRef={wheelRef}
          currentOutcome={wheelState === 'idle' ? currentOutcome : null}
        />
        <Arrow arrowIdx={1} />
        <SpinButton
          fillColors={PALETTES[default_palette_idx]}
          wheelRadius={WHEEL_RADIUS}
          wheelState={wheelState}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        />
        <ResultDisplayModal
          label={outcomes[currentOutcome]['label']}
          backgroundColor={
            outcomes[currentOutcome]['fillColor'] ||
            PALETTES[default_palette_idx][
              currentOutcome % PALETTES[default_palette_idx].length
            ]
          }
          fontFamily={outcomes[currentOutcome]['fontFamily']}
          ref={resultModalRef}
        />
      </div>
    </main>
  );
};

export default Main;
