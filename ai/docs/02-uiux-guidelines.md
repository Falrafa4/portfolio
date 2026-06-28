# UI/UX Guidelines

## Purpose

This document defines the complete user experience and interaction behavior of the portfolio.

All implementation decisions must follow these guidelines before considering visual preferences.

If any future design decision conflicts with this document, this document takes priority.

---

# Design Inspiration

The interface is inspired by Windows 11 File Explorer.

This is **not** a pixel-perfect clone.

The objective is to recreate the familiarity of File Explorer while adapting it into a professional portfolio website.

The experience should feel like:

> "A developer's portfolio that naturally belongs inside Windows 11."

Avoid copying every Windows component exactly.

Instead, preserve:

* Navigation pattern
* Layout hierarchy
* Spacing rhythm
* Visual familiarity
* Interaction behavior

---

# Overall Layout

Desktop layout consists of five major regions.

```
+------------------------------------------------------+
| Title Bar                                             |
+------------------------------------------------------+
| Toolbar / Breadcrumb / Search                         |
+---------------+--------------------------------------+
| Sidebar       |                                      |
|               |                                      |
| Folder Tree   |       Main Content Area              |
|               |                                      |
|               |                                      |
+---------------+--------------------------------------+
| Status Bar                                           |
+------------------------------------------------------+
```

Each region has a clear responsibility.

No floating elements unless absolutely necessary.

---

# Boot Experience

On first visit only.

Sequence:

Boot Screen

↓

Welcome Screen

↓

Portfolio Explorer

Maximum duration:

Approximately 2 seconds.

Returning visitors should skip this sequence automatically using Local Storage.

The transition should feel smooth rather than dramatic.

No loud animations.

No long loading bars.

No fake operating system simulation.

---

# Explorer Window

The portfolio should appear as a single modern Explorer window.

It should feel like one application rather than multiple webpages.

Window characteristics:

* Rounded corners
* Fluent Design appearance
* Comfortable spacing
* Subtle shadow
* Modern proportions

Avoid heavy glassmorphism.

Avoid excessive transparency.

---

# Title Bar

The title bar should resemble Windows 11.

Contains:

* Portfolio title
* Window controls (decorative only)
* Theme toggle

Window controls are visual elements only.

Do not implement minimize, maximize, or close functionality.

---

# Toolbar

Below the title bar.

Contains:

* Back button
* Forward button
* Breadcrumb
* Search bar

Buttons should behave naturally.

Breadcrumb updates automatically based on route.

Search remains accessible from every page.

---

# Sidebar

The sidebar is one of the most important elements.

It should feel inspired by Windows Explorer.

Do NOT build a generic dashboard sidebar.

Structure example:

Quick Access

• Home

Portfolio

• Projects

• Certificates

• Achievements

• Contact

Current page should be visually highlighted.

Hover interaction should resemble Windows.

Icons should be minimal and consistent.

---

# Folder Navigation

Navigation should feel like opening folders.

Every navigation interaction should communicate:

"I'm opening another folder."

Avoid page transitions that feel like navigating between unrelated websites.

---

# Breadcrumb

Every route updates the breadcrumb.

Example:

Home

Home / Projects

Home / Projects / Smart Farm

Breadcrumb should always match the current route.

Breadcrumb items should be clickable.

---

# Search

Search should be available globally.

Search targets include:

Projects

Certificates

Achievements

Skills

Tech Stack

Search should be fast.

Results should appear immediately.

Search should not require pressing Enter.

Empty search returns all items.

---

# Main Content Area

The content area acts as the Explorer viewing pane.

Every page follows the same visual language.

Large consistent spacing.

Readable typography.

No unnecessary visual noise.

---

# Home Page

The Home page combines:

About Me

Experiences

Skills

Tech Stack

These sections should feel like opening one folder containing multiple files.

Avoid creating multiple routes for these subsections.

---

# Projects Page

Projects are displayed as a modern grid.

Each project appears similar to a folder card.

Each card includes:

* Thumbnail
* Project Name
* Short Description
* Tech Stack
* Status

Hover behavior should be subtle.

Clicking a card opens the project details.

---

# Project Detail

Project detail page should emphasize clarity.

Content order:

Project Header

↓

Thumbnail

↓

Description

↓

Features

↓

Technology Stack

↓

Role

↓

Status

↓

Demo Button

↓

GitHub Button

Scrolling should feel natural.

Avoid overwhelming users with excessive information.

---

# Certificates

Display certificates using clean cards.

Each card contains:

Certificate

Issuer

Issue Date

Credential Link (if available)

Search should work here as well.

---

# Achievements

Achievements focus on competitions and accomplishments.

Cards contain:

Competition

Organizer

Year

Achievement

Optional documentation image

Avoid making this page feel identical to Projects.

---

# Contact

The Contact page should feel simple and trustworthy.

Include:

Email

GitHub

LinkedIn

Instagram (optional)

Resume / CV Download

No contact form.

External links should clearly indicate they open a new tab.

---

# Status Bar

The bottom status bar mimics Windows Explorer.

Display useful information only.

Example:

7 Projects

12 Certificates

5 Achievements

Do not overload the status bar.

---

# Theme Switching

Support:

Light Mode

Dark Mode

Theme changes should feel instant.

Remember user preference using Local Storage.

Both themes should receive equal design attention.

Dark mode is the default.

---

# Responsive Design

Desktop

Uses complete Explorer layout.

Tablet

Sidebar becomes collapsible.

Mobile

Sidebar becomes Drawer.

Explorer structure should remain recognizable.

Do not redesign the application for mobile.

Adapt it.

---

# Motion Guidelines

Animations should communicate state changes.

Examples:

Hover

Route transition

Drawer opening

Card appearance

Avoid:

Large parallax

3D animations

Particles

Heavy motion

Animation duration:

150–300 ms.

Use easing similar to Fluent Design.

---

# Accessibility

Support:

Keyboard navigation

Visible focus indicators

Semantic HTML

Proper heading hierarchy

ARIA where appropriate

Good color contrast

The interface should remain usable without a mouse.

---

# Empty States

Every searchable page should include an empty state.

Example:

No projects found.

Try another keyword.

Avoid blank screens.

---

# Loading States

Loading indicators should be subtle.

Prefer skeleton loading over spinners whenever appropriate.

Never block the interface unnecessarily.

---

# Error States

Unexpected errors should display friendly messages.

Do not expose technical details.

Provide a way to recover when possible.

---

# UX Principles

Every interface decision should follow these priorities.

1. Clarity
2. Familiarity
3. Consistency
4. Performance
5. Accessibility
6. Visual Beauty

If a feature makes the interface more confusing, remove it.

The user should immediately understand how to navigate without reading instructions.

The interface should feel like a polished desktop application rather than a typical marketing website.
