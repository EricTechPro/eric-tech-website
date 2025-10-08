# EricTech Personal Website - Next.js Migration

A modern, conversion-optimized professional website built with Next.js 14+, TypeScript, and Tailwind CSS. This project is a strategic migration from a single-page HTML/React site to a scalable, production-ready platform designed for service sales and course marketing.

## Overview

EricTech is a personal brand website for a software engineer and tech consultant specializing in AI, Full-stack Development, Web3, and Career Growth. The site serves dual purposes:
- **B2C**: YouTube tutorial audience → course sales
- **B2B**: Professional consulting services

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui from registry.directory
- **Theme**: next-themes (dark/light mode)
- **Fonts**: Inter (optimized with next/font)
- **Hosting**: GitHub Pages with custom domain `erictech.ca`

## Project Structure

```
eric-tech-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage (placeholder for Phase 2)
│   └── globals.css        # Global styles and design tokens
├── components/            # React components
│   ├── ui/               # shadcn/ui components (installed via CLI)
│   └── theme-provider.tsx # Dark/light theme provider
├── lib/                   # Utility functions
│   └── utils.ts          # className merging utilities
├── docs/                  # Documentation
│   ├── WEBSITE_MIGRATION_GUIDE.md
│   ├── STRATEGIC_PRODUCT_ANALYSIS.md
│   └── PHASE1_SETUP_COMPLETE.md
├── index.html            # Legacy site (replaced in Phase 5)
└── public/               # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Development Phases

### Phase 1: ✅ Project Setup & Design System (Current)
- [x] Next.js 14+ with TypeScript and App Router
- [x] Tailwind CSS with custom cyan color scheme
- [x] shadcn/ui configuration
- [x] Dark/light theme system with next-themes
- [x] Base layout with Inter font optimization
- [x] Project structure and documentation

### Phase 2: 🚧 Core Component Migration
- [ ] Install required shadcn/ui components (button, card, navigation-menu, form, dialog)
- [ ] Migrate Navbar with mobile menu
- [ ] Migrate Hero section with profile image
- [ ] Migrate Expertise section (6 cards)
- [ ] Migrate Projects section (3 portfolio items)
- [ ] Migrate Consultation form section
- [ ] Migrate Footer with social links
- [ ] Implement theme toggle button

### Phase 3: 🚧 Conversion-Optimized Homepage
- [ ] Enhance CTA placements and visual hierarchy
- [ ] Add social proof elements (testimonials, stats)
- [ ] Implement A/B testing framework
- [ ] Add performance optimization (lazy loading, code splitting)

### Phase 4: 🚧 Course Marketing Infrastructure
- [ ] Create course landing pages
- [ ] Implement course catalog system
- [ ] Add email capture forms
- [ ] Integrate analytics and conversion tracking

### Phase 5: 🚧 GitHub Pages Deployment
- [ ] Configure static export (`output: 'export'` in next.config.js)
- [ ] Set up GitHub Actions for automated deployment
- [ ] Configure custom domain `erictech.ca`
- [ ] Replace `index.html` with Next.js build output

## Design System

### Color Scheme
The site features a custom cyan-based color palette:
- **Cyan Light**: `#CFF0FA` (194, 86%, 90%)
- **Cyan Bright**: `#8CE4FF` (194, 100%, 78%)
- **Cyan Deep**: `#36D0FF` (194, 100%, 60%)

### Theme Support
- Light mode (default)
- Dark mode
- CSS variables for dynamic theming
- Smooth theme transitions

### Custom Utility Classes
- `.text-high-contrast`, `.text-medium-contrast`, `.text-low-contrast`
- `.card-bg`, `.card-bg-dark`
- `.btn-primary`, `.btn-secondary`
- `.input-field`
- `.link-primary`
- `.fade-in`, `.slide-up`, `.hover-scale`

## shadcn/ui Components

This project uses shadcn/ui components from registry.directory. To install components:

```bash
npx shadcn-ui@latest add [component-name]
```

Components will be installed to `/components/ui`.

### Required Components for Phase 2
- button
- card
- navigation-menu
- form
- dialog
- dropdown-menu (for theme toggle)

## Documentation

- **[WEBSITE_MIGRATION_GUIDE.md](docs/WEBSITE_MIGRATION_GUIDE.md)**: Comprehensive migration guide with technical specifications
- **[STRATEGIC_PRODUCT_ANALYSIS.md](docs/STRATEGIC_PRODUCT_ANALYSIS.md)**: Business context and conversion strategy
- **[PHASE1_SETUP_COMPLETE.md](docs/PHASE1_SETUP_COMPLETE.md)**: Phase 1 completion summary and verification steps

## License

Copyright © 2025 EricTech. All rights reserved.

## Contact

- **Website**: [erictech.ca](https://erictech.ca)
- **YouTube**: [EricTech Channel](https://youtube.com/@erictech)
- **LinkedIn**: [Eric Tech](https://linkedin.com/in/erictech)
- **GitHub**: [erictech](https://github.com/erictech)
