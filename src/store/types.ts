// Wheel configs:
export interface Outcome {
  label: string;
  fillColor: string;
  fontFamily: string;
}

export class OutcomeModel implements Outcome {
  constructor({ label, fillColor, fontFamily }: Outcome) {
    this.label = label.trim();
    this.fillColor = fillColor.trim();
    this.fontFamily = fontFamily.trim();
  }
  
  public label: string;
  public fillColor: string;
  public fontFamily: string;
}

export interface WheelConfig {
  default_fillColors: string[];
  default_fontFamily: string[];
  outcomes: Outcome[];
}

export type SavedWheelConfig = WheelConfig & { configName: string };

export interface WheelConfigs {
  userId: string;
  currentConfig: WheelConfig;
  activeConfig: WheelConfig;
  savedConfigs: (SavedWheelConfig | undefined)[];
}
