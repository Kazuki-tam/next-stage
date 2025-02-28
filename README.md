This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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
