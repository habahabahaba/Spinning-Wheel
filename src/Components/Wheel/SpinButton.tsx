// Constants:
import { WHEEL_RADII_MAP } from '../../constants/radii';
// Utils:
import { contrastColor, safePaletteColor } from '../../utils/color';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import { idleSVGs, windUpSVGs, spinningSVGs } from '../SVG/spinSVGs';
// CSS:
import styles from './SpinButton.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
interface SpinButtonProps {
  // colors: string[];
  // wheelRadius: number;
  // wheelAnimationState: string;
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}

const SpinButton: FC<SpinButtonProps> = ({
  // colors,
  // wheelRadius,
  // wheelState,
  onClick,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
}) => {
  // Store:
  const paletteIdx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );
  const wheelAnimationState = useBoundStore(
    (state) => state.wheelAnimationState
  );

  // Colors:
  const radiusName = useBoundStore((state) => state.activeConfig.radiusName);

  const idleFillColor = safePaletteColor(paletteIdx, 3);
  const idleIconColor = contrastColor(idleFillColor);
  const windingUpFillColor = safePaletteColor(paletteIdx, 1);
  const windingUpIconColor = contrastColor(windingUpFillColor);
  const spinningFillColor = safePaletteColor(paletteIdx, 2);

  const wheelRadius = WHEEL_RADII_MAP[radiusName];

  // JSX:
  return (
    <button
      id='spin-button'
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      disabled={
        wheelAnimationState === 'spinning' ||
        wheelAnimationState === 'cancelling'
      }
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 5,

        width: `${wheelRadius * 0.2}px`,
        height: `${wheelRadius * 0.2}px`,
        borderRadius: '50%',

        backgroundColor: `${
          wheelAnimationState === 'windingUp'
            ? windingUpFillColor
            : wheelAnimationState === 'spinning'
            ? spinningFillColor
            : idleFillColor
        }`,
        filter: `${
          wheelAnimationState === 'windingUp'
            ? 'brightness(1.6) contrast(1) grayscale(0%)'
            : ''
        }`,
        boxShadow: `${
          wheelAnimationState === 'windingUp'
            ? '0px 0px 0px, inset 0px 0px 80px -10px black'
            : wheelAnimationState === 'spinning'
            ? ''
            : '0px 0px 10px 0px black'
        }`,
        transition: 'filter 6s, box-shadow 6s, background-color 2s',
      }}
      className={`${styles.spin_button} ${
        wheelAnimationState === 'spinning'
          ? styles.spin_button_spin
          : wheelAnimationState === 'windingUp'
          ? styles.spin_button_wind_up
          : ''
      }`}
    >
      {wheelAnimationState === 'spinning'
        ? spinningSVGs[1]({
            color0: safePaletteColor(paletteIdx, 1),
            color1: safePaletteColor(paletteIdx, 3),
          }) ||
          spinningSVGs[0]({
            color0: safePaletteColor(paletteIdx, 1),
            color1: safePaletteColor(paletteIdx, 3),
          })
        : wheelAnimationState === 'windingUp'
        ? windUpSVGs[0]({ color0: windingUpIconColor }) ||
          windUpSVGs[0]({ color0: windingUpIconColor })
        : idleSVGs[0]({ color0: idleIconColor }) ||
          idleSVGs[0]({ color0: idleIconColor })}
    </button>
  );
};

export default SpinButton;
