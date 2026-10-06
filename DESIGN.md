# Design direction

This file describes the visual language AI agents should follow when changing this portfolio. It is based on the current implementation and the project brief in `ai/docs/01-project-overview.md`, `02-uiux-guidelines.md`, and `03-design-system.md`.

## Identity

- Product: a personal portfolio presented as a modern file explorer.
- Audience: recruiters and HR professionals first, followed by judges, clients, and collaborators.
- Character: professional, organized, calm, modern, and lightweight.
- The interface takes recognizable navigation and hierarchy cues from Windows 11 File Explorer, while remaining a portfolio. Do not reproduce Windows screens or add simulated operating-system behavior.
- Prefer clear content and familiar Explorer navigation over decorative effects. Every visual treatment should support hierarchy, grouping, feedback, or readability.

## Current visual foundation

The CSS custom properties in `src/index.css` are the color source of truth. Use the semantic classes (`bg-background`, `bg-surface`, `text-text-main`, `text-text-muted`, `border-border`, `text-primary`, and `bg-primary`) instead of adding one-off colors.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `primary` | `#003A89` | `#60A5FA` | Main actions, active navigation, links, and selected emphasis |
| `primary-hover` | `#002C6B` | `#3B82F6` | Hover for primary actions |
| `background` | `#F3F4F6` | `#111827` | Page and inset surfaces |
| `surface` | `#FFFFFF` | `#1F2937` | Explorer content and cards |
| `sidebar` | `#F9FAFB` | `#111827` | Navigation pane |
| `border` | `#E5E7EB` | `#374151` | Quiet separators and outlines |
| `text-main` | `#111827` | `#F9FAFB` | Primary text |
| `text-muted` | `#4B5563` | `#9CA3AF` | Supporting text and metadata |

Status colors may communicate actual project or availability states. Do not use status colors as decoration. Avoid introducing pure black, bright neon, or arbitrary gradients.

## Typography

- Use the existing sans stack: Inter, Segoe UI, system UI, sans-serif.
- The repository declares Inter in CSS but does not currently load an Inter font file; do not assume a bundled font exists.
- Keep a clear hierarchy: page title, section title, item title, body, then metadata. Use the existing Tailwind typography utilities and avoid adding a second type system.
- Use monospace sparingly for dates, paths, and technology metadata where the existing UI already does so.
- Keep body copy comfortable to read. Avoid oversized display text unless the content is a deliberate home-page introduction.

## Explorer shell and layout

- Keep one shared Explorer shell: title bar, toolbar with navigation/breadcrumb/search, sidebar or mobile navigation, content pane, and status bar.
- Preserve navigation as the primary Windows Explorer reference. The window controls are decorative; do not invent minimize, maximize, or close behavior.
- Render route content inside the existing content pane. Page titles and content should remain easy to scan and must not compete with the toolbar.
- The content wrapper currently uses a `max-w-6xl` width with responsive horizontal padding. Preserve a readable content width on wide screens.
- Use content-driven grids: project, certificate, and achievement lists currently use one column on small screens, two from `sm`, and three from `lg`. Home uses a responsive bento composition. Retain these patterns where they fit the content; do not force every page into a bento grid.
- At the `md` breakpoint (768px in the current Tailwind setup), the desktop sidebar and breadcrumb become available. On narrower screens, use the existing drawer and bottom navigation behavior. Prevent horizontal page overflow; horizontally scrolling category filters are an intentional local pattern.
- Keep the interface recognizable as Explorer across breakpoints instead of turning mobile into an unrelated marketing page.

## Surfaces, borders, and shape

- Separate regions mainly with spacing, semantic surface colors, and subtle borders.
- Existing components use both thin solid borders with rounded corners and dashed two-pixel borders on portfolio cards. When extending a component, follow that component's established pattern. For a new reusable surface, prefer a restrained solid border unless its Explorer file-card treatment calls for the existing dashed style.
- Existing radii range from small control corners to rounded cards and pill-shaped filters/status labels. Match the size and purpose of the neighboring component; do not make every surface a pill or heavily rounded.
- Use shadows and blur sparingly. The shell has a translucent background treatment; do not spread glass effects across every new component.
- Images should retain their intended aspect ratio, use `object-cover` where they are thumbnails, and have a useful text alternative when meaningful.

## Components and visual behavior

- Reuse the existing shell, `Button`, `BentoCard`, page transitions, empty state, and domain cards before introducing a parallel component with a slightly different style.
- Use primary blue at the key action or active state. Keep secondary actions neutral and icon use consistent with Lucide React and the existing icon resolver.
- Cards should communicate what they contain. Project cards show a thumbnail, title, short description, status, and a small number of technology labels; certificate and achievement cards have their own content emphasis. Do not fabricate metrics, badges, or portfolio data.
- Interactive controls need clear hover, active, and keyboard focus states. Do not style a non-interactive container as a button or make decorative window controls functional by implication.
- Empty, loading, and error states should explain the state and offer recovery when a real recovery action exists. Use the existing `EmptyState` and `LoadingSkeleton` visual language.

## Motion

- Motion is brief and subordinate to content. Existing route/list transitions are around 0.22 seconds; the mobile drawer is around 0.2 seconds. Use similar timing for comparable interactions.
- Animate state changes such as route entry, drawer open/close, or a restrained hover response. Do not add parallax, 3D effects, bouncing controls, or perpetual decorative loops.
- Respect `prefers-reduced-motion`; avoid motion that is required to understand content or state.
- The current home page and shell contain looping marquee/ambient animations. They are implementation details, not a pattern to copy into new UI. When modifying them, preserve a usable reduced-motion experience.

## Accessibility and responsive behavior

- Use semantic HTML, meaningful labels, keyboard-operable controls, visible focus indicators, and sufficient contrast in both themes.
- Do not rely on color alone to communicate active, status, or error states.
- Keep touch targets comfortably usable on mobile and ensure fixed navigation does not cover page content.
- Test new layouts at narrow mobile, tablet, and desktop widths and in both light and dark themes.

## Theme behavior and source-of-truth notes

- Every new component must work with both themes by using the semantic CSS tokens, including borders, placeholders, focus rings, and hover states.
- The current theme initialization uses a saved `theme` value or the operating system preference when no value is saved. `settings.json` says `defaultTheme: "light"`, while older design docs call dark mode the default; do not hardcode either assumption into new components. Follow the live theme context and semantic tokens.
- If a future task intentionally changes the theme default or token palette, update this file and `src/index.css` together.

## Avoid

- Generic dashboard layouts, unrelated marketing-page sections, fake operating-system functionality, and visual elements without a product purpose.
- Random colors, untracked gradients, excess blur/glow/shadow, decorative status lights, and repeated pill badges.
- Invented testimonials, statistics, content, or states. Portfolio facts belong to the JSON data under `src/data/`.
- Adding a new visual convention when an existing component already solves the need.

## When guidance conflicts

For implementation details, inspect the live component and token before assuming an older planning document describes the current UI. This file records the intended direction; `src/index.css` defines the live theme tokens and existing components define their current rendered patterns. If a proposed change would alter the overall visual direction or replace a shared pattern, call out the conflict before making that broader redesign.
