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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        minWidth: '50%',
        maxWidth: '80vw',
        minHeight: '8rem',
        padding: '0.5rem',
      }}
    >
      <div>
        <h3>Warning:</h3>
        <p>
          This will discard your current configuration, but will not affect the
          wheel, until applied.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          gap: '1rem',
          marginTop: '1rem',
        }}
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
          style={{ minWidth: '5rem' }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ResetConfig;
