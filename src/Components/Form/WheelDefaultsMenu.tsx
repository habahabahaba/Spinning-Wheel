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
import styles from './WheelDefaultsMenu.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
// interface WheelDefaultsMenuProps {}

const WheelDefaultsMenu: FC = () => {
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
    <menu className={styles.menu}>
      <span className={mergeStyles(styles.label, styles.radius_select_label)}>
        Wheel size
      </span>
      <RadiusSelector />
      <span className={mergeStyles(styles.label, styles.palette_select_label)}>
        Default colors
      </span>
      <PaletteSelector />
      <span className={mergeStyles(styles.label, styles.font_select_label)}>
        Default font
      </span>
      <FontSelector outcomeIdx={-1} />
    </menu>
  );
};

export default WheelDefaultsMenu;
