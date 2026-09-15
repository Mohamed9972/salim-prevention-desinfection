import { ArrowRight, BedDouble, Bug, Rat, ShieldPlus, SprayCan, type LucideIcon } from "lucide-react";
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
};

function serviceName(locale: Locale, slug: string): string {
  const t = getDictionary(locale);
  return t.servicesIndex.find((s) => s.slug === slug)?.name ?? slug;
}

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
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {t.hub.items.map((item, i) => {
        const Icon = SERVICE_ICONS[item.slug] ?? Bug;
        return (
          <Reveal key={item.slug} delay={Math.min((i % 3) * 90, 180)}>
            <article className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-[0_2px_12px_rgba(11,21,26,0.05)] transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_16px_40px_rgba(14,116,144,0.12)]">
              <span className="flex w-fit items-center justify-center rounded-2xl bg-brand-700 p-3.5 text-white">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-ink-950">
                {serviceName(locale, item.slug)}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{item.desc}</p>
              {hub && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-ink-50 px-3.5 py-1.5 text-[13px] font-medium text-ink-700 ring-1 ring-ink-100"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={`/${locale}/services/${item.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-bold text-brand-700 hover:text-brand-800"
                aria-label={`${t.hub.more} — ${serviceName(locale, item.slug)}`}
              >
                {t.hub.more}
                <ArrowRight size={16} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
              </a>
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
    <section aria-label={t.home.preview.title} className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow={t.home.preview.eyebrow}
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
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 px-8 text-base font-bold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
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
