# PracExam Vault — Vercel Deployment

A static, Vercel-ready download portal for the complete MERN Practical pack.

## What is included
- `index.html` — landing/download page
- `style.css` — responsive UI
- `script.js` — 3-second download flow + Download Now button
- `public/downloads/MERN_Practicals_Full.zip` — the complete practical pack
- `vercel.json` — Vercel configuration

## Deploy to Vercel
### Option 1 — Vercel dashboard
1. Create a new GitHub repository and upload these files, or upload the project through your preferred Vercel workflow.
2. Import the repository in Vercel.
3. Framework preset: **Other**.
4. Build command: leave blank.
5. Output directory: `.`
6. Deploy.

### Option 2 — Vercel CLI
Install the Vercel CLI, log in, open this folder, and run `vercel`.

## Local preview
Because this is a static site, you can use any static server. With Node installed, one simple option is:

```bash
npx serve .
```

Then open the local address it prints.

## Download behavior
Clicking **Download Practicals** opens a short countdown and automatically downloads `MERN_Practicals_Full.zip`. The **Download now** button skips the countdown.

The site is intentionally static, so there is no backend, database, login, or server-side code required.
