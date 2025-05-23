// Utils:
import { isHexColor } from '../../utils/color';
import { mergeStyles } from '../../utils/css';
// 3rd party:
import { useShallow } from 'zustand/shallow';

// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import FontSelector from '../Selectors/FontSelector';
import deleteSVG from '../SVG/deleteSVGs';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Outcome } from '../../store/types';
interface OutcomeInputsProps {
  index: number;
}

const OutcomeInputs: FC<OutcomeInputsProps> = ({ index }) => {
  // Store:
  const outcome = useBoundStore((state) => state.currentConfig.outcomes[index]);
  const outcomesLength = useBoundStore(
    useShallow((state) => state.currentConfig.outcomes.length)
  );
  // Actions:
  const modifyOutcome = useBoundStore((state) => state.modifyOutcome);
  const duplicateOutcome = useBoundStore((state) => state.duplicateOutcome);
  const removeOutcome = useBoundStore((state) => state.removeOutcome);

  // Derived values:
  // For color input default value:
  const colorValue = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? '#334155'
    : '#e2e8f0';

  // Handlers:
  function handleChange<K extends keyof Omit<Outcome, 'id'>>(
    key: K,
    value: Outcome[K]
  ): void {
    modifyOutcome({ outcomeIdx: index, key, value });
  }

  // JSX:
  return (
    <fieldset
      className={mergeStyles(styles.outcome_inputs, 'bottom-right-shadow')}
    >
      <legend className='sr-only'>Outcome {index + 1}</legend>

      <label htmlFor={`label-input-Outcome-${index}`} className='sr-only'>
        Label
      </label>
      <input
        id={`label-input-Outcome-${index}`}
        type='text'
        maxLength={30}
        placeholder={`Outcome ${index + 1}`}
        value={outcome.label}
        onChange={(ev) => {
          handleChange('label', ev.target.value);
        }}
        className={styles.outcome_label_input}
      />

      <label htmlFor={`fillColor-input-Outcome-${index}`} className='sr-only'>
        Sector color
      </label>
      <input
        type='color'
        id={`fillColor-input-Outcome-${index}`}
        value={outcome.fillColor || colorValue}
        onChange={(ev) => {
          handleChange(
            'fillColor',
            isHexColor(ev.target.value) ? ev.target.value : ''
          );
        }}
        className={styles.outcome_color_input}
      />

      <FontSelector outcomeIdx={index} className={styles.outcome_font_select} />

      <Button
        id={`duplicate-outcome-${index}-button`}
        name='duplicate outcome'
        variant='success'
        shape='rounded'
        // outlined={true}
        onClick={(ev) => {
          ev.preventDefault();
          duplicateOutcome({ outcomeIdx: index });
        }}
        disabled={outcomesLength > 71}
        className={styles.outcome_duplicate_button}
        aria-label={`Duplicate Outcome ${index + 1}`}
      >
        <b>x2</b>
      </Button>
      <Button
        id={`delete-outcome-${index}-button`}
        name='delete line'
        variant='danger'
        shape='rounded'
        // outlined={true}
        onClick={(ev) => {
          ev.preventDefault();
          removeOutcome({ outcomeIdx: index });
        }}
        disabled={outcomesLength < 3}
        className={styles.outcome_delete_button}
        aria-label={`Delete Outcome ${index + 1}`}
      >
        {deleteSVG({ color0: '#000000' })}
      </Button>
    </fieldset>
  );
};

export default OutcomeInputs;
