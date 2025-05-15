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
import SaveConfig from './SaveConfig';
// CSS:
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';
import type { SaveConfigProps } from './SaveConfig';

const SaveConfigDialog = forwardRef<DialogHandle, SaveConfigProps>(
  ({ saveIdx }, ref: ForwardedRef<DialogHandle>) => {
    // JSX:
    return (
      <Dialog
        ref={ref}
        className={mergeStyles(styles.dialog, styles.top, 'center-shadow')}
        childProps={{ saveIdx }}
      >
        <SaveConfig saveIdx={saveIdx} />
      </Dialog>
    );
  }
);

export default SaveConfigDialog;
