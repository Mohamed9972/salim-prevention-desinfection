import { ArrowRight, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const LOCAL_VIDEOS = [
  { src: "/service-video-1.mp4", poster: "/service-video-1-poster.jpg" },
  { src: "/service-video-2.mp4", poster: "/service-video-2-poster.jpg" },
  { src: "/service-video-3.mp4", poster: "/service-video-3-poster.jpg" },
  { src: "/service-video-4.mp4", poster: "/service-video-4-poster.jpg" },
];

export function VideoSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section id="video" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          title={t.video.title}
          subtitle={t.video.subtitle}
        />
        <div className="mt-10 grid justify-items-center gap-8 sm:grid-cols-2 lg:gap-6">
          {LOCAL_VIDEOS.map((v, i) => (
            <Reveal key={v.src} delay={Math.min(i * 120, 240)}>
              <figure className="flex flex-col items-center">
                <div className="rounded-[30px] bg-ink-950 p-2.5 shadow-[0_24px_60px_rgba(11,21,26,0.35)] ring-1 ring-brand-400/30 transition-transform duration-300 hover:-translate-y-1">
                  <video
                    src={v.src}
                    poster={v.poster}
                    controls
                    playsInline
                    preload="metadata"
                    width={267}
                    height={474}
                    className="block h-[474px] w-[267px] max-w-[calc(100vw-80px)] rounded-[22px] border-0 bg-ink-900 object-cover"
                    title={t.video.localFrames[i] ?? t.video.localFrames[0]}
                    aria-label={t.video.localFrames[i] ?? t.video.localFrames[0]}
                  />
                </div>
                <figcaption className="mt-3 text-sm font-bold text-ink-600">
                  {t.video.localFrames[i] ?? t.video.localFrames[0]}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${locale}/contact`}
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-ink-950 px-9 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800"
            >
              {t.video.cta}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 bg-transparent px-9 text-base font-bold text-ink-900 transition-all duration-300 hover:bg-ink-900 hover:text-white"
            >
              <Phone size={18} aria-hidden="true" />
              {t.contact.form.viaCall} ·{" "}
              <span dir="ltr" className="tabular-nums">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
