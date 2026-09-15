export const locales = ["fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export const localeNames: Record<Locale, string> = {
  fr: "FR",
  ar: "العربية",
};
