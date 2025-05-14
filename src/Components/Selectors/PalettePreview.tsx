// Assets:
import { PALETTES } from '../../constants/palettes';
// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
import styles from './Selectors.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
interface PalettePreviewProps {
  palette_idx: number;
}

const PalettePreview: FC<PalettePreviewProps> = ({ palette_idx }) => {
  // const colorsLength = PALETTES[palette_idx].length;

  // JSX:
  const colors = PALETTES[palette_idx] ? (
    <>
      {PALETTES[palette_idx].map((color, idx) => (
        <span
          key={idx}
          style={{
            backgroundColor: color,
          }}
          className={styles.color_preview}
        />
      ))}
    </>
  ) : (
    <></>
  );

  return (
    <>
      <div className={styles.palette_preview}>{colors}</div>
    </>
  );
};

export default PalettePreview;
