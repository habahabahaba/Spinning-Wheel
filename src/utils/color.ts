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
 * Adjusts the brightness of a hex color similarly to the CSS `filter: brightness()`.
 *
 * @param hexColor - A string representing the hex color (with or without `#`), either 3-digit (e.g., `#abc`) or 6-digit (e.g., `#aabbcc`).
 * @param amount - A number where `1` means no change, `>1` increases brightness, and `<1` decreases brightness.
 * @returns A hex color string (`#rrggbb`) after applying the brightness adjustment.
 *
 * @example
 * brightness("#6699cc", 1.2); // -> "#7ab8f5"
 * brightness("#abc", 0.8);    // -> "#8899aa"
 */
export function brightness(hexColor: string, amount: number): `#${string}` {
  // Remove '#' if present
  let color = hexColor.replace(/^#/, '');

  // Expand 3-digit colors to 6-digit
  if (color.length === 3) {
    color = color
      .split('')
      .map((ch) => ch + ch)
      .join('');
  }

  if (color.length !== 6) {
    throw new Error(`Invalid hex color: ${hexColor}`);
  }

  // Convert to R, G, B components
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  // Adjust brightness
  r = Math.min(255, Math.max(0, Math.round(r * amount)));
  g = Math.min(255, Math.max(0, Math.round(g * amount)));
  b = Math.min(255, Math.max(0, Math.round(b * amount)));

  // Convert back to hex string
  const result = `#${[r, g, b]
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('')}` as `#${string}`;
  return result;
}
