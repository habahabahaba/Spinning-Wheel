// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
import { useState, useRef } from 'react';
// Context:
// Hooks:
// Components:
import SaveSlotSelector from './SaveSlotSelector';
import SaveConfigModal from './SaveConfigModal';
import LoadConfigModal from './LoadConfigModal';
import ResetConfigModal from './ResetConfigModal';
import RadiusSelector from './RadiusSelector';
import PaletteSelector from './PaletteSelector';
import FontSelector from './FontSelector';
import OutcomeInputs from './OutcomeInputs';
import Button from './Button';
// CSS:
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { ModalHandle } from './Modal';
// interface ConfigFormProps {}

const ConfigForm: FC = () => {
  // Store:
  const outcomesLength = useBoundStore(
    (state) => state.currentConfig.outcomes.length
  );
  const possibleQuantity = 72 - outcomesLength;

  // Actions:
  const addBlankOutcomes = useBoundStore((state) => state.addBlankOutcomes);
  const applyConfig = useBoundStore((state) => state.applyConfig);
  const resetWinningOutcomeIdx = useBoundStore(
    (state) => state.resetWinningOutcomeIdx
  );

  // State:
  const [addQuantity, setAddQuantity] = useState<number>(1);
  const [saveIdx, setSaveIdx] = useState<number>(-1);

  // Refs (for modals):
  const saveConfigModalRef = useRef<ModalHandle>(null);
  const loadConfigModalRef = useRef<ModalHandle>(null);
  const resetConfigModalRef = useRef<ModalHandle>(null);

  // Handlers
  function handleAddOutcomes(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if (outcomesLength > 71) return;
    const quantity = Math.max(1, Math.min(possibleQuantity, addQuantity));

    addBlankOutcomes({ quantity });
  }

  function handleApplyConfig(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetWinningOutcomeIdx();
    applyConfig();
  }

  function handleOpenSaveModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    saveConfigModalRef.current?.handleShowModal();
  }

  function handleOpenLoadModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    loadConfigModalRef.current?.handleShowModal();
  }

  function handleOpenResetModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetConfigModalRef.current?.handleShowModal();
  }

  // JSX:
  const outcomes = Array.from({ length: outcomesLength }, () => null).map(
    (_, idx) => <OutcomeInputs index={idx} key={idx} />
  );

  return (
    <>
      <form>
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
              id='open-save-config-form'
              name='Start saving configuration'
              disabled={saveIdx < 0 || saveIdx > 9}
              onClick={handleOpenSaveModal}
            >
              Save
            </Button>
            <Button
              variant='warning'
              id='open-load-config-form'
              name='Start loading configuration'
              disabled={saveIdx < 0 || saveIdx > 9}
              onClick={handleOpenLoadModal}
            >
              Load
            </Button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'start',
            alignItems: 'center',
            // maxWidth: '100%',
            margin: '0.5rem',
          }}
        >
          <span>Wheel size:</span>
          <RadiusSelector />

          <span>Default colors:</span>
          <PaletteSelector />

          <span>Default Font:</span>
          <FontSelector outcomeIdx={-1} />
        </div>
        {outcomes}
        <div>
          <div
            style={{
              width: '90%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'end',
              alignItems: 'center',
              // maxWidth: '100%',
              margin: '0.5rem',
            }}
          >
            <input
              style={{
                minHeight: '1.5rem',
                padding: '0.25.rem',
                border: '1px solid',
                borderRadius: ' 0.1rem',
                minWidth: '2rem',
              }}
              type='number'
              min={1}
              max={possibleQuantity}
              step={1}
              value={addQuantity}
              onChange={(ev) => {
                setAddQuantity(+ev.target.value);
              }}
            />
            <Button
              onClick={handleAddOutcomes}
              disabled={addQuantity > possibleQuantity}
            >
              Add
            </Button>
          </div>
          <div
            style={{
              // width: '90%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'end',
              alignItems: 'center',
              // maxWidth: '100%',
              margin: '0.5rem',
            }}
          >
            <Button variant='warning' onClick={handleOpenResetModal}>
              Reset
            </Button>
            <Button variant='success' onClick={handleApplyConfig}>
              Apply
            </Button>
          </div>
        </div>
      </form>
      <SaveConfigModal saveIdx={saveIdx} ref={saveConfigModalRef} />
      <LoadConfigModal saveIdx={saveIdx} ref={loadConfigModalRef} />
      <ResetConfigModal ref={resetConfigModalRef} />
    </>
  );
};

export default ConfigForm;
