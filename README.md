# Next-Stage

A modern Next.js starter template with App Router, TypeScript, Tailwind CSS, Shadcn UI, and more.

## Features

- **Framework**: Next.js 15.2.0 with App Router
- **Language**: TypeScript 5+
- **UI Components**: Shadcn UI, Radix UI
- **Styling**: Tailwind CSS
- **API & Middleware**: Hono.js
- **Form Validation**: Zod
- **Linting & Formatting**: Biome

## Getting Started

### Environment Setup

1. Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

2. Update the environment variables in `.env.local` as needed.

### Development

Run the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font family for Vercel.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router routes
│   │   ├── api/        # API routes using Hono.js
│   │   └── ...         # Page routes
│   ├── components/     # UI components
│   ├── lib/            # Utility functions
│   └── middleware/     # Hono middleware
├── .env.example        # Example environment variables
├── .env.local          # Local environment variables (gitignored)
└── ...                 # Config files
```

## Code Quality with Biome

This project uses [Biome](https://biomejs.dev/) for linting and formatting. Biome is a fast, modern JavaScript/TypeScript toolchain that replaces ESLint and Prettier.

### Available Commands

```bash
# Run Biome linter
npm run lint:biome

# Format code with Biome
npm run format

# Run both linting and formatting with auto-fixes
npm run check

# Run Biome in CI mode (fails if there are any issues)
npm run check:ci
```

### VS Code Integration

This project includes VS Code settings to automatically format code on save using Biome. Make sure to install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) for the best experience.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
