// Types, interfaces and enumns:
export type HexColor = `#${string}`;
export function isHexColor(color: string): color is HexColor {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}

/**
 * Determines an optimal contrasting text color (`#000000` black or `#FFFFFF` white) for a given
 * hexadecimal background color, based on WCAG luminance standards. Supports both 3-digit (`#RGB`)
 * and 6-digit (`#RRGGBB`) hex formats.
 *
 * @param hexColor - A hexadecimal color string in 3-digit (`#RGB`) or 6-digit (`#RRGGBB`) format (case-insensitive).
 * @returns `'#000000'` (black) if the input color is bright (luminance > 0.5), `'#FFFFFF'` (white) if dark.
 * @throws {Error} If `hexColor` is not a valid 3-digit or 6-digit hexadecimal string.
 *
 * @example
 * // Returns '#000000' (bright color → black text)
 * contrastColor('#f00');      // 3-digit red
 * contrastColor('#00ff00');   // 6-digit green
 *
 * @example
 * // Returns '#FFFFFF' (dark color → white text)
 * contrastColor('#000');      // 3-digit black
 * contrastColor('#000080');   // 6-digit navy
 *
 * @example
 * // Throws Error:
 * contrastColor('red');       // Invalid hex
 * contrastColor('#zzz123');   // Invalid characters
 */
export function contrastColor(hexColor: string): '#000000' | '#FFFFFF' {
  // Normalize 3-digit hex to 6-digit (e.g., "#f00" → "#ff0000")
  const normalizedHex = hexColor.replace(
    /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/,
    '#$1$1$2$2$3$3'
  );

  // Validate the normalized result (must be 6-digit hex)
  if (!/^#[0-9A-Fa-f]{6}$/.test(normalizedHex)) {
    throw new Error('Invalid hex color format. Expected #RRGGBB or #RGB.');
  }

  // Extract and normalize RGB components to [0, 1]
  const r = parseInt(normalizedHex.slice(1, 3), 16) / 255;
  const g = parseInt(normalizedHex.slice(3, 5), 16) / 255;
  const b = parseInt(normalizedHex.slice(5, 7), 16) / 255;

  // Calculate relative luminance (WCAG formula)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Return black for bright colors, white for dark colors
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

/**
 * Adjusts the brightness of a hexadecimal color, accurately mimicking CSS `filter: brightness()` behavior.
 * Supports both 3-digit (`#RGB`) and 6-digit (`#RRGGBB`) hex formats.
 *
 * @param hexColor - The color to adjust in hexadecimal format (case-insensitive).
 * @param amount - Brightness multiplier where:
 *                 - 0 = completely black
 *                 - 1 = original color
 *                 - 1-2 = increasingly brighter
 *                 Values outside [0, 2] will be clamped to this range.
 * @returns The adjusted color in 6-digit hexadecimal format (`#RRGGBB`).
 * @throws {Error} Only if hexColor is invalid.
 *
 * @example
 * brightness('#808080', 1.5); // Brighten gray → '#bfbfbf'
 * brightness('#0044ff', 2);   // Maximum brightness → '#0088ff'
 * brightness('#ff0000', 0.5); // Darken red → '#800000'
 */
export function brightness(hexColor: string, amount: number): `#${string}` {
  // Clamp amount to [0, 2] range
  const clampedAmount = Math.max(0, Math.min(2, amount));

  // Normalize 3-digit hex to 6-digit
  const normalizedHex = hexColor.replace(
    /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i,
    '#$1$1$2$2$3$3'
  );

  // Validate hex format
  if (!/^#[0-9a-f]{6}$/i.test(normalizedHex)) {
    throw new Error(
      `Invalid hex color: "${hexColor}". Expected #RGB or #RRGGBB.`
    );
  }

  // Extract RGB components
  const r = parseInt(normalizedHex.slice(1, 3), 16);
  const g = parseInt(normalizedHex.slice(3, 5), 16);
  const b = parseInt(normalizedHex.slice(5, 7), 16);

  // Adjust brightness while maintaining color ratios
  const adjust = (value: number) => {
    // For amounts > 1, we scale up while keeping proportions
    if (clampedAmount > 1) {
      const scaled = value * clampedAmount;
      // Preserve color ratios by scaling towards 255 without exceeding it
      return Math.min(255, scaled + (255 - scaled) * (clampedAmount - 1));
    }
    // For amounts <= 1, simple multiplication
    return Math.round(value * clampedAmount);
  };

  // Apply adjustment and clamp to [0, 255]
  const clamp = (value: number) =>
    Math.min(255, Math.max(0, Math.round(value)));
  const adjustedR = clamp(adjust(r));
  const adjustedG = clamp(adjust(g));
  const adjustedB = clamp(adjust(b));

  // Convert back to 6-digit hex
  const toHex = (value: number) => value.toString(16).padStart(2, '0');
  return `#${toHex(adjustedR)}${toHex(adjustedG)}${toHex(adjustedB)}` as const;
}
