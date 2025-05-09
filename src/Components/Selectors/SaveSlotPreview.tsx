// Assets:
// Constants:
// Utils:
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
import styles from './SaveSlotPreview.module.css';
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
    <span>{saveSlot.configName}</span>
  ) : (
    <span className={styles.empty_save_slot_preview}> empty slot </span>
  );

  return (
    <div className={styles.save_slot_option}>
      <span className={styles.save_slot_index}>{saveIdx + 1}.</span> {preview}
    </div>
  );
};

export default SaveSlotPreview;
