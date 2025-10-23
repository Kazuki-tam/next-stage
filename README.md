# Next-Stage

A modern, type-safe Next.js starter template designed for AI-driven development.

## Features

- **Framework**: Next.js with App Router, Hono
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Form Validation**: Zod
- **Linting & Formatting**: Biome, Markuplint
- **Testing**: Playwright, Bun

## Getting Started
Before you start, make sure you have the following installed:

```bash
bun install
```

Bun is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.

This project uses [Bun](https://bun.sh/) to manage dependencies and run scripts.

### Environment Setup（Optional）
If you want to use environment variables, follow these steps:

1. Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

2. Update the environment variables in `.env.local` as needed.

### Development

Run the development server:

```bash
# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router routes
│   │   ├── _components/  # App-specific components
│   │   └── _styles/      # App-specific styles
│   ├── components/     # UI components
│   │   ├── layout/     # Layout components
│   │   └── ui/         # UI components from shadcn/ui
│   ├── config/         # Configuration files
│   ├── lib/            # Utility functions
│   └── types/          # Type definitions
├── e2e/                # E2E tests
├── _llm-rules/         # Base rules for AI-assisted development
├── _llm-docs/          # Base docs for AI-assisted development
├── _tasks/             # Task files
├── .env.example        # Example environment variables
└── ...                 # Config files
```

## Code Quality with Biome and Markuplint

This project uses [Biome](https://biomejs.dev/) for linting and formatting JavaScript/TypeScript code. Biome is a fast, modern JavaScript/TypeScript toolchain that replaces ESLint and Prettier.

Additionally, [Markuplint](https://markuplint.dev/) is used for linting JSX/TSX markup to ensure high-quality, accessible, and consistent UI components.

### Available Commands

```bash
# Run development server
bun run dev

# Run production build
bun run build

# Run all linters (Markuplint and Biome)
bun run lint

# Run both linting and formatting with auto-fixes
bun run check

# Run unit tests
bun run test:unit

# Run e2e tests
bun run test:e2e

# Run UI mode tests
bun run test:e2e:ui

# Run e2e codegen
bun run test:codegen
```

## AI-Driven Development Rules
This project supports AI-assisted development with predefined rules for writing clean, maintainable, and scalable code.

### Universal AI Agent Support
The project includes `AGENTS.md` following the [agents.md standard](https://agents.md/) - a universal format that works across all AI coding agents and tools.

### Supported AI Tools:

#### AI Editors:
- [Cursor](https://www.cursor.com/) - Generated rules in `.cursor/rules/`
- [Windsurf Editor by Codeium](https://codeium.com/windsurf) - Generated rules in `.windsurf/rules/`
- [GitHub Copilot](https://github.com/features/copilot) - Generated instructions in `.github/`
- [Kiro](https://kiro.dev/) - Generated rules in `.kiro/steering/`

#### AI CLI Tools:
- [Claude Code](https://claude.ai/code) - Uses `CLAUDE.md`
- [Google Gemini CLI](https://gemini.google.com/) - Uses `GEMINI.md`

### Rule File Hierarchy
The project maintains a hierarchical rule system:

1. **Base Rules** (`_llm-rules/` directory):
   - `core-rule.md`: Core task execution methodology
   - `nextjs-rule.md`: Next.js specific development patterns
   - `test-rule.md`: Testing guidelines and best practices

2. **Universal Format**:
   - `AGENTS.md`: Universal format following agents.md standard

3. **Tool-Specific Files**:
   - `CLAUDE.md`: Claude CLI specific instructions
   - `GEMINI.md`: Google Gemini CLI specific instructions
   - Generated editor files: `.cursor/`, `.windsurf/`, `.github/`, `.kiro/`

### Generating Editor-Specific Rules

You can generate editor-specific rule files from the base rules using the following commands:

```bash
# Generate rules for Cursor editor
bun run rules:cursor

# Generate rules for Windsurf editor
bun run rules:windsurf

# Generate rules for GitHub Copilot (instructions)
bun run rules:copilot

# Generate rules for Kiro editor
bun run rules:kiro

# Generate rules for all supported editors
bun run rules
```

### Rule File Cross-Monitoring
**Important**: When updating any rule file, all related files must be updated to maintain consistency. The project includes a cross-monitoring protocol that ensures:

- Technology stack versions remain synchronized across all rule files
- Core development patterns are consistently applied
- Changes are properly documented and validated

See `AGENTS.md` for detailed cross-monitoring requirements and procedures.

### Next.js DevTools MCP Integration

This project includes **[Next.js DevTools MCP](https://www.npmjs.com/package/next-devtools-mcp)** integration for AI coding assistants that support the [Model Context Protocol (MCP)](https://modelcontextprotocol.io).

#### What is Next.js DevTools MCP?

Next.js DevTools MCP provides a standardized interface for AI agents and coding assistants to interact with Next.js applications. It offers comprehensive tools to support Next.js development workflows.

**Key Features:**

- **MCP Tools**: Callable tools for automating Next.js upgrades and Cache Components setup
- **Development Prompts**: Pre-configured prompts for common Next.js development tasks
- **Next.js Documentation**: Access Next.js documentation and best practices
- **Browser Testing**: Integrate with Playwright for browser automation and testing
- **Next.js Agent**: Access internal state, diagnostics, and errors from running Next.js dev servers via MCP

#### Setup

The MCP server is already configured in `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

For complete documentation and advanced usage, visit:
- [Next.js DevTools MCP on npm](https://www.npmjs.com/package/next-devtools-mcp)
- [Next.js MCP Documentation](https://nextjs.org/docs/app/guides/mcp)

## Turbopack

Next.js 16 uses [Turbopack](https://turbo.build/pack) as the default bundler for both development (`next dev`) and production builds (`next build`). This provides faster refresh rates and improved developer experience out of the box.

## Learn More

For more information about the tech stack powering this template, refer to these resources:

- [Bun](https://bun.sh/) - an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.
- [Next.js](https://nextjs.org/docs) - a React framework for building full-stack applications.
- [Hono](https://hono.dev/docs/) - a small, simple, and ultrafast web framework built on Web Standards.
- [shadcn/ui](https://ui.shadcn.com/) - re-usable components built with Radix UI and Tailwind CSS.
- [Radix UI](https://www.radix-ui.com/) - a collection of composable React components for building high-quality, accessible design systems and web apps.
- [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework for rapidly building custom designs.
- [React Hook Form](https://react-hook-form.com/) - performant, flexible, and extensible forms with easy-to-use validation.
- [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation library.
- [Biome](https://biomejs.dev/) - a fast, modern JavaScript/TypeScript toolchain that replaces ESLint and Prettier.
- [Markuplint](https://markuplint.dev/) - a linter for HTML, JSX, and other markup languages to ensure high-quality, accessible UI components.
- [Playwright](https://playwright.dev/) - a browser automation tool for testing and debugging.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## References
- [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules)
- [cursor.directory](https://cursor.directory/)
- [kinopeee/cursorrules](https://github.com/kinopeee/cursorrules)
