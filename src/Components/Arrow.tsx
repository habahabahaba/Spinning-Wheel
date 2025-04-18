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
import arrowSVGs from '../assets/arrowSVGs.tsx';
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
interface ArrowProps {
  arrowIdx?: number;
  ref?: Ref<HTMLDivElement>;
}

const Arrow: FC<ArrowProps> = ({ arrowIdx = 0, ref }) => {
  // JSX:
  return (
    <div
      style={{
        position: 'absolute',
        right: '-4%',
        top: '50.6%',
        transform: 'translate(50%, -50%)',
      }}
      ref={ref}
    >
      {arrowSVGs[arrowIdx] || arrowSVGs[0]}
    </div>
  );
};

export default Arrow;
