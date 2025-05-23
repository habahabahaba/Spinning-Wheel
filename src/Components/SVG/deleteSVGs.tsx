// Types, interfaces and enumns:
import type { JSX } from 'react';
import type { HexColor } from '../../utils/color';
type SVGfn = (colors: {
  color0?: HexColor;
  color1?: HexColor;
  color2?: HexColor;
}) => JSX.Element;

const deleteSVGs: SVGfn[] = [
  ({ color0 = '#000000' }) => (
    <svg
      data-name='20 Delete'
      xmlns='http://www.w3.org/2000/svg'
      fill={color0}
      viewBox='0 0 512 512'
      aria-hidden='true'
    >
      <path
        id='Path_27'
        data-name='Path 27'
        d='M256,512C114.625,512,0,397.375,0,256,0,114.609,114.625,0,256,0S512,114.609,512,256C512,397.375,397.375,512,256,512ZM64,256A190.514,190.514,0,0,0,99.531,366.656L366.656,99.516A190.648,190.648,0,0,0,256,64C149.969,64,64,149.969,64,256ZM412.469,145.344,145.344,412.5A190.635,190.635,0,0,0,256,448c106.031,0,192-85.969,192-192A190.477,190.477,0,0,0,412.469,145.344Z'
        fillRule='evenodd'
      />
    </svg>
  ),
  ({ color0 = '#000000' }) => (
    <svg
      viewBox='0 0 16 16'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      aria-hidden='true'
    >
      <rect width='16' height='16' id='icon-bound' fill='none' />
      <path
        fill={color0}
        d='M0,8c0,4.419,3.581,8,8,8s8-3.581,8-8s-3.581-8-8-8S0,3.581,0,8z M12.891,11.478L4.522,3.109C5.531,2.391,6.734,2,8,2 c1.603,0,3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8C14,9.266,13.609,10.469,12.891,11.478z M2,8 c0-1.266,0.391-2.469,1.109-3.478l8.369,8.369C10.469,13.609,9.266,14,8,14c-1.603,0-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8z'
      />
    </svg>
  ),

  ({ color0 = '#000000' }) => (
    <svg
      fill={color0}
      viewBox='8 9 15 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <title>Delete</title>
      <path d='M18.828 16l4.243 4.243-2.828 2.828-4.243-4.243-4.243 4.243-2.828-2.828 4.243-4.243-4.243-4.243 2.828-2.828 4.243 4.243 4.243-4.243 2.828 2.828-4.243 4.243z'></path>
    </svg>
  ),

  ({ color0 = '#000000' }) => (
    <svg
      fill={color0}
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 100 100'
      enableBackground='new 0 0 100 100'
      xmlSpace='preserve'
      aria-hidden='true'
    >
      <g>
        <path
          d='M50.197,84.199c18.273,0,33.141-14.868,33.141-33.143c0-18.272-14.867-33.138-33.141-33.138S17.057,32.784,17.057,51.057
          C17.057,69.331,31.924,84.199,50.197,84.199z M50.197,80.199c-7.421,0-14.199-2.793-19.35-7.377l41.113-41.114
          c4.584,5.15,7.377,11.928,7.377,19.349C79.338,67.126,66.266,80.199,50.197,80.199z M50.197,21.919
          c7.21,0,13.812,2.638,18.905,6.991L28.049,69.964c-4.354-5.094-6.992-11.696-6.992-18.907
          C21.057,34.99,34.129,21.919,50.197,21.919z'
        />
      </g>
    </svg>
  ),
];

export default deleteSVGs[2];
