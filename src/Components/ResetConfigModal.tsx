// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from './Modal';
import ResetConfigDialog from './ResetConfigDialog';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from './Modal';

const ResetConfigModal = forwardRef<ModalHandle>(
  (_, ref: ForwardedRef<ModalHandle>) => {
    // JSX:
    return (
      <Modal
        ref={ref}
        // className='drop-down'
        style={{
          top: '-50%',
          right: '0',
        }}
      >
        <ResetConfigDialog />
      </Modal>
    );
  }
);

export default ResetConfigModal;
