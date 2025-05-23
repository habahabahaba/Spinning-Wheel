// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { useState, useRef } from 'react';
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import SaveSlotSelector from '../Selectors/SaveSlotSelector';
import LoadConfigDialog from '../Dialogs/LoadConfigDialog';
import SaveConfigDialog from '../Dialogs/SaveConfigDialog';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { DialogHandle } from '../UI/Dialog';
// interface SaveLoadConfigPanelProps {}

const SaveLoadConfigPanel: FC = () => {
  // Store:
  const savedConfigs = useBoundStore((state) => state.savedConfigs);

  // State:
  const [saveIdx, setSaveIdx] = useState<number>(-1);

  // Refs:
  const saveConfigDialogRef = useRef<DialogHandle>(null);
  const loadConfigDialogRef = useRef<DialogHandle>(null);

  // Handlers:
  function handleOpenSaveModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    saveConfigDialogRef.current?.handleShowDialog();
  }

  function handleOpenLoadModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    loadConfigDialogRef.current?.handleShowDialog();
  }
  // JSX:
  return (
    <>
      <fieldset className={styles.save_load_panel}>
        <legend className='sr-only'>Save or Load configuration</legend>
        <span className={mergeStyles(styles.label, styles.save_load_label)}>
          Save / Load configuration:
        </span>
        <SaveSlotSelector
          value={saveIdx}
          onChange={(value) => {
            setSaveIdx(() => +value);
          }}
          className={styles.save_load_select}
        />
        <div
          className={mergeStyles(
            styles.buttons_container,
            styles.save_load_buttons_container
          )}
        >
          <Button
            variant='warning'
            id='open-load-config-form'
            name='Start loading configuration'
            disabled={!savedConfigs[saveIdx]}
            onClick={handleOpenLoadModal}
            aria-haspopup='dialog'
          >
            Load
          </Button>
          <Button
            id='open-save-config-form'
            name='Start saving configuration'
            disabled={saveIdx < 0 || saveIdx > 9}
            onClick={handleOpenSaveModal}
            aria-haspopup='dialog'
          >
            Save
          </Button>
        </div>
      </fieldset>
      <SaveConfigDialog saveIdx={saveIdx} ref={saveConfigDialogRef} />
      <LoadConfigDialog saveIdx={saveIdx} ref={loadConfigDialogRef} />
    </>
  );
};

export default SaveLoadConfigPanel;
