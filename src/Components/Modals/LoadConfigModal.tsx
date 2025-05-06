// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from '../UI/Modal';
import LoadConfigDialog from './LoadConfigDialog';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from '../UI/Modal';
import type { LoadConfigDialogProps } from './LoadConfigDialog';

const LoadConfigModal = forwardRef<ModalHandle, LoadConfigDialogProps>(
  ({ saveIdx }, ref: ForwardedRef<ModalHandle>) => {
    // JSX:
    return (
      <Modal
        ref={ref}
        // className='drop-down'
        childProps={{ saveIdx }}
        style={{
          top: '-50%',
          right: '0',
          maxWidth: '75%',
        }}
      >
        <LoadConfigDialog saveIdx={saveIdx} />
      </Modal>
    );
  }
);

export default LoadConfigModal;
