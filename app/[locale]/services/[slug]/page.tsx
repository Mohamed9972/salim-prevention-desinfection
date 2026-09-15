import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceArticle } from "@/components/ServiceArticle";
import { isLocale } from "@/lib/i18n";
import { SERVICE_SLUGS, serviceSlugToSeo, pageMetadata, type ServiceSlug } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of ["fr", "ar"]) {
    for (const slug of SERVICE_SLUGS) out.push({ locale, slug });
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  if (!(SERVICE_SLUGS as readonly string[]).includes(slug)) return {};
  return pageMetadata(
    locale,
    serviceSlugToSeo(slug as ServiceSlug),
    `/services/${slug}`,
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!(SERVICE_SLUGS as readonly string[]).includes(slug)) notFound();

  return <ServiceArticle locale={locale} slug={slug as ServiceSlug} />;
}
