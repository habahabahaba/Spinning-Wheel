// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import { useMemo } from 'react';
// Context:
// Hooks:
// Components:
import Sector from './Sector';
import Arrow from './Arrow';
// CSS:
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
import type { Outcome } from './Main';

interface WheelProps {
  radius: number;
  outcomes: Outcome[];
  fillColors: string[];
  wheelContainerRef?: Ref<HTMLDivElement>;
  wheelRef?: Ref<SVGSVGElement>;
  arrowRef?: Ref<HTMLDivElement>;
}

export interface WheelHandle {
  wheelContainerRef: Ref<HTMLDivElement>;
  wheelRef: Ref<SVGSVGElement>;
  arrowRef: Ref<HTMLDivElement>;
}

const Wheel: FC<WheelProps> = ({
  radius,
  outcomes,
  fillColors,
  wheelContainerRef,
  wheelRef,
  arrowRef,
}) => {
  // Refs:
  // const wheelContainerRef = useRef<HTMLDivElement>(null);
  // const wheelRef = useRef<SVGSVGElement>(null);
  // const arrowRef = useRef<HTMLDivElement>(null);
  // Imperative handle:
  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     wheelContainerRef,
  //     wheelRef,
  //     arrowRef,
  //   }),
  //   []
  // );

  const center = useMemo(() => ({ x: radius, y: radius }), [radius]);

  const diameter = 2 * radius;

  const anglePerSector = 360 / outcomes.length;

  // JSX:
  const sectors = useMemo(
    () =>
      outcomes.map((outcome, i) => {
        // Convert to SVG coordinate system (0° = right)
        const startAngle = i * anglePerSector + 90; // Subtract 90° to align 0° with right
        const endAngle = (i + 1) * anglePerSector + 90;
        return (
          <Sector
            key={i}
            center={center}
            radius={radius}
            startAngle={startAngle}
            endAngle={endAngle}
            label={outcome.label}
            fillColor={outcome.fillColor || fillColors[i % fillColors.length]}
          />
        );
      }),
    [fillColors, outcomes, center, radius, anglePerSector]
  );

  return (
    <div
      ref={wheelContainerRef}
      style={{
        border: 'solid 4px black',
        borderRadius: '50%',
        padding: '0',
        height: `${diameter}px`,
        position: 'relative',
        display: 'inline-block',
        // overflow: 'hidden',
      }}
    >
      <svg
        ref={wheelRef}
        style={{ zIndex: 0, position: 'relative' }}
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
      >
        {sectors}
      </svg>

      <Arrow arrowIdx={1} ref={arrowRef} />
    </div>
  );
};

export default Wheel;
