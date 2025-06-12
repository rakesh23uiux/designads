# Design System Project Structure

This document outlines the complete structure of our design system project.

```
design-system/
├── 📁 src/                              # Source code
│   ├── 📁 design-tokens/               # Design tokens (centralized design decisions)
│   │   ├── 📄 colors.ts                # Color palette and semantic colors
│   │   ├── 📄 typography.ts            # Font families, sizes, weights, line heights
│   │   ├── 📄 spacing.ts               # Spacing scale and semantic spacing
│   │   ├── 📄 breakpoints.ts           # Responsive breakpoints and media queries
│   │   ├── 📄 shadows.ts               # Shadow tokens for elevation
│   │   └── 📄 index.ts                 # Combined token exports
│   │
│   ├── 📁 atoms/                       # Basic building blocks
│   │   ├── 📁 Button/                  # Button component
│   │   │   ├── 📄 Button.tsx           # Component implementation
│   │   │   ├── 📄 Button.stories.tsx   # Storybook stories
│   │   │   ├── 📄 Button.test.tsx      # Jest tests
│   │   │   ├── 📄 Button.module.css    # Component styles
│   │   │   └── 📄 index.ts             # Component exports
│   │   ├── 📁 Input/                   # Input component (placeholder)
│   │   ├── 📁 Label/                   # Label component (placeholder)
│   │   ├── 📁 Icon/                    # Icon component (placeholder)
│   │   ├── 📁 Avatar/                  # Avatar component (placeholder)
│   │   ├── 📁 Badge/                   # Badge component (placeholder)
│   │   └── 📄 index.ts                 # Atoms exports
│   │
│   ├── 📁 molecules/                   # Simple component combinations
│   │   ├── 📁 SearchBox/               # Search input with button
│   │   │   ├── 📄 SearchBox.tsx        # Component implementation
│   │   │   ├── 📄 SearchBox.stories.tsx # Storybook stories
│   │   │   ├── 📄 SearchBox.test.tsx   # Jest tests
│   │   │   └── 📄 index.ts             # Component exports
│   │   ├── 📁 FormField/               # Form field (placeholder)
│   │   ├── 📁 NavItem/                 # Navigation item (placeholder)
│   │   ├── 📁 Card/                    # Card component (placeholder)
│   │   ├── 📁 Dropdown/                # Dropdown component (placeholder)
│   │   └── 📄 index.ts                 # Molecules exports
│   │
│   ├── 📁 organisms/                   # Complex UI components
│   │   ├── 📁 Header/                  # Header component (placeholder)
│   │   ├── 📁 Navigation/              # Navigation component (placeholder)
│   │   ├── 📁 DataTable/               # Data table component (placeholder)
│   │   ├── 📁 ProductGrid/             # Product grid component (placeholder)
│   │   ├── 📁 CommentSection/          # Comment section component (placeholder)
│   │   └── 📄 index.ts                 # Organisms exports
│   │
│   ├── 📁 layouts/                     # Page-level layouts
│   │   ├── 📁 PageLayout/              # General page layout (placeholder)
│   │   ├── 📁 DashboardLayout/         # Dashboard layout (placeholder)
│   │   ├── 📁 AuthLayout/              # Authentication layout (placeholder)
│   │   └── 📄 index.ts                 # Layouts exports
│   │
│   ├── 📁 pages/                       # Specific page instances
│   │   ├── 📁 HomePage/                # Home page (placeholder)
│   │   ├── 📁 LoginPage/               # Login page (placeholder)
│   │   └── 📄 index.ts                 # Pages exports
│   │
│   ├── 📁 hooks/                       # Custom React hooks
│   │   ├── 📄 useTheme.ts              # Theme management hook
│   │   ├── 📄 useBreakpoint.ts         # Responsive breakpoint hook
│   │   └── 📄 index.ts                 # Hooks exports
│   │
│   ├── 📁 utils/                       # Utility functions
│   │   ├── 📄 classNames.ts            # CSS class manipulation utilities
│   │   ├── 📄 validators.ts            # Form validation utilities
│   │   └── 📄 index.ts                 # Utils exports
│   │
│   ├── 📁 styles/                      # Global styles and CSS
│   │   ├── 📄 globals.css              # Global styles and utilities
│   │   ├── 📄 reset.css                # CSS reset
│   │   ├── 📄 variables.css            # CSS custom properties from design tokens
│   │   └── 📁 components/              # Shared component-level styles
│   │       └── 📄 example.module.css   # Example component styles
│   │
│   └── 📄 index.ts                     # Main design system export file
│
├── 📁 .storybook/                      # Storybook configuration
│   ├── 📄 main.ts                      # Storybook main configuration
│   ├── 📄 preview.ts                   # Storybook preview configuration
│   └── 📄 theme.ts                     # Storybook theme (placeholder)
│
├── 📁 .husky/                          # Git hooks
│   ├── 📄 pre-commit                   # Pre-commit hook (placeholder)
│   ├── 📄 pre-push                     # Pre-push hook (placeholder)
│   └── 📄 commit-msg                   # Commit message hook (placeholder)
│
├── 📁 docs/                            # Documentation
│   ├── 📄 getting-started.md           # Getting started guide
│   ├── 📄 design-principles.md         # Design principles (placeholder)
│   ├── 📁 design-tokens/               # Design tokens documentation (placeholder)
│   ├── 📁 components/                  # Component documentation (placeholder)
│   └── 📁 guidelines/                  # Guidelines and best practices (placeholder)
│
├── 📁 tests/                           # Test configuration and utilities
│   ├── 📁 __mocks__/                   # Jest mocks (placeholder)
│   ├── 📄 setup.ts                     # Jest setup file
│   └── 📄 utils.ts                     # Test utilities
│
├── 📁 dist/                            # Build output (generated)
├── 📄 package.json                     # NPM package configuration
├── 📄 tsconfig.json                    # TypeScript configuration
├── 📄 rollup.config.js                 # Rollup build configuration
├── 📄 jest.config.js                   # Jest test configuration
├── 📄 .eslintrc.js                     # ESLint configuration
├── 📄 .prettierrc                      # Prettier configuration
├── 📄 .commitlintrc.js                 # Commitlint configuration
├── 📄 tailwind.config.js               # Tailwind CSS configuration
├── 📄 postcss.config.js                # PostCSS configuration (placeholder)
│
├── 📁 .github/                         # GitHub configuration
│   └── 📁 workflows/                   # GitHub Actions workflows
│       ├── 📄 ci.yml                   # Continuous integration (placeholder)
│       ├── 📄 release.yml              # Release workflow (placeholder)
│       └── 📄 visual-regression.yml    # Visual regression tests (placeholder)
│
├── 📄 Dockerfile                       # Docker configuration (placeholder)
├── 📄 docker-compose.yml               # Docker Compose configuration (placeholder)
├── 📄 README.md                        # Main project documentation
├── 📄 CONTRIBUTING.md                  # Contributing guidelines
├── 📄 PROJECT_STRUCTURE.md             # This file
└── 📄 LICENSE                          # License file (placeholder)
```

## 📋 File Descriptions

### Core Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | NPM dependencies, scripts, and package metadata |
| `tsconfig.json` | TypeScript compiler configuration |
| `rollup.config.js` | Build configuration for library packaging |
| `jest.config.js` | Test runner configuration |
| `.eslintrc.js` | Code linting rules and configuration |
| `.prettierrc` | Code formatting configuration |
| `tailwind.config.js` | Tailwind CSS utility configuration |

### Design System Architecture

#### 🎨 Design Tokens
Centralized design decisions stored as JavaScript/TypeScript objects:
- **Colors**: Brand colors, semantic colors, neutral colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale and semantic spacing
- **Breakpoints**: Responsive design breakpoints
- **Shadows**: Elevation and depth tokens

#### 🧩 Components (Atomic Design)
- **Atoms**: Basic UI elements (Button, Input, Label, etc.)
- **Molecules**: Simple combinations (SearchBox, FormField, etc.)
- **Organisms**: Complex components (Header, DataTable, etc.)
- **Layouts**: Page-level structure templates
- **Pages**: Specific page implementations

#### 🔧 Supporting Code
- **Hooks**: Reusable React logic (theme management, responsive design)
- **Utils**: Helper functions (class name utilities, validators)
- **Styles**: Global CSS and design system variables

### Development Tools

#### 📚 Storybook
Interactive component development and documentation environment.

#### 🧪 Testing
- Jest for unit testing
- React Testing Library for component testing
- Custom test utilities and mocks

#### 🔧 Build & Deploy
- Rollup for library bundling
- TypeScript for type checking
- PostCSS for CSS processing
- GitHub Actions for CI/CD

## 🚀 Getting Started

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Run tests**: `npm test`
4. **Build library**: `npm run build`

## 📖 Key Features

- **🎨 Design Token System**: Centralized design decisions
- **🧩 Component Library**: Reusable UI components
- **📚 Interactive Documentation**: Storybook integration
- **🔧 TypeScript Support**: Full type safety
- **✅ Comprehensive Testing**: Unit and integration tests
- **🎯 Accessibility**: WCAG 2.1 AA compliance
- **📱 Responsive Design**: Mobile-first approach
- **🌙 Theme Support**: Light/dark mode with system detection
- **🔧 Developer Experience**: Modern tooling and workflows 