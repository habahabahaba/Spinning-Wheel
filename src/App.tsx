// Utils:
// Constants:
import {
  FONT_FAMILIES_REMOTE,
  createFontUrl,
  REMOTE_FONT_SUBSETS,
} from './constants/fonts';
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
import type { RemoteFontNames, AllSubsets } from './constants/fonts';

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
    const fontEntries = Object.entries(REMOTE_FONT_SUBSETS) as [
      RemoteFontNames,
      AllSubsets[]
    ][];

    const loadSubsetWithRetry = async (
      fontName: RemoteFontNames,
      subset: AllSubsets,
      attempt = 1
    ): Promise<void> => {
      try {
        const fontFace = new FontFace(
          fontName,
          createFontUrl(fontName, subset),
          {
            weight: '600',
            display: 'block',
          }
        );

        const loadedFace = await fontFace.load();
        document.fonts.add(loadedFace);

        // Verify font is actually available
        await new Promise<void>((resolve) => {
          const check = () => {
            if (document.fonts.check(`600 16px "${fontName}"`)) {
              resolve();
            } else {
              requestAnimationFrame(check);
            }
          };
          check();
        });
      } catch (err) {
        console.error(
          `Subset load failed (attempt ${attempt}): ${fontName} - ${subset}`,
          err
        );

        const delay = Math.min(2000 * Math.pow(2, attempt - 1), 30000);
        const jitter = Math.random() * 1000;

        await new Promise((resolve) => setTimeout(resolve, delay + jitter));
        return loadSubsetWithRetry(fontName, subset, attempt + 1);
      }
    };

    const loadFontWithAllSubsets = async (
      fontName: RemoteFontNames,
      subsets: AllSubsets[]
    ): Promise<void> => {
      if (fontsLoadStates[fontName]) return;
      activeRetries.current[fontName] = 1;

      try {
        await Promise.all(
          subsets.map((subset) => loadSubsetWithRetry(fontName, subset))
        );

        // Final check after all subsets are loaded
        if (document.fonts.check(`600 16px "${fontName}"`)) {
          markLoadedFont(fontName);
          delete activeRetries.current[fontName];
          if (--numberOfPendingRef.current <= 0) {
            markAllFontsReady(true);
          }
        }
      } catch (err) {
        console.error(`Failed to load all subsets for ${fontName}`, err);
      }
    };

    const getBatchSubsetLimit = () => {
      const ua = navigator.userAgent;
      if (/firefox/i.test(ua)) return 1;
      if (/chrome/i.test(ua)) return 6;
      return 5;
    };

    const batchLimit = getBatchSubsetLimit();
    let currentBatchSubsetCount = 0;
    let batch: [RemoteFontNames, AllSubsets[]][] = [];

    const flushBatch = () => {
      batch.forEach(([fontName, subsets]) => {
        loadFontWithAllSubsets(fontName, subsets);
      });
      batch = [];
      currentBatchSubsetCount = 0;
    };

    for (const [fontName, subsets] of fontEntries) {
      const subsetCount = subsets.length;

      if (currentBatchSubsetCount + subsetCount > batchLimit) {
        flushBatch();
      }

      batch.push([fontName, subsets]);
      currentBatchSubsetCount += subsetCount;
    }

    if (batch.length > 0) {
      flushBatch();
    }

    return () => {
      Object.keys(activeRetries.current).forEach((fontName) => {
        delete activeRetries.current[fontName];
      });
    };
  }, [fontsLoadStates, markLoadedFont, markAllFontsReady]);

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
