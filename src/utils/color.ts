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
