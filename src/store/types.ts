import { HexColor } from "../utils/color";

// Wheel configs:
export interface Outcome {
  label: string;
  fillColor: HexColor|'';
  fontFamily: string;
}

export class OutcomeModel implements Outcome {
  constructor({ label, fillColor, fontFamily }: Outcome) {
    this.label = label;
    this.fillColor = fillColor;
    this.fontFamily = fontFamily;
  }

  public label: string;
  public fillColor: HexColor|'';
  public fontFamily: string;
}

export interface WheelConfig {
  default_palette_idx: number;
  default_fontFamily: string;
  outcomes: Outcome[];
}

export type SavedWheelConfig = WheelConfig & { configName: string };

export interface WheelConfigs {
  userId: string;
  currentConfig: WheelConfig;
  activeConfig: WheelConfig;
  savedConfigs: (SavedWheelConfig | undefined)[];
}


