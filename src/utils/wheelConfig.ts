import { OutcomeModel } from '../store/types';
// Types, interfaces and enumns:
import type { Outcome } from '../Components/Main';

export function createOutcomes(
  quantity: number,
  labelFn: (i: number) => string
): Outcome[] {
  return new Array(quantity)
    .fill(0)
    .map(
      (_, i) =>
        new OutcomeModel({ label: labelFn(i), fillColor: '', fontFamily: '' })
    );
}
