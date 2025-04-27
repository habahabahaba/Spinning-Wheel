// Constants:
import { initFontState } from '../constants/FontFamilies';
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

// const useFontStore = create<FontState & FontActions>()(
//   devtools((set, get) => ({
//     ...initFontState,

//     // Actions:
//     resetFontState: () => {
//       set(initFontState);
//     },

//     replaceFontState: (newState: FontState) => set(newState),

//     markLoadedFont: (loadedFont: RemoteFontNames) =>
//       set((state) => ({
//         loadedFonts: new Set([...state.loadedFonts]).add(loadedFont),
//       })),

//     checkFont: (fontName: AllFontNames) => get().loadedFonts.has(fontName),
//   }))
// );

const createFontSlice: StateCreator<
  FontSlice & WheelConfigsSlice,
  [],
  [],
  FontSlice
> = (set, get) => ({
  ...initFontState,

  // Actions:
  resetFontState: () => {
    set(initFontState);
  },

  replaceFontState: (newState: FontState) => set(newState),

  markLoadedFont: (loadedFont: RemoteFontNames) =>
    set((state) => ({
      loadedFonts: new Set([...state.loadedFonts]).add(loadedFont),
    })),

  checkFont: (fontName: AllFontNames) => get().loadedFonts.has(fontName),
});

export default createFontSlice;
