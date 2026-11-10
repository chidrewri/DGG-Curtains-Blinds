import type { Dictionary } from "@/content/en";
import type { Lang } from "@/lib/i18n";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";
import { GalleryGrid } from "./GalleryGrid";
import { FacebookIcon } from "./Icons";

export function Gallery({ t, lang }: { t: Dictionary; lang: Lang }) {
  const fb = siteConfig.social.facebook.url;
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-y border-line bg-paper py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.gallery.eyebrow}</p>
          <h2 id="projects-title" className="section-title mt-4">
            {projects.length > 0 ? t.gallery.title : t.gallery.updatingTitle}
          </h2>
          {projects.length > 0 && <p className="mt-5 text-lg text-muted">{t.gallery.lede}</p>}
        </div>

        {projects.length > 0 ? (
          <GalleryGrid projects={projects} t={t} lang={lang} />
        ) : (
          <div className="mt-10 grid items-center gap-10 rounded-3xl border border-line bg-ivory p-7 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="min-w-0">
              <p className="text-lg text-muted">{t.gallery.updatingText}</p>
              {fb && (
                <a href={fb} target="_blank" rel="noopener noreferrer" className="btn btn-navy mt-7">
                  <FacebookIcon />
                  {t.gallery.updatingCta}
                </a>
              )}
            </div>
            {/* Labelled frames show what the gallery will hold. They are clearly placeholders, not project photos. */}
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label={t.gallery.updatingTitle}>
              {t.gallery.categories.map((c, i) => (
                <li
                  key={c}
                  className="relative flex aspect-[4/3] items-end overflow-hidden rounded-xl border border-dashed border-[#cdbf9f] bg-paper p-3"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        i % 2
                          ? "repeating-linear-gradient(180deg,#0B2744 0 10px,transparent 10px 20px)"
                          : "repeating-linear-gradient(90deg,#0B2744 0 14px,transparent 14px 22px)",
                    }}
                  />
                  <span className="relative text-[0.7rem] font-bold uppercase leading-snug tracking-[0.1em] text-muted">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
