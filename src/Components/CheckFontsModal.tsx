// Assets:
// Constants:
// Utils:
// 3rd party:
// Redux, RTK:
// Store:
// Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Modal from './Modal';
import CheckFontsDialog from './CheckFontsDialog';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { ModalHandle } from './Modal';

const CheckFontsModal = forwardRef<ModalHandle>(
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
        <CheckFontsDialog />
      </Modal>
    );
  }
);

export default CheckFontsModal;
