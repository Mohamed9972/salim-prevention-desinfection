import { ArrowRight, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function PageHero({
  locale,
  eyebrow,
  title,
  subtitle,
  ctaTo = "contact",
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaTo?: string;
}) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <div className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 end-[-120px] h-[300px] w-[300px] rounded-full bg-brand-50" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 md:pb-14 md:pt-14">
        <Reveal>
          {eyebrow && (
            <p className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[13px] font-bold uppercase tracking-wider text-brand-800">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.15] tracking-tight text-ink-950 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-ink-600">
              {subtitle}
            </p>
          )}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${locale}/${ctaTo}`}
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand-700 px-7 text-base font-bold text-white shadow-[0_8px_24px_rgba(14,116,144,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-800"
            >
              {t.nav.cta}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className={`transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180" : ""}`}
              />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 bg-white px-7 text-base font-bold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
            >
              <Phone size={18} aria-hidden="true" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
