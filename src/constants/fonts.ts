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
