// Assets:
// Constants:
// Utils:
import { validateWheelConfig } from '../../utils/wheelConfig';
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
import styles from './ImportConfig.module.css';
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
    <div className={styles.import_config_intro_warning}>
      <h3>Warning:</h3>
      <p>
        This will discard your current configuration, but will not affect the
        wheel, until applied.
      </p>
    </div>
  );

  const errorMessage = error ? (
    <>
      <div className={styles.import_config_error}>
        <h3 style={{ color: '#ef4444', marginTop: '0.5rem' }}>Error:</h3>
        <p className=''>
          {error}
          <span> Please select another file.</span>
        </p>
      </div>
    </>
  ) : null;

  const warningsList = warnings.length ? (
    <div className={styles.import_config_warnings_list}>
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
    <form id='import-config-dialog' className={styles.import_config_dialog}>
      <div>
        <label
          htmlFor='configuration-file-input'
          className={styles.file_input_label}
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
          className={[styles.file_input, styles.default, styles.rectangle].join(
            ' '
          )}
        />
      </div>
      <div className={styles.warnings_container}>
        {error ? errorMessage : warnings.length ? warningsList : introWarning}
      </div>
      <div className={styles.cancel_import_buttons_container}>{Buttons}</div>
    </form>
  );
};

export default ImportConfig;
