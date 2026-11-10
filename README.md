# DGG Curtains & Blinds website

The official landing website for **DGG Curtains & Blinds**, Stall H-35, Mangaldan Public Market, Mangaldan, Pangasinan.
*Transforming Spaces Since 2010.*

It is a one-page site (English at `/`, Tagalog at `/tl`) built to bring in customers: free-measuring inquiries, quotations, Facebook Messenger, phone, email and store visits. There is no shop, checkout, login or database, so it costs nothing to host on Vercel's free plan.

**Built with:** Next.js 16 (App Router, fully static), TypeScript, Tailwind CSS 4. No paid APIs or services.

---

## Where to change things

| I want to change… | Edit this file |
| --- | --- |
| Phone numbers, email, address, Facebook / Messenger / TikTok / Google Maps links, website domain | `src/config/site.ts` |
| Project photos in "Our Projects" | `src/data/projects.ts` (+ photos in `public/projects/`) |
| English wording | `src/content/en.ts` |
| Tagalog wording | `src/content/tl.ts` |
| Colors and fonts | `src/app/globals.css` (`@theme` block) |
| Logo files | `public/brand/`, `src/components/Logo.tsx`, `src/app/icon.png` |
| Link-preview image (Facebook/Messenger share) | `src/app/opengraph-image.png` (1200 × 630) |

**Links that are not confirmed stay `null`.** When a link is `null` (for example TikTok today), the site shows the name as plain text, never a broken link. When you get the real link, paste it in `src/config/site.ts` and redeploy.

**When the Facebook username changes**, update both `social.facebook.url` and `social.facebook.messengerUrl` (`https://m.me/<new username>`) in `src/config/site.ts`.

### Adding project photos

1. Save the photo in `public/projects/`, e.g. `public/projects/dagupan-office-blinds.jpg` (JPG or WebP, about 1600 px wide).
2. Open `src/data/projects.ts`, copy the example entry, and fill in the title, town, `setting` (residential / commercial), `category` (curtains / blinds / upholstery), the image path and a short description in `alt`.
3. For before-and-after, also fill `beforeImage` and `beforeAlt`.
4. Commit and push. Vercel redeploys on its own.

While the list is empty, the site shows "Our project gallery is being updated" with a link to the Facebook page. Filter buttons appear on their own once photos are added. Only use real DGG work, with the customer's permission. No AI-generated images in the gallery.

---

## Run it on your computer

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
npm install        # first time only
npm run dev        # open http://localhost:3000
```

Check that it builds before you deploy:

```bash
npm run build
npm start          # serves the built site on http://localhost:3000
```

---

## Put it online (free)

See [docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md). Short version: push this folder to a GitHub repository, import it at vercel.com on the free Hobby plan, click Deploy. You get a free `https://<name>.vercel.app` address.

When you buy a domain later, see [docs/CUSTOM-DOMAIN.md](docs/CUSTOM-DOMAIN.md).

Things that still need confirming are listed in [docs/TO-CONFIRM.md](docs/TO-CONFIRM.md).

---

## How the code is organised

```
src/
  app/
    layout.tsx          fonts, base metadata
    page.tsx            English home page  (/)
    tl/page.tsx         Tagalog home page  (/tl)
    sitemap.ts          /sitemap.xml
    robots.ts           /robots.txt (open to all visitors and search engines)
    icon.png, apple-icon.png, opengraph-image.png
    globals.css         design tokens (colors, fonts) and shared button styles
  components/           one file per section: Header, Hero, About, Services,
                        Solutions, Gallery (+GalleryGrid), WhyChoose, Contact (+MapEmbed),
                        Footer, MobileActionBar, JsonLd, Logo, Icons, SmartLink
  config/site.ts        ALL business details and links
  content/en.ts, tl.ts  all website wording
  data/projects.ts      project gallery list
  lib/                  language helpers and page metadata
  fonts/                DejaVu Serif (the logo's "DGG" lettering), self-hosted
public/
  brand/                official logo files from the brand kit
  projects/             project photos go here
```

### SEO notes

- Unique title and description per language, Open Graph and Twitter cards, `sitemap.xml`, `robots.txt`.
- `LocalBusiness` (HomeGoodsStore) structured data with verified details only: name, slogan, founding date, address, phones, email, area served (Pangasinan), Facebook page. No ratings, reviews, opening hours or coordinates are claimed.
- The canonical URL and `hreflang` links are added **only once a domain is confirmed** (set `NEXT_PUBLIC_SITE_URL` or `domain` in `site.ts`).
- Local phrases (curtains and blinds in Pangasinan, Mangaldan, Dagupan, zebra blinds, installation) appear naturally in the wording. Please don't keyword-stuff.

### Accessibility

Skip link, semantic headings, visible keyboard focus, labelled mobile menu (Escape closes it), 44 px+ tap targets, AA color contrast, `prefers-reduced-motion` respected, no pop-ups.

### Fonts

- **DejaVu Serif** (bold/italic), as used for "DGG" and the tagline in the brand kit. Self-hosted in `src/fonts/` under the free DejaVu/Bitstream Vera license (`src/fonts/DejaVu-LICENSE.txt`).
- **Lato**, as used for "CURTAINS & BLINDS". Loaded through `next/font/google`, so it's bundled with the site at build time.
