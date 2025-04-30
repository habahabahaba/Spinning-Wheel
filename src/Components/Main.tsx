// Assets:
// Constants:
import { WHEEL_RADII_MAP } from '../constants/radii';
import { PALETTES } from '../constants/palettes';
// Utils:
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

const Main: FC = () => {
  // Store:
  const { outcomes, radius, default_fontFamily, default_palette_idx } =
    useBoundStore((state) => state.activeConfig);
  // State:
  const [currentOutcomeIdx, setCurrentOutcomeIdx] = useState<number>(0);

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
      const strength = Math.min(Math.ceil(heldSeconds), 5);
      mouseDownTimeRef.current = null;

      const randomTurns = +(Math.random() + strength).toFixed(2);
      console.log(`[Wheel] randomTurns: ${randomTurns}`);
      const resultingTurn = spin(
        randomTurns,
        () => {
          // console.log(`START callback`);
        },
        () => {
          // console.log(`END callback`);
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

  const wheelRadius = WHEEL_RADII_MAP[radius];

  // JSX:

  return (
    <main
      style={{
        position: 'relative',
        // height: '100vh',
        width: `${wheelRadius * 2}px`,
        minWidth: '100%',
        padding: `${wheelRadius / 5}px`,
        // overflow: 'visible',
        // boxSizing: 'content-box',
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
        id='wheel-pointer-assembly'
        style={{
          width: 'fit-content',
          position: 'relative',
          border: '1px solid black',
          borderRadius: '50%',
          boxShadow: '0px 0px 10px 0px black',
        }}
      >
        <Wheel
          radius={wheelRadius}
          outcomes={outcomes}
          fillColors={PALETTES[default_palette_idx]}
          fontFamily={default_fontFamily}
          wheelRef={wheelRef}
          currentOutcomeIdx={wheelState === 'idle' ? currentOutcomeIdx : null}
        />
        <Arrow size={wheelRadius / 6} arrowIdx={0} />
        <SpinButton
          fillColors={PALETTES[default_palette_idx]}
          wheelRadius={wheelRadius}
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
