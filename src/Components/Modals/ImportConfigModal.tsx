// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from '../UI/Modal';
import ImportConfigDialog from './ImportConfigDialog';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from '../UI/Modal';

const ImportConfigModal = forwardRef<ModalHandle>(
  (_, ref: ForwardedRef<ModalHandle>) => {
    // JSX:
    return (
      <Modal
        ref={ref}
        // className=''
        style={
          {
            //   top: '-50%',
            //   right: '0',
          }
        }
      >
        <ImportConfigDialog />
      </Modal>
    );
  }
);

export default ImportConfigModal;
