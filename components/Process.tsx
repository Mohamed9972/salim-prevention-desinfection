import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Passage plan: three ordered soundings from first call to calm water. */
export function Process({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section id="processus" className="grain scroll-mt-20 bg-ink-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading title={t.process.title} align="center" dark />
        <ol className="relative mt-12 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute start-[16%] end-[16%] top-10 hidden border-t-2 border-dashed border-white/15 md:block"
          />
          {t.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className="relative h-full rounded-[26px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/50 sm:p-8">
                <span
                  aria-hidden="true"
                  className="font-display text-6xl font-extrabold tabular-nums tracking-tight text-brand-400"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-extrabold text-white">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="mt-10 text-center">
            <a
              href={`/${locale}/contact`}
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-brand-400 px-9 text-base font-extrabold text-ink-950 shadow-[0_14px_38px_rgba(231,158,34,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-300 active:translate-y-0 active:scale-[0.98]"
            >
              {t.process.cta}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
