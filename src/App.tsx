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
// import { useEffect, useRef } from 'react';
// Hooks:
// import useFontsLoader from './hooks/useFontsLoader';
// Components:
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import ConfigForm from './Components/Form/ConfigForm';
import Wallpaper from './Components/UI/Wallpaper';
// import FontsDisplay from './Components/FontsDisplay';

// Types, interfaces and enumns:
// import type { RemoteFontNames, AllSubsets } from './constants/fonts';

function App() {
  // Store:
  const location = useBoundStore((state) => state.currentLocation);

  // Start loading fonts:
  // useFontsLoader();
  console.log('[App]');
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
    </>
  );
}

export default App;
