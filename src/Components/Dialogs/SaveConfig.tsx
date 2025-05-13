// Assets:
// Constants:
// Utils:
import { getCurrentDate } from '../../utils/date';
import { mergeStyles } from '../../utils/css';
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
import styles from './SaveConfig.module.css';
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
    <div className={styles.save_config_warning}>
      <h3>Warning</h3>
      <p>
        This will overwrite your older configuration:
        <span>{` ${prevConfig.configName}`}</span>
      </p>
    </div>
  ) : null;

  return (
    <form className={styles.save_config_form} onSubmit={handleSaveConfig}>
      <div>
        <label
          className={mergeStyles(styles.config_name_label, 'label')}
          htmlFor='config-name-input'
        >
          Configuration name
        </label>
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
          className={mergeStyles(styles.config_name_input, 'input-text')}
        />
      </div>
      {warning}
      <div className={styles.cancel_save_buttons_container}>
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
        >
          {prevConfig ? 'Overwrite' : 'Save'}
        </Button>
      </div>
    </form>
  );
};

export default SaveConfig;
