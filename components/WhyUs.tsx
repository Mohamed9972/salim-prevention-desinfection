import { HeartHandshake, PhoneCall, ScanSearch, Users } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = [ScanSearch, HeartHandshake, Users, PhoneCall];

export function WhyUs({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section id="apropos" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.why.cards.map((c, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={c.title} delay={(i % 2) * 80}>
                  <article className="h-full rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_2px_12px_rgba(11,21,26,0.05)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-[17px] font-extrabold text-ink-950">{c.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{c.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
