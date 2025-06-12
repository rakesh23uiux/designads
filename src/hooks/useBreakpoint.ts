import { useState, useEffect } from 'react';
import { breakpointValues } from '../design-tokens';

export type BreakpointKey = keyof typeof breakpointValues;

export interface UseBreakpointReturn {
  current: BreakpointKey | null;
  isAbove: (breakpoint: BreakpointKey) => boolean;
  isBelow: (breakpoint: BreakpointKey) => boolean;
  isEqual: (breakpoint: BreakpointKey) => boolean;
  width: number;
}

export function useBreakpoint(): UseBreakpointReturn {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCurrentBreakpoint = (): BreakpointKey | null => {
    if (width >= breakpointValues['2xl']) return '2xl';
    if (width >= breakpointValues.xl) return 'xl';
    if (width >= breakpointValues.lg) return 'lg';
    if (width >= breakpointValues.md) return 'md';
    if (width >= breakpointValues.sm) return 'sm';
    if (width >= breakpointValues.xs) return 'xs';
    return null;
  };

  const isAbove = (breakpoint: BreakpointKey): boolean => {
    return width >= breakpointValues[breakpoint];
  };

  const isBelow = (breakpoint: BreakpointKey): boolean => {
    return width < breakpointValues[breakpoint];
  };

  const isEqual = (breakpoint: BreakpointKey): boolean => {
    return getCurrentBreakpoint() === breakpoint;
  };

  return {
    current: getCurrentBreakpoint(),
    isAbove,
    isBelow,
    isEqual,
    width,
  };
} 