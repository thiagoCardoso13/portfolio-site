# Portfolio site plan (project #15)

Goal: one public place that shows the projects, the CV and a way to reach me, to put at the top of LinkedIn and the CV.

## Decisions
- Astro 7 (static output), plain pages and a typed data file (`src/data/projects.ts`); no UI framework.
- Visual: minimal, light with automatic dark mode, a single teal accent, system/Inter font.
- Content in English; Spanish CV linked.
- Deploy: Vercel from GitHub, automatic deploy on push to main.
- Node 22 lives in `~/dev/tools/node-v22.23.5-darwin-arm64/bin` (add to PATH).

## Phases
1. [x] Skeleton: layout, home, project pages, about, CV downloads
2. [ ] Add real contact (LinkedIn, email) and a short bio
3. [ ] Per-project write-ups (screens, GIFs, what I learned)
4. [ ] SEO basics: titles, Open Graph image, sitemap
5. [x] GitHub repo + Vercel deploy (https://portfolio-site-dusky-iota.vercel.app); custom domain still optional
6. [ ] Add the Project_AI_Agent live demo link, then new projects as they ship

## Adding a project
Add an entry to `src/data/projects.ts` and an image to `public/img/`; the card and detail page are generated.
