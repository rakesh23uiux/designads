export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Semantic shadows
export const semanticShadows = {
  card: shadows.sm,
  cardHover: shadows.md,
  modal: shadows.xl,
  dropdown: shadows.lg,
  tooltip: shadows.md,
  button: shadows.xs,
  buttonHover: shadows.sm,
  input: shadows.inner,
  inputFocus: '0 0 0 3px rgb(59 130 246 / 0.1)',
} as const;

// Color shadows (for buttons and other elements)
export const colorShadows = {
  primary: '0 4px 14px 0 rgb(59 130 246 / 0.39)',
  success: '0 4px 14px 0 rgb(34 197 94 / 0.39)',
  warning: '0 4px 14px 0 rgb(245 158 11 / 0.39)',
  error: '0 4px 14px 0 rgb(239 68 68 / 0.39)',
  info: '0 4px 14px 0 rgb(14 165 233 / 0.39)',
} as const;

export type Shadow = keyof typeof shadows;
export type SemanticShadow = keyof typeof semanticShadows;
export type ColorShadow = keyof typeof colorShadows; 