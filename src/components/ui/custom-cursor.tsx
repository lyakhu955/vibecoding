"use client";
/**
 * Custom Cursor — punto + ring blend-difference.
 *
 * Disattivato automaticamente su touch device e `prefers-reduced-motion`.
 *
 * Per highlight su hover: aggiungi `data-cursor="hover"` o `data-cursor="text"`
 * agli elementi interattivi.
 *
 * Uso (in layout):
 *   <CustomCursor />
 */
import { useEffect, useRef, useState } from "react";

interface Props {
  dotSize?: number;
  ringSize?: number;
  color?: string;
}

export function CustomCursor({
  dotSize = 6,
  ringSize = 40,
  color = "#ffffff",
}: Props) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reduced) {
      setEnabled(false);
      return;
    }

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - dotSize / 2}px, ${e.clientY - dotSize / 2}px, 0)`;
      }
    };

    let raf = 0;
    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - ringSize / 2}px, ${ring.y - ringSize / 2}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const variant = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (ringRef.current) {
        if (variant === "hover") {
          ringRef.current.style.width = `${ringSize * 1.6}px`;
          ringRef.current.style.height = `${ringSize * 1.6}px`;
          ringRef.current.style.borderColor = color;
          ringRef.current.style.background = `${color}22`;
        } else if (variant === "text") {
          ringRef.current.style.width = "2px";
          ringRef.current.style.height = `${ringSize}px`;
          ringRef.current.style.background = color;
        } else {
          ringRef.current.style.width = `${ringSize}px`;
          ringRef.current.style.height = `${ringSize}px`;
          ringRef.current.style.borderColor = color;
          ringRef.current.style.background = "transparent";
        }
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [dotSize, ringSize, color]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full"
        style={{
          width: dotSize,
          height: dotSize,
          background: color,
          mixBlendMode: "difference",
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full border transition-all duration-200"
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: color,
          mixBlendMode: "difference",
        }}
        aria-hidden
      />
    </>
  );
}
