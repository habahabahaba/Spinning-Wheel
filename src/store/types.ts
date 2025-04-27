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

export interface WheelConfigs {
  userId: string;
  currentConfig: WheelConfig;
  activeConfig: WheelConfig;
  savedConfigs: (SavedWheelConfig | undefined)[];
}
