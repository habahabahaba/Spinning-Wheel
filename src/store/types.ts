import { HexColor } from '../utils/color';
// Fonts:
import type {
  LocalFontNames,
  RemoteFontNames,
  AllFontNames,
} from '../constants/FontFamilies';
export { LocalFontNames, RemoteFontNames, AllFontNames };

export interface FontState {
  loadedFonts: Set<AllFontNames>;
}

export interface FontActions {
  resetFontState: () => void;
  replaceFontState: (newState: FontState) => void;
  markLoadedFont: (loadedFont: RemoteFontNames) => void;
  checkFont: (fontName: AllFontNames) => void;
}

export interface FontSlice {
  loadedFonts: Set<AllFontNames>;
  resetFontState: () => void;
  replaceFontState: (newState: FontState) => void;
  markLoadedFont: (loadedFont: RemoteFontNames) => void;
  checkFont: (fontName: AllFontNames) => void;
}

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
  default_palette_idx: number;
  default_fontFamily: AllFontNames;
  outcomes: Outcome[];
}

export type SavedWheelConfig = WheelConfig & { configName: string };

export interface WheelConfigsState {
  userId: string;
  currentConfig: WheelConfig;
  activeConfig: WheelConfig;
  savedConfigs: (SavedWheelConfig | undefined)[];
}

export interface WheelConfigsActions {
  replaceState: ({ newState }: { newState: WheelConfigsState }) => void;

  resetState: () => void;

  replaceCurrentConfig: ({ newConfig }: { newConfig: WheelConfig }) => void;

  resetCurrentConfig: () => void;

  setDefaultPalette: ({ paletteIdx }: { paletteIdx: number }) => void;

  setDefaultFontFamily: ({ fontFamily }: { fontFamily: string }) => void;

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

export interface WheelConfigsSlice {
  userId: string;
  currentConfig: WheelConfig;
  activeConfig: WheelConfig;
  savedConfigs: (SavedWheelConfig | undefined)[];

  replaceState: ({ newState }: { newState: WheelConfigsState }) => void;

  resetState: () => void;

  replaceCurrentConfig: ({ newConfig }: { newConfig: WheelConfig }) => void;

  resetCurrentConfig: () => void;

  setDefaultPalette: ({ paletteIdx }: { paletteIdx: number }) => void;

  setDefaultFontFamily: ({ fontFamily }: { fontFamily: string }) => void;

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
