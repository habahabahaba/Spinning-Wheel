// Assets:
// Constants:
import { FONT_FAMILIES_LOCAL } from '../../constants/fonts';
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { use } from 'react';
// Context:
import dialogCloseCtx from '../../context/dialogCloseCtx';
// Hooks:
// Components:
import Button from '../UI/Button';
// CSS:
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { WheelConfig } from '../../store/types';
import type { AllFontNames } from '../../constants/fonts';
// interface CheckFontsProps {}

const CheckFonts: FC = () => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);

  // Store:
  const fontLoadState = useBoundStore((state) => state.fontLoadState);
  const default_fontFamily = useBoundStore(
    (state) => state.currentConfig.default_fontFamily
  );
  const currentConfig = useBoundStore((state) => state.currentConfig);
  // Actions:
  const replaceCurrentConfig = useBoundStore(
    (state) => state.replaceCurrentConfig
  );
  const applyConfig = useBoundStore((state) => state.applyConfig);
  const setCurrentLocation = useBoundStore((state) => state.setCurrentLocation);

  // Derived values:
  const outcomesFonts = currentConfig.outcomes.map(
    (outcome) => outcome.fontFamily
  );
  const allFonts = [default_fontFamily, ...outcomesFonts] as AllFontNames[];
  const missingFonts = allFonts.filter(
    (font) => font && fontLoadState[font] === false
  ) as AllFontNames[];
  const missingFontsSet = new Set<AllFontNames>(missingFonts);
  // Handlers:
  function handleDefaultFonts() {
    const currConfig = { ...currentConfig };
    const newConfig = replaceFonts(currConfig, missingFontsSet);

    replaceCurrentConfig({ newConfig });
    applyConfig();

    handleCloseDialog();
  }

  function handleApply() {
    if (missingFonts.length > 0) return;

    applyConfig();
    setCurrentLocation({ newLocation: 'Main' });
    handleCloseDialog();
  }

  // JSX:
  const missingFontsList = (
    <ul>
      {[...missingFontsSet].map((font) => (
        <li key={font}>{font}</li>
      ))}
    </ul>
  );

  return (
    <div className={mergeStyles(styles.container, styles.small)}>
      <div className={styles.warning_container} aria-live='assertive'>
        <div
          className={mergeStyles(styles.warning_notification, styles.centered)}
        >
          <h3 id='check-fonts-dialog-title'>
            {missingFonts.length
              ? 'Loading missing fonts:'
              : 'All fonts for this configuration were successfully downloaded!'}
          </h3>
          <p id='check-fonts-dialog-description' className='sr-only'>
            This dialog informs you about missing fonts and allows you to choose
            between waiting for fonts to finish loading or using default fonts.
          </p>
          {missingFonts.length ? missingFontsList : null}
        </div>
      </div>

      <div className={mergeStyles(styles.buttons_container, styles.centered)}>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button
          variant='warning'
          disabled={!missingFonts.length}
          onClick={handleDefaultFonts}
        >
          Use Default Fonts
        </Button>
        <Button
          variant='success'
          onClick={handleApply}
          disabled={!!missingFonts.length}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default CheckFonts;

function replaceFonts(
  config: WheelConfig,
  missingFontsSet: Set<AllFontNames>
): WheelConfig {
  const fallbackFont = FONT_FAMILIES_LOCAL[0];

  if (missingFontsSet.has(config.default_fontFamily)) {
    config.default_fontFamily = fallbackFont;
  }
  config.outcomes = config.outcomes.map(({ fontFamily, ...rest }) => {
    if (fontFamily && missingFontsSet.has(fontFamily)) {
      return { ...rest, fontFamily: fallbackFont };
    } else {
      return { ...rest, fontFamily };
    }
  });

  return config;
}
