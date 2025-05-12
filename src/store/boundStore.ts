// 3rd party:
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// Store:
import createFontSlice from './fontSlice';
import createWheelConfigsSlice from './wheelConfigsSlice';
import createWheelSpinSlice from './wheelSpinSlice';
import createNavigationSlice from './navigationSlice';
// Types, interfaces and enumns:
import type {
  FontSlice,
  WheelConfigsSlice,
  WheelSpinSlice,
  NavigationSlice,
} from './types';

const useBoundStore = create<
  FontSlice & WheelConfigsSlice & WheelSpinSlice & NavigationSlice
>()(
  persist(
    (...a) => ({
      ...createFontSlice(...a),
      ...createWheelConfigsSlice(...a),
      ...createWheelSpinSlice(...a),
      ...createNavigationSlice(...a),
    }),
    {
      name: 'Wheel-store',

      partialize: (state) => ({
        savedConfigs: state.savedConfigs,
      }),
    }
  )
);

export default useBoundStore;
