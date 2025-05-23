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
import ImportConfig from './ImportConfig';
// CSS:
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';

const ImportConfigDialog = forwardRef<DialogHandle>(
  (_, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog
        ref={ref}
        aria-labelledby='import-config-dialog-title'
        aria-describedby='import-config-dialog-description'
        className={mergeStyles(styles.dialog, 'center-shadow')}
      >
        <ImportConfig />
      </Dialog>
    );
  }
);

export default ImportConfigDialog;
