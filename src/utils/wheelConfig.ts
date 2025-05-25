// Assets:
// Constants:
import {
  // FONT_FAMILIES_LOCAL,
  FONT_FAMILIES_ALL,
} from '../constants/fonts';
import { WHEEL_RADII_MAP } from '../constants/radii';
import { PALETTES } from '../constants/palettes';
// Utils:
import { generateId, uniqueRandomsInRange } from './random';
import { isHexColor } from './color';
// Types, interfaces and enumns:
import type { Outcome, WheelConfig, WheelConfigsState } from '../store/types';
import { OutcomeModel } from '../store/types';
import type { AllFontNames } from '../store/types';
// import type { Radius } from '../constants/radii';
// import type { HexColor } from './color';

export const OUTCOMES_MAX_LENGTH = 72 as const;
// Type Guards:
function isOutcome(obj: unknown): obj is Outcome {
  if (typeof obj !== 'object' || obj === null) return false;

  const o = obj as Record<string, unknown>;

  const keys = Object.keys(o);
  if (
    keys.length !== 4 ||
    !keys.includes('id') ||
    !keys.includes('label') ||
    !keys.includes('fillColor') ||
    !keys.includes('fontFamily')
  ) {
    return false;
  }

  if (typeof o.id !== 'string') return false;
  if (!/^\d{13}-\d{8}$/.test(o.id)) return false;

  if (typeof o.label !== 'string') return false;

  if (typeof o.fillColor !== 'string') return false;
  if (o.fillColor !== '' && !isHexColor(o.fillColor)) return false;

  if (typeof o.fontFamily !== 'string') return false;
  if (
    o.fontFamily !== '' &&
    !FONT_FAMILIES_ALL.includes(o.fontFamily as AllFontNames)
  ) {
    return false;
  }

  return true;
}

function isWheelConfig(obj: unknown): obj is WheelConfig {
  if (typeof obj !== 'object' || obj === null) return false;

  const o = obj as Record<string, unknown>;

  const expectedKeys = [
    'configName',
    'radiusName',
    'default_palette_idx',
    'default_fontFamily',
    'outcomes',
  ];

  const hasOnlyExpectedKeys =
    Object.keys(o).length === expectedKeys.length &&
    expectedKeys.every((key) => key in o);

  if (!hasOnlyExpectedKeys) return false;

  if (typeof o.configName !== 'string') return false;

  if (typeof o.radiusName !== 'string' || !(o.radiusName in WHEEL_RADII_MAP))
    return false;

  if (
    typeof o.default_palette_idx !== 'number' ||
    !Number.isInteger(o.default_palette_idx)
  )
    return false;

  if (
    typeof o.default_fontFamily !== 'string' ||
    !FONT_FAMILIES_ALL.includes(o.default_fontFamily as AllFontNames)
  )
    return false;

  if (!Array.isArray(o.outcomes)) return false;

  for (const outcome of o.outcomes) {
    if (!isOutcome(outcome)) return false;
  }

  return true;
}

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

export const blankOutcome: () => Outcome = () =>
  new OutcomeModel({
    label: '',
    fillColor: '',
    fontFamily: '',
  });

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
    ({ label, fillColor, fontFamily, id }: Outcome) => ({
      id,
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

  // If there are more than OUTCOMES_MAX_LENGTH outcomes, take first OUTCOMES_MAX_LENGTH:
  if (preparedConfig.outcomes.length > OUTCOMES_MAX_LENGTH) {
    preparedConfig.outcomes = preparedConfig.outcomes.slice(
      0,
      OUTCOMES_MAX_LENGTH
    );
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
  | { valid: true; config: WheelConfig; error: string; warnings: string[] }
  | { valid: false; config: null; error: string; warnings: string[] };

/**
 * Validates and sanitizes a raw JSON object into a strict WheelConfig.
 *
 * Rules:
 * - Enforces exact shape of WheelConfig and each Outcome.
 * - Rejects objects with extra or missing keys.
 * - Coerces unknown fonts to fallback font.
 * - Coerces unknown radiusName to 'Medium'.
 * - Coerces out-of-range palette index to 0.
 * - Ensures at least 2 outcomes.
 *
 * @param raw - The untyped object to validate.
 * @returns A valid WheelConfig or an error.
 */
export function validateWheelConfig(raw: unknown): ValidationResult {
  if (!isWheelConfig(raw)) {
    return {
      valid: false,
      config: null,
      error:
        'The file either had some fields missing, or contained invalid fields or invalid values.',
      warnings: [],
    };
  }

  const warnings: string[] = [];

  const validPaletteIndex = (index: unknown): number => {
    if (typeof index === 'number' && index >= 0 && index < PALETTES.length) {
      return index;
    }
    warnings.push(
      `The file had invalid wheel colors, that were set to default.`
    );
    return 0;
  };

  // Start validation of config properties
  const outcomesRaw = raw.outcomes;
  const trimmedOutcomes = outcomesRaw.slice(0, OUTCOMES_MAX_LENGTH);

  if (outcomesRaw.length > OUTCOMES_MAX_LENGTH) {
    warnings.push(
      `The maximum possible number of outcomes is ${OUTCOMES_MAX_LENGTH}; extra outcomes were removed.`
    );
  }

  if (outcomesRaw.length === 0) {
    warnings.push('No outcomes were found. Added Outcome 1 and Outcome 2.');
    outcomesRaw.push(
      new OutcomeModel({ label: 'Outcome 1', fillColor: '', fontFamily: '' }),
      new OutcomeModel({ label: 'Outcome 2', fillColor: '', fontFamily: '' })
    );
  } else if (outcomesRaw.length === 1) {
    warnings.push('Only one outcome was found. Added Outcome 2.');
    outcomesRaw.push(
      new OutcomeModel({ label: 'Outcome 2', fillColor: '', fontFamily: '' })
    );
  }

  const validated: WheelConfig = {
    configName: raw.configName,
    radiusName: raw.radiusName,
    default_palette_idx: validPaletteIndex(raw.default_palette_idx),
    default_fontFamily: raw.default_fontFamily,
    outcomes: trimmedOutcomes,
  };

  // Check if all outcomes have distinct id's:
  const ids = new Set<string>();
  let newId: string;
  validated.outcomes.forEach(({ id }, index) => {
    if (ids.has(id)) {
      newId = '';
      while (!newId || ids.has(newId)) {
        newId = generateId();
      }
      validated.outcomes[index].id = newId;

      warnings.push(
        `Outcome ${
          index + 1
        } had a non-unique id, which was replaced with ${newId}.`
      );
    }
    ids.add(validated.outcomes[index].id);
  });

  return { valid: true, config: validated, error: '', warnings };
}
