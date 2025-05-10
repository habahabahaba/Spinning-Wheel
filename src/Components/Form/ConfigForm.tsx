// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
import SaveLoadMenu from './SaveLoadMenu';
import WheelDefaultsMenu from './WheelDefaultsMenu';
import OutcomesMenu from './OutcomesMenu';
import ConfigActionsMenu from './ConfigActionsMenu';
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
    <form className={mergeStyles(styles.config_form, styles.glass)}>
      <SaveLoadMenu />
      <WheelDefaultsMenu />
      <OutcomesMenu />
      <ConfigActionsMenu />
    </form>
  );
};

export default ConfigForm;
