"use client";
import { useEffect, useState, useRef } from "react";

interface MousePosition {
  x: number;          // raw clientX
  y: number;          // raw clientY
  normalizedX: number; // -1 to 1 (centered)
  normalizedY: number; // -1 to 1 (centered)
  progressX: number;  // 0 to 1
  progressY: number;  // 0 to 1
}

const DEFAULT: MousePosition = {
  x: 0,
  y: 0,
  normalizedX: 0,
  normalizedY: 0,
  progressX: 0.5,
  progressY: 0.5,
};

/**
 * Track mouse position with normalized values useful for parallax / 3D scenes.
 * Returns 0,0 on touch devices (no continuous pointer).
 *
 * @param throttleMs — minimum ms between updates (default 16 = 60fps)
 */
export function useMousePosition(throttleMs = 16): MousePosition {
  const [position, setPosition] = useState<MousePosition>(DEFAULT);
  const lastUpdate = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handle = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastUpdate.current < throttleMs) return;
      lastUpdate.current = now;

      const { innerWidth: w, innerHeight: h } = window;
      const px = e.clientX / w;
      const py = e.clientY / h;
      setPosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (px - 0.5) * 2,
        normalizedY: (py - 0.5) * 2,
        progressX: px,
        progressY: py,
      });
    };

    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, [throttleMs]);

  return position;
}
