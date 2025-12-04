# AGENTS.md

## Project Overview

**Key Technologies:**
- Framework: Next.js 16.0.7 with App Router
- Runtime: React 19.2.1, React DOM 19.2.1
- Language: TypeScript 5.8.3
- Package Manager: Bun 1.2.18
- API Framework: Hono 4.10.7
- UI Components: shadcn/ui with Radix UI
- Styling: Tailwind CSS 4.1.13
- Form Management: React Hook Form 7.62.0 + Zod 4.1.8
- Testing: Playwright 1.54.2 + Bun test runner
- Code Quality: Biome 2.3.8 + Markuplint 4.14.0

## Setup Commands

```bash
# Install dependencies
bun install

# Start development server (Turbopack is default in Next.js 16)
bun dev

# Build for production
bun build

# Start production server
bun start

# Run all tests
bun run test:unit && bun run test:e2e

# Run code quality checks (linting + formatting)
bun run check
```

## Development Environment

### Package Manager
- **Primary**: Use `bun` for all package management and script execution
- **Performance**: Turbopack is the default bundler in Next.js 16 for faster development builds
- **Hot Reload**: Development server runs on http://localhost:3000 with auto-refresh

### Directory Structure
Follow the established colocation pattern:
```
src/
├── app/                    # Next.js App Router routes
│   ├── _components/        # App-specific components
│   ├── _styles/           # App-specific styles
│   └── page.tsx           # Route pages
├── components/            # Reusable UI components
│   ├── layout/           # Layout-specific components
│   └── ui/               # shadcn/ui components
├── config/               # Configuration files
├── lib/                  # Utility functions and shared logic
└── types/                # Shared type definitions
```

### File Naming Conventions
- Use lowercase with dashes for directories: `auth-user/`, `user-profile/`
- Use underscore prefix for page-specific directories: `_components/`, `_actions/`, `_hooks/`
- Component files: PascalCase with `.tsx` extension
- Utility files: camelCase with `.ts` extension

## Code Style Guidelines

### TypeScript Standards
- **Strict Mode**: TypeScript strict mode is enabled
- **Types over Interfaces**: Prefer `type` definitions over `interface`
- **No Enums**: Use const maps instead of enums
- **Zod Integration**: Use Zod schemas for validation and type inference
- **Satisfies Operator**: Use `satisfies` for type validation where appropriate

### React Patterns
- **Functional Components**: Use function declarations for components
- **Server Components**: Prefer React Server Components (RSC) by default
- **Client Components**: Minimize `'use client'` usage, only for Web API access
- **Hooks**: Avoid excessive `useEffect` and `useState`, favor server-side solutions
- **Suspense**: Wrap client components in Suspense with fallback UI

### Styling and UI
- **Tailwind First**: Use Tailwind utility classes instead of custom CSS
- **Mobile First**: Implement responsive design with mobile-first approach
- **shadcn/ui**: Leverage existing shadcn/ui components before creating custom ones
- **Consistent Spacing**: Maintain consistent spacing and color schemes
- **Accessibility**: Ensure all components meet accessibility standards

### Code Formatting (Biome Configuration)
- **Quotes**: Use double quotes for strings
- **Semicolons**: Always include semicolons
- **Indentation**: 2 spaces
- **Line Width**: 100 characters maximum
- **Trailing Commas**: ES5 style (objects and arrays)

## Testing Instructions

### Unit Testing
```bash
# Run unit tests
bun run test:unit

# Run specific test file
bun test "path/to/test.test.ts"
```

### End-to-End Testing (Playwright)
```bash
# Run all e2e tests
bun run test:e2e

# Run tests with UI mode
bun run test:e2e:ui

# Generate test code
bun run test:codegen
```

**Testing Guidelines:**
- Write tests for all new components and utilities
- Use Playwright for integration and e2e tests
- Test files should be co-located with the code they test
- Ensure all tests pass before committing changes

## Code Quality Enforcement

### Linting and Formatting
```bash
# Run all quality checks (recommended before commit)
bun run check

# Run linting only
bun run lint

# Run formatting only
bun run format
```

### Pre-commit Checklist
1. Run `bun run check` to ensure code quality
2. Run `bun run test:unit` to verify unit tests pass
3. Run `bun run test:e2e` for critical path testing
4. Verify no TypeScript errors in your editor
5. Check that new components follow established patterns

## API Development with Hono

### API Route Structure
- Place API routes in `src/app/api/` directory
- Use Hono for request handling and middleware
- Organize routes by domain using `app.route()` method
- Validate requests using `@hono/zod-validator`

### Type Safety
- Define request/response types in `src/types/api/`
- Use Hono's built-in type system for route handlers
- Implement RPC patterns for client-server type sharing
- Always validate input data with Zod schemas

## Form Handling

### React Hook Form + Zod Integration
- Use React Hook Form for all form state management
- Define Zod schemas for form validation
- Create reusable form components for common patterns
- Implement consistent error handling across forms

```typescript
// Example form schema
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof formSchema>;
```

## AI-Driven Development Support

### AI Tool Integration
This project supports multiple AI coding tools:

#### AI Editors:
- **Cursor**: Use `.cursor/rules/` directory
- **Windsurf**: Use `.windsurf/rules/` directory  
- **GitHub Copilot**: Use `.github/copilot-instructions.md`
- **Kiro**: Use `.kiro/steering/` directory

#### AI CLI Tools:
- **Claude CLI**: Use `CLAUDE.md` file
- **Gemini CLI**: Use `GEMINI.md` file

#### Universal Format:
- **AGENTS.md**: Universal format for all AI coding agents and tools

### Rule Generation
```bash
# Generate rules for specific editors
bun run rules:cursor
bun run rules:windsurf
bun run rules:copilot
bun run rules:kiro

# Generate all editor rules
bun run rules
```

### Rule File Management and Cross-Monitoring

#### Rule File Hierarchy
The project maintains a hierarchical rule system for consistent AI-driven development:

1. **Base Rules** (`_llm-rules/` directory):
   - `core-rule.md`: Core task execution methodology
   - `nextjs-rule.md`: Next.js specific development patterns
   - `test-rule.md`: Testing guidelines and best practices

2. **Tool-Specific Files**:
   - `AGENTS.md`: Universal format following agents.md standard
   - `CLAUDE.md`: Claude CLI specific instructions
   - `GEMINI.md`: Google Gemini CLI specific instructions
   - Generated editor files: `.cursor/`, `.windsurf/`, `.github/`, `.kiro/`

#### Cross-Monitoring Protocol
**IMPORTANT**: When updating any rule file, AI agents must follow this cross-monitoring protocol:

1. **Version Synchronization Check**:
   ```bash
   # Before making changes, check version consistency across files
   grep -r "Next.js.*16\." _llm-rules/ AGENTS.md CLAUDE.md GEMINI.md
   grep -r "Bun.*1\." _llm-rules/ AGENTS.md CLAUDE.md GEMINI.md
   ```

2. **Mandatory Cross-File Updates**:
   When updating technology versions or core patterns in ANY rule file:
   - ✅ Update `_llm-rules/nextjs-rule.md` (source of truth for tech stack)
   - ✅ Update `AGENTS.md` (universal format)
   - ✅ Update `CLAUDE.md` (Claude CLI-specific)
   - ✅ Update `GEMINI.md` (Gemini CLI-specific)
   - ✅ Regenerate editor-specific rules: `bun run rules`

3. **Consistency Validation**:
   After any rule file update, validate consistency:
   ```bash
   # Check package.json versions match rule files
   bun run check
   # Regenerate all editor rules to ensure consistency
   bun run rules
   ```

4. **Update Triggers**:
   Rule files must be cross-updated when:
   - Technology stack versions change (Next.js, React, TypeScript, etc.)
   - Core development patterns are modified
   - Directory structure conventions change
   - Testing strategies are updated
   - Code style guidelines are revised
   - Security practices are modified

5. **Change Documentation**:
   When updating rule files, document changes in:
   - Commit message with `docs:` prefix
   - Brief explanation of what changed and why
   - Impact on existing development workflows

#### Automated Consistency Checks
The project includes automated checks to maintain rule file consistency:
- Pre-commit hooks validate version consistency
- CI/CD pipeline checks for rule file synchronization
- Regular audits of cross-file consistency

## Security Considerations

### Input Validation
- Always validate user input with Zod schemas
- Sanitize data to prevent injection attacks
- Use environment variables for sensitive configuration
- Implement proper error handling without exposing internals

### API Security
- Validate all API requests using Hono middleware
- Implement rate limiting for public endpoints
- Use CORS restrictions in production
- Never expose sensitive information in error messages

## Performance Optimization

### Next.js Best Practices
- Minimize client-side JavaScript by preferring Server Components
- Use dynamic imports for code splitting
- Optimize images with Next.js Image component
- Implement proper caching strategies

### Bundle Optimization
- Turbopack is the default bundler in Next.js 16 for faster development builds
- Use tree-shaking friendly imports
- Avoid importing entire libraries when only specific functions are needed

## Deployment Guidelines

### Build Process
```bash
# Production build
bun run build

# Start production server
bun start
```

### Environment Variables
- Copy `.env.example` to `.env.local` for local development
- Use environment-specific variables for different deployment stages
- Never commit sensitive environment variables to version control

## Troubleshooting

### Common Issues
1. **TypeScript Errors**: Run `bun run check` to identify and fix type issues
2. **Build Failures**: Check for unused imports and type errors
3. **Test Failures**: Ensure all dependencies are installed and environment is set up correctly
4. **Linting Errors**: Run `bun run format` to auto-fix formatting issues

### Debug Commands
```bash
# Check TypeScript compilation
bunx tsc --noEmit

# Analyze bundle size
bunx @next/bundle-analyzer

# Check for outdated dependencies
bunx upgradeps
```

## Contributing Guidelines

### Code Review Checklist
- [ ] Code follows established TypeScript and React patterns
- [ ] All tests pass (unit and e2e)
- [ ] Code quality checks pass (`bun run check`)
- [ ] New features include appropriate tests
- [ ] Documentation is updated if necessary
- [ ] No console errors or warnings in development
- [ ] Responsive design works on mobile and desktop
- [ ] Accessibility requirements are met

### Commit Message Format
Use conventional commits format:
```
feat: add user authentication flow
fix: resolve mobile navigation issue  
docs: update API documentation
refactor: simplify form validation logic
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Hono Documentation](https://hono.dev/docs/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Hook Form Guide](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Biome Configuration](https://biomejs.dev/)
- [Playwright Testing](https://playwright.dev/)
