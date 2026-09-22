export const PHONE_DISPLAY = "50 431 208";
export const PHONE_TEL = "tel:+21650431208";
export const WHATSAPP_BASE = "https://wa.me/21650431208";

export const EMAIL = "slimkarouni40@gmail.com";
export const EMAIL_HREF = "mailto:slimkarouni40@gmail.com";

export const ADDRESS_FR =
  "Rue Alfred Nobel, Lac 3, Bureau N°3, Immeuble Napoléon, Tunis, Tunisie";
export const ADDRESS_SHORT_FR =
  "Rue Alfred Nobel, Lac 3, Bureau N°3, Immeuble Napoléon";

export const COMPANY_AR =
  "شركة سليم للوقاية و التطهير من جميع انواع الحشرات";
export const COMPANY_AR_SHORT = "شركة سليم للوقاية والتطهير";
export const COMPANY_FR = "Salim — Prévention et Désinfection";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://salim-prevention-desinfection.tn";

export function whatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}
