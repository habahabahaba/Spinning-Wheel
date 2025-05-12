// Assets:
// Constants:
import { WHEEL_RADII_MAP } from '../constants/radii';
// Utils:
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
import { useRef } from 'react';
// Context:
// Hooks:
import { useSpinAnimation } from '../hooks/useSpinAnimation';
// Components:
import Wheel from './Wheel/Wheel';
import Arrow from './Wheel/Arrow';
import SpinButton from './Wheel/SpinButton';
import ResultDisplayModal from './Dialogs/ResultDisplayDialog';
// import Wallpaper from './UI/Wallpaper';
// import ConfettiCanvas from './ConfettiCanvas';
// import Modal from './Modal';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { DialogHandle } from './UI/Dialog';

const Main: FC = () => {
  // Store:
  const radiusName = useBoundStore((state) => state.activeConfig.radiusName);
  const wheelAnimationState = useBoundStore(
    (state) => state.wheelAnimationState
  );
  // const winningOutcomeIdx = useBoundStore((state) => state.winningOutcomeIdx);

  // Actions:
  const setWheelAnimationState = useBoundStore(
    (state) => state.setWheelAnimationState
  );
  const setWinningOutcomeIdxFromTurn = useBoundStore(
    (state) => state.setWinningOutcomeIdxFromTurn
  );
  const resetWinningOutcomeIdx = useBoundStore(
    (state) => state.resetWinningOutcomeIdx
  );

  // Refs:
  const wheelRef = useRef<SVGSVGElement>(null);
  const resultModalRef = useRef<DialogHandle>(null);
  const randomRef = useRef<number>(0);

  const { windUp, cancelAnimations, spin } = useSpinAnimation(
    wheelRef,
    wheelAnimationState,
    setWheelAnimationState
  );

  // Handlers
  function handleClick() {
    if (wheelAnimationState !== 'idle') return;
  }

  const mouseDownTimeRef = useRef<number | null>(null);

  function handleMouseDown() {
    if (wheelAnimationState !== 'idle') return;
    mouseDownTimeRef.current = Date.now();

    // Generate random number beforehand.
    randomRef.current = Math.random();

    windUp();
  }

  function handleMouseLeave() {
    if (wheelAnimationState !== 'windingUp') return;
    cancelAnimations();
    // setIsWinding(false);
  }

  function handleMouseUp() {
    resetWinningOutcomeIdx();

    const startTime = mouseDownTimeRef.current;
    if (startTime && wheelAnimationState === 'windingUp') {
      const heldSeconds = (Date.now() - startTime) / 1000;
      const strength = Math.min(Math.ceil(heldSeconds), 5);
      mouseDownTimeRef.current = null;

      const randomTurns = +(randomRef.current + strength).toFixed(2);
      // console.log(`[Wheel] randomTurns: ${randomTurns}`);

      const resultingTurn = spin(
        randomTurns,
        () => {
          // console.log(`START callback`);
        },
        () => {
          // console.log(`END callback`);
          resultModalRef.current?.handleShowDialog();
        }
      );
      // console.log(`[Wheel] resultingTurn: ${resultingTurn}`);
      setWinningOutcomeIdxFromTurn({ resultingTurn });
    }
    // setIsWinding(false);
  }

  const wheelRadius = WHEEL_RADII_MAP[radiusName];

  // JSX:

  return (
    <main
      style={{
        position: 'relative',
        // height: '100vh',
        // width: `${wheelRadius * 2}px`,
        // minWidth: '100%',
        padding: `${wheelRadius / 5}px`,
        overflow: 'visible',
        // boxSizing: 'content-box',
        // margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        id='wheel-arrow-assembly'
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
          wheelAnimationState={wheelAnimationState}
          wheelRef={wheelRef}
        />
        <Arrow size={wheelRadius / 6} arrowIdx={0} />
        <SpinButton
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <ResultDisplayModal ref={resultModalRef} />
    </main>
  );
};

export default Main;
