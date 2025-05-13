// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Dialog from '../UI/Dialog';
import ResetConfig from './ResetConfig';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';

const ResetConfigDialog = forwardRef<DialogHandle>(
  (_, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog ref={ref} className='dialog top-shadow'>
        <ResetConfig />
      </Dialog>
    );
  }
);

export default ResetConfigDialog;
