// React:
import { useEffect, useState } from 'react';

export default function useFirefoxTextZoom(): boolean {
  const [isTextZoomed, setIsTextZoomed] = useState(false);

  useEffect(() => {
    const isFirefox =
      typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);

    if (!isFirefox) {
      setIsTextZoomed(false);
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsTextZoomed(false);
      return;
    }

    ctx.font = '16px monospace';
    const testText = 'MMMMMMMMMM'; // 10 wide chars — amplifies size shift
    const measuredWidth = ctx.measureText(testText).width;

    // Baseline for 16px monospace + 10 'M's is typically ~100px
    const baselineWidth = 100;
    const percentDiff = Math.abs(
      (measuredWidth - baselineWidth) / baselineWidth
    );

    const isZoomed = percentDiff > 0.05; // 5% difference threshold

    // if (import.meta.env.DEV) {
    //   console.log({
    //     measuredWidth,
    //     percentDiff,
    //     isZoomed,
    //   });
    // }

    setIsTextZoomed(isZoomed);
  }, []);

  return isTextZoomed;
}
