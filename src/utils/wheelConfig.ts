// Assets:
// Constants:
import {
  FONT_FAMILIES_LOCAL,
  FONT_FAMILIES_ALL,
} from '../constants/fontFamilies';
import { WHEEL_RADII_MAP } from '../constants/radii';
import { PALETTES } from '../constants/palettes';
// Utils:
import { uniqueRandomsInRange } from './random';
import { isHexColor } from './color';
// Types, interfaces and enumns:
import type { Outcome, WheelConfig, WheelConfigsState } from '../store/types';
import { OutcomeModel } from '../store/types';
import type { AllFontNames } from '../store/types';
import type { Radius } from '../constants/radii';
import type { HexColor } from './color';

// Initial state:
export const initConfig: WheelConfig = {
  configName: '',
  radiusName: 'Medium',
  default_palette_idx: 0,
  default_fontFamily: 'Arial',
  outcomes: createOutcomes(2, (i) => `Outcome ${i + 1}`),
};

export const initConfigs: WheelConfigsState = {
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
      fontFamily: fontFamily,
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

/**
 * Represents the result of validating a WheelConfig.
 */
export type ValidationResult =
  | { valid: true; config: WheelConfig; warnings: string[] }
  | { valid: false; error: string };

/**
 * Validates and sanitizes a raw JSON object into a strict WheelConfig.
 *
 * Rules:
 * - Enforces exact shape of WheelConfig and each Outcome.
 * - Rejects objects with extra or missing keys.
 * - Coerces unknown fonts to fallback font.
 * - Coerces unknown radiusName to 'Medium'.
 * - Coerces out-of-range palette index to 0.
 * - Replaces empty outcome labels with 'Outcome ${index + 1}'.
 * - Ensures at least 2 outcomes.
 *
 * @param raw - The untyped object to validate.
 * @returns A valid WheelConfig or an error.
 */
export function validateWheelConfig(raw: unknown): ValidationResult {
  if (typeof raw !== 'object' || raw === null) {
    return { valid: false, error: 'Input must be a non-null object' };
  }

  const expectedKeys: (keyof WheelConfig)[] = [
    'configName',
    'radiusName',
    'default_palette_idx',
    'default_fontFamily',
    'outcomes',
  ];

  const rawKeys = Object.keys(raw);
  if (
    rawKeys.length !== expectedKeys.length ||
    !expectedKeys.every((k) => rawKeys.includes(k))
  ) {
    return {
      valid: false,
      error: `Object must only contain the following keys: ${expectedKeys.join(
        ', '
      )}`,
    };
  }

  const obj = raw as Record<string, unknown>;
  const fallbackFont: AllFontNames = FONT_FAMILIES_LOCAL[0];
  const warnings: string[] = [];

  const safeString = (val: unknown): string =>
    typeof val === 'string' ? val : '';

  const validFont = (font: unknown): AllFontNames => {
    if (
      typeof font === 'string' &&
      FONT_FAMILIES_ALL.includes(font as AllFontNames)
    ) {
      return font as AllFontNames;
    }
    warnings.push(`Invalid font "${font}", replaced with "${fallbackFont}"`);
    return fallbackFont;
  };

  const validRadius = (radius: unknown): Radius => {
    if (typeof radius === 'string' && radius in WHEEL_RADII_MAP) {
      return radius as Radius;
    }
    warnings.push(`Invalid radius "${radius}", defaulted to "Medium"`);
    return 'Medium';
  };

  const validPaletteIndex = (index: unknown): number => {
    if (typeof index === 'number' && index >= 0 && index < PALETTES.length) {
      return index;
    }
    warnings.push(`Invalid palette index "${index}", defaulted to 0`);
    return 0;
  };

  const isValidHexColor = (value: unknown): value is HexColor =>
    typeof value === 'string' && isHexColor(value);

  const isValidOutcomeShape = (o: unknown): o is Outcome => {
    if (typeof o !== 'object' || o === null) return false;
    const keys = Object.keys(o);
    return (
      keys.length === 3 && 'label' in o && 'fillColor' in o && 'fontFamily' in o
    );
  };

  const parseOutcome = (data: unknown, index: number): Outcome | null => {
    if (!isValidOutcomeShape(data)) return null;

    const outcome = data as unknown as Record<string, unknown>;

    let label = safeString(outcome.label).trim();
    if (label === '') {
      label = `Outcome ${index + 1}`;
      warnings.push(
        `Outcome at index ${index} had empty label, replaced with "${label}"`
      );
    }

    const fillColor =
      outcome.fillColor === '' || isValidHexColor(outcome.fillColor)
        ? (outcome.fillColor as HexColor | '')
        : '';

    if (
      outcome.fillColor !== '' &&
      (typeof outcome.fillColor !== 'string' || !isHexColor(outcome.fillColor))
    ) {
      warnings.push(
        `Outcome "${label}" had invalid fillColor "${outcome.fillColor}", set to ""`
      );
    }

    const fontFamily =
      outcome.fontFamily !== '' ? validFont(outcome.fontFamily) : '';

    return new OutcomeModel({ label, fillColor, fontFamily });
  };

  if (!Array.isArray(obj.outcomes)) {
    return { valid: false, error: 'Invalid or missing "outcomes" array' };
  }

  const parsedOutcomes: Outcome[] = [];
  for (let i = 0; i < obj.outcomes.length; i++) {
    const parsed = parseOutcome(obj.outcomes[i], i);
    if (!parsed) {
      return {
        valid: false,
        error: `Invalid outcome at index ${i}: must contain only "label", "fillColor", "fontFamily"`,
      };
    }
    parsedOutcomes.push(parsed);
  }

  // Ensure at least two outcomes
  if (parsedOutcomes.length === 0) {
    warnings.push('No valid outcomes found. Added Outcome 1 and Outcome 2.');
    parsedOutcomes.push(
      new OutcomeModel({ label: 'Outcome 1', fillColor: '', fontFamily: '' }),
      new OutcomeModel({ label: 'Outcome 2', fillColor: '', fontFamily: '' })
    );
  } else if (parsedOutcomes.length === 1) {
    warnings.push('Only one outcome found. Added Outcome 2.');
    parsedOutcomes.push(
      new OutcomeModel({ label: 'Outcome 2', fillColor: '', fontFamily: '' })
    );
  }

  const validated: WheelConfig = {
    configName: safeString(obj.configName),
    radiusName: validRadius(obj.radiusName),
    default_palette_idx: validPaletteIndex(obj.default_palette_idx),
    default_fontFamily: validFont(obj.default_fontFamily),
    outcomes: parsedOutcomes,
  };

  return { valid: true, config: validated, warnings };
}
