// React:
import React, { useEffect, useRef, useState, Children } from 'react';
import { createPortal } from 'react-dom';
// CSS:
import styles from './Select.module.css';
// Types, interfaces and enumns:
import type {
  FC,
  ReactNode,
  ComponentProps,
  CSSProperties,
  KeyboardEvent,
  HTMLAttributes,
} from 'react';

interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: ReactNode;
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

interface OptionProps
  extends Pick<ComponentProps<'div'>, 'children' | 'className'> {
  readonly value: string | number;
}

// For drop-down menus not to be affected by overflow:
const dropDownRootEl = document.getElementById('drop-down-root');

const Select: FC<SelectProps> = ({
  children,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
  id = '',
  ...restProps
}) => {
  // State:
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<ReactNode>('');
  const [dropdownStyle, setDropdownStyle] = useState<CSSProperties>({});
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Refs:
  const selectRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const updateDropdownPosition = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'absolute',
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
        zIndex: 9999,
      });
    }
  };

  // Effects:
  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition();
      window.addEventListener('scroll', updateDropdownPosition, true);
      window.addEventListener('resize', updateDropdownPosition);
    }

    return () => {
      window.removeEventListener('scroll', updateDropdownPosition, true);
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, [isOpen]);

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
    const childrenArray = Children.toArray(children);
    const selectedChild = childrenArray.find(
      (child) =>
        React.isValidElement<OptionProps>(child) && child.props.value === value
    );
    if (React.isValidElement<OptionProps>(selectedChild)) {
      setSelectedLabel(selectedChild.props.children);
    }
  }, [children, value]);

  // For keyboard navigation through options:
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(null);
    }
  }, [isOpen]);
  useEffect(() => {
    if (isOpen && focusedIndex !== null && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex, isOpen]);

  // Handlers:
  const handleSelect = (
    childValue: string | number,
    childLabel: React.ReactNode
  ) => {
    setIsOpen(false);
    setSelectedLabel(childLabel);
    onChange?.(childValue);
  };

  function handleKeyDown(ev: KeyboardEvent) {
    if (!isOpen) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    const count = Children.count(children);
    switch (ev.key) {
      case 'ArrowDown': {
        ev.preventDefault();
        setFocusedIndex((prev) => ((prev || 0) + 1) % count);
        return;
      }
      case 'ArrowUp': {
        ev.preventDefault();
        setFocusedIndex((prev) => (count + (prev || 0) - 1) % count);
        return;
      }
      case 'Enter': {
        if (focusedIndex !== null) {
          const child = Children.toArray(children)[focusedIndex];
          if (React.isValidElement<OptionProps>(child)) {
            handleSelect(child.props.value, child.props.children);
          }
        }
        selectRef.current?.focus();
        return;
      }
      case 'Escape': {
        ev.preventDefault();
        setIsOpen(false);

        selectRef.current?.focus();
        return;
      }
      default:
        return;
    }
  }

  // JSX:
  // For Accessibility:
  const dropdownId = `${id || 'custom-select'}-dropdown`;

  const renderDropdown = () => (
    <div
      className={styles.dropdown}
      style={dropDownRootEl ? dropdownStyle : {}}
      role='listbox'
    >
      {Children.map(children, (child, idx) => {
        if (!React.isValidElement<OptionProps>(child)) return null;

        const {
          value: childValue,
          children: childLabel,
          className: optionClass,
        } = child.props;

        return (
          <div
            className={`${styles.option} ${optionClass ?? ''}`}
            tabIndex={-1}
            id={`${dropdownId}-option-${idx}`}
            role='option'
            aria-selected={value === childValue}
            ref={(el) => {
              optionRefs.current[idx] = el;
            }}
            onMouseDown={(ev) => {
              ev.preventDefault();
              handleSelect(childValue, childLabel);
            }}
          >
            {childLabel}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      className={`${styles.selectContainer} ${className}`}
      id={id}
      ref={selectRef}
      tabIndex={0}
      role='combobox'
      aria-haspopup='listbox'
      aria-expanded={isOpen}
      aria-controls={dropdownId}
      aria-activedescendant={
        isOpen && focusedIndex !== null
          ? `${dropdownId}-option-${focusedIndex}`
          : undefined
      }
      onKeyDown={handleKeyDown}
      {...restProps}
    >
      <div className={styles.selectButton} onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`${styles.selectedOption} ${
            !selectedLabel ? styles.placeholder : ''
          }`}
        >
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

      {isOpen &&
        (dropDownRootEl
          ? createPortal(renderDropdown(), dropDownRootEl)
          : renderDropdown())}
    </div>
  );
};

const Option = ({ children }: OptionProps) => {
  return <>{children}</>;
};

export { Select, Option };
