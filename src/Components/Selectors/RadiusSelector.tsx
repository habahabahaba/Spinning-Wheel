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
import styles from './RadiusSelector.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Radius } from '../../constants/radii';
// interface RadiusSelectorProps{}

const RadiusSelector: FC = () => {
  // Store:
  const currentRadius = useBoundStore(
    (state) => state.currentConfig.radiusName
  );
  // Actions:
  const setRadius = useBoundStore((state) => state.setRadius);

  // JSX:
  const options = Object.keys(WHEEL_RADII_MAP).map((key) => (
    <Option value={key} key={key}>
      <span className={styles.radius_option}>{key}</span>
    </Option>
  ));

  return (
    <Select
      id='palette-select'
      value={currentRadius}
      onChange={(value) => {
        setRadius({ radiusName: value as Radius });
      }}
      className={styles.radius_selector}
    >
      {options}
    </Select>
  );
};

export default RadiusSelector;
