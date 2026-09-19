import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BASE } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "contact", "/contact");
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Breadcrumbs
        locale={locale}
        items={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.contact }]}
      />
      <div className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-14">
          <Reveal>
            <h1 className="max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-ink-950 sm:text-6xl">
              <span aria-hidden="true" className="mb-5 block h-2.5 w-14 rounded-full bg-brand-400" />
              {t.contactPage.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-600">
              {t.contactPage.heroSub}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand-400 px-7 text-base font-extrabold text-ink-950 shadow-[0_10px_30px_rgba(41,156,185,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-300"
              >
                <Phone size={18} aria-hidden="true" />
                <span dir="ltr" className="tabular-nums">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#1FA855] px-7 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {t.mobileCta.whatsapp}
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-950 px-7 text-base font-bold text-ink-950 transition-colors hover:bg-ink-950 hover:text-white"
              >
                <Mail size={18} aria-hidden="true" />
                {t.contact.direct.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <Contact locale={locale} />
    </>
  );
}
