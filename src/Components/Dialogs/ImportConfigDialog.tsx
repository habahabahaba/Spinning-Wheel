// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Dialog from '../UI/Dialog';
import ImportConfig from './ImportConfig';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';

const ImportConfigDialog = forwardRef<DialogHandle>(
  (_, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog ref={ref} className='dialog top-shadow'>
        <ImportConfig />
      </Dialog>
    );
  }
);

export default ImportConfigDialog;
