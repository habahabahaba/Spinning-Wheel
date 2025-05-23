// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
import SaveLoadMenu from './SaveLoadConfigPanel';
import WheelDefaultsMenu from './WheelDefaultsPanel';
import OutcomesMenu from './OutcomesPanel';
import ConfigActionsMenu from './ConfigActionsPanel';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
// interface ConfigFormProps {}

const ConfigForm: FC = () => {
  // Store:

  // Actions:

  // State:

  // Refs:

  // Handlers

  // JSX:
  return (
    <form
      aria-label='Configuration form for editing the wheel and outcomes'
      className={mergeStyles(styles.config_form, 'center-shadow')}
    >
      <SaveLoadMenu />
      <WheelDefaultsMenu />
      <OutcomesMenu />
      <ConfigActionsMenu />
    </form>
  );
};

export default ConfigForm;
