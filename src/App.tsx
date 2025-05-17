// Utils:
// Constants:
import { FONT_FAMILIES_REMOTE, createFontUrl } from './constants/fonts';
// 3rd party:
import { useShallow } from 'zustand/shallow';
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
  const fontsLoadStates = useBoundStore(
    useShallow((state) => state.fontsLoadStates)
  );
  // Actions:
  const markLoadedFont = useBoundStore((state) => state.markLoadedFont);
  const markAllFontsReady = useBoundStore((state) => state.markAllFontsReady);
  // const checkFont = useBoundStore((state) => state.checkFont);

  // Refs:
  const numberOfPendingRef = useRef<number>(FONT_FAMILIES_REMOTE.length);
  const activeRetries = useRef<Record<string, number>>({});

  // Loading additional fonts:
  useEffect(() => {
    const loadFontWithRetry = async (
      fontName: RemoteFontNames,
      attempt = 1
    ): Promise<void> => {
      if (fontsLoadStates[fontName]) return;
      activeRetries.current[fontName] = attempt;

      try {
        const fontFace = new FontFace(fontName, createFontUrl(fontName), {
          weight: '600',
          display: 'block',
        });

        const loadedFace = await fontFace.load();
        document.fonts.add(loadedFace);

        // Verify font is actually loaded
        await new Promise<void>((resolve) => {
          const check = () => {
            if (document.fonts.check(`600 16px "${fontName}"`)) {
              markLoadedFont(fontName);
              delete activeRetries.current[fontName];
              if (--numberOfPendingRef.current <= 0) {
                markAllFontsReady(true);
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

        // Exponential backoff with jitter: 2s, 4s, 8s, etc. max 30s
        const delay = Math.min(2000 * Math.pow(2, attempt - 1), 30000);
        const jitter = Math.random() * 1000; // 0-1s random variation

        await new Promise((resolve) => setTimeout(resolve, delay + jitter));
        return loadFontWithRetry(fontName, attempt + 1);
      }
    };

    const getBatchSize = () => {
      const ua = navigator.userAgent;
      if (/firefox/i.test(ua)) return 1;
      if (/chrome/i.test(ua)) return 6;
      return 5;
    };

    // Load fonts in batches with retry support
    const batchSize = getBatchSize();
    for (let i = 0; i < FONT_FAMILIES_REMOTE.length; i += batchSize) {
      const batch = FONT_FAMILIES_REMOTE.slice(i, i + batchSize);

      batch.forEach((fontName) => {
        loadFontWithRetry(fontName);
      });
    }

    return () => {
      // Cleanup any pending retries on unmount
      Object.keys(activeRetries.current).forEach((fontName) => {
        delete activeRetries.current[fontName];
      });
    };
  }, [fontsLoadStates, markLoadedFont, markAllFontsReady]);
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
