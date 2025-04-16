// 3rd party:
// Redux RTK:
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
  backgroundColor = '#FFF',
  fontFamily = 'Arial',
}) => {
  // For closing:
  const { handleCloseModal } = use(modalCloseCtx);

  // JSX:
  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
        fontFamily: `${fontFamily}`,
        margin: '0',
        padding: '1rem 2rem',
        border: 'solid black 1px',
        cursor: 'pointer',
        filter: 'brightness(1.25)',
      }}
      onClick={handleCloseModal}
    >
      <h1>{label}</h1>
    </div>
  );
};

export default ResultDisplay;
