// 3rd party:
// Constants:
import { PALETTES } from '../../constants/palettes.ts';
// Store:
import useBoundStore from '../../store/boundStore.ts';
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Arrow icons:
import arrowSVGs from '../SVG/arrowSVGs.tsx';
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
interface ArrowProps {
  size: number;
  arrowIdx?: number;
  ref?: Ref<HTMLDivElement>;
}

const Arrow: FC<ArrowProps> = ({ size, arrowIdx = 0, ref }) => {
  // Store:
  const paletteIdx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );

  // JSX:
  return (
    <div
      style={{
        position: 'absolute',
        right: `-${size / 2.5}px`,
        top: `calc(50% + ${size / 7}px)`,
        transform: 'translate(50%, -50%)',
        // transformOrigin: 'center left',
        width: `${size}px`,
        aspectRatio: 1,
      }}
      ref={ref}
    >
      {arrowSVGs[arrowIdx]({
        strokeColor: (PALETTES[paletteIdx] || PALETTES[0])[1],
      }) || arrowSVGs[0]({})}
    </div>
  );
};

export default Arrow;
