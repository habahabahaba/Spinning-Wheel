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
import modalCloseCtx from '../../context/modalCloseCtx';
// Hooks:
// Components:
import Button from '../UI/Button';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
export interface LoadConfigDialogProps {
  saveIdx: number;
}

const LoadConfigDialog: FC<LoadConfigDialogProps> = ({ saveIdx }) => {
  // Modal context For closing:
  const { handleCloseModal } = use(modalCloseCtx);

  // Store:
  const savedConfig = useBoundStore((state) => state.savedConfigs[saveIdx]);
  // Actions:
  const loadConfig = useBoundStore((state) => state.loadConfig);

  if (saveIdx < 0 || saveIdx > 9) {
    handleCloseModal();
    return <></>;
  }

  // Handlers:
  function handleLoadConfig() {
    if (savedConfig) {
      loadConfig({ saveIdx });
    }
    handleCloseModal();
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
        minHeight: '8rem',
        padding: '0.25rem',
      }}
    >
      <div style={{ padding: '0.5rem' }}>
        <h3 style={{ color: '#ef4444' }}>Warning</h3>
        <p>
          This will discard the current configuration, but will not affect the
          wheel until applied.
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
          onClick={handleCloseModal}
        >
          Cancel
        </Button>
        <Button
          variant='warning'
          id='load-config-button'
          name='Load configuration'
          onClick={handleLoadConfig}
          style={{ minWidth: '5rem' }}
        >
          Load
        </Button>
      </div>
    </div>
  );
};

export default LoadConfigDialog;
