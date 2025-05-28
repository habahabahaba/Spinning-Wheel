// Constants:
import { PALETTES } from '../../constants/palettes';
// Utils:
import { contrastColor, brightness } from '../../utils/color';
import { detectFirefoxTextZoomRatio } from '../../utils/text';
import { isFirefox, detectBrowser } from '../../utils/browser';
// 3rd party:
import { useShallow } from 'zustand/shallow';
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { useMemo, memo } from 'react';
// Context:
// Hooks:
// Components:
import Sector from './Sector';
// CSS:
// Types, interfaces and enumns:
import type { FC, Ref } from 'react';
// import type { WheelAnimationState } from '../../store/types';

interface WheelProps {
  radius: number;
  wheelRef?: Ref<SVGSVGElement>;
  wheelContainerRef?: Ref<HTMLDivElement>;
}

export interface WheelHandle {
  wheelContainerRef: Ref<HTMLDivElement>;
  wheelRef: Ref<SVGSVGElement>;
  arrowRef: Ref<HTMLDivElement>;
}

const Wheel: FC<WheelProps> = ({ radius, wheelContainerRef, wheelRef }) => {
  // Store:
  const outcomes = useBoundStore(
    useShallow((state) => state.activeConfig.outcomes)
  );
  const default_palette_idx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );
  const default_fontFamily = useBoundStore(
    (state) => state.activeConfig.default_fontFamily
  );
  const winningOutcomeIdx = useBoundStore((state) => state.winningOutcomeIdx);

  // console.log('[Wheel] : ');
  // console.log('firefoxScale: ', firefoxScale);
  const fillColors = PALETTES[default_palette_idx];
  const fontFamily = default_fontFamily;

  const center = useMemo(() => ({ x: radius, y: radius }), [radius]);

  const textScale = isFirefox ? detectFirefoxTextZoomRatio() : 1;
  // Derived values;
  const diameter = 2 * radius;
  const anglePerSector = 360 / outcomes.length;

  const browser = useMemo(() => detectBrowser(), []);

  // JSX:
  const sectors = useMemo(
    () =>
      outcomes.map((outcome, i) => {
        // Convert to SVG coordinate system (0° = right)
        const startAngle = i * anglePerSector + 90; // Subtract 90° to align 0° with right
        const endAngle = (i + 1) * anglePerSector + 90;

        const isHighlighted = winningOutcomeIdx === i;
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
            browser={browser}
            textColor={textColor}
            textScale={textScale}
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
      textScale,
      winningOutcomeIdx,
      browser,
    ]
  );

  return (
    <div
      ref={wheelContainerRef}
      style={{
        border: `solid 6px ${fillColors[1 % fillColors.length]}`,
        borderRadius: '50%',
        padding: '0',
        height: `${diameter}px`,
        position: 'relative',
        overflow: 'hidden',
        pointerEvents: 'none',
        touchAction: 'none',
        userSelect: 'none',
        willChange: 'transform',
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

export default memo(Wheel);
