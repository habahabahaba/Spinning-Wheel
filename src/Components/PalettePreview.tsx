// Assets:
import { PALETTES } from '../constants/palettes';
// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface PalettePreviewProps {
  palette_idx: number;
}

const PalettePreview: FC<PalettePreviewProps> = ({ palette_idx }) => {
  const colorsLength = PALETTES[palette_idx].length;

  // JSX:
  const colors = PALETTES[palette_idx] ? (
    <>
      {PALETTES[palette_idx].map((color, idx) => (
        <span
          key={idx}
          style={{
            display: 'inline-block',
            backgroundColor: color,
            width: `calc(90% / ${colorsLength})`,
            aspectRatio: '1',
          }}
        />
      ))}
    </>
  ) : (
    <></>
  );

  return (
    <>
      <div
        style={{
          width: '10rem',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.25rem',
          // border: '1px solid black',
        }}
      >
        {colors}
      </div>
      {/* {palette_idx < PALETTES.length - 1 ? <hr /> : null} */}
    </>
  );
};

export default PalettePreview;
