# Eric Tech Website Memory

## What this project is
- Static personal/creator website for Eric Tech at `erictech.ca`.
- Main implementation is a single `index.html` file using React 18 UMD, Tailwind CDN, Font Awesome, Devicon, and Google Fonts.
- There is no current `package.json`, build step, or app framework directory in this folder.
- Public brand position: "Senior Engineer & Founder" / "engineer - founder - creator".

## Public site content
- Hero: Eric Tech, building AI-powered products, leading engineering at scale, teaching 60,000+ developers.
- Currently building: BookZero, an AI bookkeeping product for small business at `https://bookzero.ai`.
- BookZero messaging currently mentions receipt scanning, bank statement matching, Google Gemini AI, Canadian tax compliance, 92% auto-match rate, 60% cheaper than QuickBooks, and YC 2026 ambition.
- Main CTA: book a free 15-minute strategy call.
- YouTube channel: Eric Tech / `@EricWTech`, focused on AI automation, software development, career growth, full-stack tutorials, cloud/AWS, system design, and productivity.
- Community: Skool at `https://www.skool.com/erictech`.
- Social links currently include YouTube, LinkedIn, Skool, and GitHub.

## Site structure in `index.html`
- `Navbar`
- `Hero`
- `CurrentlyBuilding`
- `InlineCTABridge`
- `TechStack`
- `ProjectsSection`
- `ImpactSection`
- `YouTubeSection`
- `ContactSection`
- `Footer`
- `StickyBottomCTA`
- `SocialProofToast`
- `ScrollCTAPrompt`

## Design and implementation notes
- Design language: sharp 2px-radius UI, light/dark theme variables, accent blue, restrained technical portfolio style.
- Fonts: Archivo for display, Space Grotesk for body, JetBrains Mono for technical labels.
- Assets are kept in `logos/` and `CTA/`; use relative paths.
- Playwright audit artifacts live under `.playwright-mcp/` and are ignored.
- A Claude UI skill exists under `.claude/skills/ui-ux-pro-max/`; if porting it to Codex, place the reusable version under `.Codex/skills/`.

## Editing guidance
- Keep this as a static site unless the user explicitly asks for a framework migration.
- Preserve SEO metadata, canonical URL, favicon links, and accessibility labels when editing.
- Use existing CDN-based React/Tailwind patterns for small changes.
- After UI changes, verify at desktop and mobile widths. The past workflow used Playwright/mobile screenshots.
- Keep private or machine-specific values out of committed files; use `.Codex/settings.local.json`.

## Source files worth checking first
- `index.html`
- `EricTechChannelInfo.md`
- `CNAME`
- `.gitignore`
- `.Codex/settings.local.json` when local/private context is needed
