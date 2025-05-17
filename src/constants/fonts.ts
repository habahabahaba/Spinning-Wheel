export type AllSubsets =
  | 'arabic'
  | 'armenian'
  | 'cyrillic'
  | 'cyrillic-ext'
  | 'greek'
  | 'greek-ext'
  | 'hebrew'
  | 'latin'
  | 'latin-ext'
  | 'vietnamese';

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

export const REMOTE_FONT_SUBSETS: Record<RemoteFontNames, AllSubsets[]> = {
  'Archivo Narrow': ['latin'],
  DynaPuff: ['latin'],
  'Expletus Sans': ['latin'],
  Handjet: [
    'arabic',
    'armenian',
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'hebrew',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  Manrope: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  MuseoModerno: ['latin', 'latin-ext', 'vietnamese'],
  'Pixelify Sans': ['latin'],
  'Reddit Sans Condensed': ['latin'],
  'Roboto Condensed': [
    'latin',
    'latin-ext',
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
  ],
  'Sofia Sans Semi Condensed': [
    'latin',
    'latin-ext',
    'cyrillic',
    'cyrillic-ext',
    'greek',
    // 'greek-ext',
  ],
  Tektur: ['latin'],
  Tourney: ['latin'],
  Truculenta: ['latin', 'latin-ext'],
  'Yanone Kaffeesatz': ['latin'],
  'Winky Rough': ['latin'],
};

export function createFontUrl(
  fontName: RemoteFontNames,
  subset: AllSubsets
): string {
  const fontId = fontName.toLowerCase().replace(/\s+/g, '-');
  return `url(https://cdn.jsdelivr.net/npm/@fontsource/${fontId}@latest/files/${fontId}-${subset}-600-normal.woff2) format('woff2')`;
}

export type LocalFontNames = (typeof FONT_FAMILIES_LOCAL)[number];

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
