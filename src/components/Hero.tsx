import type { Dictionary } from "@/content/en";
import { siteConfig } from "@/config/site";
import { DggIcon } from "./Logo";
import { ArrowIcon, MessengerIcon, RulerIcon } from "./Icons";

export function Hero({ t }: { t: Dictionary }) {
  const messenger = siteConfig.social.facebook.messengerUrl ?? siteConfig.social.facebook.url;
  return (
    <section id="home" className="on-navy relative overflow-hidden bg-navy text-ivory">
      {/* Blind-slat texture: a quiet nod to what DGG makes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.045] lg:block [mask-image:linear-gradient(90deg,transparent,black_40%)]"
        style={{ backgroundImage: "repeating-linear-gradient(180deg, #F7F3EB 0 18px, transparent 18px 34px)" }}
      />
      <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div className="min-w-0 animate-rise">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.1rem]">
            {t.hero.title.replace(/\.$/, "")}
            <span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-mist sm:text-xl">{t.hero.lede}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" className="btn btn-gold">
              <RulerIcon />
              {t.hero.primary}
            </a>
            {messenger && (
              <a href={messenger} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                <MessengerIcon />
                {t.hero.messenger}
              </a>
            )}
            <a href="#services" className="btn px-2 text-ivory underline-offset-4 hover:text-gold hover:underline sm:px-4">
              {t.hero.explore}
              <ArrowIcon />
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-ivory/15 pt-7">
            {t.hero.facts.map((f) => (
              <div key={f.label} className="min-w-0">
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-serif text-xl font-bold text-gold sm:text-2xl">{f.value}</dd>
                <dd className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-mist">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Brand visual: the official icon, framed like a window being measured */}
        <figure aria-hidden="true" className="relative mx-auto w-full max-w-[19rem] animate-rise sm:max-w-[25rem] [animation-delay:150ms]">
          <div className="relative rounded-[1.75rem] bg-ivory p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-12">
            <DggIcon className="mx-auto w-full max-w-[15rem]" />
            {/* Measurement marks */}
            <div aria-hidden="true" className="absolute inset-x-10 top-3 flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.18em] text-gold-ink sm:inset-x-12">
              <span className="h-px flex-1 bg-gold" />
              <span>120 CM</span>
              <span className="h-px flex-1 bg-gold" />
            </div>
            <div aria-hidden="true" className="absolute bottom-10 right-3 top-10 flex flex-col items-center gap-2 sm:bottom-12 sm:top-12">
              <span className="w-px flex-1 bg-gold" />
              <span className="text-[0.62rem] font-bold tracking-[0.18em] text-gold-ink [writing-mode:vertical-rl]">150 CM</span>
              <span className="w-px flex-1 bg-gold" />
            </div>
          </div>
          <figcaption className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-navy-deep shadow-lg sm:left-auto sm:right-[-0.75rem] sm:translate-x-0">
            {t.hero.badge}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
