// Types, interfaces and enumns:
import type { JSX } from 'react';
import type { HexColor } from '../../utils/color';
type SVGfn = (colors: {
  color0?: HexColor;
  color1?: HexColor;
  color2?: HexColor;
}) => JSX.Element;

export const saveSVGs: SVGfn[] = [
  ({ color0 = '#000' }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      // width="400"
      // height="400"
      viewBox='0 0 400 400'
    >
      <path
        fill={color0}
        d='M0 0v400h400V88.594L311.406 0H25zm90.986 26.899h218.026v133.865H90.986zm149.983 19.755v86h43v-86z'
      />
    </svg>
  ),

  ({ color0 = '#000' }) => (
    <svg
      version='1.1'
      id='Uploaded to svgrepo.com'
      xmlns='http://www.w3.org/2000/svg'
      xmlns-xlink='http://www.w3.org/1999/xlink'
      // width="800px"
      // height="800px"
      viewBox='0 0 32 32'
      xml-space='preserve'
    >
      <path
        fill={color0}
        d='M4,4v24h24V4H4z M10,6h12v7H10V6z M26,26H6V6h2v9h16V6h2V26z M18,7h3v5h-3V7z'
      />
    </svg>
  ),
];
