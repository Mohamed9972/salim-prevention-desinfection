import type { Metadata, Viewport } from "next";
import { Archivo, Bricolage_Grotesque, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const arabic = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "fr" }];
}

export const viewport: Viewport = {
  themeColor: "#071814",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  const path = `/${locale}`;
  return {
    title: t.meta.title,
    description: t.meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
      languages: {
        "x-default": "/ar",
        ar: "/ar",
        fr: "/fr",
      },
    },
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: path,
      siteName:
        locale === "ar"
          ? "شركة سليم للوقاية والتطهير"
          : "Salim — Prévention et Désinfection",
      locale: locale === "ar" ? "ar_TN" : "fr_FR",
      alternateLocale: locale === "ar" ? ["fr_FR"] : ["ar_TN"],
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 500,
          height: 363,
          alt:
            locale === "ar"
              ? "سليم للوقاية والتطهير"
              : "Salim Prévention et Désinfection",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "geo.region": "TN-11",
      "geo.placename": "Tunis",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc: Locale = locale;
  const t = getDictionary(loc);
  const dir = loc === "ar" ? "rtl" : "ltr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name:
      loc === "ar"
        ? "شركة سليم للوقاية و التطهير من جميع انواع الحشرات"
        : "Salim — Prévention et Désinfection",
    description: t.meta.description,
    telephone: "+21650431208",
    email: "slimkarouni40@gmail.com",
    url: `${SITE_URL}/${loc}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue Alfred Nobel, Lac 3, Bureau N°3, Immeuble Napoléon",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    areaServed: [
      "Bizerte",
      "Grand Tunis",
      "Nabeul",
      "Hammamet",
      "Sousse",
      "Monastir",
      "Mahdia",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <html
      lang={loc}
      dir={dir}
      className={`${display.variable} ${body.variable} ${arabic.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink-900 antialiased">
        <span
          aria-hidden="true"
          className="hidden"
          dangerouslySetInnerHTML={{
            __html: `<!-- RADE NOCTURNE direction contract (seed d29218b8): THESIS — protection as a lit harbor at night; the page reads night to dawn, pests own the dark, Salim owns the light, every surface offers call/WhatsApp/quote within one glance. OWN-WORLD — warm paper ground, deep sea-pine ink, one lantern-amber accent; Bricolage Grotesque display / Cairo Black Arabic voice; bento berths, ports-of-call ticker, totem phone numerals, one living WebGL harbor-light moment. STORY — a worried visitor understands in seconds, believes (real zones, steps, counts only), and acts (amber CTA always near). FIRST VIEWPORT — full-bleed night-graded photo plus WebGL shimmer plus horizon glow; start-aligned giant display title, amber primary action, call ghost, trust ticks, location line; no kicker above the heading. FORM — assigned direction 5 of the grounded list (safe harbor at dusk), raised by Deco thresholds, cue phases, totem numerals, living material. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. -->`,
          }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          {loc === "ar" ? "تخطَّ إلى المحتوى" : "Aller au contenu"}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header locale={loc} />
        <main id="contenu" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer locale={loc} />
        <MobileCta locale={loc} />
      </body>
    </html>
  );
}
