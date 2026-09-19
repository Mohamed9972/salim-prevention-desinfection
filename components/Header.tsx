"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_TEL } from "@/lib/site";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  // Close menus on route change: handled via onClick on each link.
  const closeAll = () => {
    setOpen(false);
    setDropOpen(false);
    setMobileServices(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openDrop = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    setDropOpen(true);
  };
  const scheduleCloseDrop = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    dropTimer.current = setTimeout(() => setDropOpen(false), 120);
  };

  // Note: "Contact" volontairement absent du menu — le bouton
  // "Demander une intervention" suffit (mène vers /contact).
  const links = [
    { href: `/${locale}`, label: t.nav.home, exact: true },
    { href: `/${locale}/a-propos`, label: t.nav.about, exact: false },
    { href: `/${locale}/zones-intervention`, label: t.nav.zones, exact: false },
    { href: `/${locale}/faq`, label: t.nav.faq, exact: false },
  ];
  const servicesHref = `/${locale}/services`;
  const isServicesActive = pathname?.startsWith(servicesHref) ?? false;
  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname?.startsWith(href) ?? false;

  const linkCls = (active: boolean) =>
    `relative whitespace-nowrap rounded-lg px-1 py-2 text-[15px] font-semibold transition-colors hover:text-brand-700 ${
      active ? "text-brand-700" : "text-ink-800"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-ink-900/10 shadow-[0_4px_24px_rgba(11,21,26,0.10)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[72px]">
        <Link href={`/${locale}`} onClick={closeAll} aria-label={locale === "ar" ? "سليم — الرئيسية" : "Salim — accueil"} className="shrink-0">
          <Logo locale={locale} compact />
        </Link>

        <nav aria-label={locale === "ar" ? "التنقل الرئيسي" : "Navigation principale"} className="hidden items-center gap-5 lg:flex">
          <Link href={`/${locale}`} onClick={closeAll} aria-current={pathname === `/${locale}` ? "page" : undefined} className={linkCls(isActive(`/${locale}`, true))}>
            {t.nav.home}
          </Link>

          <div
            className="relative"
            onMouseEnter={openDrop}
            onMouseLeave={scheduleCloseDrop}
          >
            <div className="flex items-center">
              <Link href={servicesHref} onClick={closeAll} aria-current={isServicesActive ? "page" : undefined} className={linkCls(isServicesActive)}>
                {t.nav.services}
              </Link>
              <button
                type="button"
                onClick={() => setDropOpen((v) => !v)}
                aria-expanded={dropOpen}
                aria-haspopup="true"
                aria-label={t.nav.services}
                className={`-ms-0.5 inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg ${isServicesActive ? "text-brand-700" : "text-ink-500"} transition-colors hover:bg-brand-100 hover:text-brand-700`}
              >
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`transition-transform ${dropOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {dropOpen && (
              <div className="absolute start-0 top-full w-64 pt-2">
                <ul className="overflow-hidden rounded-2xl border border-ink-900/10 bg-paper p-2 shadow-[0_20px_50px_rgba(11,21,26,0.16)]">
                  {t.servicesIndex.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${locale}/services/${s.slug}`}
                        onClick={closeAll}
                        aria-current={pathname === `/${locale}/services/${s.slug}` ? "page" : undefined}
                        className="block rounded-xl px-4 py-2.5 text-[15px] font-semibold text-ink-800 transition-colors hover:bg-brand-100 hover:text-brand-800"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} onClick={closeAll} aria-current={isActive(l.href, l.exact) ? "page" : undefined} className={linkCls(isActive(l.href, l.exact))}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link
            href={`/${locale}/contact`}
            onClick={closeAll}
            className="rounded-full bg-ink-950 px-5 py-2.5 text-[15px] font-bold text-white shadow-[0_8px_22px_rgba(11,21,26,0.3)] transition-all duration-300 hover:-translate-y-px hover:bg-ink-800"
          >
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex min-w-0 items-center gap-2 lg:hidden">
          <div className="hidden min-[480px]:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <a
            href={PHONE_TEL}
            aria-label={locale === "ar" ? "اتصل 50 431 208" : "Appeler le 50 431 208"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-700"
          >
            <Phone size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/20 text-ink-900"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-900/10 bg-paper lg:hidden">
          <nav
            aria-label={locale === "ar" ? "قائمة الجوال" : "Menu mobile"}
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
          >
            <div className="px-4 pb-2 pt-1 min-[480px]:hidden">
              <LanguageSwitcher locale={locale} />
            </div>
            <Link
              href={`/${locale}`}
              onClick={closeAll}
              aria-current={pathname === `/${locale}` ? "page" : undefined}
              className="rounded-xl px-4 py-3 text-base font-semibold text-ink-800 transition-colors hover:bg-brand-100 hover:text-brand-800"
            >
              {t.nav.home}
            </Link>

            <div className="overflow-hidden rounded-xl border border-ink-900/10">
              <div className="flex items-center">
                <Link
                  href={servicesHref}
                  onClick={closeAll}
                  className="flex-1 px-4 py-3 text-base font-bold text-ink-900"
                >
                  {t.nav.services}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServices((v) => !v)}
                  aria-expanded={mobileServices}
                  aria-label={t.nav.services}
                  className="flex h-11 w-11 items-center justify-center text-ink-700"
                >
                  <ChevronDown
                    size={19}
                    aria-hidden="true"
                    className={`transition-transform ${mobileServices ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {mobileServices && (
                <ul className="border-t border-ink-900/10 bg-ink-50 p-2">
                  {t.servicesIndex.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${locale}/services/${s.slug}`}
                        onClick={closeAll}
                        className="block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-ink-700 transition-colors hover:bg-brand-100 hover:text-brand-800"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeAll}
                aria-current={pathname === l.href ? "page" : undefined}
                className="rounded-xl px-4 py-3 text-base font-semibold text-ink-800 transition-colors hover:bg-brand-100 hover:text-brand-800"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              onClick={closeAll}
              className="mt-2 rounded-xl bg-brand-400 px-4 py-3.5 text-center text-base font-extrabold text-ink-950"
            >
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
