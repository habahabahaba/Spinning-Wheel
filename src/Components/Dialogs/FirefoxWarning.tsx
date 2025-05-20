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
import type { FC } from 'react';
export interface FirefoxWarningProps {
  setShowWarning: (boolean: boolean) => void;
}

const FirefoxWarning: FC<FirefoxWarningProps> = ({ setShowWarning }) => {
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
    <div className={mergeStyles(styles.container, styles.x_small)}>
      <div className={styles.warning_container}>
        <div className={styles.warning_danger}>
          <h3>Warning</h3>
          <p>
            Please consider disabling "Zoom text only" mode (View: Zoom), as it
            will conflict with the text inside the wheel.
          </p>
        </div>
      </div>
      <div
        className={mergeStyles(styles.buttons_container, styles.buttons_wide)}
      >
        Don't show this again{' '}
        <input
          type='checkbox'
          value='disable'
          onChange={(ev) => {
            console.log(ev);
            if (ev.target.value === 'disable') {
              setShowWarning(false);
            } else {
              setShowWarning(true);
            }
          }}
        />
      </div>
    </div>
  );
};

export default FirefoxWarning;
