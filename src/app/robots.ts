import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

// Open to everyone, everywhere. Local focus comes from the content, not from blocking visitors.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
