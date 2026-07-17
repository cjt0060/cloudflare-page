# Cloud Engineer Portfolio

A production-quality personal portfolio website built with **Astro**, **Tailwind CSS**, and **TypeScript**. Designed for cloud engineers — featuring projects, blog posts, certifications, and resume. Deploys directly to **Cloudflare Pages**.

## Features

- **Dark mode by default** with premium, minimalistic design
- **Blazing fast** — static site generation, optimized assets, 95+ Lighthouse scores
- **Fully responsive** — mobile-first design across all pages
- **Accessible** — WCAG-friendly markup, semantic HTML, focus indicators
- **SEO optimized** — Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt, RSS
- **MDX blog** — syntax highlighting, reading time, table of contents, categories/tags
- **Reusable components** — project cards, timeline, certification badges, and more
- **Cloudflare Pages ready** — zero-config deployment

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Astro](https://astro.build) | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [MDX](https://mdxjs.com) | Blog content |
| [Cloudflare Pages](https://pages.cloudflare.com) | Hosting & CDN |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |

## Pages

- **Home** — Hero, tech stack, featured projects, latest posts, certifications
- **About** — Bio, skills, social links
- **Resume** — Experience timeline, skills grid, education, PDF download
- **Projects** — Card grid with individual detail pages
- **Portfolio** — Featured project highlights
- **Blog** — MDX articles with categories, tags, syntax highlighting
- **Certifications** — AWS, GCP, Azure, Kubernetes, Terraform badges
- **Contact** — Form with Cloudflare Turnstile placeholder
- **404** — Custom error page

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
git clone https://github.com/yourusername/cloud-engineer-portfolio.git
cd cloud-engineer-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

The build output is in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Cloudflare Pages

### Option 1: Connect GitHub Repository (Recommended)

1. Push this repository to GitHub
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `20`
6. Deploy

### Option 2: Direct Upload

```bash
npm run build
npx wrangler pages deploy dist
```

## Folder Structure

```
├── public/                  # Static assets (served as-is)
│   ├── favicon.svg
│   ├── og-default.png
│   ├── resume.pdf
│   └── images/
│       └── projects/        # Project screenshots/diagrams
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── CTA.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogCard.astro
│   │   ├── CertificationCard.astro
│   │   ├── Timeline.astro
│   │   ├── TechBadge.astro
│   │   ├── SocialIcons.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Pagination.astro
│   │   ├── Breadcrumbs.astro
│   │   └── TableOfContents.astro
│   ├── content/             # Content collections
│   │   ├── config.ts        # Collection schemas
│   │   └── blog/            # MDX blog posts
│   ├── data/                # Structured data
│   │   ├── projects.ts
│   │   └── certifications.ts
│   ├── layouts/             # Page layouts
│   │   ├── BaseHead.astro
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── pages/               # Route pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── resume.astro
│   │   ├── portfolio.astro
│   │   ├── certifications.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   ├── rss.xml.ts
│   │   ├── robots.txt.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── projects/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── ci.yml
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── .env.example
├── .eslintrc
├── .prettierrc
├── .gitignore
├── LICENSE
└── README.md
```

## How To

### Add a Blog Post

1. Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A short description for SEO and previews."
publishedDate: "2026-01-15"
category: "AWS"
tags: ["aws", "lambda", "serverless"]
draft: false
---

## Introduction

Your content here with full MDX support...
```

2. The post will automatically appear on the blog page and RSS feed.

### Add a Project

Edit `src/data/projects.ts` and add a new entry:

```typescript
{
  title: "Project Name",
  description: "Short description",
  longDescription: "Detailed description for the project page",
  technologies: ["Tech1", "Tech2"],
  image: "/images/projects/your-image.svg",
  github: "https://github.com/you/repo",
  demo: "https://demo.example.com",
  lessons: ["Lesson 1", "Lesson 2"],
  slug: "project-slug",
  featured: true,
}
```

### Add a Certification

Edit `src/data/certifications.ts` and add a new entry:

```typescript
{
  title: "Certification Name",
  issuer: "Issuing Organization",
  date: "2026",
  credentialUrl: "https://verify.example.com",
  description: "What this certification covers.",
  category: "AWS",
}
```

### Customize Colors

Edit `tailwind.config.mjs` and modify the `colors.primary` and `colors.surface` palettes:

```javascript
colors: {
  primary: {
    500: "#your-color", // Main accent
    // ... other shades
  },
}
```

### Replace Placeholder Content

1. **Personal info** — Update `src/components/Footer.astro`, `src/components/SocialIcons.astro`, and `src/layouts/BaseHead.astro`
2. **Site URL** — Update `site` in `astro.config.mjs`
3. **Resume** — Replace `public/resume.pdf`
4. **Projects** — Edit `src/data/projects.ts`
5. **Certifications** — Edit `src/data/certifications.ts`
6. **Blog posts** — Replace files in `src/content/blog/`
7. **Images** — Replace SVGs in `public/images/`

### Set Up Contact Form

1. Sign up for [Formspree](https://formspree.io) or use Cloudflare Workers
2. Update the form `action` URL in `src/pages/contact.astro`
3. For Cloudflare Turnstile, get keys from the [Cloudflare Dashboard](https://dash.cloudflare.com/turnstile) and update `.env`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `PUBLIC_SITE_URL` | Your production URL |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret |
| `PUBLIC_CONTACT_FORM_ENDPOINT` | Contact form submission URL |

## License

MIT — see [LICENSE](./LICENSE) for details.