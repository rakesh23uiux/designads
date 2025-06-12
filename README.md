# Design System

A comprehensive, modern design system built with React, TypeScript, and Storybook. This design system provides a complete set of design tokens, components, and utilities for building consistent and accessible user interfaces.

## 🚀 Features

- **🎨 Design Tokens**: Centralized design decisions including colors, typography, spacing, shadows, and breakpoints
- **🧩 Component Library**: Atomic design methodology with atoms, molecules, organisms, layouts, and pages
- **📚 Storybook**: Interactive component documentation and development environment
- **🔧 TypeScript**: Full type safety and excellent developer experience
- **✅ Testing**: Comprehensive test coverage with Jest and React Testing Library
- **🎯 Accessibility**: WCAG compliant components with proper ARIA attributes
- **📱 Responsive**: Mobile-first design with built-in responsive utilities
- **🌙 Dark Mode**: Built-in theme support with system preference detection
- **🔧 Developer Tools**: ESLint, Prettier, Husky, and automated workflows

## 📦 Installation

```bash
npm install @company/design-system
```

## 🛠️ Usage

### Basic Setup

```jsx
import { Button, useTheme } from '@company/design-system';
import '@company/design-system/dist/styles.css';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button variant="primary" onClick={() => setTheme('dark')}>
        Switch to Dark Mode
      </Button>
    </div>
  );
}
```

### Design Tokens

Access design tokens directly in your code:

```jsx
import { colors, spacing, typography } from '@company/design-system';

const styles = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
  fontSize: typography.fontSizes.lg,
};
```

### Component Examples

```jsx
import { 
  Button, 
  SearchBox, 
  Card,
  useBreakpoint 
} from '@company/design-system';

function Example() {
  const { isAbove } = useBreakpoint();

  return (
    <div>
      {/* Button variants */}
      <Button variant="primary">Primary Button</Button>
      <Button variant="outline" size="lg">Large Outline Button</Button>
      <Button loading>Loading Button</Button>

      {/* SearchBox */}
      <SearchBox 
        placeholder="Search components..."
        onSearch={(value) => console.log('Searching:', value)}
      />

      {/* Responsive behavior */}
      {isAbove('md') && <div>This shows on medium screens and up</div>}
    </div>
  );
}
```

## 🏗️ Architecture

This design system follows the Atomic Design methodology:

### 🔬 Atoms
Basic building blocks like buttons, inputs, labels, icons, avatars, and badges.

### 🧪 Molecules
Simple combinations of atoms like search boxes, form fields, navigation items, cards, and dropdowns.

### 🦠 Organisms
Complex UI components like headers, navigation bars, data tables, product grids, and comment sections.

### 📄 Templates (Layouts)
Page-level layouts like page layout, dashboard layout, and authentication layout.

### 🌍 Pages
Specific page instances like home page and login page.

## 📖 Documentation

- **[Getting Started](./docs/getting-started.md)** - Setup and basic usage
- **[Design Principles](./docs/design-principles.md)** - Our design philosophy
- **[Design Tokens](./docs/design-tokens/)** - Colors, typography, spacing, and more
- **[Components](./docs/components/)** - Individual component documentation
- **[Guidelines](./docs/guidelines/)** - Best practices and conventions

## 🧪 Development

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Setup

```bash
# Clone the repository
git clone https://github.com/your-org/design-system.git

# Install dependencies
npm install

# Start Storybook development server
npm run dev

# Run tests
npm test

# Build the library
npm run build
```

### Available Scripts

```bash
npm run dev              # Start Storybook development server
npm run build            # Build the library for production
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage report
npm run lint             # Lint code
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types
```

## 🔧 Configuration

### Tailwind CSS Integration

If you're using Tailwind CSS in your project, you can extend your configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@company/design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Import design tokens
      colors: require('@company/design-system/tokens/colors'),
      spacing: require('@company/design-system/tokens/spacing'),
      // ... other tokens
    },
  },
};
```

### Theme Customization

Create a custom theme by extending the default tokens:

```jsx
import { createTheme } from '@company/design-system';

const customTheme = createTheme({
  colors: {
    primary: {
      500: '#your-custom-color',
    },
  },
  spacing: {
    custom: '2.5rem',
  },
});
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow the existing code style
- Write tests for new components
- Update documentation as needed
- Ensure accessibility compliance
- Test across different browsers and devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Documented with [Storybook](https://storybook.js.org/)
- Styled with modern CSS and design tokens
- Inspired by leading design systems like Material Design, Ant Design, and Chakra UI

## 📞 Support

- 📧 Email: design-system@company.com
- 💬 Slack: #design-system
- 🐛 Issues: [GitHub Issues](https://github.com/your-org/design-system/issues)
- 📖 Docs: [Design System Documentation](https://your-design-system-docs.com)

---

Made with ❤️ by the Design System Team 