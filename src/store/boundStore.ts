// 3rd party:
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// Store:
import createFontSlice from './fontSlice';
import createWheelConfigsSlice from './wheelSlice';
// Types, interfaces and enumns:
import type { FontSlice, WheelConfigsSlice } from './types';

const useBoundStore = create<FontSlice & WheelConfigsSlice>()(
  devtools(
    (...a) => ({
      ...createFontSlice(...a),
      ...createWheelConfigsSlice(...a),
    }),
    { name: 'bound-store' }
  )
);

export default useBoundStore;
