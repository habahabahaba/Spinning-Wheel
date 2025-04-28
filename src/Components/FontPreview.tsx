// Assets:
// Constants:
// Utils:
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { CSSProperties, FC } from 'react';
import type { AllFontNames } from '../constants/fontFamilies';
interface FontPreviewProps {
  fontFamily: AllFontNames;
}

const FontPreview: FC<FontPreviewProps> = ({ fontFamily }) => {
  // Store:
  const isLoaded = useBoundStore((state) => state.fontsLoadStates[fontFamily]);

  const style: CSSProperties = isLoaded
    ? {
        fontFamily: fontFamily,
        fontWeight: '600',
        fontSize: '1rem',
        minHeight: '1.5rem',
        padding: '0.25.rem',
      }
    : {
        fontFamily: 'system-ui',
        fontStyle: 'italic',
        fontWeight: '400',
        fontSize: '0.75rem',
        color: 'gray',
        minHeight: '1.5rem',
        padding: '0.25.rem',
      };

  // JSX:
  return (
    <span style={style}>{isLoaded ? `${fontFamily}` : 'Loading font...'}</span>
  );
};

export default FontPreview;
