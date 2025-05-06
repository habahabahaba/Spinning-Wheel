// Constants:
import { initFontsState } from '../constants/fontFamilies';
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
  WheelSpinSlice,
  FontSlice,
} from './types';

const createFontSlice: StateCreator<
  FontSlice & WheelConfigsSlice & WheelSpinSlice,
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

  markAllFontsReady: (boolean: boolean) => set({ allFontsReady: boolean }),

  checkAllFontsReady: () => get().allFontsReady,
});

export default createFontSlice;
