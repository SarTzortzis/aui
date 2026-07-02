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
projects/

    ui-kit/
        components/
        core/
        directives/
        shared/
        themes/

    aui-charts/
        components/
        core/
        models/
        services/

    playground/
```

---

# Current Features

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
- ✅ Toast Notifications
- ✅ Loading Overlay

---

## Layout

- ✅ Card
- ✅ Divider
- ✅ Stack
- ✅ HStack
- ✅ VStack
- ✅ Sidebar
- ✅ Topbar
- ✅ Page
- ✅ Page Header

---

## Display

- ✅ Icon

---

## Overlays

### ✅ Tooltip (v1)

Features:

- Hover & Focus
- Configurable delays
- Escape to close
- Disabled state
- Four placements
- Automatic flipping
- Direction-aware arrow
- Fade animation

### ✅ Popover (v1)

Features:

- TemplateRef support
- Overlay integration
- Outside click close
- Escape to close
- Focus restoration
- Accessibility support
- Smart positioning
- Scroll repositioning
- Origin visibility detection

### 🚧 Dropdown Menu (v1)

Completed:

- Overlay integration
- TemplateRef support
- MenuItem component
- Divider support
- Outside click
- Escape to close
- Smart positioning
- Scroll repositioning
- Origin visibility detection

Remaining:

- Keyboard navigation
- Enter / Space activation
- Auto close on selection
- Disabled item navigation
- Optional icons
- Optional shortcuts

### ⏳ Context Menu

### ⏳ Dialog Improvements

---

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

---

## Visualization

### 🚧 AUI Charts

A dedicated visualization package built specifically for business applications.

Current work:

- Line Chart
- Shared Chart Infrastructure
- Theme Integration
- Token-driven Styling

Planned:

- Bar Chart
- Area Chart
- Pie Chart
- Doughnut Chart
- Horizontal Bar Chart
- Stacked Bar Chart
- Mixed Charts
- Radar Chart
- Scatter Chart
- Chart Cards
- Statistic Cards

# Infrastructure

## Theme

- ✅ Theme System
- ✅ Design Tokens
- ✅ ThemeService

## Services

- ✅ StorageService
- ✅ NotificationService
- ✅ LoadingService

## Overlay Infrastructure

- ✅ Dynamic Overlay Service
- ✅ Automatic Positioning
- ✅ Smart Position Flipping
- ✅ Scroll Repositioning
- ✅ Origin Visibility Detection
- ✅ Focus Restoration

## Shared

- ✅ Base ControlValueAccessor
- ✅ ClickOutside Directive
- ✅ Interactive Playground

## Visualization Infrastructure

- 🚧 Chart Package
- 🚧 Base Chart Component
- 🚧 Chart Theme Service
- 🚧 Shared Chart Models

---

# Theme System

The platform uses a token-driven architecture.

The default theme lives in `:root`.

Dark mode overrides only the tokens that differ, making future themes inexpensive to create.

---

# Development Workflow

Every reusable feature follows the same lifecycle.

1. Public API
2. Architecture
3. Accessibility
4. Implementation
5. Playground
6. Documentation
7. Refactoring

---

# Current Status

AUI has reached its **first stable foundation**.

The core infrastructure and essential UI component library are now considered stable.

Development is now expanding into dedicated packages that build on top of the existing foundation.

The first package under active development is:

- 🚧 AUI Charts

Future packages include:

- DataGrid Enterprise
- AI Components
- Maps
- Calendar

Current work is focused on completing the Core UI Layer and the Visualization package before starting the first production application.

---

# Roadmap

## Overlay Components

- ✅ Tooltip
- ✅ Popover
- 🚧 Dropdown Menu
- ⏳ Context Menu
- ⏳ Dialog Improvements

---

## Navigation

- Tabs
- Breadcrumb
- Standalone Pagination

---

## Feedback

- Skeleton
- Progress Bar
- Empty State

---

## Forms

- Search Input
- Autocomplete
- Date Picker

---

## Display

- Avatar
- Chip
- Statistic Card

---

#### v1

- 🚧 Line Chart
- ⏳ Bar Chart
- ⏳ Area Chart
- ⏳ Pie Chart
- ⏳ Doughnut Chart

#### v2

- Horizontal Bar
- Stacked Bar
- Mixed Charts
- Radar Chart
- Scatter Chart

#### Dashboard Components

- Chart Card
- Statistic Card
- KPI Card
- Sparkline

## DataGrid Enterprise Phase

Future capabilities:

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

# Long-Term Vision

AUI is not trying to replace Angular Material.

Its goal is to become a complete ecosystem for building modern business applications.

The platform is organized into focused packages that share the same architecture, design language and developer experience.

Current ecosystem:

- UI Kit
- AUI Charts
- Interactive Playground

Future ecosystem:

- DataGrid Enterprise
- AI Components
- Maps
- Calendar
- Dashboard Components

Every production application strengthens the platform.

Every solved problem becomes reusable infrastructure.

Applications should spend their time implementing business logic—not rebuilding UI foundations.
