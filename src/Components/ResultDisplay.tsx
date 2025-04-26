// Utils:
import { contrastColor, brightness } from '../utils/color';
// 3rd party:
// Store:
// React Router:
// React:
import { use } from 'react';
// Context:
import modalCloseCtx from '../context/modalCloseCtx';
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
export interface ResultDisplayProps {
  label: string;
  backgroundColor?: string;
  fontFamily?: string;
}

const ResultDisplay: FC<ResultDisplayProps> = ({
  label,
  backgroundColor = '#FFFFFF',
  fontFamily = 'Arial',
}) => {
  // For closing:
  const { handleCloseModal } = use(modalCloseCtx);

  const textColor = contrastColor(brightness(backgroundColor, 1.4));
  // JSX:
  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
        color: `${textColor}`,
        fontFamily: `${fontFamily}`,
        // textDecoration: 'underline',
        margin: '0',
        padding: '1rem 2rem',
        cursor: 'pointer',
        filter: 'brightness(1.4)',
        // border: 'solid black 1px',
      }}
      onClick={handleCloseModal}
    >
      <h1>{label}</h1>
    </div>
  );
};

export default ResultDisplay;
