// Assets:
// Constants:
// Utils:
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { useRef } from 'react';
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import ExportConfigDialog from '../Dialogs/ExportConfigDialog';
import ImportConfigDialog from '../Dialogs/ImportConfigDialog';
import ResetConfigDialog from '../Dialogs/ResetConfigDialog';
import CheckFontsDialog from '../Dialogs/CheckFontsDialog';
// CSS:
import styles from './ConfigActionsMenu.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { DialogHandle } from '../UI/Dialog';
// interface ConfigActionsMenuProps {}

const ConfigActionsMenu: FC = () => {
  // Context:

  // Store:

  // Actions:
  const applyConfig = useBoundStore((state) => state.applyConfig);
  const resetWinningOutcomeIdx = useBoundStore(
    (state) => state.resetWinningOutcomeIdx
  );
  const checkAllFontsReady = useBoundStore((state) => state.checkAllFontsReady);

  // State:

  // Refs (for modals):
  const exportConfigDialogRef = useRef<DialogHandle>(null);
  const importConfigDialogRef = useRef<DialogHandle>(null);
  const resetConfigDialogRef = useRef<DialogHandle>(null);
  const checkFontsDialogRef = useRef<DialogHandle>(null);

  // Effects:

  // Derived values:

  // Handlers:
  function handleOpenExportDialog(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    exportConfigDialogRef.current?.handleShowDialog();
  }

  function handleOpenImportDialog(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    importConfigDialogRef.current?.handleShowDialog();
  }

  function handleOpenResetDialog(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetConfigDialogRef.current?.handleShowDialog();
  }

  function handleApplyConfig(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetWinningOutcomeIdx();

    if (checkAllFontsReady()) {
      applyConfig();
    } else {
      checkFontsDialogRef?.current?.handleShowDialog();
    }
  }

  // JSX:
  return (
    <>
      <div className={styles.config_actions_menu}>
        <div className={styles.buttons_container}>
          <Button
            id='config-form-export-button'
            name='export configuration'
            onClick={handleOpenExportDialog}
          >
            Export
          </Button>
          <Button
            variant='warning'
            id='config-form-import-button'
            name='import configuration'
            onClick={handleOpenImportDialog}
          >
            Import
          </Button>
        </div>
        <div className={styles.buttons_container}>
          <Button
            variant='warning'
            id='config-form-reset-button'
            name='reset configuration'
            onClick={handleOpenResetDialog}
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

      <ExportConfigDialog ref={exportConfigDialogRef} />
      <ImportConfigDialog ref={importConfigDialogRef} />
      <ResetConfigDialog ref={resetConfigDialogRef} />

      <CheckFontsDialog ref={checkFontsDialogRef} />
    </>
  );
};

export default ConfigActionsMenu;
