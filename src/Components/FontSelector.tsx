// Constants:
import { AllFontNames, FONT_FAMILIES_ALL } from '../constants/fontFamilies';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import FontPreview from './FontPreview';
import { Select, Option } from './Select';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
// import type { WheelConfigsActions } from '../store/types';
interface FontSelectorProps {
  outcomeIdx: number;
}

const FontSelector: FC<FontSelectorProps> = ({ outcomeIdx }) => {
  // Store:
  const outcomesLength = useBoundStore(
    (state) => state.currentConfig.outcomes.length
  );

  const forOutcome = outcomeIdx >= 0 && outcomeIdx < outcomesLength;

  const currentFont = useBoundStore((state) =>
    forOutcome
      ? state.currentConfig.outcomes[outcomeIdx].fontFamily
      : state.currentConfig.default_fontFamily
  );

  // Actions:
  const modifyOutcome = useBoundStore((state) => state.modifyOutcome);
  const setDefaultFontFamily = useBoundStore(
    (state) => state.setDefaultFontFamily
  );

  // JSX:
  const options = FONT_FAMILIES_ALL.map((font, idx) => (
    <Option value={font} key={idx}>
      <FontPreview fontFamily={font} />
    </Option>
  ));

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

  return (
    <Select
      id='font-select'
      placeholder='Select font'
      value={currentFont}
      onChange={
        forOutcome ? outcomeFontChangeHandler : defaultFontChangeHandler
      }
    >
      {forOutcome ? (
        <Option value={''}>
          <span style={{ fontStyle: 'italic', color: 'gray' }}>
            Default font
          </span>
        </Option>
      ) : null}
      {options}
    </Select>
  );
};

export default FontSelector;
