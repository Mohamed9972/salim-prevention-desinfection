import type { Locale } from "@/lib/i18n";

/**
 * Logo officiel Salim Prévention et Désinfection (/public/logo.png).
 * <img> statique volontairement (pas de next/image) : le fichier est
 * servi directement depuis le CDN sans passer par le Worker ni par
 * Cloudflare Images. Zéro CPU, zéro transformation.
 * Sur fond sombre (footer), médaillon blanc pour le contraste.
 */
export function Logo({
  locale,
  compact = false,
  tone = "dark",
}: {
  locale: Locale;
  compact?: boolean;
  tone?: "dark" | "light";
}) {
  const alt =
    locale === "ar" ? "سليم للوقاية والتطهير" : "Salim Prévention et Désinfection";
  // Ratio réel du fichier : 500 x 363
  const height = compact ? 48 : 64;
  const width = Math.round((height * 500) / 363);
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt={alt}
      width={width}
      height={height}
      loading={compact ? "eager" : "lazy"}
      fetchPriority={compact ? "high" : "auto"}
      decoding="async"
      className={compact ? "h-11 w-auto md:h-12" : "h-14 w-auto md:h-16"}
    />
  );
  if (tone === "light") {
    return (
      <span
        className="inline-flex items-center rounded-2xl bg-white px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        aria-label={alt}
      >
        {img}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center" aria-label={alt}>
      {img}
    </span>
  );
}
