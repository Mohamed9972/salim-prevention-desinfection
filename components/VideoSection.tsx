import { ArrowRight, ExternalLink, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const REELS = [
  {
    watch: "https://www.facebook.com/reel/952383384277311/",
    embed:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F952383384277311%2F&show_text=false&width=267&t=0",
    height: 476,
  },
  {
    watch: "https://www.facebook.com/reel/27052378877764068/",
    embed:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F27052378877764068%2F&show_text=true&width=267&t=0",
    height: 591,
  },
  {
    watch: "https://www.facebook.com/reel/1440823641247632/",
    embed:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1440823641247632%2F&show_text=false&width=267&t=0",
    height: 476,
  },
];

export function VideoSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  return (
    <section id="video" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow={t.video.eyebrow}
          title={t.video.title}
          subtitle={t.video.subtitle}
        />
        <div className="mt-10 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {REELS.map((reel, i) => (
            <Reveal key={reel.watch} delay={Math.min(i * 120, 240)}>
              <figure className="flex flex-col items-center">
                <div className="rounded-[30px] bg-ink-900 p-2.5 shadow-[0_24px_60px_rgba(11,21,26,0.25)]">
                  <iframe
                    src={reel.embed}
                    width={267}
                    height={reel.height}
                    className="block w-[267px] max-w-[calc(100vw-80px)] rounded-[22px] border-0 bg-ink-800"
                    style={{ border: "none", overflow: "hidden", height: reel.height }}
                    title={t.video.frames[i] ?? t.video.frames[0]}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-3">
                  <a
                    href={reel.watch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    {t.video.watchOn}
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${locale}#contact`}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-brand-700 px-8 text-base font-bold text-white shadow-[0_8px_24px_rgba(14,116,144,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-800"
            >
              {t.video.cta}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className={isRtl ? "rotate-180" : ""}
              />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 px-8 text-base font-bold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
            >
              <Phone size={18} aria-hidden="true" />
              {t.contact.form.viaCall} ·{" "}
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
