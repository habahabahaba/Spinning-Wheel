// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { useState, useRef } from 'react';
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import SaveLoadConfigMenu from './SaveLoadConfigMenu';
import RadiusSelector from '../Selectors/RadiusSelector';
import PaletteSelector from '../Selectors/PaletteSelector';
import FontSelector from '../Selectors/FontSelector';
import OutcomeInputs from './OutcomeInputs';
import ExportConfigModal from '../Modals/ExportConfigModal';
import ImportConfigModal from '../Modals/ImportConfigModal';
import CheckFontsModal from '../Modals/CheckFontsModal';
import ResetConfigModal from '../Modals/ResetConfigModal';
// CSS:
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { ModalHandle } from '../UI/Modal';
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
  const checkAllFontsReady = useBoundStore((state) => state.checkAllFontsReady);

  // State:
  const [addQuantity, setAddQuantity] = useState<number>(1);

  // Refs (for modals):
  const resetConfigModalRef = useRef<ModalHandle>(null);
  const checkFontsModalRef = useRef<ModalHandle>(null);
  const exportConfigModalRef = useRef<ModalHandle>(null);
  const importConfigModalRef = useRef<ModalHandle>(null);

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

    if (checkAllFontsReady()) {
      applyConfig();
    } else {
      checkFontsModalRef?.current?.handleShowModal();
    }
  }

  function handleOpenExportModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    exportConfigModalRef.current?.handleShowModal();
  }

  function handleOpenImportModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    importConfigModalRef.current?.handleShowModal();
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
          <label>
            Wheel size:
            <RadiusSelector />
          </label>

          <label>
            Default colors:
            <PaletteSelector />
          </label>

          <label>
            Default font:
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
              shape='rounded'
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
              // flexWrap: 'wrap',
              // gap: '0.5rem',
              justifyContent: 'space-between',
              alignItems: 'center',
              // maxWidth: '100%',
              margin: '0.5rem',
            }}
          >
            <div
              style={{
                // width: '90%',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                justifyContent: 'space-between',
                alignItems: 'center',
                // maxWidth: '100%',
                // margin: '0.5rem',
              }}
            >
              <Button
                id='config-form-export-button'
                name='export configuration'
                onClick={handleOpenExportModal}
              >
                Export
              </Button>
              <Button
                variant='warning'
                id='config-form-import-button'
                name='import configuration'
                onClick={handleOpenImportModal}
              >
                Import
              </Button>
            </div>
            <div
              style={{
                // width: '90%',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                justifyContent: 'space-between',
                alignItems: 'center',
                // maxWidth: '100%',
                // margin: '0.5rem',
              }}
            >
              <Button
                variant='warning'
                id='config-form-reset-button'
                name='reset configuration'
                onClick={handleOpenResetModal}
              >
                Reset
              </Button>
              <Button
                variant='success'
                id='config-form-apply-button'
                name='apply configuration'
                onClick={handleApplyConfig}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </form>
      <ExportConfigModal ref={exportConfigModalRef} />
      <ImportConfigModal ref={importConfigModalRef} />

      <ResetConfigModal ref={resetConfigModalRef} />
      <CheckFontsModal ref={checkFontsModalRef} />
    </>
  );
};

export default ConfigForm;
