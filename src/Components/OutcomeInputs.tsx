// Utils:
import { isHexColor } from '../utils/color';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import Button from './Button';
import FontSelector from './FontSelector';
import deleteSVGs from './SVG/deleteSVGs';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Outcome } from '../store/types';
interface OutcomeInputsProps {
  index: number;
}

const OutcomeInputs: FC<OutcomeInputsProps> = ({ index }) => {
  // Store:
  const outcome = useBoundStore((state) => state.currentConfig.outcomes[index]);
  const outcomesLength = useBoundStore(
    (state) => state.currentConfig.outcomes.length
  );
  // Actions:
  const modifyOutcome = useBoundStore((state) => state.modifyOutcome);
  const duplicateOutcome = useBoundStore((state) => state.duplicateOutcome);
  const removeOutcome = useBoundStore((state) => state.removeOutcome);

  // Handlers:
  function handleChange<K extends keyof Outcome>(
    key: K,
    value: Outcome[K]
  ): void {
    modifyOutcome({ outcomeIdx: index, key, value });
  }

  // JSX:
  return (
    <div
      style={{
        display: 'flex',
        width: '90%',
        justifyContent: 'space-around',
        margin: '0.5rem',
        backgroundColor: 'white',
        borderRadius: '0.1rem',
      }}
    >
      <input
        id={`label-input-Outcome-${index}`}
        type='text'
        maxLength={30}
        placeholder={`Outcome ${index + 1}`}
        value={outcome.label}
        onChange={(ev) => {
          handleChange('label', ev.target.value);
        }}
        style={{
          height: '1.5rem',
          padding: '0.2rem',
          border: '1px solid',
          borderRadius: ' 0.1rem',
          minWidth: '12rem',
        }}
      />
      <input
        type='color'
        id={`fillColor-input-Outcome-${index}`}
        value={outcome.fillColor || '#eeeeee'}
        onChange={(ev) => {
          handleChange(
            'fillColor',
            isHexColor(ev.target.value) ? ev.target.value : ''
          );
        }}
        style={{
          minHeight: '2rem',
          padding: '0.15rem',
          border: '1px solid',
          borderRadius: ' 0.1rem',
          backgroundColor: 'white',
        }}
      />
      <FontSelector outcomeIdx={index} />

      <Button
        shape='rounded'
        name='duplicate'
        // outlined={true}
        onClick={(ev) => {
          ev.preventDefault();
          duplicateOutcome({ outcomeIdx: index });
        }}
        disabled={outcomesLength > 71}
      >
        <b>x2</b>
      </Button>
      <Button
        variant='danger'
        shape='rounded'
        // outlined={true}
        name='delete'
        onClick={(ev) => {
          ev.preventDefault();
          removeOutcome({ outcomeIdx: index });
        }}
        disabled={outcomesLength < 3}
      >
        {deleteSVGs[2]({ height: '1rem', color1: '#000000' })}
      </Button>
    </div>
  );
};

export default OutcomeInputs;
