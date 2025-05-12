import { HexColor } from '../utils/color';
import type { Radius } from '../constants/radii';
import type {
  LocalFontNames,
  RemoteFontNames,
  AllFontNames,
} from '../constants/fonts';

// Fonts:
export { LocalFontNames, RemoteFontNames, AllFontNames };

export interface FontState {
  fontsLoadStates: Record<AllFontNames, boolean>;
  allFontsReady: boolean;
}

export interface FontActions {
  resetFontState: () => void;
  replaceFontState: (newState: FontState) => void;
  markLoadedFont: (loadedFont: RemoteFontNames) => void;
  checkFont: (fontName: AllFontNames) => boolean;
  markAllFontsReady: (boolean: boolean) => void;
  checkAllFontsReady: () => boolean;
}

export type FontSlice = FontState & FontActions;

// Wheel configs:
export interface Outcome {
  label: string;
  fillColor: HexColor | '';
  fontFamily: AllFontNames | '';
}

export class OutcomeModel implements Outcome {
  constructor({ label, fillColor, fontFamily }: Outcome) {
    this.label = label;
    this.fillColor = fillColor;
    this.fontFamily = fontFamily;
  }

  public label: string;
  public fillColor: HexColor | '';
  public fontFamily: AllFontNames | '';
}

export interface WheelConfig {
  configName: string;
  radiusName: Radius;
  default_palette_idx: number;
  default_fontFamily: AllFontNames;
  outcomes: Outcome[];
}

export interface WheelConfigsState {
  userId: string;
  currentConfig: WheelConfig;
  activeConfig: WheelConfig;
  savedConfigs: (WheelConfig | undefined)[];
}

export interface WheelConfigsActions {
  replaceState: ({ newState }: { newState: WheelConfigsState }) => void;

  resetState: () => void;

  replaceCurrentConfig: ({ newConfig }: { newConfig: WheelConfig }) => void;

  resetCurrentConfig: () => void;

  setRadius: ({ radiusName }: { radiusName: Radius }) => void;

  setDefaultPalette: ({ paletteIdx }: { paletteIdx: number }) => void;

  setDefaultFontFamily: ({ fontFamily }: { fontFamily: AllFontNames }) => void;

  setConfigName: ({ configName }: { configName: string }) => void;

  addBlankOutcomes: ({ quantity }: { quantity: number }) => void;

  duplicateOutcome: ({ outcomeIdx }: { outcomeIdx: number }) => void;

  removeOutcome: ({ outcomeIdx }: { outcomeIdx: number }) => void;

  modifyOutcome: <K extends keyof Outcome>({
    outcomeIdx,
    key,
    value,
  }: {
    outcomeIdx: number;
    key: K;
    value: Outcome[K];
  }) => void;

  saveCurrentConfig: ({
    saveIdx,
    configName,
  }: {
    saveIdx: number;
    configName: string;
  }) => void;

  loadConfig: ({ saveIdx }: { saveIdx: number }) => void;

  applyConfig: () => void;
}

export type WheelConfigsSlice = WheelConfigsState & WheelConfigsActions;

// Spin state:
export type WheelAnimationState =
  | 'idle'
  | 'windingUp'
  | 'cancelling'
  | 'spinning';

export interface WheelSpinState {
  wheelAnimationState: WheelAnimationState;
  winningOutcomeIdx: number | null;
}

interface WheelSpinActions {
  resetWheelSpinState: () => void;

  setWheelAnimationState: ({
    newState,
  }: {
    newState: WheelAnimationState;
  }) => void;

  resetWinningOutcomeIdx: () => void;

  setWinningOutcomeIdx: ({ newIdx }: { newIdx: number | null }) => void;

  setWinningOutcomeIdxFromTurn: ({
    resultingTurn,
  }: {
    resultingTurn: number;
  }) => void;
}

export type WheelSpinSlice = WheelSpinState & WheelSpinActions;

// Navigation:
export type NavigationLocation = 'ConfigForm' | 'Main';

export interface NavigationState {
  currentLocation: NavigationLocation;
}

interface NavigationActions {
  setCurrentLocation: ({
    newLocation,
  }: {
    newLocation: NavigationLocation;
  }) => void;
}

export type NavigationSlice = NavigationState & NavigationActions;
