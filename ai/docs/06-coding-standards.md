# Coding Standards

## Purpose
- This document defines the coding standards for the project.
- All generated code must follow these conventions.
- Consistency is more important than personal preference.
- Whenever implementation choices are unclear, prioritize readability.
---

# Core Philosophy
This project should look like it was written by an experienced developer working in a professional team.
The code should be:
* Clean
* Predictable
* Readable
* Maintainable
* Consistent
Avoid writing code that is unnecessarily clever.
---

# General Rules
Always prefer:
Simple solutions
↓
Readable code
↓
Reusable components
↓
Performance optimization

Never reverse this priority.
---

# React Style

Always use:

Functional Components

React Hooks

ES Modules

Arrow Functions for components

Do not use:

Class Components

Legacy React APIs

Deprecated patterns

---

# Component Rules

Each component should have a single responsibility.

If a component begins handling multiple unrelated concerns, split it.

Recommended maximum size:

* ~200 lines per component
* Hard limit: 300 lines

If a component exceeds this without good reason, refactor it.

---

# Naming Convention

Components:

PascalCase

Example:

ProjectCard.jsx

Variables:

camelCase

Functions:

camelCase

Constants:

UPPER_SNAKE_CASE (global constants)

JSON properties:

camelCase

CSS utility classes:

Tailwind only

---

# File Naming

React Components:

PascalCase

Hooks:

useSomething.js

Utilities:

camelCase.js

JSON:

kebab-case.json

Images:

kebab-case.webp

---

# Folder Naming

Folders should use:

camelCase

or

lowercase

Be consistent.

Avoid spaces.

Avoid inconsistent capitalization.

---

# Imports

Import order:

1. React
2. Third-party libraries
3. Internal modules
4. Components
5. Hooks
6. Utilities
7. Assets
8. Styles

Separate logical groups with one empty line.

Remove unused imports immediately.

---

# Props

Keep props explicit.

Good:

```jsx
<ProjectCard
  title={title}
  image={image}
  status={status}
/>
```

Avoid:

```jsx
<ProjectCard {...project} />
```

unless there is a strong justification.

Component APIs should remain easy to understand.

---

# State Management

Prefer the smallest possible state.

Store only information that actually changes.

Avoid duplicated state.

Avoid storing derived values.

Compute derived values instead.

---

# Effects

Every useEffect must have a clear purpose.

Do not use useEffect simply because "React needs it."

Before writing useEffect, ask:

Can this be calculated directly?

Can this be moved elsewhere?

Can it be avoided?

---

# Memoization

Only use:

useMemo

useCallback

React.memo

when measurable performance benefits exist.

Do not optimize prematurely.

---

# Event Handlers

Use descriptive names.

Examples:

handleSearch()

handleProjectClick()

handleThemeToggle()

Avoid generic names like:

click()

test()

run()

---

# Conditional Rendering

Prefer early returns.

Keep JSX readable.

Avoid deeply nested ternary operators.

Example:

Good

```jsx
if (!projects.length) {
    return <EmptyState />;
}
```

Instead of nesting multiple ternaries.

---

# Mapping Lists

Always use stable keys.

Never use array index as key unless the list is completely static.

Preferred:

project.id

---

# Comments

Write code that explains itself.

Comments should explain:

Why

not

What

Avoid obvious comments.

Bad:

```js
// Increment counter
counter++;
```

Good:

```js
// Skip boot animation after the user's first visit.
```

---

# Functions

Functions should be:

Small

Focused

Predictable

Avoid long functions with multiple responsibilities.

---

# Utility Functions

Pure functions belong in:

utils/

Avoid embedding reusable logic inside components.

---

# Error Handling

Handle errors gracefully.

Never leave empty catch blocks.

Provide meaningful fallback behavior.

Do not expose stack traces to users.

---

# Accessibility

Interactive elements must support:

Keyboard navigation

ARIA labels when appropriate

Visible focus state

Semantic HTML

Buttons should always use:

<button>

instead of clickable divs.

---

# Images

Always include:

Meaningful alt text

Lazy loading where appropriate

Optimized formats

Avoid oversized images.

---

# Styling

Use:

Tailwind CSS

Do not write inline styles unless absolutely necessary.

Avoid duplicated utility classes by extracting reusable UI components.

---

# Responsive Design

Every component should work on:

Desktop

Tablet

Mobile

Responsiveness is required from the first implementation.

Do not postpone mobile support.

---

# Performance

Avoid:

Unnecessary re-renders

Large component trees

Duplicate rendering

Heavy animations

Unused dependencies

Only optimize where necessary.

---

# Search

Search should:

Ignore case

Handle empty queries

Return predictable results

Remain fast even as data grows

---

# Routing

Every route must have:

Valid title

Breadcrumb support

404 handling

Unknown project handling

Avoid broken navigation.

---

# Theme Support

Every new component must support:

Dark Mode

Light Mode

Never hardcode colors.

Always use the design system.

---

# Animation Rules

Animations should:

Support usability

Remain subtle

Respect reduced-motion preferences

Avoid excessive motion.

---

# Maintainability

Before writing code, ask:

Can another developer understand this in one minute?

If the answer is no, simplify it.

---

# Code Review Checklist

Before considering any feature complete, verify:

✓ No ESLint errors

✓ No unused imports

✓ No unused variables

✓ No duplicated code

✓ Responsive layout

✓ Accessible interactions

✓ Proper component separation

✓ Consistent naming

✓ Theme compatibility

✓ Clean folder organization

✓ JSON-driven content

✓ Performance remains excellent

---

# Definition of Done

A feature is only considered complete when:

* It works correctly.
* It follows the design system.
* It follows the architecture.
* It follows these coding standards.
* It is responsive.
* It supports both themes.
* It is accessible.
* It does not introduce unnecessary complexity.
* Another developer could continue the project without confusion.

---

# Guiding Principle

The final codebase should feel handcrafted rather than AI-generated.

Every file should have a clear purpose.

Every component should be understandable.

Every abstraction should solve a real problem.

When in doubt, choose the simpler implementation.
