// Types, interfaces and enumns:
import type { StateCreator } from 'zustand';
import type {
  WheelSpinState,
  WheelAnimationState,
  WheelSpinSlice,
  WheelConfigsSlice,
  FontSlice,
} from './types';

const initWheelSpinState: WheelSpinState = {
  wheelAnimationState: 'idle',
  winningOutcomeIdx: null,
};

const createWheelSpinSlice: StateCreator<
  WheelSpinSlice & FontSlice & WheelConfigsSlice,
  [],
  [],
  WheelSpinSlice
> = (set) => ({
  ...initWheelSpinState,

  // Actions:
  resetWheelSpinState: () => {
    set(initWheelSpinState);
  },

  setWheelAnimationState: ({ newState }: { newState: WheelAnimationState }) => {
    set({ wheelAnimationState: newState });
  },

  resetWinningOutcomeIdx: () => {
    set({ winningOutcomeIdx: null });
  },

  setWinningOutcomeIdx: ({ newIdx }: { newIdx: number | null }) =>
    set((state) => {
      const length = state.activeConfig.outcomes.length;
      if (newIdx === null || newIdx < 0 || newIdx >= length)
        return { winningOutcomeIdx: null };

      return { winningOutcomeIdx: newIdx };
    }),

  setWinningOutcomeIdxFromTurn: ({
    resultingTurn,
  }: {
    resultingTurn: number;
  }) =>
    set((state) => {
      const length = state.activeConfig.outcomes.length;
      if (resultingTurn < 0 || resultingTurn > length)
        return { winningOutcomeIdx: null };

      const newIdx = Math.floor(length * (1 - resultingTurn)) % length;

      return { winningOutcomeIdx: newIdx };
    }),
});

export default createWheelSpinSlice;
