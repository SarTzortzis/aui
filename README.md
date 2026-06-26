# Aui

A modern, reusable Angular UI component library built with **standalone components**, **design tokens**, and **ControlValueAccessor** support.

The goal of this project is to create a lightweight design system that can be reused across multiple personal and commercial applications such as:

- Appointment & reservation systems
- Restaurant websites
- Barber shop management
- Staff management dashboards
- Admin panels
- CRM systems
- Internal business tools

Rather than depending on large third-party UI frameworks, this library aims to provide a clean, maintainable, and extensible foundation tailored to my own projects.

---

# Features

## ✅ Standalone Components

All components are Angular Standalone Components.

## ✅ Design Tokens

The library is fully token-based using CSS Custom Properties.

Current token categories include:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Transitions

This makes theming and future customization straightforward.

## ✅ Theme Support

The library supports multiple themes using CSS variables.

Current themes:

- Light
- Dark

Additional themes (Corporate, High Contrast, etc.) can easily be introduced without modifying component implementations.

## ✅ Forms

All form controls implement Angular's `ControlValueAccessor`, making them compatible with:

- Reactive Forms
- Template-driven Forms
- Two-way binding (`value` / `valueChange`)

A shared `BaseControlValueAccessor` removes duplicated logic across all form components.

---

# Current Components

## Actions

- Button

## Forms

- Input
- Textarea
- Checkbox
- Switch
- Radio Group
- Select
- Dialog

## Feedback

- Alert
- Badge
- Spinner

## Layout

- Card
- Divider

## Display

- Icon

---

# Infrastructure

- Design Tokens
- Light / Dark Theme
- Base ControlValueAccessor
- Click Outside Directive
- Shared Models
- Shared Utilities

---

# Architecture

The project follows a modular structure.

```text
components/
├── actions/
├── forms/
├── layout/
├── display/
├── feedback/
└── overlays/

directives/

models/

shared/

themes/
├── light.scss
├── dark.scss
└── tokens/
```

The focus is on:

- Reusability
- Consistency
- Accessibility
- Maintainability
- Extensibility

---

# Development

The repository contains two Angular projects.

## ui-kit

The reusable component library.

## playground

A playground application used for:

- Developing components
- Manual testing
- API experimentation
- Visual showcase

It serves a similar purpose to Storybook while keeping the setup lightweight.

---

# Design Principles

The library is built around a few core principles.

### Composition over Configuration

Components should be composed together rather than exposing dozens of inputs.

### Consistent APIs

All form controls expose a consistent API:

- `value`
- `valueChange`
- `ControlValueAccessor`

### Token First

Components never hardcode styling values.

Everything should come from design tokens whenever possible.

### Minimal Dependencies

The library intentionally avoids large UI frameworks to remain lightweight and fully customizable.

---

# Roadmap

## Core Components

- [x] Button
- [x] Input
- [x] Textarea
- [x] Checkbox
- [x] Switch
- [x] Radio Group
- [x] Select
- [x] Dialog

## Layout

- [x] Card
- [x] Divider

## Feedback

- [x] Alert
- [x] Badge
- [x] Spinner

## Display

- [x] Icon

## Infrastructure

- [x] Design Tokens
- [x] Light / Dark Theme
- [x] Base ControlValueAccessor
- [x] Click Outside Directive

---

## Next Components

- [ ] Form Field
- [ ] Chip
- [ ] Avatar
- [ ] Accordion
- [ ] Tabs
- [ ] Tooltip
- [ ] Toast
- [ ] Progress Bar
- [ ] Skeleton
- [ ] Menu
- [ ] Date Picker
- [ ] Table

---

## Quality Improvements

- [ ] Accessibility (ARIA)
- [ ] Keyboard Navigation
- [ ] Unit Tests
- [ ] Playground Improvements
- [ ] Documentation Website
- [ ] CI/CD Pipeline
- [ ] Storybook Integration (optional)

---

# Long-Term Vision

The goal is not to build another Angular Material replacement.

Instead, this library serves as the UI foundation for rapidly developing modern business applications.

By maintaining a consistent component API, shared design tokens, and reusable infrastructure, new applications can be assembled quickly while preserving a unified user experience.

Future projects will continue to shape the library organically—new components will be introduced when real-world applications require them, ensuring every addition solves an actual problem rather than increasing complexity for its own sake.

---

# License

MIT
