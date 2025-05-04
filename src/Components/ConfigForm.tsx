// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
import { useState, useRef } from 'react';
// Context:
// Hooks:
// Components:
import SaveLoadConfigMenu from './SaveLoadConfigMenu';
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
  const validQuantity = 72 - outcomesLength;

  // Actions:
  const addBlankOutcomes = useBoundStore((state) => state.addBlankOutcomes);
  const applyConfig = useBoundStore((state) => state.applyConfig);
  const resetWinningOutcomeIdx = useBoundStore(
    (state) => state.resetWinningOutcomeIdx
  );

  // State:
  const [addQuantity, setAddQuantity] = useState<number>(1);

  // Refs (for modals):
  const resetConfigModalRef = useRef<ModalHandle>(null);

  // Handlers
  function handleAddOutcomes(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if (outcomesLength > 71) return;
    const quantity = Math.max(1, Math.min(validQuantity, addQuantity));

    addBlankOutcomes({ quantity });
  }

  function handleApplyConfig(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetWinningOutcomeIdx();
    applyConfig();
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
        <SaveLoadConfigMenu />
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
          <RadiusSelector />

          <PaletteSelector />

          <label>
            Main font:
            <FontSelector outcomeIdx={-1} />{' '}
          </label>
        </div>
        <div
          style={{
            minHeight: '8rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            gap: '0.05rem',
            padding: '0.25rem',
          }}
        >
          {outcomes}
        </div>
        <div>
          <div
            style={{
              width: '95%',
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
                paddingLeft: '0.25rem',
                border: '1px solid',
                borderRadius: ' 0.1rem',
                minWidth: '2rem',
              }}
              type='number'
              min={1}
              max={validQuantity}
              step={1}
              value={addQuantity}
              onChange={(ev) => {
                setAddQuantity(+ev.target.value);
              }}
            />
            <Button
              variant='default'
              // shape='rounded'
              onClick={handleAddOutcomes}
              disabled={addQuantity > validQuantity}
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
      <ResetConfigModal ref={resetConfigModalRef} />
    </>
  );
};

export default ConfigForm;
