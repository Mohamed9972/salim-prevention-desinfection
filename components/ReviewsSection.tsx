import { ExternalLink } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Real client reviews, embedded directly from Facebook.
 * No invented names, quotes or ratings: the iframe shows the authentic post.
 * To add more reviews, append entries to REVIEW_POSTS.
 */
const REVIEW_POSTS = [
  {
    watch:
      "https://www.facebook.com/permalink.php?story_fbid=pfbid0H12kP3TzpyUFVpcNjaNoqn1YSEMjnVCfaxfH3PDDd5qr9v1zvSHyQSqZbTsF3oJWl&id=100084209553212",
    embed:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0H12kP3TzpyUFVpcNjaNoqn1YSEMjnVCfaxfH3PDDd5qr9v1zvSHyQSqZbTsF3oJWl%26id%3D100084209553212&show_text=true&width=500",
    height: 671,
  },
];

export function ReviewsSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section aria-label={t.reviews.title} className="bg-ink-50/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.title}
          subtitle={t.reviews.subtitle}
          align="center"
        />
        <div className="mt-10 grid justify-items-center gap-8 lg:grid-cols-1">
          {REVIEW_POSTS.map((post, i) => (
            <Reveal key={post.watch} delay={Math.min(i * 120, 240)}>
              <figure className="flex flex-col items-center">
                <div className="overflow-hidden rounded-[24px] border border-ink-100 bg-white shadow-[0_16px_44px_rgba(11,21,26,0.10)]">
                  <p className="border-b border-ink-100 px-5 py-3 text-[13px] font-semibold text-ink-600">
                    Facebook
                  </p>
                  <iframe
                    src={post.embed}
                    width={500}
                    height={post.height}
                    className="block w-[500px] max-w-[calc(100vw-80px)] border-0 bg-white"
                    style={{ border: "none", overflow: "hidden", height: post.height }}
                    title={`${t.reviews.frameLabel} ${i + 1}`}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-3">
                  <a
                    href={post.watch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    {t.reviews.watchOn}
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
