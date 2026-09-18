import { ArrowRight, MapPin } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Night-signal band: the worry, stated large, with the way out beside it. */
export function ProblemBand({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section aria-label={t.home.problem.title} className="grain bg-ink-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.015em] sm:text-5xl">
            <span aria-hidden="true" className="mb-4 block h-2 w-12 rounded-full bg-brand-400" />
            {t.home.problem.title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-[17px] leading-relaxed text-white/70">
            {t.home.problem.text}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <a
            href={`/${locale}/contact`}
            className="group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-400 px-9 text-base font-extrabold text-ink-950 shadow-[0_14px_38px_rgba(231,158,34,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-300 active:translate-y-0 active:scale-[0.98]"
          >
            {t.home.problem.cta}
            <ArrowRight
              size={18}
              aria-hidden="true"
              className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** Ports of call: every zone the crew sails to, then the full chart. */
export function AreasPreview({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  const short = t.areas.list.slice(0, 6);
  return (
    <section aria-label={t.home.areas.title} className="border-y border-ink-900/10 bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading title={t.home.areas.title} />
        <Reveal>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {short.map((z) => (
              <li
                key={z}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-paper px-5 py-2.5 text-[15px] font-bold text-ink-900 transition-colors duration-300 hover:border-brand-500 hover:bg-brand-50"
              >
                <MapPin size={15} aria-hidden="true" className="text-brand-600" />
                {z}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <a
            href={`/${locale}/zones-intervention`}
            className="group mt-8 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand-700 transition-colors hover:text-brand-600"
          >
            {t.home.areas.cta}
            <ArrowRight size={16} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
