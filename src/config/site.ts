/**
 * ONE PLACE FOR ALL BUSINESS DETAILS AND LINKS.
 *
 * Edit this file when a phone number, email, social link or the website
 * domain changes. Every section of the site reads from here.
 *
 * Rule: if a link is not confirmed yet, set it to `null`. The site will then
 * show the platform name as plain text instead of a clickable link.
 */

export type Phone = {
  /** How the number is shown on the site */
  display: string;
  /** International format used for tap-to-call links (no spaces) */
  tel: string;
};

export const siteConfig = {
  name: "DGG Curtains & Blinds",
  shortName: "DGG",
  tagline: "Transforming Spaces Since 2010.",
  descriptor: "Residential & Commercial Window Solutions",
  established: "April 2010",
  foundingDate: "2010-04",

  /**
   * Website domain, e.g. "https://dggcurtainsblinds.com" (no trailing slash).
   * Keep `null` until the domain is purchased and connected.
   * You can also set NEXT_PUBLIC_SITE_URL in Vercel instead of editing this.
   */
  domain: null as string | null,

  address: {
    stall: "Stall H-35",
    place: "Mangaldan Public Market",
    town: "Mangaldan",
    province: "Pangasinan",
    postalCode: "2432",
    country: "Philippines",
    countryCode: "PH",
  },

  serviceArea: "Pangasinan",

  email: "dggcurtainsblinds@gmail.com",

  phones: [
    { display: "0926 036 2097", tel: "+639260362097" },
    { display: "0935 661 2324", tel: "+639356612324" },
    { display: "0966 772 8351", tel: "+639667728351" },
  ] as Phone[],

  social: {
    facebook: {
      label: "DGG Curtains & Blinds",
      /** Business page (not a personal profile). Update when the page username changes. */
      url: "https://www.facebook.com/CortinasBlindsandCurtains/" as string | null,
      /**
       * Messenger chat link for the same page: https://m.me/<page username>.
       * Update together with the Facebook URL above.
       */
      messengerUrl: "https://m.me/CortinasBlindsandCurtains" as string | null,
    },
    tiktok: {
      label: "DGG Curtains and Blinds",
      /** Not confirmed yet. Set to e.g. "https://www.tiktok.com/@username" once confirmed. */
      url: null as string | null,
    },
  },

  maps: {
    /** Opens Google Maps directions to the market. Replace with the Google Business Profile link once it is public and verified. */
    url: "https://www.google.com/maps/search/?api=1&query=Mangaldan+Public+Market%2C+Mangaldan%2C+Pangasinan" as string | null,
    /** Map shown inside the Contact section. Set to null to hide the embedded map. */
    embedUrl:
      "https://maps.google.com/maps?q=Mangaldan%20Public%20Market%2C%20Mangaldan%2C%20Pangasinan&z=16&output=embed" as string | null,
    /** Google Business Profile link. Keep null until the profile is public and verified. */
    businessProfileUrl: null as string | null,
  },
} as const;

export const fullAddress = `${siteConfig.address.stall}, ${siteConfig.address.place}, ${siteConfig.address.town}, ${siteConfig.address.province} ${siteConfig.address.postalCode}, ${siteConfig.address.country}`;

/** The confirmed public domain, or null when no domain is confirmed yet. */
export function getConfirmedDomain(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const value = fromEnv || siteConfig.domain;
  return value ? value.replace(/\/+$/, "") : null;
}

/**
 * The address the site is currently served from. Uses the confirmed domain
 * when there is one, then Vercel's free production address, then localhost.
 */
export function getSiteUrl(): string {
  const confirmed = getConfirmedDomain();
  if (confirmed) return confirmed;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const quoteEmailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Quotation request / Free measuring",
)}&body=${encodeURIComponent(
  "Hello DGG Curtains & Blinds,\n\nI would like a quotation.\n\nName:\nTown / barangay:\nType of space (home, office, etc.):\nWhat I need (curtains, blinds, upholstery):\nApproximate window sizes or number of windows:\nBest contact number:\n\nThank you!",
)}`;
