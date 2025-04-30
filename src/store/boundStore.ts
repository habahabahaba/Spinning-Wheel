// 3rd party:
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// Store:
import createFontSlice from './fontSlice';
import createWheelConfigsSlice from './wheelConfigsSlice';
import createWheelSpinSlice from './wheelSpinSlice';
// Types, interfaces and enumns:
import type { FontSlice, WheelConfigsSlice, WheelSpinSlice } from './types';

const useBoundStore = create<FontSlice & WheelConfigsSlice & WheelSpinSlice>()(
  persist(
    (...a) => ({
      ...createFontSlice(...a),
      ...createWheelConfigsSlice(...a),
      ...createWheelSpinSlice(...a),
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
