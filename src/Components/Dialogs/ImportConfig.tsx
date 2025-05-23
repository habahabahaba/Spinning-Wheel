// Assets:
// Constants:
// Utils:
import { validateWheelConfig } from '../../utils/wheelConfig';
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Redux, RTK:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { use, useRef, useState, useEffect } from 'react';
// Context:
import dialogCloseCtx from '../../context/dialogCloseCtx';
// Hooks:
// Components:
import Button from '../UI/Button';
// CSS:
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { FC, FormEvent, ChangeEvent } from 'react';
import type { ValidationResult } from '../../utils/wheelConfig';

const ImportConfig: FC = () => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);

  // Store:

  // Actions:
  const replaceCurrentConfig = useBoundStore(
    (state) => state.replaceCurrentConfig
  );

  // State:
  const [error, setError] = useState<string>('');
  const [warnings, setWarnings] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);

  // Refs:
  const fileInputRef = useRef<HTMLInputElement>(null);

  function resetWarnings() {
    setError(() => '');
    setWarnings(() => []);
  }

  // Effects:
  useEffect(() => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.focus();
    }
    return () => {
      resetWarnings();
    };
  }, []);

  // Handlers:
  const handleFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    resetWarnings();

    setFiles(ev.target.files);
  };

  async function handleImportConfig(ev: FormEvent) {
    ev.preventDefault();
    ev.stopPropagation();

    resetWarnings();

    if (!fileInputRef.current || !fileInputRef.current.files || !files) return;
    const file = files[0] as File | null;

    console.log(`[ImportConfig] file: ${JSON.stringify(file, null, 2)}`);

    if (!file || !(file instanceof File) || file.size === 0) {
      console.log(`[ImportConfig]: NO FILE !!!`);

      setError(() => 'Please select a valid .json file.');

      fileInputRef.current.value = '';
      return;
    }

    try {
      const fileText = await file.text();
      const jsonData = JSON.parse(fileText);

      console.log(
        `[ImportConfig]: jsonData: ${JSON.stringify(jsonData, null, 2)}`
      );

      const validationResult: ValidationResult = validateWheelConfig(jsonData);

      if (!validationResult.valid) {
        setError(() => validationResult.error);
        fileInputRef.current.value = '';
        return;
      }

      if (validationResult.warnings.length) {
        setWarnings(() => [...validationResult.warnings]);
      }

      replaceCurrentConfig({ newConfig: validationResult.config });

      fileInputRef.current.value = '';
      setError(() => '');
      if (!validationResult.warnings.length) {
        handleCloseDialog();
      }
    } catch (error) {
      if (error instanceof Error) console.error(error);

      setError(() => 'The file appears to be corrupted or of a wrong format.');

      fileInputRef.current.value = '';
      return;
    }
  }

  function handleResetAndCancel(ev: FormEvent) {
    ev.preventDefault();
    ev.stopPropagation();

    resetWarnings();
    handleCloseDialog();
  }

  // JSX:
  const introWarning = (
    <div id='import-config-intro' className={styles.warning_danger}>
      <h3>Warning:</h3>
      <p>
        This will discard your current configuration, but will not affect the
        wheel, until applied.
      </p>
    </div>
  );

  const errorMessage = error ? (
    <div id='import-config-error' role='alert' className={styles.warning_error}>
      <h3 style={{ color: '#ef4444', marginTop: '0.5rem' }}>Error:</h3>
      <p className=''>
        {error}
        <span> Please select another file.</span>
      </p>
    </div>
  ) : null;

  const warningsList = warnings.length ? (
    <div
      id='import-config-warnings'
      role='alert'
      className={mergeStyles(styles.warning_notification, styles.centered)}
    >
      <h3 style={{ fontWeight: 'bold' }}>
        The file contained some errors, that were automatically corrected:
      </h3>
      <ul>
        {warnings.map((w, idx) => (
          <li key={`${idx}-${w}`}>{w}</li>
        ))}
      </ul>
    </div>
  ) : null;

  const Buttons = warnings.length ? (
    <Button
      variant='success'
      id='import-config-dialog-continue-button'
      name='Continue with imported configuration'
      onClick={handleResetAndCancel}
      aria-label='Continue with configuration despite warnings'
    >
      Continue
    </Button>
  ) : (
    <>
      <Button
        id='import-config-dialog-cancel-button'
        name='Cancel and close dialog'
        type='reset'
        onClick={handleResetAndCancel}
      >
        Cancel
      </Button>
      <Button
        variant='warning'
        id='import-config-dialog-import-button'
        name='Import configuration'
        disabled={
          !!error ||
          !files ||
          !fileInputRef.current ||
          !fileInputRef.current.value
        }
        onClick={handleImportConfig}
      >
        Import
      </Button>
    </>
  );

  return (
    <form className={mergeStyles(styles.container, styles.large)}>
      <h3 id='dialog-title' className='.sr-only'>
        Import configuration from a file.
      </h3>
      <p id='dialog-description' className='.sr-only'>
        Please select (upload) a .json file to import configuration from.
      </p>
      <div>
        <label
          htmlFor='configuration-file-input'
          className={mergeStyles(styles.label, 'label')}
        >
          Select a json file
        </label>

        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          id='configuration-file-input'
          name='select configuration file'
          type='file'
          accept='.json'
          className={mergeStyles(
            styles.file_input,
            styles.default,
            styles.rectangle,
            'input-text'
          )}
          aria-describedby={
            error
              ? 'import-config-error'
              : warnings.length
              ? 'import-config-warnings'
              : 'import-config-intro'
          }
          aria-invalid={!!error}
        />
      </div>
      <div className={styles.warning_container}>
        {error ? errorMessage : warnings.length ? warningsList : introWarning}
      </div>
      <div
        className={mergeStyles(styles.buttons_container, styles.buttons_wide)}
      >
        {Buttons}
      </div>
    </form>
  );
};

export default ImportConfig;
