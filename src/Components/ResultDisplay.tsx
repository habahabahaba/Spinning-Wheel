// Constants:
import { PALETTES } from '../constants/palettes';
// Utils:
import { contrastColor, brightness } from '../utils/color';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
import { use } from 'react';
// Context:
import modalCloseCtx from '../context/modalCloseCtx';
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
// export interface ResultDisplayProps {
//   winningOutcomeIdx: number;
// }

const ResultDisplay: FC = () => {
  // Modal context For closing:
  const { handleCloseModal } = use(modalCloseCtx);

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

  // Guard:
  if (winningOutcomeIdx === null || !winningOutcome) {
    handleCloseModal();
    return <></>;
  }

  const { label, fillColor, fontFamily } = winningOutcome;
  const backgroundColor =
    fillColor ||
    PALETTES[palette_idx][winningOutcomeIdx % PALETTES[palette_idx].length];
  const brightBGColor = brightness(backgroundColor, 1.4);

  const font = fontFamily || default_fontFamily;
  const textColor = contrastColor(brightBGColor);

  // JSX:
  return (
    <div
      style={{
        backgroundColor: `${brightBGColor}`,
        color: `${textColor}`,
        fontFamily: `${font}`,
        // filter: 'brightness(1.4)',
        // textDecoration: 'underline',
        margin: '0',
        padding: '1rem 2rem',
        cursor: 'pointer',
        // border: 'solid black 1px',
      }}
      onClick={handleCloseModal}
    >
      <h1>{label}</h1>
    </div>
  );
};

export default ResultDisplay;
