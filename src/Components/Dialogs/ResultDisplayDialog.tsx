// Constants:
import { WHEEL_RADII_MAP } from '../../constants/radii';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
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
    const radiusName = useBoundStore((state) => state.activeConfig.radiusName);
    const wheelRadius = WHEEL_RADII_MAP[radiusName];
    const dY = (wheelRadius * 12) / 5;
    const dX = (wheelRadius * 73) / 30;

    // JSX:
    return (
      <Dialog
        ref={ref}
        className={styles.drop_down}
        style={{
          position: 'relative',
          // position: 'absolute',
          top: `min(calc(${dY}px - 100vh), 50vh)`,
          right: `calc(100vw - ${dX}px)`,
          // zIndex: -1,
        }}
      >
        <ResultDisplay />
      </Dialog>
    );
  }
);

export default ResultDisplayDialog;
