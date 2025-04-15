// React:
import { useCallback, useEffect, useRef, useState } from 'react';

// Types, interfaces and enumns:
import type { RefObject } from 'react';
type WheelState = 'idle' | 'windingUp' | 'cancelling' | 'spinning';

// CONSTANTS:
const MAX_WINDUP_TIME = 5;
const MAX_WINDUP_TURN = -0.25;
const WINDUP_ANIMATION_TIMING = `steps(25, end)`;
const SPIN_ANIMATION_TIMING = `cubic-bezier(0.01, 0.5, 0.4, 0.99)`;
const spinVelocity = (numberOfTurns: number) => {
  if (numberOfTurns <= 0) return 0;
  return numberOfTurns * 3 + 1;
};

export function useSpinAnimation(
  ref: RefObject<HTMLElement | SVGSVGElement | null>
) {
  // Refs:
  const spinStyleTagRef = useRef<HTMLStyleElement | null>(null);
  const spinUpNameRef = useRef<string>('');
  const windUpStyleTagRef = useRef<HTMLStyleElement | null>(null);
  const windUpNameRef = useRef<string>('');
  const resultingTurnRef = useRef(0); // Persistent total turns
  // State:
  const [wheelState, setWheelState] = useState<WheelState>('idle');

  const windUp = useCallback(() => {
    const el = ref.current;
    if (!el || wheelState !== 'idle') return;
    setWheelState('windingUp');
    // Clean up old style
    if (windUpStyleTagRef.current) {
      document.head.removeChild(windUpStyleTagRef.current);
      windUpStyleTagRef.current = null;
    }
    if (windUpNameRef.current) {
      el.classList.remove(windUpNameRef.current);
      windUpNameRef.current = '';
    }

    const animationName = `windUp-${Date.now()}`;
    windUpNameRef.current = animationName;
    console.log(
      `[useSpinAnimation][windUp] windUpNameRef.current: ${windUpNameRef.current}`
    );

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes ${animationName} {
          to {
            transform: rotate(${
              resultingTurnRef.current + MAX_WINDUP_TURN
            }turn);
          }
        }

        .${animationName} {
          animation: ${animationName} ${MAX_WINDUP_TIME}s ${WINDUP_ANIMATION_TIMING} forwards;
        }
      `;

    document.head.appendChild(style);
    windUpStyleTagRef.current = style;

    // setIsSpinning(true);

    // Apply animation class
    el.classList.add(animationName);
  }, [ref, wheelState]);

  const cancelAnimations = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setWheelState('cancelling');
    if (windUpStyleTagRef.current) {
      document.head.removeChild(windUpStyleTagRef.current);
      windUpStyleTagRef.current = null;
    }
    if (windUpNameRef.current) {
      el.classList.remove(windUpNameRef.current);
      windUpNameRef.current = '';
    }
    if (spinStyleTagRef.current) {
      document.head.removeChild(spinStyleTagRef.current);
      spinStyleTagRef.current = null;
    }
    if (spinUpNameRef.current) {
      el.classList.remove(spinUpNameRef.current);
      spinUpNameRef.current = '';
    }
    setWheelState('idle');
  }, [ref]);

  const spin = useCallback(
    (
      numberOfTurns: number,
      onSpinStart?: () => void,
      onSpinEnd?: () => void
    ) => {
      console.log(`[useSpinAnimation][spin] numberOfTurns: ${numberOfTurns}`);
      onSpinStart?.();
      const el = ref.current;
      if (!el || numberOfTurns === 0) return 0;

      const duration = spinVelocity(numberOfTurns); // seconds
      const animationName = `spin-${Date.now()}`;
      spinUpNameRef.current = animationName;

      // Clean up old style
      if (spinStyleTagRef.current) {
        document.head.removeChild(spinStyleTagRef.current);
      }

      const style = document.createElement('style');

      style.innerHTML = `
        @keyframes ${animationName} {
          to {
            transform: rotate(${resultingTurnRef.current + numberOfTurns}turn);
          }
        }

        .${animationName} {
          animation: ${animationName} ${duration}s ${SPIN_ANIMATION_TIMING} forwards;
        }
      `;
      document.head.appendChild(style);
      spinStyleTagRef.current = style;

      setWheelState('spinning');

      // Apply animation class
      el.classList.add(animationName);

      // Calculate the final turn (angle):
      const resultingTurn =
        Math.round(
          ((((resultingTurnRef.current + numberOfTurns) % 1) + 1) % 1) * 100
        ) / 100;

      setTimeout(() => {
        // Remove animation class & persist final transform
        cancelAnimations();
        resultingTurnRef.current = resultingTurn;
        el.style.transform = `rotate(${resultingTurn}turn)`;
        onSpinEnd?.();
      }, duration * 1000);

      return resultingTurn;
    },
    [ref, cancelAnimations]
  );

  useEffect(() => {
    return () => {
      cancelAnimations();
    };
  }, [cancelAnimations]);

  return { windUp, cancelAnimations, spin, wheelState };
}
