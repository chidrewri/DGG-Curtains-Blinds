import { getConfirmedDomain, getSiteUrl, siteConfig } from "@/config/site";

/** LocalBusiness structured data, built only from confirmed details in site.ts. */
export function JsonLd({ description }: { description: string }) {
  const { address, phones, email, social, maps } = siteConfig;
  const siteUrl = getConfirmedDomain() ? getSiteUrl() : undefined;
  const sameAs = [social.facebook.url, social.tiktok.url, maps.businessProfileUrl].filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    description,
    foundingDate: siteConfig.foundingDate,
    ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/icon.png`, image: `${siteUrl}/opengraph-image.png` } : {}),
    email,
    telephone: phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.stall}, ${address.place}`,
      addressLocality: address.town,
      addressRegion: address.province,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    areaServed: { "@type": "AdministrativeArea", name: `${siteConfig.serviceArea}, Philippines` },
    ...(maps.businessProfileUrl ? { hasMap: maps.businessProfileUrl } : {}),
    sameAs,
    knowsAbout: ["Custom curtains", "Zebra blinds", "Roller blinds", "Window blinds installation", "Upholstery"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
