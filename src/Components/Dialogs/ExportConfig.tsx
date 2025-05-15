// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
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
import type { FC, FormEvent } from 'react';

const ExportConfig: FC = () => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);

  // Store:
  const currentConfig = useBoundStore((state) => state.currentConfig);

  // Actions:
  const setConfigName = useBoundStore((state) => state.setConfigName);

  // Handlers:
  function handleDownload(ev: FormEvent) {
    ev.preventDefault();
    ev.stopPropagation();

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

    handleCloseDialog();
  }

  // JSX:
  return (
    <form
      id={`export-dialog`}
      className={mergeStyles(styles.container, styles.x_small)}
    >
      <div
      // className={styles.centered}
      >
        <label
          className={mergeStyles(styles.label)}
          htmlFor='export-config-file-name'
        >
          File name
        </label>
        <input
          id={`export-config-file-name`}
          name={`configuration name`}
          type='text'
          maxLength={30}
          placeholder={`Provide a file name`}
          value={currentConfig.configName}
          onChange={(ev) => {
            setConfigName({ configName: ev.target.value });
          }}
          className={mergeStyles(styles.name_input)}
        />
      </div>
      <div
        className={mergeStyles(styles.buttons_container, styles.buttons_wide)}
      >
        <Button
          id='cancel-export-dialog-button'
          name={`cancel export and close dialog`}
          onClick={handleCloseDialog}
          type='reset'
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
    </form>
  );
};

export default ExportConfig;
