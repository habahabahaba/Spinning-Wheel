// Assets:
import { PALETTES } from '../constants/palettes';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import PalettePreview from './PalettePreview';
import { Select, Option } from './Select';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
// interface PaletteSelectorProps{}

const PaletteSelector: FC = () => {
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
    // <label htmlFor='palette-select'>
    //   Default colors
    <Select
      id='palette-select'
      value={currentPalette}
      onChange={(value) => {
        setPalette({ paletteIdx: +value });
      }}
    >
      {options}
    </Select>
    // {/* </label> */}
  );
};

export default PaletteSelector;
