import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhyUs } from "@/components/WhyUs";
import { CtaBlock } from "@/components/CtaBlock";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "apropos", "/a-propos");
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Breadcrumbs
        locale={locale}
        items={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.about }]}
      />
      <PageHero
        locale={locale}
        eyebrow={t.why.eyebrow}
        title={t.aboutPage.heroTitle}
        subtitle={t.aboutPage.heroSub}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink-700">
              {t.aboutPage.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
              {t.aboutPage.approachTitle}
            </h2>
          </Reveal>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.aboutPage.approach.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 80, 240)}>
                <li className="h-full rounded-3xl border border-ink-100 bg-ink-50/50 p-6">
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
      <WhyUs locale={locale} />
      <CtaBlock locale={locale} />
    </>
  );
}
