# React Architecture

## Purpose
- This document defines how the React application should be structured.
- The primary objective is to create a maintainable, scalable, and beginner-friendly architecture without introducing unnecessary complexity.
- Every architectural decision should prioritize readability over cleverness.

---

# Core Principles
The architecture should follow these principles:
* Single Responsibility Principle
* Component Reusability
* Separation of Concerns
* Simplicity First
* Performance Awareness
* Maintainability
Avoid creating abstractions before they are actually needed.

---

# Tech Stack

The application should use:
* React
* React Router
* Tailwind CSS
* Framer Motion
* Lucide React

Optional:
* clsx
* react-helmet-async

Do not introduce additional libraries unless they provide significant value.

---

# Project Structure
Recommended folder structure:
```text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── cards/
│   ├── sections/
│   └── common/
│
├── pages/
│   ├── Home/
│   ├── Projects/
│   ├── ProjectDetail/
│   ├── Certificates/
│   ├── Achievements/
│   └── Contact/
├── data/
├── hooks/
├── utils/
├── services/
├── routes/
├── layouts/
├── constants/
├── App.jsx
└── main.jsx
```
Each directory should have a clear responsibility.
---

# Component Philosophy
Components should be:
- Small
- Reusable
- Focused
- Easy to test
Avoid giant components containing multiple unrelated responsibilities.

Ideal component length:
Under 200 lines whenever practical.
---

# UI Components
The `components/ui` directory should contain generic components.
Examples:
* Button
* Input
* Badge
* Card
* Avatar
* Modal
* Divider
* Tooltip
These components should not contain business logic.
---

# Layout Components
Layout components define page structure.
Examples:
* ExplorerLayout
* Sidebar
* TitleBar
* Toolbar
* StatusBar
* Drawer
* MainContent
Layout components should not render portfolio data directly.
---

# Section Components
Section components organize page content.
Examples:
* AboutSection
* ExperienceSection
* SkillsSection
* TechStackSection
* FeaturedProjectsSection
Each section should receive data through props.
---

# Card Components
Dedicated card components improve consistency.
Examples:
* ProjectCard
* CertificateCard
* AchievementCard
* SkillCard
Avoid duplicating card layouts across pages.
---

# Common Components
Contains shared components.
Examples:
* SearchBar
* ThemeToggle
* Breadcrumb
* EmptyState
* LoadingSkeleton
* ErrorState
---

# Routing
Use React Router.
Every major folder inside the Explorer represents a route.
Example:
```text
/
/projects
/projects/:slug
/certificates
/achievements
/contact
```

The Home route contains:
About
Experiences
Skills
Tech Stack
Do not create separate routes for those sections.
---

# Route Loading
Major pages should use lazy loading.
Example:
React.lazy()
Suspense
This keeps the initial bundle small.
---

# Layout Strategy
Use one shared layout.
Example:
ExplorerLayout

Every page should render inside this layout.
Avoid duplicating navigation across pages.

---

# State Management
Do NOT use Redux.

Prefer:
Local component state
Context API (only if genuinely necessary)
Derived state
Memoization only when justified.
Avoid global state unless multiple unrelated components require it.
---

# Custom Hooks

Only create custom hooks when logic is reused.
Examples:
Good:
useTheme
useSearch

Bad:
useButton
useProjectCard

Do not wrap trivial logic inside custom hooks.
---

# Services
The services directory should remain lightweight.
Possible responsibilities:
* JSON data loading
* Search utilities
* Theme persistence
Avoid unnecessary service layers.
---

# Utilities
Contains pure helper functions.

Examples:
formatDate()
sortProjects()
filterSearch()
slugify()

Utilities should remain framework-independent whenever possible.
---

# Constants
Contains application constants.

Examples:
- Routes
- Theme keys
- Animation durations
- Status values

Avoid magic strings throughout the application.
---

# Data Flow
Preferred flow:
JSON
↓
Page
↓
Section
↓
Component
↓
UI Component

Avoid passing data through many unnecessary component levels.
---

# Props
- Props should remain explicit.
- Avoid passing entire objects when only a few values are required.
- Keep component APIs predictable.
---

# Search Architecture
- Global search should operate on JSON data.
- Filtering should happen in memory.
- No server communication.
- No unnecessary complexity.
---

# Theme Architecture
- Theme preference should be stored in Local Storage.
- React should initialize the preferred theme during application startup.
- Avoid flashes between themes.
---

# Motion Architecture
- Framer Motion should be used sparingly.
- Use it only for:
Page transitions
Drawer
Cards
Hover effects
- Avoid wrapping the entire application in unnecessary animations.
---

# Error Handling
Every page should gracefully handle:
- Empty data
- Missing images
- Invalid routes
- Unknown project slugs
Never allow the application to crash because of invalid JSON.
---

# Code Splitting
Lazy-load:
- Pages
- Heavy assets
- Future optional components
Avoid importing everything on startup.
---

# Performance Guidelines
Avoid unnecessary:
- Re-renders
- Memoization
- Effects
- Context usage
- Large component trees
Optimize only when needed.
Do not optimize prematurely.
---

# Accessibility
Interactive components should support:
- Keyboard navigation
- Focus states
- ARIA attributes where appropriate
- Semantic HTML
- Accessibility should be built into components from the beginning.
---

# Scalability
The architecture should allow future additions such as:
- Blog
- API integration
- CMS
- Authentication
Without requiring a complete rewrite.
However, these features should not be implemented now.
---

# Architecture Principles
When making implementation decisions, follow this order:
1. Readability
2. Maintainability
3. Reusability
4. Performance
5. Scalability

Never sacrifice readability simply to create a more "advanced" architecture.
A clean and understandable project is preferred over an unnecessarily sophisticated one.
