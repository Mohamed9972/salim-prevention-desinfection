"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

export type FaqItem = { q: string; a: string };

export function FaqList({
  items,
  idPrefix = "faq",
}: {
  items: FaqItem[];
  idPrefix?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={Math.min(i * 40, 200)}>
            <div
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                isOpen
                  ? "border-brand-400 shadow-[0_12px_34px_rgba(41,156,185,0.14)]"
                  : "border-ink-900/10 hover:border-brand-300"
              }`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`${idPrefix}-panel-${i}`}
                  id={`${idPrefix}-button-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-[16px] font-bold text-ink-900 sm:px-6 sm:py-5"
                >
                  {item.q}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-brand-400 text-ink-950"
                        : "bg-ink-50 text-ink-600"
                    }`}
                  >
                    <ChevronDown size={17} aria-hidden="true" />
                  </span>
                </button>
              </h3>
              <div
                id={`${idPrefix}-panel-${i}`}
                role="region"
                aria-labelledby={`${idPrefix}-button-${i}`}
                hidden={!isOpen}
                className="px-5 pb-5 text-[15px] leading-relaxed text-ink-600 sm:px-6"
              >
                {item.a}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
