// Constants:
import { initFontState } from '../constants/fonts';
// Utils:
// 3rd party:
// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';
// Types, interfaces and enumns:
import type { StateCreator } from 'zustand';
import type {
  FontState,
  FontSlice,
  RemoteFontNames,
  AllFontNames,
  WheelConfigsSlice,
  WheelSpinSlice,
  NavigationSlice,
} from './types';

const createFontSlice: StateCreator<
  FontSlice & WheelConfigsSlice & WheelSpinSlice & NavigationSlice,
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
      fontLoadState: { ...state.fontLoadState, [loadedFont]: true },
    })),

  markLoadedURL: ({
    fontName,
    url,
  }: {
    fontName: RemoteFontNames;
    url: string;
  }): void =>
    set((state) => {
      const newURLs = new Set(state.fontURLSets[fontName]);
      newURLs.delete(url);
      console.log('markLoadedURL');
      return {
        fontURLSets: { ...state.fontURLSets, [fontName]: newURLs },
        fontLoadState: newURLs.size
          ? state.fontLoadState
          : { ...state.fontLoadState, [fontName]: true },
      };
    }),

  checkFont: (fontName: AllFontNames) => get().fontLoadState[fontName],

  checkAllFontsReady: () => {
    const states = Object.values(get().fontLoadState);

    return states.every((loaded) => loaded);
  },
});

export default createFontSlice;
