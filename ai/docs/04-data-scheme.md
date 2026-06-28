# Data Schema

## Purpose

This document defines every data source used by the portfolio.

The application must be fully data-driven.

Every page should render its content from JSON files.

React components should never contain hardcoded portfolio content.

Whenever possible, updating the portfolio should only require editing JSON files.

---

# General Principles

Every dataset should:

* Be human-readable
* Be easy to maintain
* Follow a consistent naming convention
* Use camelCase for property names
* Be independent from UI implementation

Avoid deeply nested objects unless necessary.

---

# Directory Structure

```text
src/
├── data/
│   ├── profile.json
│   ├── experiences.json
│   ├── skills.json
│   ├── tech-stack.json
│   ├── projects.json
│   ├── certificates.json
│   ├── achievements.json
│   ├── contacts.json
│   └── settings.json
```

Each file is responsible for one domain only.

---

# profile.json

Contains personal information displayed on the Home page.

Suggested structure:

* fullName
* professionalTitle
* secondaryTitle
* location
* email
* shortBio
* longBio
* profileImage
* availabilityStatus

Do not include duplicated information from other JSON files.

---

# experiences.json

Contains education, internships, organizations, freelance work, and professional experiences.

Each item should contain:

* id
* title
* organization
* type
* startDate
* endDate
* location
* description
* technologies
* current

Example types:

* Education
* Internship
* Freelance
* Organization
* Competition
* Volunteer

---

# skills.json

Contains all professional skills.

Each item should contain:

* id
* name
* category
* icon
* level

Example categories:

* Frontend
* Backend
* Database
* DevOps
* Programming Language
* Tools
* Soft Skills

Avoid percentage values.

Instead use descriptive levels.

Example:

* Beginner
* Intermediate
* Advanced

---

# tech-stack.json

Contains technologies used throughout projects.

Each item should contain:

* id
* name
* category
* icon
* officialWebsite

Example categories:

* Framework
* Library
* Runtime
* Database
* Cloud
* Version Control
* Design
* Deployment
* Operating System

---

# projects.json

This is the most important dataset.

Each project should contain:

* id
* slug
* title
* shortDescription
* description
* thumbnail
* technologies
* features
* githubUrl
* demoUrl
* role
* status
* featured

Status values:

* Finished
* Ongoing
* Archived

Featured determines whether the project appears in featured sections.

Slug is used for routing.

---

# certificates.json

Each certificate contains:

* id
* title
* issuer
* issueDate
* credentialUrl
* image

Credential URL is optional.

---

# achievements.json

Contains competitions and accomplishments.

Each item:

* id
* title
* organizer
* year
* achievement
* description
* image

Examples:

* 1st Place
* Finalist
* Participant
* Top 10

---

# contacts.json

Contains every public contact.

Suggested structure:

* email
* github
* linkedin
* instagram
* portfolio
* resumeUrl

Only include public information.

---

# settings.json

Contains global application configuration.

Suggested properties:

* portfolioTitle
* defaultTheme
* enableBootAnimation
* enableSearch
* enableThemeToggle

This file should allow future configuration without changing React code.

---

# Image Assets

Images should not be embedded inside JSON.

Store only relative paths.

Example:

```text
/assets/images/projects/project-name.webp
```

Use optimized formats whenever possible.

Preferred order:

1. AVIF
2. WebP
3. PNG
4. JPG

---

# Naming Convention

JSON files:

kebab-case

Properties:

camelCase

IDs:

lowercase-hyphen

Example:

smart-farm

Never use spaces in IDs.

---

# Search Strategy

The global search should index the following fields.

Projects:

* title
* technologies
* features
* description

Certificates:

* title
* issuer

Achievements:

* title
* organizer
* achievement

Skills:

* name
* category

Tech Stack:

* name
* category

Search should be case-insensitive.

---

# Sorting

Projects

Featured projects appear first.

Then sort by newest.

Certificates

Newest first.

Achievements

Newest first.

Experiences

Newest first.

Skills

Sort alphabetically within each category.

---

# Extensibility

The schema should support future additions without breaking existing components.

Adding a new property should not require refactoring the application.

Components should safely ignore unused properties.

---

# Data Ownership

Each React page should only consume the data it needs.

Do not load every JSON file globally.

Import only the required dataset.

---

# Validation Rules

Every dataset should maintain:

* Unique IDs
* Required properties
* Consistent naming
* Valid URLs
* Existing image paths

Invalid data should fail gracefully without crashing the application.

---

# Future Scalability

Although the current application uses local JSON files, the schema should be designed so it can later be replaced with a REST API or CMS with minimal code changes.

Business logic should not depend on the storage method.

Components should consume structured data regardless of whether it comes from JSON or an API.

---

# Guiding Principle

Content should be separated completely from presentation.

Changing portfolio content should never require modifying React components.

Changing React components should never require modifying the data structure unless introducing a genuinely new feature.
