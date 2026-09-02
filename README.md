# Kiran H K — Professional Portfolio

Personal portfolio for **Kiran H K**, DevOps Engineer & Full Stack Developer.

## Profile

- **Name:** Kiran H K
- **Title:** DevOps Engineer & Full Stack Developer
- **Experience:** 5+ Years
- **Location:** Bengaluru, Karnataka, India

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- next-themes (dark / light mode)

Site sections cover: Frontend · Backend · Database · Cloud · DevOps · Monitoring & Security.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables from `.env.example` if you use them.
5. Deploy.

No Docker is required to deploy the portfolio itself — it's a standard Next.js app.

## Customization

All content lives in `data/`, not hardcoded in components:

```
data/
├── profile.ts       # Name, title, contact info, summary
├── skills.ts         # Skill categories and descriptions
├── experience.ts      # Career timeline
├── projects.ts        # Featured projects (MyChits/ChitXpert, Retail Billing Software)
└── repositories.ts    # Optional GitHub repo list
```

Edit these files to update content — no need to touch components or pages.

## Resume

Place your resume PDF at:

```
public/resume/Kiran-HK-Resume.pdf
```

The "Download Resume" buttons link to this path. If the file isn't present, the link
returns a 404 without breaking the rest of the site.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in as needed:

```bash
cp .env.example .env.local
```

`.env`, `.env.local`, and `.vercel` are already git-ignored — never commit secrets.

## Project Structure

```
app/            # Routes (App Router)
components/     # UI components, grouped by section
data/           # All portfolio content
lib/            # Utility functions
types/          # Shared TypeScript types
public/         # Static assets (resume, images)
```

## Notes on Content Accuracy

Every experience entry, project, date, and technology on this site is sourced directly
from the actual resume — no invented job titles, companies, metrics, or technologies.
