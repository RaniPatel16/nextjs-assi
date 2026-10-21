# Project 2: Recipe Explorer

This is a standalone Next.js App Router project. It shows a searchable/filterable list of sample recipes and a dynamic recipe detail page.

## Run it

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Click any recipe to open its details. Sample recipe routes include `/lemon-pasta`.

## Main files

- `app/page.tsx` — recipe list, search, and category filter
- `app/[id]/page.tsx` — dynamic recipe detail
- `data/recipes.ts` — sample recipe data
- `app/globals.css` — responsive styles
