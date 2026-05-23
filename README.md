# My Portfolio

Personal portfolio site built with Next.js + Tailwind CSS, deployed to GitHub Pages.

## Stack
- Next.js 14 (static export)
- Tailwind CSS
- DM Mono + Instrument Serif fonts

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment to GitHub Pages

This repo auto-deploys via GitHub Actions on every push to `main`.

### First-time setup:
1. Push this repo to `jdwnnn/jdwnnn.github.io`
2. Go to repo **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow will build and deploy automatically

Your site will be live at **https://jdwnnn.github.io**

## Updating Content

All content lives in `src/app/page.js`. Edit that file to:
- Add new experience
- Add new projects
- Add certifications (replace or add next to Awards section)
- Update links
