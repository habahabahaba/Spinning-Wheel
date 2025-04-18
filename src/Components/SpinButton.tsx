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
// Icons:
import { idleSVGs, windUpSVGs, spinningSVGs } from '../assets/spinSVGs';
// Types, interfaces and enumns:
import type { FC } from 'react';
interface SpinButtonProps {
  fillColors: string[];
  wheelRadius: number;
  wheelState: string;
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}

const SpinButton: FC<SpinButtonProps> = ({
  fillColors,
  wheelRadius,
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
        width: `${wheelRadius * 0.2}px`,
        height: `${wheelRadius * 0.2}px`,
        overflow: 'hidden',
        border: '2px solid',
        borderRadius: '50%',
        padding: '2px',

        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',

        // textAlign: 'center',
        zIndex: 5,
        backgroundColor: `${
          wheelState === 'windingUp'
            ? fillColors[1]
            : wheelState === 'spinning'
            ? fillColors[2]
            : fillColors[3]
        }`,
        filter: `${
          wheelState === 'windingUp'
            ? 'brightness(1.6) contrast(1) grayscale(0%)'
            : ''
        }`,
        boxShadow: `${
          wheelState === 'windingUp'
            ? '0px 0px 0px, inset 0px 0px 80px -10px black'
            : wheelState === 'spinning'
            ? ''
            : '0px 0px 10px 0px black'
        }`,
        transition: 'filter 6s, box-shadow 6s, background-color 2s',
      }}
      className={`${
        wheelState === 'spinning'
          ? 'button-spin'
          : wheelState === 'windingUp'
          ? 'button-wind-up'
          : ''
      }`}
    >
      {wheelState === 'spinning'
        ? spinningSVGs[1] || spinningSVGs[0]
        : wheelState === 'windingUp'
        ? windUpSVGs[0] || windUpSVGs[0]
        : idleSVGs[0] || idleSVGs[0]}
    </button>
  );
};

export default SpinButton;
