// Assets:
// Constants:
// Utils:
// 3rd party:
// Store:
// Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
import styles from './Button.module.css';
// Types, interfaces and enumns:
import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';
type ButtonVariant = 'default' | 'warning' | 'danger' | 'success';
type ButtonShape = 'rectangle' | 'rounded';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  outlined?: boolean;
  label?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = 'default',
  shape = 'rectangle',
  outlined = false,
  label,
  children,
  className,
  ...props
}) => {
  // Classes:
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[shape],
    outlined && styles.outlined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // JSX:
  return (
    <button className={buttonClasses} {...props}>
      {children}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
