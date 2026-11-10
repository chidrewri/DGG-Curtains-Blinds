import type { Dictionary } from "@/content/en";
import type { ReactNode } from "react";
import { BuildingIcon, CalendarIcon, FamilyIcon, MapIcon, NeedleIcon, RulerIcon } from "./Icons";

const icons: ReactNode[] = [
  <CalendarIcon key="a" />,
  <FamilyIcon key="b" />,
  <NeedleIcon key="c" />,
  <BuildingIcon key="d" />,
  <RulerIcon key="e" />,
  <MapIcon key="f" />,
];

export function WhyChoose({ t }: { t: Dictionary }) {
  return (
    <section id="why" aria-labelledby="why-title" className="on-navy bg-navy py-20 text-ivory sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.why.eyebrow}</p>
          <h2 id="why-title" className="section-title mt-4">{t.why.title}</h2>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => (
            <li key={item.title} className="flex gap-4 border-t border-navy-line pt-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-soft text-gold [&>svg]:size-5">
                {icons[i % icons.length]}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg text-ivory">{item.title}</h3>
                <p className="mt-1.5 text-[0.97rem] text-mist">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
