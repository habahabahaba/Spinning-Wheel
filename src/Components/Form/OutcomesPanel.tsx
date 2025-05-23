// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
import { useShallow } from 'zustand/shallow';
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { useState } from 'react';
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import OutcomeInputs from './OutcomeInputs';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
// interface OutcomesPanelProps {}

const OutcomesPanel: FC = () => {
  // Context:

  // Store:
  const outcomesLength = useBoundStore(
    useShallow((state) => state.currentConfig.outcomes.length)
  );
  const outcomeIds = useBoundStore(
    useShallow((state) => state.currentConfig.outcomes.map(({ id }) => id))
  );

  // Actions:
  const addBlankOutcomes = useBoundStore((state) => state.addBlankOutcomes);
  // State:
  const [addQuantity, setAddQuantity] = useState<number>(1);
  // Refs:

  // Effects:
  //   console.log(`[OutcomesPanel] rendered`);

  // Derived values:
  const validQuantity = 72 - outcomesLength;
  // Handlers:
  function handleAddOutcomes(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if (outcomesLength > 71) return;
    const quantity = Math.max(1, Math.min(validQuantity, addQuantity));

    addBlankOutcomes({ quantity });
  }

  // JSX:
  const outcomesList = outcomeIds.map((id, idx) => (
    <OutcomeInputs index={idx} key={id} />
  ));

  return (
    <div className={styles.outcomes_panel}>
      <fieldset className={styles.outcomes_list}>
        <legend className='sr-only'>Outcomes controls</legend>
        {outcomesList}
      </fieldset>

      <fieldset
        className={mergeStyles(
          styles.buttons_container,
          styles.add_outcomes_container
        )}
      >
        <legend className='sr-only'>Add blank outcomes</legend>
        <label htmlFor='add-outcomes-quantity' className='sr-only'>
          Number of outcomes to add
        </label>
        <input
          id='add-outcomes-quantity'
          className={styles.add_outcomes_number_input}
          type='number'
          min={1}
          max={validQuantity}
          step={1}
          value={addQuantity}
          onChange={(ev) => {
            setAddQuantity(+ev.target.value);
          }}
        />
        <Button
          variant='success'
          shape='rounded'
          // outlined
          onClick={handleAddOutcomes}
          disabled={addQuantity > validQuantity}
        >
          Add
        </Button>
      </fieldset>
    </div>
  );
};

export default OutcomesPanel;
