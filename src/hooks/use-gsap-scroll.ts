"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type UseGsapScrollOptions = {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
};

export function useGsapScroll<T extends HTMLElement>(
  options: UseGsapScrollOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        options.from ?? { opacity: 0, y: 60 },
        {
          ...(options.to ?? { opacity: 1, y: 0 }),
          scrollTrigger: {
            trigger: options.trigger ?? ref.current,
            start: options.start ?? "top 85%",
            end: options.end ?? "top 20%",
            scrub: options.scrub ?? false,
            markers: options.markers ?? false,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
