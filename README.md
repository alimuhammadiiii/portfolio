# Ali Muhammadi — Portfolio

Personal portfolio for Ali Muhammadi, a Frontend Developer with 3+ years of experience.

Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Getting started

```sh
pnpm install
pnpm dev       # start the dev server
pnpm build     # type-check and build for production
pnpm lint      # run ESLint
pnpm preview   # preview the production build
```

## Project structure

```
src/
  data/       # All portfolio content (profile, projects, experience, skills, education)
  components/
    ui/       # Shared UI primitives (Button, GlassCard, SectionHeading, Reveal, ...)
    sections/ # Page sections (Navbar, Hero, About, Projects, Experience, Skills, ...)
  lib/        # Small utilities
public/       # Favicon, OG image, robots.txt, sitemap.xml
```

## Editing content

All personal information, projects, work experience, and skills live in
`src/data/` — update them there without touching components.

## Notes

- The site deploys to GitHub Pages at
  `https://alimuhammadiiii.github.io/portfolio/` — canonical,
  Open Graph, and sitemap URLs already point there. If the site later moves
  to a custom domain, update `src/data/site.ts`, `index.html`,
  `public/robots.txt`, `public/sitemap.xml`, and `base` in `vite.config.ts`.
- To enable the résumé download, drop the PDF into `public/` and set
  `resumeUrl` in `src/data/profile.ts` to
  `` `${import.meta.env.BASE_URL}ali-muhammadi-cv.pdf` `` so it resolves
  correctly under the GitHub Pages subpath.

## Deployment (GitHub Pages)

The site deploys automatically via the
[official Vite + GitHub Pages setup](https://vite.dev/guide/static-deploy#github-pages):

1. Push the repository to GitHub.
2. In the repo, go to **Settings → Pages**. Under **Build and deployment**,
   set **Source** to **GitHub Actions**. (The workflow also passes
   `enablement: true`, so on most repos this step happens automatically.)
3. Every push to `main` (or a manual run from the Actions tab) builds the
   site and deploys it via `.github/workflows/deploy.yml`.
