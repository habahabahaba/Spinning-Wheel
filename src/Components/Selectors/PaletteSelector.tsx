// Utils:
import { mergeStyles } from '../../utils/css';
// Constants:
import { PALETTES } from '../../constants/palettes';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import PalettePreview from './PalettePreview';
import { Select, Option } from '../UI/Select';
// CSS:
import styles from './PaletteSelector.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
interface PaletteSelectorProps {
  className?: string;
}

const PaletteSelector: FC<PaletteSelectorProps> = ({ className = '' }) => {
  // Store:
  const currentPalette = useBoundStore(
    (state) => state.currentConfig.default_palette_idx
  );
  // Actions:
  const setPalette = useBoundStore((state) => state.setDefaultPalette);

  // JSX:
  const options = Array(PALETTES.length)
    .fill(0)
    .map((_, idx) => (
      <Option value={idx} key={idx}>
        <PalettePreview palette_idx={idx} key={idx} />
      </Option>
    ));

  return (
    <Select
      id='palette-select'
      value={currentPalette}
      onChange={(value) => {
        setPalette({ paletteIdx: +value });
      }}
      className={mergeStyles(className, styles.palette_selector)}
    >
      {options}
    </Select>
  );
};

export default PaletteSelector;
