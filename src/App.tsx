// Constants:
// Fonts:
import { FONT_IMPORTS } from './constants/fontFamilies';
// Store:
import useBoundStore from './store/boundStore';
// React:
import { useEffect } from 'react';
// Components:
import Main from './Components/Main';
import ConfigForm from './Components/ConfigForm';
// Types, interfaces and enumns:
import type { RemoteFontNames } from './constants/fontFamilies';

function App() {
  // Actions:
  const markLoadedFont = useBoundStore((state) => state.markLoadedFont);
  // const checkFont = useBoundStore((state) => state.checkFont);

  // Loading additional fonts:
  useEffect(() => {
    Object.entries(FONT_IMPORTS).forEach(async function loadRemoteFonts([
      font,
      loader,
    ]) {
      try {
        await loader();
        await document.fonts.load(`600 1em "${font}"`);
        if (document.fonts.check(`600 1em "${font}"`)) {
          markLoadedFont(font as RemoteFontNames);
          // console.log(
          //   `[loadRemoteFonts]: injected font ${font}: ${checkFont(
          //     font as RemoteFontNames
          //   )}`
          // );
        }
      } catch (err) {
        console.error(`Failed to load font: ${font}`, err);
      }
    });
  }, [markLoadedFont]);

  return (
    <>
      {/* <Wheel radius={360} outcomes={outcomes1} fillColors={fillColors} /> */}

      {/* <Wheel radius={360} outcomes={outcomes2} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} outcomes={outcomes3} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} outcomes={outcomes4} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} outcomes={outcomes5} fillColors={fillColors} /> */}
      <Main />
      <ConfigForm />
    </>
  );
}

export default App;
