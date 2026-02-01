# jabuelouf.me — Portfolio

React portfolio site for data analyst job applications.

## Local dev

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Where to edit content

- `src/lib/site.ts` (name, links, domain, email)
- `src/data/projects.ts` (project cards)
- `src/app/about/page.tsx` (about text)

## Resume

Put your resume PDF at `public/resume.pdf`.

## Deploy (recommended: Vercel)

1) Push this repo to GitHub: `jabuelouf/portfolio`
2) Import it in Vercel (Framework preset: Next.js)
3) Add your custom domain: `jabuelouf.me`
4) Update DNS with the A/CNAME records Vercel provides

## Deploy alternatives

- Cloudflare Pages: supports Next.js; follow Cloudflare’s Next.js docs.
- Netlify: supports Next.js; follow Netlify’s Next.js docs.
