// Assets:
// Constants:
// Utils:
// 3rd party:
// Store:
// Router:
// React:
import { useEffect } from 'react';
// Context:
// Hooks:
import { useConfetti } from '../hooks/useConfetti';
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface ConfettiCanvasProps {
  trigger: boolean;
}

const ConfettiCanvas: FC<ConfettiCanvasProps> = ({ trigger }) => {
  const { launch, setCanvasRef } = useConfetti();

  useEffect(() => {
    if (trigger) launch(120); // you can pass the count here
  }, [trigger, launch]);

  // JSX:
  return (
    <canvas
      ref={setCanvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
      }}
    />
  );
};

export default ConfettiCanvas;
