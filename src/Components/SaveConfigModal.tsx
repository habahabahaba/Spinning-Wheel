// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from './Modal';
import SaveConfigForm from './SaveConfigForm';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from './Modal';
import type { SaveConfigFormProps } from './SaveConfigForm';

const SaveConfigModal = forwardRef<ModalHandle, SaveConfigFormProps>(
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
        }}
      >
        <SaveConfigForm saveIdx={saveIdx} />
      </Modal>
    );
  }
);

export default SaveConfigModal;
