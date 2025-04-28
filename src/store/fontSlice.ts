// Constants:
import { initFontsState } from '../constants/FontFamilies';
// Utils:
// 3rd party:
// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';
// Types, interfaces and enumns:
import type { StateCreator } from 'zustand';
import type {
  FontState,
  RemoteFontNames,
  AllFontNames,
  WheelConfigsSlice,
  FontSlice,
} from './types';

const createFontSlice: StateCreator<
  FontSlice & WheelConfigsSlice,
  [],
  [],
  FontSlice
> = (set, get) => ({
  ...initFontsState,

  // Actions:
  resetFontState: () => {
    set(initFontsState);
  },

  replaceFontState: (newState: FontState) => set(newState),

  markLoadedFont: (loadedFont: RemoteFontNames) =>
    set((state) => ({
      fontsLoadStates: { ...state.fontsLoadStates, [loadedFont]: true },
    })),

  checkFont: (fontName: AllFontNames) => get().fontsLoadStates[fontName],
});

export default createFontSlice;
