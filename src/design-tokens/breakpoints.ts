export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const breakpointValues = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Media query helpers
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  
  // Max-width queries
  'max-xs': `@media (max-width: ${breakpointValues.xs - 1}px)`,
  'max-sm': `@media (max-width: ${breakpointValues.sm - 1}px)`,
  'max-md': `@media (max-width: ${breakpointValues.md - 1}px)`,
  'max-lg': `@media (max-width: ${breakpointValues.lg - 1}px)`,
  'max-xl': `@media (max-width: ${breakpointValues.xl - 1}px)`,
  'max-2xl': `@media (max-width: ${breakpointValues['2xl'] - 1}px)`,
  
  // Between queries
  'sm-only': `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpointValues.md - 1}px)`,
  'md-only': `@media (min-width: ${breakpoints.md}) and (max-width: ${breakpointValues.lg - 1}px)`,
  'lg-only': `@media (min-width: ${breakpoints.lg}) and (max-width: ${breakpointValues.xl - 1}px)`,
  'xl-only': `@media (min-width: ${breakpoints.xl}) and (max-width: ${breakpointValues['2xl'] - 1}px)`,
} as const;

export type Breakpoint = keyof typeof breakpoints;
export type MediaQuery = keyof typeof mediaQueries; 