// Utils:
import { mergeStyles } from '../../utils/css';
// Constants:
import { AllFontNames, FONT_FAMILIES_ALL } from '../../constants/fonts';
// 3rd party:
import { useShallow } from 'zustand/shallow';
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import FontPreview from './FontPreview';
import { Select, Option } from '../UI/Select';
// CSS:
import styles from './Selectors.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
// import type { WheelConfigsActions } from '../store/types';
interface FontSelectorProps {
  outcomeIdx: number;
  className?: string;
}

const FontSelector: FC<FontSelectorProps> = ({
  outcomeIdx,
  className = '',
}) => {
  // Store:
  const outcomesLength = useBoundStore(
    useShallow((state) => state.currentConfig.outcomes.length)
  );

  // Actions:
  const modifyOutcome = useBoundStore((state) => state.modifyOutcome);
  const setDefaultFontFamily = useBoundStore(
    (state) => state.setDefaultFontFamily
  );

  // Derived values:
  const forOutcome = outcomeIdx >= 0 && outcomeIdx < outcomesLength;

  const currentFont = useBoundStore((state) =>
    forOutcome
      ? state.currentConfig.outcomes[outcomeIdx].fontFamily
      : state.currentConfig.default_fontFamily
  );
  const selectId = forOutcome
    ? `Outcome-${outcomeIdx}-font-select`
    : 'wheel-main-font-select';
  const ariaLabel = forOutcome
    ? `Select a font for the Outcome-${outcomeIdx}`
    : 'Select a  main font for the wheel';

  // Handlers:
  function outcomeFontChangeHandler(value: string | number): void {
    modifyOutcome({
      outcomeIdx,
      key: 'fontFamily',
      value: value.toString() as AllFontNames,
    });
  }
  function defaultFontChangeHandler(value: string | number): void {
    setDefaultFontFamily({ fontFamily: value.toString() as AllFontNames });
  }

  // JSX:
  const options = FONT_FAMILIES_ALL.map((font, idx) => (
    <Option value={font} key={idx} className={styles.option}>
      <FontPreview fontFamily={font} />
    </Option>
  ));

  return (
    <Select
      id={selectId}
      placeholder='Select font'
      value={currentFont}
      aria-label={ariaLabel}
      onChange={
        forOutcome ? outcomeFontChangeHandler : defaultFontChangeHandler
      }
      className={mergeStyles(className, styles.selector)}
    >
      {forOutcome ? (
        <Option value={''} className={styles.option}>
          <span className={styles.greyed_out}>Default font</span>
        </Option>
      ) : null}
      {options}
    </Select>
  );
};

export default FontSelector;
