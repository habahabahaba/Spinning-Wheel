// Components:
import Wheel from './Components/Wheel';

const options1 = createOptions(2, (i) => ({
  label: `Option-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const options2 = createOptions(22, (i) => ({
  label: `Option-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const options3 = createOptions(72, (i) => ({
  label: `Option-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const options4 = createOptions(7, (i) => ({
  label: `Option-${i + 1}-x`,
}));
const options5 = createOptions(22, (i) => ({
  label: `Option-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const options6 = createOptions(72, (i) => ({
  label: `Option-${i + 1}-`,
}));

const fillColors = ['#e6b89c', '#fe938c', '#ead2ac', '#9cafb7'];
interface Option {
  label: string;
}

function createOptions(
  quantity: number,
  labelFn: (i: number) => Option
): Option[] {
  return new Array(quantity).fill(0).map((_, i) => labelFn(i));
}

function App() {
  return (
    <>
      {/* <Wheel radius={360} options={options1} fillColors={fillColors} /> */}

      {/* <Wheel radius={360} options={options2} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} options={options3} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} options={options4} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} options={options5} fillColors={fillColors} /> */}

      <Wheel radius={360} options={options6} fillColors={fillColors} />
    </>
  );
}

export default App;
