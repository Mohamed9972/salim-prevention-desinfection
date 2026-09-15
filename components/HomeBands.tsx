import { ArrowRight, MapPin } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function ProblemBand({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section aria-label={t.home.problem.title} className="bg-ink-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between md:py-14">
        <Reveal>
          <h2 className="max-w-xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t.home.problem.title}
          </h2>
          <p className="mt-2 max-w-xl text-pretty text-[16px] leading-relaxed text-white/75">
            {t.home.problem.text}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <a
            href={`/${locale}/contact`}
            className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-ink-900 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
          >
            {t.home.problem.cta}
            <ArrowRight size={18} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function AreasPreview({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  const short = t.areas.list.slice(0, 6);
  return (
    <section aria-label={t.home.areas.title} className="border-y border-ink-100 bg-ink-50/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="text-[13px] font-bold uppercase tracking-wider text-brand-700">
            {t.home.areas.eyebrow}
          </p>
          <h2 className="mt-2 max-w-2xl text-balance text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
            {t.home.areas.title}
          </h2>
        </Reveal>
        <Reveal>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {short.map((z) => (
              <li
                key={z}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[15px] font-semibold text-brand-800"
              >
                <MapPin size={15} aria-hidden="true" />
                {z}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <a
            href={`/${locale}/zones-intervention`}
            className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand-700 hover:text-brand-800"
          >
            {t.home.areas.cta}
            <ArrowRight size={16} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
