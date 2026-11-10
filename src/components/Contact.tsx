import type { Dictionary } from "@/content/en";
import { fullAddress, quoteEmailHref, siteConfig } from "@/config/site";
import { DirectionsIcon, FacebookIcon, MailIcon, MessengerIcon, PhoneIcon, PinIcon, TikTokIcon } from "./Icons";
import { MapEmbed } from "./MapEmbed";
import { SmartLink } from "./SmartLink";

export function Contact({ t }: { t: Dictionary }) {
  const { phones, email, social, maps, address } = siteConfig;
  const messenger = social.facebook.messengerUrl ?? social.facebook.url;
  return (
    <section id="contact" aria-labelledby="contact-title">
      {/* Main offer band */}
      <div className="bg-gold text-navy-deep">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <p className="font-serif text-2xl font-bold tracking-wide sm:text-3xl">{t.contact.offer}</p>
          <p className="max-w-md text-[0.95rem] font-bold">{t.contact.note}</p>
        </div>
      </div>

      <div className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="min-w-0" data-reveal>
          <p className="eyebrow">{t.nav.contact}</p>
          <h2 id="contact-title" className="section-title mt-4">{t.contact.title}</h2>
          <p className="mt-5 text-lg text-muted">{t.contact.lede}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={quoteEmailHref} className="btn btn-navy" aria-describedby="quote-hint">
              <MailIcon />
              {t.contact.requestQuote}
            </a>
            {messenger && (
              <a href={messenger} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                <MessengerIcon />
                {t.contact.messenger}
              </a>
            )}
            <a href={`tel:${phones[0].tel}`} className="btn btn-outline-dark">
              <PhoneIcon />
              {t.contact.call} {phones[0].display}
            </a>
          </div>
          <p id="quote-hint" className="mt-3 text-sm text-muted">{t.contact.requestQuoteHint}</p>

          <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow flex items-center gap-2"><PhoneIcon className="size-4" />{t.contact.callOrText}</dt>
              <dd className="mt-3 flex flex-col gap-1 tabular-nums">
                {phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="inline-flex min-h-9 items-center text-lg font-bold text-navy hover:text-gold-ink">
                    {p.display}
                  </a>
                ))}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="eyebrow flex items-center gap-2"><MailIcon className="size-4" />{t.contact.email}</dt>
              <dd className="mt-3">
                <a href={`mailto:${email}`} className="inline-flex min-h-9 items-center break-all font-bold text-navy hover:text-gold-ink">{email}</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-2"><PinIcon className="size-4" />{t.contact.visit}</dt>
              <dd className="mt-3">
                <address className="not-italic text-navy">
                  <span className="font-bold">{address.stall}, {address.place}</span>
                  <br />
                  {address.town}, {address.province} {address.postalCode}
                </address>
                {maps.url && (
                  <a href={maps.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-9 items-center gap-1.5 font-bold text-gold-ink underline underline-offset-4">
                    <DirectionsIcon className="size-4" />
                    {t.contact.directions}
                  </a>
                )}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t.contact.social}</dt>
              <dd className="mt-3 flex flex-col gap-2">
                <SmartLink href={social.facebook.url} className="inline-flex min-h-9 items-center gap-2 font-bold text-navy hover:text-gold-ink">
                  <FacebookIcon className="size-5" />
                  <span><span className="sr-only">{t.contact.facebook}: </span>{social.facebook.label}</span>
                </SmartLink>
                <SmartLink href={social.tiktok.url} className="inline-flex min-h-9 items-center gap-2 font-bold text-navy">
                  <TikTokIcon className="size-5" />
                  <span>
                    <span className="sr-only">{t.contact.tiktok}: </span>
                    {social.tiktok.label}
                    {!social.tiktok.url && <span className="block text-xs font-normal text-muted">{t.contact.tiktokPending}</span>}
                  </span>
                </SmartLink>
              </dd>
            </div>
          </dl>
        </div>

        <div className="min-w-0">
          {maps.embedUrl ? (
            <MapEmbed
              src={maps.embedUrl}
              title={t.contact.mapTitle}
              loadingLabel={t.contact.mapLoading}
              fallbackLabel={t.contact.mapFallback}
              linkLabel={t.contact.directions}
              linkHref={maps.url}
            />
          ) : (
            <div className="flex h-full min-h-[22rem] items-center justify-center rounded-3xl border border-line bg-paper p-8 text-center text-muted">
              {fullAddress}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
