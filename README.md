# Kiran H K — DevOps Engineer Portfolio

A production-ready, single-page-plus-routes portfolio for a DevOps Engineer, built with Next.js App Router, TypeScript, and Tailwind CSS. Dark-first, component-based, and structured so content lives in data files rather than inside components.

## Features

- Responsive, accessible, dark/light-mode portfolio with a sticky, blur-on-scroll navbar
- Animated hero with a signature terminal + deployment pipeline visual (Framer Motion)
- Skills grouped by category, experience timeline, project case studies with architecture diagrams
- Interactive "How I build & deploy" pipeline (Git → CI → security scan → Docker → Kubernetes → Helm → ArgoCD → cloud → monitoring)
- GitHub section that fetches repositories server-side, with a static fallback if the API call fails
- Resume section with download/view actions that don't break if the PDF hasn't been added yet
- Contact section with a validated form (`react-hook-form`) that opens a pre-filled email
- SEO: metadata, Open Graph, Twitter cards, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`
- Respects `prefers-reduced-motion`; visible focus states throughout

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev) for icons
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [react-hook-form](https://react-hook-form.com) for the contact form

No backend, database, or server required beyond what Next.js/Vercel already provide.

## Folder structure

```
app/                     Routes (App Router)
  layout.tsx             Root layout, fonts, metadata, JSON-LD
  page.tsx                Homepage — assembles all sections
  sitemap.ts / robots.ts  Generated SEO files
  about/                  /about
  projects/               /projects and /projects/[slug]
  contact/                /contact

components/
  layout/                 Navbar, MobileMenu, Footer
  home/                   Homepage sections (Hero, Skills, Projects, Pipeline, Contact, ...)
  projects/                Project card, grid, architecture visual
  skills/                  Skill category + pill components
  experience/              Timeline
  ui/                       Button, Badge, SectionHeading, Container
  animations/               FadeIn, Reveal, Stagger wrappers
  icons/                     Custom Github/LinkedIn icons

data/                     All editable content
  profile.ts               Name, title, summary, nav items, stats
  skills.ts                 Skill categories and items
  experience.ts              Role + responsibilities
  projects.ts                 Projects and the DevOps pipeline stages
  repositories.ts              Static GitHub repo fallback list

lib/
  cn.ts                      Small classnames helper
  github.ts                   Server-side GitHub repo fetch (with fallback)

public/
  resume/                     Put your resume PDF here
  icons/                       Favicon
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and set your GitHub username:

```bash
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
```

This is only used to fetch featured repositories server-side for the GitHub section. If it's unset, unreachable, or rate-limited, the site automatically falls back to the static list in `data/repositories.ts` — nothing breaks either way. No tokens or secrets are required or used client-side.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import the repository — Vercel auto-detects Next.js, no config needed.
4. Add `NEXT_PUBLIC_GITHUB_USERNAME` under **Environment Variables** (optional).
5. Click **Deploy**.

No Docker or extra build steps are required.

## Customization

- **Personal info, nav, stats:** edit `data/profile.ts`
- **Skills:** edit `data/skills.ts` — add/remove categories or items, each item has a `usage` level (`Daily` / `Regular` / `Working knowledge`), intentionally not a fake percentage
- **Experience:** edit `data/experience.ts`
- **Projects:** edit `data/projects.ts` — each project needs a unique `slug`, which becomes its `/projects/[slug]` route automatically
- **Pipeline stages** (the "How I build & deploy" section): also in `data/projects.ts` as `pipelineStages`
- **Colors/fonts:** edit the `@theme` block and `.light` overrides in `app/globals.css`
- **Site URL** (used in metadata, sitemap, robots): update the `siteUrl` constant in `app/layout.tsx` and `app/sitemap.ts`/`app/robots.ts` once you have a real domain

### Replacing the resume

Add your PDF at:

```
public/resume/Kiran-HK-DevOps-Engineer.pdf
```

The download/view buttons in the navbar, mobile menu, and Resume section all point to this path already (`profile.resumePath` in `data/profile.ts`). If the file isn't present yet, the links simply won't resolve — nothing else on the site breaks.

### Open Graph image

Add a 1200×630 image at `public/images/og/og-image.png` for social share previews.

## Quality checklist

- [x] `npx tsc --noEmit` — no errors
- [x] `npx eslint .` — no errors or warnings
- [x] `npm run build` — all routes compile and prerender successfully
- [x] Every route checked: `/`, `/about`, `/projects`, `/projects/[slug]` (all 4 projects), `/contact`, `/sitemap.xml`, `/robots.txt`, custom 404
- [x] Dark and light mode both styled
- [x] Mobile navigation (hamburger + slide-down) works independently of desktop nav
- [x] Resume links degrade gracefully with no PDF present
- [x] `prefers-reduced-motion` respected globally
- [x] Visible keyboard focus states on interactive elements
