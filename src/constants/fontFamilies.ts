export const FONT_FAMILIES_LOCAL = [
  'Arial',
  'serif',
  'sans-serif',
  'system-ui',
] as const;

export const FONT_IMPORTS = {
  'Playpen Sans': () => import('@fontsource/playpen-sans/600.css'),
  Tektur: () => import('@fontsource/tektur/600.css'),
  'Sansita Swashed': () => import('@fontsource/sansita-swashed/600.css'),
  'Expletus Sans': () => import('@fontsource/expletus-sans/600.css'),
  'Pixelify Sans': () => import('@fontsource/pixelify-sans/600.css'),
  Grandstander: () => import('@fontsource/grandstander/600.css'),
  Alkatra: () => import('@fontsource/alkatra/600.css'),
  'Roboto Slab': () => import('@fontsource/roboto-slab/600.css'),
  'EB Garamond': () => import('@fontsource/eb-garamond/600.css'),
  Lora: () => import('@fontsource/lora/600.css'),
  Literata: () => import('@fontsource/literata/600.css'),
  Fraunces: () => import('@fontsource/fraunces/600.css'),
  'Source Serif 4': () => import('@fontsource/source-serif-4/600.css'),
  Overpass: () => import('@fontsource/overpass/600.css'),
  Inter: () => import('@fontsource/inter/600.css'),
  'Nunito Sans': () => import('@fontsource/nunito-sans/600.css'),
  'Winky Rough': () => import('@fontsource/winky-rough/600.css'),
  'Reddit Sans Condensed': () =>
    import('@fontsource/reddit-sans-condensed/600.css'),
  Manrope: () => import('@fontsource/manrope/600.css'),
  Chivo: () => import('@fontsource/chivo/600.css'),
  'Roboto Condensed': () => import('@fontsource/roboto-condensed/600.css'),
  'Sofia Sans Semi Condensed': () =>
    import('@fontsource/sofia-sans-semi-condensed/600.css'),
} as const;

// Types, interfaces and enumns:
export type LocalFontNames = (typeof FONT_FAMILIES_LOCAL)[number];
export type RemoteFontNames = keyof typeof FONT_IMPORTS;
export type FontLoader = () => Promise<void>;
export type AllFontNames = LocalFontNames | RemoteFontNames;

export const FONT_FAMILIES_REMOTE = Object.keys(
  FONT_IMPORTS
) as RemoteFontNames[];

export const FONT_FAMILIES_ALL: AllFontNames[] = [
  ...FONT_FAMILIES_LOCAL,
  ...FONT_FAMILIES_REMOTE,
];

// export const FONT_FAMILIES_REMOTE = [
//     'Playpen Sans',
//     'Tektur',
//     'Sansita Swashed',
//     'Expletus Sans',
//     'Pixelify Sans',
//     'Grandstander',
//     'Alkatra',

//     'Roboto Slab',
//     'EB Garamond',
//     'Lora',
//     'Literata',
//     'Fraunces',
//     'Source Serif 4',
//     'Overpass',

//     'Roboto',
//     'Inter',
//     'Nunito Sans',
//     'Winky Rough',
//     'Reddit Sans Condensed',
//     'Manrope',
//     'Chivo',
//     'Roboto Condensed',
//     'Sofia Sans Semi Condensed',
//   ];
