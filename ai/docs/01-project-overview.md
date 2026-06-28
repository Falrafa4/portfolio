# Project Overview

## Project Name

Windows Explorer Portfolio

---

# Vision

Build a memorable personal portfolio website inspired by the Windows 11 File Explorer experience.

The website should not feel like a typical developer portfolio. Instead, visitors should feel as if they are exploring a modern operating system interface where every folder represents part of the developer's professional profile.

The interface should borrow visual inspiration from Windows 11 while maintaining a modern, clean, and professional appearance suitable for recruiters and technical audiences.

The project must prioritize usability, maintainability, accessibility, and performance over excessive visual effects.

---

# Primary Goal

The website exists to create professional opportunities.

Priority order of target audience:

1. Recruiters
2. HR Professionals
3. Competition Judges
4. Potential Clients
5. Project Collaborators
6. Lecturers & Teachers
7. Other Visitors

The portfolio should communicate professionalism, technical ability, and software engineering mindset rather than simply showcasing UI skills.

---

# Personal Branding

Professional Title

> Full Stack Web Developer

Secondary Title

> DevOps Enthusiast (Currently Learning)

The overall tone should be:

* Professional
* Clean
* Modern
* Confident
* Friendly but not overly casual

Avoid playful or childish elements.

---

# Design Philosophy

The website is **inspired** by Windows 11 File Explorer.

It is NOT intended to become an exact clone.

Approximate inspiration level:

70% Windows Explorer

30% Original Modern Portfolio

Every design decision should answer this question:

> "Would this make sense inside a modern File Explorer?"

If not, reconsider the design.

---

# User Experience Goals

Visitors should immediately understand how to navigate the website without reading instructions.

Navigation should feel natural.

The experience should feel:

* Familiar
* Smooth
* Lightweight
* Professional
* Fast

Avoid unnecessary animations.

Avoid overwhelming visual effects.

Performance is more important than decorative animations.

---

# Boot Experience

On the first visit only:

Boot Animation

↓

Welcome Screen

↓

Open Portfolio Explorer

Boot duration should not exceed approximately 2 seconds.

Returning visitors should bypass the boot animation automatically using local storage.

---

# Main Navigation

The website consists of the following main sections.

Home

Contains:

* About Me
* Experiences
* Skills
* Tech Stack

Projects

Certificates

Achievements

Contact

The Contact page also contains Resume/CV download links.

Navigation between sections should behave like opening folders inside File Explorer while remaining a React Single Page Application.

---

# Project Showcase

Projects are one of the highest-priority sections.

Each project contains:

* Thumbnail
* Description
* Features
* Technology Stack
* Role
* Demo URL
* GitHub URL
* Status

All project information must come from mock JSON data.

No backend.

No database.

---

# Technical Principles

This project intentionally avoids unnecessary complexity.

Preferred technologies:

* React
* React Router
* Tailwind CSS
* Framer Motion
* Mock JSON

The project must NOT include:

* Backend
* Database
* Redux
* UI Frameworks (Material UI, Ant Design, Chakra UI, etc.)
* Over-engineered architecture
* Unnecessary custom hooks

The codebase should remain easy to read for junior-to-intermediate developers.

---

# Performance Goals

Performance is a first-class feature.

Target:

* Lighthouse Performance ≥ 95
* Responsive on Desktop, Tablet, Mobile
* Fast initial loading
* Lightweight animations
* Optimized images
* Minimal JavaScript bundle
* Lazy loading where appropriate

Never sacrifice performance for visual effects.

---

# Maintainability

The website should be maintainable for many years.

Adding a new project, certificate, achievement, or skill should only require editing JSON files.

React components should not require modification for content updates.

---

# Success Criteria

The project is considered successful if:

* Recruiters can understand the developer within a few minutes.
* Navigation feels intuitive.
* The Windows Explorer inspiration is immediately recognizable.
* Performance remains excellent.
* The codebase is clean and maintainable.
* The UI appears unique without becoming distracting.
* The project demonstrates software engineering quality instead of only visual design.

---

# Out of Scope

The following features are intentionally excluded.

* Authentication
* Dashboard
* CMS
* Backend API
* Database
* Blog System
* Admin Panel
* User Accounts
* Server-side Rendering
* Real-time Features

Keeping the project focused is preferred over adding unnecessary functionality.

---

# Guiding Principle

Whenever implementation decisions become ambiguous, prioritize:

Professionalism

↓

Maintainability

↓

Performance

↓

User Experience

↓

Visual Aesthetics

A beautiful website that is slow or difficult to maintain is considered a failure.

A fast, maintainable, and professional website with thoughtful design is considered a success.
