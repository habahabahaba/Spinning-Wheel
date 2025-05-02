// Constants:
// Utils:
// 3rd party:
// Store:
// React Router:
// React:
import { useEffect, useState } from 'react';
// Context:
// Hooks:
// Components:
import ConfettiCanvas from './ConfettiCanvas';
// CSS:
// Types, interfaces and enumns:
import type { FC, Dispatch, SetStateAction, CSSProperties } from 'react';
import type { HexColor } from '../utils/color';
import type { ConfettiOptions } from '../hooks/useConfetti';
export interface ConfettiArrayProps {
  confettiTrigger: boolean;
  colors: HexColor[];
}
type Setter = Dispatch<SetStateAction<boolean>>;

function chainFlip(
  settersArr: Setter[],
  interval: number = 180,
  step: number = 0
): void {
  if (step === settersArr.length) {
    settersArr[step - 1]((state) => !state);
    return;
  }
  settersArr[step]((state) => !state);
  setTimeout(() => {
    chainFlip(
      settersArr,
      interval - interval / (settersArr.length - step),
      step + 1
    );
  }, interval);
  if (step > 0) {
    settersArr[step - 1]((state) => !state);
  }
}

const ConfettiArray: FC<ConfettiArrayProps> = ({ confettiTrigger, colors }) => {
  // State:
  const [trigger0, setTrigger0] = useState<boolean>(false);
  const [trigger1, setTrigger1] = useState<boolean>(false);
  const [trigger2, setTrigger2] = useState<boolean>(false);
  const [trigger3, setTrigger3] = useState<boolean>(false);

  // Confetti chain:
  useEffect(() => {
    if (confettiTrigger) {
      chainFlip([setTrigger0, setTrigger1, setTrigger2, setTrigger3]);
    }
  }, [confettiTrigger]);

  // Derived values:
  const [canvasHeight, canvasWidth] = [800, 800];

  const commonStyle: CSSProperties = {
    position: 'absolute',
    height: `${canvasHeight}px`,
    width: `${canvasWidth}px`,
    transform: 'none',
    // zIndex: 1000,
  };
  const commonOptions: ConfettiOptions = {
    colors,
    particleCount: 320,
    spread: 90,
    scalar: 1.2,
    gravity: 0.2,
    ticks: 200,
    // wind: 5,
  };

  // JSX:
  return (
    <>
      <ConfettiCanvas
        trigger={trigger0}
        confettiOptions={{ ...commonOptions, direction: 'N', shape: 'circle' }}
        style={{
          ...commonStyle,
          top: `${canvasHeight * -0.5}px`,
          left: `${canvasWidth * -0.5}px`,
        }}
      />
      <ConfettiCanvas
        trigger={trigger1}
        confettiOptions={{
          ...commonOptions,
          direction: 'N',
          shape: 'triangle',
        }}
        style={{
          ...commonStyle,
          top: `${canvasHeight * -0.5}px`,
          left: `calc(100% - ${canvasWidth * 0.5}px)`,
        }}
      />
      <ConfettiCanvas
        trigger={trigger2}
        confettiOptions={{ ...commonOptions, direction: 'N', shape: 'circle' }}
        style={{
          ...commonStyle,
          top: `calc(100% - ${canvasHeight * 0.5}px)`,
          left: `calc(100% - ${canvasWidth * 0.5}px)`,
        }}
      />
      <ConfettiCanvas
        trigger={trigger3}
        confettiOptions={{
          ...commonOptions,
          direction: 'N',
          shape: 'triangle',
        }}
        style={{
          ...commonStyle,
          top: `calc(100% - ${canvasHeight * 0.5}px)`,
          left: `${canvasWidth * -0.5}px`,
        }}
      />
    </>
  );
};

export default ConfettiArray;
