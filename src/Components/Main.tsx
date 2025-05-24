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
import useSpinAnimation from '../hooks/useSpinAnimation';
// Components:
import Wheel from './Wheel/Wheel';
import Arrow from './Wheel/Arrow';
import SpinButton from './Wheel/SpinButton';
import ResultDisplayDialog from './Dialogs/ResultDisplayDialog';

// CSS:
import styles from './Main.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { DialogHandle } from './UI/Dialog';

const Main: FC = () => {
  // Store:
  const radiusName = useBoundStore((state) => state.activeConfig.radiusName);
  const wheelAnimationState = useBoundStore(
    (state) => state.wheelAnimationState
  );

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
  const resultDialogRef = useRef<DialogHandle>(null);
  const randomRef = useRef<number>(0);
  const mouseDownTimeRef = useRef<number | null>(null);
  const windUpTimerRef = useRef<number | null>(null);

  const { windUp, cancelAnimations, spin } = useSpinAnimation(
    wheelRef,
    wheelAnimationState,
    setWheelAnimationState
  );

  // Handlers

  function handleClick() {
    if (wheelAnimationState !== 'idle') return;
  }

  function handleMouseDown() {
    if (wheelAnimationState !== 'idle') return;
    resetWinningOutcomeIdx();
    // Generate random number beforehand.
    randomRef.current = Math.random();
    // Start counting wind-up time.
    mouseDownTimeRef.current = Date.now();

    if (windUpTimerRef.current) {
      clearTimeout(windUpTimerRef.current);
    }
    windUpTimerRef.current = setTimeout(() => {
      windUp();
    }, 150);
  }

  function handleMouseLeave() {
    if (wheelAnimationState !== 'windingUp') return;
    cancelAnimations();

    if (windUpTimerRef.current) {
      clearTimeout(windUpTimerRef.current);
    }
  }

  function handleMouseUp() {
    if (windUpTimerRef.current) {
      clearTimeout(windUpTimerRef.current);
    }
    resetWinningOutcomeIdx();

    const startTime = mouseDownTimeRef.current;
    if (
      wheelAnimationState !== 'spinning' &&
      wheelAnimationState !== 'cancelling' &&
      startTime
    ) {
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
          resultDialogRef.current?.handleShowDialog();
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
        padding: `${wheelRadius / 5}px`,
      }}
      className={styles.main}
    >
      <div
        id='wheel-arrow-assembly'
        style={{
          width: 'fit-content',
          position: 'relative',
          borderRadius: '50%',
        }}
        className={styles.wheel_arrow_container}
      >
        <Wheel
          radius={wheelRadius}
          wheelAnimationState={wheelAnimationState}
          wheelRef={wheelRef}
        />
        <Arrow size={wheelRadius / 6} />
        <SpinButton
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <ResultDisplayDialog ref={resultDialogRef} />
    </main>
  );
};

export default Main;
