// Constants:
import { PALETTES } from '../constants/palettes';
// Utils:
import { contrastColor, brightness } from '../utils/color';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
import { useMemo } from 'react';
// Context:
// Hooks:
// Components:
import Sector from './Sector';
// CSS:
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
import type { WheelAnimationState } from '../store/types';

interface WheelProps {
  radius: number;
  wheelAnimationState: WheelAnimationState;
  wheelRef?: Ref<SVGSVGElement>;
  wheelContainerRef?: Ref<HTMLDivElement>;
}

export interface WheelHandle {
  wheelContainerRef: Ref<HTMLDivElement>;
  wheelRef: Ref<SVGSVGElement>;
  arrowRef: Ref<HTMLDivElement>;
}

const Wheel: FC<WheelProps> = ({
  radius,
  wheelAnimationState,
  wheelContainerRef,
  wheelRef,
}) => {
  // Store:
  const outcomes = useBoundStore((state) => state.activeConfig.outcomes);
  const default_palette_idx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );
  const default_fontFamily = useBoundStore(
    (state) => state.activeConfig.default_fontFamily
  );
  const winningOutcomeIdx = useBoundStore((state) => state.winningOutcomeIdx);

  const fillColors = PALETTES[default_palette_idx];
  const fontFamily = default_fontFamily;

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

        const isHighlighted =
          wheelAnimationState === 'idle' && winningOutcomeIdx === i;
        const fillColor =
          outcome.fillColor || fillColors[i % fillColors.length];
        const textColor = contrastColor(
          !isHighlighted ? fillColor : brightness(fillColor, 1.4)
        );

        return (
          <Sector
            key={i}
            center={center}
            radius={radius}
            startAngle={startAngle}
            endAngle={endAngle}
            label={outcome.label}
            fillColor={fillColor}
            fontFamily={outcome.fontFamily || fontFamily}
            textColor={textColor}
            isHighlighted={isHighlighted}
          />
        );
      }),
    [
      fillColors,
      fontFamily,
      outcomes,
      center,
      radius,
      anglePerSector,
      winningOutcomeIdx,
      wheelAnimationState,
    ]
  );

  return (
    <div
      ref={wheelContainerRef}
      style={{
        border: `solid 6px ${fillColors[1]}`,
        borderRadius: '50%',
        padding: '0',
        height: `${diameter}px`,
        position: 'relative',
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
    </div>
  );
};

export default Wheel;
