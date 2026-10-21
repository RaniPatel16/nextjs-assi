# Project 1: Student Directory

This is a standalone Next.js App Router project. It shows a searchable/filterable list of sample students and a dynamic profile page.

## Run it

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Click any student to open that profile. Sample profiles use routes such as `/101`.

## Main files

- `app/page.tsx` — student list, search, and course filter
- `app/[id]/page.tsx` — dynamic student profile
- `data/students.ts` — sample student data
- `app/globals.css` — responsive styles
