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
import { use, useRef, useState } from 'react';
// Context:
import modalCloseCtx from '../../context/modalCloseCtx';
// Hooks:
// Components:
import Button from '../UI/Button';
// CSS:
import styles from './ImportConfigDialog.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { ValidationResult } from '../../utils/wheelConfig';

const ImportConfigDialog: FC = () => {
  // Modal context For closing:
  const { handleCloseModal } = use(modalCloseCtx);

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

  // Handlers:
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetWarnings();

    setFiles(e.target.files);
  };

  async function handleImportConfig() {
    resetWarnings();

    if (!fileInputRef.current || !fileInputRef.current.files || !files) return;
    const file = files[0] as File | null;

    console.log(`[ImportConfigDialog] file: ${JSON.stringify(file, null, 2)}`);

    if (!file || !(file instanceof File) || file.size === 0) {
      console.log(`[ImportConfigDialog]: NO FILE !!!`);

      setError(() => 'Please select a valid .json file.');

      fileInputRef.current.value = '';
      return;
    }

    try {
      const fileText = await file.text();
      const jsonData = JSON.parse(fileText);

      console.log(
        `[ImportConfigDialog]: jsonData: ${JSON.stringify(jsonData, null, 2)}`
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
        handleCloseModal();
      }
    } catch (error) {
      if (error instanceof Error) console.error(error);

      setError(() => 'The file appears to be corrupted or of a wrong format.');

      fileInputRef.current.value = '';
      return;
    }
  }

  function handleResetAndCancel() {
    resetWarnings();
    handleCloseModal();
  }

  // JSX:
  const errorMessage = error ? (
    <>
      <div
        style={{
          padding: '0 0.5rem',
          marginTop: '1rem',
          fontStyle: 'italic',
          color: '#ef4444',
          border: '2px solid #ef4444',
          borderRadius: '0.1rem',
          fontWeight: 'bold',
        }}
      >
        <h3 style={{ color: '#ef4444', marginTop: '0.5rem' }}>Error:</h3>
        <p className='' style={{}}>
          {error}
        </p>
      </div>
      <p>Please select another file.</p>
    </>
  ) : null;

  const warningsList = warnings.length ? (
    <>
      <p style={{ fontWeight: 'bold' }}>
        Configuration file contained some errors, that were automatically
        corrected:
      </p>
      <div
        style={{
          padding: '0.1rem',
          border: '1px solid black',
          borderRadius: '0.1rem',
          backgroundColor: '#fbbf24',
          fontStyle: 'italic',
          // fontWeight: '500',
        }}
      >
        <ul>
          {warnings.map((w, idx) => (
            <li key={`${idx}-${w}`}>{w}</li>
          ))}
        </ul>
      </div>
    </>
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
        style={{ minWidth: '5rem' }}
      >
        Import
      </Button>
    </>
  );

  return (
    <div
      id='import-config-dialog'
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
        <h3>Warning:</h3>
        <p>
          This will discard your current configuration, but will not affect the
          wheel, until applied.
        </p>
        <label htmlFor='configuration-file-input' className=''>
          Select a file:
          <br />
          <input
            ref={fileInputRef}
            onChange={handleFileChange}
            id='configuration-file-input'
            name='select configuration file'
            type='file'
            accept='.json'
            className={[styles.button, styles.default, styles.rectangle].join(
              ' '
            )}
          />
        </label>
        {errorMessage}
        {warningsList}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {Buttons}
      </div>
    </div>
  );
};

export default ImportConfigDialog;
