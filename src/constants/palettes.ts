// Types, interfaces and enumns:
type HexColor = `#${string}`;
export const PALETTES: HexColor[][] = [
  ['#e6b89c', '#fe938c', '#ead2ac', '#9cafb7'],

  ['#b5ac86', '#e88b6d', '#e0c18c', '#858f7b'],

  ['#80e8f7', '#faf470', '#d186f7', '#d0f8ff', '#ffffb4', '#e6d5ff'],

  ['#e8f3fd', '#ed4d41', '#5764ad', '#ede73b', '#d0e7fb', '#574d6c'],

  ['#f300ea', '#fd597e', '#fbee88', '#a800d5', '#fafbc3', '#ff00cb'],
] as const;
