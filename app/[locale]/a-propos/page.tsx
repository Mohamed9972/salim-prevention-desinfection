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
        title={t.aboutPage.heroTitle}
        subtitle={t.aboutPage.heroSub}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink-700">
              {t.aboutPage.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="mt-12 font-display text-2xl font-extrabold tracking-[-0.01em] text-ink-950 sm:text-3xl">
              {t.aboutPage.approachTitle}
            </h2>
          </Reveal>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.aboutPage.approach.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 80, 240)}>
                <li className="h-full rounded-[26px] border border-ink-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-[0_20px_50px_rgba(11,21,26,0.12)]">
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-extrabold tabular-nums tracking-tight text-brand-300"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-[18px] font-extrabold text-ink-950">
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
