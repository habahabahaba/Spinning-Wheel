// hooks/useFirefoxZoomFactor.ts
import { useEffect, useState, useRef } from 'react';

const isFirefox = CSS.supports('-moz-appearance:none');

const DEBOUNCE_TIME_MS = 100;

let sharedTestElement: HTMLDivElement | null = null;
let activeInstanceCount = 0;

function createTestElement(): HTMLDivElement {
  const el = document.createElement('div');
  el.style.cssText = `
    position: absolute;
    visibility: hidden;
    height: 0;
    font-size: 16px;
    pointer-events: none;
  `;
  el.textContent = 'X';
  document.body.appendChild(el);
  return el;
}

function getZoomFactor(el: HTMLDivElement): number {
  const rawFactor = el.getBoundingClientRect().height / 16;
  return Math.round(rawFactor);
}

export default function useFirefoxTextScale(): number | false {
  const [zoomFactor, setZoomFactor] = useState(1);
  const testElementRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<undefined | number>(); // Using requestAnimationFrame

  useEffect(() => {
    if (!CSS.supports('-moz-appearance:none')) return;

    // Create test element
    if (!testElementRef.current) {
      testElementRef.current = document.createElement('div');
      testElementRef.current.style.cssText = `
        position: absolute;
        visibility: hidden;
        height: 0;
        font-size: 16px;
        pointer-events: none;
        contain: strict; // Prevents layout thrashing
      `;
      testElementRef.current.textContent = 'X';
      document.body.appendChild(testElementRef.current);
    }

    const measure = () => {
      // Double-check element existence
      if (
        !testElementRef.current ||
        !document.body.contains(testElementRef.current)
      ) {
        return 1; // Fallback
      }

      const height = testElementRef.current.getBoundingClientRect().height;
      return height > 0 ? Math.round((height / 16) * 100) / 100 : 1;
    };

    const checkZoom = () => {
      rafRef.current = requestAnimationFrame(() => {
        setZoomFactor(measure());
        rafRef.current = undefined;
      });
    };

    // Initial measurement with DOM readiness check
    const init = () => {
      if (document.readyState === 'complete') {
        checkZoom();
      } else {
        window.addEventListener('load', checkZoom, { once: true });
      }
    };
    init();

    // Observe for changes
    const observer = new ResizeObserver(checkZoom);
    observer.observe(testElementRef.current);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('load', checkZoom);
    };
  }, []);

  // return zoomFactor;

  return !isFirefox ? false : zoomFactor;
}
