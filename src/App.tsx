// Fonts:
// import { FONT_FAMILIES_REMOTE } from './assets/FontFamilies';
// Components:
import Main from './Components/Main';
import ConfigForm from './Components/ConfigForm';

function App() {
  // console.log(
  //   FONT_FAMILIES_REMOTE.map(
  //     (f) => `@fontsource/${f.toLowerCase().replaceAll(' ', '-')}`
  //   ).join(' ')
  // );

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
