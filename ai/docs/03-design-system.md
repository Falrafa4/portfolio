# Design System

## Purpose

This document defines the visual language of the portfolio.

Every page, component, icon, color, spacing, and typography should follow this design system to maintain consistency across the entire application.

Whenever visual decisions become ambiguous, follow this document.

---

# Design Keywords

The interface should communicate the following values:

* Professional
* Clean
* Modern
* Organized
* Lightweight
* Familiar
* Elegant

Avoid styles that feel:

* Playful
* Cartoonish
* Cyberpunk
* Neon-heavy
* Gaming-oriented

---

# Visual Inspiration

Primary Inspiration

Windows 11 Fluent Design

Secondary Inspiration

Modern SaaS Interfaces

The UI should feel like:

"A modern Windows desktop application built specifically for software engineers."

---

# Color Palette

## Primary Color

```text
#003A89
```

Purpose:

* Primary buttons
* Active navigation
* Selected folder
* Important highlights
* Links

---

## Primary Hover

Use a slightly lighter variation of the primary color.

Purpose:

* Hover state
* Active button state

---

## Accent Color

Use Windows Fluent blue accents where appropriate.

Accent colors should be subtle.

Never overuse accent colors.

---

# Neutral Colors

Design should rely heavily on neutral colors.

Use multiple neutral gray levels for:

* Background
* Surface
* Sidebar
* Borders
* Cards
* Hover state

Avoid pure black (#000000).

Avoid pure white (#FFFFFF).

Prefer softer tones.

---

# Dark Theme

Dark mode is the default theme.

Characteristics:

* Comfortable contrast
* Soft shadows
* Subtle borders
* Minimal glow

Avoid extremely dark backgrounds.

The interface should remain readable for long periods.

---

# Light Theme

Light mode should not simply invert colors.

It should feel intentionally designed.

Maintain:

* Comfortable contrast
* Soft surfaces
* Professional appearance

---

# Typography

Typography should prioritize readability.

Characteristics:

* Modern
* Clean
* High legibility

Recommended font:

* Inter

Fallback:

* Segoe UI
* System UI
* sans-serif

---

# Font Scale

Heading 1

Large page titles.

Heading 2

Section titles.

Heading 3

Card titles.

Body

Default paragraph text.

Caption

Supporting information.

Small

Metadata.

Maintain a clear hierarchy.

---

# Font Weight

Use limited font weights.

Recommended:

Regular

Medium

Semibold

Bold

Avoid excessive weight variations.

---

# Iconography

Icons should be consistent across the application.

Preferred library:

Lucide React

Icons should resemble Windows Explorer where appropriate.

Avoid mixing icon libraries.

---

# Icon Usage

Folder pages

Use folder icons.

Documents

Use document icons.

External links

Use external-link icons.

Downloads

Use download icons.

Contact

Use recognizable brand icons where appropriate.

---

# Border Radius

Use medium rounded corners.

Inspired by Windows 11.

Avoid sharp corners.

Avoid excessive rounding.

Maintain consistency across:

* Cards
* Buttons
* Inputs
* Sidebar
* Explorer window

---

# Shadows

Use subtle elevation.

Cards

Very soft shadow.

Explorer Window

Slightly stronger shadow.

Hover

Minimal shadow increase.

Avoid dramatic floating effects.

---

# Borders

Borders should be subtle.

Use low-contrast borders.

Do not rely solely on shadows for separation.

---

# Spacing System

Use a consistent spacing scale.

Small

Medium

Large

Extra Large

Avoid arbitrary spacing values.

Maintain consistent rhythm throughout the application.

---

# Layout Width

Content should never become too wide.

Maintain comfortable reading width.

Large monitors should not stretch content excessively.

---

# Cards

Cards represent folders or files.

Characteristics:

* Rounded corners
* Soft border
* Clean spacing
* Consistent padding

Hover state:

* Slight elevation
* Slight background change

Avoid exaggerated animations.

---

# Buttons

Button styles:

Primary

Secondary

Ghost

Danger (only if ever required)

Primary buttons use the brand color.

Secondary buttons remain neutral.

Ghost buttons blend naturally into the Explorer UI.

---

# Inputs

Search input should resemble Windows Search.

Characteristics:

Rounded

Minimal border

Comfortable padding

Clear focus state

---

# Navigation

Active navigation item:

* Primary color accent
* Subtle background
* Clear visual hierarchy

Hover should feel natural.

---

# Scrollbars

Use modern thin scrollbars.

Keep them subtle.

Do not hide them completely.

---

# Images

Project thumbnails should:

Maintain consistent aspect ratio.

Have rounded corners.

Load efficiently.

Use WebP or AVIF whenever possible.

Avoid inconsistent image sizes.

---

# Animations

Animations support usability.

Never distract users.

Animation duration:

150–300ms

Animation types:

Fade

Slide

Scale (minimal)

Opacity

Avoid:

Bounce

Elastic

Rotation

Large zoom effects

---

# Focus States

Every interactive element must have a visible focus state.

Accessibility is mandatory.

Focus indicators should complement the design.

---

# Dividers

Use subtle separators.

Do not overuse borders.

Whitespace should perform most of the separation.

---

# Empty States

Empty states should include:

Illustration (optional)

Title

Short explanation

Suggested action

Maintain the same design language.

---

# Loading Skeleton

Prefer skeleton loading over spinners.

Skeleton colors should adapt automatically to both themes.

---

# Responsive Design

Design should scale naturally.

Desktop

Full Explorer layout.

Tablet

Collapsible sidebar.

Mobile

Drawer navigation.

Maintain the same design language across every device.

---

# Visual Consistency Rules

Every new component should visually belong to the same design system.

Avoid introducing new:

Colors

Border radius

Shadow styles

Animation styles

Spacing values

Typography patterns

Unless absolutely necessary.

---

# Design Principles

Before implementing any UI element, ask:

* Does it feel like Windows 11?
* Does it improve usability?
* Is it visually consistent?
* Is it lightweight?
* Is it accessible?
* Is it maintainable?

If the answer to any question is "No", redesign the component before implementation.
