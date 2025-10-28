# Schematic Marketing Website — Copilot Build Instructions

## Overview
You are building a **responsive React website** for **Schematic Marketing**, a woman- and Latina-owned creative consultancy based in **New York and New Jersey**.  

Schematic Marketing offers **a la carte brand and business services** — including brand design and management, web design, graphic design, business development, growth strategy, and event planning.  

The name “Schematic” reflects precision, clarity, and intent — every idea has a structure, every brand has a blueprint.  
The aesthetic and tone of the website should communicate **authority, creativity, and confidence** — experienced, but still modern and approachable.

---

## Brand Essence

### Core Traits
- **Strategic:** grounded in clear thinking and long-term planning.  
- **Creative:** design that feels fresh, purposeful, and well-structured.  
- **Experienced:** seasoned in diverse sectors — financial, healthcare, real estate, and nonprofits.  
- **Reliable:** projects are managed with care, transparency, and expertise.  
- **Refined:** elegant presentation, thoughtful color use, and consistent layout hierarchy.

### Core Motivation
To help businesses build **strong, credible brands** that balance **creativity and structure** — transforming scattered ideas into cohesive visual systems and strategies.  
The mission is to prove that design thinking and disciplined execution can coexist — that **art and logic belong on the same blueprint.**

---

## Visual Identity Guidelines

### Colors
Use the following brand palette consistently across backgrounds, typography, and accents:

**Primary:**
- Deep Blueprint Blue: `#1B4688`
- White: `#FFFFFF`
- Light Blueprint Blue: `#BBCDF3`

**Secondary / Accents:**
- Navy: `#102F5D`
- Soft Blue: `#D5DDEF`
- Mist Blue: `#E0EAF5`
- Cream: `#F5F0E0`
- Rose Tint: `#F5E2ED`

Color balance:
- Primary blues define structure (backgrounds, headers, hero).
- White and light blue provide contrast and readability.
- Cream and rose appear as subtle highlights — to soften the corporate tone without losing professionalism.

### Typography
Use a modern, architectural sans-serif font pairing:
- **Headings:** “Outfit” or “Poppins” (bold weights)
- **Body:** “Inter” or “Work Sans” (regular or medium)
- Use consistent letter spacing and clean kerning.
- Avoid decorative fonts.

### Visuals
- Incorporate **thin grid lines**, **blueprint textures**, and **technical drawing motifs**.
- Subtle motion (hover animations, line reveals, fades).
- Photography and case study images should reflect **collaboration, design workspaces, or client deliverables** — clean, realistic, no stock clichés.

---

## Brand Voice & Messaging

### Tone
Confident. Professional. No fluff.  
It should sound like someone who knows what they’re doing and doesn’t need to oversell it.  
Smart but conversational — the voice of a founder who has been in the field, seen what works, and builds brands that last.

### Verbiage & Vocabulary
Use words that evoke **precision, clarity, and expertise**.  
Favor action-oriented verbs like *build, design, define, refine, scale, strengthen, align*.  
Avoid overly corporate or academic jargon. Write like someone who’s trusted by both a startup founder and a corporate partner.

### Messaging Ideas
- “We build brands with precision and imagination.”  
- “Every brand deserves a blueprint.”  
- “Where structure meets creativity.”  
- “Design that feels intentional.”  
- “Strategy, design, and direction — by design.”  
- “A la carte creative services, structured for results.”  
- “Blueprints for brands that mean business.”

---

## Technical Setup

### Tech Stack
- **React (functional components)**
- **Node.js / Express** (for backend if needed)
- **React Router DOM** for navigation
- **Styled Components** or **CSS Modules**
- **Framer Motion** for smooth transitions
- **Prettier + ESLint (Airbnb config)** for code consistency
- **WCAG compliant**, responsive design

### Folder Structure
/schematic-marketing
│
├── /src
│ ├── /components
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── Portfolio.jsx
│ │ ├── Values.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ │
│ ├── /styles
│ │ ├── global.css
│ │ ├── hero.css
│ │ ├── navbar.css
│ │ └── theme.js
│ │
│ ├── App.jsx
│ └── index.js
│
├── package.json
├── .eslintrc.json
├── .prettierrc
└── README.md


---

## Navigation
Create a **sticky top navigation bar** with:
- Left-aligned logo (placeholder until provided)
- Right-aligned menu:
  - Home (`/`)
  - Portfolio (`/portfolio`)
  - Values (`/values`)
  - Contact (`/contact`)
- Hover animation that underlines links in `#BBCDF3`
- Responsive hamburger menu for mobile

---

## Home Page — Hero Section

### Layout
A full-width, full-height hero section that uses a **blueprint grid background**.

Example structure:
```jsx
<section className="hero">
  <div className="hero-content">
    <h1>Building brands with precision and imagination.</h1>
    <p>A creative studio offering a la carte services — from brand identity and strategy to design and growth.</p>
    <button>View Portfolio</button>
  </div>
</section>

## Responsiveness
- Use flexbox for centering.
- Scale typography and spacing fluidly.
- Maintain grid visibility on all screen sizes.

## Other Pages
Portfolio
- Grid layout of past work. Each card should include:
- Project name
- Short description
- Hover overlay or tag animation
- Placeholder images (Unsplash)

Values
Simple vertical layout with three sections:
- Integrity in design
- Strategy as foundation
- Collaboration as method
- Accessibility
- Prioritzation of small businesses & nonprofits

Contact
- Clean contact form (name, email, message)
- Submit button styled in brand palette
- Include motion or confirmation message

## Behavior
- Smooth scroll transitions
- Sticky nav bar that slightly darkens on scroll
- Fade-in animations for section entrances
- Modular code; clean imports; descriptive naming
