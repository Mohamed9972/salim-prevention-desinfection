import { ArrowRight, BedDouble, Bug, PawPrint, Rat, ShieldPlus, SprayCan, type LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  desinsectisation: Bug,
  deratisation: Rat,
  "punaises-de-lit": BedDouble,
  desinfection: SprayCan,
  "traitement-nuisibles": ShieldPlus,
  puces: PawPrint,
};

function serviceName(locale: Locale, slug: string): string {
  const t = getDictionary(locale);
  return t.servicesIndex.find((s) => s.slug === slug)?.name ?? slug;
}

/**
 * Berth layout: an asymmetric bento, never three equal cards.
 * Lead berth and closing berth run full-width (lead on night water);
 * the middle berths alternate 3/2 and 2/3 beats.
 */
const SPANS = [
  "sm:col-span-2 lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "sm:col-span-2 lg:col-span-5",
];

const TILT =
  "[@media(hover:hover)]:hover:[transform:perspective(1000px)_rotateX(1.6deg)_rotateY(-1.6deg)_translateY(-5px)]";

export function ServicesGrid({
  locale,
  variant = "preview",
}: {
  locale: Locale;
  variant?: "preview" | "hub";
}) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  const hub = variant === "hub";

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {t.hub.items.map((item, i) => {
        const Icon = SERVICE_ICONS[item.slug] ?? Bug;
        const lead = i === 0;
        const closing = i === t.hub.items.length - 1;
        const banner = lead || closing;
        return (
          <Reveal
            key={item.slug}
            delay={Math.min(i * 70, 280)}
            className={SPANS[i % SPANS.length]}
          >
            <article
              className={`group flex h-full flex-col rounded-[26px] border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${TILT} ${
                lead
                  ? "grain border-ink-800 bg-ink-950 text-white hover:border-brand-500/60 hover:shadow-[0_24px_60px_rgba(7,24,20,0.45)] sm:flex-row sm:items-center sm:gap-8"
                  : closing
                    ? "border-brand-300 bg-white hover:border-brand-500 hover:shadow-[0_20px_50px_rgba(224,142,11,0.16)] sm:flex-row sm:items-center sm:gap-8"
                    : "border-ink-900/10 bg-white hover:border-brand-400 hover:shadow-[0_20px_50px_rgba(7,24,20,0.14)]"
              }`}
            >
              <span
                className={`flex w-fit shrink-0 items-center justify-center rounded-2xl p-4 ${
                  lead ? "bg-brand-400 text-ink-950" : "bg-ink-950 text-brand-300"
                }`}
              >
                <Icon size={lead || closing ? 30 : 24} aria-hidden="true" />
              </span>
              <div className={banner ? "mt-5 min-w-0 flex-1 sm:mt-0" : ""}>
                <h3
                  className={`font-display text-xl font-extrabold tracking-[-0.01em] sm:text-2xl ${
                    lead ? "text-white" : "text-ink-950"
                  }`}
                >
                  {serviceName(locale, item.slug)}
                </h3>
                <p
                  className={`mt-2 max-w-xl text-[15px] leading-relaxed ${
                    lead ? "text-white/70" : "text-ink-600"
                  }`}
                >
                  {item.desc}
                </p>
                {hub && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium ring-1 ${
                          lead
                            ? "bg-white/10 text-white/85 ring-white/15"
                            : "bg-ink-50 text-ink-700 ring-ink-100"
                        }`}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={`/${locale}/services/${item.slug}`}
                  className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-bold transition-colors ${
                    lead
                      ? "text-brand-300 hover:text-brand-200"
                      : "text-brand-700 hover:text-brand-600"
                  }`}
                  aria-label={`${t.hub.more} — ${serviceName(locale, item.slug)}`}
                >
                  {t.hub.more}
                  <ArrowRight size={16} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
                </a>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ServicesPreview({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section aria-label={t.home.preview.title} className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          title={t.home.preview.title}
          subtitle={t.home.preview.subtitle}
        />
        <div className="mt-10">
          <ServicesGrid locale={locale} variant="preview" />
        </div>
        <Reveal>
          <div className="mt-8 text-center">
            <a
              href={`/${locale}/services`}
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 px-8 text-base font-bold text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-900 hover:text-white"
            >
              {t.home.preview.all}
              <ArrowRight size={18} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
