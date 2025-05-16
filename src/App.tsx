// Constants:
// Fonts:
import { FONT_IMPORTS } from './constants/fonts';
// Store:
import useBoundStore from './store/boundStore';
// React:
import { useEffect, useRef } from 'react';
// Components:
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import ConfigForm from './Components/Form/ConfigForm';
import Wallpaper from './Components/UI/Wallpaper';
// import FontsDisplay from './Components/FontsDisplay';

// Types, interfaces and enumns:
import type { RemoteFontNames } from './constants/fonts';

function App() {
  // Store:
  const location = useBoundStore((state) => state.currentLocation);
  // Actions:
  const markLoadedFont = useBoundStore((state) => state.markLoadedFont);
  const markAllFontsReady = useBoundStore((state) => state.markAllFontsReady);
  // const checkFont = useBoundStore((state) => state.checkFont);

  // Refs:
  const numberOfPendingRef = useRef<number>(Object.keys(FONT_IMPORTS).length);

  // Loading additional fonts:
  useEffect(() => {
    Object.entries(FONT_IMPORTS).forEach(([font, loader]) => {
      const loadFont = async () => {
        try {
          document.fonts.forEach((f) =>
            console.log('[ document.fonts]', f.family, f.weight)
          );
          await loader();
          // Wait a tick to allow the browser to register @font-face from the injected <style>
          // await new Promise((resolve) => setTimeout(resolve, 100));
          await document.fonts.load(`600 1em "${font}"`);

          // await document.fonts.ready;

          if (document.fonts.check(`600 1em "${font}"`)) {
            markLoadedFont(font as RemoteFontNames);
            numberOfPendingRef.current--;
          } else {
            console.warn(
              `Font "${font}" loaded but didn't pass document.fonts.check`
            );
          }
        } catch (err) {
          console.error(`Failed to load font: ${font}`, err);

          // Retry with backoff
          setTimeout(loadFont, 2000 + Math.floor(Math.random() * 1000));
        } finally {
          if (numberOfPendingRef.current <= 0) {
            markAllFontsReady(true);
          }
        }
      };

      // Immediately run loader
      loadFont();
    });
  }, [markLoadedFont, markAllFontsReady]);

  return (
    <>
      <NavBar />
      {location === 'Main' ? <Main /> : <ConfigForm />}
      {/* <FontsDisplay /> */}
      <Wallpaper
        variant={location === 'Main' ? 2 : 3}
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
