// Constants:
import { PALETTES } from '../../constants/palettes';
import { WHEEL_RADII_MAP } from '../../constants/radii';
// Utils:
import { contrastColor, brightness } from '../../utils/color';
import { fontSizeForTextInElement } from '../../utils/text';
// 3rd party:
import { useShallow } from 'zustand/shallow';
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { use, useMemo } from 'react';
// Context:
import dialogCloseCtx from '../../context/dialogCloseCtx';
// Hooks:
// Components:
import ConfettiArray from '../Confetti/ConfettiArray';
// CSS:
import styles from './ResultDisplay.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
// export interface ResultDisplayProps {}

// For proper font rendering (must match actual elements styles):
const fontWeight = 600;
const lineHeight = 1.25;
const boxSizing = 'content-box';
const h1Margin = 0;
const h1Padding = 0;
const wordBreak = 'break-word';
const whiteSpace = 'normal';
const divHeightPx = (radius: number) => radius;
const divWidthPx = (radius: number) => radius * 1.8;
const divPaddingPx = (radius: number) => radius / 25;

const ResultDisplay: FC = () => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);

  // Store:
  const winningOutcomeIdx = useBoundStore((state) => state.winningOutcomeIdx);
  const winningOutcome = useBoundStore(
    useShallow((state) => state.activeConfig.outcomes[winningOutcomeIdx ?? -1])
  );
  const palette_idx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );
  const default_fontFamily = useBoundStore(
    (state) => state.activeConfig.default_fontFamily
  );
  const radiusName = useBoundStore((state) => state.activeConfig.radiusName);

  // console.log(`[ResultDisplay] winningOutcomeIdx: ${winningOutcomeIdx}`);
  // console.log(
  //   `[ResultDisplay] winningOutcome: ${JSON.stringify(winningOutcome)}`
  // );

  const { label, fillColor, fontFamily } = winningOutcome;
  const font = fontFamily || default_fontFamily;
  const radius = WHEEL_RADII_MAP[radiusName];

  // Finding the optimal font size:
  const fontSize: number = useMemo(
    () =>
      fontSizeForTextInElement({
        text: label,
        fontFamily: font,
        containerHeight: divHeightPx(radius),
        containerWidth: divWidthPx(radius),
        fontWeight,
        lineHeight,
        boxSizing,
        containerPadding: divPaddingPx(radius),
        childMargin: h1Margin,
        childPadding: h1Padding,
        wordBreak,
        whiteSpace,
      }) || Math.floor((radius / label.length) * 1.3),
    [radius, label, font]
  );
  // console.log(`[ResultDisplay] fontSizeForTextInElement: ${fontSize}`);

  // Guard:
  if (winningOutcomeIdx === null || !winningOutcome) {
    handleCloseDialog();
    return <></>;
  }

  // Derived values:
  const palette = PALETTES[palette_idx];
  const backgroundColor =
    fillColor || palette[winningOutcomeIdx % palette.length];
  const brightBGColor = brightness(backgroundColor, 1.4);

  const textColor = contrastColor(brightBGColor);
  const confettiColors = palette.map((color) => brightness(color, 1.1));

  // JSX:
  return (
    <>
      <div
        className={styles.result_display}
        style={{
          backgroundColor: `${brightBGColor}`,
          height: `${divHeightPx(radius)}px`,
          width: `${divWidthPx(radius)}px`,
          padding: `${divPaddingPx(radius)}px
          ${divPaddingPx(radius)}px 
          ${divPaddingPx(radius * 1.5)}px 
          ${divPaddingPx(radius)}px
          `,
          boxSizing,
          wordBreak,
          whiteSpace,
        }}
        onClick={handleCloseDialog}
      >
        <h1
          style={{
            color: `${textColor}`,
            fontFamily: `${font}`,
            fontWeight,
            fontSize: `${fontSize}px`,
            margin: h1Margin,
            padding: `${h1Padding}px`,
            lineHeight,
          }}
        >
          {label}
        </h1>
      </div>
      <ConfettiArray delayMs={600} colors={confettiColors} />
    </>
  );
};

export default ResultDisplay;
