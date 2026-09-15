"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BASE } from "@/lib/site";

export function MobileCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/97 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
      role="navigation"
      aria-label={locale === "ar" ? "اتصال سريع" : "Contact rapide"}
    >
      <div className="grid grid-cols-2 gap-2.5 p-3">
        <a
          href={PHONE_TEL}
          className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-ink-900 text-[15px] font-bold text-white active:scale-[0.98]"
        >
          <Phone size={18} aria-hidden="true" />
          {t.mobileCta.call} · <span dir="ltr" className="tracking-wide">{PHONE_DISPLAY}</span>
        </a>
        <a
          href={WHATSAPP_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-[#1FA855] text-[15px] font-bold text-white active:scale-[0.98]"
        >
          <MessageCircle size={18} aria-hidden="true" />
          {t.mobileCta.whatsapp}
        </a>
      </div>
    </div>
  );
}
