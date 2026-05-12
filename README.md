# Z Gym

Production-style single-page gym and fitness web application built with React, TypeScript, Vite, Tailwind CSS v4, Radix primitives, and Motion.

This project is structured as a maintainable frontend system rather than a one-off landing page. The code is organized around typed content models, isolated UI primitives, reusable hooks, and section-level composition so the app can grow without collapsing into tightly coupled JSX.

## Overview

Z Gym is a responsive SPA with:

- sticky responsive navigation
- animated hero with scroll-driven presentation
- in-view stat counters
- reusable program, trainer, pricing, testimonial, CTA, and footer sections
- dark and light theme support
- accessible interactions for navigation, controls, forms, and motion preferences

The implementation favors predictable composition, direct imports, explicit typing, and small reusable primitives.

## Stack

- `React 19`
- `TypeScript 6`
- `Vite 8`
- `Tailwind CSS 4`
- `motion` for animation
- `Radix UI` primitives for dialog and switch behavior
- `Lucide React` for icons
- `oxlint` and `oxfmt` for linting and formatting

## Scripts

```bash
npm run start
npm run build
npm run preview
npm run lint
npm run fmt
npm run fmt:check
```

## Project Structure

```text
src/
  components/
    layout/
      Footer/
      Navbar/
    sections/
      CTA/
      Hero/
      Pricing/
      Programs/
      StatsBar/
      Testimonials/
      Trainers/
    ui/
      button.tsx
      card.tsx
      container-scroll-animation.tsx
      input.tsx
      switch.tsx
  constants/
    content.ts
  hooks/
    useHookCountUp.ts
    useHookIntersectionObserver.ts
    useHookReducedMotionPreference.ts
    useHookScrollDirection.ts
    useHookTheme.ts
  lib/
    animations.ts
  screens/
    HomeScreen.tsx
  types/
    content.ts
  utils/
    cn.ts
    icon-map.tsx
    validation.ts
  App.tsx
  main.tsx
  index.css
```

## Why This Structure Scales Well

### 1. Screen composition stays thin

`src/screens/HomeScreen.tsx` is responsible for orchestration, not implementation detail. It assembles sections and passes typed content. That keeps routing or future page expansion simple.

If the app later grows into multiple pages such as:

- `/membership`
- `/coaches`
- `/locations`
- `/contact`

each screen can remain a composition layer while sections and primitives are reused underneath.

### 2. UI primitives are separated from page sections

The files in `src/components/ui` are reusable building blocks. They are not tied to any one section. This matters because the same `Button`, `Input`, `Switch`, and motion container can be reused consistently across future flows.

That gives you:

- visual consistency
- fewer style regressions
- easier refactors
- a smaller surface area for accessibility fixes

### 3. Sections are isolated and replaceable

Each homepage block has its own file and prop interface. That means you can redesign or replace one section without destabilizing the rest of the page.

Examples:

- swap the pricing model without touching trainers or hero logic
- replace testimonials with video cards
- turn programs into CMS-driven data
- add analytics hooks to CTA without affecting layout components

### 4. Content is centralized

All user-facing copy lives in `src/constants/content.ts`.

That is valuable because it:

- removes hardcoded strings from JSX
- makes copy updates faster
- supports future localization
- makes CMS migration easier
- keeps rendering logic clean

If the project later moves to a headless CMS or API, this file becomes the obvious transition point.

### 5. Types prevent drift

`src/types/content.ts` defines the shape of hero content, trainer cards, pricing tiers, testimonials, footer links, and more.

That improves scalability because:

- content and UI stay aligned
- invalid data shapes fail earlier
- refactors are safer
- new contributors can understand the expected data model quickly

### 6. Reusable hooks keep behavior consistent

Behavior like scroll direction, reduced motion handling, intersection observation, theme state, and count-up timing is extracted into dedicated hooks.

This avoids duplicated state logic inside components and makes behavior easier to test and adjust.

Examples:

- `useHookScrollDirection` powers navbar hide/show behavior
- `useHookIntersectionObserver` drives in-view activation
- `useHookCountUp` powers stat counters
- `useHookTheme` manages persisted theme state
- `useHookReducedMotionPreference` supports accessibility-friendly animation fallbacks

### 7. Animation logic is centralized

Shared animation variants live in `src/lib/animations.ts`.

This is important because animation usually becomes messy first when a frontend grows. By centralizing transitions and variants:

- motion stays consistent
- sections are easier to tune
- reduced-motion support is easier to maintain
- future animation refactors happen in one place

### 8. Direct imports keep dependencies obvious

This repo intentionally avoids barrel `index.ts` exports. Every import points directly to the actual file being used.

That improves maintainability by making it easier to:

- trace ownership quickly
- avoid ambiguous import trees
- reduce accidental dependency sprawl
- keep bundling and refactors more explicit

## Architectural Strengths

### Strict separation of concerns

- `components` render UI
- `hooks` manage reusable stateful behavior
- `types` define contracts
- `constants` provide content
- `utils` provide pure helper logic
- `lib` provides shared animation configuration
- `screens` compose page-level structure

This separation is what keeps the codebase understandable as it grows.

### Accessibility-aware by default

The implementation favors:

- semantic HTML
- keyboard-accessible controls
- visible focus states
- labeled interactions
- reduced-motion support
- proper button and form semantics

That means accessibility is part of the baseline architecture, not an afterthought.

### Theme-ready token system

The theme is driven through CSS variables in `src/index.css`. Dark and light mode are not separate code paths in React; they are token variations at the styling layer.

This scales better because:

- component markup stays stable
- theme changes are centralized
- brand refreshes become easier
- visual tuning happens mostly in CSS variables, not in JSX rewrites

### Data-first section design

Many sections are data-driven rather than manually duplicated card markup. This is especially useful for:

- pricing tiers
- trainers
- programs
- testimonials
- footer links

As content grows, rendering patterns stay stable.

## Current Conventions

### Exports

- `HomeScreen` is the only default export in `src`
- other components and utilities use named exports

### Functions

- component and helper declarations use arrow functions

### Hooks

- hook file names follow `useHookSomething.ts`
- hooks remain colocated in `src/hooks`

### Imports

- no barrel imports
- no `index.ts` dependency chain
- imports should target concrete files directly

## Motion System

Animations use the `motion` package and shared variants from `src/lib/animations.ts`.

This keeps:

- reveals consistent
- interactive hover/tap behavior predictable
- scroll-driven sections reusable
- motion preferences easier to respect

The hero also uses a container scroll presentation component in:

- `src/components/ui/container-scroll-animation.tsx`

That component is reusable for future editorial or product-showcase sections.

## Theming

Theme state is handled by:

- `src/hooks/useHookTheme.ts`

Theme tokens are defined in:

- `src/index.css`

The app supports both dark and light mode with persistent preference storage.

## Extending the App

### Add a new homepage section

1. Create a new section file under `src/components/sections/...`
2. Define props explicitly
3. Add its content model to `src/types/content.ts` if needed
4. Add display copy/data in `src/constants/content.ts`
5. Compose it in `src/screens/HomeScreen.tsx`

### Add a new reusable control

1. Create the primitive in `src/components/ui`
2. Keep it generic
3. Use `cn.ts` for class merging when needed
4. Avoid section-specific assumptions

### Add a new hook

1. Create a file in `src/hooks`
2. Keep the API focused
3. Name the file in `useHookSomething.ts` format
4. Extract behavior only when it is genuinely reusable

## Production-Friendly Traits

This project is a strong base for production work because it already includes:

- typed content contracts
- isolated section boundaries
- reusable primitives
- centralized motion rules
- theme tokens
- direct import discipline
- formatting and linting with OXC tools
- Vite-based fast local iteration

It is suitable for further expansion into:

- CMS-backed marketing pages
- multi-page brand sites
- membership onboarding flows
- trainer profile detail pages
- class schedule integrations
- lead capture and CRM-connected forms

## Development Notes

- Vite is used for local development and production builds.
- React Compiler support is enabled through the Vite React setup.
- Motion-heavy areas are designed with reduced-motion fallback in mind.
- The favicon is a custom gym-themed mark rather than the default starter asset.

## Research Notes

For research and implementation exploration, specialized skills/workflows were used to help evaluate UI direction, React patterns, and frontend structure choices. The shipped code and architecture are tailored specifically to this repository and its current requirements.
