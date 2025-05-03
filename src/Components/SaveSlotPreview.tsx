// Assets:
// Constants:
// Utils:
// 3rd party:
// Redux, RTK:
// Store:
import useBoundStore from '../store/boundStore';
// Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface SaveSlotPreviewProps {
  saveIdx: number;
}

const SaveSlotPreview: FC<SaveSlotPreviewProps> = ({ saveIdx }) => {
  // Store:
  const saveSlot = useBoundStore((state) => state.savedConfigs[saveIdx]);
  const preview = saveSlot ? (
    saveSlot.configName
  ) : (
    <i style={{ color: 'gray' }}> empty slot </i>
  );
  // JSX:
  return (
    <span>
      <b style={{ paddingRight: '0.15rem' }}>{saveIdx + 1}.</b> {preview}
    </span>
  );
};

export default SaveSlotPreview;
