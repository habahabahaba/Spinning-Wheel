// Utils:
import { isHexColor } from '../utils/color';
// 3rd party:
// Store:
import useWheelStore from '../store/wheelStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Outcome } from '../store/types';
interface OutcomeInputsProps {
  index: number;
}

const OutcomeInputs: FC<OutcomeInputsProps> = ({ index }) => {
  // Store:
  const outcome = useWheelStore((state) => state.currentConfig.outcomes[index]);
  const outcomesLength = useWheelStore(
    (state) => state.currentConfig.outcomes.length
  );
  // Actions:
  const modifyOutcome = useWheelStore((state) => state.modifyOutcome);
  const duplicateOutcome = useWheelStore((state) => state.duplicateOutcome);
  const removeOutcome = useWheelStore((state) => state.removeOutcome);

  // Handlers:
  function handleChange<K extends keyof Outcome>(
    key: K,
    value: Outcome[K]
  ): void {
    modifyOutcome({ outcomeIdx: index, key, value });
  }

  // JSX:
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <input
          id={`label-input-Outcome-${index}`}
          type='text'
          maxLength={25}
          placeholder={`Outcome ${index + 1}`}
          value={outcome.label}
          onChange={(ev) => {
            handleChange('label', ev.target.value);
          }}
        />
        <input
          type='color'
          id={`fillColor-input-Outcome-${index}`}
          value={outcome.fillColor || '#ffffff'}
          onChange={(ev) => {
            handleChange(
              'fillColor',
              isHexColor(ev.target.value) ? ev.target.value : ''
            );
          }}
        />
      </div>
      <button
        name='duplicate'
        onClick={(ev) => {
          ev.preventDefault();
          duplicateOutcome({ outcomeIdx: index });
        }}
        disabled={outcomesLength > 71}
      >
        x2
      </button>
      <button
        name='delete'
        onClick={(ev) => {
          ev.preventDefault();
          removeOutcome({ outcomeIdx: index });
        }}
        disabled={outcomesLength < 3}
      >
        Delete
      </button>
    </div>
  );
};

export default OutcomeInputs;
