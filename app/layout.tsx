import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  // Actual <html> element is rendered in app/[locale]/layout.tsx
  // so that lang + dir are correct per locale (fr LTR / ar RTL).
  return children;
}
