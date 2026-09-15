import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section id="processus" className="scroll-mt-20 bg-ink-50/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} align="center" />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <li className="relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-7">
                <span aria-hidden="true" className="text-5xl font-extrabold tracking-tight text-brand-100">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-ink-950">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="mt-8 text-center">
            <a
              href={`/${locale}/contact`}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand-700 px-8 text-base font-bold text-white shadow-[0_8px_24px_rgba(14,116,144,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-800 active:translate-y-0 active:scale-[0.98]"
            >
              {t.process.cta}
              <ArrowRight size={18} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
