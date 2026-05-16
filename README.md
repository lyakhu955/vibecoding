<div align="center">
  <br />
  <img src="https://raw.githubusercontent.com/lyakhu955/vibecoding/master/.github/banner.svg" alt="vibecoding banner" width="100%">
  <br /><br />

  <h1>🎨 vibecoding</h1>
  <p>
    <b>A motion-first Next.js template for building Awwwards-level websites.</b><br/>
    Pre-wired animations, WebGL, smooth scroll & production-ready UI primitives.
  </p>

  <!-- Badges Row 1 -->
  <a href="https://github.com/lyakhu955/vibecoding/stargazers">
    <img src="https://img.shields.io/github/stars/lyakhu955/vibecoding?style=for-the-badge&logo=github&color=facc15" alt="Stars">
  </a>
  <a href="https://github.com/lyakhu955/vibecoding/network/members">
    <img src="https://img.shields.io/github/forks/lyakhu955/vibecoding?style=for-the-badge&logo=github&color=3b82f6" alt="Forks">
  </a>
  <a href="https://github.com/lyakhu955/vibecoding/issues">
    <img src="https://img.shields.io/github/issues/lyakhu955/vibecoding?style=for-the-badge&logo=github&color=ef4444" alt="Issues">
  </a>
  <a href="https://github.com/lyakhu955/vibecoding/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/lyakhu955/vibecoding?style=for-the-badge&logo=opensourceinitiative&color=10b981" alt="License">
  </a>
  <br/>
  <!-- Badges Row 2 -->
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP">
  <img src="https://img.shields.io/badge/Three.js-r184-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js">
  <br/>
  <!-- Badges Row 3 -->
  <img src="https://img.shields.io/github/last-commit/lyakhu955/vibecoding?style=for-the-badge&logo=git&color=a855f7" alt="Last Commit">
  <img src="https://img.shields.io/github/repo-size/lyakhu955/vibecoding?style=for-the-badge&logo=dropbox&color=64748b" alt="Repo Size">
  <img src="https://img.shields.io/badge/PRs-welcome-10b981?style=for-the-badge&logo=githubactions&logoColor=white" alt="PRs Welcome">

  <br/><br/>

  <a href="https://github.com/lyakhu955/vibecoding/generate">
    <img src="https://img.shields.io/badge/⚡_Use_this_template-6d28d9?style=for-the-badge&logo=github&logoColor=white" height="32" alt="Use this template">
  </a>
  &nbsp;
  <a href="https://github.com/lyakhu955/vibecoding/fork">
    <img src="https://img.shields.io/badge/🔀_Fork-1e293b?style=for-the-badge&logo=github&logoColor=white" height="32" alt="Fork">
  </a>
  &nbsp;
  <a href="https://github.com/lyakhu955/vibecoding/stargazers">
    <img src="https://img.shields.io/badge/⭐_Star-facc15?style=for-the-badge&logo=github&logoColor=black" height="32" alt="Star">
  </a>

  <br/><br/>
</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 📑 Table of Contents

- [What is this?](#-what-is-this)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Customization](#-customization)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 🌟 What is this?

**vibecoding** is a production-ready starter for studios, agencies, and developers who want to ship sites that feel **alive** — not just functional.

Every animation primitive, WebGL wrapper, and interaction hook is pre-wired so you can focus on **design and content**, not configuration. Built to work directly with the `vibecoder` Claude Code skill, which orchestrates AI-assisted component generation on top of this template.

> **Zero config.** Clone, install, and start building award-winning experiences in minutes.

## ✨ Features

| 🎬 Motion Primitives | 🖱️ Interactions | 🌐 WebGL & 3D | 🧩 UI & Forms |
|---|---|---|---|
| **FadeIn** — scroll-triggered fade with directional offset | **Magnetic** — spring-physics cursor pull on hover | **CanvasWrapper** — optimized R3F `<Canvas>` | **LoadingScreen** — 0→100 counter + mask reveal |
| **TextReveal** — word-by-word clip-mask slide-up | **CustomCursor** — dot + ring with mix-blend-mode | **PostFX** — EffectComposer (bloom, DOF, chromatic aberration) | **shadcn/ui** primitives — accessible, unstyled |
| **Parallax** — GSAP ScrollTrigger speed layers | **useMousePosition** — normalized pointer tracking | **@splinetool/react-spline** — embed Spline 3D scenes | **react-hook-form + zod** — schema-validated forms |
| **useGsapScroll** — auto-cleanup ScrollTrigger hook | **useReducedMotion** — respects `prefers-reduced-motion` | **Draco GLB compression script** — 60–80% smaller models | **sonner** — toast notifications |
| **useScrollProgress** — 0→1 page/element progress | **Lenis** — buttery smooth scroll provider | — | **cmdk + vaul** — command palette & drawers |
| **Framer Motion** — declarative UI transitions | **@react-spring/web** — physics-based springs | — | **embla-carousel-react** — touch carousels |

<details>
  <summary>🚀 Click to expand full feature list</summary>

- **Next.js 16** App Router with Server Components by default
- **React 19** with strict TypeScript — zero `any` tolerance
- **Tailwind CSS v4** + `tw-animate-css` + CSS variable theming
- **GSAP + ScrollTrigger + ScrollToPlugin** pre-registered
- **Three.js + R3F + Drei + PostProcessing** for WebGL scenes
- **next-intl** ready for i18n
- **PostHog** ready for analytics
- **Resend + @react-email** ready for transactional email
- **FFmpeg** PowerShell script for video frame extraction
- **@gltf-transform/cli** PowerShell script for GLB compression
- Mobile-first with safe-area support and ≥44px touch targets

</details>

## 🛠 Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | Next.js | 16 (App Router) | SSR, SSG, routing, API routes |
| **Runtime** | React | 19 | UI library |
| **Language** | TypeScript | 5.x Strict | Type safety |
| **Styling** | Tailwind CSS | v4 | Utility-first CSS |
| **Animations** | GSAP + ScrollTrigger | 3.x | Scroll-driven timelines |
| **Smooth Scroll** | Lenis | latest | Hardware-accelerated scroll |
| **3D / WebGL** | Three.js + R3F + Drei | r184 | WebGL rendering in React |
| **Post FX** | @react-three/postprocessing | 3.x | Bloom, DOF, chromatic aberration |
| **UI Motion** | Framer Motion | 12.x | Declarative animations |
| **Springs** | @react-spring/web | 10.x | Physics-based animations |
| **Components** | shadcn/ui + Radix | latest | Accessible primitives |
| **Forms** | react-hook-form + zod | latest | Schema validation |
| **i18n** | next-intl | latest | Internationalization |
| **Analytics** | PostHog | latest | Product analytics |
| **Email** | Resend + @react-email | latest | Transactional email |
| **Utils** | cmdk, vaul, sonner, embla | latest | Palette, drawers, toasts, carousels |

## 🚀 Quick Start

### 1. Create from template (recommended)

Click **[Use this template](https://github.com/lyakhu955/vibecoding/generate)** to create a new repository from this template.

### 2. Clone & install

<table>
<tr>
<th>npm</th>
<th>pnpm</th>
<th>yarn</th>
<th>bun</th>
</tr>
<tr>
<td>

```bash
git clone https://github.com/lyakhu955/vibecoding.git my-project
cd my-project
npm install
cp .env.example .env.local
npm run dev
```

</td>
<td>

```bash
git clone https://github.com/lyakhu955/vibecoding.git my-project
cd my-project
pnpm install
cp .env.example .env.local
pnpm dev
```

</td>
<td>

```bash
git clone https://github.com/lyakhu955/vibecoding.git my-project
cd my-project
yarn install
cp .env.example .env.local
yarn dev
```

</td>
<td>

```bash
git clone https://github.com/lyakhu955/vibecoding.git my-project
cd my-project
bun install
cp .env.example .env.local
bun run dev
```

</td>
</tr>
</table>

Open [http://localhost:3000](http://localhost:3000) and start building. 🎉

## 📁 Project Structure

```
vibecoding/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── layout.tsx            # Root layout, providers, fonts, metadata
│   │   ├── page.tsx              # Homepage — compose sections here
│   │   └── globals.css           # CSS variables, animations, base styles
│   ├── 📂 components/
│   │   ├── 📂 motion/            # FadeIn, Parallax, TextReveal, Magnetic
│   │   ├── 📂 three/             # CanvasWrapper, PostFX
│   │   ├── 📂 ui/                # LoadingScreen, CustomCursor, shadcn
│   │   └── 📂 sections/          # Your page sections go here
│   ├── 📂 hooks/                  # useGsapScroll, useMousePosition, useReducedMotion, useScrollProgress
│   ├── 📂 lib/
│   │   ├── gsap.ts               # GSAP + ScrollTrigger pre-registered
│   │   └── utils.ts              # cn() helper
│   └── 📂 providers/
│       └── lenis.tsx             # Lenis smooth scroll provider
├── 📂 public/
│   └── 📂 models/                # Place .glb / .gltf files here
├── 📂 scripts/
│   ├── extract-frames.ps1        # Extract WebP frames from MP4 (requires FFmpeg)
│   └── compress-glb.ps1          # Draco-compress GLB via gltf-transform
├── 📂 .github/                    # Issue templates, PR template, CI workflow
├── .env.example                  # Environment variable template
├── next.config.ts                # Next.js configuration
├── components.json               # shadcn/ui configuration
└── package.json
```

## 🧰 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run extract-frames` | Extract WebP frames from MP4 video (PowerShell + FFmpeg) |
| `npm run compress-glb` | Draco-compress a GLB model (PowerShell) |

## 🎨 Customization

### Brand Colors

Override the CSS variables in `src/app/globals.css` to match your brand:

```css
:root {
  --brand-bg:     #faf6f0;
  --brand-fg:     #1a1318;
  --brand-accent: #d4a5a5;
  --brand-muted:  #8a7a72;
}
```

### Using the vibecoder skill (Claude Code)

If you are using Claude Code with the `vibecoder` skill installed, run `/vibecoder` to generate entire site sections on top of this template. The skill orchestrates:

- 🎨 Design direction (`frontend-design`)
- 🎬 Motion & WebGL (`motion-lab`)
- 🔍 UX review (`ui-ux-pro-max`)
- 🛒 Payments (`commerce-kit`)
- 📝 CMS (`cms-bridge`)
- 🌍 SEO & ship (`seo-doctor`)

## 🗺️ Roadmap

- [ ] Add Storybook for component documentation
- [ ] Add Cypress / Playwright E2E test examples
- [ ] Add Docker support for consistent dev environments
- [ ] Add more animation presets (page transitions, stagger grids)
- [ ] Add Spline scene loading optimization examples
- [ ] Add Dark mode toggle system
- [ ] Add more shadcn/ui blocks (dashboard, marketing, ecommerce)

See [open issues](../../issues) for proposed features and known bugs.

## 🤝 Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) first.

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a [Pull Request](../../pulls)

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<div align="center">
  <br/>
  <p>
    <b>⭐ If you like this template, give it a star!</b><br/>
    It helps others discover it and keeps the project growing.
  </p>
  <a href="https://github.com/lyakhu955/vibecoding/stargazers">
    <img src="https://img.shields.io/github/stars/lyakhu955/vibecoding?style=social&logo=github" alt="GitHub Stars">
  </a>
  <br/><br/>
  <sub>Built with ❤️ by <a href="https://github.com/lyakhu955">@lyakhu955</a></sub>
  <br/><br/>
</div>
