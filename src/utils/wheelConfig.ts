// Assets:
// import { PALETTES } from '../assets/palettes';
// Utils:
import { uniqueRandomsInRange } from './random';
import { isHexColor } from './color';
// Types, interfaces and enumns:
import type { Outcome, WheelConfig, WheelConfigs } from '../store/types';
import { OutcomeModel } from '../store/types';

// Initial state:
export const initConfig: WheelConfig = {
  default_palette_idx: 0,
  default_fontFamily: 'Arial',
  outcomes: createOutcomes(2, (i) => `Outcome ${i + 1}`),
};

export const initConfigs: WheelConfigs = {
  userId: 'USER_ID',
  currentConfig: initConfig,
  activeConfig: prepareConfig(initConfig),
  savedConfigs: new Array(10).fill(undefined),
};

export const blankOutcome: Outcome = {
  label: '',
  fillColor: '',
  fontFamily: '',
};

export function createOutcomes(
  quantity: number,
  labelFn: (i: number) => string
): Outcome[] {
  return new Array(quantity).fill(0).map(
    (_, i) =>
      new OutcomeModel({
        label: labelFn(i),
        fillColor: '',
        fontFamily: '',
      })
  );
}

export function prepareConfig(wheelConfig: WheelConfig): WheelConfig {
  const preparedConfig: WheelConfig = { ...wheelConfig };

  // Trim values:
  preparedConfig.outcomes = preparedConfig.outcomes.map(
    ({ label, fillColor, fontFamily }: Outcome) => ({
      label: label.trim(),
      fillColor: isHexColor(fillColor) ? fillColor : '',
      fontFamily: fontFamily.trim(),
    })
  );

  // Remove unnamed outcomes:
  preparedConfig.outcomes = preparedConfig.outcomes.filter(({ label }) =>
    Boolean(label)
  );

  if (preparedConfig.outcomes.length < 1) return prepareConfig(initConfig);

  // If there are more than 72 outcomes, take first 72:
  if (preparedConfig.outcomes.length > 72) {
    preparedConfig.outcomes = preparedConfig.outcomes.slice(0, 72);
  }

  // Randomise outcomes sequence:
  const randomSequence = uniqueRandomsInRange(
    preparedConfig.outcomes.length,
    0,
    preparedConfig.outcomes.length - 1
  );
  preparedConfig.outcomes = randomSequence.map(
    (num) => preparedConfig.outcomes[num]
  );

  // If there are less than 6 outcomes, multiply them:
  while (preparedConfig.outcomes.length < 6) {
    preparedConfig.outcomes = [
      ...preparedConfig.outcomes,
      ...preparedConfig.outcomes,
    ];
  }

  return preparedConfig;
}
