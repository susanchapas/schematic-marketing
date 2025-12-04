# Schematic Marketing — Next.js Website

A mobile-first, accessible, Neumorphic website for Schematic Marketing built with Next.js 14 (App Router) and TypeScript.

## 🏗️ Overview

This project implements a systems-first creative studio website featuring:

- **Neumorphic Design System** — Soft, tactile UI with carefully crafted shadows and surfaces
- **Mobile-First Responsive** — Designed for mobile, enhanced for desktop
- **WCAG AA+ Accessibility** — Semantic HTML, proper ARIA, keyboard navigation, and color contrast
- **SEO Optimized** — Meta tags, Open Graph, structured data, and sitemap
- **Clean Code** — ESLint, Prettier, Husky pre-commit hooks

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/schematic-marketing.git
cd schematic-marketing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📜 Available Scripts

| Command                      | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `npm run dev`                | Start development server                            |
| `npm run build`              | Create production build                             |
| `npm run start`              | Start production server                             |
| `npm run lint`               | Run ESLint                                          |
| `npm run lint:fix`           | Run ESLint with auto-fix                            |
| `npm run format`             | Format code with Prettier                           |
| `npm run format:check`       | Check code formatting                               |
| `npm run test`               | Run unit tests                                      |
| `npm run test:watch`         | Run tests in watch mode                             |
| `npm run test:accessibility` | Run pa11y accessibility tests (requires dev server) |

## 📁 Project Structure

```
schematic-marketing/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── design-tokens.css       # CSS custom properties
│   ├── about/                  # About page
│   ├── values/                 # Values page
│   ├── portfolio/              # Portfolio page
│   ├── contact/                # Contact page
│   ├── api/
│   │   └── contact/route.ts    # Contact form API endpoint
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Site footer
│       ├── Hero.tsx            # Hero section
│       ├── Button.tsx          # Reusable button
│       ├── ServicesGrid.tsx    # Services display
│       ├── ServiceCard.tsx     # Individual service card
│       ├── PortfolioGrid.tsx   # Portfolio projects
│       ├── PortfolioCard.tsx   # Individual project card
│       ├── ContactForm.tsx     # Contact form with validation
│       └── SkipToContent.tsx   # Accessibility skip link
├── public/
│   ├── portfolio/              # Portfolio images
│   ├── og-image.jpg            # Open Graph image
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
├── tests/                      # Test files
├── .husky/                     # Git hooks
├── .github/workflows/          # CI/CD workflows
└── [config files]
```

## 🎨 Design System

### Colors

| Token                | Hex       | Usage                           |
| -------------------- | --------- | ------------------------------- |
| `--color-blueprint`  | `#1b4688` | Primary brand, headers, buttons |
| `--color-drafting`   | `#bbcdf3` | Accents, highlights             |
| `--color-vellum`     | `#f5f0e0` | Main background                 |
| `--color-deep-ink`   | `#102f5d` | Body text                       |
| `--color-cloud-blue` | `#e0eaf5` | Secondary backgrounds           |
| `--color-rose-clay`  | `#f5e2e0` | Warm accents                    |

### Typography

- **Primary Font:** Inter (geometric sans-serif)
- **Accent Font:** Caveat (handwritten, used sparingly)

### Neumorphic Surfaces

```css
/* Extruded surface */
.surface {
  background: var(--color-vellum);
  box-shadow:
    9px 9px 18px #d1ccc0,
    -9px -9px 18px #ffffff;
  border-radius: 16px;
}

/* Inset/pressed surface */
.surface--inset {
  box-shadow:
    inset 6px 6px 12px #d1ccc0,
    inset -6px -6px 12px #ffffff;
}
```

## ♿ Accessibility

This project follows WCAG 2.1 AA guidelines:

- **Semantic HTML** — Proper heading hierarchy, landmarks, and elements
- **Keyboard Navigation** — All interactive elements are keyboard accessible
- **Focus Indicators** — Visible, high-contrast focus states
- **Color Contrast** — Minimum 4.5:1 for body text, 3:1 for large text
- **Screen Reader Support** — Descriptive labels, ARIA where needed
- **Reduced Motion** — Respects `prefers-reduced-motion`
- **Skip Link** — Allows skipping to main content

Run accessibility tests:

```bash
# Start the dev server first
npm run dev

# In another terminal
npm run test:accessibility
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any API keys or configuration here
# NEXT_PUBLIC_SITE_URL=https://schematicmarketing.com
```

### Customizing Design Tokens

Edit `app/design-tokens.css` to modify colors, spacing, or typography.

### Adding Portfolio Projects

Projects are defined in `app/components/PortfolioGrid.tsx`. Add new projects to the `portfolioProjects` array:

```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  description: 'Brief description of the project.',
  category: 'Category',
  imageUrl: '/portfolio/project-image.jpg',
  tags: ['Tag1', 'Tag2'],
}
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test -- --coverage
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📝 Contributing

1. Create a feature branch
2. Make changes
3. Ensure tests pass and linting is clean
4. Submit a pull request

Pre-commit hooks will automatically:

- Run ESLint with auto-fix
- Format code with Prettier

## 📄 License

© 2024 Schematic Marketing. All rights reserved.

---

Built with precision. Designed with purpose.
