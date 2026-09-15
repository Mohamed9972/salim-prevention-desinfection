import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "ar" }];
}

export const viewport: Viewport = {
  themeColor: "#0b151a",
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
        fr: "/fr",
        ar: "/ar",
      },
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
      "Tunis",
      "Lac 1",
      "Lac 2",
      "Lac 3",
      "Le Kram",
      "La Marsa",
      "Carthage",
      "Ariana",
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
    <html lang={loc} dir={dir} className={`${inter.variable} ${arabic.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-ink-900 antialiased">
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
