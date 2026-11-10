import type { Dictionary } from "@/content/en";
import { siteConfig } from "@/config/site";
import { ArrowIcon, ServiceArt } from "./Icons";

export function Services({ t }: { t: Dictionary }) {
  const inquiryHref = siteConfig.social.facebook.messengerUrl;
  return (
    <section id="services" aria-labelledby="services-title" className="border-y border-line bg-paper py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 id="services-title" className="section-title mt-4">{t.services.title}</h2>
          <p className="mt-5 text-lg text-muted">{t.services.lede}</p>
        </div>
        <ul data-reveal style={{ ["--reveal-i" as string]: 1 }} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s) => (
            <li key={s.key} className="card-lift group flex flex-col rounded-2xl border border-line bg-ivory p-7">
              <div className="flex h-16 w-20 items-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 origin-left">
                <ServiceArt kind={s.key} />
              </div>
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-2 flex-1 text-[0.97rem] text-muted">{s.text}</p>
              <a
                href={inquiryHref ?? "#contact"}
                {...(inquiryHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-bold text-navy underline decoration-gold decoration-2 underline-offset-[6px] transition-colors hover:text-gold-ink"
                aria-label={`${t.services.inquire}: ${s.title}`}
              >
                {t.services.inquire}
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
