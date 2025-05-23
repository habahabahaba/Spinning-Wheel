// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
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
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';

const CheckFontsDialog = forwardRef<DialogHandle>(
  (_, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog
        ref={ref}
        className={mergeStyles(styles.dialog, styles.top, 'center-shadow')}
        aria-labelledby='check-fonts-dialog-title'
        aria-describedby='check-fonts-dialog-description'
      >
        <CheckFonts />
      </Dialog>
    );
  }
);

export default CheckFontsDialog;
