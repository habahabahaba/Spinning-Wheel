// Constants:
// Fonts:
import { FONT_IMPORTS } from './constants/fontFamilies';
// Store:
import useBoundStore from './store/boundStore';
// React:
import { useEffect, useRef } from 'react';
// Components:
import Main from './Components/Main';
import ConfigForm from './Components/Form/ConfigForm';
// import FontsDisplay from './Components/FontsDisplay';
// Types, interfaces and enumns:
import type { RemoteFontNames } from './constants/fontFamilies';

function App() {
  // Actions:
  const markLoadedFont = useBoundStore((state) => state.markLoadedFont);
  const markAllFontsReady = useBoundStore((state) => state.markAllFontsReady);
  // const checkFont = useBoundStore((state) => state.checkFont);

  // Refs:
  const numberOfPendingRef = useRef<number>(Object.keys(FONT_IMPORTS).length);

  // Loading additional fonts:
  useEffect(() => {
    Object.entries(FONT_IMPORTS).forEach(async function loadRemoteFonts([
      font,
      loader,
    ]) {
      try {
        await loader();
        await document.fonts.load(`600 1em "${font}"`);
        if (document.fonts.check(`600 1em "${font}"`)) {
          markLoadedFont(font as RemoteFontNames);
          numberOfPendingRef.current--;
        }
        if (numberOfPendingRef.current === 0) {
          markAllFontsReady(true);
        }
      } catch (err) {
        console.error(`Failed to load font: ${font}`, err);

        // Retry download after a cool-down:
        setTimeout(() => {
          loadRemoteFonts([font, loader]);
        }, 2000 + Math.floor(Math.random() * 1000));
      }
    });
  }, [markLoadedFont, markAllFontsReady]);

  return (
    <>
      <Main />
      <ConfigForm />
      {/* <FontsDisplay /> */}
    </>
  );
}

export default App;
