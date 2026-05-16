# Vibecoding Project — istruzioni per Claude

## Questo progetto USA la skill `vibecoder`

Per qualsiasi richiesta di costruzione/modifica di sezioni del sito, componenti UI, animazioni, hero, footer, navigazione, carosello, gallery, brand story, ecommerce, portfolio, agenzia, SaaS, ristorante, NGO, ecc. — **INVOCA SEMPRE la skill `vibecoder`**.

Lo stack è già configurato — non re-installare le librerie principali:
- Next.js 16 + React 19 (App Router)
- Tailwind CSS v4 + tw-animate-css + shadcn
- GSAP + ScrollTrigger + ScrollToPlugin (registrati in `src/lib/gsap.ts`)
- Lenis smooth scroll (provider attivo in `src/providers/lenis.tsx`)
- Three.js + @react-three/fiber + @react-three/drei
- @react-three/postprocessing (post-fx)
- @splinetool/react-spline
- Framer Motion + @react-spring/web
- react-hook-form + zod + @hookform/resolvers
- next-intl, posthog-js, @react-email/components + resend, sonner, cmdk, vaul, embla-carousel-react

## Skill complementari da invocare quando serve

`vibecoder` orchestrerà automaticamente queste skill. Non duplicare il loro lavoro.

| Skill | Quando |
|-------|--------|
| `motion-lab` | Shader GLSL custom, post-processing avanzato, Theatre.js, Hydra visuals, Lottie |
| `ui-ux-pro-max` | Validare palette/typography/UX patterns (Step 3 di vibecoder), pre-delivery UX review (Step 7) |
| `frontend-design` | Direzione estetica bold non-generica |
| `commerce-kit` | Pagamenti Stripe/Medusa/Snipcart, cart, checkout (ecom, LMS, event, NGO donation) |
| `cms-bridge` | CMS contenuti (MDX/Sanity/Payload) per blog, news, agency portfolio |
| `web-foundations` | Auth, form complessi, i18n, email Resend, analytics PostHog |
| `seo-doctor` | SEMPRE pre-deploy. Sitemap, JSON-LD, OG image, meta, Core Web Vitals |

## MCP servers usabili

| MCP | Per |
|-----|-----|
| `mcp__magic__21st_magic_component_builder` | Generare UI standard rapidamente (nav, modal, form, table, card, pricing) |
| `mcp__magic__logo_search` | Loghi clienti/partner/payment providers |
| `mcp__plugin_context-mode__ctx_batch_execute` | Esplorare progetto in parallelo senza floodare context |
| `mcp__plugin_claude-mem__memory_search` | Recuperare decisioni di sessioni precedenti su questo progetto |

## Convenzioni codice

- Componenti `"use client"` solo quando usano hooks/browser API
- Server components per default (App Router Next.js 16)
- Tipi: TypeScript strict, no `any`
- React 19: `useRef<T>()` richiede argomento → usa `useRef<T | undefined>(undefined)` per ref mutabili
- Mobile-first: testa sotto 768px, safe areas con `env(safe-area-inset-*)`, touch target ≥44px
- Accessibility: rispetta `prefers-reduced-motion` SEMPRE
- No `style={{ background }}` su `<body>` server (hydration mismatch) — usa CSS class
- Performance: solo `transform` + `opacity` per animazioni
- GLB > 5MB → `npx @gltf-transform/cli optimize public/models/X.glb public/models/X.glb --compress draco`

## File chiave da conoscere

- `src/app/layout.tsx` — root layout, providers, fonts, metadata
- `src/app/page.tsx` — homepage, dove comporre le sezioni
- `src/app/globals.css` — CSS vars palette + safe areas helpers
- `src/providers/lenis.tsx` — smooth scroll attivo
- `src/lib/gsap.ts` — ScrollTrigger pre-registrato
- `src/lib/utils.ts` — `cn()` helper
- `src/components/motion/` — FadeIn, Magnetic, Parallax, TextReveal
- `src/components/three/canvas-wrapper.tsx` — `<Canvas>` R3F wrapper
- `src/components/three/post-fx.tsx` — EffectComposer R3F
- `src/components/ui/loading-screen.tsx` — loading default
- `src/components/ui/custom-cursor.tsx` — cursor default (desktop only)
- `src/hooks/use-gsap-scroll.ts` — hook per ScrollTrigger
- `src/hooks/use-mouse-position.ts` — hook per pointer tracking
- `src/hooks/use-reduced-motion.ts` — hook per accessibility check
- `scripts/extract-frames.ps1` — estrae frame WebP da video MP4 con FFmpeg
- `scripts/compress-glb.ps1` — comprime GLB con draco via gltf-transform

## Scripts utili

```powershell
# Estrai frame WebP da un video
powershell -ExecutionPolicy Bypass -File scripts/extract-frames.ps1 -Input "video/intro.mp4" -Output "public/frames" -Fps 30

# Comprimi un GLB
powershell -ExecutionPolicy Bypass -File scripts/compress-glb.ps1 -Input "public/models/X.glb"
```

## Quick start per Claude

Quando l'utente apre il progetto e fa una richiesta di costruzione sito:
1. Invoca `vibecoder` (sempre)
2. Vibecoder eseguirà Step 0-8 e invocherà skill complementari + MCP al momento giusto
3. Riusa SEMPRE i componenti già presenti — non duplicare

# Note Next.js 16

This version has breaking changes — APIs, conventions, and file structure may all differ from training data. Read `node_modules/next/dist/docs/` for specific APIs before writing code.
