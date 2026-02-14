# Shift Systems Design Guidelines

## Design Approach
**System Selected:** Hybrid approach combining Stripe's restraint and calm confidence with Linear's precision typography and strategic whitespace usage. This creates a sophisticated B2B aesthetic that conveys enterprise capability while remaining approachable for SMBs.

## Core Design Principles
1. **Strategic Calm:** Every element serves conversion without visual noise
2. **Trust Through Restraint:** Professional polish through subtlety, not decoration
3. **Outcome Clarity:** Visual hierarchy that guides users to value propositions

---

## Typography System

**Primary Font:** Inter or DM Sans (Google Fonts)
**Accent Font:** Same as primary (single family for clean consistency)

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subheadlines: text-xl md:text-2xl, font-normal, text-neutral-400
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text/Qualifiers: text-sm, text-neutral-500

---

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, gap-8, py-20, etc.)

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-6 lg:px-8
- Text content: max-w-3xl for optimal readability
- Section vertical padding: py-16 md:py-24 lg:py-32

**Grid Patterns:**
- Logo grid: 5 columns desktop, 3 tablet, 2 mobile (grid-cols-2 md:grid-cols-3 lg:grid-cols-5)
- Service cards: 2 columns desktop, single mobile (grid-cols-1 lg:grid-cols-2)
- Case studies: 2 columns, stack on mobile

---

## Color & Background

**Background:** Dark theme (bg-neutral-950 or bg-slate-950)
**Text Colors:**
- Primary: text-white
- Secondary: text-neutral-300
- Muted: text-neutral-400
- Accents: text-neutral-500

**Borders:** border-neutral-800 for subtle separation

**Button Treatment:**
- Primary CTA: White text on neutral-800 background, hover:bg-neutral-700
- Secondary CTA: border-neutral-700, text-white, hover:bg-neutral-900

**Buttons on Images (Hero):** Glass-morphism effect with backdrop-blur-md, bg-neutral-900/50 background

---

## Component Library

### Hero Section
- Full viewport height consideration (min-h-screen flex items-center)
- Two-column layout: Left content (60%), Right video placeholder (40%)
- 3-step process below CTAs in horizontal row with subtle dividers
- Video placeholder: Aspect ratio 16:9, border-neutral-800, subtle shadow

### Trust/Logo Section
- Positioned high on page, immediately after hero
- Logos: Desaturated (grayscale filter or opacity-50), uniform sizing
- Clean grid with generous gaps (gap-12 lg:gap-16)
- Optional subtle animation: opacity on hover

### Service Cards (What We Build)
- Card style: border border-neutral-800, rounded-xl, p-8
- Icon placement: Top-left, 48px size, neutral-600 color
- Three-tier content: Title → Includes list → Outcome callout
- Outcome callout: Subtle bg-neutral-900, rounded, p-4, italic text

### Case Study Cards
- Compact format: Client name → Before/After → Result
- Result highlighted: text-lg font-semibold
- Structured with subtle borders between sections

### CTA Sections
- Centered content, max-w-4xl
- Headline + supporting text + qualifier pattern
- Qualifier in smaller muted text below CTA
- Generous padding around CTAs (space-y-6)

### Footer
- Three-column layout desktop, stack mobile
- Minimal visual weight: text-neutral-500, hover:text-neutral-300
- Social icons: 24px, consistent spacing

---

## Images

**Hero Section:** 
- **NO large hero background image** - This is a dark, clean design
- Video placeholder only (mockup frame showing "60-second overview")
- Video frame: Rounded corners (rounded-lg), border (border-neutral-700), aspect-video class

**Throughout Site:**
- NO stock photography as specified
- Use iconography instead (Heroicons via CDN)
- Logo representations only in trust section

---

## Interactions & Animations

**Principle:** Minimal and purposeful only

**Allowed:**
- Subtle hover state transitions (transition-colors duration-200)
- Button hover: slight background lightening
- Link hover: color change only
- Card hover: subtle border color change (border-neutral-700)

**Forbidden:**
- Scroll-triggered animations
- Loading animations
- Parallax effects
- Complex transitions

---

## Accessibility
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Focus states: ring-2 ring-neutral-500 ring-offset-2 ring-offset-neutral-950
- Semantic HTML throughout
- ARIA labels for icon-only elements

---

## Mobile Considerations
- Stack all multi-column layouts to single column below md: breakpoint
- Reduce hero text size significantly on mobile
- Ensure touch targets minimum 44px
- Maintain generous spacing even on small screens (px-6 minimum)