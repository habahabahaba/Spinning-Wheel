// Types, interfaces and enumns:
import type { Browser } from '../utils/browser';

export type AllSubsets =
  | 'arabic'
  | 'armenian'
  | 'cyrillic'
  | 'cyrillic-ext'
  | 'devanagari'
  | 'greek'
  | 'greek-ext'
  | 'hebrew'
  | 'latin'
  | 'latin-ext'
  | 'vietnamese';

export const REMOTE_FONT_SUBSETS = {
  'Archivo Narrow': ['latin'],
  DynaPuff: ['latin'],
  Eczar: ['devanagari', 'greek-ext', 'greek', 'latin', 'latin-ext'],
  'Expletus Sans': ['latin'],
  Glory: ['latin', 'latin-ext', 'vietnamese'],
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
  'Markazi Text': ['arabic', 'latin', 'latin-ext', 'vietnamese'],
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
  'Shantell Sans': [
    'latin',
    'latin-ext',
    'cyrillic',
    'cyrillic-ext',
    'vietnamese',
  ],
  'Sofia Sans Semi Condensed': [
    'latin',
    'latin-ext',
    'cyrillic',
    'cyrillic-ext',
    'greek',
  ],
  Tektur: ['latin'],
  Tourney: ['latin'],
  Truculenta: ['latin', 'latin-ext'],
  'Yanone Kaffeesatz': ['latin'],
  'Winky Rough': ['latin'],
} as const satisfies Record<string, readonly AllSubsets[]>;

export const FONT_FAMILIES_LOCAL = ['sans-serif', 'Arial', 'serif'] as const;
export type LocalFontNames = (typeof FONT_FAMILIES_LOCAL)[number];

export const FONT_FAMILIES_REMOTE = Object.keys(
  REMOTE_FONT_SUBSETS
) as (keyof typeof REMOTE_FONT_SUBSETS)[];
export type RemoteFontNames = (typeof FONT_FAMILIES_REMOTE)[number];

export type AllFontNames = LocalFontNames | RemoteFontNames;
export const FONT_FAMILIES_ALL: AllFontNames[] = [
  ...FONT_FAMILIES_LOCAL,
  ...FONT_FAMILIES_REMOTE,
];

export const initFontLoadState = Object.fromEntries(
  FONT_FAMILIES_ALL.map((name) => [
    name,
    FONT_FAMILIES_LOCAL.includes(name as LocalFontNames),
  ])
) as Record<AllFontNames, boolean>;

// Create URL for a font subset
export function createFontUrl(
  fontName: RemoteFontNames,
  subset: AllSubsets
): string {
  const fontId = fontName.toLowerCase().replace(/\s+/g, '-');
  return `url(https://cdn.jsdelivr.net/fontsource/fonts/${fontId}@latest/${subset}-600-normal.woff2) format('woff2')`;
}

export type RemoteFontURLSets = Record<RemoteFontNames, Set<string>>;
export const initRemoteFontURLSets = Object.fromEntries(
  FONT_FAMILIES_REMOTE.map((fontName) => [
    fontName,
    new Set(
      REMOTE_FONT_SUBSETS[fontName].map((subset) =>
        createFontUrl(fontName, subset)
      )
    ),
  ])
) as RemoteFontURLSets;

class RemoteFontTask {
  constructor(fontName: RemoteFontNames, url: string) {
    this.fontName = fontName;
    this.url = url;
  }
  readonly fontName;
  readonly url;
}

export const remoteFontTasks: RemoteFontTask[] = (
  Object.entries(initRemoteFontURLSets) as [RemoteFontNames, Set<string>][]
).flatMap(([fontName, urls]) =>
  [...urls].map((url) => new RemoteFontTask(fontName, url))
);

export const initFontState = {
  fontLoadState: initFontLoadState,
  fontURLSets: initRemoteFontURLSets,
};

type FontOffsetMap = Record<Browser, Record<AllFontNames, string | 0>>;
export const FONT_Y_OFFSET: FontOffsetMap = {
  chrome: {
    Arial: 0,
    'sans-serif': 0,
    serif: 0,

    'Archivo Narrow': 0,
    DynaPuff: 0,
    Eczar: '0.03ch',
    'Expletus Sans': 0,
    Glory: 0,
    Handjet: 0,
    Manrope: 0,
    'Markazi Text': 0,
    MuseoModerno: 0,
    'Pixelify Sans': 0,
    'Reddit Sans Condensed': 0,
    'Roboto Condensed': 0,
    'Shantell Sans': 0,
    'Sofia Sans Semi Condensed': 0,
    Tektur: 0,
    Tourney: 0,
    Truculenta: 0,
    'Yanone Kaffeesatz': '0.06ch',
    'Winky Rough': '-0.11ch',
  },
  firefox: {
    Arial: 0,
    'sans-serif': '0.15ch',
    serif: '0.15ch',

    'Archivo Narrow': 0,
    DynaPuff: 0,
    Eczar: '0.11ch',
    'Expletus Sans': 0,
    Glory: 0,
    Handjet: 0,
    Manrope: 0,
    'Markazi Text': 0,
    MuseoModerno: 0,
    'Pixelify Sans': 0,
    'Reddit Sans Condensed': 0,
    'Roboto Condensed': 0,
    'Shantell Sans': 0,
    'Sofia Sans Semi Condensed': 0,
    Tektur: 0,
    Tourney: 0,
    Truculenta: 0,
    'Yanone Kaffeesatz': '0.06ch',
    'Winky Rough': '-0.11ch',
  },
  safari: {
    Arial: 0,
    'sans-serif': 0,
    serif: 0,

    'Archivo Narrow': 0,
    DynaPuff: 0,
    Eczar: '0.11ch',
    'Expletus Sans': 0,
    Glory: 0,
    Handjet: 0,
    Manrope: 0,
    'Markazi Text': 0,
    MuseoModerno: 0,
    'Pixelify Sans': 0,
    'Reddit Sans Condensed': 0,
    'Roboto Condensed': 0,
    'Shantell Sans': 0,
    'Sofia Sans Semi Condensed': 0,
    Tektur: 0,
    Tourney: 0,
    Truculenta: 0,
    'Yanone Kaffeesatz': '0.06ch',
    'Winky Rough': '-0.11ch',
  },
};
export const FONT_UNDERLINE_OFFSET: FontOffsetMap = {
  chrome: {
    Arial: 'initial',
    'sans-serif': 'initial',
    serif: 'initial',

    'Archivo Narrow': 'initial',
    DynaPuff: 'initial',
    Eczar: '1.5em',
    'Expletus Sans': 'initial',
    Glory: 'initial',
    Handjet: 'initial',
    Manrope: 'initial',
    'Markazi Text': 'initial',
    MuseoModerno: 'initial',
    'Pixelify Sans': 'initial',
    'Reddit Sans Condensed': 'initial',
    'Roboto Condensed': 'initial',
    'Shantell Sans': 'initial',
    'Sofia Sans Semi Condensed': 'initial',
    Tektur: 'initial',
    Tourney: 'initial',
    Truculenta: 'initial',
    'Yanone Kaffeesatz': '0.5em',
    'Winky Rough': 'initial',
  },

  firefox: {
    Arial: '0.2em',
    'sans-serif': '0.1em',
    serif: '0.1em',

    'Archivo Narrow': '0.2em',
    DynaPuff: '0.2em',
    Eczar: 'initial',
    'Expletus Sans': '0.2em',
    Glory: '0.2em',
    Handjet: '0.2em',
    Manrope: '0.2em',
    'Markazi Text': '0.2em',
    MuseoModerno: '0.2em',
    'Pixelify Sans': '0.2em',
    'Reddit Sans Condensed': '0.2em',
    'Roboto Condensed': '0.2em',
    'Shantell Sans': '0.2em',
    'Sofia Sans Semi Condensed': '0.2em',
    Tektur: '0.2em',
    Tourney: '0.2em',
    Truculenta: '0.2em',
    'Yanone Kaffeesatz': '0.1em',
    'Winky Rough': '0.2em',
  },

  safari: {
    Arial: 0,
    'sans-serif': 0,
    serif: 0,

    'Archivo Narrow': 0,
    DynaPuff: 0,
    Eczar: 0,
    'Expletus Sans': 0,
    Glory: 0,
    Handjet: 0,
    Manrope: 0,
    'Markazi Text': 0,
    MuseoModerno: 0,
    'Pixelify Sans': 0,
    'Reddit Sans Condensed': 0,
    'Roboto Condensed': 0,
    'Shantell Sans': 0,
    'Sofia Sans Semi Condensed': 0,
    Tektur: 0,
    Tourney: 0,
    Truculenta: 0,
    'Yanone Kaffeesatz': 0,
    'Winky Rough': 0,
  },
};
