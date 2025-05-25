// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Redux, RTK:
// Store:
// Router:
// React:
import { useState } from 'react';
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
interface AddOutcomesProps {
  outcomesLength: number;
  handleAddOutcomes: (
    ev: MouseEvent<HTMLButtonElement>,
    addQuantity: number
  ) => void;
}

const AddOutcomes: FC<AddOutcomesProps> = ({
  outcomesLength,
  handleAddOutcomes,
}) => {
  // Context:

  // Store:

  // Actions:

  // State:
  const [addQuantity, setAddQuantity] = useState<number>(1);
  // Refs:

  // Effects:

  // Derived values:
  const validQuantity = 72 - outcomesLength;

  // Handlers:

  // JSX:
  return (
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
        onClick={(ev) => {
          handleAddOutcomes(ev, addQuantity);
        }}
        disabled={addQuantity > validQuantity}
      >
        Add
      </Button>
    </fieldset>
  );
};

export default AddOutcomes;
