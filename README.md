# vibecoding

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-r168-black?style=flat-square&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-white?style=flat-square)

**A motion-first Next.js template for building Awwwards-level websites.**

---

## What is this?

vibecoding is a production-ready starter for studios, agencies, and developers who want to ship sites that feel alive — not just functional. Every animation primitive, WebGL wrapper, and interaction hook is pre-wired so you can focus on design and content, not configuration.

The stack is opinionated: GSAP handles scroll-driven motion, Lenis delivers buttery smooth scrolling, React Three Fiber brings WebGL into the component model, and Framer Motion powers declarative UI transitions. Tailwind v4 and shadcn/ui cover everything else. Together, they cover 90% of what Awwwards nominees use.

Built to work directly with the `vibecoder` Claude Code skill, which orchestrates AI-assisted component generation on top of this template.

---

## Stack

| Library | Version | Purpose |
|---------|---------|---------|
| Next.js | 16 (App Router) | Framework, routing, SSR/SSG |
| React | 19 | UI runtime |
| TypeScript | strict | Type safety across the entire codebase |
| Tailwind CSS | v4 | Utility-first styling with CSS variable theming |
| tw-animate-css | latest | Tailwind animation utilities |
| shadcn/ui | latest | Accessible, unstyled component primitives |
| GSAP + ScrollTrigger | 3 | Scroll-driven animations, timelines |
| Lenis | latest | Hardware-accelerated smooth scroll |
| Three.js | r168 | WebGL rendering engine |
| @react-three/fiber | 8 | React renderer for Three.js |
| @react-three/drei | 9 | Helpers and abstractions for R3F |
| @react-three/postprocessing | 2 | Post-processing effects (bloom, DOF, etc.) |
| @splinetool/react-spline | latest | Embed interactive Spline 3D scenes |
| Framer Motion | 11 | Declarative UI animation |
| @react-spring/web | 9 | Physics-based spring animations |
| react-hook-form + zod | latest | Forms with schema validation |
| next-intl | latest | Internationalization (i18n) |
| PostHog | latest | Product analytics |
| Resend + @react-email | latest | Transactional email |
| sonner | latest | Toast notifications |
| cmdk | latest | Command palette |
| vaul | latest | Drawer component |
| embla-carousel-react | latest | Touch-friendly carousels |

---

## Included Components

All base components live in `src/components/`. They are ready to use with zero configuration.

### Motion Primitives — `src/components/motion/`

| Component | What it does |
|-----------|-------------|
| `FadeIn` | Fades children into view on scroll. Supports directional offset (up/down/left/right), delay, and custom duration. |
| `TextReveal` | Reveals text word-by-word with a clip-mask slide-up. Works on any heading or paragraph tag. |
| `Magnetic` | Applies a spring-physics magnetic pull toward the cursor on hover. Ideal for buttons and nav links. |
| `Parallax` | GSAP ScrollTrigger parallax layer. Positive speed = slower than scroll; negative = faster. |

### UI Components — `src/components/ui/`

| Component | What it does |
|-----------|-------------|
| `LoadingScreen` | Full-screen loader with a 0→100 counter animation and a mask-reveal transition. Fires an `onComplete` callback. |
| `CustomCursor` | Dot + ring cursor with `mix-blend-mode: difference`. Expands on hoverable elements. Desktop only. |

### Three.js Wrappers — `src/components/three/`

| Component | What it does |
|-----------|-------------|
| `CanvasWrapper` | Optimized R3F `<Canvas>` with sensible defaults (dpr, shadows, tone mapping). Drop WebGL scenes inside it. |
| `PostFX` | `EffectComposer` wrapper. Add bloom, depth of field, chromatic aberration, and other post-processing effects. |

### Hooks — `src/hooks/`

| Hook | What it does |
|------|-------------|
| `useGsapScroll` | Sets up a GSAP ScrollTrigger inside a React effect with automatic cleanup. |
| `useMousePosition` | Returns normalized `{ x, y }` mouse coordinates, updated on `pointermove`. |
| `useReducedMotion` | Returns `true` when `prefers-reduced-motion: reduce` is active. Use to disable animations for accessibility. |
| `useScrollProgress` | Returns a 0→1 scroll progress value for the page or a given element. |

---

## Quick Start

```bash
git clone https://github.com/yourusername/vibecoding.git my-project
cd my-project
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## How to Use

### Base components (always available)

Import any component directly from its path:

```tsx
import { FadeIn }        from "@/components/motion/fade-in";
import { TextReveal }    from "@/components/motion/text-reveal";
import { Magnetic }      from "@/components/motion/magnetic";
import { Parallax }      from "@/components/motion/parallax";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CustomCursor }  from "@/components/ui/custom-cursor";
import { CanvasWrapper } from "@/components/three/canvas-wrapper";
```

### vibecoder skill (Claude Code)

If you are using Claude Code with the `vibecoder` skill installed, you get AI-generated site sections on top of this template. The skill orchestrates design direction, component generation, motion design, UX review, and pre-deploy SEO — all in one command. See the `.claude/` folder for skill definitions.

### CSS variables

Override the brand variables in `src/app/globals.css` to match your client's brand:

```css
:root {
  --brand-bg:     #faf6f0;
  --brand-fg:     #1a1318;
  --brand-accent: #d4a5a5;
  --brand-muted:  #8a7a72;
}
```

---

## Project Structure

```
vibecoding/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, providers, fonts, metadata
│   │   ├── page.tsx            # Homepage — compose sections here
│   │   └── globals.css         # CSS variables, animations, base styles
│   ├── components/
│   │   ├── motion/             # FadeIn, Parallax, TextReveal, Magnetic
│   │   ├── three/              # CanvasWrapper, PostFX
│   │   └── ui/                 # LoadingScreen, CustomCursor, shadcn primitives
│   ├── hooks/                  # useGsapScroll, useMousePosition, useReducedMotion, useScrollProgress
│   ├── lib/
│   │   ├── gsap.ts             # GSAP + ScrollTrigger pre-registered
│   │   └── utils.ts            # cn() helper
│   └── providers/
│       └── lenis.tsx           # Lenis smooth scroll provider (wraps children)
├── public/
│   └── models/                 # Place .glb / .gltf files here
├── scripts/
│   ├── extract-frames.ps1      # Extract WebP frames from MP4 video
│   └── compress-glb.ps1        # Draco-compress a GLB via gltf-transform
├── .env.example
└── package.json
```

---

## Scripts

### Extract video frames as WebP

Useful for frame-by-frame playback effects driven by scroll position.

```powershell
powershell -ExecutionPolicy Bypass -File scripts/extract-frames.ps1 `
  -Input "video/intro.mp4" `
  -Output "public/frames" `
  -Fps 30
```

Requires FFmpeg in PATH.

### Compress a GLB model (Draco)

Run this before committing large 3D assets. Draco compression typically reduces file size by 60–80%.

```powershell
powershell -ExecutionPolicy Bypass -File scripts/compress-glb.ps1 `
  -Input "public/models/scene.glb"
```

Requires `@gltf-transform/cli` (installed automatically as a dev dependency).

---

## Powered by vibecoder

This template is the foundation for the **vibecoder** Claude Code skill — an AI-assisted workflow for generating Awwwards-caliber websites inside Claude Code. The skill handles design direction, component generation, motion choreography, UX review (via `ui-ux-pro-max`), 3D/shader work (via `motion-lab`), and pre-deploy SEO (via `seo-doctor`).

If you have Claude Code installed, run `/vibecoder` to start building on top of this template.

---

## License

MIT — do whatever you want with it.
