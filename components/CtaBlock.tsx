import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BASE } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * The closing band: slate night surface, one horizon of logo-teal light,
 * and the phone number set like a totem.
 */
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
    <section aria-label={t.ctaBlock.title} className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[32px] bg-ink-950 px-6 py-14 text-center text-white sm:px-12 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-[100%] bg-brand-500/25 blur-[100px]"
            />
            <h2 className="relative z-10 mx-auto max-w-2xl text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.015em] sm:text-5xl">
              <span aria-hidden="true" className="mx-auto mb-5 block h-2 w-12 rounded-full bg-brand-400" />
              {title ?? t.ctaBlock.title}
            </h2>
            <p
              dir="ltr"
              className="relative z-10 mt-5 font-display text-4xl font-extrabold tabular-nums tracking-tight text-brand-300 sm:text-6xl"
            >
              {PHONE_DISPLAY}
            </p>
            <div className="relative z-10 mx-auto mt-9 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-[54px] flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-400 px-7 text-base font-extrabold text-ink-950 shadow-[0_14px_38px_rgba(41,156,185,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-300 active:translate-y-0 active:scale-[0.98]"
              >
                <Phone size={18} aria-hidden="true" />
                {t.mobileCta.call}
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] flex-1 items-center justify-center gap-2 rounded-2xl bg-[#1FA855] px-7 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.98]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {t.mobileCta.whatsapp}
              </a>
              <a
                href={`/${locale}/contact`}
                className="group inline-flex min-h-[54px] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/25 px-7 text-base font-bold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
              >
                {t.nav.cta}
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
