// Assets:
// Constants:
// Utils:
import { isFirefox } from '../utils/browser';
// 3rd party:
// Redux, RTK:
// Store:
// Router:
import { useEffect, useRef, useState } from 'react';
// Hooks:
import useFirefoxTextZoom from '../hooks/useFirefoxTextZoom';
// Context:
// Components:
import FirefoxWarningDialog from './Dialogs/FirefoxWarningDialog';

// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { DialogHandle } from './UI/Dialog';
import type { NavigationLocation } from '../store/types';
interface FirefoxCheckProps {
  location: NavigationLocation;
}

const FirefoxCheck: FC<FirefoxCheckProps> = ({ location }) => {
  // Context:

  // Store:

  // Actions:

  // Check for "Zoom text only" in FIREFOX:
  // State:
  const [disableWarning, setDisableWarning] = useState<boolean>(false);

  const firefoxTextZoomActive = useFirefoxTextZoom();
  // Refs:
  const warningDialogRef = useRef<DialogHandle>(null);
  // Effects:
  useEffect(() => {
    if (!CSS.supports('-moz-appearance:none') || disableWarning) return;

    if (firefoxTextZoomActive && !disableWarning && location === 'Main') {
      // console.log('Firefox Text Zoom is active');
      warningDialogRef.current?.handleShowDialog();
    }
  }, [firefoxTextZoomActive, disableWarning, location]);

  // Derived values:

  // Handlers:

  // JSX:
  return isFirefox ? (
    <FirefoxWarningDialog
      ref={warningDialogRef}
      disableWarning={disableWarning}
      setDisableWarning={setDisableWarning}
    />
  ) : null;
};

export default FirefoxCheck;
