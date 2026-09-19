import { Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { ADDRESS_FR, COMPANY_AR, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Logo } from "./Logo";
import { EmailLink } from "./EmailLink";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const nav = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/a-propos`, label: t.nav.about },
    { href: `/${locale}/zones-intervention`, label: t.nav.zones },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];
  return (
    <footer className="grain bg-ink-950 text-white">
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.9fr_0.7fr_1fr] md:py-20">
        <div>
          <Logo locale={locale} tone="light" />
          <p lang="ar" dir="auto" className="mt-2 text-sm font-medium text-white/50">{COMPANY_AR}</p>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/65">{t.footer.tagline}</p>
          <a
            href={PHONE_TEL}
            dir="ltr"
            className="mt-5 inline-block font-display text-2xl font-extrabold tabular-nums tracking-tight text-brand-300 transition-colors hover:text-brand-200"
          >
            {PHONE_DISPLAY}
          </a>
          <div className="mt-5 flex flex-col items-start gap-2">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-white/50">
              {t.footer.langLabel}
            </span>
            <LanguageSwitcher locale={locale} variant="dark" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/50">{t.footer.servicesTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`/${locale}/services`} className="text-[15px] font-bold text-white transition-colors hover:text-brand-300">
                {t.nav.services}
              </a>
            </li>
            {t.servicesIndex.map((s) => (
              <li key={s.slug}>
                <a href={`/${locale}/services/${s.slug}`} className="text-[15px] font-medium text-white/70 transition-colors hover:text-white">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={t.footer.navTitle}>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/50">{t.footer.navTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href} className="text-[15px] font-medium text-white/70 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/50">{t.footer.contactTitle}</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <a href={PHONE_TEL} className="flex items-center gap-2.5 font-bold text-white transition-colors hover:text-brand-300">
                <Phone size={17} aria-hidden="true" className="text-brand-300" />
                <span dir="ltr" className="tabular-nums">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <EmailLink className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white" addressClassName="break-all">
                <Mail size={17} aria-hidden="true" className="shrink-0 text-brand-300" />
              </EmailLink>
            </li>
            <li className="flex items-start gap-2.5 text-white/65">
              <MapPin size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-300" />
              {locale === "ar"
                ? "شارع ألفرد نوبل، البحيرة 3، مكتب عدد 3، عمارة نابليون، تونس"
                : ADDRESS_FR}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-white/55 sm:px-6">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
