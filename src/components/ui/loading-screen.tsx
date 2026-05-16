"use client";
/**
 * Universal Loading Screen — counter 0→100 con mask reveal.
 *
 * Uso (in layout o page):
 *   const [loaded, setLoaded] = useState(false);
 *   {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
 */
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  onComplete?: () => void;
  duration?: number;             // total ms counter run
  brandName?: string;
  brandTagline?: string;
  background?: string;            // CSS color
  foreground?: string;
  accent?: string;
}

export function LoadingScreen({
  onComplete,
  duration = 2200,
  brandName = "Brand",
  brandTagline = "Loading the experience",
  background = "var(--background, #faf6f0)",
  foreground = "var(--foreground, #1a1318)",
  accent = "var(--accent, #d4a5a5)",
}: Props) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obj = { value: 0 };
    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => {
        gsap.to(containerRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.9,
          ease: "power3.inOut",
          onComplete,
        });
      },
    });
    tl.to(obj, {
      value: 100,
      duration: duration / 1000,
      ease: "power1.inOut",
      onUpdate: () => setCount(Math.round(obj.value)),
    });
    return () => { tl.kill(); };
  }, [duration, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-8"
      style={{
        background,
        clipPath: "inset(0 0 0% 0)",
        paddingTop: "calc(2rem + env(safe-area-inset-top))",
        paddingBottom: "calc(2rem + env(safe-area-inset-bottom))",
      }}
    >
      <div className="flex items-center justify-between text-xs tracking-[0.3em] uppercase" style={{ color: foreground, opacity: 0.5 }}>
        <span>{brandTagline}</span>
        <span>{new Date().getFullYear()}</span>
      </div>

      <div className="flex items-end justify-between">
        <h1 className="font-display text-6xl sm:text-7xl tracking-tighter leading-none" style={{ color: foreground }}>
          {brandName}
        </h1>
        <span className="font-display text-7xl sm:text-8xl tracking-tighter tabular-nums leading-none" style={{ color: accent }}>
          {String(count).padStart(3, "0")}
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{
          background: accent,
          width: `${count}%`,
          transition: "width 16ms linear",
        }}
      />
    </div>
  );
}
