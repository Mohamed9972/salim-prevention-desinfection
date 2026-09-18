import { ArrowRight, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * Rade Nocturne subpage hero: paper ground, a horizon rule overhead,
 * and a display title that carries its own weight — no kicker.
 */
export function PageHero({
  locale,
  title,
  subtitle,
  ctaTo = "contact",
}: {
  locale: Locale;
  title: string;
  subtitle?: string;
  ctaTo?: string;
}) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <div className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-100/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 end-[-100px] h-72 w-72 rounded-full bg-brand-200/50 blur-[90px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16">
        <Reveal>
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-ink-900/20 via-ink-900/10 to-transparent rtl:bg-gradient-to-l"
          />
          <h1 className="mt-8 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-ink-950 sm:text-6xl">
            <span aria-hidden="true" className="mb-5 block h-2.5 w-14 rounded-full bg-brand-400" />
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-600">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${locale}/${ctaTo}`}
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-ink-950 px-8 text-base font-bold text-white shadow-[0_12px_30px_rgba(7,24,20,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800 active:translate-y-0 active:scale-[0.98]"
            >
              {t.nav.cta}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 bg-transparent px-8 text-base font-bold text-ink-900 transition-all duration-300 hover:bg-ink-900 hover:text-white active:scale-[0.98]"
            >
              <Phone size={18} aria-hidden="true" />
              <span dir="ltr" className="tabular-nums">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
