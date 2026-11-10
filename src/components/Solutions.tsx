import type { Dictionary } from "@/content/en";
import { ArrowIcon, BuildingIcon, FamilyIcon } from "./Icons";

export function Solutions({ t }: { t: Dictionary }) {
  const { residential: r, commercial: c } = t.solutions;
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{t.solutions.eyebrow}</p>
          <h2 id="solutions-title" className="section-title mt-4">{t.solutions.title}</h2>
        </div>
        <div data-reveal style={{ ["--reveal-i" as string]: 1 }} className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="card-lift group flex flex-col rounded-3xl border border-line bg-paper p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="icon-warm inline-flex size-11 items-center justify-center rounded-full bg-ivory text-navy ring-1 ring-line"><FamilyIcon className="size-6" /></span>
              <p className="eyebrow">{r.label}</p>
            </div>
            <h3 className="mt-6 text-3xl">{r.title}</h3>
            <p className="mt-4 flex-1 text-muted">{r.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {r.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line bg-ivory px-3.5 py-1.5 text-sm font-bold text-navy">{tag}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-navy mt-8 self-start">{r.cta}<ArrowIcon /></a>
          </article>
          <article className="card-lift group on-navy flex flex-col rounded-3xl border border-navy bg-navy p-8 text-ivory sm:p-10">
            <div className="flex items-center gap-3">
              <span className="icon-warm inline-flex size-11 items-center justify-center rounded-full bg-navy-soft text-gold"><BuildingIcon className="size-6" /></span>
              <p className="eyebrow">{c.label}</p>
            </div>
            <h3 className="mt-6 text-3xl">{c.title}</h3>
            <p className="mt-4 flex-1 text-mist">{c.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-navy-line bg-navy-soft px-3.5 py-1.5 text-sm font-bold text-ivory">{tag}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-gold mt-8 self-start">{c.cta}<ArrowIcon /></a>
          </article>
        </div>
      </div>
    </section>
  );
}
