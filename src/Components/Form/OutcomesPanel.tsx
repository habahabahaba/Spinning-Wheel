// Assets:
// Constants:
import { OUTCOMES_MAX_LENGTH } from '../../utils/wheelConfig';
// Utils:
// 3rd party:
import { useShallow } from 'zustand/shallow';
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { useRef, useEffect } from 'react';
// Context:
// Hooks:
// Components:
import OutcomeInputs from './OutcomeInputs';
import AddOutcomes from './AddOutcomes';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
import type { OutcomeInputsHandle } from './OutcomeInputs';
// interface OutcomesPanelProps {}

let focusTimer: number;
let scrollTimer: number;

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

  // Refs:
  const outcomesContainerRef = useRef<HTMLFieldSetElement>(null);
  const scrollTopRef = useRef<number>(0);
  const outcomeHandleRefs = useRef<(OutcomeInputsHandle | null)[]>([]);

  // Effects:
  // Fixing Chrome scroll-related bug:
  useEffect(() => {
    const container = outcomesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      scrollTopRef.current = container.scrollTop;
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    requestAnimationFrame(() => {
      const container = outcomesContainerRef.current;
      const scrollPosition = scrollTopRef.current;

      if (container && scrollPosition) {
        container.scrollTop = scrollPosition;
      }
    });
  }, [outcomesLength]);

  // Derived values:
  const validQuantity = OUTCOMES_MAX_LENGTH - outcomesLength;

  // Handlers:
  function delayedScrollDown(delayMs = 5) {
    const container = outcomesContainerRef.current;
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(() => {
      requestAnimationFrame(() => {
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    }, delayMs);
  }

  function handleAddOutcomes(
    ev: MouseEvent<HTMLButtonElement>,
    addQuantity: number
  ) {
    ev.preventDefault();
    if (outcomesLength >= OUTCOMES_MAX_LENGTH) return;
    const quantity = Math.max(1, Math.min(validQuantity, addQuantity));

    addBlankOutcomes({ quantity });
    delayedScrollDown();
  }
  function handleFocusInput(index: number, addInput = false) {
    if (index >= OUTCOMES_MAX_LENGTH) return;
    if (index < outcomesLength) {
      outcomeHandleRefs.current[index]?.handleFocusSelect();
    } else if (outcomesLength < OUTCOMES_MAX_LENGTH) {
      if (focusTimer) clearTimeout(focusTimer);

      if (addInput) {
        addBlankOutcomes({ quantity: 1 });
      }
      focusTimer = setTimeout(() => {
        outcomeHandleRefs.current[index]?.handleFocusSelect();
      }, 195);
    }
  }
  // if (import.meta.env.DEV) {
  //   console.log(`[OutcomesPanel] focusTimer: ${focusTimer}`);
  // }
  // JSX:
  const outcomesList = outcomeIds.map((id, idx) => (
    <OutcomeInputs
      ref={(ref) => {
        outcomeHandleRefs.current[idx] = ref;
      }}
      index={idx}
      key={id}
      focusInput={handleFocusInput}
    />
  ));

  return (
    <div className={styles.outcomes_panel}>
      <fieldset ref={outcomesContainerRef} className={styles.outcomes_list}>
        <legend className='sr-only'>Outcomes controls</legend>
        {outcomesList}
      </fieldset>

      <AddOutcomes
        validQuantity={validQuantity}
        handleAddOutcomes={handleAddOutcomes}
      />
    </div>
  );
};

export default OutcomesPanel;
