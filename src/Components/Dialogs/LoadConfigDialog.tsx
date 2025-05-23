// Utils:
import { mergeStyles } from '../../utils/css';
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
import styles from './Dialogs.module.css';
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
        aria-labelledby='load-config-dialog-title'
        aria-describedby='load-config-dialog-description'
        className={mergeStyles(styles.dialog, styles.top, 'center-shadow')}
        childProps={{ saveIdx }}
      >
        <LoadConfig saveIdx={saveIdx} />
      </Dialog>
    );
  }
);

export default LoadConfigDialog;
