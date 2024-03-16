# Turborepo starter with Shad CN

This is forked from the official starter Turborepo.

## Changes to original repo

1. Added [ShadCN UI](https://ui.shadcn.com/)

2. Added [Tailwind CSS](https://tailwindcss.com/) (as it is a dependency of shadCN)

## Using this example

1. Clone the repo

2. Install the deps

3. Dev away

### Add a component

1. `cd packages/ui`

2. `pnpm generate:component` -- refer to
   https://ui.shadcn.com/docs/components/accordion

3. Edit `packages/ui/components/index.tsx` to `export * from "./new-component"`
   if your component is a server component

   OR

   Edit `packages/ui/components/client-components.tsx` to `export * from
"./new-component"` if your component is a client component

### Use a component

1. Within you app folder, for example `apps/web`

2. Add a `postcss.config.js` file

3. Within that simply export the UI Lib's config: `module.exports =
require("@repo/ui/postcss.config");`

4. Add a `tailwind.config.ts` file

5. Import the shared config from the UI lib: `import sharedConfig from
"@repo/ui/tailwind.config";`

6. Add a default export which has the following:

```
{
  presets: [sharedConfig], // The config you imported from the UI lib in an array
  content: [
    "../../packages/ui/src/**/*.tsx", // Path to te UI lib so tailwind knows to factor those classes
    "./app/**/*.tsx", // Path to your components so tailwind can include those classes
  ],
}
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
