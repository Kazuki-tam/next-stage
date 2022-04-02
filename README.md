# Next-Stage

![og-image](https://user-images.githubusercontent.com/36143987/160264953-c95e8c13-9296-483c-ab8c-90a1e0ba9f2c.jpg)

Next-Stage is a starter template with Next.js.  
This template is helpful for web designers and web front-end developers.

## Status

This template is still in development.

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/next-stage)](https://github.com/Kazuki-tam/next-stage/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/next-stage)](https://github.com/Kazuki-tam/next-stage/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2021)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/next-stage)

## Features

- Great developer experience with [Next.js](https://nextjs.org/)
- Lint the project code with [ESLint](https://eslint.org/)
- Built-in test runner with [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/)
- Organizing UI systems with [Storybook](https://storybook.js.org/)
- Managing SEO with [Next SEO](https://github.com/garmeeh/next-seo#readme)
- Generating sitemaps with [next-sitemap](https://github.com/iamvishnusankar/next-sitemap#readme)
- Creating UI components faster with [Headless UI](https://headlessui.dev/)
- Tracking page views with [Google Analytics](https://analytics.google.com/)
- PWA support
- Lint the project code when you commit in local
- Out of the box useful SCSS functions and Mixins

## Requirements

- [Node v16+](https://nodejs.org/en/)

## Main Dependencies

- [Next.js](https://nextjs.org/)
- [Yarn](https://yarnpkg.com/)
- [husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged#readme)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)

## How to use

First, install this project's dependencies.

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Commands

Start your project in development mode.

```bash
yarn dev
```

Start Storybook in development mode.

```bash
yarn dev:sb
```

Start all development tasks in development mode.

```bash
yarn devAll
```

Build your project for production.

```bash
yarn build
```

Build Storybook.

```bash
yarn build:sb
```

Build your all project.

```bash
yarn buildAll
```

Lint your code.

```bash
yarn lint
```

Fix and format your code.

```bash
yarn lint:fix
```

Open Docs about Next.js.

```bash
yarn docs
```

Open all docs.

```bash
yarn docsAll
```

<details>
<summary>Other docs commands</summary>
Open docs about React.

```bash
yarn docs:react
```

Open docs about TypeScript.

```bash
yarn docs:ts
```

Open docs about Storybook.

```bash
yarn docs:sb
```

Open docs about Jest.

```bash
yarn docs:jest
```

Open docs about Playwright.

```bash
yarn docs:pw
```

</details>

<details>
<summary>Other support commands</summary>
Install missing TypeScript typings.

```bash
yarn postInstall
```

Check the package's license.

```bash
yarn checkLicense
```

</details>

## Google Analytics

You need to set up a measurement ID in an env file if you would like to use Google Analytics.
Create a `.env.production` file on the root of the project.

```
NEXT_PUBLIC_GA_ID=123
```

## SEO Settings

You have to edit `next-seo.config.js`, `next-sitemap.js`, and `manifest.webmanifest` at least before you get started with your project.

## Libraries

- UI: [Headless UI](https://headlessui.dev/)
- Slider: [Swiper](https://swiperjs.com/)
- Modal: [Micromodal.js](https://micromodal.vercel.app/)
- State: [Jotai](https://jotai.org/)
- Intersection Observer: [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)

## Notes

This starter template doesn't support Internet Explorer.  
Feel free to use this template.

## License

MIT
