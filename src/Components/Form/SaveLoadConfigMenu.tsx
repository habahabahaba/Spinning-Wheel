// Assets:
// Constants:
// Utils:
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
import LoadConfigModal from '../Modals/LoadConfigModal';
import SaveConfigModal from '../Modals/SaveConfigModal';
// CSS:
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { ModalHandle } from '../UI/Modal';
// interface SaveLoadConfigMenuProps {}

const SaveLoadConfigMenu: FC = () => {
  // Store:
  const savedConfigs = useBoundStore((state) => state.savedConfigs);

  // State:
  const [saveIdx, setSaveIdx] = useState<number>(-1);

  // Refs:
  const saveConfigModalRef = useRef<ModalHandle>(null);
  const loadConfigModalRef = useRef<ModalHandle>(null);

  // Handlers:
  function handleOpenSaveModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    saveConfigModalRef.current?.handleShowModal();
  }

  function handleOpenLoadModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    loadConfigModalRef.current?.handleShowModal();
  }
  // JSX:
  return (
    <>
      <div
        style={{
          maxWidth: '100vw',
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'end',
          margin: '0.5rem',
        }}
      >
        <span>Save / Load configuration:</span>
        <SaveSlotSelector
          value={saveIdx}
          onChange={(value) => {
            setSaveIdx(() => +value);
          }}
        />
        <div style={{ display: 'flex', gap: '0.5rem' }}>
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
        </div>
      </div>
      <SaveConfigModal saveIdx={saveIdx} ref={saveConfigModalRef} />
      <LoadConfigModal saveIdx={saveIdx} ref={loadConfigModalRef} />
    </>
  );
};

export default SaveLoadConfigMenu;
