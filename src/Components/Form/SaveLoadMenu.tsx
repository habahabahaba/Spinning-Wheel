// Assets:
// Constants:
// Utils:
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
import styles from './SaveLoadMenu.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { DialogHandle } from '../UI/Dialog';
// interface SaveLoadConfigMenuProps {}

const SaveLoadConfigMenu: FC = () => {
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
      <menu className={styles.menu}>
        <span className={styles.label}>Save / Load configuration:</span>
        <SaveSlotSelector
          value={saveIdx}
          onChange={(value) => {
            setSaveIdx(() => +value);
          }}
        />
        <Button
          variant='warning'
          id='open-load-config-form'
          name='Start loading configuration'
          disabled={!savedConfigs[saveIdx]}
          onClick={handleOpenLoadModal}
        >
          Load
        </Button>
        <Button
          id='open-save-config-form'
          name='Start saving configuration'
          disabled={saveIdx < 0 || saveIdx > 9}
          onClick={handleOpenSaveModal}
        >
          Save
        </Button>
      </menu>
      <SaveConfigDialog saveIdx={saveIdx} ref={saveConfigDialogRef} />
      <LoadConfigDialog saveIdx={saveIdx} ref={loadConfigDialogRef} />
    </>
  );
};

export default SaveLoadConfigMenu;
