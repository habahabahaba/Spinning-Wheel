// Assets:
// Constants:
// Utils:
// 3rd party:
// Store:
// Router:
// React:
import { useImperativeHandle } from 'react';
// import { createPortal } from 'react-dom';
// Context:
// Hooks:
import useConfetti from '../../hooks/useConfetti';
// Components:
// CSS:
// Types, interfaces and enumns:
import type { CSSProperties, FC, Ref } from 'react';
// import type { HexColor } from '../utils/color';
import type { ConfettiOptions } from '../../hooks/useConfetti';
export type ConfettiHandle = {
  launch: () => void;
};
interface ConfettiCanvasProps {
  ref: Ref<ConfettiHandle>;
  confettiOptions?: ConfettiOptions;
  style?: CSSProperties;
}

const ConfettiCanvas: FC<ConfettiCanvasProps> = ({
  ref,
  confettiOptions = {},
  style = {},
}) => {
  const { launch, setCanvasRef } = useConfetti(confettiOptions);

  useImperativeHandle(ref, () => ({
    launch,
  }));
  // Effects:

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
