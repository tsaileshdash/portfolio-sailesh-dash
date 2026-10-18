# Sailesh Dash — Cinematic QA Engineering Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, React, Tailwind CSS v4, React Three Fiber, Drei, Framer Motion, and Lucide icons.

## Included

- Cinematic responsive hero with your supplied portrait and a lightweight 3D scene
- Career timeline based on the supplied résumé
- QA skills grouped by category
- Interactive illustrative case-study modals (clearly marked as templates)
- Testing principles, domain experience, About, and contact sections
- Résumé PDF download
- Reduced-motion support and a static fallback while the 3D scene loads
- Metadata, sitemap, and robots route

## Requirements

- Node.js 20.9+ (Node 22 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verify production build

```bash
npm run build
npm start
```

## Personalize before publishing

Edit `data/profile.ts` to update the name, email, location, résumé path, and real LinkedIn/GitHub URLs. Empty social URLs are intentionally hidden. The phone number is not displayed.

The four case-study cards are illustrative templates, not claims of completed client projects. Update `projects` in `data/profile.ts` with verified work, approved screenshots, repository links, and real results before public launch. Do not publish confidential client material.

Replace `https://example.com` in generated sitemap/robots output by setting `NEXT_PUBLIC_SITE_URL` to the eventual public URL. You can also add a `.env.local` file with:

```bash
NEXT_PUBLIC_SITE_URL=https://your-live-domain.example
```

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the root directory at the repository root.
5. Framework preset: Next.js. Build command: `npm run build` (default is also fine).
6. Add `NEXT_PUBLIC_SITE_URL` using the Vercel-provided URL after first deployment, then redeploy.
7. Open the production URL on desktop and mobile; test résumé download, email link, mobile menu, section navigation, and project modals.

## Git commands

Run from this folder after creating a new GitHub repository (replace the URL):

```bash
git init
git add .
git commit -m "Build cinematic QA portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sailesh-dash-portfolio.git
git push -u origin main
```

## Notes

- No contact form is presented as functional because no secure form backend has been configured. The email CTA uses `mailto:`.
- The 3D hero scene is decorative and marked as hidden from assistive technology; all portfolio content remains in standard HTML.
- Before publishing, confirm you are comfortable making the résumé PDF and its contact details publicly downloadable.
