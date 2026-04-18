# Portfolio — Mehtab Riaz

Personal developer portfolio built with **Next.js** (Pages Router), **React**, and **Sass**. Content is driven mostly by JSON under `content/`, with sections for featured work, about, technical stack, experience, and a configurable footer.

## Requirements

- **Node.js** 18+ (20 LTS recommended)
- **npm** (or compatible client)

### Font Awesome Pro

This project depends on **Font Awesome Pro** packages (`@fortawesome/pro-*`). To install dependencies you need access to those packages (Font Awesome npm token / org subscription).

1. Create an [npm automation token](https://docs.npmjs.com/creating-and-viewing-access-tokens) with access to Font Awesome.
2. In the project root, add a `.npmrc` file (do **not** commit secrets):

   ```ini
   @fortawesome:registry=https://npm.fontawesome.com/
   //npm.fontawesome.com/:_authToken=${FONTAWESOME_NPM_AUTH_TOKEN}
   ```

3. Set the environment variable `FONTAWESOME_NPM_AUTH_TOKEN` before `npm install`, or paste the token locally only on your machine and keep `.npmrc` out of version control.

If you fork this repo without Pro access, replace Pro icon imports with **free** Font Awesome packages and adjust `components/utils/icon.util.jsx` accordingly.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Next.js in development mode |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest in watch mode |
| `npx jest --passWithNoTests` | One-off test run (no watch) |

## Editing content

| Area | Location |
|------|----------|
| Site name / GitHub username for projects API | `content/_settings.json` |
| Hero, colors | `content/index/hero.json`, `content/index/_colors.json` |
| Featured projects | `content/projects/featured.json` |
| Technical + stack cards | `content/index/technical.json` |
| Experience / roles | `content/index/experience.json` |
| About (inline in component) | `components/sections/index/about.jsx` |
| Footer links & social | `content/footer.json` |
| Navbar | `content/navbar.json` (if used) |

After changing JSON, refresh the dev server if something looks cached.

## Pages of note

- **`/`** — Home (hero, featured projects, about, technical, experience)
- **`/projects`** — GitHub-powered recent repos (uses `getServerSideProps` + `content/_settings.json` → `username.github`)
- **`/articles`** — Medium feed via rss2json (uses `username.medium` in settings)
- **`/case-studies`** — Placeholder / coming soon

## Deployment

The app is a standard **Next.js** deploy. **Vercel** is the simplest path (`next build` + serverless functions for API routes and `getServerSideProps`).

Static hosting (e.g. GitHub Pages) requires a **static export** and refactors for any server-only features; see Next.js docs on [`output: 'export'`](https://nextjs.org/docs/app/building-your-application/deploying/static-exports).

## Project layout (high level)

```
components/     React sections, blocks, layout, utils
content/        JSON content and per-page color tokens
pages/          Next.js routes and API handlers
public/         Static assets (images, favicon, etc.)
styles/         Global SCSS, section modules, structure
tests/          Jest tests
```

## License

[MIT](LICENSE.md) — Copyright (c) 2023 Mehtab Riaz.

## Credits

UI and structure were originally inspired by open-source portfolio themes (including work by [Brittany Chiang](https://brittanychiang.com/)); this repository has been customized for Mehtab’s experience, featured products, and copy.
