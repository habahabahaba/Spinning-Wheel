// Assets:
// Constants:
import { FONT_FAMILIES_ALL } from '../constants/fontFamilies';
// Utils:
// 3rd party:
// Redux, RTK:
// Store:
// Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface FontsDisplayProps {
  text?: string;
}

const FontsDisplay: FC<FontsDisplayProps> = ({ text = '' }) => {
  // Context:

  // Store:

  // Actions:

  // State:

  // Refs:

  // Effects:

  // Derived values:

  // Handlers:

  // JSX:
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        gap: '0',
        marginLeft: '3rem',
      }}
    >
      {FONT_FAMILIES_ALL.map((font, idx) => (
        <p
          key={font}
          style={{
            fontFamily: `${font}`,
            fontWeight: 600,
            fontSize: '2.5rem',
            margin: 0,
          }}
        >
          {text || `Outcome ${idx + 1}`}
          {' - '}
          <span
            style={{
              fontFamily: `${font}`,
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            {font}
          </span>
        </p>
      ))}
    </div>
  );
};

export default FontsDisplay;
