// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// import { useState } from 'react';
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface SpinButtonProps {
  wheelState: string;
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}

const SpinButton: FC<SpinButtonProps> = ({
  wheelState,
  onClick,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
}) => {
  // State:
  // JSX:
  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      disabled={wheelState === 'spinning' || wheelState === 'cancelling'}
      style={{
        width: '8rem',
        position: 'relative',
        textAlign: 'center',
        zIndex: 5,
        filter: `${
          wheelState === 'windingUp'
            ? 'brightness(0.35) sepia(1) hue-rotate(-45deg) saturate(5)'
            : ''
        }`,
        transition: 'filter 5s',
      }}
    >
      {wheelState === 'spinning'
        ? 'Spinning...'
        : wheelState === 'windingUp'
        ? 'Winding...'
        : 'Spin!'}
    </button>
  );
};

export default SpinButton;
