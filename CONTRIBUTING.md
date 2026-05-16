# 🤝 Contributing to vibecoding

Thank you for your interest in contributing! This is a community-driven template and every improvement helps thousands of developers ship faster.

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/vibecoding.git
   cd vibecoding
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a branch:**
   ```bash
   git checkout -b feat/your-feature-name
   ```

## 📋 Guidelines

### Code Style
- Follow the existing TypeScript strict configuration — **no `any`**.
- Use `"use client"` only when strictly necessary (hooks, browser APIs).
- Prefer Server Components by default.
- Use `cn()` from `src/lib/utils.ts` for conditional class merging.
- Follow the existing file and folder naming conventions (`kebab-case` for files).

### Commits
We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new animation hook
fix: resolve hydration mismatch in loading screen
docs: update README with new example
refactor: simplify parallax component
```

### Before Submitting
- [ ] Run `npm run lint` — no errors.
- [ ] Run `npm run build` — builds successfully.
- [ ] Test your changes on **mobile** (< 768px).
- [ ] Respect `prefers-reduced-motion` in any new animation.

## 🐛 Reporting Bugs

Use [GitHub Issues](../../issues) and include:
- A clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Your environment (Node.js version, OS, browser)
- Screenshots or screen recordings if applicable

## 💡 Feature Requests

We love ideas! Open a [Feature Request](../../issues/new?template=feature_request.md) and describe:
- What problem it solves
- How it fits the template's philosophy (motion-first, production-ready)
- Any reference implementations or inspirations

## 🏷️ Pull Request Process

1. Update the `README.md` if your change affects usage or features.
2. Update `CHANGELOG.md` under the `[Unreleased]` section.
3. Ensure your PR description links to the related issue if applicable.
4. Wait for review — we aim to respond within 48 hours.

## 📜 Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

**Questions?** Open a [Discussion](https://github.com/lyakhu955/vibecoding/discussions) or ping us in an issue.
