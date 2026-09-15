import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, FaqJsonLd } from "@/components/FaqList";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CtaBlock } from "@/components/CtaBlock";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "faq", "/faq");
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const items = [...t.faq.items, ...t.faqPage.more];

  return (
    <>
      <FaqJsonLd items={items} />
      <Breadcrumbs
        locale={locale}
        items={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.faq }]}
      />
      <PageHero
        locale={locale}
        eyebrow={t.faq.eyebrow}
        title={t.faqPage.heroTitle}
        subtitle={t.faqPage.heroSub}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 pb-6 sm:px-6">
          <FaqList items={items} idPrefix="page-faq" />
          <Reveal>
            <h2 className="mt-10 text-xl font-extrabold text-ink-950">
              {locale === "ar" ? "خدماتنا" : "Nos services"}
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
      <ReviewsSection locale={locale} />
      <div className="pt-10">
        <CtaBlock locale={locale} />
      </div>
    </>
  );
}
