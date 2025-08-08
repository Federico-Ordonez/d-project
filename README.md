# Shopify Theme with Vite + Tailwind CSS

A modern Shopify theme built with Vite, Tailwind CSS 3, ESLint, and Prettier using Yarn for package management.

## 🚀 Features

- **Vite** - Fast build tool and development server
- **Tailwind CSS 3** - Utility-first CSS framework
- **ESLint** - Code linting for JavaScript
- **Prettier** - Code formatting
- **Yarn** - Fast and reliable package manager
- **Shopify Liquid** - Theme templating language

## 📁 Project Structure

```
├── assets/                 # Theme assets (CSS, JS, images)
├── config/                 # Theme configuration
├── layout/                 # Layout templates
├── sections/               # Section templates
├── snippets/               # Reusable snippets
├── templates/              # Page templates
├── src/                    # Source files for development
│   ├── main.js            # Main JavaScript file
│   └── style.css          # Main CSS file with Tailwind
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Node.js dependencies and scripts
```

## 🛠 Development

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Shopify CLI (for theme deployment)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

### Available Scripts

- `yarn dev` - Start Vite development server
- `yarn build` - Build for production
- `yarn build:watch` - Build in watch mode for development
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues automatically
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

### Shopify Development

To work with a Shopify store:

1. Install the Shopify CLI
2. Connect to your store:
   ```bash
   shopify theme serve --store=your-store.myshopify.com
   ```

## 🎨 Customization

### Tailwind CSS

The theme uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can:

- Customize colors in the theme configuration
- Add new utility classes
- Modify responsive breakpoints

### JavaScript

Main JavaScript functionality is in `src/main.js` and includes:

- Mobile menu functionality
- Lazy loading for images
- Theme utilities

### Shopify Sections

The theme includes:

- **Hero Banner** (`sections/hero-banner.liquid`) - Homepage hero section
- **Header** (`sections/header.liquid`) - Site navigation

## 📦 Build Process

The build process uses Vite to:

1. Process CSS with Tailwind and PostCSS
2. Bundle JavaScript modules
3. Output optimized files to `shopify/assets/`

Files are built with the following naming:
- `main.js` - Main JavaScript bundle
- `style.css` - Compiled CSS with Tailwind

## 🚀 Deployment

To deploy to Shopify:

1. Build the theme:
   ```bash
   yarn build
   ```

2. Upload the theme files to your Shopify theme

Or use Shopify CLI:
```bash
shopify theme push
```

## 📝 Configuration Files

- `.shopifyignore` - Files to ignore when uploading to Shopify
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS plugins
- `eslint.config.js` - ESLint rules and configuration
- `.prettierrc.json` - Prettier formatting rules

## 📄 License

This project is licensed under the MIT License.
