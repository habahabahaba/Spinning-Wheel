// Constants:
// Utils:
// 3rd party:
// Store:
// React Router:
// React:
import { useEffect, useRef } from 'react';
// Context:
// Hooks:
// Components:
import ConfettiCanvas from './ConfettiCanvas';
// CSS:
// Types, interfaces and enumns:
import type { FC, CSSProperties } from 'react';
import type { HexColor } from '../../utils/color';
import type { ConfettiOptions } from '../../hooks/useConfetti';
interface ConfettiArrayProps {
  delayMs?: number;
  colors: HexColor[];
}

// To trigger confetti with the delay:
const CONFETTI_DELAYS = [350, 250, 125];
function chainTrigger(
  triggerFnArr: Array<(() => void) | undefined>,
  delayMsArr: Array<number>,
  step: number = 0
): void {
  if (step >= triggerFnArr.length) return;

  const trigger = triggerFnArr[step];
  const delay = delayMsArr[step] || delayMsArr[delayMsArr.length - 1] || 0;
  if (trigger) {
    setTimeout(() => {
      trigger();
      chainTrigger(triggerFnArr, delayMsArr, ++step);
    }, delay);
  }
}

const ConfettiArray: FC<ConfettiArrayProps> = ({ delayMs = 0, colors }) => {
  // Refs:
  const triggerArrayRef = useRef<Array<(() => void) | undefined>>([]);

  // Confetti chain:
  useEffect(() => {
    if (triggerArrayRef.current && triggerArrayRef.current.length) {
      chainTrigger(triggerArrayRef.current, [delayMs, ...CONFETTI_DELAYS]);
    }
  }, [triggerArrayRef, delayMs]);

  // Derived values:
  const [canvasHeight, canvasWidth] = [100, 100];

  const commonStyle: CSSProperties = {
    // position: 'absolute',
    // height: `${canvasHeight}vh`,
    // width: `${canvasWidth}vw`,
    // transform: 'none',
  };

  const commonOptions: ConfettiOptions = {
    colors,
    particleCount: 320,
    spread: 60,
    scalar: 1.2,
    gravity: 0.2,
    ticks: 200,
    // wind: 5,
  };

  // JSX:
  return (
    <>
      <ConfettiCanvas
        ref={(handle) => {
          triggerArrayRef.current[0] = handle?.launch;
        }}
        confettiOptions={{
          ...commonOptions,
          // direction: 'N',
          shape: 'circle',
        }}
        style={{
          ...commonStyle,
          top: `${canvasHeight * -0.5}vh`,
          left: `${canvasWidth * -0.5}vw`,
        }}
      />
      <ConfettiCanvas
        ref={(handle) => {
          triggerArrayRef.current[1] = handle?.launch;
        }}
        confettiOptions={{
          ...commonOptions,
          //   direction: 'N',
          shape: 'triangle',
        }}
        style={{
          ...commonStyle,
          top: `${canvasHeight * -0.5}vh`,
          left: `calc(100% - ${canvasWidth * 0.5}vw)`,
        }}
      />
      <ConfettiCanvas
        ref={(handle) => {
          triggerArrayRef.current[2] = handle?.launch;
        }}
        confettiOptions={{
          ...commonOptions,
          //   direction: 'NE',
          shape: 'circle',
        }}
        style={{
          ...commonStyle,
          top: `calc(100% - ${canvasHeight * 0.5}vh)`,
          left: `calc(100% - ${canvasWidth * 0.5}vw)`,
        }}
      />
      <ConfettiCanvas
        ref={(handle) => {
          triggerArrayRef.current[3] = handle?.launch;
        }}
        confettiOptions={{
          ...commonOptions,
          //   direction: 'NW',
          shape: 'triangle',
        }}
        style={{
          ...commonStyle,
          top: `calc(100% - ${canvasHeight * 0.5}vh)`,
          left: `${canvasWidth * -0.5}vw`,
        }}
      />
    </>
  );
};

export default ConfettiArray;
