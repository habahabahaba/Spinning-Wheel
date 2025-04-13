// React:
import { useCallback, useEffect, useRef, useState } from 'react';

// Types, interfaces and enumns:
import type { RefObject } from 'react';

export function useSpinAnimation(
  ref: RefObject<HTMLElement | SVGSVGElement | null>
) {
  const styleTagRef = useRef<HTMLStyleElement | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const resultingTurnRef = useRef(0); // Persistent total turns

  const spin = useCallback(
    (numberOfTurns: number) => {
      console.log(`[useSpinAnimation][spin] numberOfTurns: ${numberOfTurns}`);

      const el = ref.current;
      if (!el || numberOfTurns === 0) return 0;

      const duration = 3 * numberOfTurns + 1; // seconds
      const animationName = `spin-${Date.now()}`;

      // Clean up old style
      if (styleTagRef.current) {
        document.head.removeChild(styleTagRef.current);
      }

      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes ${animationName} {
          0%{
            transform: rotate(${resultingTurnRef.current}turn);
            animation-timing-function: ease-out;
          }
          ${100 / duration}%{
            transform: rotate(${resultingTurnRef.current - 0.2}turn);
            animation-timing-function: cubic-bezier(0.01, 0.5, 0.4, 0.99);
          }
          100% {
            transform: rotate(${resultingTurnRef.current + numberOfTurns}turn);
          }
        }

        .${animationName} {
          animation: ${animationName} ${duration}s forwards;
        }
      `;
      document.head.appendChild(style);
      styleTagRef.current = style;

      setIsSpinning(true);

      // Apply animation class
      el.classList.add(animationName);

      const resultingTurn =
        Math.round(
          ((((resultingTurnRef.current + numberOfTurns) % 1) + 1) % 1) * 100
        ) / 100;

      setTimeout(() => {
        // Remove animation class & persist final transform
        el.classList.remove(animationName);
        resultingTurnRef.current = resultingTurn;
        el.style.transform = `rotate(${resultingTurn}turn)`;

        setTimeout(() => {
          setIsSpinning(false);
        }, 5); // 5ms delay to ensure it's finished
      }, duration * 1000);

      return resultingTurn;
    },
    [ref]
  );

  useEffect(() => {
    return () => {
      if (styleTagRef.current) {
        document.head.removeChild(styleTagRef.current);
      }
    };
  }, []);

  return { spin, isSpinning };
}
