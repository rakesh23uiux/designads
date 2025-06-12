# Getting Started

Welcome to our Design System! This guide will help you get up and running quickly.

## Installation

Install the design system package in your project:

```bash
npm install @company/design-system
```

## Basic Setup

1. **Import the CSS**: Import the design system styles in your main CSS file or app entry point:

```jsx
import '@company/design-system/dist/styles.css';
```

2. **Use Components**: Start using components in your React application:

```jsx
import { Button, SearchBox, useTheme } from '@company/design-system';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1>My App</h1>
      <Button variant="primary">
        Primary Button
      </Button>
      <SearchBox 
        placeholder="Search..."
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
}
```

## Design Tokens

Access design tokens directly:

```jsx
import { colors, spacing, typography } from '@company/design-system';

const customStyles = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
  fontSize: typography.fontSizes.lg,
};
```

## TypeScript Support

The design system is built with TypeScript and provides full type safety:

```tsx
import { ButtonProps } from '@company/design-system';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Next.js Integration

For Next.js projects, import the CSS in your `_app.tsx`:

```tsx
// pages/_app.tsx
import '@company/design-system/dist/styles.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## Vite Integration

For Vite projects, import the CSS in your main entry file:

```tsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@company/design-system/dist/styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Best Practices

1. **Use Design Tokens**: Always use design tokens instead of hardcoded values
2. **Follow Accessibility**: Use semantic HTML and proper ARIA attributes
3. **Test Components**: Write tests for your custom components
4. **Theme Support**: Design with both light and dark themes in mind
5. **Responsive Design**: Use the responsive utilities and breakpoint hooks

## Troubleshooting

### Common Issues

**CSS not loading**: Make sure you've imported the CSS file in your app's entry point.

**TypeScript errors**: Ensure you have the latest version of the design system and compatible TypeScript version.

**Bundle size**: Use tree-shaking compatible bundlers and import only what you need.

## Next Steps

- Explore the [Component Library](./components/)
- Read about [Design Principles](./design-principles.md)
- Check out [Design Tokens](./design-tokens/)
- View examples in [Storybook](https://your-storybook-url.com) 