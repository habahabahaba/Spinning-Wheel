// Utils:
import {
  getBatchSize,
  loadFontSubsetWithRetry,
  isFontFullyLoaded,
} from '../utils/fonts';
// Constants:
import { RemoteFontNames, REMOTE_FONT_SUBSETS } from '../constants/fonts';
// Store
import { useShallow } from 'zustand/shallow';
import useBoundStore from '../store/boundStore';
// React:
import { useEffect, useRef } from 'react';
// Types, interfaces and enumns:
import type { AllSubsets } from '../constants/fonts';

export default function useFontsLoader() {
  // Store:
  const fontsLoadStates = useBoundStore(
    useShallow((state) => state.fontsLoadStates)
  );
  // Actions:
  const markLoadedFont = useBoundStore((state) => state.markLoadedFont);
  const markAllFontsReady = useBoundStore((state) => state.markAllFontsReady);

  // Refs:
  // Track subsets pending per font (init from REMOTE_FONT_SUBSETS)
  const createPendingSubsets = (): Record<RemoteFontNames, Set<AllSubsets>> => {
    const record = {} as Record<RemoteFontNames, Set<AllSubsets>>;
    for (const [font, subsets] of Object.entries(REMOTE_FONT_SUBSETS) as [
      RemoteFontNames,
      AllSubsets[]
    ][]) {
      record[font] = new Set(subsets);
    }
    return record;
  };
  const pendingSubsetsPerFont = useRef<
    Record<RemoteFontNames, Set<AllSubsets>>
  >(createPendingSubsets());
  // Retry attempts per subset
  const retryAttempts = useRef<Record<string, number>>({});

  // Number of fonts not fully loaded yet
  const numberOfPendingFonts = useRef(
    Object.keys(pendingSubsetsPerFont.current).length
  );

  useEffect(() => {
    // If already all fonts ready, skip
    if (Object.values(fontsLoadStates).every((v) => v)) {
      markAllFontsReady(true);
      return;
    }

    const ua = navigator.userAgent;

    // Flatten font-subsets into a list of { fontName, subset }
    const allFontSubsetPairs: {
      fontName: RemoteFontNames;
      subset: AllSubsets;
    }[] = [];

    for (const [fontName, subsets] of Object.entries(pendingSubsetsPerFont)) {
      if (!fontsLoadStates[fontName as RemoteFontNames]) {
        for (const subset of subsets) {
          allFontSubsetPairs.push({
            fontName: fontName as RemoteFontNames,
            subset,
          });
        }
      }
    }

    // batch loader with rate limit, loads batch of font subsets
    async function loadBatch(
      batch: { fontName: RemoteFontNames; subset: AllSubsets }[]
    ) {
      await Promise.all(
        batch.map(async ({ fontName, subset }) => {
          try {
            await loadFontSubsetWithRetry(
              fontName,
              subset,
              retryAttempts.current[`${fontName}-${subset}`] || 1
            );

            // Mark subset loaded: remove from pending
            pendingSubsetsPerFont.current[fontName].delete(subset);

            // If font fully loaded, mark it in Zustand and decrement counter
            if (
              isFontFullyLoaded(pendingSubsetsPerFont.current[fontName]) &&
              !fontsLoadStates[fontName]
            ) {
              markLoadedFont(fontName);
              if (--numberOfPendingFonts.current <= 0) {
                markAllFontsReady(true);
              }
            }
          } catch (err) {
            // On failure, we can log or rely on retry in loadFontSubsetWithRetry
            console.error(
              `Failed to load font subset: ${fontName} [${subset}]`,
              err
            );
          }
        })
      );
    }

    // Batch load with dynamic batch size depending on subsets count
    (async () => {
      let i = 0;
      const total = allFontSubsetPairs.length;
      while (i < total) {
        // Calculate batch size based on number of subsets in current batch fonts
        // Roughly: average subsets count per font in the batch (to avoid overloading)
        const batchFonts = new Set<string>();
        let batchSize = 0;

        for (let j = i; j < total; j++) {
          batchFonts.add(allFontSubsetPairs[j].fontName);
          const subsetsCount =
            pendingSubsetsPerFont.current[allFontSubsetPairs[j].fontName]
              .size || 1;
          batchSize = getBatchSize(ua, subsetsCount);
          if (j - i + 1 >= batchSize) break;
        }

        const batch = allFontSubsetPairs.slice(i, i + batchSize);

        await loadBatch(batch);

        i += batchSize;
      }
    })();

    return () => {
      // Cleanup if necessary, but no persistent async handlers here
    };
  }, [fontsLoadStates, markLoadedFont, markAllFontsReady]);

  // This hook just initiates loading side-effect,
  // it does not return anything for now
}
