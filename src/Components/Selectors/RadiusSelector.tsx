// Assets:
import { WHEEL_RADII_MAP } from '../../constants/radii';
// 3rd party:
// Store:
import useBoundStore from '../../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import { Select, Option } from '../UI/Select';
// CSS:
import styles from './Selectors.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Radius } from '../../constants/radii';

const RadiusSelector: FC = () => {
  // Store:
  const currentRadius = useBoundStore(
    (state) => state.currentConfig.radiusName
  );
  // Actions:
  const setRadius = useBoundStore((state) => state.setRadius);

  // Handlers:
  const handleChange = (value: string | number) => {
    setRadius({ radiusName: value as Radius });
  };

  // JSX:
  const options = Object.keys(WHEEL_RADII_MAP).map((radius) => (
    <Option value={radius} key={radius} className={styles.option}>
      <span className={styles.radius_option}>{radius}</span>
    </Option>
  ));

  return (
    <Select
      id='radius-select'
      aria-label='Wheel size selector'
      value={currentRadius}
      onChange={handleChange}
      className={styles.selector}
    >
      {options}
    </Select>
  );
};

export default RadiusSelector;
