# Prince Adewole Adebayo — Official Website

Portfolio and campaign site for the SDP Presidential Candidate. Next.js 16 (App Router), Tailwind CSS 4, Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content

All copy lives in `lib/content.js`: biography, timeline, manifesto pillars, roadmap, campaign events, media, contact details and socials.

- **Photos:** portraits live in `public/images/`, Nigeria scenes in `public/images/nigeria/`. They are referenced from `photos` and `scenes` in `lib/content.js`. Every photo is credited on `/credits` (`photoCredits`); keep that list in sync when adding images.
- **Social links:** add each official profile URL to `site.socials`. Links without a URL stay hidden.
- **Before launch:** check every biographical fact, statement and date with the campaign. The events and media entries are samples.
- **Style:** site copy avoids hyphens and dashes; keep new copy consistent.

## Pages

`/` Home · `/about` The Man · `/manifesto` · `/campaign` · `/media` · `/contact`
