# bth-node.github.io

Course website for **kursen node** (BTH), built with [Astro](https://astro.build)
+ [Starlight](https://starlight.astro.build). Published via GitHub Pages at
https://bth-node.github.io/, remote `git@github.com:bth-node/bth-node.github.io.git`.

This is a nested repo inside the `dbwebbse` dev meta-repo — see the top-level
`CLAUDE.md` at `/home/mos/git/dbwebbse/CLAUDE.md` for how it fits into the
wider tree. It's a normal standalone git repo; treat it independently.

## Commands

```
npm install
npm run dev       # localhost:4321
npm run build     # -> ./dist/
npm run preview
npm run astro -- --help
```

## Structure

- `astro.config.mjs` — Starlight config: site title, favicon, logo, custom CSS,
  edit-link base URL, and the **sidebar** (one collapsed section per topic,
  auto-generated from the matching `src/content/docs/<dir>/` folder — e.g.
  `kmom01` sidebar entry ↔ `src/content/docs/kmom01/`).
- `src/content/docs/` — the actual course content, `.md`/`.mdx` files, one
  route per file. Course moments live in `kmomNN/index.mdx`. Other top-level
  sections: `intro`, `labbmiljo`, `kursrepo`, `kom-igang`, `studieguide`,
  `ovrigt`.
- `src/assets/` — images referenced from content, organized in subfolders
  roughly matching the content section they illustrate (e.g. `kmom04/`,
  `kursrepo/`, `resp/`).
- `src/components/` — custom Astro components used in MDX (`Figure`,
  `CustomFigure`, `ListIsbn`, `ReadingTime`, `YouTube`).
- `src/plugins/remark-reading-time.mjs` — adds reading-time frontmatter to docs.
- `src/styles/dbwebb.css` — custom CSS override, loaded via `customCss` in
  Starlight config.
- `public/lecture/` — standalone HTML slide decks served as static files.

## Adding/editing course content

- New page under an existing section → add a `.md`/`.mdx` file in that
  section's `src/content/docs/<dir>/`; it appears in the sidebar automatically
  (sidebar entries use `autogenerate`).
- New top-level section → add both the content folder **and** a matching
  entry in the `sidebar` array in `astro.config.mjs`.
- Content is in Swedish. Match existing tone/terminology in the section
  you're editing rather than introducing new phrasing conventions.
- Images: drop into the matching `src/assets/<topic>/` subfolder and
  reference with a relative import per Starlight/Astro conventions (see
  existing `.mdx` files for the pattern, e.g. `kmom04/index.mdx`).

## Working conventions

- This is a shared teaching repo — students and other course staff may
  reference specific URLs/pages. Don't restructure/rename existing content
  paths without checking, since that breaks existing links (edit-link URLs,
  bookmarks, things referenced in `kmom` instructions elsewhere).
- Don't propose committing `node_modules`, `.astro/`, or `dist/` — already
  gitignored.
- Follow the top-level dbwebbse repo's push/commit confirmation policy: ask
  before pushing, since this is a shared/public course site.
