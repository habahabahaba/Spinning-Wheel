// Assets:
// Constants:
// Utils:
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
import styles from './ResetConfig.module.css';
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
    <div className={styles.reset_config_dialog}>
      <div className={styles.reset_config_warning}>
        <h3>Warning</h3>
        <p>
          This will discard your current configuration, but will not affect the
          wheel, until applied.
        </p>
      </div>
      <div className={styles.cancel_reset_buttons_container}>
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
