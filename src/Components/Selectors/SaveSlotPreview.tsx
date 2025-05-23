// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../../utils/css';
// 3rd party:
// Redux, RTK:
// Store:
import useBoundStore from '../../store/boundStore';
// Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
import styles from './Selectors.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
interface SaveSlotPreviewProps {
  saveIdx: number;
}

const SaveSlotPreview: FC<SaveSlotPreviewProps> = ({ saveIdx }) => {
  // Store:
  const saveSlot = useBoundStore((state) => state.savedConfigs[saveIdx]);

  // JSX:
  const preview = saveSlot ? (
    <span className={styles.save_slot_name}>{saveSlot.configName}</span>
  ) : (
    <span className={mergeStyles(styles.save_slot_name, styles.greyed_out)}>
      empty slot
    </span>
  );

  return (
    <span className={mergeStyles(styles.save_slot_preview, styles.option)}>
      <span className={styles.save_slot_index}>{saveIdx + 1}. </span> {preview}
    </span>
  );
};

export default SaveSlotPreview;
