"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content/en";
import type { Lang } from "@/lib/i18n";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";

const SECTIONS = ["home", "about", "services", "projects", "why", "contact"] as const;

export function Header({ t, lang }: { t: Dictionary; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const labels: Record<(typeof SECTIONS)[number], string> = {
    home: t.nav.home,
    about: t.nav.about,
    services: t.nav.services,
    projects: t.nav.projects,
    why: t.nav.why,
    contact: t.nav.contact,
  };
  const otherLangHref = lang === "en" ? "/tl" : "/";

  // Close the mobile menu with Escape and return focus to the menu button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Make the header slimmer and solid once the visitor scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!("IntersectionObserver" in window) || els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b text-ivory backdrop-blur transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-gold/30 bg-navy shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
          : "border-gold/20 bg-navy/95 supports-[backdrop-filter]:bg-navy/90"
      }`}
    >
      <div className={`container-x flex items-center gap-4 transition-[height] duration-300 ${scrolled ? "h-16" : "h-[4.5rem]"}`}>
        <a href="#home" className={`mr-auto shrink-0 origin-left rounded-md transition-transform duration-300 ${scrolled ? "scale-90" : ""}`} aria-label="DGG Curtains & Blinds">
          <Logo tone="dark" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`nav-link text-sm font-bold tracking-wide transition-colors hover:text-gold ${
                    active === id ? "text-gold" : "text-mist"
                  }`}
                >
                  {labels[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={otherLangHref}
          hrefLang={lang === "en" ? "tl" : "en"}
          aria-label={t.nav.switchLabel}
          className="hidden rounded-full border border-ivory/30 px-3 py-1.5 text-xs font-bold tracking-wider text-mist transition-colors hover:border-gold hover:text-gold sm:inline-flex"
        >
          {lang === "en" ? "TL" : "EN"}
        </a>

        <a href="#contact" className="btn btn-gold hidden min-h-11 px-5 text-sm md:inline-flex">
          {t.nav.cta}
        </a>

        <button
          ref={menuButton}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/25 text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.close : t.nav.menu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="border-t border-gold/15 bg-navy lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x py-4">
          <ul className="flex flex-col">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-navy-line font-serif text-lg text-ivory transition-[color,padding] duration-200 hover:pl-2 hover:text-gold"
                >
                  {labels[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-3 pb-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold flex-1">
              {t.nav.cta}
            </a>
            <a href={otherLangHref} hrefLang={lang === "en" ? "tl" : "en"} className="btn btn-outline-light">
              {t.nav.switchTo}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
