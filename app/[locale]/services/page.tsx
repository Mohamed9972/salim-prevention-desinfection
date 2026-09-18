import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "services", "/services");
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Breadcrumbs
        locale={locale}
        items={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.services }]}
      />
      <PageHero
        locale={locale}
        title={t.hub.title}
        subtitle={t.hub.intro}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <ServicesGrid locale={locale} variant="hub" />
        </div>
      </section>
      <CtaBlock locale={locale} />
    </>
  );
}
