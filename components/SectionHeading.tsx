import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-start";
  return (
    <Reveal>
      <div className={`flex flex-col gap-3 ${alignCls}`}>
        <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-[13px] font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100">
          {eyebrow}
        </span>
        <h2 className="max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-600">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

export function SectionShell({
  id,
  children,
  tinted = false,
}: {
  id?: string;
  children: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${tinted ? "bg-ink-50/60" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">{children}</div>
    </section>
  );
}
