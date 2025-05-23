// React:
import { useCallback, useEffect, useRef } from 'react';

// Types, interfaces and enumns:
import type { RefObject } from 'react';
import type { WheelAnimationState } from '../store/types';
// type WheelState = 'idle' | 'windingUp' | 'cancelling' | 'spinning';
interface AddAnimationOptions {
  element: HTMLElement | SVGSVGElement | null;
  styleTagRef: RefObject<HTMLStyleElement | null>;
  animationNameRef: RefObject<string>;
  styleFn: (animationName: string) => string;
}
interface RemoveAnimationOptions {
  element: HTMLElement | SVGSVGElement | null;
  styleTagRef: RefObject<HTMLStyleElement | null>;
  animationNameRef: RefObject<string>;
}

// Animation Helper Functions:
function addAnimation(options: AddAnimationOptions): void {
  const el = options.element;
  if (!el) return;

  const { styleTagRef, animationNameRef, styleFn } = options;

  if (styleTagRef.current) {
    document.head.removeChild(styleTagRef.current);
    styleTagRef.current = null;
  }
  if (animationNameRef.current) {
    el.classList.remove(animationNameRef.current);
    animationNameRef.current = '';
  }

  const animationName = `windUp-${Date.now()}`;
  animationNameRef.current = animationName;
  // console.log(
  //   `[useSpinAnimation][addAnimation] animationNameRef.current: ${animationNameRef.current}`
  // );

  const style = document.createElement('style');
  style.innerHTML = styleFn(animationName);

  document.head.appendChild(style);
  styleTagRef.current = style;

  // Apply animation class
  el.classList.add(animationName);
}
function removeAnimation(options: RemoveAnimationOptions): void {
  const el = options.element;
  if (!el) return;

  const { styleTagRef, animationNameRef } = options;

  if (styleTagRef.current) {
    document.head.removeChild(styleTagRef.current);
    styleTagRef.current = null;
  }
  if (animationNameRef.current) {
    el.classList.remove(animationNameRef.current);
    animationNameRef.current = '';
  }
}

// CONSTANTS:
const MAX_WINDUP_TIME = 5;
const MAX_WINDUP_TURN = -0.25;
const WINDUP_ANIMATION_TIMING = `steps(25, end)`;
const SPIN_ANIMATION_TIMING = `cubic-bezier(0.01, 0.5, 0.4, 0.99)`;
const spinVelocity = (numberOfTurns: number) => {
  if (numberOfTurns <= 0) return 0;
  return numberOfTurns * 3 + 1;
};

export default function useSpinAnimation(
  ref: RefObject<HTMLElement | SVGSVGElement | null>,
  wheelAnimationState: WheelAnimationState,
  setWheelAnimationState: ({
    newState,
  }: {
    newState: WheelAnimationState;
  }) => void
) {
  // Refs:
  const spinStyleTagRef = useRef<HTMLStyleElement | null>(null);
  const spinNameRef = useRef<string>('');
  const windUpStyleTagRef = useRef<HTMLStyleElement | null>(null);
  const windUpNameRef = useRef<string>('');
  const resultingTurnRef = useRef(0);
  // State:

  const windUp = useCallback(
    (onWindUpStart?: () => void) => {
      const el = ref.current;
      if (!el || wheelAnimationState !== 'idle') return;
      setWheelAnimationState({ newState: 'windingUp' });
      // Run callback (if provided):
      onWindUpStart?.();

      addAnimation({
        element: el,
        styleTagRef: windUpStyleTagRef,
        animationNameRef: windUpNameRef,
        styleFn: (animationName) => `
        @keyframes ${animationName} {
          to {
            transform: rotate(${
              resultingTurnRef.current + MAX_WINDUP_TURN
            }turn);
            filter: brightness(0.6) contrast(1.7) grayscale(100%);
          }
        }

        .${animationName} {
          animation: ${animationName} ${MAX_WINDUP_TIME}s ${WINDUP_ANIMATION_TIMING} forwards;
        }
      `,
      });
    },
    [ref, wheelAnimationState, setWheelAnimationState]
  );

  const cancelAnimations = useCallback(
    (onCancel?: () => void) => {
      const el = ref.current;
      if (!el) return;
      setWheelAnimationState({ newState: 'cancelling' });
      // Run callback (if provided):
      onCancel?.();

      removeAnimation({
        element: el,
        styleTagRef: windUpStyleTagRef,
        animationNameRef: windUpNameRef,
      });
      removeAnimation({
        element: el,
        styleTagRef: spinStyleTagRef,
        animationNameRef: spinNameRef,
      });

      setWheelAnimationState({ newState: 'idle' });
    },
    [ref, setWheelAnimationState]
  );

  const spin = useCallback(
    (
      numberOfTurns: number,
      onSpinStart?: () => void,
      onSpinEnd?: () => void
    ) => {
      // console.log(`[useSpinAnimation][spin] numberOfTurns: ${numberOfTurns}`);
      const el = ref.current;
      if (!el || numberOfTurns === 0) return 0;
      if (wheelAnimationState !== 'idle' && wheelAnimationState !== 'windingUp')
        return 0;

      setWheelAnimationState({ newState: 'spinning' });

      // Run callback (if provided):
      onSpinStart?.();

      const duration = spinVelocity(numberOfTurns); // seconds

      addAnimation({
        element: el,
        styleTagRef: spinStyleTagRef,
        animationNameRef: spinNameRef,
        styleFn: (animationName) => `
        @keyframes ${animationName} {
          to {
            transform: rotate(${resultingTurnRef.current + numberOfTurns}turn);
          }
        }

        .${animationName} {
          animation: ${animationName} ${duration}s ${SPIN_ANIMATION_TIMING} forwards;
        }
      `,
      });

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

        setWheelAnimationState({ newState: 'idle' });
        // Run callback (if provided):
        onSpinEnd?.();
      }, duration * 1000);

      return resultingTurn;
    },
    [ref, cancelAnimations, wheelAnimationState, setWheelAnimationState]
  );

  useEffect(() => {
    return () => {
      cancelAnimations();
    };
  }, [cancelAnimations]);

  return { windUp, cancelAnimations, spin };
}
