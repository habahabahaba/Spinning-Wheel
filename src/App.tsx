// Components:
import Wheel from './Components/Wheel';

const outcomes1 = createOutcomes(2, (i) => ({
  label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const outcomes2 = createOutcomes(22, (i) => ({
  label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const outcomes3 = createOutcomes(72, (i) => ({
  label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const outcomes4 = createOutcomes(7, (i) => ({
  label: `Outcome-${i + 1}-x`,
}));
const outcomes5 = createOutcomes(22, (i) => ({
  label: `Outcome-${i + 1}-01234567890123456789xxxwwwwwwwww`,
}));
const outcomes6 = createOutcomes(72, (i) => ({
  label: `Outcome-${i + 1}`,
}));

const fillColors = ['#e6b89c', '#fe938c', '#ead2ac', '#9cafb7'];
interface Outcome {
  label: string;
}

function createOutcomes(
  quantity: number,
  labelFn: (i: number) => Outcome
): Outcome[] {
  return new Array(quantity).fill(0).map((_, i) => labelFn(i));
}

function App() {
  return (
    <>
      {/* <Wheel radius={360} outcomes={outcomes1} fillColors={fillColors} /> */}

      {/* <Wheel radius={360} outcomes={outcomes2} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} outcomes={outcomes3} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} outcomes={outcomes4} fillColors={fillColors} /> */}
      {/* <Wheel radius={360} outcomes={outcomes5} fillColors={fillColors} /> */}

      <Wheel radius={360} outcomes={outcomes6} fillColors={fillColors} />
    </>
  );
}

export default App;
