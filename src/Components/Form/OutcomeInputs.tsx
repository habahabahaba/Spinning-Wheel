// Utils:
import { isHexColor } from '../../utils/color';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import FontSelector from '../Selectors/FontSelector';
import deleteSVGs from '../SVG/deleteSVGs';
// CSS:
import styles from './OutcomeInputs.module.css';
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
    (state) => state.currentConfig.outcomes.length
  );
  // Actions:
  const modifyOutcome = useBoundStore((state) => state.modifyOutcome);
  const duplicateOutcome = useBoundStore((state) => state.duplicateOutcome);
  const removeOutcome = useBoundStore((state) => state.removeOutcome);

  // Handlers:
  function handleChange<K extends keyof Omit<Outcome, 'id'>>(
    key: K,
    value: Outcome[K]
  ): void {
    modifyOutcome({ outcomeIdx: index, key, value });
  }

  // JSX:
  return (
    <div className={styles.outcome_inputs}>
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
      <input
        type='color'
        id={`fillColor-input-Outcome-${index}`}
        value={outcome.fillColor || '#f1f5f9'}
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
        name='duplicate line'
        variant='success'
        shape='rounded'
        // outlined={true}
        onClick={(ev) => {
          ev.preventDefault();
          duplicateOutcome({ outcomeIdx: index });
        }}
        disabled={outcomesLength > 71}
        className={styles.outcome_duplicate_button}
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
      >
        {deleteSVGs[2]({ height: '1rem', color0: '#000000' })}
      </Button>
    </div>
  );
};

export default OutcomeInputs;
