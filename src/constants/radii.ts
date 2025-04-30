export const WHEEL_RADII_MAP = {
  Small: 300,
  Medium: 360,
  Large: 480,
} as const;

export type Radius = keyof typeof WHEEL_RADII_MAP;
