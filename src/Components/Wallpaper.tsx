// Assets:
import { PALETTES } from '../constants/palettes';
import wallpaperSVGstrings from './SVG/wallpaperSVGstrings';
// Utils:
// 3rd party:
// Redux, RTK:
// Store:
import useBoundStore from '../store/boundStore';
// Router:
// React:
import { useMemo } from 'react';
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { CSSProperties, FC } from 'react';

interface WallpaperProps {
  variant: number;
  paletteColor1: number;
  paletteColor2?: number;
  paletteColor3?: number;
  style?: CSSProperties;
}

const Wallpaper: FC<WallpaperProps> = ({
  variant,
  paletteColor1,
  paletteColor2 = 0,
  paletteColor3 = 0,
  style = {},
}) => {
  // Store:
  const paletteIdx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );
  const colors = PALETTES[paletteIdx];

  const backgroundImage = useMemo(() => {
    const svgString = (wallpaperSVGstrings[variant] || wallpaperSVGstrings[0])({
      color1: colors[paletteColor1 || 0],
      color2: colors[paletteColor2 || 0],
      color3: colors[paletteColor3 || 0],
    });
    const encoded = encodeURIComponent(svgString);
    return `url("data:image/svg+xml,${encoded}")`;
  }, [variant, paletteColor1, paletteColor2, paletteColor3, colors]);

  const styleObj: CSSProperties = {
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    backgroundOrigin: 'initial',

    ...style,

    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-5',

    height: '100%',
    width: '100%',
    backgroundImage,
  };

  // JSX:
  return <div style={styleObj}></div>;
};

export default Wallpaper;
