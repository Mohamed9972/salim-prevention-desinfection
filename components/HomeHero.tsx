import { ArrowRight, BadgeCheck, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

/**
 * First viewport: la vidéo d'intervention en fond plein écran
 * (sans effet WebGL), voile sombre pour la lisibilité du texte.
 * Start-aligned giant display type; the zone badge lives as a location
 * line — never a kicker above the heading.
 */
export function HomeHero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const h = t.home.hero;
  const isRtl = locale === "ar";
  const zones = t.areas.list;

  return (
    <section id="accueil" className="grain relative overflow-hidden bg-ink-950 text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-intervention.jpg"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Reduced-motion fallback: static poster (matches the video frame). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-intervention.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
      />
      {/* night grade: deep pine over the video so the text stays readable */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink-950/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/50 to-ink-950/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30"
      />
      {/* horizon glow at the waterline */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 start-[8%] h-72 w-[70%] rounded-[100%] bg-brand-500/25 blur-[110px]"
      />

      <div dir="ltr" className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center px-4 pb-14 pt-16 text-left sm:px-6 md:min-h-[calc(100svh-4.5rem)] md:py-20">
        <div className="max-w-3xl">
          <h1
            className="harbor-in font-display text-balance text-[clamp(2.7rem,6.4vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.02em]"
            style={{ animationDelay: "60ms" }}
          >
            <span
              aria-hidden="true"
              className="mb-5 block h-2.5 w-14 rounded-full bg-brand-400"
            />
            {h.title}
          </h1>
          <p
            className="harbor-in mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/75"
            style={{ animationDelay: "160ms" }}
          >
            {h.subtitle}
          </p>

          <div
            className="harbor-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "260ms" }}
          >
            <a
              href={`/${locale}/contact`}
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-2xl bg-brand-400 px-9 text-base font-extrabold text-ink-950 shadow-[0_14px_38px_rgba(41,156,185,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-300 hover:shadow-[0_20px_48px_rgba(41,156,185,0.4)] active:translate-y-0 active:scale-[0.98]"
            >
              {h.primary}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/5 px-9 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
            >
              <Phone size={18} aria-hidden="true" />
              <span dir="ltr" className="tabular-nums tracking-wide">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <ul
            className="harbor-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] font-medium text-white/80"
            style={{ animationDelay: "340ms" }}
          >
            {t.hero.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <BadgeCheck size={17} aria-hidden="true" className="shrink-0 text-brand-300" />
                {p}
              </li>
            ))}
          </ul>

          <div
            className="harbor-in mt-8 flex flex-col gap-4 border-t border-white/15 pt-6"
            style={{ animationDelay: "420ms" }}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-white/70">
              <span aria-hidden="true" className="lantern-dot inline-block h-2 w-2 rounded-full bg-brand-400" />
              <MapPin size={15} aria-hidden="true" className="text-brand-300" />
              {h.badge}
            </p>
            <ul className="flex flex-wrap gap-2">
              {t.hero.cardItems.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white/90 ring-1 ring-white/15 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ports of call — the zones ticker closing the viewport */}
      <div className="marquee relative z-10 overflow-hidden border-t border-white/10 py-4" dir="ltr">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex items-center"
            >
              {zones.map((z) => (
                <span
                  key={`${half}-${z}`}
                  className="flex items-center text-sm font-semibold tracking-wide text-white/55"
                >
                  <span className="px-7">{z}</span>
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-400/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
