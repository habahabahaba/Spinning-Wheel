// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
interface ArrowProps {
  arrowIdx?: number;
  ref?: Ref<HTMLDivElement>;
}

const arrowSVGs = [
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='70'
    height='45'
    viewBox='0 0 24 15'
  >
    <g transform='rotate(180 11.914 7.3845)'>
      <path d='m13.616 2.828 2.585 2.586H0v4h16.143l-2.527 2.526 2.828 2.829 7.384-7.384L16.444 0l-2.828 2.828z' />
    </g>
  </svg>,

  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='100'
    height='100'
    // transform='translate(15, 0)'
    viewBox='0 0 15 24'
  >
    <path transform='rotate(225 12 12)' d='M3,10.714,21,3,13.286,21,12,12Z' />
  </svg>,

  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    width='100'
    height='100'
    transform='translate(10, 0)'
    viewBox='0 200 400 400'
  >
    <g
      strokeWidth='63'
      stroke='hsl(0, 0%, 0%)'
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
    <defs>
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
          fill='hsl(0, 0%, 0%)'
        ></polygon>
      </marker>
    </defs>
  </svg>,

  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    width='100'
    height='100'
    transform='translate(16, 0)'
    viewBox='0 300 700 240'
  >
    <g
      strokeWidth='111'
      stroke='hsl(0, 0%, 0%)'
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
    <defs>
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
          fill='hsl(0, 0%, 0%)'
        ></polygon>
      </marker>
    </defs>
  </svg>,

  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    width='80'
    height='80'
    viewBox='0 250 520 330'
    transform='translate(5, 0)'
  >
    <g
      strokeWidth='87'
      stroke='hsl(0, 0%, 0%)'
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
      ></line>
    </g>
    <defs>
      <marker
        markerWidth='4.5'
        markerHeight='4.5'
        refX='2.25'
        refY='2.25'
        viewBox='0 0 4.5 4.5'
        orient='auto'
        id='SvgjsMarker3689'
      >
        <polygon
          points='1.5,4.5 0,2.25 1.5,0 4.5,2.25'
          fill='hsl(0, 0%, 0%)'
        ></polygon>
      </marker>
    </defs>
  </svg>,

  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    width='80'
    height='80'
    viewBox='0 250 520 330'
    transform='translate(5, 0)'
  >
    <g
      strokeWidth='89'
      stroke='hsl(0, 0%, 0%)'
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
      ></line>
    </g>
    <defs>
      <marker
        markerWidth='4.5'
        markerHeight='4.5'
        refX='2.25'
        refY='2.25'
        viewBox='0 0 4.5 4.5'
        orient='auto'
        id='SvgjsMarker3780'
      >
        <polygon
          points='0.9,4.5 0,2.25 0.9,0 4.5,2.25'
          fill='hsl(0, 0%, 0%)'
        ></polygon>
      </marker>
    </defs>
  </svg>,
];

const Arrow: FC<ArrowProps> = ({ arrowIdx = 0, ref }) => {
  // JSX:
  return (
    <div
      style={{
        position: 'absolute',
        right: '-5%',
        top: '51%',
        transform: 'translate(50%, -50%)',
      }}
      ref={ref}
    >
      {arrowSVGs[arrowIdx] || arrowSVGs[0]}
    </div>
  );
};

export default Arrow;
