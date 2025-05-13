// 3rd party:
// Store:
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Dialog from '../UI/Dialog';
import LoadConfig from './LoadConfig';
// CSS:
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';
import type { LoadConfigProps } from './LoadConfig';

const LoadConfigDialog = forwardRef<DialogHandle, LoadConfigProps>(
  ({ saveIdx }, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog
        ref={ref}
        className='dialog top-shadow'
        childProps={{ saveIdx }}
        style={{
          top: '-50%',
        }}
      >
        <LoadConfig saveIdx={saveIdx} />
      </Dialog>
    );
  }
);

export default LoadConfigDialog;
