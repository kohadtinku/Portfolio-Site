# MERN Developer Portfolio

Next.js 15 (App Router), JavaScript only, Material UI, Framer Motion, Lucide, React Hook Form, React Hot Toast.

## 1. Run locally
```bash
npm install
cp .env.example .env.local     # then fill in values
npm run dev                    # http://localhost:3000
npm run build && npm start     # production check
```

## 2. Make it yours
| What | Where |
|---|---|
| Name, email, links, stats, availability badge | `src/data/profile.js` |
| Skills | `src/data/skills.js` |
| Experience (replace `[BRACKETED]` placeholders) | `src/data/experience.js` |
| Projects, repo/live URLs, screenshots | `src/data/projects.js` + `public/images/` |
| Education and certifications | `src/data/education.js` |
| Colors and typography | `src/theme/theme.js` |

- **Resume:** replace `public/resume.pdf` with your PDF (keep the filename).
- **Projects:** leave `github` / `live` as `""` until URLs exist; buttons then stay hidden and the detail page says no demo yet. Replace the placeholder SVGs in `public/images/` with real screenshots (PNG/JPG/WebP) and update the paths.
- **Availability badge:** hidden unless `availability.show` is `true`.
- Only list skills, experience and metrics you can verify.

## 3. Contact form
The form posts to `/api/contact`, which validates on the server, drops honeypot spam, rate-limits per IP and sends mail through [Resend](https://resend.com) using server-only environment variables:
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
Without them the API returns a 503 and the form shows an error (it never fakes success).

## 4. Publish to GitHub
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## 5. Deploy to Vercel
1. Import the GitHub repo at vercel.com/new (framework: Next.js, defaults are fine).
2. Add the environment variables from `.env.example` (Project Settings > Environment Variables).
3. Deploy, then set `NEXT_PUBLIC_SITE_URL` to your final domain and redeploy.

## 6. Testing checklist
- [ ] `npm run build` passes; no console errors
- [ ] Nav links, active-section underline and mobile drawer work
- [ ] Light/dark toggle works and persists after reload
- [ ] Resume button downloads your PDF
- [ ] Every project page opens (`/projects/<slug>`); filters and search work
- [ ] Contact form: empty submit shows errors; real submit delivers an email; missing env shows an error
- [ ] Keyboard-only navigation shows focus; reduced-motion setting disables animation
- [ ] `/sitemap.xml`, `/robots.txt` and the 404 page load
- [ ] No placeholder text (`[YOUR NAME]`, `[COMPANY NAME]`) or secrets remain
