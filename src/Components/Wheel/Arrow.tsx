// Utils:
import { safePaletteColor } from '../../utils/color.ts';
// Constants:
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore.ts';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import arrowSVG from '../SVG/arrowSVGs.tsx';
// CSS:
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
interface ArrowProps {
  size: number;
  ref?: Ref<HTMLDivElement>;
}

const Arrow: FC<ArrowProps> = ({ size, ref }) => {
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
        top: `calc(50% + ${3}px)`,
        transform: 'translate(50%, -50%)',
        // transformOrigin: 'center left',
        width: `${size}px`,
        aspectRatio: 1,
      }}
      ref={ref}
    >
      {arrowSVG({
        strokeColor: safePaletteColor(paletteIdx, 1),
      })}
    </div>
  );
};

export default Arrow;
