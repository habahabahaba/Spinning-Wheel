// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { use } from 'react';
// Context:
import dialogCloseCtx from '../../context/dialogCloseCtx';
// Hooks:
// Components:
import Button from '../UI/Button';
// CSS:
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
// interface ResetConfigProps{}

const ResetConfig: FC = () => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);

  // Actions:
  const resetCurrentConfig = useBoundStore((state) => state.resetCurrentConfig);

  // Handlers:
  function handleResetConfig() {
    resetCurrentConfig();
    handleCloseDialog();
  }
  // JSX:
  return (
    <div className={mergeStyles(styles.container, styles.x_small)}>
      <div className={styles.warning_danger}>
        <h3>Warning</h3>
        <p>
          This will discard your current configuration, but will not affect the
          wheel, until applied.
        </p>
      </div>
      <div
        className={mergeStyles(styles.buttons_container, styles.buttons_wide)}
      >
        <Button
          id='cancel-load-config-button'
          name='Cancel and close form'
          onClick={handleCloseDialog}
        >
          Cancel
        </Button>
        <Button
          variant='danger'
          id='load-config-button'
          name='Load configuration'
          onClick={handleResetConfig}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ResetConfig;
