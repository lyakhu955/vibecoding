"use client";
import { useEffect, useState } from "react";

/**
 * Returns true if the user prefers reduced motion or is on a touch device with
 * limited compute. Use to disable heavy animations.
 *
 * Defaults to false on SSR (no media query available).
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handle = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  return reduced;
}

/**
 * Returns true on touch devices (pointer: coarse).
 */
export function useIsTouch(): boolean {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return touch;
}
