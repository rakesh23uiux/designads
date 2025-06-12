// Import all design tokens
import { colors } from './colors';
import { typography } from './typography';
import { spacing, semanticSpacing } from './spacing';
import { breakpoints, breakpointValues, mediaQueries } from './breakpoints';
import { shadows, semanticShadows, colorShadows } from './shadows';

// Re-export everything
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './breakpoints';
export * from './shadows';

// Combined token export for convenience
export { colors } from './colors';
export { typography } from './typography';
export { spacing, semanticSpacing } from './spacing';
export { breakpoints, breakpointValues, mediaQueries } from './breakpoints';
export { shadows, semanticShadows, colorShadows } from './shadows';

// Design token theme object
export const tokens = {
  colors,
  typography,
  spacing,
  semanticSpacing,
  breakpoints,
  breakpointValues,
  mediaQueries,
  shadows,
  semanticShadows,
  colorShadows,
} as const;

export type DesignTokens = typeof tokens; 