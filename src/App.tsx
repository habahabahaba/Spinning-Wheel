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

const FONT_LOAD_CACHE = new Map<string, boolean>();

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
    // Block rendering immediately
    document.documentElement.style.visibility = 'hidden';

    const loadFontWithRetry = async (
      fontName: RemoteFontNames,
      loader: () => Promise<void>,
      attempt = 1
    ): Promise<void> => {
      try {
        if (FONT_LOAD_CACHE.has(fontName)) return;

        // 1. Load the font face
        await loader();

        // 2. Verify the font is actually loaded
        await new Promise<void>((resolve) => {
          const check = () => {
            if (document.fonts.check(`600 16px "${fontName}"`)) {
              FONT_LOAD_CACHE.set(fontName, true);
              markLoadedFont(fontName);
              if (--numberOfPendingRef.current <= 0) {
                markAllFontsReady(true);
                document.documentElement.style.visibility = '';
              }
              resolve();
            } else {
              requestAnimationFrame(check);
            }
          };
          check();
        });
      } catch (err) {
        console.error(
          `Font load failed (attempt ${attempt}): ${fontName}`,
          err
        );

        // Exponential backoff with jitter
        const delay = Math.min(2000 * Math.pow(2, attempt - 1), 30000);
        const jitter = Math.random() * 1000;

        await new Promise((resolve) => setTimeout(resolve, delay + jitter));
        return loadFontWithRetry(fontName, loader, attempt + 1);
      }
    };

    // Load fonts in small batches (3 at a time)
    const fontEntries = Object.entries(FONT_IMPORTS) as [
      RemoteFontNames,
      { load: () => Promise<void> }
    ][];

    const BATCH_SIZE = 3;
    for (let i = 0; i < fontEntries.length; i += BATCH_SIZE) {
      const batch = fontEntries.slice(i, i + BATCH_SIZE);
      Promise.all(
        batch.map(([fontName, { load }]) => loadFontWithRetry(fontName, load))
      ).catch(() => {
        /* Batch errors handled individually */
      });
    }

    return () => {
      document.documentElement.style.visibility = '';
    };
  }, [markLoadedFont, markAllFontsReady]);
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
