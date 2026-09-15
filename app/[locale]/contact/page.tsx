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
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-14">
          <Reveal>
            <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.15] tracking-tight text-ink-950 sm:text-5xl">
              {t.contactPage.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-ink-600">
              {t.contactPage.heroSub}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand-700 px-7 text-base font-bold text-white shadow-[0_8px_24px_rgba(14,116,144,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-800"
              >
                <Phone size={18} aria-hidden="true" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
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
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 px-7 text-base font-bold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
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
