# AUI

> **A modern Angular application platform for building business software faster.**

<p align="center">

Build consistent, production-ready business applications with reusable components, services, theming and infrastructure.

**Designed for real-world products, not isolated demos.**

</p>

---

# 🚀 Live Demo

**https://sartzortzis.github.io/aui/**

Explore the interactive playground showcasing the current components, themes and infrastructure.

---

# Why AUI?

AUI is **not** another Angular component library.

It is an application platform designed to eliminate repetitive work across business applications.

Instead of rebuilding the same infrastructure for every project, AUI provides a consistent foundation that allows new applications to focus almost entirely on business logic.

Typical applications include:

- Appointment & Reservation Systems
- Restaurant Management
- Barber Shop Management
- CRM Systems
- Inventory Management
- Staff Management
- Admin Panels
- AI Dashboards
- Internal Business Tools

The project grows from solving real business problems rather than attempting to replicate existing UI frameworks.

---

# Core Principles

## Build From Experience

Every reusable abstraction must first solve a real problem.

If a feature saves time across multiple projects, it belongs in AUI.

Otherwise, it belongs in the application.

---

## Modern Angular

AUI embraces modern Angular development.

Whenever possible the platform prefers:

- Standalone Components
- Signals
- `inject()`
- Modern Control Flow
- Latest Angular APIs

---

## Public API First

Developer experience always comes before implementation.

```ts
theme.toggle();

notification.success(...);

loading.track(...);

dialog.open(...);
```

---

## Signal First

Application state is exposed through readonly Signals whenever possible.

---

## Design Token First

Every visual decision is driven by design tokens.

Current token groups include:

- Colors
- Typography
- Radius
- Spacing
- Shadows
- Transitions

Future additions:

- Motion
- Elevation
- Opacity
- Breakpoints
- Z-index

---

## Accessibility First

Every reusable component is built with accessibility in mind.

- Keyboard navigation
- Focus management
- Screen readers
- ARIA

---

## Business Agnostic

AUI contains infrastructure—not business logic.

Applications understand domains.

AUI understands UI.

---

# Architecture

```
components/

    actions/
    data/
    display/
    feedback/
    forms/
    layout/
    overlays/

directives/

models/

services/

shared/

themes/
```

---

# Current Features

## Actions

- ✅ Button

## Forms

- ✅ Input
- ✅ Textarea
- ✅ Checkbox
- ✅ Switch
- ✅ Radio Group
- ✅ Select
- ✅ FormField

## Feedback

- ✅ Alert
- ✅ Badge
- ✅ Spinner
- ✅ Toast Notifications

## Layout

- ✅ Card
- ✅ Divider

## Display

- ✅ Icon

## Overlays

- ✅ Dialog
- ✅ Loading Overlay

## Data

### ✅ DataGrid

Current capabilities:

- Client-side Sorting
- Global Filtering
- Pagination
- Page Size Selector
- Row Selection
- Loading State
- Empty State
- No Results State
- Row Click
- Row Double Click
- Value Formatters
- CSV Export
- Row Actions

---

# Infrastructure

- Theme System
- Design Tokens
- ThemeService
- StorageService
- NotificationService
- LoadingService
- Base ControlValueAccessor
- ClickOutside Directive
- Interactive Playground

---

# Theme System

The platform uses a token-driven architecture.

The default theme lives in `:root`.

Dark mode overrides only the tokens that differ, making future themes inexpensive to create.

---

# Development Workflow

Every feature follows the same lifecycle.

1. Public API
2. Accessibility
3. Implementation
4. Playground
5. Documentation
6. Refactoring

---

# Roadmap

## DataGrid Phase 3

The remaining enterprise features are:

- Sticky Header
- Column Resizing
- Column Visibility
- Column Templates
- Responsive Columns
- Server-side Mode
- Virtual Scrolling
- Keyboard Navigation
- Custom Empty Templates
- Column Groups
- Tree Data
- Drag & Drop Columns
- Inline Editing

---

## Upcoming Components

High priority:

- Stack
- HStack
- VStack
- Toolbar
- Drawer
- Tabs
- Search Input
- Empty State Component
- Statistic Card
- Confirm Dialog
- Page Header

---

# Long-Term Vision

The goal of AUI is not to replace Angular Material.

The goal is to become the internal platform powering an ecosystem of business software.

Every production application strengthens the platform.

Every solved problem becomes reusable infrastructure.

Applications should spend their time implementing business logic—not rebuilding UI foundations.
