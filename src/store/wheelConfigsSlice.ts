// Constants:
import { PALETTES } from '../constants/palettes';
// Utils:
import {
  blankOutcome,
  initConfigs,
  initConfig,
  prepareConfig,
} from '../utils/wheelConfig';
import { getCurrentDate } from '../utils/date';
// 3rd party:
// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

// Types, interfaces and enumns:
import type { StateCreator } from 'zustand';
import type {
  Outcome,
  WheelConfigsState,
  WheelConfig,
  WheelConfigsSlice,
  FontSlice,
  WheelSpinSlice,
  NavigationSlice,
} from './types';
import { Radius } from '../constants/radii';
import type { AllFontNames } from './types';

// const useWheelStore = create<WheelConfigsState & WheelConfigsActions>()(
//   devtools((set) => ({
//     ...initConfigs,

//     replaceState: ({ newState }: { newState: WheelConfigsState }) =>
//       set(newState),

//     resetState: () => {
//       set(initConfigs);
//     },

//     replaceCurrentConfig: ({ newConfig }: { newConfig: WheelConfig }) =>
//       set({
//         currentConfig: newConfig,
//       }),

//     resetCurrentConfig: () =>
//       set({
//         currentConfig: initConfig,
//       }),

//     setDefaultPalette: ({ paletteIdx }: { paletteIdx: number }) =>
//       set((state) => {
//         if (paletteIdx >= PALETTES.length || paletteIdx < 0) return state;
//         return {
//           currentConfig: {
//             ...state.currentConfig,
//             default_palette_idx: paletteIdx,
//           },
//         };
//       }),

//     setDefaultFontFamily: ({ fontFamily }: { fontFamily: string }) =>
//       set((state) => ({
//         currentConfig: {
//           ...state.currentConfig,
//           default_FontFamily: fontFamily,
//         },
//       })), // WILL BE REDONE!

//     addBlankOutcomes: ({ quantity }: { quantity: number }) =>
//       set((state) => {
//         const length = state.currentConfig.outcomes.length;
//         if (length > 71) return state;

//         const clampedQuantity = Math.max(1, Math.min(quantity, 72 - length));

//         const blankOutcomes = Array.from({ length: clampedQuantity }, () => ({
//           ...blankOutcome,
//         }));

//         return {
//           currentConfig: {
//             ...state.currentConfig,
//             outcomes: [...state.currentConfig.outcomes, ...blankOutcomes],
//           },
//         };
//       }),

//     duplicateOutcome: ({ outcomeIdx }: { outcomeIdx: number }) =>
//       set((state) => {
//         const length = state.currentConfig.outcomes.length;
//         if (length > 71 || outcomeIdx >= length || outcomeIdx < 0) return state;

//         return {
//           ...state,
//           currentConfig: {
//             ...state.currentConfig,
//             outcomes: [
//               ...state.currentConfig.outcomes.slice(0, outcomeIdx + 1),
//               {
//                 ...state.currentConfig.outcomes[outcomeIdx],
//               },
//               ...state.currentConfig.outcomes.slice(outcomeIdx + 1),
//             ],
//           },
//         };
//       }),

//     removeOutcome: ({ outcomeIdx }: { outcomeIdx: number }) =>
//       set((state) => {
//         const length = state.currentConfig.outcomes.length;
//         if (length < 3 || outcomeIdx >= length || outcomeIdx < 0) return state;

//         return {
//           currentConfig: {
//             ...state.currentConfig,
//             outcomes: [
//               ...state.currentConfig.outcomes.slice(0, outcomeIdx),
//               ...state.currentConfig.outcomes.slice(outcomeIdx + 1),
//             ],
//           },
//         };
//       }),

//     modifyOutcome: <T extends keyof Outcome>({
//       outcomeIdx,
//       key,
//       value,
//     }: {
//       outcomeIdx: number;
//       key: T;
//       value: Outcome[T];
//     }) =>
//       set((state) => {
//         const length = state.currentConfig.outcomes.length;
//         if (outcomeIdx >= length || outcomeIdx < 0) return state;

//         return {
//           currentConfig: {
//             ...state.currentConfig,
//             outcomes: [
//               ...state.currentConfig.outcomes.slice(0, outcomeIdx),
//               { ...state.currentConfig.outcomes[outcomeIdx], [key]: value },
//               ...state.currentConfig.outcomes.slice(outcomeIdx + 1),
//             ],
//           },
//         };
//       }),

//     saveCurrentConfig: ({
//       saveIdx,
//       configName,
//     }: {
//       saveIdx: number;
//       configName: string;
//     }) =>
//       set((state) => {
//         const length = state.savedConfigs.length;
//         if (saveIdx >= length || saveIdx < 0) return state;

//         const savedConfig = {
//           ...state.currentConfig,
//           configName: configName || getCurrentDate(),
//         };

//         return {
//           savedConfigs: [
//             ...state.savedConfigs.slice(0, saveIdx),
//             savedConfig,
//             ...state.savedConfigs.slice(saveIdx + 1),
//           ],
//         };
//       }),

//     loadConfig: ({ saveIdx }: { saveIdx: number }) =>
//       set((state) => {
//         const length = state.savedConfigs.length;
//         if (saveIdx >= length || saveIdx < 0 || !state.savedConfigs[saveIdx])
//           return state;

//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const { configName, ...newCurrentConfig } = state.savedConfigs[saveIdx];

//         return { currentConfig: newCurrentConfig };
//       }),

//     applyConfig: () =>
//       set((state) => ({
//         activeConfig: prepareConfig(state.currentConfig),
//       })),
//   }))
// );

const createWheelConfigsSlice: StateCreator<
  FontSlice & WheelConfigsSlice & WheelSpinSlice & NavigationSlice,
  [],
  [],
  WheelConfigsSlice
> = (set) => ({
  ...initConfigs,

  replaceState: ({ newState }: { newState: WheelConfigsState }) =>
    set(newState),

  resetState: () => {
    set(initConfigs);
  },

  replaceCurrentConfig: ({ newConfig }: { newConfig: WheelConfig }) =>
    set({
      currentConfig: newConfig,
    }),

  resetCurrentConfig: () =>
    set({
      currentConfig: initConfig,
    }),

  setRadius: ({ radiusName }: { radiusName: Radius }) =>
    set((state) => ({
      currentConfig: { ...state.currentConfig, radiusName },
    })),

  setDefaultPalette: ({ paletteIdx }: { paletteIdx: number }) =>
    set((state) => {
      if (paletteIdx >= PALETTES.length || paletteIdx < 0) return state;
      return {
        currentConfig: {
          ...state.currentConfig,
          default_palette_idx: paletteIdx,
        },
      };
    }),

  setDefaultFontFamily: ({ fontFamily }: { fontFamily: AllFontNames }) =>
    set((state) => ({
      currentConfig: {
        ...state.currentConfig,
        default_fontFamily: fontFamily,
      },
    })),

  setConfigName: ({ configName }: { configName: string }) =>
    set((state) => ({ currentConfig: { ...state.currentConfig, configName } })),

  addBlankOutcomes: ({ quantity }: { quantity: number }) =>
    set((state) => {
      const length = state.currentConfig.outcomes.length;
      if (length > 71) return state;

      const clampedQuantity = Math.max(1, Math.min(quantity, 72 - length));

      const blankOutcomes = Array.from({ length: clampedQuantity }, () => ({
        ...blankOutcome,
      }));

      return {
        currentConfig: {
          ...state.currentConfig,
          outcomes: [...state.currentConfig.outcomes, ...blankOutcomes],
        },
      };
    }),

  duplicateOutcome: ({ outcomeIdx }: { outcomeIdx: number }) =>
    set((state) => {
      const length = state.currentConfig.outcomes.length;
      if (length > 71 || outcomeIdx >= length || outcomeIdx < 0) return state;

      return {
        ...state,
        currentConfig: {
          ...state.currentConfig,
          outcomes: [
            ...state.currentConfig.outcomes.slice(0, outcomeIdx + 1),
            {
              ...state.currentConfig.outcomes[outcomeIdx],
            },
            ...state.currentConfig.outcomes.slice(outcomeIdx + 1),
          ],
        },
      };
    }),

  removeOutcome: ({ outcomeIdx }: { outcomeIdx: number }) =>
    set((state) => {
      const length = state.currentConfig.outcomes.length;
      if (length < 3 || outcomeIdx >= length || outcomeIdx < 0) return state;

      return {
        currentConfig: {
          ...state.currentConfig,
          outcomes: [
            ...state.currentConfig.outcomes.slice(0, outcomeIdx),
            ...state.currentConfig.outcomes.slice(outcomeIdx + 1),
          ],
        },
      };
    }),

  modifyOutcome: <T extends keyof Outcome>({
    outcomeIdx,
    key,
    value,
  }: {
    outcomeIdx: number;
    key: T;
    value: Outcome[T];
  }) =>
    set((state) => {
      const length = state.currentConfig.outcomes.length;
      if (outcomeIdx >= length || outcomeIdx < 0) return state;

      return {
        currentConfig: {
          ...state.currentConfig,
          outcomes: [
            ...state.currentConfig.outcomes.slice(0, outcomeIdx),
            { ...state.currentConfig.outcomes[outcomeIdx], [key]: value },
            ...state.currentConfig.outcomes.slice(outcomeIdx + 1),
          ],
        },
      };
    }),

  saveCurrentConfig: ({
    saveIdx,
    configName,
  }: {
    saveIdx: number;
    configName: string;
  }) =>
    set((state) => {
      const length = state.savedConfigs.length;
      if (saveIdx >= length || saveIdx < 0) return state;

      const savedConfig = {
        ...state.currentConfig,
        configName: configName || getCurrentDate(),
      };

      return {
        savedConfigs: [
          ...state.savedConfigs.slice(0, saveIdx),
          savedConfig,
          ...state.savedConfigs.slice(saveIdx + 1),
        ],
      };
    }),

  loadConfig: ({ saveIdx }: { saveIdx: number }) =>
    set((state) => {
      const length = state.savedConfigs.length;
      if (saveIdx >= length || saveIdx < 0 || !state.savedConfigs[saveIdx])
        return state;

      const { ...newCurrentConfig } = state.savedConfigs[saveIdx];

      return { currentConfig: newCurrentConfig };
    }),

  applyConfig: () =>
    set((state) => ({
      activeConfig: prepareConfig(state.currentConfig),
    })),
});

export default createWheelConfigsSlice;
