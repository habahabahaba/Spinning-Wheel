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
  // Derived values:
  const colors = PALETTES[palette_idx];

  // JSX:
  if (!colors) return null;

  return (
    <div
      aria-label={`Color palette with colors: ${colors.join(', ')}`}
      role='list'
      className={styles.palette_preview}
    >
      {colors.map((color, idx) => (
        <span
          key={idx}
          style={{
            backgroundColor: color,
            borderColor: 'var(--color-contrast-border, gray)',
          }}
          className={styles.color_preview}
          role='listitem'
        />
      ))}
    </div>
  );
};

export default PalettePreview;
