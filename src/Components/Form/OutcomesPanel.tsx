// Assets:
// Constants:
// Utils:
// 3rd party:
import { useShallow } from 'zustand/shallow';
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
import { useState, useRef, useEffect } from 'react';
// Context:
// Hooks:
// Components:
import OutcomeInputs from './OutcomeInputs';
import AddOutcomes from './AddOutcomes';
// CSS:
import styles from './ConfigForm.module.css';
// Types, interfaces and enumns:
import type { FC, MouseEvent } from 'react';
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
  const [focusIdx, setFocusIdx] = useState<number>(0);
  // Refs:
  const outcomesContainerRef = useRef<HTMLFieldSetElement>(null);
  const scrollTopRef = useRef<number>(0);
  function delayedScrollDown(delayMs = 10) {
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
  const validQuantity = 72 - outcomesLength;

  // Handlers:
  function handleAddOutcomes(
    ev: MouseEvent<HTMLButtonElement>,
    addQuantity: number
  ) {
    ev.preventDefault();
    if (outcomesLength > 71) return;
    const quantity = Math.max(1, Math.min(validQuantity, addQuantity));

    addBlankOutcomes({ quantity });
    delayedScrollDown();
  }
  function handleFocusInput(index: number, addInput = false) {
    if (index > 71) return;
    if (index < outcomesLength) {
      setFocusIdx(() => index);
    } else if (outcomesLength < 72) {
      if (focusTimer) clearTimeout(focusTimer);

      if (addInput) {
        addBlankOutcomes({ quantity: 1 });
      }
      focusTimer = setTimeout(() => {
        setFocusIdx(() => index);
        // delayedScrollDown();
      }, 195);
    }
  }
  if (import.meta.env.DEV) {
    console.log(`[OutcomesPanel] focusTimer: ${focusTimer}`);
  }
  // JSX:
  const outcomesList = outcomeIds.map((id, idx) => (
    <OutcomeInputs
      index={idx}
      key={id}
      isFocused={idx === focusIdx}
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
        outcomesLength={outcomesLength}
        handleAddOutcomes={handleAddOutcomes}
      />
    </div>
  );
};

export default OutcomesPanel;
