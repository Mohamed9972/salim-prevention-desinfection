import { Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { ADDRESS_FR, COMPANY_AR, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Logo } from "./Logo";
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
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.9fr_0.7fr_1fr]">
        <div>
          <Logo locale={locale} />
          <p className="mt-2 text-sm font-medium text-white/50">{COMPANY_AR}</p>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/70">{t.footer.tagline}</p>
          <div className="mt-5 flex flex-col items-start gap-2">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-white/45">
              {t.footer.langLabel}
            </span>
            <LanguageSwitcher locale={locale} variant="dark" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/45">{t.footer.servicesTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`/${locale}/services`} className="text-[15px] font-bold text-white transition-colors hover:text-brand-200">
                {t.nav.services}
              </a>
            </li>
            {t.servicesIndex.map((s) => (
              <li key={s.slug}>
                <a href={`/${locale}/services/${s.slug}`} className="text-[15px] font-medium text-white/75 transition-colors hover:text-white">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={t.footer.navTitle}>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/45">{t.footer.navTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href} className="text-[15px] font-medium text-white/75 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/45">{t.footer.contactTitle}</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <a href={PHONE_TEL} className="flex items-center gap-2.5 font-bold text-white hover:text-brand-200">
                <Phone size={17} aria-hidden="true" className="text-brand-300" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="flex items-center gap-2.5 text-white/80 hover:text-white" dir="ltr">
                <Mail size={17} aria-hidden="true" className="shrink-0 text-brand-300" />
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-white/70">
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
