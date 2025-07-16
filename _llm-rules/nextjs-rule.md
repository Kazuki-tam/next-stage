---
description: Next.js coding rule
globs: 
alwaysApply: true
---

# Next.js Project Conventions

## Technology Stack
- **Package Manager**: Bun 1.2.18
- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript 5.8.3
- **Runtime**: React 19.1.0, React DOM 19.1.0
- **UI Components**: shadcn/ui with Radix UI
- **Styling**: Tailwind CSS 4.1.11
- **API & Middleware**: Hono 4.8.3
- **API Validation**: @hono/zod-validator 0.7.0
- **Form Management**: React Hook Form 7.59.0, @hookform/resolvers 5.1.1
- **Form Validation**: Zod 3.25.71
- **Styling Utilities**: class-variance-authority 0.7.1, clsx 2.1.1, tailwind-merge 3.3.1
- **Theming**: next-themes 0.4.6
- **Linting & Formatting**: Biome 2.0.0, markuplint 4.12.0
- **Testing**: Playwright 1.53.2, Bun test runner
- **Icons**: lucide-react 0.525.0

## Code Style and Structure

### General Principles
- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)
- Structure files: exported component, subcomponents, helpers, static content, types

### File Organization
- Use lowercase with dashes for directories (e.g., `components/auth-user`)
- Group related components in feature-based directories
- Keep API routes organized by domain in the `app/api` directory
- Separate Hono middleware in a dedicated `middleware` directory

### Directory Structure
- Implement colocation by organizing page-specific components, actions, and hooks within the page directory:

```
src
|
+-- app        # Next.js routing files (standard Next.js structure)
|   |
|   +-- page-name/
|       |
|       +-- page.tsx
|       +-- _components/  # Page-specific components
|       +-- _actions/     # Page-specific actions
|       +-- _hooks/       # Page-specific hooks
|
+-- components # Cross-cutting UI components (not domain-specific)
|
+-- hooks      # Cross-cutting, domain-independent hooks
|
+-- providers  # Application providers
|
+-- utils      # General utility functions
|
+-- constants  # Application-wide constants
|
+-- types      # Shared type definitions
|
+-- styles     # CSS and styling related files
|
+-- lib        # Shared library code and standardized processes
|   |
|   +-- mcp/   # MCP (Model Context Protocol) integration
|   +-- rpc/   # RPC utilities for type-safe API calls
|
+-- tests      # Automated testing files
```

- Use underscore prefix (_components, _actions, _hooks) for page-specific directories to clearly distinguish them from route segments
- Keep cross-cutting, domain-independent components, hooks, and utilities in the top-level directories
- Prioritize colocation to improve maintainability and reduce unnecessary imports

### TypeScript Usage
- Use TypeScript for all code; prefer types over types interfaces
- Avoid enums; use const maps instead
- Use functional components with TypeScript interfaces
- Define strict types for API requests and responses
- Use Zod schemas for validation and type inference
- Use `satisfies` operator for type validation

### Syntax and Formatting
- Use the "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use declarative JSX
- Follow Biome formatting rules
- Use double quotes for strings as configured in Biome

## UI and Styling
- Use Shadcn UI, Radix, and Tailwind for components and styling
- Implement responsive design with Tailwind CSS; use a mobile-first approach
- Maintain consistent spacing and color schemes
- Use Tailwind's utility classes instead of custom CSS when possible
- Extract common UI patterns into reusable components

## Performance Optimization
- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading
- Implement proper caching strategies for API routes

### Form Handling
- Use React Hook Form for managing form state and validation
- Integrate Zod schemas with React Hook Form for type-safe form validation
- Implement form error handling consistently across the application
- Use controlled components with React Hook Form for complex form interactions
- Create reusable form components for common patterns

## Hono Integration

### API Routes
- Use Hono for API routes in `app/api` directory
- Organize routes by domain using Hono's `app.route()` method
- Avoid creating "controller" classes; use direct handlers with proper typing
- Use Hono's middleware for cross-cutting concerns
- Validate request data using @hono/zod-validator

### RPC Implementation
- Implement RPC (Remote Procedure Call) functionality to share request/response types between server and client
- Create a centralized type definition system for API contracts in the `src/types/api` directory
- Use Hono's type system to enforce type safety in API handlers
- Generate client-side hooks that leverage the shared type definitions
- Ensure all API endpoints have corresponding type definitions for both request and response

### Middleware
- Create reusable middleware for authentication, logging, and error handling
- Use Hono's middleware composition for complex request processing
- Implement rate limiting for public-facing APIs

### API Security
- Validate all input with Zod schemas
- Sanitize data to prevent injection attacks
- Implement proper error handling and avoid exposing sensitive information
- Use environment variables for secrets
- Implement CORS restrictions for production environments

## Key Conventions
- Optimize Web Vitals (LCP, CLS, FID)
- Limit 'use client':
  - Favor server components and Next.js SSR
  - Use only for Web API access in small components
  - Avoid for data fetching or state management
- Follow Next.js docs for Data Fetching, Rendering, and Routing
- Use Biome for consistent code formatting and linting
