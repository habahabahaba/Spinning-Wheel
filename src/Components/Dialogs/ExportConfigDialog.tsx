// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Dialog from '../UI/Dialog';
import ExportConfig from './ExportConfig';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';

const ExportConfigDialog = forwardRef<DialogHandle>(
  (_, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog
        ref={ref}
        // className=''
        style={{
          top: '-50%',
          right: '0',
        }}
      >
        <ExportConfig />
      </Dialog>
    );
  }
);

export default ExportConfigDialog;
