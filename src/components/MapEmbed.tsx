"use client";

import { useEffect, useState } from "react";

/** Google Maps embed with a loading state and a fallback link if it never loads. */
export function MapEmbed({
  src,
  title,
  loadingLabel,
  fallbackLabel,
  linkLabel,
  linkHref,
}: {
  src: string;
  title: string;
  loadingLabel: string;
  fallbackLabel: string;
  linkLabel: string;
  linkHref: string | null;
}) {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setSlow(true), 10000);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl border border-line bg-paper">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-paper text-sm text-muted" role="status">
          <span className="size-8 animate-spin rounded-full border-2 border-line border-t-gold motion-reduce:animate-none" aria-hidden="true" />
          {slow ? fallbackLabel : loadingLabel}
        </div>
      )}
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 size-full border-0"
      />
      {linkHref && (
        <p className="absolute inset-x-3 bottom-3 z-20 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-navy/95 px-4 py-3 text-sm text-ivory">
          <span className="text-mist">{fallbackLabel}</span>
          <a href={linkHref} target="_blank" rel="noopener noreferrer" className="font-bold text-gold underline underline-offset-4">
            {linkLabel}
          </a>
        </p>
      )}
    </div>
  );
}
