import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BASE } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBlock({
  locale,
  title,
}: {
  locale: Locale;
  title?: string;
}) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section aria-label={t.ctaBlock.title} className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink-900 px-6 py-12 text-center text-white sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 start-1/4 h-56 w-56 rounded-full bg-brand-500/20"
            />
            <h2 className="relative text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title ?? t.ctaBlock.title}
            </h2>
            <p dir="ltr" className="relative mt-3 text-2xl font-extrabold tracking-wide text-brand-200 sm:text-3xl">
              {PHONE_DISPLAY}
            </p>
            <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-ink-900 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                <Phone size={18} aria-hidden="true" />
                {t.mobileCta.call}
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
                href={`/${locale}/contact`}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/25 px-7 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                {t.nav.cta}
                <ArrowRight size={18} aria-hidden="true" className={isRtl ? "rotate-180" : ""} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
