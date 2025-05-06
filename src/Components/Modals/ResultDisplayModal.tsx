// Constants:
import { WHEEL_RADII_MAP } from '../../constants/radii';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from '../UI/Modal';
import ResultDisplay from './ResultDisplay';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from '../UI/Modal';
import type { ResultDisplayProps } from './ResultDisplay';

const ResultDisplayModal = forwardRef<ModalHandle, ResultDisplayProps>(
  ({ confettiTrigger }, ref: ForwardedRef<ModalHandle>) => {
    // Store:
    const radiusName = useBoundStore((state) => state.activeConfig.radiusName);
    const wheelRadius = WHEEL_RADII_MAP[radiusName];
    const dY = (wheelRadius * 12) / 5;
    const dX = (wheelRadius * 71) / 30;

    // JSX:
    return (
      <Modal
        ref={ref}
        className='drop-down'
        style={{
          position: 'relative',
          // position: 'absolute',
          // top: '0%',
          // right: '0%',
          top: `min(calc(${dY}px - 100vh), 50vh)`,
          right: `calc(100vw - ${dX}px)`,
          // zIndex: -1,
          overflow: 'visible',
        }}
      >
        <ResultDisplay confettiTrigger={confettiTrigger} />
      </Modal>
    );
  }
);

export default ResultDisplayModal;
