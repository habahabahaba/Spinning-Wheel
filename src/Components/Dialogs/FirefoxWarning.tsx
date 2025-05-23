// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Redux, RTK:
// Store:
// Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
import styles from './Dialogs.module.css';
// Types, interfaces and enumns:
import type { FC, Dispatch, SetStateAction } from 'react';
export interface FirefoxWarningProps {
  disableWarning: boolean;
  setDisableWarning: Dispatch<SetStateAction<boolean>>;
}

const FirefoxWarning: FC<FirefoxWarningProps> = ({
  disableWarning,
  setDisableWarning,
}) => {
  // Context:

  // Store:

  // Actions:

  // State:

  // Refs:

  // Effects:

  // Derived values:

  // Handlers:

  // JSX:
  return (
    <div className={mergeStyles(styles.container, styles.small)}>
      <div className={styles.warning_container}>
        <div className={styles.warning_danger} aria-live='assertive'>
          <h3 id='dialog-title'>Warning</h3>
          <p id='dialog-description'>
            Please consider disabling "<b>Zoom text only</b>" mode (
            <b>Menu: View: Zoom: Zoom text only</b>), as it will conflict with
            how the wheel is being rendered.
          </p>
        </div>
      </div>
      <div
        className={mergeStyles(styles.buttons_container, styles.buttons_wide)}
      >
        <label>
          Don't show this again
          <input
            type='checkbox'
            name='show-warning'
            value='disable'
            checked={disableWarning}
            onChange={() => {
              setDisableWarning((prev) => !prev);
            }}
            className={styles.checkbox_input}
          />
        </label>
      </div>
    </div>
  );
};

export default FirefoxWarning;
