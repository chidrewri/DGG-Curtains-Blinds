import type { Dictionary } from "@/content/en";

export function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="min-w-0" data-reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title" className="section-title mt-4">{t.about.title}</h2>
          <div className="mt-7 space-y-5 text-muted">
            {t.about.body.map((p, i) => (
              <p key={i} className="max-w-[62ch]">{p}</p>
            ))}
          </div>
        </div>
        <ul data-reveal style={{ ["--reveal-i" as string]: 1 }} className="grid content-start gap-px self-start overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {t.about.points.map((pt) => (
            <li key={pt.title} className="group bg-paper p-7 transition-colors duration-300 hover:bg-ivory">
              <span aria-hidden="true" className="mb-4 block h-0.5 w-8 bg-gold transition-[width] duration-300 group-hover:w-14" />
              <h3 className="text-lg">{pt.title}</h3>
              <p className="mt-2 text-[0.97rem] text-muted">{pt.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
