// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Arrow icons:
import arrowSVGs from './SVG/arrowSVGs.tsx';
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
interface ArrowProps {
  size: number;
  arrowIdx?: number;
  ref?: Ref<HTMLDivElement>;
}

const Arrow: FC<ArrowProps> = ({ size, arrowIdx = 0, ref }) => {
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
        // boxShadow: '10px 0px 24px 0px black',
        // WebkitBoxShadow: '10px 0px 24px 0px black',
      }}
      ref={ref}
    >
      {arrowSVGs[arrowIdx] || arrowSVGs[0]}
    </div>
  );
};

export default Arrow;
