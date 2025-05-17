export const FONT_FAMILIES_LOCAL = ['sans-serif', 'Arial', 'serif'] as const;

export const FONT_IMPORTS = {
  'Archivo Narrow': {
    id: 'archivo-narrow',
    load: () => loadFontBlocking('archivo-narrow', 'Archivo Narrow'),
  },
  DynaPuff: {
    id: 'dynapuff',
    load: () => loadFontBlocking('dynapuff', 'DynaPuff'),
  },
  'Expletus Sans': {
    id: 'expletus-sans',
    load: () => loadFontBlocking('expletus-sans', 'Expletus Sans'),
  },
  Handjet: {
    id: 'handjet',
    load: () => loadFontBlocking('handjet', 'Handjet'),
  },
  Manrope: {
    id: 'manrope',
    load: () => loadFontBlocking('manrope', 'Manrope'),
  },
  MuseoModerno: {
    id: 'museomoderno',
    load: () => loadFontBlocking('museomoderno', 'MuseoModerno'),
  },
  'Pixelify Sans': {
    id: 'pixelify-sans',
    load: () => loadFontBlocking('pixelify-sans', 'Pixelify Sans'),
  },
  'Reddit Sans Condensed': {
    id: 'reddit-sans-condensed',
    load: () =>
      loadFontBlocking('reddit-sans-condensed', 'Reddit Sans Condensed'),
  },
  'Roboto Condensed': {
    id: 'roboto-condensed',
    load: () => loadFontBlocking('roboto-condensed', 'Roboto Condensed'),
  },
  'Sofia Sans Semi Condensed': {
    id: 'sofia-sans-semi-condensed',
    load: () =>
      loadFontBlocking(
        'sofia-sans-semi-condensed',
        'Sofia Sans Semi Condensed'
      ),
  },
  Tektur: {
    id: 'tektur',
    load: () => loadFontBlocking('tektur', 'Tektur'),
  },
  Tourney: {
    id: 'tourney',
    load: () => loadFontBlocking('tourney', 'Tourney'),
  },
  Truculenta: {
    id: 'truculenta',
    load: () => loadFontBlocking('truculenta', 'Truculenta'),
  },
  'Yanone Kaffeesatz': {
    id: 'yanone-kaffeesatz',
    load: () => loadFontBlocking('yanone-kaffeesatz', 'Yanone Kaffeesatz'),
  },
  'Winky Rough': {
    id: 'winky-rough',
    load: () => loadFontBlocking('winky-rough', 'Winky Rough'),
  },
} as const;

const FONT_CACHE = new Map<string, boolean>();

async function loadFontBlocking(
  fontId: string,
  fontName: string
): Promise<void> {
  if (FONT_CACHE.has(fontName)) return;

  const url = `https://cdn.jsdelivr.net/npm/@fontsource/${fontId}@latest/files/${fontId}-latin-600-normal.woff2`;

  // 1. Load font with hard blocking
  const fontFace = new FontFace(fontName, `url(${url}) format('woff2')`, {
    weight: '600',
    display: 'block', // Hard block
    stretch: 'normal',
  });

  // 2. Atomic load-and-verify
  try {
    const loadedFace = await fontFace.load();
    document.fonts.add(loadedFace);

    // 3. Verify without DOM - uses FontFaceSet check
    await new Promise<void>((resolve) => {
      const check = () => {
        if (document.fonts.check(`600 16px "${fontName}"`)) {
          FONT_CACHE.set(fontName, true);
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      check();
    });
  } catch (err) {
    FONT_CACHE.delete(fontName);
    throw err;
  }
}

// Types
export type FontLoader = () => Promise<Blob>;

// Types, interfaces and enumns:
export type LocalFontNames = (typeof FONT_FAMILIES_LOCAL)[number];
export type RemoteFontNames = keyof typeof FONT_IMPORTS;
// export type FontLoader = () => Promise<void>;
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
