// Assets:
import { WHEEL_RADII_MAP } from '../constants/radii';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// React Router:
// React:
// Context:
// Hooks:
// Components:
import { Select, Option } from './Select';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Radius } from '../constants/radii';
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
      <b> {key}</b>
    </Option>
  ));

  return (
    <label>
      Wheel size:
      <Select
        id='palette-select'
        value={currentRadius}
        onChange={(value) => {
          setRadius({ radiusName: value as Radius });
        }}
      >
        {options}
      </Select>
    </label>
  );
};

export default RadiusSelector;
