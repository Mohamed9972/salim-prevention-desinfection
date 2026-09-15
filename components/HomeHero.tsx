import Image from "next/image";
import { ArrowRight, BadgeCheck, Phone, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * Full-bleed photographic hero.
 * To swap the visual, replace `public/hero-intervention.jpg` (landscape,
 * subject ideally offset from the text side) — no code change needed.
 */
export function HomeHero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const h = t.home.hero;
  const isRtl = locale === "ar";

  return (
    <section id="accueil" className="relative overflow-hidden bg-ink-950 text-white">
      <Image
        src="/hero-intervention.jpg"
        alt={
          locale === "ar"
            ? "تدخل مهني لمكافحة الحشرات وتطهير الأماكن"
            : "Intervention professionnelle de lutte contre les nuisibles"
        }
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* readability gradients: dark on the reading side, open on the far side */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-transparent rtl:bg-gradient-to-l"
      />

      <div className="relative mx-auto flex min-h-[600px] w-full max-w-6xl items-center px-4 py-20 sm:px-6 md:min-h-[660px] md:py-24">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
            <ShieldCheck size={15} aria-hidden="true" className="text-brand-300" />
            {h.badge}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            {h.title}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
            {h.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${locale}/contact`}
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-brand-600 px-8 text-base font-bold text-white shadow-[0_10px_32px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-500 active:translate-y-0 active:scale-[0.98]"
            >
              {h.primary}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className={`transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180" : ""}`}
              />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl border-2 border-white/70 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-ink-900 active:scale-[0.98]"
            >
              <Phone size={18} aria-hidden="true" />
              <span dir="ltr" className="tabular-nums">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-medium text-white/85">
            {t.hero.points.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <BadgeCheck size={17} aria-hidden="true" className="shrink-0 text-brand-300" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-white/15 pt-5">
            <p className="text-sm font-semibold text-white/70">{t.hero.cardTitle}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {t.hero.cardItems.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white/90 ring-1 ring-white/15 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
