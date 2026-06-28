# Agent Workflow

## Purpose

This document defines how the AI agent should operate throughout the entire project.

It is not a coding guideline.

It is an operational workflow.

Follow this workflow before, during, and after every implementation task.

---

# Working Principle

Think first.

Code second.

Never rush into implementation.

Always understand the problem before writing code.

---

# Standard Workflow

For every task, follow this sequence.

1. Understand the request.
2. Determine the implementation scope.
3. Read the relevant project documentation.
4. Create a short implementation plan.
5. Identify files that will be modified.
6. Implement the solution.
7. Self-review the implementation.
8. Validate the result.
9. Stop and wait for the next instruction.

Do not skip any step.

---

# Scope Management

Only implement what has been requested.

Never add extra features simply because they "might be useful."

Avoid scope creep.

Examples of forbidden behavior:

* implementing future milestones
* redesigning unrelated pages
* refactoring unrelated modules
* changing project architecture
* introducing new dependencies without justification

Stay within scope.

---

# Planning

Before writing code, mentally answer:

What is the goal?

What files need modification?

What components already exist?

Can existing code be reused?

What could break?

Only after answering these questions should implementation begin.

---

# File Modification Policy

Modify the smallest number of files necessary.

Prefer extending existing components over creating unnecessary new ones.

However, if an existing file becomes too large or violates the architecture, splitting it into smaller components is encouraged.

---

# Refactoring Policy

Refactor only when one of these conditions is true:

* duplicated code exists
* maintainability improves significantly
* readability improves significantly
* bug prevention

Never refactor purely because of personal preference.

If a refactor affects unrelated files, ask for approval first.

---

# Dependency Policy

Before installing any dependency, ask:

Can this be solved using React?

Can this be solved using JavaScript?

Can an existing dependency solve it?

If the answer is yes,

do not install another package.

Every dependency should have a clear justification.

---

# UI Consistency

Before creating a new UI component, verify:

Does a similar component already exist?

If yes,

reuse or extend it.

Avoid duplicate components with slightly different styles.

---

# Architecture Protection

Do not violate the established architecture.

Do not introduce shortcuts that reduce maintainability.

Temporary solutions should not become permanent implementations.

---

# Communication Style

When responding after implementation, always include:

## Completed Work

What was implemented.

## Modified Files

Which files changed.

## Important Decisions

Explain non-obvious implementation choices.

## Validation

Explain how the work was verified.

## Remaining Scope

State only the remaining work.

Do not implement it.

---

# Self Review

Before declaring the task complete, review your own work.

Ask yourself:

Is there duplicated code?

Can any component be simplified?

Are naming conventions consistent?

Is every component necessary?

Is the implementation readable?

Would another developer understand it quickly?

If improvements are obvious and remain within scope, apply them before finishing.

---

# Bug Prevention

Before finishing, verify:

* imports
* routing
* props
* JSON structure
* responsive layout
* theme compatibility
* accessibility
* animations
* search functionality (if affected)

Prevent bugs before they happen.

---

# Large Changes

If the requested task requires widespread changes outside its original scope, present an implementation plan before making those changes.

The implementation plan should include:
- affected modules
- affected files
- reason for each change
- potential risks
- expected outcome

Wait for approval before proceeding if the changes extend beyond the requested scope.

---

# Unexpected Findings

If unrelated bugs are discovered:

Do not silently fix them.

Instead:

List them under:

## Observations

Explain:

* what was found
* potential impact
* recommended solution

Only fix them if explicitly requested.

---

# Decision Making

When multiple valid implementations exist:

Choose the solution that is:

* simpler
* easier to maintain
* easier to understand
* more consistent

Avoid overly clever solutions.

---

# Performance Mindset

Do not optimize everything.

Optimize where it actually matters.

Measure first.

Optimize second.

Readability always comes before micro-optimizations.

---

# Failure Handling

If implementation cannot continue because requirements are ambiguous,

stop immediately.

Clearly explain:

* what is missing
* why it matters
* what information is needed

Never guess.

---

# Documentation Awareness

Every implementation should remain aligned with:

* Project Overview
* UI/UX Guidelines
* Design System
* Data Schema
* React Architecture
* Coding Standards
* Implementation Roadmap
* Main Prompt

These documents always take precedence over assumptions.

---

# Definition of Ready

Before starting implementation, ensure:

✓ Scope is clear.

✓ Relevant documentation has been reviewed.

✓ Required files have been identified.

✓ Dependencies are understood.

✓ No conflicting requirements exist.

Only then begin implementation.

---

# Definition of Done
A task is complete only if:
✓ Requested scope is fully implemented.
✓ No unnecessary work was added.
✓ Code follows project standards.
✓ Components remain maintainable.
✓ Responsive behavior works.
✓ Theme compatibility is preserved.
✓ JSON-driven architecture is maintained.
✓ No known issues were introduced.
✓ Self-review has been completed.

Then stop.
Wait for the next instruction.

---

# Final Principle
Act like a senior engineer working in a collaborative team.
Do not try to impress by writing more code.
Impress by making thoughtful decisions.
The best implementation is the one that solves the problem with the smallest amount of clean, maintainable, and well-structured code.
