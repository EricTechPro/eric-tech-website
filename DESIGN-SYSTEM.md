# Eric Tech — Design System v1

Codified from the live `index.html` (erictech.ca). This is the source of truth
for any rebuild (Next.js or otherwise). Identity in one line: **"Engineer's
brutalism, softened by sky-blue glow"** — white/near-black canvases, sharp
2px corners, mono labels, one electric blue accent.

---

## 1. Color

### Brand accent — "EricTech Sky Blue"
The site is **not** generic blue-and-white. It's a *cyan-leaning sky blue* on
near-pure neutrals.

| Token | Light | Dark | Notes |
|---|---|---|---|
| `--accent` | `#2BAADF` | `#55C5F0` | Primary brand blue. Light mode ≈ hsl(197, 73%, 52%); dark mode is lightened for contrast on black |
| `--accent-hover` | `#1A95C8` | `#7DD4F5` | Darker on hover in light; *lighter* on hover in dark |
| gradient deep stop | `#1A7AB5` | — | Used in `linear-gradient(135deg, accent → #1a7ab5)` CTA buttons |

### Neutrals
Light mode is **Tailwind Slate** white; dark mode is **Vercel-style true black**.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FFFFFF` (pure white) | `#0A0A0A` (true black, not navy) |
| `--surface` | `#FFFFFF` | `#111111` |
| `--surface-alt` | `#F8FAFC` (slate-50) | `rgba(255,255,255,0.04)` |
| `--border` | `#E2E8F0` (slate-200) | `rgba(255,255,255,0.08)` |
| `--text` | `#0F172A` (slate-900) | `#EDEDED` |
| `--text-muted` | `#475569` (slate-600) | `#A1A1A1` |
| `--text-subtle` | `#94A3B8` (slate-400) | `#666666` |

**Rule:** light-mode neutrals come from the Slate scale (cool, blue-tinted
grays — never warm gray). Dark mode abandons Slate for pure neutral
black/white alphas.

### Glow / atmosphere colors
Accent at low alpha drives all "glow" effects. Two supporting hues appear
*only* as ambient background tints, never as UI chrome:

- **Purple** `#8B5CF6` (violet-500) @ 8–20% alpha — section background glow
- **Teal** `#14B8A6` (teal-500) @ 8–10% alpha — section background glow
- **Accent glow scale**: 0.06 / 0.08 / 0.10 / 0.12 / 0.20 / 0.30 alpha steps

### Usage ratio
~90% neutral, ~8% accent blue, ~2% purple/teal ambient. Accent is reserved
for: CTAs, links, stat numbers, section-label bars, focus rings, the LIVE dot.

---

## 2. Typography

Three-font system, all Google Fonts:

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display | **Archivo** | 400 / 700 / 900 | Hero ("ERIC TECH"), section headings. Black (900), tight tracking `-0.03em` to `-0.05em`, leading down to 0.85 |
| Body | **Space Grotesk** | 300–700 | Paragraphs, nav, buttons. Line-height 1.7 for prose |
| Mono | **JetBrains Mono** | 400 / 500 / 700 | Section labels (`01 / CURRENTLY BUILDING`), stats, pills, eyebrow text. Uppercase + letter-spacing 0.1–0.2em |

Signature moves:
- **Fluid hero**: `font-size: clamp(3.5rem, 10vw, 12rem)`
- **Outline text**: second hero line uses `-webkit-text-stroke: 2–3px var(--text)` with transparent fill
- **Eyebrow pattern**: mono, 11–12px, uppercase, 0.12–0.2em letter-spacing, `--text-subtle`
- **Section label**: `NN / TITLE` in mono + a 48×3px accent bar underneath

---

## 3. Shape & space

- **Border radius: `2px` everywhere** (buttons, cards, pills). The lone
  exceptions: avatar (50%), small logo chip (6px). This near-sharp corner is
  a core identity trait — do not round to 8/12px in a rebuild.
- **Borders**: 1px `--border`; interactive outlines 1.5px.
- **Section rhythm**: `py-32 md:py-44`, content max-width `max-w-6xl`
  (hero `max-w-7xl`), `px-6` gutters.
- **Hit targets**: 44×44px minimum on mobile.

---

## 4. Background & overlay system (3 layers)

1. **Fixed ambient gradients** on `body`: two radial gradients of
   `--accent-glow-light` at 15%/50% and 85%/30%, `background-attachment: fixed`.
2. **Film grain overlay**: a fixed, full-viewport SVG `feTurbulence` fractal
   noise layer at `opacity: 0.012` (light) / `0.018` (dark), `z-index: 9999`,
   `pointer-events: none`. This kills flat-color banding and adds texture.
3. **Per-section glows**: each section gets its own radial-gradient tints
   (accent + purple or teal) plus, in the hero, a blurred (`blur(80px)`)
   accent ellipse div behind content.

Dark mode adds: hairline section dividers (`rgba(255,255,255,0.06)`) with a
centered radial accent-glow "light leak" on the divider line.

---

## 5. Motion

Single signature easing: **`cubic-bezier(0.22, 1, 0.36, 1)`** (ease-out-quint
feel). Standard durations 0.3–0.9s.

| Pattern | Spec |
|---|---|
| Scroll reveal | `opacity 0→1, translateY(30px)→0`, 0.8s, IntersectionObserver @ 8% threshold |
| Hero stagger | 6 elements, fade/scale-in, delays 0.1s → 1.0s |
| Count-up stats | requestAnimationFrame, cubic ease-out, triggers at 30% visibility |
| Card hover | `translateY(-3px)` + `0 16px 40px` shadow, 0.3s |
| CTA hover | `translateY(-1px)` + layered glow ring |
| CTA pulse (sticky) | glow box-shadow pulse, 2.5s loop, stops on hover |
| Shimmer sweep | `::before` white-15% gradient sweeping left→right on hover, 0.5s |
| Pulse dot | opacity 1→0.4→1, 2s loop (the "LIVE" indicator) |

**Accessibility contract**: every animation has a `prefers-reduced-motion`
fallback; focus-visible = 2px accent outline; skip-link present.

---

## 6. Component recipes

- **Primary CTA**: accent bg, white text, 2px radius, uppercase 12px
  Space Grotesk semibold @ 0.08em tracking, arrow icon that nudges +3px on hover.
- **Secondary CTA**: transparent bg, 1.5px `--border`, text/border turn accent on hover.
- **Pill / tag**: mono 12px, `--surface-alt` bg, 1px border, `#` prefix.
- **Stat**: Archivo bold number + mono subtle label.
- **Nav**: transparent until `scrollY > 20`, then `--nav-bg` (92% white / 80%
  black) + `backdrop-filter: blur(16px) saturate(180%)` + bottom border.
- **Card**: `--surface` bg, 1px border, 2px radius, hover lift.

---

## 7. Rebuild mapping (Next.js + Tailwind v4 + shadcn/ui)

- Tokens above → CSS variables in `globals.css` `@theme` block; dark mode via
  `data-theme` attribute (already the pattern in index.html).
- shadcn/ui: set `--radius: 2px`; map `primary` → accent, `muted` →
  surface-alt, `border` → border.
- Motion: Motion (framer-motion) `whileInView` replaces the IntersectionObserver
  reveal; spring/easing tuned to `[0.22, 1, 0.36, 1]`.
- Grain overlay + ambient gradients port as-is (pure CSS, zero JS).
