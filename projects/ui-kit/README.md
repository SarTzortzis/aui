# AUI

> **The internal application platform powering all future software products.**

---

# Vision

AUI is **not** another Angular component library.

It is the foundation of a future software company.

Every component, service and utility exists because it removes duplicated work across future applications.

The objective is to maximize:

- Development speed
- Code reuse
- Consistency
- Maintainability
- Developer Experience

Future business applications such as:

- Appointment & Reservation Systems
- Restaurant Management
- Barber Shop Management
- CRM Systems
- Staff Management
- Inventory Systems
- AI Dashboards
- Admin Panels
- Internal Business Tools

should all be built on top of AUI.

The library grows organically from solving real business problems rather than trying to replicate existing UI frameworks.

---

# Philosophy

AUI follows one simple rule:

> **If it saves time in the next 10 projects, it belongs in AUI.**

Everything else belongs in the application.

Every real-world application should improve AUI.

The platform grows from experience—not assumptions.

---

# Engineering Principles

## Modern Angular

Whenever possible prefer:

- Standalone Components
- Signals
- `inject()`
- Modern Control Flow
- New Angular APIs

Avoid legacy Angular patterns.

---

## Signal First

Application state is exposed through readonly Signals.

Example:

```ts
readonly theme = this._theme.asReadonly();

setTheme(...)
toggle()
```

---

## Public API First

Every feature starts by designing the developer experience before writing implementation.

Example:

```ts
theme.toggle();

notification.success(...);

loading.track(...);

dialog.open(...);
```

Consumers should express intent.

Implementation details remain inside AUI.

---

## Token First

Components never hardcode design values.

Everything comes from design tokens.

Current token groups:

- Colors
- Typography
- Radius
- Shadows
- Spacing
- Transitions

Future additions:

- Motion
- Elevation
- Breakpoints
- Opacity
- Z-Index

---

## Accessibility First

Accessibility is mandatory.

Every component should support:

- Keyboard Navigation
- ARIA
- Focus Management
- Screen Readers

---

## Business Agnostic

AUI never contains business logic.

Examples:

- Button knows buttons.
- Dialog knows dialogs.
- Table knows tables.

Applications know:

- Users
- Invoices
- Reservations
- Employees

---

## Consistency

All services follow the same structure.

```ts
//------------------------------------------
// Constants
//------------------------------------------

//------------------------------------------
// State
//------------------------------------------

//------------------------------------------
// Constructor
//------------------------------------------

//------------------------------------------
// Public API
//------------------------------------------

//------------------------------------------
// Private Methods
//------------------------------------------
```

---

# Current Architecture

```text
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

# Current Components

## Actions

- ✅ Button

---

## Forms

- ✅ Input
- ✅ Textarea
- ✅ Checkbox
- ✅ Switch
- ✅ Radio Group
- ✅ Select
- ✅ FormField

---

## Feedback

- ✅ Alert
- ✅ Badge
- ✅ Spinner
- ✅ Toast Container

---

## Layout

- ✅ Card
- ✅ Divider

---

## Display

- ✅ Icon

---

## Overlays

- ✅ Dialog
- ✅ Loading Overlay

---

## Data

- ✅ DataGrid (Initial Version)

---

# Current Infrastructure

Implemented

- ✅ Design Tokens
- ✅ Theme System
- ✅ ThemeService
- ✅ StorageService
- ✅ NotificationService
- ✅ LoadingService
- ✅ Base ControlValueAccessor
- ✅ Click Outside Directive
- ✅ Playground

---

# Theme Architecture

## Default Theme

The default theme is represented by `:root`.

There is **no Light Theme file**.

```scss
:root {
  // Default theme
}
```

---

## Dark Theme

Dark theme only overrides variables.

```scss
[data-ui-theme="dark"] {
  // Overrides only
}
```

---

## Folder Structure

```text
themes/

    index.scss

    dark-theme.scss

    tokens/

        colors/
        spacing/
        radius/
        typography/
        shadows/
        transitions/
```

---

# CSS Conventions

AUI now follows these conventions.

## Global

Global reset should define:

```scss
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

## Component Base

Every component starts with:

```scss
:host {
  display: block;
}
```

---

## Full Width Components

Only components that naturally occupy available space should declare:

```scss
:host {
  display: block;
  width: 100%;
}
```

Examples:

- Input
- Textarea
- Select
- FormField
- DataGrid

Components such as:

- Button
- Badge
- Spinner
- Icon

should **not** force full width.

---

## Playground

The playground is considered **a consumer application**, not part of AUI.

Responsibilities:

- Showcase components
- Test components
- Demonstrate usage

It should **never** override component styling.

It should only provide layout.

---

# Development Workflow

Every feature follows the same lifecycle.

1. API Design
2. Folder Structure
3. Accessibility
4. Implementation
5. Playground
6. Documentation
7. Refactoring

During the early startup phase, documentation is intentionally deferred in favor of rapidly building reusable infrastructure.

---

# Playground

The playground has been reorganized into feature categories.

Current sections:

- Actions
- Forms
- Feedback
- Data
- Overlays

Its goal is to act as a component showcase rather than a demo application.

---

# Current Roadmap

## Infrastructure

- ✅ ThemeService
- ✅ StorageService
- ✅ NotificationService
- ✅ LoadingService
- ⬜ DialogService (Service API)

---

## Forms

Implemented

- ✅ FormField

Future

- Validation Messages
- Helper Text Improvements
- Validation Summary

---

## Feedback

Implemented

- ✅ Toast Notifications

Future

- Skeleton
- Progress Bar

---

## Data

Implemented

- ✅ Initial DataGrid
- ✅ Typed `column()` helper
- ✅ Responsive layout
- ✅ Empty state

---

## Next Priority

The next development session focuses entirely on upgrading the DataGrid into a production-ready business component.

Planned features:

- Client-side sorting
- Column templates
- Cell templates
- Value formatters
- Row actions
- Selection
- Pagination
- Filtering
- Sticky headers
- Loading state
- Server-side mode
- Responsive columns
- Column visibility
- Column resizing

The DataGrid is intended to become the flagship component of AUI.

---

# Future Components

High-priority reusable components:

- Stack
- HStack
- VStack
- Toolbar
- Empty State
- Page Header
- Statistic Card
- Search Input
- Confirm Dialog
- Drawer
- Tabs

---

# Long-Term Vision

The goal is **not** to compete with Angular Material.

The goal is to build an internal application platform capable of rapidly producing business software.

Eventually, new projects should require little more than implementing business logic because themes, layouts, forms, dialogs, notifications, tables, dashboards and reusable infrastructure already exist inside AUI.

Every real-world project should improve the platform.

The platform should grow from **experience**, not assumptions.

---

# Current Progress (End of Phase 2 - Session 1)

## Completed

- ✅ Theme architecture finalized
- ✅ ThemeService
- ✅ StorageService
- ✅ FormField
- ✅ NotificationService
- ✅ Toast Container
- ✅ LoadingService
- ✅ Loading Overlay
- ✅ Initial DataGrid
- ✅ Typed `column()` helper
- ✅ Playground refactor
- ✅ Established CSS architecture conventions

---

# Next Session Context

The next session we should continue directly with the **DataGrid upgrade**.

No more infrastructure work for now.

The goal is to transform the DataGrid into a business-ready component capable of powering CRM systems, dashboards, reservation systems and admin panels.

This component is expected to become the flagship feature of AUI.
