// Types, interfaces and enumns:
import type { JSX } from 'react';
import { HexColor } from '../../utils/color';
type SVGfn = (options: {
  fillColor?: HexColor;
  strokeColor?: HexColor;
  shadow?: string;
}) => JSX.Element;

const arrowSVGs: SVGfn[] = [
  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(-15px -10px 20px gray)',
  } = {}) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
    >
      <g
        strokeWidth='111'
        stroke={fillColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,989.685424949238,399.99999999999994)'
        style={{ filter: `${shadow}` }}
      >
        <line
          x1='372.5'
          y1='372.5'
          x2='427.5'
          y2='427.5'
          markerEnd='url(#SvgjsMarker1254)'
        ></line>
      </g>
      <defs>
        <marker
          markerWidth='6.5'
          markerHeight='6.5'
          refX='3.25'
          refY='3.25'
          viewBox='0 0 6.5 6.5'
          orient='auto'
          id='SvgjsMarker1254'
          stroke={strokeColor}
          strokeWidth='0.1'
          strokeLinecap='square'
        >
          <polygon points='0,6.5 0,0 6.5,3.25' fill={fillColor}></polygon>
        </marker>
      </defs>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(-05px 5px 6px black)',
  } = {}) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 24'
      transform='translate(8, 2) rotate(225 0 0)'
      style={{ filter: `${shadow}` }}
    >
      <path
        d='M3,10.714,21,3,13.286,21,12,12Z'
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth='0.1'
        strokeLinecap='square'
      />
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(5px 0px 5px gray)',
  } = {}) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-1 -2 20 20'
      style={{ filter: `${shadow}` }}
    >
      <g transform='rotate(180 11.914 7.3845)'>
        <path
          d='m13.616 2.828 2.585 2.586H0v4h16.143l-2.527 2.526 2.828 2.829 7.384-7.384L16.444 0l-2.828 2.828z'
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth='0.1'
          strokeLinecap='square'
        />
      </g>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(4px 0px 3px gray)',
  } = {}) => (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 440 800'
      transform='translate(0, -3)'
      style={{ filter: `${shadow}` }}
    >
      <defs>
        <marker
          markerWidth='4'
          markerHeight='4'
          refX='2.5'
          refY='2.5'
          viewBox='0 0 5 5'
          orient='auto'
          id='SvgjsMarker2753'
        >
          <polygon points='0,5 0,0 5,2.5' fill={fillColor}></polygon>
        </marker>

        <marker
          markerWidth='5'
          markerHeight='5'
          refX='2.5'
          refY='2.5'
          viewBox='0 0 5 5'
          orient='auto'
          id='whiteOutlineMarker'
        >
          <polygon
            points='0.65,4.4 0.65,0.6 4.4,2.5'
            fill={strokeColor}
          ></polygon>
        </marker>
      </defs>

      <g
        strokeWidth='69'
        stroke='white'
        fill='none'
        strokeLinecap='square'
        transform='rotate(134, 400, 400)'
      >
        <line
          x1='212'
          y1='212'
          x2='583.5'
          y2='583.5'
          markerEnd='url(#whiteOutlineMarker)'
        ></line>
      </g>

      <g
        strokeWidth='60'
        stroke={fillColor}
        fill='none'
        strokeLinecap='square'
        transform='rotate(134, 400, 400)'
      >
        <line
          x1='216.5'
          y1='216.5'
          x2='583.5'
          y2='583.5'
          markerEnd='url(#SvgjsMarker2753)'
        ></line>
      </g>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(4px 0px 3px gray)',
  } = {}) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='0 200 400 400'
      transform='translate(-2, -1)'
      style={{ filter: `${shadow}` }}
    >
      <defs>
        <marker
          markerWidth='5'
          markerHeight='5'
          refX='2.5'
          refY='2.5'
          viewBox='0 0 5 5'
          orient='auto'
          id='whiteOutlineMarker'
        >
          <polygon
            points='0.3,4.7 1.8,2.5 0.25,0.27 4.65,2.5'
            fill={strokeColor}
          ></polygon>
        </marker>

        <marker
          markerWidth='4.5'
          markerHeight='4.5'
          refX='2.25'
          refY='2.25'
          viewBox='0 0 4.5 4.5'
          orient='auto'
          id='SvgjsMarker2209'
        >
          <polygon
            points='0,4.5 1.5,2.25 0,0 4.5,2.25'
            fill={fillColor}
          ></polygon>
        </marker>
      </defs>

      <g
        strokeWidth='70'
        stroke={strokeColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7193398003386512,0.6946583704589971,-0.6946583704589971,-0.7193398003386512,838.5992683190593,411.87257195186163)'
      >
        <line
          x1='325.5'
          y1='325.5'
          x2='474.5'
          y2='474.5'
          markerEnd='url(#whiteOutlineMarker)'
        ></line>
      </g>

      <g
        strokeWidth='63'
        stroke={fillColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7193398003386512,0.6946583704589971,-0.6946583704589971,-0.7193398003386512,838.5992683190593,411.87257195186163)'
      >
        <line
          x1='325.5'
          y1='325.5'
          x2='474.5'
          y2='474.5'
          markerEnd='url(#SvgjsMarker2209)'
        ></line>
      </g>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(4px 0px 3px gray)',
  } = {}) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='-30 130 600 600'
      transform='translate(-1, 0)'
      style={{ filter: `${shadow}` }}
    >
      <defs>
        <marker
          markerWidth='6'
          markerHeight='6'
          refX='3'
          refY='3'
          viewBox='0 0 6 6'
          orient='auto'
          id='whiteOutlineMarker'
        >
          <polygon
            points='0.7,5.2 3,3 0.7,0.8 5.1,3'
            fill={strokeColor}
          ></polygon>
        </marker>
        <marker
          markerWidth='4.5'
          markerHeight='4.5'
          refX='2.25'
          refY='2.25'
          viewBox='0 0 4.5 4.5'
          orient='auto'
          id='SvgjsMarker4105'
        >
          <polygon
            points='0,4.5 2.25,2.25 0,0 4.5,2.25'
            fill={fillColor}
          ></polygon>
        </marker>
      </defs>
      <g
        strokeWidth='125'
        stroke={strokeColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,995.685424949238,413.99999999999994)'
      >
        <line
          x1='274'
          y1='274'
          x2='526'
          y2='526'
          markerEnd='url(#whiteOutlineMarker)'
        ></line>
      </g>
      <g
        strokeWidth='111'
        stroke={fillColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,995.685424949238,413.99999999999994)'
      >
        <line
          x1='274'
          y1='274'
          x2='526'
          y2='526'
          markerEnd='url(#SvgjsMarker4105)'
        ></line>
      </g>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(4px 0px 3px gray)',
  } = {}) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='-20 200 520 470'
      style={{ filter: `${shadow}` }}
    >
      <defs>
        <marker
          markerWidth='6'
          markerHeight='6'
          refX='3'
          refY='3'
          viewBox='0 0 6 6'
          orient='auto'
          id='whiteOutlineMarker'
        >
          <polygon points='2.3,5.15 0.9,3 2.3,0.9 5.1,3' fill={strokeColor} />
        </marker>
        <marker
          markerWidth='4.5'
          markerHeight='4.5'
          refX='2.25'
          refY='2.25'
          viewBox='0 0 4.5 4.5'
          orient='auto'
          id='SvgjsMarker3689'
        >
          <polygon points='1.5,4.5 0,2.25 1.5,0 4.5,2.25' fill={fillColor} />
        </marker>
      </defs>
      <g
        strokeWidth='98'
        stroke='white'
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,897.685424949238,413.99999999999994)'
      >
        <line
          x1='306'
          y1='306'
          x2='494'
          y2='494'
          markerEnd='url(#whiteOutlineMarker)'
        />
      </g>
      <g
        strokeWidth='87'
        stroke={fillColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,897.685424949238,413.99999999999994)'
      >
        <line
          x1='306'
          y1='306'
          x2='494'
          y2='494'
          markerEnd='url(#SvgjsMarker3689)'
        />
      </g>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(4px 0px 3px gray)',
  } = {}) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='-20 150 520 550'
      style={{ filter: `${shadow}` }}
    >
      <defs>
        <marker
          markerWidth='6'
          markerHeight='6'
          refX='3'
          refY='3'
          viewBox='0 0 6 6'
          orient='auto'
          id='whiteOutlineMarker'
        >
          <polygon
            points='1.75,5.15 0.9,3 1.75,0.85 5.1,3'
            fill={strokeColor}
          />
        </marker>
        <marker
          markerWidth='4.5'
          markerHeight='4.5'
          refX='2.25'
          refY='2.25'
          viewBox='0 0 4.5 4.5'
          orient='auto'
          id='SvgjsMarker3780'
        >
          <polygon points='0.9,4.5 0,2.25 0.9,0 4.5,2.25' fill={fillColor} />
        </marker>
      </defs>
      <g
        strokeWidth='99'
        stroke={strokeColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,902.685424949238,413.99999999999994)'
      >
        <line
          x1='306'
          y1='306'
          x2='494'
          y2='494'
          markerEnd='url(#whiteOutlineMarker)'
        />
      </g>
      <g
        strokeWidth='89'
        stroke={fillColor}
        fill='none'
        strokeLinecap='square'
        transform='matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,902.685424949238,413.99999999999994)'
      >
        <line
          x1='306'
          y1='306'
          x2='494'
          y2='494'
          markerEnd='url(#SvgjsMarker3780)'
        />
      </g>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(-4px -4px 3px gray)',
  } = {}) => (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 100 100'
      transform='scale(-1 1) rotate(-45 -7 13)'
      style={{ filter: `${shadow}` }}
    >
      <path
        strokeWidth='1'
        stroke={strokeColor}
        strokeLinecap='square'
        fill={fillColor}
        d='M2.844 3.009v20.459L14.252 26.508l10.241 10.248 6.781 -3.632 1.721 3.217 -16.833 9.015 23.413 6.476 16.461 16.467 3.949 -1.483 1.282 3.418 -12.781 4.804L95.898 96.484 74.573 49.359l-5.084 13.342 -3.412 -1.3 1.746 -4.584 -4.181 -4.187 -6.5 -23.499 -0.531 0.989 -8.13 15.204 -3.223 -1.721 3.259 -6.098 -9.058 -9.057 -6.457 -23.346 -8.411 15.777 -3.223 -1.715 3.064 -5.744L14.02 3.009z'
      />
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(4px -4px 3px gray)',
  } = {}) => (
    <svg
      version='1.1'
      id='_x32_'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 64 64'
      xmlSpace='preserve'
      transform='rotate(45 8 16)'
      style={{ filter: `${shadow}` }}
    >
      <g>
        <path
          strokeWidth='1'
          stroke={strokeColor}
          strokeLinecap='square'
          fill={fillColor}
          points='380.141,162.138 481.76,166.699 512,136.474 381.402,130.59 375.534,0.007 345.31,30.233 
349.854,131.867 347.301,134.42 319.337,162.384 314.792,60.75 284.56,90.983 289.112,192.609 257.527,224.195 251.166,124.376 
221.342,154.201 227.71,254.012 90.698,391.031 56.097,356.431 0,511.993 155.57,455.911 120.969,421.31 257.665,284.614 
361.152,287.321 390.14,258.319 390.47,256.627 288.328,253.943 319.392,222.872 421.025,227.44 451.25,197.216 349.624,192.655 
377.573,164.706 	'
          d='M47.518 20.267L60.22 20.837L64 17.059L47.675 16.324L46.942 0.001L43.164 3.779L43.732 16.483L43.413 16.802L39.917 20.298L39.349 7.594L35.57 11.373L36.139 24.076L32.191 28.024L31.396 15.547L27.668 19.275L28.464 31.752L11.337 48.879L7.012 44.554L0 63.999L19.446 56.989L15.121 52.664L32.208 35.577L45.144 35.915L48.767 32.29L48.809 32.078L36.041 31.743L39.924 27.859L52.628 28.43L56.406 24.652L43.703 24.082L47.197 20.588Z'
        />
      </g>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(-4px 0px 3px gray)',
  } = {}) => (
    <svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      x='0px'
      y='0px'
      viewBox='0 0 100 100'
      transform='scale(-1 1) translate(-2, -0)'
      style={{ filter: `${shadow}` }}
    >
      <path
        strokeWidth='1'
        stroke={strokeColor}
        strokeLinecap='square'
        fill={fillColor}
        d='m99.431 48.989 -13.259 -8.361c-0.478 -0.303 -1.162 -0.255 -1.595 0.112l-6.537 5.547H30.279c-1.316 -2.088 -3.641 -3.479 -6.286 -3.479a7.385 7.385 0 0 0 -3.299 0.775l-9.407 -7.06c-0.209 -0.157 -0.535 -0.366 -0.95 -0.366 -0.4 0 -0.763 0.199 -0.972 0.534 -0.245 0.392 -0.238 0.862 0.022 1.399l2.254 4.641 -9.482 -6.284c-0.302 -0.2 -0.606 -0.301 -0.906 -0.301 -0.397 0 -0.758 0.178 -0.992 0.489 -0.187 0.248 -0.369 0.681 -0.181 1.337l3.309 11.507c0.074 0.259 0.074 0.786 0 1.045L0.08 62.028c-0.189 0.656 -0.006 1.089 0.181 1.337 0.234 0.311 0.596 0.489 0.992 0.489 0.3 0 0.604 -0.101 0.906 -0.301l9.483 -6.284 -2.254 4.642c-0.26 0.536 -0.268 1.007 -0.022 1.399 0.209 0.334 0.573 0.534 0.972 0.534 0.414 0 0.741 -0.209 0.95 -0.366l9.042 -6.786a7.385 7.385 0 0 0 3.664 0.97c2.839 0 5.309 -1.601 6.559 -3.948h47.489l6.538 5.548a1.358 1.358 0 0 0 0.876 0.316 1.337 1.337 0 0 0 0.717 -0.204l13.259 -8.362c0.357 -0.225 0.57 -0.603 0.57 -1.011s-0.214 -0.787 -0.57 -1.011'
      />
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(-4px 0px 3px gray)',
  } = {}) => (
    <svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      x='0px'
      y='0px'
      viewBox='0 0 100 100'
      transform='scale(-1 1) translate(-2, -1)'
      style={{ filter: `${shadow}` }}
    >
      <path
        strokeWidth='1'
        stroke={strokeColor}
        strokeLinecap='square'
        fill={fillColor}
        d='M97.573 47.957c-2.643 -0.934 -8.143 -2.877 -16.407 -11.141 -0.302 -0.303 -0.645 -0.645 -1.173 -0.645a1.125 1.125 0 0 0 -0.905 0.459c-0.364 0.497 -0.207 0.99 -0.025 1.562 0.313 0.985 0.964 3.035 -0.046 4.766 -0.657 1.127 -1.934 1.998 -3.801 2.602 -0.804 -1.132 -1.923 -1.824 -3.178 -1.824 -1.47 0 -2.752 0.949 -3.561 2.443H34.52c-1.221 -1.779 -3.268 -2.948 -5.584 -2.948a6.726 6.726 0 0 0 -3.756 1.141l-5.257 -2.728c-0.687 -0.357 -1.79 -0.625 -2.564 -0.625H1.722c-0.709 0 -1.276 0.311 -1.556 0.853s-0.204 1.184 0.207 1.762l4.344 6.11c0.079 0.11 0.079 0.404 0 0.514L0.373 56.367c-0.411 0.578 -0.486 1.22 -0.207 1.762s0.846 0.853 1.556 0.853H17.359c0.774 0 1.877 -0.269 2.564 -0.625l5.257 -2.728a6.726 6.726 0 0 0 3.756 1.141c2.316 0 4.363 -1.169 5.584 -2.948h33.956c0.809 1.494 2.091 2.443 3.561 2.443 1.255 0 2.374 -0.692 3.178 -1.825 1.867 0.604 3.144 1.475 3.801 2.602 1.01 1.732 0.359 3.781 0.046 4.766 -0.181 0.571 -0.338 1.064 0.025 1.561a1.125 1.125 0 0 0 0.903 0.459h0.003c0.528 0 0.87 -0.343 1.173 -0.645 8.482 -8.482 13.888 -10.316 16.487 -11.197 1.259 -0.427 2.347 -0.796 2.347 -1.986 0 -1.185 -1.07 -1.564 -2.426 -2.042'
      />
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(-4px 0px 3px gray)',
  } = {}) => (
    <svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      x='0px'
      y='0px'
      viewBox='0 0 100 100'
      transform='matrix(-1,0,0,1,0,0) translate(-2, -1)'
      style={{ filter: `${shadow}` }}
    >
      <path
        strokeWidth='1'
        stroke={strokeColor}
        strokeLinecap='square'
        fill={fillColor}
        d='M98.725 48.562c-0.027 -0.009 -2.716 -0.868 -5.299 -1.766 -3.496 -1.215 -12.287 -6.22 -12.376 -6.271 -0.383 -0.219 -0.707 -0.32 -1.018 -0.32 -0.469 0 -0.878 0.238 -1.092 0.637 -0.258 0.479 -0.177 1.043 0.241 1.678l0.787 1.194c-1.431 -0.778 -2.476 -1.373 -2.503 -1.388 -0.383 -0.219 -0.707 -0.321 -1.018 -0.321 -0.469 0 -0.878 0.238 -1.092 0.637 -0.258 0.479 -0.177 1.043 0.241 1.678l1.228 1.861h-42.705c-0.016 -0.012 -0.031 -0.026 -0.048 -0.038l-7.633 -5.157c-0.483 -0.326 -1.227 -0.554 -1.809 -0.554H14.149c-0.528 0 -0.997 0.232 -1.288 0.638 -0.254 0.354 -0.339 0.795 -0.244 1.234H7.736c-0.511 0 -0.957 0.248 -1.192 0.663 -0.201 0.355 -0.218 0.778 -0.055 1.168h-5.262c-0.454 0 -0.855 0.227 -1.071 0.608s-0.206 0.841 0.027 1.231l2.403 4.029L0.182 54.029c-0.233 0.39 -0.243 0.851 -0.027 1.231 0.216 0.381 0.616 0.608 1.071 0.608h5.262c-0.162 0.39 -0.146 0.813 0.055 1.168 0.236 0.415 0.681 0.663 1.192 0.663h4.881c-0.095 0.439 -0.01 0.88 0.244 1.234 0.291 0.405 0.76 0.638 1.288 0.638h10.48c0.583 0 1.326 -0.228 1.809 -0.554l7.633 -5.157c0.017 -0.011 0.032 -0.026 0.048 -0.038h42.705l-1.228 1.861c-0.418 0.634 -0.499 1.198 -0.241 1.678 0.215 0.399 0.623 0.637 1.092 0.637 0.311 0 0.635 -0.102 1.018 -0.321a163.545 163.545 0 0 1 2.504 -1.39l-0.788 1.195c-0.418 0.634 -0.499 1.198 -0.241 1.678 0.215 0.399 0.623 0.637 1.092 0.637 0.311 0 0.635 -0.102 1.018 -0.321 0.089 -0.051 8.977 -5.113 12.51 -6.335 2.548 -0.881 5.134 -1.697 5.159 -1.705 1.153 -0.363 1.279 -1.124 1.279 -1.434 0 -0.31 -0.122 -1.071 -1.275 -1.439'
      ></path>
    </svg>
  ),

  ({
    fillColor = '#000000',
    strokeColor = '#ffffff',
    shadow = 'drop-shadow(-4px 0px 3px gray)',
  } = {}) => (
    <svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      x='0px'
      y='0px'
      viewBox='0 0 100 100'
      transform='matrix(-1,0,0,1,0,0) translate(-2, -1)'
      style={{ filter: `${shadow}` }}
    >
      <path
        strokeWidth='1'
        stroke={strokeColor}
        strokeLinecap='square'
        fill={fillColor}
        d='M97.573 47.957c-2.643 -0.934 -8.143 -2.877 -16.407 -11.141 -0.302 -0.303 -0.645 -0.645 -1.173 -0.645a1.125 1.125 0 0 0 -0.905 0.459c-0.364 0.497 -0.207 0.99 -0.025 1.562 0.313 0.985 0.964 3.035 -0.046 4.766 -0.657 1.127 -1.934 1.998 -3.801 2.602 -0.804 -1.132 -1.923 -1.824 -3.178 -1.824 -1.47 0 -2.752 0.949 -3.561 2.443H34.52c-1.221 -1.779 -3.268 -2.948 -5.584 -2.948a6.726 6.726 0 0 0 -3.756 1.141l-5.257 -2.728c-0.687 -0.357 -1.79 -0.625 -2.564 -0.625H1.722c-0.709 0 -1.276 0.311 -1.556 0.853s-0.204 1.184 0.207 1.762l4.344 6.11c0.079 0.11 0.079 0.404 0 0.514L0.373 56.367c-0.411 0.578 -0.486 1.22 -0.207 1.762s0.846 0.853 1.556 0.853H17.359c0.774 0 1.877 -0.269 2.564 -0.625l5.257 -2.728a6.726 6.726 0 0 0 3.756 1.141c2.316 0 4.363 -1.169 5.584 -2.948h33.956c0.809 1.494 2.091 2.443 3.561 2.443 1.255 0 2.374 -0.692 3.178 -1.825 1.867 0.604 3.144 1.475 3.801 2.602 1.01 1.732 0.359 3.781 0.046 4.766 -0.181 0.571 -0.338 1.064 0.025 1.561a1.125 1.125 0 0 0 0.903 0.459h0.003c0.528 0 0.87 -0.343 1.173 -0.645 8.482 -8.482 13.888 -10.316 16.487 -11.197 1.259 -0.427 2.347 -0.796 2.347 -1.986 0 -1.185 -1.07 -1.564 -2.426 -2.042'
      ></path>
    </svg>
  ),
];

export default arrowSVGs;
