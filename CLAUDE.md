# Project Guidelines

## General Development Principles
- No test files
- Fewer API endpoints the better
- Keep implementation simple and focused

## Frontend Design & Development

**CRITICAL**: This project follows the frontend-design skill guidelines defined in `.claude/skills/frontend-design.md`. All frontend work MUST adhere to these comprehensive standards.

### Core Design Philosophy

Create distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Every design decision must be intentional and context-specific.

#### Design Thinking Process
Before coding any frontend component:
1. **Purpose**: Understand what problem the interface solves and who uses it
2. **Tone**: Commit to a BOLD aesthetic direction (brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.)
3. **Constraints**: Consider technical requirements (framework, performance, accessibility)
4. **Differentiation**: Identify what makes this interface UNFORGETTABLE

**Key principle**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

### Frontend Aesthetics Guidelines

#### Typography
- Choose fonts that are beautiful, unique, and interesting
- AVOID generic fonts: Inter, Roboto, Arial, system fonts, Space Grotesk
- Use distinctive display fonts paired with refined body fonts
- MUST use `text-balance` for headings and `text-pretty` for body/paragraphs
- MUST use `tabular-nums` for data
- NEVER modify letter-spacing unless explicitly requested

#### Color & Theme
- Commit to a cohesive aesthetic using CSS variables for consistency
- Use dominant colors with sharp accents (avoid timid, evenly-distributed palettes)
- NEVER use purple or multicolor gradients
- NEVER use gradients unless explicitly requested
- SHOULD use existing theme or Tailwind CSS color tokens before introducing new ones
- SHOULD limit accent color usage to one per view

#### Motion & Animation
- NEVER add animation unless explicitly requested
- Focus on high-impact moments: well-orchestrated page load with staggered reveals
- Use scroll-triggering and hover states that surprise
- MUST animate only compositor props (transform, opacity)
- NEVER animate layout properties (width, height, top, left, margin, padding)
- SHOULD use ease-out on entrance
- NEVER exceed 200ms for interaction feedback
- MUST respect `prefers-reduced-motion`
- For React: use motion/react (formerly framer-motion)
- For Tailwind: use tw-animate-css for entrance and micro-animations

#### Spatial Composition
- Use unexpected layouts, asymmetry, overlap, diagonal flow
- Create grid-breaking elements
- Use generous negative space OR controlled density

#### Backgrounds & Visual Details
- Create atmosphere and depth (avoid defaulting to solid colors)
- Use gradient meshes, noise textures, geometric patterns, layered transparencies
- Add dramatic shadows, decorative borders, custom cursors, grain overlays
- NEVER use glow effects as primary affordances
- SHOULD use Tailwind CSS default shadow scale unless explicitly requested

### Technical Stack Requirements

#### Core Stack
- MUST use Tailwind CSS defaults unless custom values already exist or are explicitly requested
- MUST use motion/react (formerly framer-motion) when JavaScript animation is required
- SHOULD use tw-animate-css for entrance and micro-animations in Tailwind CSS
- MUST use cn utility (clsx + tailwind-merge) for class logic

#### Components
- MUST use accessible component primitives for anything with keyboard or focus behavior (Base UI, React Aria, Radix)
- MUST use the project's existing component primitives first
- NEVER mix primitive systems within the same interaction surface
- SHOULD prefer Base UI for new primitives if compatible with the stack
- MUST add an `aria-label` to icon-only buttons
- NEVER rebuild keyboard or focus behavior by hand unless explicitly requested

### Interaction Guidelines

#### General
- MUST use an AlertDialog for destructive or irreversible actions
- SHOULD use structural skeletons for loading states
- NEVER use `h-screen`, use `h-dvh`
- MUST respect `safe-area-inset` for fixed elements
- MUST show errors next to where the action happens
- NEVER block paste in input or textarea elements

#### Keyboard
- MUST provide full keyboard support per WAI-ARIA APG patterns
- MUST have visible focus rings (`:focus-visible`)
- MUST manage focus (trap, move, return) per APG patterns
- NEVER use `outline: none` without visible focus replacement

#### Targets & Input
- MUST have hit target ≥24px (mobile ≥44px)
- MUST use mobile `<input>` font-size ≥16px to prevent iOS zoom
- NEVER disable browser zoom
- MUST use `touch-action: manipulation` to prevent double-tap zoom

#### Forms
- MUST ensure hydration-safe inputs (no lost focus/value)
- NEVER block paste in `<input>`/`<textarea>`
- MUST show loading buttons with spinner and keep original label
- MUST make Enter submit focused input; in `<textarea>`, ⌘/Ctrl+Enter submits
- MUST display errors inline next to fields; on submit, focus first error
- MUST use proper `autocomplete`, meaningful `name`, correct `type` and `inputmode`
- SHOULD disable spellcheck for emails/codes/usernames
- MUST warn on unsaved changes before navigation
- MUST trim values to handle text expansion trailing spaces

#### State & Navigation
- MUST reflect state in URL (deep-link filters/tabs/pagination/expanded panels)
- MUST restore scroll position on Back/Forward
- MUST use `<a>`/`<Link>` for navigation (support Cmd/Ctrl/middle-click)
- NEVER use `<div onClick>` for navigation

### Layout Guidelines
- MUST use a fixed z-index scale (no arbitrary z-*)
- SHOULD use `size-*` for square elements instead of `w-*` + `h-*`
- SHOULD use optical alignment; adjust ±1px when perception beats geometry
- MUST have deliberate alignment to grid/baseline/edges
- MUST verify mobile, laptop, ultra-wide viewports
- MUST respect safe areas (`env(safe-area-inset-*)`)
- MUST avoid unwanted scrollbars; fix overflows

### Performance Requirements
- NEVER animate large blur() or backdrop-filter surfaces
- NEVER apply will-change outside an active animation
- NEVER use useEffect for anything that can be expressed as render logic
- SHOULD test iOS Low Power Mode and macOS Safari
- MUST track and minimize re-renders
- MUST profile with CPU/network throttling
- MUST batch layout reads/writes; avoid reflows/repaints
- MUST virtualize large lists (>50 items)
- MUST preload above-fold images; lazy-load the rest
- MUST prevent CLS (explicit image dimensions)

### Content & Accessibility
- MUST design empty/sparse/dense/error states
- MUST ensure no dead ends; always offer next step/recovery
- MUST use `…` character (not `...`)
- MUST have `scroll-margin-top` on headings
- MUST be resilient to user-generated content (short/avg/very long)
- MUST use accurate `aria-label`; decorative elements `aria-hidden`
- MUST prefer native semantics (button, a, label, table) before ARIA
- MUST handle empty states—no broken UI for empty strings/arrays
- MUST meet contrast requirements—prefer APCA over WCAG 2
- MUST provide redundant status cues (not color-only)

### Design Quality Checklist
- MUST give empty states one clear next action
- SHOULD use layered shadows (ambient + direct)
- SHOULD ensure nested radii: child ≤ parent; concentric
- SHOULD maintain hue consistency: tint borders/shadows/text toward bg hue
- MUST use accessible charts (color-blind-friendly palettes)
- MUST increase contrast on `:hover`/`:active`/`:focus`

### Dark Mode & Theming
- MUST use `color-scheme: dark` on `<html>` for dark themes
- SHOULD use `<meta name="theme-color">` matches page background
- MUST provide explicit `background-color` and `color` for native `<select>`

### What to AVOID
- Generic AI-generated aesthetics
- Overused font families (Inter, Roboto, Arial, Space Grotesk, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
- Converging on common choices across generations

### Implementation Complexity Matching
Match implementation complexity to the aesthetic vision:
- **Maximalist designs**: Need elaborate code with extensive animations and effects
- **Minimalist/refined designs**: Need restraint, precision, and careful attention to spacing, typography, and subtle details
- Elegance comes from executing the vision well, regardless of approach

---

**Reference**: For complete implementation rules and detailed guidelines, see `.claude/skills/frontend-design.md`
