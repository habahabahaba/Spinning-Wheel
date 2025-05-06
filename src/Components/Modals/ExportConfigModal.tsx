// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from '../UI/Modal';
import ExportConfigDialog from './ExportConfigDialog';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from '../UI/Modal';

const ExportConfigModal = forwardRef<ModalHandle>(
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
        <ExportConfigDialog />
      </Modal>
    );
  }
);

export default ExportConfigModal;
