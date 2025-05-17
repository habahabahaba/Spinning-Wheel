// Assets:
import {
  wallpaperSVGstringFn0,
  wallpaperSVGstringFn1,
} from '../SVG/wallpaperSVGstrings';
// Utils:
import { safePaletteColor } from '../../utils/color';
// 3rd party:
// Redux, RTK:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { useMemo } from 'react';
// Context:
// Hooks:
// Components:
// CSS:
import styles from './Wallpaper.module.css';
// Types, interfaces and enumns:
import type { CSSProperties, FC } from 'react';

interface WallpaperProps {
  variant: 0 | 1;
  colorIdx0: number;
  colorIdx1?: number;
  colorIdx2?: number;
  style?: CSSProperties;
}

const Wallpaper: FC<WallpaperProps> = ({
  variant,
  colorIdx0,
  colorIdx1 = 0,
  colorIdx2 = 0,
  style = {},
}) => {
  // Store:
  const paletteIdx = useBoundStore(
    (state) => state.activeConfig.default_palette_idx
  );

  const backgroundImage = useMemo(() => {
    const svgString = (
      variant === 0 ? wallpaperSVGstringFn0 : wallpaperSVGstringFn1
    )({
      color0: safePaletteColor(paletteIdx, colorIdx0),
      color1: safePaletteColor(paletteIdx, colorIdx1),
      color2: safePaletteColor(paletteIdx, colorIdx2),
    });
    const encoded = encodeURIComponent(svgString);
    return `url("data:image/svg+xml,${encoded}")`;
  }, [variant, colorIdx0, colorIdx1, colorIdx2, paletteIdx]);

  const styleObj: CSSProperties = {
    // backgroundPosition: 'center',
    backgroundPosition: 'top left',
    // backgroundSize: 'contain',
    backgroundSize: '800px 800px',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'local',
    backgroundOrigin: 'initial',

    ...style,

    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-5',

    height: '100%',
    width: '100%',
    backgroundImage,
  };

  // JSX:
  return <div style={styleObj} className={styles.wallpaper_container}></div>;
};

export default Wallpaper;
