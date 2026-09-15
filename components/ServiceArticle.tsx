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
        eyebrow={name}
        title={data.heroTitle}
        subtitle={data.heroSub}
      />

      <section className="bg-white">
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
              <p className="mt-6 max-w-3xl rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4 text-[15px] font-medium leading-relaxed text-brand-800">
                {data.note}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {data.blocks.map((block) => {
        const useChips = block.items.every((s) => s.length <= 28);
        return (
          <section key={block.title} className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
                  {block.title}
                </h2>
              </Reveal>
              {useChips ? (
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-[15px] font-semibold text-brand-800"
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
                      className="flex gap-3 rounded-2xl border border-ink-100 bg-ink-50/50 px-5 py-4 text-[15px] leading-relaxed text-ink-800"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600"
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

      <section className="bg-ink-50/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
              {data.stepsTitle}
            </h2>
          </Reveal>
          <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 80, 240)}>
                <li className="h-full rounded-3xl border border-ink-100 bg-white p-6">
                  <span
                    aria-hidden="true"
                    className="text-4xl font-extrabold tracking-tight text-brand-200"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-[17px] font-extrabold text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {"places" in data && data.places && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
                {data.placesTitle}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {data.places.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-ink-900 px-4 py-2 text-[15px] font-semibold text-white"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
                  FAQ
                </h2>
              </Reveal>
              <div className="mt-6">
                <FaqList items={data.faq} idPrefix={`svc-${slug}`} />
              </div>
            </div>
            <div>
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
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
                        className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-4 shadow-[0_2px_10px_rgba(11,21,26,0.04)] transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_12px_30px_rgba(14,116,144,0.10)]"
                      >
                        {Icon && (
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                            <Icon size={20} aria-hidden="true" />
                          </span>
                        )}
                        <span className="flex-1 text-[16px] font-bold text-ink-900">
                          {s.name}
                        </span>
                        <ArrowRight
                          size={17}
                          aria-hidden="true"
                          className={`text-brand-700 transition-transform group-hover:translate-x-0.5 ${isRtl ? "rotate-180" : ""}`}
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
