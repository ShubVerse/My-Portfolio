# Shubham Awasthi — Portfolio

Built with React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

## Where to edit content

Almost everything is data-driven, so you shouldn't need to touch component
markup for routine updates:

- `src/data/nav.js` — nav links, GitHub/LinkedIn/email, resume file path
- `src/data/skills.js` — skill categories and items
- `src/data/projects.js` — Featured Projects + UI/UX Showcase content,
  including each project's case study (problem/solution/role/outcome)

## Placeholders to fill in before you publish

Search the project for `[Add` / `[Describe` / `[Year]` / `[Role]` / `#` to find
every intentional placeholder:

- `src/data/nav.js` — replace `github`, `linkedin`, `email` with your real links,
  and confirm `resumeUrl`
- `public/resume/Shubham-Awasthi-Resume.pdf` — add your actual resume PDF here
- `src/data/projects.js` — replace `live`/`github` URLs (currently `#`),
  add real screenshots (set `image` to an imported asset path instead of `null`),
  and fill in the case-study `problem`, `role`, and `outcome` fields
- `src/components/Timeline.jsx` — the `[Year]` for your MCA, and confirm the
  internship dates/title are worded the way you want
- `src/data/projects.js` → `designShowcase` — add real UI/UX shots (dashboard,
  landing, web app, responsive views)

## Notes on the design

- Dark theme, tokens live as CSS variables in `src/index.css` and are mapped
  into Tailwind via `tailwind.config.js` (`bg`, `surface`, `border`, `text`,
  `muted`, `primary`, `accent`, `success`, `error`) — change the palette in
  one place.
- Section eyebrows (`~/about.jsx`, `~/projects.jsx`, ...) and the hover corner
  brackets are the recurring signature motif, tying together your two
  identities: developer (file paths) and designer (alignment guides).
- Respects `prefers-reduced-motion`, has visible focus states, and all
  interactive elements are keyboard reachable.
