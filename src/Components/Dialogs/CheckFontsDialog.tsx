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
import Dialog from '../UI/Dialog';
import CheckFonts from './CheckFonts';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';

const CheckFontsDialog = forwardRef<DialogHandle>(
  (_, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog
        ref={ref}
        className='top-shadow'
        style={{
          top: '-50%',
        }}
      >
        <CheckFonts />
      </Dialog>
    );
  }
);

export default CheckFontsDialog;
