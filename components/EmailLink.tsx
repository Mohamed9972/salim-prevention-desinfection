"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { EMAIL } from "@/lib/site";

// Split at module scope so the SSR HTML never contains a harvestable
// "user@domain" string nor a mailto: link. The full address is assembled
// client-side only, after mount. (The parts remain in the JS bundle —
// this defeats naive HTML scrapers, not targeted extraction.)
const [USER, DOMAIN] = EMAIL.split("@");

function subscribeNoop() {
  return () => {};
}

/**
 * Wrapper lien email anti-scraping.
 * SSR/no-JS : <span> avec adresse obfusquée (jamais de mailto: dans le HTML).
 * Après mount : <a href="mailto:…"> cliquable avec la vraie adresse.
 * `children` = icône + libellé (rendus dans les deux états).
 */
export function EmailLink({
  className,
  addressClassName,
  children,
}: {
  className?: string;
  addressClassName?: string;
  children?: ReactNode;
}) {
  // Client-only reveal without setState-in-effect: the SSR snapshot stays
  // false (no harvestable address in the HTML), the client snapshot is
  // always true after hydration. Single mount flip, no render cascade.
  const live = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
  if (!live) {
    return (
      <span className={className}>
        {children}
        <span className={addressClassName} dir="ltr">
          {USER} [at] {DOMAIN}
        </span>
      </span>
    );
  }
  const addr = `${USER}@${DOMAIN}`;
  return (
    <a className={className} href={`mailto:${addr}`}>
      {children}
      <span className={addressClassName} dir="ltr">
        {addr}
      </span>
    </a>
  );
}
