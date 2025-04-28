// Assets:
// Constants:
// Utils:
// 3rd party:
// Redux, RTK:
// Store:
// Router:
// React:
// Context:
// Hooks:
// Components:
import { Select, Option } from './Select';
import SaveSlotPreview from './SaveSlotPreview';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface SaveSlotSelectorProps {
  value: number;
  onChange: (value: string | number) => void;
}
const SaveSlotSelector: FC<SaveSlotSelectorProps> = ({ value, onChange }) => {
  // JSX:
  const options = Array.from({ length: 10 }, () => 0).map((_, idx) => (
    <Option value={idx} key={idx}>
      <SaveSlotPreview saveIdx={idx} />
    </Option>
  ));

  return (
    <Select
      id='save-slot-select'
      placeholder='Select a save slot'
      value={value}
      onChange={onChange}
    >
      {options}
    </Select>
  );
};

export default SaveSlotSelector;
