// Utils:
import { mergeStyles } from '../../utils/css';
// Constants:
// import { WHEEL_RADII_MAP } from '../../constants/radii';
// 3rd party:
// Store:
// import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { forwardRef } from 'react';
// Context:
// Hooks:
// Components:
import Dialog from '../UI/Dialog';
import ResultDisplay from './ResultDisplay';
// CSS:
import styles from './ResultDisplay.module.css';
// Types, interfaces and enumns:
import type { ForwardedRef } from 'react';
import type { DialogHandle } from '../UI/Dialog';

const ResultDisplayDialog = forwardRef<DialogHandle>(
  (_, ref: ForwardedRef<DialogHandle>) => {
    // Store:
    // const radiusName = useBoundStore((state) => state.activeConfig.radiusName);
    // const wheelRadius = WHEEL_RADII_MAP[radiusName];
    // const dY = 59.5 + (wheelRadius * 12) / 5;
    // const dX = (wheelRadius * 73) / 30;

    // JSX:
    return (
      <Dialog
        ref={ref}
        className={mergeStyles(styles.drop_down, 'top-shadow')}
        style={{
          position: 'relative',
          top: `15px`,
          border: 'none',
          padding: 0,
        }}
      >
        <ResultDisplay />
      </Dialog>
    );
  }
);

export default ResultDisplayDialog;
