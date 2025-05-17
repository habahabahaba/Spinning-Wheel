export const FONT_FAMILIES_LOCAL = ['sans-serif', 'Arial', 'serif'] as const;

export const FONT_FAMILIES_REMOTE = [
  'Archivo Narrow',
  'DynaPuff',
  'Expletus Sans',
  'Handjet',
  'Manrope',
  'MuseoModerno',
  'Pixelify Sans',
  'Reddit Sans Condensed',
  'Roboto Condensed',
  'Sofia Sans Semi Condensed',
  'Tektur',
  'Tourney',
  'Truculenta',
  'Yanone Kaffeesatz',
  'Winky Rough',
] as const;

export type RemoteFontNames = (typeof FONT_FAMILIES_REMOTE)[number];

export function createFontUrl(fontName: RemoteFontNames): string {
  const fontId = fontName.toLowerCase().replace(/\s+/g, '-');
  return `url(https://cdn.jsdelivr.net/npm/@fontsource/${fontId}@latest/files/${fontId}-latin-600-normal.woff2) format('woff2')`;
}

// Types
// export type FontLoader = () => Promise<Blob>;

// Types, interfaces and enumns:
export type LocalFontNames = (typeof FONT_FAMILIES_LOCAL)[number];

// export type FontLoader = () => Promise<void>;
export type AllFontNames = LocalFontNames | RemoteFontNames;

export const FONT_FAMILIES_REMOTE_SET: Set<AllFontNames> = new Set(
  FONT_FAMILIES_REMOTE
);

export const FONT_FAMILIES_ALL: AllFontNames[] = [
  ...FONT_FAMILIES_LOCAL,
  ...FONT_FAMILIES_REMOTE,
] as const;

const initFontsLoadStates: Record<AllFontNames, boolean> = {
  // System fonts:
  Arial: true,
  'sans-serif': true,
  serif: true,

  // Remote fonts:
  'Archivo Narrow': false,
  DynaPuff: false,
  'Expletus Sans': false,
  Handjet: false,
  Manrope: false,
  MuseoModerno: false,
  'Pixelify Sans': false,
  'Reddit Sans Condensed': false,
  'Roboto Condensed': false,
  'Sofia Sans Semi Condensed': false,
  Tektur: false,
  Tourney: false,
  Truculenta: false,
  'Yanone Kaffeesatz': false,
  'Winky Rough': false,
};

export const initFontsState = {
  fontsLoadStates: initFontsLoadStates,
  allFontsReady: false,
};

export function createUrl(fontName: RemoteFontNames): string {
  const fontId = fontName.toLowerCase().split(' ').join('-');

  return `https://cdn.jsdelivr.net/npm/@fontsource/${fontId}@latest/files/${fontId}-latin-600-normal.woff2`;
}
