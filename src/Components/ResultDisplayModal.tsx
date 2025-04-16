// 3rd party:
// Redux RTK:
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
  ({ label, backgroundColor }, ref: ForwardedRef<ModalHandle>) => {
    // JSX:
    return (
      <Modal ref={ref} modalClasses='drop-down'>
        <ResultDisplay label={label} backgroundColor={backgroundColor} />
      </Modal>
    );
  }
);

export default ResultDisplayModal;
