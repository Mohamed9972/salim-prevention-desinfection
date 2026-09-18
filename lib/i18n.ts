export const locales = ["ar", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  fr: "FR",
};
