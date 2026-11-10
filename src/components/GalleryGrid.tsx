"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Dictionary } from "@/content/en";
import type { Lang } from "@/lib/i18n";
import type { Project } from "@/data/projects";

type Filter = keyof Dictionary["gallery"]["filters"];

function matches(p: Project, f: Filter) {
  if (f === "all") return true;
  if (f === "before-after") return Boolean(p.beforeImage);
  if (f === "residential" || f === "commercial") return p.setting === f;
  return p.category === f;
}

export function GalleryGrid({ projects, t, lang }: { projects: Project[]; t: Dictionary; lang: Lang }) {
  const [filter, setFilter] = useState<Filter>("all");
  // Only show filter buttons that have at least one photo.
  const filters = useMemo(
    () => (Object.keys(t.gallery.filters) as Filter[]).filter((f) => f === "all" || projects.some((p) => matches(p, f))),
    [projects, t],
  );
  const shown = projects.filter((p) => matches(p, filter));

  return (
    <div className="mt-10">
      {filters.length > 2 && (
        <div role="group" aria-label={t.gallery.eyebrow} className="-mx-1 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-10 rounded-full border px-4 text-sm font-bold transition-colors ${
                filter === f ? "border-navy bg-navy text-ivory" : "border-line bg-ivory text-navy hover:border-navy"
              }`}
            >
              {t.gallery.filters[f]}
            </button>
          ))}
        </div>
      )}

      {shown.length === 0 ? (
        <p className="mt-8 text-muted">{t.gallery.emptyFilter}</p>
      ) : (
        <ul data-reveal className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => {
            const title = lang === "tl" && p.titleTl ? p.titleTl : p.title;
            return (
              <li key={p.id} className="card-lift group overflow-hidden rounded-2xl border border-line bg-ivory">
                {p.beforeImage ? (
                  <div className="grid grid-cols-2 gap-px bg-line">
                    {[
                      { src: p.beforeImage, alt: p.beforeAlt ?? `${title} (${t.gallery.before})`, label: t.gallery.before },
                      { src: p.image, alt: p.alt, label: t.gallery.after },
                    ].map((img) => (
                      <div key={img.label} className="relative aspect-[3/4] overflow-hidden bg-paper">
                        <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 16vw, (min-width:640px) 25vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        <span className="absolute left-2 top-2 rounded-full bg-navy/85 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ivory">
                          {img.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <Image src={p.image} alt={p.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {[t.gallery.filters[p.setting], t.gallery.filters[p.category], p.location].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
