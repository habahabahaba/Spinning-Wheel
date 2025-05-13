export const FONT_FAMILIES_LOCAL = ['sans-serif', 'Arial', 'serif'] as const;

export const FONT_IMPORTS = {
  'Archivo Narrow': () => import('@fontsource/archivo-narrow/600.css'),

  DynaPuff: () => import('@fontsource/dynapuff/600.css'),

  'Expletus Sans': () => import('@fontsource/expletus-sans/600.css'),

  Handjet: () => import('@fontsource/handjet/600.css'),

  Manrope: () => import('@fontsource/manrope/600.css'),

  MuseoModerno: () => import('@fontsource/museomoderno/600.css'),

  'Pixelify Sans': () => import('@fontsource/pixelify-sans/600.css'),

  'Reddit Sans Condensed': () =>
    import('@fontsource/reddit-sans-condensed/600.css'),

  'Roboto Condensed': () => import('@fontsource/roboto-condensed/600.css'),

  'Sofia Sans Semi Condensed': () =>
    import('@fontsource/sofia-sans-semi-condensed/600.css'),

  Tektur: () => import('@fontsource/tektur/600.css'),

  Tourney: () => import('@fontsource/tourney/600.css'),

  Truculenta: () => import('@fontsource/truculenta/600.css'),

  'Yanone Kaffeesatz': () => import('@fontsource/yanone-kaffeesatz/600.css'),

  'Winky Rough': () => import('@fontsource/winky-rough/600.css'),
} as const;

// Types, interfaces and enumns:
export type LocalFontNames = (typeof FONT_FAMILIES_LOCAL)[number];
export type RemoteFontNames = keyof typeof FONT_IMPORTS;
export type FontLoader = () => Promise<void>;
export type AllFontNames = LocalFontNames | RemoteFontNames;

export const FONT_FAMILIES_REMOTE = Object.keys(
  FONT_IMPORTS
) as RemoteFontNames[];

export const FONT_FAMILIES_REMOTE_SET: Set<AllFontNames> = new Set(
  FONT_FAMILIES_REMOTE
);

export const FONT_FAMILIES_ALL: AllFontNames[] = [
  ...FONT_FAMILIES_LOCAL,
  ...FONT_FAMILIES_REMOTE,
] as const;

const initFontsLoadStates: Record<AllFontNames, boolean> = {
  // System fonts:
  'sans-serif': true,
  Arial: true,
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
