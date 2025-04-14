// React:
import { useCallback, useEffect, useRef, useState } from 'react';

// Types, interfaces and enumns:
import type { RefObject } from 'react';
type WheelState = 'idle' | 'windingUp' | 'cancellingWindUp' | 'spinning';

export function useSpinAnimation(
  ref: RefObject<HTMLElement | SVGSVGElement | null>
) {
  // Refs:
  const spinStyleTagRef = useRef<HTMLStyleElement | null>(null);
  const windUpStyleTagRef = useRef<HTMLStyleElement | null>(null);
  const windUpNameRef = useRef<string>('');
  const resultingTurnRef = useRef(0); // Persistent total turns
  // State:
  const [wheelState, setWheelState] = useState<WheelState>('idle');

  const spin = useCallback(
    (numberOfTurns: number) => {
      console.log(`[useSpinAnimation][spin] numberOfTurns: ${numberOfTurns}`);

      const el = ref.current;
      if (!el || numberOfTurns === 0) return 0;

      const duration = 3 * numberOfTurns + 1; // seconds
      const animationName = `spin-${Date.now()}`;

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
          animation: ${animationName} ${duration}s cubic-bezier(0.01, 0.5, 0.4, 0.99) forwards;
        }
      `;
      document.head.appendChild(style);
      spinStyleTagRef.current = style;

      setWheelState('spinning');

      // Apply animation class
      el.classList.add(animationName);

      const resultingTurn =
        Math.round(
          ((((resultingTurnRef.current + numberOfTurns) % 1) + 1) % 1) * 100
        ) / 100;

      setTimeout(() => {
        // Remove animation class & persist final transform
        if (el.classList.contains(windUpNameRef.current)) {
          console.log(
            `[useSpinAnimation][spin] el.classList.contains(windUpNameRef.current: ${el.classList.contains(
              windUpNameRef.current
            )}`
          );
          el.classList.remove(windUpNameRef.current);
          windUpNameRef.current = '';
        }
        el.classList.remove(animationName);
        resultingTurnRef.current = resultingTurn;
        el.style.transform = `rotate(${resultingTurn}turn)`;

        setTimeout(() => {
          setWheelState('idle');
        }, 5); // 5ms delay to ensure it's finished
      }, duration * 1000);

      return resultingTurn;
    },
    [ref]
  );

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
            transform: rotate(${resultingTurnRef.current + -0.25}turn);
          }
        }

        .${animationName} {
          animation: ${animationName} 5s steps(25, end) forwards;
        }
      `;

    document.head.appendChild(style);
    windUpStyleTagRef.current = style;

    // setIsSpinning(true);

    // Apply animation class
    el.classList.add(animationName);
  }, [ref, wheelState]);

  const cancelWindUp = useCallback(() => {
    const el = ref.current;
    if (!el || wheelState !== 'windingUp') return;
    setWheelState('cancellingWindUp');
    if (windUpStyleTagRef.current) {
      document.head.removeChild(windUpStyleTagRef.current);
      windUpStyleTagRef.current = null;
    }
    if (windUpNameRef.current) {
      el.classList.remove(windUpNameRef.current);
      windUpNameRef.current = '';
    }
    setWheelState('idle');
  }, [ref, wheelState]);

  useEffect(() => {
    return () => {
      if (spinStyleTagRef.current) {
        document.head.removeChild(spinStyleTagRef.current);
      }
      if (windUpStyleTagRef.current) {
        document.head.removeChild(windUpStyleTagRef.current);
      }
    };
  }, []);

  return { windUp, cancelWindUp, spin, wheelState };
}
