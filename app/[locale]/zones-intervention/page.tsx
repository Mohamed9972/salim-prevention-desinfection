import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "zones", "/zones-intervention");
}

export default async function ZonesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Breadcrumbs
        locale={locale}
        items={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.zones }]}
      />
      <PageHero
        locale={locale}
        title={t.zonesPage.heroTitle}
        subtitle={t.zonesPage.heroSub}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.zonesPage.zones.map((zone, i) => (
              <Reveal key={zone.name} delay={Math.min(i * 60, 240)}>
                <article className="h-full rounded-[26px] border border-ink-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-[0_20px_50px_rgba(11,21,26,0.12)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-brand-300">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-display text-lg font-extrabold text-ink-950">{zone.name}</h2>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{zone.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 rounded-[26px] bg-ink-950 px-6 py-5 text-center text-[15px] leading-relaxed text-white/85">
              {t.zonesPage.note}
            </p>
          </Reveal>
          <Reveal>
            <h2 className="mt-10 font-display text-xl font-extrabold text-ink-950">
              {t.zonesPage.relatedTitle}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {t.servicesIndex.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/${locale}/services/${s.slug}`}
                    className="inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-[15px] font-semibold text-brand-800 transition-colors hover:bg-brand-100"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <div className="pt-10">
        <CtaBlock locale={locale} />
      </div>
    </>
  );
}
