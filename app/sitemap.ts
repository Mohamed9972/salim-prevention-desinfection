import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/seo";

const PATHS = [
  "",
  "/services",
  ...SERVICE_SLUGS.map((s) => `/services/${s}`),
  "/a-propos",
  "/zones-intervention",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const path of PATHS) {
    for (const locale of ["fr", "ar"] as const) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
        alternates: {
          languages: {
            fr: `${SITE_URL}/fr${path}`,
            ar: `${SITE_URL}/ar${path}`,
          },
        },
      });
    }
  }
  return entries;
}
