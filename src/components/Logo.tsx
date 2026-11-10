/** Official DGG icon (Classic Window: curtain left, blinds right) from the brand kit. */
export function DggIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="22 8 176 196" className={className} aria-hidden="true" focusable="false">
      <path d="M29 68 L110 16 L191 68" fill="none" stroke="#D5AA65" strokeWidth="11" strokeLinejoin="miter" strokeLinecap="square" />
      <path d="M38 72 V198 M182 72 V198" fill="none" stroke="#D5AA65" strokeWidth="8" />
      <path d="M38 198 Q110 169 182 198" fill="none" stroke="#D5AA65" strokeWidth="9" strokeLinecap="round" />
      <path d="M48 80 H172 V184 H48 Z" fill="#F7F3EB" />
      <path d="M110 80 V184" stroke="#D5AA65" strokeWidth="4" />
      <path d="M49 81 Q75 87 86 117 Q102 157 53 181 L49 181 Z" fill="#113655" />
      <path d="M57 85 Q83 130 57 176 M72 89 Q91 138 69 170" fill="none" stroke="#47718C" strokeWidth="4.3" strokeLinecap="round" opacity="0.83" />
      <path d="M46 141 L77 137 L81 149 L46 154 Z" fill="#D5AA65" />
      <path d="M119 94 H170 M119 112 H170 M119 130 H170 M119 148 H170 M119 166 H170" stroke="#0B2744" strokeWidth="11" strokeLinecap="square" />
      <path d="M119 98 H170 M119 116 H170 M119 134 H170 M119 152 H170 M119 170 H170" stroke="#D5AA65" strokeWidth="3" />
    </svg>
  );
}

/**
 * Horizontal logo lockup built from the brand kit: icon + "DGG" (DejaVu Serif Bold)
 * + "CURTAINS & BLINDS" (Lato Bold). `tone="dark"` is for navy backgrounds.
 */
export function Logo({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const dgg = tone === "dark" ? "text-gold" : "text-navy";
  const sub = tone === "dark" ? "text-ivory" : "text-navy";
  const big = size === "lg";
  return (
    <span className="flex items-center gap-3">
      <DggIcon className={big ? "h-16 w-auto" : "h-11 w-auto"} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif font-bold ${dgg} ${big ? "text-[2.6rem]" : "text-[1.75rem]"} tracking-[0.01em]`}>DGG</span>
        <span className={`font-sans font-bold ${sub} ${big ? "mt-1.5 text-[0.82rem]" : "mt-1 text-[0.58rem]"} tracking-[0.17em]`}>
          CURTAINS &amp; BLINDS
        </span>
      </span>
    </span>
  );
}
