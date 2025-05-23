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
import styles from './Selectors.module.css';
// Types, interfaces and enumns:
import type { CSSProperties, FC } from 'react';
import type { AllFontNames } from '../../constants/fonts';
interface FontPreviewProps {
  fontFamily: AllFontNames;
}

const FontPreview: FC<FontPreviewProps> = ({ fontFamily }) => {
  // Store:
  const isLoaded = useBoundStore((state) => state.fontLoadState[fontFamily]);

  const style: CSSProperties = isLoaded
    ? {
        fontFamily: fontFamily,
        fontWeight: '600',
        fontSize: '1rem',
      }
    : {
        fontStyle: 'italic',
        fontWeight: '400',
        fontSize: '0.8rem',
      };

  // if (import.meta.env.DEV) {
  //   console.log(`[FontPreview] fontFamily: ${fontFamily}`);
  // }

  // JSX:
  return (
    <span
      style={style}
      className={`${isLoaded ? '' : styles.greyed_out}`}
      aria-disabled={`${isLoaded ? 'false' : 'true'}`}
    >
      {isLoaded ? `${fontFamily}` : 'Loading font...'}
    </span>
  );
};

export default FontPreview;
