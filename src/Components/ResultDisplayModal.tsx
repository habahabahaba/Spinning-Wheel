// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from './Modal';
import ResultDisplay from './ResultDisplay';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from './Modal';
import type { ResultDisplayProps } from './ResultDisplay';

const ResultDisplayModal = forwardRef<ModalHandle, ResultDisplayProps>(
  ({ currentOutcomeIdx }, ref: ForwardedRef<ModalHandle>) => {
    // JSX:
    return (
      <Modal
        ref={ref}
        className='drop-down'
        childProps={{ currentOutcomeIdx }}
        style={{
          right: 'calc(60px - 1rem)',
          top: '-15vh',
        }}
      >
        <ResultDisplay currentOutcomeIdx={currentOutcomeIdx} />
      </Modal>
    );
  }
);

export default ResultDisplayModal;
