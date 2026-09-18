import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import type { ServiceSlug } from "@/lib/seo";
import { Reveal } from "./Reveal";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList, FaqJsonLd } from "./FaqList";
import { CtaBlock } from "./CtaBlock";
import { SERVICE_ICONS } from "./ServicesGrid";

export function ServiceArticle({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ServiceSlug;
}) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  const data = t.servicePages[slug];
  const name =
    t.servicesIndex.find((s) => s.slug === slug)?.name ?? slug;
  const related = t.servicesIndex.filter((s) => s.slug !== slug);

  return (
    <>
      <FaqJsonLd items={data.faq} />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: t.nav.home, href: `/${locale}` },
          { label: t.nav.services, href: `/${locale}/services` },
          { label: name },
        ]}
      />
      <PageHero
        locale={locale}
        title={data.heroTitle}
        subtitle={data.heroSub}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink-700">
              {data.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          {"note" in data && data.note && (
            <Reveal>
              <p className="mt-6 max-w-3xl rounded-2xl border border-brand-300 bg-brand-50 px-5 py-4 text-[15px] font-semibold leading-relaxed text-brand-800">
                {data.note}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {data.blocks.map((block) => {
        const useChips = block.items.every((s) => s.length <= 28);
        return (
          <section key={block.title} className="bg-paper">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold tracking-[-0.01em] text-ink-950 sm:text-3xl">
                  {block.title}
                </h2>
              </Reveal>
              {useChips ? (
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-brand-300 bg-brand-50 px-4 py-2 text-[15px] font-bold text-brand-800 transition-colors hover:bg-brand-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl border border-ink-900/10 bg-white px-5 py-4 text-[15px] leading-relaxed text-ink-800"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}

      <section className="grain bg-ink-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.01em] text-white sm:text-3xl">
              <span aria-hidden="true" className="mb-4 block h-2 w-12 rounded-full bg-brand-400" />
              {data.stepsTitle}
            </h2>
          </Reveal>
          <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 80, 240)}>
                <li className="h-full rounded-[26px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/50">
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-extrabold tabular-nums tracking-tight text-brand-400"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-[17px] font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/65">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {"places" in data && data.places && (
        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.01em] text-ink-950 sm:text-3xl">
                {data.placesTitle}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {data.places.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-ink-950 px-4 py-2 text-[15px] font-bold text-white"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold tracking-[-0.01em] text-ink-950 sm:text-3xl">
                  FAQ
                </h2>
              </Reveal>
              <div className="mt-6">
                <FaqList items={data.faq} idPrefix={`svc-${slug}`} />
              </div>
            </div>
            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold tracking-[-0.01em] text-ink-950 sm:text-3xl">
                  {locale === "ar" ? "خدمات أخرى" : "Autres services"}
                </h2>
              </Reveal>
              <ul className="mt-6 space-y-3">
                {related.map((s) => {
                  const Icon = SERVICE_ICONS[s.slug];
                  return (
                    <li key={s.slug}>
                      <a
                        href={`/${locale}/services/${s.slug}`}
                        className="group flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-[0_4px_16px_rgba(7,24,20,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-[0_16px_36px_rgba(7,24,20,0.12)]"
                      >
                        {Icon && (
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-brand-300">
                            <Icon size={20} aria-hidden="true" />
                          </span>
                        )}
                        <span className="flex-1 text-[16px] font-bold text-ink-900">
                          {s.name}
                        </span>
                        <ArrowRight
                          size={17}
                          aria-hidden="true"
                          className={`text-brand-700 transition-transform duration-300 group-hover:translate-x-0.5 ${isRtl ? "rotate-180" : ""}`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock locale={locale} title={data.ctaTitle} />
    </>
  );
}
