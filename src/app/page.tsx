"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { FadeIn } from "@/components/motion/fade-in";
import { TextReveal } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Parallax } from "@/components/motion/parallax";

const STACK = [
  { name: "Next.js 16", desc: "App Router · RSC · Streaming" },
  { name: "React 19", desc: "Actions · Compiler · use()" },
  { name: "GSAP + ScrollTrigger", desc: "Scroll-driven animation" },
  { name: "Lenis", desc: "Hardware-accelerated smooth scroll" },
  { name: "Three.js + R3F", desc: "WebGL · drei · postprocessing" },
  { name: "Framer Motion", desc: "Declarative UI transitions" },
  { name: "react-spring", desc: "Physics-based spring animation" },
  { name: "Spline", desc: "Interactive 3D scenes" },
  { name: "Tailwind v4", desc: "CSS variable theming" },
  { name: "shadcn/ui", desc: "Accessible component primitives" },
  { name: "react-hook-form + zod", desc: "Schema-validated forms" },
  { name: "embla-carousel", desc: "Touch-friendly carousels" },
  { name: "Resend + react-email", desc: "Transactional email" },
  { name: "PostHog", desc: "Product analytics" },
  { name: "next-intl", desc: "Internationalization" },
  { name: "sonner · cmdk · vaul", desc: "Toasts, command palette, drawers" },
];

const COMPONENTS = [
  { name: "FadeIn", path: "motion/fade-in", desc: "Scroll-triggered fade with directional offset" },
  { name: "TextReveal", path: "motion/text-reveal", desc: "Word-by-word clip-mask reveal" },
  { name: "Magnetic", path: "motion/magnetic", desc: "Spring-physics cursor attraction" },
  { name: "Parallax", path: "motion/parallax", desc: "GSAP scroll-scrubbed parallax layer" },
  { name: "LoadingScreen", path: "ui/loading-screen", desc: "Counter 0→100 with mask reveal transition" },
  { name: "CustomCursor", path: "ui/custom-cursor", desc: "Dot + ring blend-difference cursor" },
  { name: "CanvasWrapper", path: "three/canvas-wrapper", desc: "Optimized R3F Canvas with sensible defaults" },
  { name: "PostFX", path: "three/post-fx", desc: "EffectComposer for bloom, DOF, chromatic aberration" },
];

const HOOKS = [
  { name: "useGsapScroll", desc: "ScrollTrigger setup with auto cleanup" },
  { name: "useMousePosition", desc: "Normalized pointer coordinates" },
  { name: "useReducedMotion", desc: "Accessibility motion preference" },
  { name: "useScrollProgress", desc: "0→1 scroll progress for any element" },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <CustomCursor />

      <main
        className="body-bg min-h-screen"
        style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
      >
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          className="relative flex flex-col justify-center min-h-screen px-6 md:px-16 overflow-hidden"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <Parallax speed={-0.15} className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl"
              style={{ background: "var(--foreground)" }}
            />
          </Parallax>

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <FadeIn direction="none" duration={0.4}>
              <span
                className="text-xs tracking-[0.2em] uppercase mb-8 block"
                style={{ color: "var(--muted-foreground)" }}
              >
                Next.js 16 · React 19 · Motion-First Template
              </span>
            </FadeIn>

            <TextReveal
              text="vibecoding"
              as="h1"
              className="text-[clamp(4rem,14vw,13rem)] font-bold leading-none tracking-[-0.04em] mb-8"
              stagger={0.06}
            />

            <FadeIn delay={0.5} direction="up">
              <p
                className="text-lg md:text-2xl max-w-xl leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                A production-ready starter for Awwwards-level websites.
                Every animation primitive, WebGL wrapper, and interaction hook —
                pre-wired and ready.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} direction="up" className="mt-12 flex gap-4 flex-wrap">
              <Magnetic strength={0.2}>
                <a
                  href="https://github.com/yourusername/vibecoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-opacity hover:opacity-80 focus-visible:outline-offset-4"
                  style={{
                    background: "var(--foreground)",
                    color: "var(--background)",
                  }}
                >
                  View on GitHub
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="#components"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-opacity hover:opacity-70 focus-visible:outline-offset-4"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  Explore components
                </a>
              </Magnetic>
            </FadeIn>
          </div>

          <FadeIn delay={1.2} direction="none" className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              scroll
            </span>
          </FadeIn>
        </section>

        {/* ── Stack ─────────────────────────────────────────────────── */}
        <section className="px-6 md:px-16 py-24 md:py-36 max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2
              className="text-xs tracking-[0.2em] uppercase mb-16"
              style={{ color: "var(--muted-foreground)" }}
            >
              Everything pre-installed
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px"
            style={{ background: "var(--border)" }}
          >
            {STACK.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.04} direction="up">
                <div
                  className="p-6 flex flex-col gap-1"
                  style={{ background: "var(--background)" }}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  <span
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {item.desc}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Components ────────────────────────────────────────────── */}
        <section
          id="components"
          className="px-6 md:px-16 py-24 md:py-36"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn direction="up">
              <h2
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                Pre-built components
              </h2>
              <TextReveal
                text="Motion primitives. Ready to compose."
                as="h3"
                className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-16 leading-tight"
              />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMPONENTS.map((c, i) => (
                <FadeIn key={c.name} delay={i * 0.06} direction="up">
                  <Magnetic strength={0.08}>
                    <div
                      className="group flex items-start gap-6 p-6 rounded-2xl cursor-default transition-colors"
                      style={{
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="font-mono text-sm font-semibold">{c.name}</span>
                          <span
                            className="font-mono text-xs truncate"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {c.path}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </Magnetic>
                </FadeIn>
              ))}
            </div>

            {/* Hooks sub-section */}
            <FadeIn direction="up" className="mt-20">
              <h3
                className="text-xs tracking-[0.2em] uppercase mb-8"
                style={{ color: "var(--muted-foreground)" }}
              >
                Hooks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HOOKS.map((h, i) => (
                  <FadeIn key={h.name} delay={i * 0.05} direction="up">
                    <div
                      className="flex items-center gap-4 px-5 py-4 rounded-xl"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      <code
                        className="text-xs font-mono shrink-0"
                        style={{ color: "var(--foreground)" }}
                      >
                        {h.name}
                      </code>
                      <span
                        className="text-xs"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {h.desc}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section
          className="px-6 md:px-16 py-32 md:py-48 text-center"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-3xl mx-auto">
            <Parallax speed={-0.05}>
              <TextReveal
                text="Start building today."
                as="h2"
                className="text-4xl md:text-7xl font-bold tracking-[-0.04em] mb-8 leading-tight"
                stagger={0.05}
              />
            </Parallax>

            <FadeIn delay={0.3} direction="up">
              <p
                className="text-lg mb-12 leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Clone the repo, replace the content, ship something worth submitting to Awwwards.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              <Magnetic strength={0.15}>
                <a
                  href="https://github.com/yourusername/vibecoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-medium transition-opacity hover:opacity-80 focus-visible:outline-offset-4"
                  style={{
                    background: "var(--foreground)",
                    color: "var(--background)",
                  }}
                >
                  Clone on GitHub
                  <span aria-hidden="true">→</span>
                </a>
              </Magnetic>
            </FadeIn>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────── */}
        <footer
          className="px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--muted-foreground)",
          }}
        >
          <span>vibecoding — MIT License</span>
          <span>Next.js 16 · React 19 · GSAP · Three.js · Tailwind v4</span>
        </footer>
      </main>
    </>
  );
}
