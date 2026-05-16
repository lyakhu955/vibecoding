"use client";

import { LenisProvider } from "./lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  );
}
