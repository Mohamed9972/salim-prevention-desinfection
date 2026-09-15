import type { Locale } from "@/lib/i18n";

/**
 * Logo inspired by the company emblem (teal swoosh + SALIM wordmark).
 * Inline SVG so it can be replaced later by /public/logo.png if needed.
 */
export function Logo({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const sub =
    locale === "ar" ? "الوقاية والتطهير" : "Prévention et Désinfection";
  return (
    <span className="flex items-center gap-2.5" aria-label="Salim Prévention et Désinfection">
      <svg
        width={compact ? 38 : 44}
        height={compact ? 38 : 44}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M6 10c8-5 20-4.5 27 2-6.5-4-15.5-4.2-22-.5C8 13.4 6.5 17 6.5 21c0 8 6 15.5 15 18.5C13 37 4.5 29.5 4.5 20.5 4.5 16 5 12.5 6 10Z"
          fill="#0e7490"
        />
        <path
          d="M11 15.5c6-3.8 15-3.4 20.5 1.2-5-3-11.8-3.1-16.7-.3-2.3 1.3-3.4 3.4-3.4 6 0 6 4.5 11.7 11.3 14-6.4-1.7-12.3-7.3-12.3-14.2 0-2.5.2-4.8.6-6.7Z"
          fill="#134f61"
        />
        <path
          d="M14 33.5c5 3.5 12 3.3 17.5-.5 3-2 5-4.8 5.8-8-.3 4.5-2.5 8.3-6.3 10.7-5.6 3.6-12.5 3-17-2.2Z"
          fill="#45a5bc"
        />
        <g fill="#132027">
          <path d="M24.5 22.5l3.2 3.4h-6.4l3.2-3.4Z" />
          <rect x="22.4" y="26.2" width="1.2" height="1.6" />
          <rect x="26.4" y="26.2" width="1.2" height="1.6" />
        </g>
        <circle cx="35.5" cy="17" r="1.6" fill="#132027" />
        <path
          d="M35.5 19.2c-1 2.5-2.6 4.6-4.8 6l.7 1c2.4-1.5 4.1-3.8 5.2-6.5l-1.1-.5Z"
          fill="#132027"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[22px] font-extrabold tracking-[0.08em] text-ink-900">
          SALIM
        </span>
        <span className="mt-1 text-[11px] font-semibold tracking-wide text-brand-600">
          {sub}
        </span>
      </span>
    </span>
  );
}
