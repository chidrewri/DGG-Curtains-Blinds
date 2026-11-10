import type { Dictionary } from "@/content/en";
import { siteConfig } from "@/config/site";
import { FacebookIcon, TikTokIcon } from "./Icons";
import { Logo } from "./Logo";
import { SmartLink } from "./SmartLink";

export function Footer({ t }: { t: Dictionary }) {
  const { phones, email, social, address } = siteConfig;
  const year = new Date().getFullYear();
  return (
    <footer className="on-navy bg-navy-deep pb-28 pt-16 text-mist lg:pb-12">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="dark" size="lg" />
          <p className="mt-5 font-serif text-lg italic text-ivory">{siteConfig.tagline}</p>
          <p className="mt-2 text-sm">{t.footer.serviceArea}</p>
        </div>
        <div>
          <h2 className="eyebrow">{t.footer.services}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {t.services.items.map((s) => (
              <li key={s.key}><a href="#services" className="hover:text-gold">{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">{t.footer.contact}</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>{address.stall}, {address.place}<br />{address.town}, {address.province} {address.postalCode}</p>
            <p className="flex flex-col tabular-nums">
              {phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="py-0.5 hover:text-gold">{p.display}</a>
              ))}
            </p>
            <p><a href={`mailto:${email}`} className="break-all hover:text-gold">{email}</a></p>
          </address>
        </div>
        <div>
          <h2 className="eyebrow">{t.footer.follow}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <SmartLink href={social.facebook.url} className="inline-flex items-center gap-2 hover:text-gold">
                <FacebookIcon className="size-5" /> Facebook: {social.facebook.label}
              </SmartLink>
            </li>
            <li>
              <SmartLink href={social.tiktok.url} className="inline-flex items-center gap-2">
                <TikTokIcon className="size-5" /> TikTok: {social.tiktok.label}
              </SmartLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 text-xs">
        <p className="border-t border-navy-line pt-6">© {year} {siteConfig.name}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
