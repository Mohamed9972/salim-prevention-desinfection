import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Rade Nocturne section heading: no kicker above the heading — it carries
 * its own weight, led by an inline beacon bar. More space above than below.
 */
export function SectionHeading({
  title,
  subtitle,
  align = "start",
  dark = false,
}: {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-start";
  const titleCls = dark ? "text-white" : "text-ink-950";
  const subCls = dark ? "text-white/70" : "text-ink-600";
  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${alignCls}`}>
        <h2
          className={`max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.015em] sm:text-[2.75rem] ${titleCls}`}
        >
          <span
            aria-hidden="true"
            className={`mb-4 block h-2 w-12 rounded-full bg-brand-400 ${align === "center" ? "mx-auto" : ""}`}
          />
          {title}
        </h2>
        {subtitle ? (
          <p className={`max-w-2xl text-pretty text-lg leading-relaxed ${subCls}`}>{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

export function SectionShell({
  id,
  children,
  tinted = false,
  night = false,
}: {
  id?: string;
  children: ReactNode;
  tinted?: boolean;
  night?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${night ? "grain bg-ink-950 text-white" : tinted ? "bg-paper-deep" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">{children}</div>
    </section>
  );
}
