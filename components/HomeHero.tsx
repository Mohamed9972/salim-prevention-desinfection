import { ArrowRight, BadgeCheck, Bug, Phone, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { HeroVisual } from "./HeroVisual";

export function HomeHero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const h = t.home.hero;
  const isRtl = locale === "ar";

  return (
    <section id="accueil" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 end-[-120px] h-[340px] w-[340px] rounded-full bg-brand-50" />
        <div className="absolute bottom-[-160px] start-[-120px] h-[300px] w-[300px] rounded-full bg-ink-50" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[13px] font-semibold text-brand-800">
            <ShieldCheck size={15} aria-hidden="true" />
            {h.badge}
          </p>
          <h1 className="mt-5 max-w-xl text-balance text-4xl font-extrabold leading-[1.15] tracking-tight text-ink-950 sm:text-5xl">
            {h.title}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-ink-600">
            {h.subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${locale}/contact`}
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand-700 px-7 text-base font-bold text-white shadow-[0_8px_24px_rgba(14,116,144,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-800 active:translate-y-0 active:scale-[0.98]"
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
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 bg-white px-7 text-base font-bold text-ink-900 transition-all hover:bg-ink-900 hover:text-white active:scale-[0.98]"
            >
              <Phone size={18} aria-hidden="true" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-medium text-ink-700">
            {t.hero.points.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <BadgeCheck size={17} aria-hidden="true" className="shrink-0 text-brand-600" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="overflow-hidden rounded-[28px] border border-ink-100 bg-gradient-to-b from-ink-900 via-ink-800 to-brand-950 p-7 text-white shadow-[0_24px_60px_rgba(11,21,26,0.22)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold">
                  <Bug size={15} aria-hidden="true" />
                  {t.hero.cardTitle}
                </span>
                <ShieldCheck size={34} aria-hidden="true" className="text-brand-300" />
              </div>
              <div className="mt-6">
                <HeroVisual />
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {t.hero.cardItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-[13px] font-medium text-white/85 ring-1 ring-white/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-white/70">{t.hero.cardNote}</p>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-brand-600 px-5 py-4">
                <div>
                  <p className="text-[13px] font-medium text-white/80">{t.hero.responseTitle}</p>
                  <p dir="ltr" className="text-xl font-extrabold tracking-wide tabular-nums">
                    {PHONE_DISPLAY}
                  </p>
                </div>
                <a
                  href={PHONE_TEL}
                  aria-label={locale === "ar" ? "اتصل الآن" : "Appeler maintenant"}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-700 transition-transform hover:scale-105"
                >
                  <Phone size={20} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-3 text-center text-xs text-white/70">{t.hero.responseText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
