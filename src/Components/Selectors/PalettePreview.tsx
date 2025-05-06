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
            // display: 'inline-block',
            backgroundColor: color,
            height: `90%`,
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
          height: '1.3rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.2rem',
          padding: '0.1rem',
          // transition: 'width 0.3s',
          //   border: '1px solid black',
        }}
      >
        {colors}
      </div>
      {/* {palette_idx < PALETTES.length - 1 ? <hr /> : null} */}
    </>
  );
};

export default PalettePreview;
