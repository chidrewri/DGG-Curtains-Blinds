import { getDictionary, type Lang } from "@/lib/i18n";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { JsonLd } from "./JsonLd";
import { MobileActionBar } from "./MobileActionBar";
import { Services } from "./Services";
import { Solutions } from "./Solutions";
import { WhyChoose } from "./WhyChoose";

export function HomePage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <div lang={lang === "tl" ? "tl" : "en"}>
      <a href="#main" className="sr-only z-[60] rounded-md bg-gold px-4 py-2 font-bold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {t.skip}
      </a>
      <Header t={t} lang={lang} />
      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Solutions t={t} />
        <Gallery t={t} lang={lang} />
        <WhyChoose t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <MobileActionBar t={t} />
      <JsonLd description={t.meta.description} />
    </div>
  );
}
