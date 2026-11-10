import type { Metadata } from "next";
import { getConfirmedDomain, siteConfig } from "@/config/site";
import { getDictionary, langPath, type Lang } from "./i18n";

export function buildMetadata(lang: Lang): Metadata {
  const t = getDictionary(lang);
  const confirmed = getConfirmedDomain();
  return {
    title: t.meta.title,
    description: t.meta.description,
    applicationName: siteConfig.name,
    keywords: [
      "curtains and blinds Pangasinan",
      "curtains Mangaldan",
      "zebra blinds Pangasinan",
      "custom curtains Dagupan",
      "window blinds installation Pangasinan",
      "roller blinds Pangasinan",
      "upholstery Mangaldan",
    ],
    // Canonical and language links are only added once a real domain is confirmed.
    alternates: confirmed
      ? {
          canonical: langPath[lang],
          languages: { en: langPath.en, tl: langPath.tl, "x-default": langPath.en },
        }
      : undefined,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: t.meta.title,
      description: t.meta.description,
      locale: lang === "tl" ? "tl_PH" : "en_PH",
      alternateLocale: lang === "tl" ? ["en_PH"] : ["tl_PH"],
      url: langPath[lang],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: true, email: true, address: true },
  };
}
