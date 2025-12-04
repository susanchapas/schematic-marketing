# Usage Notes for Non-Developer Editors

This guide explains how to make common updates to the Schematic Marketing website without deep technical knowledge.

## 🎨 Changing Colors

### Primary Brand Color

Edit `app/design-tokens.css` and find `--color-blueprint`:

```css
--color-blueprint: #1b4688; /* Change this hex value */
```

### Other Colors

All colors are defined at the top of the file. Common ones to change:

- `--color-vellum` — Main background color
- `--color-deep-ink` — Body text color
- `--color-drafting` — Accent highlights

## 📝 Updating Page Content

### Hero Text (Home Page)

Open `app/page.tsx` and find the `<Hero />` component. The default text can be overridden:

```tsx
<Hero title="Your New Title Here" subtitle="Your new subtitle text here." />
```

### About Page Content

Edit `app/about/page.tsx` directly. The content is in JSX format—just update the text between tags.

### Team Members

In `app/about/page.tsx`, find the `teamMembers` array:

```typescript
const teamMembers = [
  {
    name: 'New Person',
    role: 'Their Role',
    bio: 'Their biography text.',
  },
  // Add more team members...
];
```

## 🖼️ Adding Portfolio Projects

### 1. Add Project Image

Place your image in `public/portfolio/`. Recommended size: 1200x750px.

### 2. Add Project Data

Edit `app/components/PortfolioGrid.tsx` and add to the `portfolioProjects` array:

```typescript
{
  id: 'your-project-id',
  title: 'Project Title',
  description: 'Brief description of the project and results.',
  category: 'Branding',  // or Web Development, Social Media, etc.
  imageUrl: '/portfolio/your-image.jpg',
  tags: ['Strategy', 'Design', 'Development'],
},
```

## 📞 Contact Form

### Changing Form Fields

The contact form is in `app/components/ContactForm.tsx`. To add/remove fields, you'll need to modify both the form JSX and the validation logic.

### Form Submissions

Currently, form submissions are logged to the console. To connect to a real email service:

1. Edit `app/api/contact/route.ts`
2. Add your email service integration (e.g., SendGrid, Resend, or others)

## 🔍 SEO Updates

### Page Titles and Descriptions

Each page has its own metadata. Edit the `metadata` export at the top of each page file:

```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description for search engines.',
};
```

### Site-Wide Metadata

Edit `app/layout.tsx` to change the default site title and description.

## 🎯 Adding New Services

Edit `app/components/ServicesGrid.tsx` and add to the `services` array:

```typescript
{
  title: 'New Service',
  description: 'Description of the service.',
  icon: (
    <svg viewBox="0 0 24 24" ...>
      {/* SVG path here */}
    </svg>
  ),
  accentColor: 'blue',  // or 'rose'
},
```

## ✅ Before Publishing

1. **Test on mobile** — Open the site on your phone or use browser dev tools
2. **Check all links** — Make sure navigation works
3. **Review forms** — Submit a test message
4. **Validate accessibility** — Run `npm run test:accessibility`

## 🆘 Getting Help

If you need to make changes beyond this guide:

1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Create a pull request for review

For technical issues, contact your development team.

---

_Last updated: December 2024_
