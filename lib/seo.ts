import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { getDictionary } from "./dictionaries";
import { SITE_URL } from "./site";

export const SERVICE_SLUGS = [
  "desinsectisation",
  "deratisation",
  "punaises-de-lit",
  "desinfection",
  "traitement-nuisibles",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type SeoPageId =
  | "services"
  | "desinsectisation"
  | "deratisation"
  | "punaises"
  | "desinfection"
  | "nuisibles"
  | "apropos"
  | "zones"
  | "faq"
  | "contact";

export function serviceSlugToSeo(slug: ServiceSlug): SeoPageId {
  switch (slug) {
    case "desinsectisation":
      return "desinsectisation";
    case "deratisation":
      return "deratisation";
    case "punaises-de-lit":
      return "punaises";
    case "desinfection":
      return "desinfection";
    case "traitement-nuisibles":
      return "nuisibles";
  }
}

/** Per-page metadata: title, description, canonical + hreflang FR/AR + OG. */
export function pageMetadata(
  locale: Locale,
  pageId: SeoPageId,
  path: string,
): Metadata {
  const t = getDictionary(locale);
  const s = t.seo[pageId];
  const canonical = `/${locale}${path}`;
  return {
    title: s.title,
    description: s.desc,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        fr: `/fr${path}`,
        ar: `/ar${path}`,
      },
    },
    openGraph: {
      title: s.title,
      description: s.desc,
      url: canonical,
      siteName:
        locale === "ar"
          ? "شركة سليم للوقاية والتطهير"
          : "Salim — Prévention et Désinfection",
      locale: locale === "ar" ? "ar_TN" : "fr_FR",
      type: "website",
    },
  };
}
