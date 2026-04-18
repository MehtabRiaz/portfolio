# Portfolio — Mehtab Riaz

Personal developer portfolio built with **Next.js** (Pages Router), **React**, and **Sass**. Content is driven mostly by JSON under `content/`, with sections for featured work, about, technical stack, experience, and a configurable footer.

## Requirements

- **Node.js** 18+ (20 LTS recommended)
- **npm** (or compatible client)

### Icons (Font Awesome)

Icons use **`@fortawesome/free-solid-svg-icons`**, **`free-regular-svg-icons`**, and **`free-brands-svg-icons`** only—no paid Pro subscription or npm token. `components/utils/icon.util.jsx` maps older Pro-style prefixes (`fad`, `fat`, `fal`) to **solid** so existing content keeps working.

Browse names in the [Font Awesome search](https://fontawesome.com/search?o=r&m=free).

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
| `npm run build` | Static export to `out/` (`output: 'export'`) |
| `npm run start` | Not used for static export; preview with `npx serve out` after `npm run build` |
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
- **`/projects`** — GitHub recent repos (data fetched at **build time** via `getStaticProps` + `content/_settings.json` → `username.github`; push a new commit to refresh)
- **`/articles`** — Medium feed via rss2json (**build time**; same refresh model)
- **`/case-studies`** — Placeholder / coming soon

## Deployment

### GitHub Pages (configured in this repo)

The project builds as a **static export** (`next.config.js` → `output: 'export'`, `out/`). GitHub Actions workflow: [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml).

1. Push this repo to GitHub (`main` or `master`).
2. **Settings → Pages** → **Build and deployment** → source: **GitHub Actions** (not “Deploy from a branch”).
3. Run the workflow (**Actions** tab → “Deploy to GitHub Pages” → *Run workflow*) or push to `main`.

**URLs**

- Repository named **`YOURNAME.github.io`** → site is `https://YOURNAME.github.io` (no subpath; workflow sets `NEXT_PUBLIC_BASE_PATH` empty).
- Any other repo name → site is `https://YOURNAME.github.io/REPO/`; `basePath` is set automatically for asset URLs.

**Local static preview**

```bash
npm run build
npx serve out
```

To mimic a project subpath locally: `NEXT_PUBLIC_BASE_PATH=/your-repo npm run build`.

### Vercel / other hosts

You can still deploy the **`out/`** folder to any static host, or point Vercel at the repo (it will run `next build`; static export is compatible with a static deployment).

## Project layout (high level)

```
components/     React sections, blocks, layout, utils
content/        JSON content and per-page color tokens
pages/          Next.js routes
public/         Static assets (images, favicon, etc.)
styles/         Global SCSS, section modules, structure
tests/          Jest tests
```

## License

[MIT](LICENSE.md) — Copyright (c) 2023 Mehtab Riaz.

## Credits

UI and structure were originally inspired by open-source portfolio themes (including work by [Brittany Chiang](https://brittanychiang.com/)); this repository has been customized for Mehtab’s experience, featured products, and copy.
