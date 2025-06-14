// Constants:
import { OUTCOMES_MAX_LENGTH } from '../../utils/wheelConfig';
// Utils:
import { isHexColor } from '../../utils/color';
import { mergeStyles } from '../../utils/css';
// 3rd party:
import { useShallow } from 'zustand/shallow';

// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
import { useRef, useImperativeHandle } from 'react';
// Context:
// Hooks:
// Components:
import Button from '../UI/Button';
import FontSelector from '../Selectors/FontSelector';
import deleteSVG from '../SVG/deleteSVGs';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC, KeyboardEvent, MouseEvent, Ref } from 'react';
import type { Outcome } from '../../store/types';
interface OutcomeInputsProps {
  index: number;
  focusInput: (index: number, addInput?: boolean) => void;
  ref?: Ref<OutcomeInputsHandle>;
}
export type OutcomeInputsHandle = {
  handleFocusSelect: () => void;
};

const OutcomeInputs: FC<OutcomeInputsProps> = ({ index, focusInput, ref }) => {
  // Store:
  const outcome = useBoundStore(
    useShallow((state) => state.currentConfig.outcomes[index])
  );
  const outcomesLength = useBoundStore(
    useShallow((state) => state.currentConfig.outcomes.length)
  );
  // console.log(`[OutcomeInputs] index: ${index}`);
  // Actions:
  const modifyOutcome = useBoundStore((state) => state.modifyOutcome);
  const duplicateOutcome = useBoundStore((state) => state.duplicateOutcome);
  const removeOutcome = useBoundStore((state) => state.removeOutcome);

  // Refs:
  const labelInputRef = useRef<HTMLInputElement>(null);
  function handleFocusSelect() {
    const label = labelInputRef.current;
    if (!label) return;
    label.focus();
    requestAnimationFrame(() => {
      label?.select();
    });
  }

  // Imperative handle:
  useImperativeHandle(ref, () => ({
    handleFocusSelect,
  }));

  // Effects:

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
  function handleDuplicate(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    duplicateOutcome({ outcomeIdx: index });
    focusInput(-1);
  }
  function handleDelete(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    removeOutcome({ outcomeIdx: index });
    focusInput(-1);
  }
  function handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      focusInput(index + 1, true);
    } else if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      focusInput(index + 1, false);
    } else if (ev.key === 'ArrowUp' && index > 0) {
      ev.preventDefault();
      focusInput(index - 1, false);
    }
  }

  // JSX:
  return (
    <fieldset
      className={mergeStyles(styles.outcome_inputs, 'bottom-right-shadow')}
    >
      <legend className='sr-only'>Outcome {index + 1}</legend>

      <label htmlFor={`label-input-Outcome-${index}`} className='sr-only'>
        Sector label (press ENTER or DOWN to jump to the next outcome)
      </label>
      <input
        ref={labelInputRef}
        title='press ENTER or DOWN to jump to the next outcome'
        id={`label-input-Outcome-${index}`}
        type='text'
        maxLength={30}
        placeholder={`Outcome ${index + 1}`}
        value={outcome.label}
        onChange={(ev) => {
          handleChange('label', ev.target.value);
        }}
        onKeyDown={handleKeyDown}
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
        onClick={handleDuplicate}
        disabled={outcomesLength >= OUTCOMES_MAX_LENGTH}
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
        onClick={handleDelete}
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
