import { notFound } from "next/navigation";
import { HomeHero } from "@/components/HomeHero";
import { ServicesPreview } from "@/components/ServicesGrid";
import { ProblemBand, AreasPreview } from "@/components/HomeBands";
import { VideoSection } from "@/components/VideoSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Process } from "@/components/Process";
import { CtaBlock } from "@/components/CtaBlock";
import { isLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <HomeHero locale={locale} />
      <ServicesPreview locale={locale} />
      <ProblemBand locale={locale} />
      <VideoSection locale={locale} />
      <ReviewsSection locale={locale} />
      <Process locale={locale} />
      <AreasPreview locale={locale} />
      <CtaBlock locale={locale} />
    </>
  );
}
