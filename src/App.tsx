// Utils:
// Constants:
// import {
//   FONT_FAMILIES_REMOTE,
//   createFontUrl,
//   REMOTE_FONT_SUBSETS,
// } from './constants/fonts';
// 3rd party:
// import { useShallow } from 'zustand/shallow';
// Store:
import useBoundStore from './store/boundStore';
// React:
import { useEffect, useRef, useState } from 'react';
// Hooks:
import useFirefoxTextZoom from './hooks/useFirefoxTextZoom';

// import useFontsLoader from './hooks/useFontsLoader';
// Components:
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import ConfigForm from './Components/Form/ConfigForm';
import Wallpaper from './Components/UI/Wallpaper';
import FirefoxWarningDialog from './Components/Dialogs/FirefoxWarningDialog';
// import FontsDisplay from './Components/FontsDisplay';

// Types, interfaces and enumns:
import type { DialogHandle } from './Components/UI/Dialog';

function App() {
  // Store:
  const location = useBoundStore((state) => state.currentLocation);

  // Check for "Zoom text only" in FIREFOX:
  // State:
  const [showWarning, setShowWarning] = useState<boolean>(true);
  console.log(`[Main] showWarning: ${showWarning}`);
  const firefoxTextZoomActive = useFirefoxTextZoom();
  // Refs:
  const warningDialogRef = useRef<DialogHandle>(null);
  // Effects:
  useEffect(() => {
    if (!CSS.supports('-moz-appearance:none') || !showWarning) return;

    if (firefoxTextZoomActive) {
      console.log('Firefox Text Zoom is active');
      if (showWarning && location === 'Main') {
        warningDialogRef.current?.handleShowDialog();
      }
    }
  }, [firefoxTextZoomActive, showWarning, location]);

  // console.log('[App]');
  // JSX:
  return (
    <>
      <NavBar />
      {location === 'Main' ? <Main /> : <ConfigForm />}
      {/* <FontsDisplay /> */}
      <Wallpaper
        variant={location === 'Main' ? 0 : 1}
        colorIdx0={location === 'Main' ? 0 : 2}
        colorIdx1={0}
        style={{
          opacity: '0.9',
        }}
      />
      <FirefoxWarningDialog
        ref={warningDialogRef}
        setShowWarning={setShowWarning}
      />
    </>
  );
}

export default App;
