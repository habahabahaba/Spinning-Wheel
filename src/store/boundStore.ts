// 3rd party:
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// Store:
import createFontSlice from './fontSlice';
import createWheelConfigsSlice from './wheelConfigsSlice';
// Types, interfaces and enumns:
import type { FontSlice, WheelConfigsSlice } from './types';

const useBoundStore = create<FontSlice & WheelConfigsSlice>()(
  persist(
    (...a) => ({
      ...createFontSlice(...a),
      ...createWheelConfigsSlice(...a),
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
