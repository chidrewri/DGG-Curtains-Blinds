# Connect a custom domain later

Only do this **after** you have bought the domain (for example `dggcurtainsblinds.com` or a `.ph` / `.com.ph` name). The site does not assume you own any domain yet.

## 1. Add the domain in Vercel

1. Vercel → your project → **Settings → Domains → Add**.
2. Type the domain, e.g. `dggcurtainsblinds.com`. Vercel will also offer `www.dggcurtainsblinds.com`; accept, and choose which one is the main address (redirect the other to it).
3. Vercel shows the DNS records to create. They are usually:
   - an **A** record for `@` pointing to the IP address Vercel shows, and
   - a **CNAME** record for `www` pointing to the hostname Vercel shows.
4. Sign in to wherever you bought the domain (the registrar), open its DNS settings and add exactly the records Vercel shows. Changes can take from a few minutes up to 48 hours.
5. Vercel issues the HTTPS certificate automatically and free once the DNS is correct.

## 2. Tell the website its real address

This turns on the canonical URL, language (`hreflang`) links, and correct sitemap/structured-data URLs.

Either:

- Vercel → **Settings → Environment Variables** → add `NEXT_PUBLIC_SITE_URL` = `https://dggcurtainsblinds.com` (your real domain, no trailing slash), then **Redeploy**;

or

- set `domain: "https://dggcurtainsblinds.com"` in `src/config/site.ts` and push.

## 3. After the domain works

- [ ] Open `https://<your-domain>/sitemap.xml` and `/robots.txt` and check they show the new domain.
- [ ] Add the site in **Google Search Console** (free) and submit the sitemap.
- [ ] Add the website link to the **Google Business Profile**, the Facebook Page "About" section and TikTok bio.
- [ ] Only now print the domain on tarpaulins and business cards.
