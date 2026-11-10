import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const languages = { en: `${base}/`, tl: `${base}/tl` };
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${base}/tl`, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
