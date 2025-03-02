# Next-Stage

A modern, type-safe Next.js starter template designed for AI-driven development.

## Features

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **UI Components**: Shadcn UI, Radix UI
- **Styling**: Tailwind CSS
- **API & Middleware**: Hono
- **Form Management**: React Hook Form
- **Form Validation**: Zod
- **Linting & Formatting**: Biome

## Getting Started
Before you start, make sure you have the following installed:

```bash
bun install
```

Bun is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.

This project uses Bun to manage dependencies and run scripts.

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

### Clean Start (Optional)

If you want to start with a clean slate without the example files, you can remove the example directory:

```bash
# Remove the example directory
rm -rf src/app/(example)
```

This will delete all sample files and allow you to start building your application from scratch.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router routes
│   │   ├── _components/  # App-specific components
│   │   ├── _styles/      # App-specific styles
│   │   └── (example)/    # Example route group
│   ├── components/     # UI components
│   │   ├── layout/     # Layout components
│   │   └── ui/         # UI components from shadcn/ui
│   ├── config/         # Configuration files
│   ├── lib/            # Utility functions
│   └── types/          # Type definitions
├── .env.example        # Example environment variables
└── ...                 # Config files
```

## Code Quality with Biome

This project uses [Biome](https://biomejs.dev/) for linting and formatting. Biome is a fast, modern JavaScript/TypeScript toolchain that replaces ESLint and Prettier.

### Available Commands

```bash
# Run Biome linter
bun run lint

# Format code with Biome
bun run format

# Run both linting and formatting with auto-fixes
bun run check
```

## AI-Driven Development Rules
This project supports AI-assisted development with predefined rules for writing clean, maintainable, and scalable code.

Supported AI Editors:
- [Cursor](https://www.cursor.com/)
- [Windsurf Editor by Codeium](https://codeium.com/windsurf)

Check out these rule files before getting started:
- `.cursor/rules/*` - Rules for Cursor editor
- `.windsurfrules` - Rules for Windsurf editor

## Turbopack

This project is configured to use [Turbopack](https://turbo.build/pack) in development mode for faster refresh rates and improved developer experience.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js](https://nextjs.org/docs) - a React framework for building full-stack applications.
- [Hono](https://hono.dev/docs/) - a small, simple, and ultrafast web framework built on Web Standards.
- [Shadcn UI](https://ui.shadcn.com/) - re-usable components built with Radix UI and Tailwind CSS.
- [Radix UI](https://www.radix-ui.com/) - a collection of composable React components for building high-quality, accessible design systems and web apps.
- [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework for rapidly building custom designs.
- [React Hook Form](https://react-hook-form.com/) - performant, flexible, and extensible forms with easy-to-use validation.
- [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation library.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
