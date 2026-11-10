import type { Dictionary } from "@/content/en";
import { siteConfig } from "@/config/site";
import { MessengerIcon, PhoneIcon, RulerIcon } from "./Icons";

/** Always-visible contact bar on phones and tablets. */
export function MobileActionBar({ t }: { t: Dictionary }) {
  const messenger = siteConfig.social.facebook.messengerUrl ?? siteConfig.social.facebook.url;
  const item = "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-[0.72rem] font-bold tracking-wide";
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-gold/25 bg-navy text-ivory shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.5)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a href={`tel:${siteConfig.phones[0].tel}`} className={item}>
        <PhoneIcon className="size-5 text-gold" />
        {t.mobileBar.call}
      </a>
      {messenger && (
        <a href={messenger} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-navy-line`}>
          <MessengerIcon className="size-5 text-gold" />
          {t.mobileBar.message}
        </a>
      )}
      <a href="#contact" className={`${item} bg-gold text-navy-deep`}>
        <RulerIcon className="size-5" />
        {t.mobileBar.measure}
      </a>
    </nav>
  );
}
