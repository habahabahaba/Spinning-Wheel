// Utils:
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
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

const ExportConfigDialog: FC = () => {
  // Modal context For closing:
  const { handleCloseModal } = use(modalCloseCtx);

  // Store:
  const currentConfig = useBoundStore((state) => state.currentConfig);

  // Actions:
  const setConfigName = useBoundStore((state) => state.setConfigName);

  // Handlers:
  // Function to prepare the download link
  function handleDownload() {
    const configName = currentConfig.configName.trim();
    if (!configName) return;

    // Prepare the download link:
    const blob = new Blob([JSON.stringify(currentConfig, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${configName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    handleCloseModal();
  }

  // JSX:
  return (
    <div
      id={`export-dialog`}
      className=''
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
      <p className=''>File name:</p>
      <input
        id={`export-dialog-config-name`}
        name={`configuration name`}
        type='text'
        maxLength={30}
        placeholder={`Enter configuration name`}
        value={currentConfig.configName}
        onChange={(ev) => {
          setConfigName({ configName: ev.target.value });
        }}
        style={{
          height: '1.5rem',
          padding: '0.2rem',
          border: '1px solid',
          borderRadius: ' 0.1rem',
          minWidth: '12rem',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        <Button
          id='cancel-export-dialog-button'
          name={`cancel export and close dialog`}
          onClick={handleCloseModal}
        >
          Cancel
        </Button>
        <Button
          id='export-current-config-button'
          name={`export configuration`}
          variant='success'
          onClick={handleDownload}
          disabled={!currentConfig.configName.trim()}
        >
          Export
        </Button>
      </div>
    </div>
  );
};

export default ExportConfigDialog;
