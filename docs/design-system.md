# Moro Design System

## Brand Attributes

- **Confident & Analytical**: Data-driven decision making meets social intuition
- **Premium & Accessible**: Sophisticated without being exclusionary
- **Editorial & Functional**: Narrative-driven moments balanced with clear utility
- **Dynamic & Stable**: Real-time trading energy with trustworthy infrastructure
- **Social & Personal**: Community-driven insights with individual portfolio focus

## Typography System

### Font Roles

- **Display**: Instrument Serif (serif) - Used for hero headlines, major section titles, and editorial moments
- **Heading**: Inter (sans-serif, semibold/bold) - Used for section headers, card titles, and UI headings
- **Body**: Inter (sans-serif, regular) - Used for body text, descriptions, and UI copy
- **Mono**: Inter Mono / system mono - Used for code, data, metrics, and technical information

### Type Scale

- **Display 1**: 4.5rem (72px) / 1.1 / -0.02em - Hero headlines
- **Display 2**: 3.5rem (56px) / 1.15 / -0.01em - Major section titles
- **Heading 1**: 2.5rem (40px) / 1.2 / 0 - Section headers
- **Heading 2**: 2rem (32px) / 1.25 / 0 - Card titles, subsections
- **Heading 3**: 1.5rem (24px) / 1.3 / 0 - Component titles
- **Body Large**: 1.125rem (18px) / 1.6 / 0 - Lead paragraphs
- **Body**: 1rem (16px) / 1.5 / 0 - Standard body text
- **Body Small**: 0.875rem (14px) / 1.5 / 0 - Captions, metadata
- **Label**: 0.75rem (12px) / 1.4 / 0.05em - Uppercase labels, badges

### Line Heights & Tracking

- Tight: 1.1-1.2 (headlines, display)
- Normal: 1.4-1.5 (body text)
- Relaxed: 1.6-1.7 (long-form content)

## Spacing Scale + Layout Rhythm

### Spacing Scale (Tailwind)
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

### Section Padding
- **Section Vertical**: `py-20` (80px) on mobile, `py-24` (96px) on desktop
- **Section Horizontal**: `px-6` (24px) on mobile, `px-6` (24px) on desktop
- **Container Max Width**: `max-w-6xl` (1152px) for content, `max-w-7xl` (1280px) for wide layouts

### Grid Rules
- **Bento Grid**: Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-4` or `gap-6`
- **Editorial Two-Column**: Use `grid-cols-1 lg:grid-cols-2` with `gap-12` for narrative content
- **Feature Grid**: Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-6`
- **Avoid**: Arbitrary spacing values unless justified by specific design needs

## Color Roles (Token-Based)

### Semantic Tokens

- **background**: Primary page background (light: soft cream, dark: deep ink)
- **surface**: Elevated surfaces, cards (light: lilac-tinted, dark: dark gray)
- **card**: Card backgrounds (light: soft surface, dark: dark surface)
- **border**: Subtle borders, dividers (light: soft gray, dark: muted gray)
- **text-primary / foreground**: Primary text (light: deep ink, dark: near white)
- **text-muted**: Secondary text, metadata (light: medium gray, dark: light gray)
- **brand / primary**: Primary brand color (iris purple)
- **accent**: Accent highlights (lilac)
- **success**: Success states (lime green)
- **warn**: Warning states (amber)
- **destructive**: Error/destructive actions (red)

### Color Palette

**Light Mode:**
- Background: `252 250 253` (soft cream)
- Surface: `244 241 249` (lilac-tinted)
- Ink: `15 5 24` (deep purple-black)
- Iris: `91 33 182` (primary brand purple)
- Lilac: `216 180 254` (accent purple)
- Lime: `217 249 157` (success green)

**Dark Mode:**
- Background: `15 5 24` (deep ink)
- Surface: `30 20 40` (dark purple-gray)
- Foreground: `252 250 253` (near white)
- Primary: `216 180 254` (lilac, lighter for dark mode)
- Muted: `180 170 190` (medium gray)

## Component Rules

### Border Radius
- **sm**: `calc(var(--radius) - 4px)` = 0.375rem (6px) - Small elements, badges
- **md**: `calc(var(--radius) - 2px)` = 0.5rem (8px) - Buttons, inputs
- **lg**: `var(--radius)` = 0.75rem (12px) - Cards, containers
- **xl**: `calc(var(--radius) + 4px)` = 1rem (16px) - Large cards, modals
- **2xl**: `calc(var(--radius) + 8px)` = 1.25rem (20px) - Hero elements, special cards
- **full**: 9999px - Pills, avatars

### Borders
- **Default**: `1px solid` using `border` token
- **Subtle**: `0.5px solid` for very light dividers (use sparingly)
- **Hover**: Border color shifts to `border-hover` or `primary/20`

### Shadows
- **sm**: `0 1px 2px 0 rgb(0 0 0 / 0.05)` - Subtle elevation
- **md**: `0 4px 6px -1px rgb(0 0 0 / 0.1)` - Cards
- **lg**: `0 10px 15px -3px rgb(0 0 0 / 0.1)` - Elevated cards
- **xl**: `0 20px 25px -5px rgb(0 0 0 / 0.1)` - Modals, hero elements
- **Dark mode**: Use colored shadows sparingly (primary/10)

### Hover States
- **Cards**: Subtle scale `scale-[1.02]` with border color shift
- **Buttons**: Background darkens/lightens by 10%
- **Links**: Color transition, optional underline
- **Interactive elements**: Transition duration 200ms, ease-out

### Focus States
- **Ring**: `2px` solid `ring` token with `ring-offset-2`
- **Outline**: `outline-none` with `focus-visible:ring-2`
- **Accessibility**: Always visible, high contrast

## Motion Rules

### Durations
- **Instant**: 100ms - Immediate feedback
- **Fast**: 200ms - Hover, click feedback
- **Normal**: 300-400ms - Standard transitions
- **Slow**: 600-800ms - Page transitions, reveals
- **Very Slow**: 1000ms+ - Hero animations, major reveals

### Easing
- **Primary Curve**: `[0.22, 1, 0.36, 1]` (ease-out-cubic) - Standard for most animations
- **Spring**: `{ type: "spring", stiffness: 500, damping: 30 }` - Interactive elements
- **Linear**: Only for marquees, progress bars

### When Motion is Allowed
- **Always**: Hover states, focus rings, micro-interactions
- **On Scroll**: Fade-in, slide-up for sections (use `whileInView`)
- **Hero Moments**: One-time entrance animations
- **Never**: Critical UI feedback (errors, success), unless user-initiated

### Reduced Motion Fallback
- **Respect**: `prefers-reduced-motion: reduce`
- **Fallback**: Instant transitions, no animations, immediate state changes
- **Implementation**: Wrap all motion in `@media (prefers-reduced-motion: no-preference)`

### Motion Presets
- **fadeUp**: Opacity 0→1, y: 20→0
- **staggerChildren**: 0.1s delay between children
- **hoverScale**: Scale 1→1.02 on hover
- **marqueeLinear**: Infinite horizontal scroll
- **All presets**: Defined in `/lib/motion.ts`

## Decorative Effects (Optional, Use Sparingly)

### Noise Overlay
- **Opacity**: <0.03 (extremely subtle)
- **Usage**: Optional on dark backgrounds for texture
- **Implementation**: Fixed position overlay with SVG noise pattern

### Border Beam
- **Usage**: Optional on highlighted pricing cards
- **Animation**: 8s linear infinite
- **Opacity**: 0.2 max

### Shimmer
- **Usage**: Optional on primary CTAs
- **Animation**: 3s ease-in-out infinite
- **Subtlety**: Very light (10% opacity max)

### Cursor Effects
- **Usage**: Optional, desktop only
- **Fallback**: Standard cursor always available
- **Implementation**: Custom cursor only on interactive elements

## Accessibility Requirements

- **Contrast**: WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- **Focus Rings**: Always visible, high contrast
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Reduced Motion**: All animations respect `prefers-reduced-motion`
- **Screen Readers**: Semantic HTML, ARIA labels where needed
- **Color Independence**: Never rely on color alone to convey information

## Component Family Principles

- **Consistency**: Same component should look/feel the same across the site
- **Hierarchy**: Visual weight matches information hierarchy
- **Spacing**: Consistent internal padding, external margins
- **Typography**: Consistent font pairing (serif for display, sans for UI)
- **Color**: Role-based, never arbitrary Tailwind colors
- **Motion**: Reusable presets, not bespoke animations
