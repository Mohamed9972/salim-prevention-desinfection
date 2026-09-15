"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localeNames } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  variant = "light",
}: {
  locale: Locale;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();
  const other: Locale = locale === "fr" ? "ar" : "fr";

  // Preserve current page: swap the locale segment.
  const href = (() => {
    if (!pathname) return `/${other}`;
    const parts = pathname.split("/");
    if (parts[1] === "fr" || parts[1] === "ar") {
      parts[1] = other;
      return parts.join("/") || "/";
    }
    return `/${other}`;
  })();

  const wrap =
    variant === "dark"
      ? "border-white/15 bg-white/10"
      : "border-ink-200 bg-white";

  return (
    <div
      className={`flex items-center rounded-full border p-1 text-sm font-semibold ${wrap}`}
      role="group"
      aria-label={locale === "ar" ? "اللغة" : "Langue"}
    >
      {(["fr", "ar"] as Locale[]).map((l) =>
        l === locale ? (
          <span
            key={l}
            aria-current="true"
            className={
              variant === "dark"
                ? "rounded-full bg-white px-3 py-1.5 text-ink-900"
                : "rounded-full bg-ink-900 px-3 py-1.5 text-white"
            }
          >
            {localeNames[l]}
          </span>
        ) : (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            className={
              variant === "dark"
                ? "rounded-full px-3 py-1.5 text-white/75 transition-colors hover:text-white"
                : "rounded-full px-3 py-1.5 text-ink-600 transition-colors hover:text-ink-900"
            }
          >
            {localeNames[l]}
          </Link>
        ),
      )}
    </div>
  );
}
