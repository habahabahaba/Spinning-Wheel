import { useCallback, useEffect, useRef, useState } from 'react';

// Types, interfaces and enumns:
import type { RefObject } from 'react';
interface SpinOptions {
  easing?: string;
}

export function useSpinAnimation(
  ref: RefObject<HTMLElement | SVGSVGElement | null>
) {
  const styleTagRef = useRef<HTMLStyleElement | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const accumulatedTurnsRef = useRef(0); // Persistent total turns

  const spin = useCallback(
    (numberOfTurns: number, options: SpinOptions = {}) => {
      const el = ref.current;
      if (!el || numberOfTurns === 0) return 0;

      const { easing = '' } = options;
      //   const { easing = 'cubic-bezier(0.34, 1.56, 0.64, 1)' } = options;

      const duration = 2 * numberOfTurns; // seconds
      const animationName = `spin-${Date.now()}`;

      // Clean up old style
      if (styleTagRef.current) {
        document.head.removeChild(styleTagRef.current);
      }

      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes ${animationName} {
          from {
            transform: rotate(${accumulatedTurnsRef.current}turn);
          }
          to {
            transform: rotate(${
              accumulatedTurnsRef.current + numberOfTurns
            }turn);
          }
        }

        .${animationName} {
          animation: ${animationName} ${duration}s ${easing} forwards;
        }
      `;
      document.head.appendChild(style);
      styleTagRef.current = style;

      // Apply animation class
      el.classList.add(animationName);

      setIsSpinning(true);

      const accumulatedTurns =
        (accumulatedTurnsRef.current + numberOfTurns) % 1;

      setTimeout(() => {
        // Remove animation class & persist final transform
        el.classList.remove(animationName);
        accumulatedTurnsRef.current += accumulatedTurns;
        el.style.transform = `rotate(${accumulatedTurns}turn)`;

        setTimeout(() => {
          setIsSpinning(false);
        }, 5); // 5ms delay to ensure it's finished
      }, duration * 1000);

      return accumulatedTurns;
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
