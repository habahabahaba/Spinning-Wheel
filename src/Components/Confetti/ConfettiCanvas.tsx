// Assets:
// Constants:
// Utils:
// 3rd party:
// Store:
// Router:
// React:
import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// Context:
// Hooks:
import useConfetti from '../../hooks/useConfetti';
// Components:
// CSS:
// Types, interfaces and enumns:
import type { CSSProperties, FC } from 'react';
// import type { HexColor } from '../utils/color';
import type { ConfettiOptions } from '../../hooks/useConfetti';
interface ConfettiCanvasProps {
  trigger: boolean;
  confettiOptions?: ConfettiOptions;
  style?: CSSProperties;
}

const ConfettiCanvas: FC<ConfettiCanvasProps> = ({
  trigger,
  confettiOptions = {},
  style = {},
}) => {
  const { launch, setCanvasRef } = useConfetti(confettiOptions);

  useEffect(() => {
    if (trigger) launch();
  }, [trigger, launch]);

  const canvas = (
    <canvas
      ref={setCanvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        height: '100vh',
        width: '100vw',
        zIndex: 9999,
        ...style,
      }}
    />
  );

  return canvas;
};

export default ConfettiCanvas;
