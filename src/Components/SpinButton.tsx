// Assets:
import { PALETTES } from '../constants/palettes';
// Utils:
import { contrastColor } from '../utils/color';
// 3rd party:
// Store:
import useWheelStore from '../store/wheelStore';
// React Router:
// React:
// import { useState } from 'react';
// Context:
// Hooks:
// Components:
// CSS:
// Icons:
import { idleSVGs, windUpSVGs, spinningSVGs } from './spinSVGs';
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
  // Store:
  const paletteIdx = useWheelStore(
    (state) => state.activeConfig.default_palette_idx
  );

  // Colors:
  const colors = PALETTES[paletteIdx];

  const idleFillColor = fillColors[3];
  const idleIconColor = contrastColor(idleFillColor);
  const windingUpFillColor = fillColors[1];
  const windingUpIconColor = contrastColor(windingUpFillColor);
  const spinningFillColor = fillColors[2];
  //   const spinningIconColor = contrastColor(spinningFillColor);

  // JSX:
  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      disabled={wheelState === 'spinning' || wheelState === 'cancelling'}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 5,

        width: `${wheelRadius * 0.2}px`,
        height: `${wheelRadius * 0.2}px`,
        border: '2px solid',
        borderRadius: '50%',
        padding: '2px',

        cursor: 'pointer',

        backgroundColor: `${
          wheelState === 'windingUp'
            ? windingUpFillColor
            : wheelState === 'spinning'
            ? spinningFillColor
            : idleFillColor
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
        ? spinningSVGs[1]({ color1: colors[1], color2: colors[3] }) ||
          spinningSVGs[0]({ color1: colors[1], color2: colors[3] })
        : wheelState === 'windingUp'
        ? windUpSVGs[0]({ color1: windingUpIconColor }) ||
          windUpSVGs[0]({ color1: windingUpIconColor })
        : idleSVGs[0]({ color1: idleIconColor }) ||
          idleSVGs[0]({ color1: idleIconColor })}
    </button>
  );
};

export default SpinButton;
