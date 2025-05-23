// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Redux, RTK:
// Store:
// Router:
// React:
// Context:
// Hooks:
// Components:
import RadiusSelector from '../Selectors/RadiusSelector';
import PaletteSelector from '../Selectors/PaletteSelector';
import FontSelector from '../Selectors/FontSelector';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
// interface WheelDefaultsMenuProps {}

const WheelDefaultsPanel: FC = () => {
  // Context:

  // Store:

  // Actions:

  // State:

  // Refs:

  // Effects:

  // Derived values:

  // Handlers:

  // JSX:
  return (
    <menu className={styles.wheel_defaults_panel}>
      <legend className='sr-only'>Wheel size</legend>
      <span
        className={mergeStyles(
          styles.label,
          styles.label_offset,
          styles.radius_select_label
        )}
      >
        Wheel size
      </span>
      <RadiusSelector />
      <legend className='sr-only'>Wheel colors</legend>
      <span
        className={mergeStyles(
          styles.label,
          styles.label_offset,
          styles.palette_select_label
        )}
      >
        Wheel colors
      </span>
      <PaletteSelector />
      <span
        className={mergeStyles(
          styles.label,
          styles.label_offset,
          styles.font_select_label
        )}
      >
        Main font
      </span>
      <legend className='sr-only'>Default font</legend>
      <FontSelector outcomeIdx={-1} className={styles.default_font_select} />
    </menu>
  );
};

export default WheelDefaultsPanel;
