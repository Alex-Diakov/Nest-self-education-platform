/**
 * Material Design 3 Shape Tokens
 * Reference: https://m3.material.io/styles/shape/shape-scale-tokens
 */

export const M3_SHAPES = {
  none: 'rounded-none',
  extraSmall: 'rounded-[4px]',
  small: 'rounded-[8px]',
  medium: 'rounded-[12px]',
  large: 'rounded-[16px]',
  extraLarge: 'rounded-[28px]',
  full: 'rounded-full',
} as const;

export type M3ShapeKey = keyof typeof M3_SHAPES;
