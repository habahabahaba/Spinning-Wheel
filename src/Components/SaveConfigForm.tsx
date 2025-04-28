// Assets:
// Constants:
// Utils:
import { getCurrentDate } from '../utils/date';
// 3rd party:
// Redux, RTK:
// Store:
import useBoundStore from '../store/boundStore';
// Router:
// React:
import { use, useRef } from 'react';
// Context:
import modalCloseCtx from '../context/modalCloseCtx';
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC, FormEvent } from 'react';
export interface SaveConfigFormProps {
  saveIdx: number;
}

const SaveConfigForm: FC<SaveConfigFormProps> = ({ saveIdx }) => {
  // Modal context For closing:
  const { handleCloseModal } = use(modalCloseCtx);
  if (saveIdx < 0 || saveIdx > 9) {
    handleCloseModal();
  }

  // Store:
  const prevConfig = useBoundStore((state) => state.savedConfigs[saveIdx]);
  // Actions:
  const saveCurrentConfig = useBoundStore((state) => state.saveCurrentConfig);
  // Refs:
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Handlers:
  function handleSaveConfig(ev: FormEvent) {
    ev.preventDefault();

    const configName = nameInputRef.current?.value || getCurrentDate();
    saveCurrentConfig({ saveIdx, configName });

    if (nameInputRef.current && nameInputRef.current.value) {
      nameInputRef.current.value = '';
    }
    handleCloseModal();
  }

  // JSX:
  const warning = prevConfig ? (
    <div>
      <p style={{ color: 'red' }}>
        This will overwrite your older configuration:
      </p>
      <p
        style={{ color: 'initial', fontWeight: 'bold' }}
      >{`${prevConfig.configName}`}</p>
    </div>
  ) : null;

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        minWidth: '50%',
        minHeight: '8rem',
        padding: '1rem',
      }}
      onSubmit={handleSaveConfig}
    >
      <label
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        Configuration name:
        <input
          id='config-name-input'
          name='Configuration name'
          type='text'
          minLength={1}
          maxLength={25}
          placeholder={
            prevConfig ? prevConfig.configName : 'Enter configuration name'
          }
          // defaultValue={prevConfig ? prevConfig.configName : undefined}
          ref={nameInputRef}
          style={{ minWidth: '15rem' }}
        />
      </label>
      {warning}
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        <button
          id='cancel-save-config-button'
          name='Cancel and close form'
          onClick={handleCloseModal}
          type='reset'
        >
          Cancel
        </button>
        <button
          id='save-config-button'
          name='Save configuration'
          type='submit'
          style={{ minWidth: '5rem' }}
        >
          {prevConfig ? 'Overwrite' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default SaveConfigForm;
