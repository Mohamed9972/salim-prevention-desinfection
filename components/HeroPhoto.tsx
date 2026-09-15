import Image from "next/image";
import { Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

/**
 * Premium photo visual for the homepage hero.
 * Real intervention photograph (protective suit + spraying), framed in the
 * brand card with treatment chips and the direct-contact box.
 * Replace `public/hero-intervention.jpg` with a company photo anytime —
 * same path, same crop, no code change needed.
 */
export function HeroPhoto({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div className="overflow-hidden rounded-[28px] border border-ink-100 bg-ink-900 text-white shadow-[0_24px_60px_rgba(11,21,26,0.22)]">
      <div className="relative overflow-hidden">
        <Image
          src="/hero-intervention.jpg"
          alt={
            locale === "ar"
              ? "تقني بمعدات الوقاية يقوم برشّ معالجة ضد الحشرات"
              : "Agent en tenue de protection effectuant une pulvérisation de traitement"
          }
          width={1260}
          height={840}
          priority
          sizes="(max-width: 1024px) 100vw, 440px"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/25 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold backdrop-blur-sm">
            {t.hero.cardTitle}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <ul className="flex flex-wrap gap-2">
          {t.hero.cardItems.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-[13px] font-medium text-white/85 ring-1 ring-white/10"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-white/70">{t.hero.cardNote}</p>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-brand-600 px-5 py-4">
          <div>
            <p className="text-[13px] font-medium text-white/80">{t.hero.responseTitle}</p>
            <p dir="ltr" className="text-xl font-extrabold tracking-wide tabular-nums">
              {PHONE_DISPLAY}
            </p>
          </div>
          <a
            href={PHONE_TEL}
            aria-label={locale === "ar" ? "اتصل الآن" : "Appeler maintenant"}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-700 transition-transform hover:scale-105 active:scale-95"
          >
            <Phone size={20} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-white/70">{t.hero.responseText}</p>
      </div>
    </div>
  );
}
