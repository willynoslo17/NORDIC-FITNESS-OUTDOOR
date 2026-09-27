/** Per-store identity. This is the only checkout/webhook file that differs between the NORDIC-* repos. */
export const STORE = {
  slug: "nordic-fitness-outdoor",
  brand: "Fortenergi",
  domain: "fortenergi.no",
  siteUrl: "https://fortenergi.no/",
  /** Catalog sector used by the Gelato/Printful endpoints (never taken from the query string). */
  sector: "fitness",
} as const;
