// Types, interfaces and enumns:
type HexColor = `#${string}`;
export const PALETTES: HexColor[][] = [
  ['#C18AFF', '#FF5F6D', '#FFC371', '#47E5BC', '#6A82FB', '#F6D365'],

  ['#e6b89c', '#fe938c', '#ead2ac', '#9cafb7'],

  ['#80e8f7', '#faf470', '#d186f7', '#d0f8ff', '#ffffb4', '#e6d5ff'],

  ['#d0e7fb', '#ed4d41', '#5764ad', '#e8f3fd', '#ede73b', '#574d6c'],

  ['#7EFDD0', '#fd597e', '#fbee88', '#a800d5', '#fafbc3', '#ff00cb'],

  ['#00D1D1', '#FF3E3E', '#FF00FF', '#B0FF00', '#0066FF', '#FFEE00'],

  ['#E6D8A8', '#E6A8A8', '#A8E6CE', '#C7A8E6', '#A8C7E6', '#E6A8D8'],

  ['#005E2D', '#5E0035', '#5E4D00', '#003E5E', '#5E0000', '#3D005E'],

  ['#000000', '#ffffff'],
] as const;
