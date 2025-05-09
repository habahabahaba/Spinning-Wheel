// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { useRef } from 'react';
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import SaveLoadMenu from './SaveLoadMenu';
import WheelDefaultsMenu from './WheelDefaultsMenu';
import OutcomesMenu from './OutcomesMenu';
import ExportConfigDialog from '../Dialogs/ExportConfigDialog';
import ImportConfigDialog from '../Dialogs/ImportConfigDialog';
import CheckFontsDialog from '../Dialogs/CheckFontsDialog';
import ResetConfigDialog from '../Dialogs/ResetConfigDialog';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { DialogHandle } from '../UI/Dialog';
// interface ConfigFormProps {}

const ConfigForm: FC = () => {
  // Store:

  // Actions:
  const applyConfig = useBoundStore((state) => state.applyConfig);
  const resetWinningOutcomeIdx = useBoundStore(
    (state) => state.resetWinningOutcomeIdx
  );
  const checkAllFontsReady = useBoundStore((state) => state.checkAllFontsReady);

  // State:

  // Refs (for modals):
  const resetConfigDialogRef = useRef<DialogHandle>(null);
  const checkFontsDialogRef = useRef<DialogHandle>(null);
  const exportConfigDialogRef = useRef<DialogHandle>(null);
  const importConfigDialogRef = useRef<DialogHandle>(null);

  // Handlers
  function handleApplyConfig(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetWinningOutcomeIdx();

    if (checkAllFontsReady()) {
      applyConfig();
    } else {
      checkFontsDialogRef?.current?.handleShowDialog();
    }
  }

  function handleOpenExportModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    exportConfigDialogRef.current?.handleShowDialog();
  }

  function handleOpenImportModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    importConfigDialogRef.current?.handleShowDialog();
  }

  function handleOpenResetModal(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetConfigDialogRef.current?.handleShowDialog();
  }

  // JSX:
  return (
    <>
      <form className={mergeStyles(styles.config_form, styles.glass)}>
        <SaveLoadMenu />
        <WheelDefaultsMenu />
        <OutcomesMenu />
        <div
          style={{
            width: 'auto',
            display: 'flex',
            // flexWrap: 'wrap',
            // gap: '0.5rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0.5rem',
            // marginTop: 'auto',
            // alignSelf: 'flex-end',
            justifySelf: 'last baseline',
            // justifySelf: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              // flexWrap: 'wrap',
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
      </form>
      <ExportConfigDialog ref={exportConfigDialogRef} />
      <ImportConfigDialog ref={importConfigDialogRef} />
      <ResetConfigDialog ref={resetConfigDialogRef} />

      <CheckFontsDialog ref={checkFontsDialogRef} />
    </>
  );
};

export default ConfigForm;
