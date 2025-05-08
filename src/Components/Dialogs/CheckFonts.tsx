// Assets:
// Constants:
import { FONT_FAMILIES_LOCAL } from '../../constants/fontFamilies';
// Utils:
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
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { WheelConfig } from '../../store/types';
import type { AllFontNames } from '../../constants/fontFamilies';
// interface CheckFontsDialogProps {}

const CheckFontsDialog: FC = () => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);

  // Store:
  const fontsLoadStates = useBoundStore((state) => state.fontsLoadStates);
  const default_fontFamily = useBoundStore(
    (state) => state.currentConfig.default_fontFamily
  );

  const currentConfig = useBoundStore((state) => state.currentConfig);
  // Actions:
  const replaceCurrentConfig = useBoundStore(
    (state) => state.replaceCurrentConfig
  );
  const applyConfig = useBoundStore((state) => state.applyConfig);

  // Derived values:
  const outcomesFonts = currentConfig.outcomes.map(
    (outcome) => outcome.fontFamily
  );
  const allFonts = [default_fontFamily, ...outcomesFonts] as AllFontNames[];
  const missingFonts = allFonts.filter(
    (font) => font && fontsLoadStates[font] === false
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        gap: '0.25rem',
        width: 'clamp(20rem, auto, 90vw)',
        minHeight: '8rem',
        padding: '0.25rem',
      }}
    >
      <div style={{ margin: '0.25rem', width: 'max-content' }}>
        {missingFonts.length ? (
          <>
            <h3>Loading missing fonts:</h3> {missingFontsList}
          </>
        ) : (
          <h3>All configuration fonts were successfully downloaded ! </h3>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'end',
          alignItems: 'center',
          marginTop: '0.5rem',
        }}
      >
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

export default CheckFontsDialog;

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
