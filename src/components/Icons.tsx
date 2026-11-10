import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const PhoneIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 3h3.5l2 5-2.6 1.6a11.5 11.5 0 0 0 6.5 6.5L16 13.5l5 2V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
);
export const MailIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></svg>
);
export const PinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 21s-7-6.1-7-11.4A7 7 0 0 1 19 9.6C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const MessengerIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.15.26.35.27.57l.05 1.78a.8.8 0 0 0 1.12.71l1.98-.87c.17-.08.36-.09.53-.04.91.25 1.88.38 2.91.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2Zm6 7.46-2.93 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63L8.93 9.9a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63Z" /></svg>
);
export const FacebookIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.27 4.3c-2.3 0-3.87 1.4-3.87 3.98v2.22H7.9v3h2.5V21h3.1Z" /></svg>
);
export const TikTokIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M16.6 3c.3 2.1 1.6 3.6 3.6 3.9v3a7 7 0 0 1-3.6-1.1v6.3A5.9 5.9 0 1 1 10.7 9.2v3.1a2.9 2.9 0 1 0 2.9 2.9V3h3Z" /></svg>
);
export const ArrowIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const DirectionsIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="m12 2 10 10-10 10L2 12 12 2Z" /><path d="M9 14v-2.5a1.5 1.5 0 0 1 1.5-1.5H15m-2-2 2 2-2 2" /></svg>
);
export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const RulerIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="2.5" y="8" width="19" height="8" rx="1" /><path d="M6.5 8v3M10.5 8v4M14.5 8v3M18.5 8v4" /></svg>
);
export const CalendarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
);
export const FamilyIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 11 12 4l9 7" /><path d="M5.5 9.5V20h13V9.5" /><path d="M10 20v-5h4v5" /></svg>
);
export const NeedleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M20 4 7 17" /><path d="M17.5 4.5 19.5 6.5" /><path d="M7 17c-2.5 0-4-1-4-2.5S5 12 7 13s1.5 4-1 6" /></svg>
);
export const BuildingIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 21V5l8-2v18M12 8h8v13M2 21h20" /><path d="M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2" /></svg>
);
export const MapIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="m9 4-6 2.5v13L9 17l6 2.5 6-2.5V4l-6 2.5L9 4Z" /><path d="M9 4v13M15 6.5v13" /></svg>
);

/* Service illustrations: simple, consistent line art in brand colours */
export function ServiceArt({ kind }: { kind: string }) {
  const frame = (
    <>
      <rect x="6" y="6" width="68" height="4" rx="2" fill="#D5AA65" />
      <rect x="10" y="12" width="60" height="52" fill="#F7F3EB" stroke="#0B2744" strokeWidth="3" />
    </>
  );
  switch (kind) {
    case "curtains":
      return (
        <svg viewBox="0 0 80 70" aria-hidden="true">
          {frame}
          <path d="M11.5 13.5h17c-1 14-4 22-9 26 3 8 5 16 6 23h-14Z" fill="#0B2744" />
          <path d="M68.5 13.5h-17c1 14 4 22 9 26-3 8-5 16-6 23h14Z" fill="#0B2744" />
          <path d="M16 15c1 9 0 17-2 24M22 15c0 10-2 18-5 24M64 15c-1 9 0 17 2 24M58 15c0 10 2 18 5 24" stroke="#47718C" strokeWidth="1.6" fill="none" />
          <rect x="11" y="38" width="10" height="3" rx="1.5" fill="#D5AA65" />
          <rect x="59" y="38" width="10" height="3" rx="1.5" fill="#D5AA65" />
        </svg>
      );
    case "zebra":
      return (
        <svg viewBox="0 0 80 70" aria-hidden="true">
          {frame}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x="11.5" y={14 + i * 10} width="57" height="5.5" fill="#0B2744" />
              <rect x="11.5" y={19.5 + i * 10} width="57" height="4.5" fill="#D9DFE6" />
            </g>
          ))}
          <rect x="11.5" y="61" width="57" height="2" fill="#D5AA65" />
        </svg>
      );
    case "roller":
      return (
        <svg viewBox="0 0 80 70" aria-hidden="true">
          {frame}
          <rect x="9" y="12" width="62" height="6" rx="3" fill="#163A5E" />
          <rect x="11.5" y="18" width="57" height="30" fill="#0B2744" />
          <rect x="11.5" y="47" width="57" height="3" fill="#D5AA65" />
          <path d="M64 50v8" stroke="#0B2744" strokeWidth="1.5" />
          <circle cx="64" cy="59.5" r="1.8" fill="#D5AA65" />
        </svg>
      );
    case "other":
      return (
        <svg viewBox="0 0 80 70" aria-hidden="true">
          {frame}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={13 + i * 9.5} y="14" width="6" height="48" rx="1" fill={i % 2 ? "#163A5E" : "#0B2744"} />
          ))}
          <rect x="11.5" y="13.5" width="57" height="2.5" fill="#D5AA65" />
        </svg>
      );
    case "upholstery":
      return (
        <svg viewBox="0 0 80 70" aria-hidden="true">
          <rect x="14" y="16" width="52" height="24" rx="7" fill="#0B2744" />
          <rect x="6" y="28" width="14" height="24" rx="6" fill="#163A5E" />
          <rect x="60" y="28" width="14" height="24" rx="6" fill="#163A5E" />
          <rect x="16" y="38" width="48" height="12" rx="3" fill="#D5AA65" />
          <path d="M40 38v12" stroke="#B48A45" strokeWidth="1.5" />
          <rect x="16" y="50" width="4" height="9" rx="1" fill="#0B2744" />
          <rect x="60" y="50" width="4" height="9" rx="1" fill="#0B2744" />
          <path d="M22 22h36" stroke="#47718C" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 80 70" aria-hidden="true">
          <rect x="6" y="26" width="68" height="20" rx="2" fill="#D5AA65" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <path key={i} d={`M${10 + i * 5} 26v${i % 2 ? 5 : 9}`} stroke="#0B2744" strokeWidth="1.5" />
          ))}
          <text x="10" y="43" fontSize="6" fontFamily="sans-serif" fontWeight="700" fill="#0B2744">0</text>
          <text x="33" y="43" fontSize="6" fontFamily="sans-serif" fontWeight="700" fill="#0B2744">50</text>
          <circle cx="66" cy="56" r="9" fill="#0B2744" />
          <circle cx="66" cy="56" r="3" fill="#F7F3EB" />
        </svg>
      );
  }
}
