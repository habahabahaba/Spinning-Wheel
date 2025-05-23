// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Store:
// Router:
// React:
// Context:
// Hooks:
// Components:
import { Select, Option } from '../UI/Select';
import SaveSlotPreview from './SaveSlotPreview';
// CSS:
import styles from './Selectors.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
interface SaveSlotSelectorProps {
  value: number;
  onChange: (value: string | number) => void;
  className?: string;
}
const SaveSlotSelector: FC<SaveSlotSelectorProps> = ({
  value,
  onChange,
  className = 'select',
}) => {
  // JSX:
  const options = Array.from({ length: 10 }, () => 0).map((_, idx) => (
    <Option value={idx} key={idx} className={styles.option}>
      <SaveSlotPreview saveIdx={idx} />
    </Option>
  ));

  return (
    <Select
      id='save-slot-select'
      placeholder='Select a save slot'
      value={value}
      aria-label='Save slot selector'
      onChange={onChange}
      className={mergeStyles(styles.selector, className)}
    >
      {options}
    </Select>
  );
};

export default SaveSlotSelector;
