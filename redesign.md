Schematic Marketing — Full Website Build Spec (NextJS + React)

Version: Final

0. Project Purpose

Rebuild the Schematic Marketing website into a bold, architectural, tech-driven experience.

The site must feel engineered, structured, decisive, and visually ambitious.

Avoid formulas, agency clichés, and cookie-cutter layouts.

Everything must communicate precision.

1. Technical Stack Requirements

1.1 Frameworks + Libraries
Next.js 14+ with App Router

React 18+

TypeScript for all components

Styled-components or CSS Modules (no Tailwind unless absolutely necessary)

Framer Motion for subtle architectural motion (line growth, grid fade, precision animations)

1.2 Dev Quality Requirements
ESLint + Prettier fully configured

Husky for pre-commit checks (lint + typecheck)

Absolute imports enabled

Use semantic HTML and valid ARIA attributes

Strict adherence to accessibility contrast standards

1.3 Global Layout Requirements
Sticky left-hand navigation (never top)

Content scrolls independently

Navigation area uses Secondary Dark Navy #102f5d

Body uses Off-White #e0eaf5 as a blueprint-like canvas

2. Brand System Implementation

2.1 Color Tokens (Global CSS Variables)
--navy-primary: #1b4688;
--navy-dark: #102f5d;
--blue-light: #bbcdf3;
--offwhite: #e0eaf5;
--warm-neutral: #f5f0e0;
--peach: #f5e2e0;
2.2 Typography
Import from Google Fonts:

IBM Plex Sans (Regular, Medium, Bold, Extra Bold, Black)

IBM Plex Mono

Headings:

IBM Plex Sans, extra bold or black

Letter-spacing: slightly increased

Color: Primary Navy

Body:

IBM Plex Sans, regular

Color: Secondary Dark Navy

Schematic Data:

IBM Plex Mono for numbers, step titles, metadata, and any “blueprint-like” text

CTA Buttons:

Plex Sans, uppercase, bold

2.3 Motion + Micro-Interactions
Use thin line animations, not fades or sloppy transforms

Grid pulses subtly on hover

Borders “draw in” with precise line sweeps

CTA hover animation: 1px border grows to 2px before easing back

3. Visual Identity Implementation

3.1 Schematic Grid Motif
Global grid background applied in low opacity using Light Blue #bbcdf3

Must appear across: Hero, Process, Services, Footer

Should feel like architectural graph paper

Scale: ~16px–24px spacing

3.2 Section Borders
Use thin (1–2px) strokes in Primary Navy

Sections should feel “framed,” like elements on a drafting table

Use strokes for:

Section separators

Service cards

Process step boxes

Footer framing

3.3 Imagery
Photography style: architectural details, structural close-ups, digital textures, abstract tech

Avoid stock photos of “people having meetings”

Apply a slight blueprint-tint overlay when needed

3.4 Iconography
Geometric, line-based icons

Use consistent stroke weight

Avoid filled icons

Prefer IBM Plex–style icon sets

4. Component Library Specification

4.1 Navigation (Left-Side Sticky)
Full-height left sidebar

Background: Secondary Dark Navy

Logo at top

Menu items stacked vertically

Active route indicated by a clean, thin vertical stroke in Primary Navy

CTA button included at bottom: Start the Schematic

4.2 CTA Button
Filled rectangle

Background: Primary Navy

Text: White, uppercase

Border radius: 4px

Hover: Line drawing animation + Light Blue outline

4.3 Page Section Wrapper

Each section component must:

Use a faint grid background

Include a top/bottom stroke

Use geometric spacing (multiple of 8px for consistency)

4.4 Service Card
Thin navy border

Title in IBM Plex Sans medium

Optional small subheading in Plex Mono for a “schematic” feel

Light Blue hover background

Micro-interaction: border expands + grid animation

4.5 Process Step Block
Number in IBM Plex Mono

Large, bold step title

Description below

Fully framed with thin stroke

Subtle line animation on hover

5. Page-by-Page Build Instructions
   5.1 Home Page

Sections

A. Hero
Background: Off-White + Light Blue grid

H1 example:

“Strategy With Architectural Precision.”

H2 example:

“We engineer marketing systems built on clarity, research, and structural thinking.”

Underline stroke below H1: 3–4px in Primary Navy

CTA: Start the Schematic

B. Intro / Why Schematic Works
Three-column grid

Each column framed by strokes

Optional abstract line graphic behind the section

C. Our Work
Preview projects

Steps use Plex Mono numbering

CTA: See Our Full Methodology

D. Services Preview
Display 6–8 service cards

Line-based icons

CTA buttons inside each card

E. Credibility Strip
A row of industry sectors (UN, financial services, small business, nonprofits)

Use Plex Mono label style

F. Final CTA
Full-width Secondary Dark Navy background

Bold headline + CTA: Engineer Your Solution

5.2 The Schematic (Full Process Page)

Requirements:
Very structured, blueprint-like layout

Clearly numbered grid of steps

Key elements:

Step 1: Initial Blueprint

Step 2: Research Schematic

Step 3: Structural Strategy

Step 4 (optional): Execution Layer

Each step framed with strokes and grid overlay

CTA: See Case Studies or Start the Schematic

5.3 Services Page

Requirements:
Full grid layout with clean boundaries

Each card:

Navy stroke

Light Blue hover

Title + Mono subtitle + CTA

Include short descriptive text per service

Section transitions must use stroke lines

5.4 Credibility + Founder

Requirements:
Split layout:

Left: founder portrait (architectural frame, strokes)

Right: founder story (tone: strategic + human)

Warm Neutral background for this block

Include a timeline-style vertical stroke with milestones using Plex Mono

5.5 Footer

Requirements:
Secondary Dark Navy

Simple two-column layout

Strong CTA centered or left-aligned

Social icons as line icons

Thin horizontal divider above footer text

6. Routing Structure
   /
   /our-work
   /services
   /about
   /contact
7. Global Quality Gates
   Lint: no warnings or errors

Prettier auto-formatting on commit

TypeScript strict mode

Lighthouse minimums:

Performance: 90+

Accessibility: 95+

Best practices: 95+

SEO: 90+

8. Deliverables

Google Antigravity must output:

Full NextJS project scaffold

All pages, layouts, and components defined above

Global branding tokens

All animations and micro-interactions

Sample placeholder content following Schematic’s tone

Responsive testing across desktop/tablet/mobile

Accessibility testing

Clean, well-organized file architecture
