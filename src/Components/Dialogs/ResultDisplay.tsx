// Constants:
import { PALETTES } from '../../constants/palettes';
import { WHEEL_RADII_MAP } from '../../constants/radii';
// Utils:
import { contrastColor, brightness } from '../../utils/color';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { use, useState, useEffect } from 'react';
// Context:
import dialogCloseCtx from '../../context/dialogCloseCtx';
// Hooks:
// Components:
import ConfettiArray from '../Confetti/ConfettiArray';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
// export interface ResultDisplayProps {}

// For confetti timeouts:
let timer: number | null = null;

const ResultDisplay: FC = () => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);

  // Store:
  const winningOutcomeIdx = useBoundStore((state) => state.winningOutcomeIdx);
  const winningOutcome = useBoundStore(
    (state) => state.activeConfig.outcomes[winningOutcomeIdx ?? -1]
  );
  const palette_idx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );
  const default_fontFamily = useBoundStore(
    (state) => state.activeConfig.default_fontFamily
  );
  const radiusName = useBoundStore((state) => state.activeConfig.radiusName);

  // Store:
  const [confettiTrigger, setConfettiTrigger] = useState<boolean>(false);

  // Effects:
  useEffect(() => {
    timer = setTimeout(() => {
      setConfettiTrigger(true);
      timer = setTimeout(() => {
        setConfettiTrigger(false);
      }, 610);
    }, 600);

    return () => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  // Guard:
  if (winningOutcomeIdx === null || !winningOutcome) {
    handleCloseDialog();
    return <></>;
  }

  // Derived values:
  const { label, fillColor, fontFamily } = winningOutcome;
  const palette = PALETTES[palette_idx];
  const backgroundColor =
    fillColor || palette[winningOutcomeIdx % palette.length];
  const brightBGColor = brightness(backgroundColor, 1.4);

  const radius = WHEEL_RADII_MAP[radiusName];
  const fontSize = Math.floor(radius / 4.5);
  const font = fontFamily || default_fontFamily;
  const textColor = contrastColor(brightBGColor);

  const confettiColors = palette.map((color) => brightness(color, 1.1));
  // JSX:
  return (
    <>
      <div
        style={{
          backgroundColor: `${brightBGColor}`,
          margin: '0',
          padding: '1px 2rem',
          cursor: 'pointer',
          // border: 'solid black 1px',
          minWidth: '50vw',
          textAlign: 'center',
        }}
        onClick={handleCloseDialog}
      >
        <h1
          style={{
            color: `${textColor}`,
            fontFamily: `${font}`,
            fontSize: `clamp(1rem, ${fontSize}px, 7rem)`,
          }}
        >
          {label}
        </h1>
      </div>
      <ConfettiArray trigger={confettiTrigger} colors={confettiColors} />
    </>
  );
};

export default ResultDisplay;
