# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
bun dev          # Start development server with Turbopack
bun build        # Build for production
bun start        # Start production server
```

### Code Quality
```bash
bun run lint     # Run all linters (Markuplint + Biome)
bun run check    # Run Biome check with auto-fixes + Markuplint
bun run format   # Format code with Biome
```

### Testing
```bash
bun run test:unit       # Run unit tests
bun run test:e2e        # Run Playwright E2E tests
bun run test:e2e:ui     # Run E2E tests with UI
bun run test:codegen    # Generate E2E test code
```

### AI Rules Generation
```bash
bun run rules           # Generate rules for all AI editors
bun run rules:cursor    # Generate Cursor-specific rules
bun run rules:windsurf  # Generate Windsurf-specific rules
bun run rules:copilot   # Generate GitHub Copilot instructions
```

### Dependency Management
```bash
bun install      # Install dependencies
bun upgradeps    # Upgrade dependencies interactively
```

## Architecture Overview

This is a modern Next.js 15.3.5 starter template designed for AI-driven development with the following architecture:

### Core Stack
- **Runtime**: Bun 1.2.18
- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript 5.8.3 with strict mode
- **API**: Hono 4.8.3 with Zod validator
- **UI**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS v4.1.11
- **Forms**: React Hook Form 7.59.0 + Zod 3.25.71 validation
- **Quality**: Biome 2.0.0 (linting/formatting) + Markuplint 4.12.0

### Key Architectural Patterns

1. **Server-First Development**
   - Default to React Server Components (RSC)
   - Minimize 'use client' usage
   - Wrap client components in Suspense

2. **Colocation Pattern**
   - Page-specific code uses underscore-prefixed directories:
     - `_components/` for page-specific components
     - `_actions/` for server actions
     - `_hooks/` for page-specific hooks
   - Cross-cutting components in top-level directories

3. **Type-Safe Development**
   - Zod schemas for validation and type inference
   - Strict TypeScript configuration
   - Planned RPC implementation for type-safe API calls

4. **AI-Driven Development**
   - Structured task execution process (analyze → plan → execute → verify)
   - Comprehensive rules for consistent code generation
   - Editor-specific rule generation for Cursor, Windsurf, and Copilot

### Project Structure
```
src/
├── app/                # Next.js App Router
│   ├── api/           # API routes (Hono ready)
│   ├── _components/   # Page-specific components
│   └── _styles/       # Page-specific styles
├── components/        # Shared UI components
│   ├── layout/       # Layout components
│   └── ui/           # shadcn/ui components
├── lib/              # Utilities and shared code
├── types/            # Type definitions
└── config/           # Configuration files
```

### Testing Strategy
- **Unit Tests**: Bun test runner, colocated in `__tests__` directories
- **E2E Tests**: Playwright in `/e2e` directory
- **Pattern**: AAA (Arrange, Act, Assert)

### Code Conventions
- **Naming**: Lowercase with dashes for directories, descriptive names with auxiliary verbs
- **Functions**: Use `function` keyword for pure functions
- **Components**: Functional components only, no classes
- **Formatting**: Biome with 2-space indentation, double quotes, 100-char line width
- **File Structure**: Export → subcomponents → helpers → static content → types

### Performance Guidelines
- Optimize for Web Vitals (LCP, CLS, FID)
- Use dynamic imports for non-critical components
- Implement proper image optimization (WebP, lazy loading)
- Cache API responses appropriately

### Form Handling
- React Hook Form for state management
- Zod schemas for validation
- Type-safe form handling with TypeScript
- Reusable form components for common patterns

### API Development (Hono)
When implementing APIs:
- Use Hono in `app/api` directory
- Organize by domain using `app.route()`
- Validate all inputs with Zod
- Implement proper error handling
- Use middleware for cross-cutting concerns
- Plan for RPC implementation with shared types