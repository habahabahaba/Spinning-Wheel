// Types, interfaces and enumns:
import type { StateCreator } from 'zustand';
import type {
  NavigationSlice,
  NavigationLocation,
  FontSlice,
  WheelConfigsSlice,
  WheelSpinSlice,
} from './types';

const createNavigationSlice: StateCreator<
  NavigationSlice & FontSlice & WheelConfigsSlice & WheelSpinSlice,
  [],
  [],
  NavigationSlice
> = (set) => ({
  currentLocation: 'Main',

  // Actions:
  setCurrentLocation: ({ newLocation }: { newLocation: NavigationLocation }) =>
    set((state) =>
      state.wheelAnimationState === 'idle'
        ? { currentLocation: newLocation }
        : state
    ),
});

export default createNavigationSlice;
