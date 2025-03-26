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

## Edit pages

- Create pages under `pageContent` directory.
- Use `piggybank/pageContent/default.tsx` as a template to add more pages.
- Use `piggybank/constants/page-map.ts` to map the newly created page to a `pageId`
  - Ex. `piggybank/pageContent/savings/unit1.tsx` is mapped to `pageId` of `1`.
