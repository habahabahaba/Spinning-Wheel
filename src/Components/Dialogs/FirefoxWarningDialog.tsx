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
import FirefoxWarning from './FirefoxWarning';
// CSS:
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';
import type { FirefoxWarningProps } from './FirefoxWarning';

const FirefoxWarningDialog = forwardRef<DialogHandle, FirefoxWarningProps>(
  ({ setShowWarning }, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog
        ref={ref}
        className={mergeStyles(styles.dialog, styles.top, 'center-shadow')}
        childProps={{ setShowWarning }}
      >
        <FirefoxWarning setShowWarning={setShowWarning} />
      </Dialog>
    );
  }
);

export default FirefoxWarningDialog;
