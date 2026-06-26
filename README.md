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
- Developer experience

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

The library grows organically from real business needs rather than trying to replicate existing UI frameworks.

---

# Philosophy

AUI follows one simple rule:

> **If it saves time in the next 10 projects, it belongs in AUI.**

Otherwise it belongs in the application.

This principle keeps the platform focused on leverage rather than feature count.

---

# Engineering Principles

These principles should be followed throughout the entire project.

## Modern Angular

The project targets modern Angular.

Whenever possible prefer:

- Standalone Components
- Signals
- inject()
- Modern Control Flow
- New Angular APIs

Avoid legacy Angular patterns unless required.

---

## Signal First

Application state should be exposed through readonly Signals.

Services expose:

- readonly state
- public methods

Example:

```ts
readonly theme = this._theme.asReadonly();

setTheme(...)
toggle()
```

instead of:

```ts
isDark();
isLight();
BehaviorSubject;
Observable;
```

---

## Public API First

Every feature starts with designing the public API before implementation.

Example:

```ts
theme.setTheme("dark");

theme.toggle();

notification.success(...);

dialog.open(...);
```

Consumers should express intent.

Implementation details remain inside AUI.

---

## Token First

Components never hardcode design values.

Everything should use design tokens.

Current token groups:

- Colors
- Typography
- Radius
- Shadows
- Spacing
- Transitions

Future additions:

- Z-index
- Opacity
- Breakpoints
- Elevation
- Motion

---

## Accessibility First

Accessibility is not an afterthought.

Every component should include:

- Keyboard Navigation
- ARIA
- Focus Management
- Screen Reader Support

---

## Consistency

All services follow the same layout.

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
// Private methods
//------------------------------------------
```

All components expose a predictable API.

---

## Business Agnostic

AUI never contains business logic.

Example:

Button knows buttons.

Dialog knows dialogs.

Table knows tables.

Applications know users, invoices and appointments.

---

# Current Architecture

```
components/

    actions/
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

---

## Feedback

- ✅ Alert
- ✅ Badge
- ✅ Spinner

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

---

# Current Infrastructure

## Implemented

- Design Tokens
- Theme System
- Base ControlValueAccessor
- Click Outside Directive
- Shared Utilities
- Shared Models
- Playground

---

## Recently Added

### ThemeService

Implemented.

Responsibilities:

- Theme switching
- Theme persistence
- Expose current theme using Signals

---

### StorageService

Implemented.

Responsibilities:

- Local Storage abstraction
- Generic typed API
- Future replacement with IndexedDB / Encrypted Storage

---

# Theme Architecture

The theme system has been redesigned.

## Default Theme

The default theme is represented by `:root`.

There is **no need for a separate Light Theme**.

```
:root
```

contains all default values.

---

## Dark Theme

Dark theme only overrides variables.

```
[data-ui-theme="dark"]
```

contains only values that differ from the default theme.

---

## Future Themes

New themes should only override values.

Examples:

- Corporate
- Restaurant
- Barber
- High Contrast
- Midnight

No theme should redefine the complete token set.

---

# Theme Folder Structure

```
themes/

    dark-theme.scss

    tokens/

        colors/
        spacing/
        radius/
        typography/
        transitions/
        shadows/

    index.scss
```

---

# Current Known Issue

## Theme System

ThemeService correctly:

- updates `data-ui-theme`
- persists theme
- restores theme

A CSS issue was discovered where default variables are emitted more than once.

Generated CSS currently contains:

```
:root

[data-ui-theme="dark"]

:root
```

The second `:root` overrides the dark theme.

Next session should:

- eliminate duplicated `:root` declarations
- remove obsolete `light-theme.scss`
- ensure default tokens are emitted exactly once
- verify generated CSS order

This is the current blocker before continuing development.

---

# Development Workflow

Every feature follows the same process.

1. API Design
2. Folder Structure
3. Accessibility
4. Implementation
5. Playground
6. Documentation
7. Refactoring

No feature is considered complete until all steps are finished.

---

# Roadmap

## Infrastructure

- ✅ ThemeService
- ✅ StorageService
- ⬜ NotificationService
- ⬜ DialogService
- ⬜ LoadingService

---

## Form System

- ⬜ FormField
- ⬜ Validation Messages
- ⬜ Helper Text
- ⬜ Required Indicator

---

## Feedback

- ⬜ Toast
- ⬜ Progress Bar
- ⬜ Skeleton

---

## Data

- ⬜ DataGrid

This will become the flagship component of AUI.

Features:

- Pagination
- Sorting
- Filtering
- Selection
- Empty State
- Loading State
- Actions
- Responsive Columns

---

## Business Components

Built only after completing the infrastructure.

Examples:

- Appointment Calendar
- Dashboard Widgets
- CRUD Generator
- Permission Matrix
- Charts
- Analytics
- User Picker

---

# Long-Term Vision

The goal is not to compete with Angular Material.

The goal is to build an internal application platform capable of generating complete business systems rapidly.

Eventually new projects should require little more than implementing business logic because authentication, layouts, forms, dialogs, notifications, themes, tables and dashboards already exist inside AUI.

Every real-world application should improve the platform.

The platform should never grow from assumptions.

It should grow from experience.
