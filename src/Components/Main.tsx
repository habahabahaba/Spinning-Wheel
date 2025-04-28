// Assets:
import { PALETTES } from '../constants/palettes';
// Utils:
// import { createOutcomes } from '../utils/wheelConfig';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
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
import Wallpaper from './Wallpaper';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { ModalHandle } from './Modal';

const WHEEL_RADIUS = 360;

const Main: FC = () => {
  // Store:
  const { outcomes, default_fontFamily, default_palette_idx } = useBoundStore(
    (state) => state.activeConfig
  );
  // State:
  const [currentOutcomeIdx, setCurrentOutcomeIdx] = useState<number>(0);

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
      setCurrentOutcomeIdx(
        () =>
          Math.floor(outcomes.length * (1 - resultingTurn)) % outcomes.length
      );
    }
    // setIsWinding(false);
  }

  // JSX:

  return (
    <main
      style={{
        // height: '100vh',
        width: 'auto',
        padding: '2rem',
        position: 'relative',
      }}
    >
      <Wallpaper
        variant={0}
        paletteColor1={1}
        paletteColor2={2}
        style={{
          opacity: '0.8',
        }}
      />

      <div
        style={{
          width: 'fit-content',
          position: 'relative',
          border: '1px solid black',
          borderRadius: '50%',
          boxShadow: '0px 0px 10px 0px black',
        }}
      >
        <Wheel
          radius={WHEEL_RADIUS}
          outcomes={outcomes}
          fillColors={PALETTES[default_palette_idx]}
          fontFamily={default_fontFamily}
          wheelRef={wheelRef}
          currentOutcomeIdx={wheelState === 'idle' ? currentOutcomeIdx : null}
        />
        <Arrow size={WHEEL_RADIUS / 6} arrowIdx={0} />
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
          currentOutcomeIdx={currentOutcomeIdx}
          ref={resultModalRef}
        />
      </div>
    </main>
  );
};

export default Main;
