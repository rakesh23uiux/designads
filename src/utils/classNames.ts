/**
 * A utility function to conditionally join classNames together
 * Alternative to clsx that's specifically tailored for our design system
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Creates a className string with base classes and conditional variants
 */
export function createVariantClasses(
  base: string,
  variants: Record<string, string | undefined | null | false>
): string {
  const variantClasses = Object.values(variants).filter(Boolean);
  return cn(base, ...variantClasses);
}

/**
 * Utility to create BEM-style class names
 */
export function bem(
  block: string,
  element?: string,
  modifier?: string | string[]
): string {
  let className = block;
  
  if (element) {
    className += `__${element}`;
  }
  
  if (modifier) {
    const modifiers = Array.isArray(modifier) ? modifier : [modifier];
    modifiers.forEach((mod) => {
      className += ` ${block}${element ? `__${element}` : ''}--${mod}`;
    });
  }
  
  return className;
}

/**
 * Merges class names, with later classes taking precedence
 */
export function mergeClasses(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ');
} 