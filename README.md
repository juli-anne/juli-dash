# juli-dash

This project is (_for now_) an everything-in-one-place web app of the tools and apps I use in my day-to-day. Think of notes, planners, Excel sheets, and links to most-used apps all in one place. I'm building it for my personal use (_for now_).
> ---
As someone who is a really big planner (_I literally plan everything in advance_), I would like to have a nice, little (_cute_) app for myself, so I can have everything in one place. That is a common idea in this modern world right now, and I am no exception. 

### _**What gave me this idea?**_
Currently I mostly use my phone's and desktop's notes app for things like to-do, to-buy, to-you-owe-me-money (or I owe you) lists, gym workout planner, protein intake tracker 

. . . _**And you might ask yourself**_ . . . 

> _**Why don't you download personalized apps for that?**_
> - and the answer is simple, because they are too complex, there are too many features that I DO NOT NEED, and that is the reason why I stopped using those apps and just started writing and tracking everything in my notes app, because it's all just text. 
>
> _**Why am I building an app then if I love my notes app so much?**_
> - well, I don't love it so much, it's nice and simple but it's all just plain text and I have to try real hard for it to look nicer, which then still isn't nice enough for my taste.

I also use Excel like everyday to track my monthly spending, gas stats, trip spending planners . . . And I love it, I really like Excel but again, I don't need all the features and I have to spend time to customize the sheets to look nice (and cute), another reason for me to just build and personalized app with a template that I like (_because I made it_) and where I can just plan my finances.


## _What am I building?_

### The idea for now is to use these techs . . .
> - application: React + TypeScript (Next.js App Router)
> - styling: Tailwind CSS
> - data fetching/state: TanStack Query (server state), lightweight local UI state (Zustand/Redux Toolkit if needed)
> - validation & forms: Zod + React Hook Form
> - tables: AG Grid Community or TanStack Table (inline editing, sorting, filters)
> - backend/API: Next.js API routes
> - database: Prisma ORM with SQLite (development) → switchable to Postgres (Supabase) later
> - testing: Vitest + Testing Library (unit/integration), Playwright (E2E)
> - CI/CD: GitHub Actions (lint, test, build), deploy to Vercel (free tier)

### . . . _to build these features:_
> - notes app for tracking to-do's and to-buy's
> - mini-Excel spreadsheet-like table app for tracking finances
> - a database to store the notes and sheets
> - real nice styling
> - app-widget-like links to most-used apps

### . . . _with this architecture:_
> - app/ for routing, global providers, layout
> - entities/ for shared domain types and Zod schemas (Note, Debt, Transaction, GasEntry, QuickLink)
> - widgets/ for self-contained features (notes, debts, finance, gas, launcher)
> - shared/ for UI primitives (Button, Input, Table wrappers), hooks, utilities (date/money)

### . . . _and this data flow:_
> - client forms validated with Zod
> - API routes as boundaries with schema validation
> - TanStack Query for caching, optimistic updates, and error handling

### . . . _ensuring quality with:_
> - strict TypeScript, ESLint/Prettier, small PRs
> - meaningful loading/empty/error states
> - accessibility and keyboard-first flows
> - code-splitting per feature route

Everything else you want to learn about my project you can find in the Wiki section.
> - - - 
_Code is viewable for portfolio purposes. No permission is granted to use, copy, modify, or distribute._
