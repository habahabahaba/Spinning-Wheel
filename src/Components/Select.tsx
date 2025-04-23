// 3rd party:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
import styles from './Select.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

interface SelectProps {
  children: React.ReactNode;
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

interface OptionProps extends Pick<React.ComponentProps<'div'>, 'children'> {
  readonly value: string | number;
}

const Select: FC<SelectProps> = ({
  children,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
  id = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<React.ReactNode>('');
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Find the child with matching value and update selected label
    const childrenArray = React.Children.toArray(children);
    const selectedChild = childrenArray.find(
      (child) =>
        React.isValidElement<OptionProps>(child) && child.props.value === value
    );
    if (React.isValidElement<OptionProps>(selectedChild)) {
      setSelectedLabel(selectedChild.props.children);
    }
  }, [children, value]);

  const handleSelect = (
    childValue: string | number,
    childLabel: React.ReactNode
  ) => {
    setIsOpen(false);
    setSelectedLabel(childLabel);
    onChange?.(childValue);
  };

  return (
    <div
      className={`${styles.selectContainer} ${className}`}
      id={id}
      ref={selectRef}
    >
      <div className={styles.selectButton} onClick={() => setIsOpen(!isOpen)}>
        <span className={!selectedLabel ? styles.placeholder : ''}>
          {selectedLabel || placeholder}
        </span>
        <svg
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='square'
            strokeLinejoin='miter'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement<OptionProps>(child)) return null;
            const { value: childValue, children: childLabel } = child.props;

            return (
              <div
                className={styles.option}
                onClick={() => handleSelect(childValue, childLabel)}
              >
                {childLabel}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Option = ({ value: _value, children }: OptionProps) => {
  return <>{children}</>;
};

export { Select, Option };
