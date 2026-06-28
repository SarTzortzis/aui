# AUI

> **A modern Angular application platform for building business software faster.**

<p align="center">

Build consistent, production-ready business applications with reusable components, services, theming and infrastructure.

**Designed for real-world products, not isolated demos.**

</p>

---

## 🚀 Live Demo

**https://sartzortzis.github.io/aui/**

Explore the interactive playground showcasing the current components, themes and infrastructure.

---

# Why AUI?

AUI is **not** another Angular component library.

It is an application platform designed to eliminate repetitive work across business applications.

Instead of rebuilding the same infrastructure for every project, AUI provides a consistent foundation that allows new applications to focus almost entirely on business logic.

Typical applications include:

* Appointment & Reservation Systems
* Restaurant Management
* Barber Shop Management
* CRM Systems
* Inventory Management
* Staff Management
* Admin Panels
* AI Dashboards
* Internal Business Tools

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

* Standalone Components
* Signals
* `inject()`
* Modern Control Flow
* Latest Angular APIs

Legacy patterns are avoided unless compatibility requires them.

---

## Public API First

Developer experience always comes before implementation.

Consumers should write expressive code such as:

```ts
theme.toggle();

notification.success(...);

loading.track(...);

dialog.open(...);
```

Implementation details remain internal to the platform.

---

## Signal First

Application state is exposed through readonly Signals.

Example:

```ts
readonly theme = this._theme.asReadonly();
```

rather than mutable observables or public state.

---

## Design Token First

Visual decisions are never hardcoded.

Every component consumes design tokens for:

* Colors
* Typography
* Spacing
* Radius
* Shadows
* Transitions

Future token groups include:

* Motion
* Elevation
* Breakpoints
* Opacity
* Z-index

---

## Accessibility First

Accessibility is treated as a fundamental requirement.

Every component aims to support:

* Keyboard Navigation
* ARIA
* Focus Management
* Screen Readers

---

## Business Agnostic

AUI contains infrastructure—not business logic.

Components understand UI.

Applications understand domains.

For example:

* Button knows buttons.
* Dialog knows dialogs.
* DataGrid knows tables.

Applications know users, reservations, invoices and employees.

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

## Components

### Actions

* ✅ Button

### Forms

* ✅ Input
* ✅ Textarea
* ✅ Checkbox
* ✅ Switch
* ✅ Radio Group
* ✅ Select
* ✅ FormField

### Feedback

* ✅ Alert
* ✅ Badge
* ✅ Spinner
* ✅ Toast Notifications

### Layout

* ✅ Card
* ✅ Divider

### Display

* ✅ Icon

### Overlays

* ✅ Dialog
* ✅ Loading Overlay

### Data

* ✅ Initial DataGrid

---

## Infrastructure

* ✅ Theme System
* ✅ Design Tokens
* ✅ ThemeService
* ✅ StorageService
* ✅ NotificationService
* ✅ LoadingService
* ✅ Base ControlValueAccessor
* ✅ Click Outside Directive
* ✅ Interactive Playground

---

# Theme System

The platform uses a token-driven theme architecture.

The default theme is represented by `:root`.

Dark mode overrides only the variables that differ.

This approach makes future themes inexpensive to create while keeping maintenance low.

---

# Development Workflow

Every feature follows the same lifecycle.

1. API Design
2. Accessibility
3. Implementation
4. Playground Integration
5. Documentation
6. Refactoring

The public API is always considered before internal implementation.

---

# Roadmap

## DataGrid Evolution

The DataGrid is currently the primary focus of development.

Planned capabilities include:

* Client-side Sorting
* Filtering
* Pagination
* Row Selection
* Sticky Headers
* Loading States
* Column Templates
* Value Formatters
* Responsive Columns
* Server-side Mode
* Column Visibility
* Column Resizing

The DataGrid is intended to become the flagship component of AUI.

---

## Future Components

High-priority additions include:

* Stack
* HStack
* VStack
* Toolbar
* Drawer
* Tabs
* Search Input
* Empty State
* Statistic Card
* Confirm Dialog
* Page Header

---

# Long-Term Vision

The ambition of AUI is not to compete with Angular Material.

Its goal is to become the internal platform powering an ecosystem of business software.

As the platform matures, new applications should require little more than implementing domain-specific functionality while relying on AUI for infrastructure, theming, forms, dialogs, tables, notifications and reusable UI patterns.

Every production project contributes back to the platform.

AUI grows through experience—not assumptions.
