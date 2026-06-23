# paulplatzer.github.io

Personal academic research website for Paul Platzer, built with [Astro](https://astro.build).

## Local assets and content sync

Real assets (photos, PDFs, logos) live in `content/` and are **not** served directly by
Astro. A sync step copies them into `public/assets/` before the build.

### Asset locations in `content/`

| Asset | Path in `content/` |
|---|---|
| Personal photo | `content/paul_platzer_bandeau-1.webp` |
| Paper PDFs | `content/papers_pdfs/<filename>.pdf` |
| DYNADIST-NA concept note | `content/dynadist-na/DYNADIST_NA_Concept_Note.pdf` |
| DYNADIST-NA logos | `content/dynadist-na/logos/` |

### Running the sync manually

```sh
npm run sync:assets
```

This copies all assets from `content/` into `public/assets/` (creating sub-folders
`images/`, `pdfs/`, `logos/` as needed). Files are overwritten if the source is updated.
Hidden files are skipped. PDF filenames are lightly sanitised (leading journal-tag blocks
removed, spaces replaced with underscores).

`npm run build` runs the sync automatically before the Astro build, so you do not need
to run it separately in CI.

### Adding new content

- **New paper PDFs**: drop the file in `content/papers_pdfs/`, then add an entry in
  `src/data/publications.ts` and a key in `src/data/publicationLinks.ts` pointing to
  `/assets/pdfs/<sanitised-name>.pdf`.
- **DYNADIST-NA logos / concept note**: place files in `content/dynadist-na/` and
  `content/dynadist-na/logos/` respectively; the sync picks them up automatically.
- **Personal photo**: replace `content/paul_platzer_bandeau-1.webp`.

---

## Local development

### Prerequisites

- Node.js 22 (matches `package.json` `engines` field and the GitHub Actions workflow)
- npm (comes with Node)

### Install dependencies

```sh
npm install
```

### Start the development server

```sh
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build the site

```sh
npm run build
```

The static output is written to `./dist/`.

### Preview the production build locally

```sh
npm run preview
```

## Deployment — GitHub Pages

The site is deployed automatically on every push to `main` via
`.github/workflows/deploy.yml` using the official GitHub Pages Actions.

**One-time setup in the GitHub repository settings:**

1. Go to **Settings → Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main`; the workflow will build and deploy automatically.

The live site will be available at `https://paulplatzer.github.io`.

## Project structure

```
paulplatzer.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions build & deploy
├── public/
│   └── assets/
│       ├── images/            # Profile photo → photo.jpg
│       ├── figures/           # Scientific figures (e.g. z500_analogs.png)
│       ├── logos/             # Project/funder logos
│       ├── pdfs/              # Author-copy PDFs of publications
│       └── cv/                # CV PDF
├── src/
│   ├── components/
│   │   ├── BaseLayout.astro   # (in layouts/)
│   │   ├── Sidebar.astro
│   │   ├── SiteLinkButtons.astro
│   │   └── FigurePlaceholder.astro
│   ├── data/
│   │   ├── navigation.ts      # Sidebar nav items + visibility flags
│   │   ├── publications.ts    # Structured publication list
│   │   ├── publicationLinks.ts# Local PDF paths keyed by publication key
│   │   └── talks.ts           # Structured talk list
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell with sidebar
│   ├── pages/
│   │   ├── index.astro        # Home / About
│   │   ├── research-themes.astro
│   │   ├── publications.astro
│   │   ├── projects.astro
│   │   ├── code.astro         # Hidden — see below
│   │   ├── talks.astro
│   │   ├── teaching.astro
│   │   ├── cv.astro           # Hidden — see below
│   │   ├── music.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Where to place assets

| Asset | Location |
|---|---|
| Profile photo | `public/assets/images/photo.jpg` |
| Scientific figures | `public/assets/figures/z500_analogs.png`, etc. |
| Funder / project logos | `public/assets/logos/` |
| Publication PDFs | `public/assets/pdfs/<key>.pdf` (keys defined in `src/data/publicationLinks.ts`) |
| CV PDF | `public/assets/cv/cv_paul_platzer.pdf` |
| DYNADIST-NA concept note | `public/assets/pdfs/DYNADIST_NA_Concept_Note.pdf` |

After adding the profile photo, update the `<div class="sidebar-photo-placeholder">` in
`src/components/Sidebar.astro` to an `<img>` tag:

```astro
<img
  class="sidebar-photo"
  src="/assets/images/photo.jpg"
  alt="Photo of Paul Platzer"
/>
```

## How to unhide the Code and CV pages

Both pages are built but hidden from the sidebar navigation. To make them visible, open
`src/data/navigation.ts` and set `visible: true` for the relevant entry:

```typescript
// Change this:
{ label: 'Code', href: '/code', visible: false },
// To this:
{ label: 'Code', href: '/code', visible: true },
```

Do the same for `CV` when the CV is ready.

## How to add or update publications

Edit `src/data/publications.ts`. Each entry has:

- `key` — short identifier also used in `publicationLinks.ts`
- `authors`, `year`, `title`, `journal`
- `doiUrl` — link to the published version (optional)
- `pdfLocalUrl` — path to the author-copy PDF under `public/assets/pdfs/` (optional)
- `tags` — optional keyword list

Update `src/data/publicationLinks.ts` with paths for inline references used on the
Research Themes page.

Reference content: [https://paulplatzer.wordpress.com/home/publications/](https://paulplatzer.wordpress.com/home/publications/)

## How to add or update talks

Edit `src/data/talks.ts`. Reference content:
[https://paulplatzer.wordpress.com/presentations/](https://paulplatzer.wordpress.com/presentations/)

## How to update the Music page

Edit `src/pages/music.astro`. Reference content:
[https://paulplatzer.wordpress.com/musique/](https://paulplatzer.wordpress.com/musique/)

## How to generate scientific figures

The figures on the Research Themes page are placeholders. See the TODO comments in
`src/pages/research-themes.astro` for the complete workflows:

- **z500_analogs.png** — ERA5 daily DJF z500, 5° resolution, detrended, anomalies,
  analog search excluding pairs within one year, smallest-distance pair side-by-side map.
- **sst_analogs.png** — Kaplan SST v2, JJA, same logic.

The `pyanalogs` package (locally at `../analogs_package/pyanalogs/` once available) can
handle the analog search step. Place generated figures in `public/assets/figures/`, then
replace the `<FigurePlaceholder>` components in `research-themes.astro` with `<img>` tags.

Do not run figure generation inside the website build.
