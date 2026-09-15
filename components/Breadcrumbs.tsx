import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: Crumb[];
}) {
  const isRtl = locale === "ar";
  const Sep = isRtl ? ChevronLeft : ChevronRight;
  return (
    <nav
      aria-label={locale === "ar" ? "مسار التنقل" : "Fil d'Ariane"}
      className="mx-auto max-w-6xl px-4 pt-6 sm:px-6"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-ink-600">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <Sep size={14} aria-hidden="true" className="text-ink-300" />}
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} className={last ? "font-bold text-ink-900" : ""}>
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="transition-colors hover:text-brand-700">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
