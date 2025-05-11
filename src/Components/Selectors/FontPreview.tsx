// Assets:
// Constants:
// Utils:
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
import styles from './FontPreview.module.css';
// Types, interfaces and enumns:
import type { CSSProperties, FC } from 'react';
import type { AllFontNames } from '../../constants/fonts';
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
      }
    : {
        // fontFamily: 'system-ui',
        fontStyle: 'italic',
        fontWeight: '400',
        fontSize: '0.75rem',
        color: 'gray',
      };

  // JSX:
  return (
    <span style={style} className={styles.font_option}>
      {isLoaded ? `${fontFamily}` : 'Loading font...'}
    </span>
  );
};

export default FontPreview;
