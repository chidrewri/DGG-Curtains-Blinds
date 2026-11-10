# Still to confirm

Items the website handles safely today, and what to update once each is confirmed. Edit `src/config/site.ts` unless noted.

| Item | Today on the website | When confirmed |
| --- | --- | --- |
| **TikTok username / link** | Shows "TikTok: DGG Curtains and Blinds" as plain text with "Search this name on TikTok". No link. | Set `social.tiktok.url` to `https://www.tiktok.com/@username`. |
| **Facebook username change** | Uses `facebook.com/CortinasBlindsandCurtains/` and `m.me/CortinasBlindsandCurtains` for Messenger. | Update `social.facebook.url` and `social.facebook.messengerUrl`. Also re-check the Facebook QR on the tarpaulin and cards. |
| **Messenger link** | `m.me/CortinasBlindsandCurtains`, built from the Page username. Could not be test-opened from the build machine. | Tap it on a phone after deploying. If it doesn't open the DGG chat, replace it with the link from Facebook Page → Settings → Messaging, or set it to `null` to fall back to the Page link. |
| **Google Business Profile** | Not linked. "Get directions" and the map point to Mangaldan Public Market by address. | When the profile is public and verified, set `maps.businessProfileUrl` and `maps.url` to the profile's share link, and optionally `maps.embedUrl` to its "Embed a map" link. It is then also added to the structured data. |
| **Website domain** | None. No domain is shown anywhere. Canonical URL is off. | See `docs/CUSTOM-DOMAIN.md`. |
| **Project photos** | "Our project gallery is being updated" with a Facebook link. | Add real, customer-approved photos via `src/data/projects.ts`. |
| **Prices** | No prices are shown. Copy says quotes depend on the job. | If you want "starting at" prices, ask and they can be added to the service cards. |
| **Opening hours** | Not shown, not in structured data. | Send the hours and they can be added to Contact, Footer and structured data. |
| **Travel fee for far areas** | Mentioned in general terms ("A travel fee may apply for far areas"). | Confirm wording or list the areas. |
| **Tagalog wording** | Written for natural everyday Tagalog/Taglish. | Have a family member read `/tl` once and send any changes (`src/content/tl.ts`). |
| **Phone numbers and Gmail** | 0926 036 2097, 0935 661 2324, 0966 772 8351, dggcurtainsblinds@gmail.com. | Tap-test each on the live site. |
| **Postal code 2432** | Shown in the address and structured data. | Confirm it is correct for Mangaldan. |
| **Vercel Hobby terms** | Free plan suggested. | Review Vercel's current terms for business use (see `docs/DEPLOY-VERCEL.md`). |

## Not used on purpose

- No personal Facebook profiles.
- No reviews, ratings, awards, warranties, certifications, client names or project counts.
- No AI-generated images presented as DGG work. (The brand kit's Facebook cover has an AI room background, so it is **not** used on the site.)
- No contact form, so nothing pretends to send a message. Visitors use Messenger, phone, email or visit the stall.
- No unregistered domain printed anywhere.
