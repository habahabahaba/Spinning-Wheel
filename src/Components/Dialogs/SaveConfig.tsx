// Assets:
// Constants:
// Utils:
import { getCurrentDate } from '../../utils/date';
// 3rd party:
// Redux, RTK:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { use, useState } from 'react';
// Context:
import dialogCloseCtx from '../../context/dialogCloseCtx';
// Hooks:
// Components:
import Button from '../UI/Button';
// CSS:
// Types, interfaces and enumns:
import type { FC, FormEvent, ChangeEventHandler } from 'react';
export interface SaveConfigProps {
  saveIdx: number;
}

const SaveConfig: FC<SaveConfigProps> = ({ saveIdx }) => {
  // Modal context For closing:
  const { handleCloseDialog } = use(dialogCloseCtx);
  if (saveIdx < 0 || saveIdx > 9) {
    handleCloseDialog();
  }

  // Store:
  const prevConfig = useBoundStore((state) => state.savedConfigs[saveIdx]);
  // Actions:
  const saveCurrentConfig = useBoundStore((state) => state.saveCurrentConfig);

  // State:
  const [inputValue, setInputValue] = useState<string>(
    prevConfig?.configName || ''
  );

  // Handlers:
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setInputValue(ev.target.value);
  };

  function handleSaveConfig(ev: FormEvent) {
    ev.preventDefault();

    const configName =
      inputValue.trim() || prevConfig?.configName || getCurrentDate();

    saveCurrentConfig({ saveIdx, configName });

    setInputValue(() => '');
    handleCloseDialog();
  }

  // JSX:
  const warning = prevConfig ? (
    <div>
      <p style={{ color: 'red' }}>
        This will overwrite your older configuration:
        <span
          style={{ color: 'initial', fontWeight: 'bold' }}
        >{` ${prevConfig.configName}`}</span>
      </p>
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
        padding: '0.25rem',
      }}
      onSubmit={handleSaveConfig}
    >
      <div style={{ padding: '0.5rem' }}>
        <label
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          Configuration name:
          <input
            id='config-name-input'
            name='Configuration name'
            type='text'
            minLength={1}
            maxLength={35}
            placeholder='Enter configuration name'
            value={inputValue || prevConfig?.configName || ''}
            onChange={handleInputChange}
            // defaultValue={prevConfig ? prevConfig.configName : undefined}
            style={{
              minHeight: '1.5rem',
              padding: '0.25.rem',
              border: '1px solid',
              borderRadius: ' 0.1rem',
              minWidth: '15rem',
            }}
          />
        </label>
        {warning}
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
          id='cancel-save-config-button'
          name='Cancel and close form'
          onClick={handleCloseDialog}
          type='reset'
        >
          Cancel
        </Button>
        <Button
          variant={prevConfig ? 'danger' : 'success'}
          id='save-config-button'
          name='Save configuration'
          type='submit'
          style={{ minWidth: '5rem' }}
        >
          {prevConfig ? 'Overwrite' : 'Save'}
        </Button>
      </div>
    </form>
  );
};

export default SaveConfig;
