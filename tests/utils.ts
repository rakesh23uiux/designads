import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';

// Custom render function that can include providers
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  // Add any providers you might need here (e.g., ThemeProvider)
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }

  return render(ui, { wrapper: Wrapper, ...options });
}

// Re-export everything from testing library
export * from '@testing-library/react';
export { renderWithProviders as render };

// Custom matchers for design system testing
export const customMatchers = {
  toHaveVariant: (received: HTMLElement, variant: string) => {
    const hasVariant = received.classList.contains(`--${variant}`) ||
                      received.classList.contains(`${variant}`);
    
    return {
      message: () =>
        `expected element ${hasVariant ? 'not ' : ''}to have variant "${variant}"`,
      pass: hasVariant,
    };
  },
  
  toHaveSize: (received: HTMLElement, size: string) => {
    const hasSize = received.classList.contains(`--${size}`) ||
                   received.classList.contains(`size-${size}`);
    
    return {
      message: () =>
        `expected element ${hasSize ? 'not ' : ''}to have size "${size}"`,
      pass: hasSize,
    };
  },
}; 