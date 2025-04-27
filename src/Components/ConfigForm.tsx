// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
import { useState } from 'react';
// Context:
// Hooks:
// Components:
import OutcomeInputs from './OutcomeInputs';
import PaletteSelector from './PaletteSelector';
// CSS:
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
// interface ConfigFormProps {}

const ConfigForm: FC = () => {
  // Store:
  const outcomesLength = useBoundStore(
    (state) => state.currentConfig.outcomes.length
  );
  const possibleQuantity = 72 - outcomesLength;

  // Actions:
  const addBlankOutcomes = useBoundStore((state) => state.addBlankOutcomes);
  const resetConfig = useBoundStore((state) => state.resetCurrentConfig);
  const applyConfig = useBoundStore((state) => state.applyConfig);

  // State:
  const [addQuantity, setAddQuantity] = useState<number>(1);

  // Handlers
  function handleAddOutcomes(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if (outcomesLength > 71) return;
    const quantity = Math.max(1, Math.min(possibleQuantity, addQuantity));

    addBlankOutcomes({ quantity });
  }

  function handleResetConfig(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    resetConfig();
  }

  function handleApplyConfig(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    applyConfig();
  }

  // JSX:
  const outcomes = Array.from({ length: outcomesLength }, () => null).map(
    (_, idx) => <OutcomeInputs index={idx} key={idx} />
  );

  return (
    <form>
      <div>
        <PaletteSelector />
      </div>
      {outcomes}
      <div>
        <input
          style={{ width: '2rem' }}
          type='number'
          min={1}
          max={possibleQuantity}
          step={1}
          value={addQuantity}
          onChange={(ev) => {
            setAddQuantity(+ev.target.value);
          }}
        />
        <button
          onClick={handleAddOutcomes}
          disabled={addQuantity > possibleQuantity}
        >
          Add
        </button>
        <button onClick={handleResetConfig}>Reset</button>
        <button onClick={handleApplyConfig}>Apply</button>
      </div>
    </form>
  );
};

export default ConfigForm;
