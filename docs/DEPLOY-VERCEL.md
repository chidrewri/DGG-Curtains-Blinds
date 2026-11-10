# Deploy on Vercel (free Hobby plan)

Nothing here costs money. Do **not** add a credit card or buy a domain during these steps.

## 1. Put the code on GitHub

1. Sign in at https://github.com and create a new **private** repository, e.g. `dgg-website`. Leave "Add a README" unticked.
2. Upload this project folder to it (GitHub Desktop is the easiest way), or from a terminal inside the folder:

   ```bash
   git remote add origin https://github.com/<your-username>/dgg-website.git
   git push -u origin main
   ```

   Do not upload `node_modules/` or `.next/` (they are already ignored by `.gitignore`).

## 2. Import into Vercel

1. Go to https://vercel.com/signup and choose **Continue with GitHub**. Pick the **Hobby** (free) plan.
2. Click **Add New… → Project**, find `dgg-website`, click **Import**.
3. Vercel detects Next.js automatically. Leave the build settings as they are.
4. Environment variables: leave empty for now. (`NEXT_PUBLIC_SITE_URL` is only needed once you own a domain.)
5. Click **Deploy**. After about a minute you get a link like `https://dgg-website.vercel.app`.

## 3. Check the live site

On a phone:

- [ ] Tap each phone number. The dialer opens with the right number.
- [ ] Tap **Message Us on Facebook**. Messenger opens a chat with the DGG page.
- [ ] Tap **Request a Quotation**. Your email app opens with the short form.
- [ ] Tap **Get directions**. Google Maps opens at Mangaldan Public Market.
- [ ] The map in the Contact section loads.
- [ ] Switch to Tagalog (TL) and back.
- [ ] Share the link in Messenger and check the preview image appears.

## 4. Updating later

Every time you push a change to the `main` branch on GitHub, Vercel rebuilds and updates the site within a minute or two. To change a phone number, link or text, see the table in `README.md`.

## Free-plan notes

The Hobby plan is for personal and non-commercial use per Vercel's terms at the time of writing. A small family business landing page is commonly hosted there, but review https://vercel.com/legal/terms and the current Hobby limits yourself. If you'd rather avoid any doubt, the same project also deploys free on Netlify or Cloudflare Pages (both detect Next.js), or on Vercel Pro if you later need it.
