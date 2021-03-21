# WELCOME TO ETHX

## Project structure

We are using

-   Next.js:
    This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
    [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
    [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   Typescript:
    [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
-   Storybook:
    [Storybook What's a Story](https://storybook.js.org/docs/react/get-started/whats-a-story)
-   TailwindCSS:
    [Documentation](https://tailwindcss.com/docs)

    Everything should be created using Atomic Design for more details the full book is found online [here](https://atomicdesign.bradfrost.com/table-of-contents/) and a quick reference guide of core concepts can be found [here](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/), [here](https://bradfrost.com/blog/post/atomic-web-design/), storybook version [here](https://storybook.js.org/blog/storybook-addons-to-manage-data-state/), and video of the author of Atomic Design System can be found [here](https://www.youtube.com/watch?v=W-h1FtNYim4)

## Getting Started

### Folder Structure
![Atomic Design](https://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png)
All UI components should be composed in atom, molecules, organisms, templates and pages. They should be created and designed in isolation using storybook.

First, thing clone the repo

```bash
git clone https://github.com/ethx-inc/ethx-core.git
```

Create new feature branch

```bash
git checkout -b <user tag>/<feature>
```

example

```bash
git checkout -b powell/storybook-creation
```

### Creating a new package

### Committing your changes

Please follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) but TLDR:

```
<type>[optional scope]: <description>
[optional body]

[optional footer]
```

types:`[ 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test' ];`
description: `summary of commit`
body(optional): `detailed message of commit for more complex situations`

**examples**

```bash
echo "foo: some message" # fails
echo "fix: some message" # passes
```

### Start Storybook

```bash
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Standards

-   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
-   [Semantic versioning](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions)

## Learn More

-   [How to COMMIT BETTER with Git](https://www.youtube.com/watch?v=Hlp-9cdImSM)

<!-- To learn more about Next.js, take a look at the following resources: -->

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. --> -->
