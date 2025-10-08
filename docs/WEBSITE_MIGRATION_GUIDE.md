# EricTech Website Migration Guide

Complete documentation for rebuilding the EricTech personal portfolio website.

**⚠️ STRATEGIC UPDATE**: This guide now includes BUILD/KILL decisions based on business analysis. See STRATEGIC_PRODUCT_ANALYSIS.md for full strategic roadmap.

---

## 🚨 Critical Business Context

**Current Reality**:
- YouTube traffic: 10K-58K views/video with NO email capture (99% visitor loss)
- Generic positioning: "Tech Educator" without actual courses (credibility gap)
- Dual audience: B2B companies + B2C developers (different needs, same website)

**Strategic Changes Required**:
1. **KILL**: Generic "expertise cards → YouTube" pattern (traffic leak)
2. **BUILD**: Dual-track homepage (B2B services vs B2C career coaching)
3. **BUILD**: Email capture system (lead magnet: "10 AI Automation Templates")
4. **ENHANCE**: Consultation section (service tiers, clear pricing, audience segmentation)

See "Strategic Rebuild Priorities" section below for implementation order.

---

## 1. Tech Stack & Dependencies

### Core Libraries
```html
<!-- React 18 -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome 6.5.1 -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />

<!-- Trickle.so (Optional - for project management) -->
<script src="https://app.trickle.so/storage/trickle.js"></script>
```

### Framework
- **Frontend**: React 18 (via CDN, no build step)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: Font Awesome 6.5.1

---

## 2. Design System

### Color Palette

#### Brand Colors (Cyan Theme)
```css
--cyan-light: #CFF0FA;    /* Lightest cyan for backgrounds */
--cyan-bright: #8CE4FF;   /* Bright cyan for accents */
--cyan-deep: #36D0FF;     /* Deep cyan for primary actions */
```

#### Light Theme
```css
--primary: var(--cyan-deep);
--secondary: var(--cyan-bright);
--background: #FFFFFF;
--text: #1A1A1A;
--text-light: #2D2D2D;
--text-lighter: #404040;
--card-bg: var(--cyan-light);
--card-bg-dark: #FFFFFF;
--nav-bg: rgba(255, 255, 255, 0.95);
--button-text: #FFFFFF;
--input-bg: #FFFFFF;
--input-text: #1A1A1A;
--input-border: var(--cyan-bright);
```

#### Dark Theme
```css
[data-theme='dark'] {
  --background: #1A1A1A;
  --text: #FFFFFF;
  --text-light: #E6E6E6;
  --text-lighter: #CCCCCC;
  --card-bg: #2D2D2D;
  --card-bg-dark: #404040;
  --nav-bg: rgba(26, 26, 26, 0.95);
  --input-bg: #2D2D2D;
  --input-text: #FFFFFF;
  --input-border: var(--cyan-deep);
}
```

### Typography
- **Font Family**: System fonts (not explicitly defined, uses browser defaults)
- **Headings**: Bold weight, responsive sizing
  - H1: `text-4xl md:text-6xl` (2.25rem → 3.75rem)
  - H2: `text-4xl` (2.25rem)
  - H3: `text-xl` (1.25rem)
- **Body**: `text-xl md:text-2xl` for hero description

### Spacing & Layout
- **Section Padding**: `4rem 2rem` (64px vertical, 32px horizontal)
- **Max Container Width**: `1200px`
- **Max Content Width**: `1200px` (7xl), hero content `768px` (3xl)

### Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Hover Scale */
.hover-scale:hover {
  transform: scale(1.05);
}
```

---

## 3. Component Architecture

### Component Hierarchy
```
App
├── Navbar
├── Hero
├── ExpertiseSection
├── ProjectsSection
├── ConsultationForm
├── Footer
└── ThemeToggle
```

### 3.1 Navbar Component
**Features**: Fixed top, mobile responsive, hamburger menu

**Desktop Menu Items**:
- Home (#home)
- Expertise (#expertise)
- Projects (#projects)
- Contact (#contact)

**Mobile**: Collapsible menu with toggle button

### 3.2 Hero Section
**Layout**: Centered content with profile image

**Content**:
- Profile Image: `https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/4a19b60b-1c03-4123-91d2-d79cf7a7461b.png`
- Size: `w-48 h-48` (192x192px), rounded with cyan border
- Heading: "Hi, I'm Eric" + "Software Engineer & Tech Educator"
- Description: "Specializing in AI, Full-stack Development, Web3, and Career Growth"
- CTA Button: "Let's connect! 🚀" → links to #contact

**Background**: Gradient overlay from cyan-light to cyan-bright at 20% opacity

### 3.3 Expertise Section
**Background**: Light cyan (`--cyan-light`)

**Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

**Expertise Cards** (6 items):
```javascript
[
  {
    title: "Full Stack Development",
    icon: "fa-code",
    youtubeUrl: "https://www.youtube.com/@EricWTech/featured"
  },
  {
    title: "Blockchain Development",
    icon: "fa-link",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLm7xfhMOszqwqvw0u-MU6ZZSMk4HEoVae"
  },
  {
    title: "AI Automation",
    icon: "fa-robot",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLm7xfhMOszqxLHdQxGZ_MYHevl6mBWuVL"
  },
  {
    title: "Computer Science",
    icon: "fa-laptop-code",
    youtubeUrl: "https://www.youtube.com/@EricProgramming"
  },
  {
    title: "Personal Projects",
    icon: "fa-project-diagram",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLm7xfhMOszqwJQ42rLv53O1ONrd8A1avs"
  },
  {
    title: "Tech Career Growth",
    icon: "fa-chart-line",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLm7xfhMOszqy_PgIflEinGcDWI0ZTwr82"
  }
]
```

### 3.4 Projects Section
**Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

**Projects** (3 items):
```javascript
[
  {
    title: "Find Fitness Classes",
    description: "App for people to find their ideal fitness classess",
    image: "https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/8885d859-3839-4604-b075-d5a772dd42fd.jpeg",
    demoUrl: "https://github.com/Eric-programming/Find-Fitness-Classess"
  },
  {
    title: "Simple Shop",
    description: "A Online E-commerce Shop built with Angular, Typescript, C#, .Net Core",
    image: "https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/91a08771-9de9-4875-ad56-fccaa4f228bb.jpeg",
    demoUrl: "https://github.com/Eric-programming/Simple-Shop"
  },
  {
    title: "Match Me",
    description: "A Dating App built with Next.js 14, Prisma, NextAuth, Pusher, and Cloudinary",
    image: "https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/87fc50c2-2d09-4233-9fb3-82165ae358f7.png",
    demoUrl: "https://github.com/EricTechPro/match-me"
  }
]
```

**Card Features**: Hover overlay with "View Demo" button

### 3.5 Consultation Form Section
**Background**: Light cyan (`--cyan-light`)

**Grid**: `grid-cols-1 md:grid-cols-2` (2 cards)

**Cards**:
```javascript
[
  {
    icon: "fa-phone-alt",
    title: "Free 15-min Call",
    description: "Quick chat on Career & Business Opportunities",
    buttonText: "Schedule Free Call",
    url: "https://calendar.app.google/FmoWxnq7kCd1qsUv7",
    buttonStyle: "btn-primary"
  },
  {
    icon: "fa-video",
    title: "1-Hour Consultation",
    description: "Deep dive into technical challenges and solutions",
    buttonText: "Book Paid Consultation",
    url: "https://calendar.app.google/CqyLrraYXexRJAQj6",
    buttonStyle: "btn-secondary"
  }
]
```

### 3.6 Footer Component
**Background**: Dark gray (`bg-gray-900`)

**Social Links**:
```javascript
[
  {
    icon: "fab fa-youtube",
    url: "https://www.youtube.com/@EricWTech",
    label: "YouTube"
  },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/ericwtech/",
    label: "LinkedIn"
  },
  {
    icon: "fab fa-github",
    url: "https://github.com/erictechpro",
    label: "GitHub"
  },
  {
    icon: "fas fa-file-alt",
    url: "https://drive.google.com/file/d/1uivQkO56-ptQ3qMz955_yJ8cVS6Ejcdl/view?usp=sharing",
    label: "CV"
  }
]
```

**Copyright**: Dynamic year with "© {year} EricTech. All rights reserved."

### 3.7 Theme Toggle
**Position**: Fixed bottom-right (`bottom-4 right-4`)

**Functionality**:
- LocalStorage persistence with key "theme"
- Toggles `data-theme` attribute on `<html>`
- Icons: `fa-sun` (dark mode) / `fa-moon` (light mode)

---

## 4. SEO & Meta Tags

### Basic Meta
```html
<meta charset="utf-8" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<title>EricTech - Software Engineer & Tech Consultant</title>
```

### SEO Meta
```html
<meta content="EricTech - Software Engineer, YouTuber, and Tech Consultant specializing in AI, Full-stack Development, Web3, and Career Growth" name="description" />

<meta content="software engineer, full stack developer, tech consultant, AI automation, blockchain, Web3, career growth, programming tutorials" name="keywords" />
```

### Open Graph (Facebook/LinkedIn)
```html
<meta content="EricTech - Software Engineer & Tech Consultant" property="og:title" />
<meta content="Expert in AI, Full-stack Development, Web3, and Career Growth. Watch tutorials and book consultations." property="og:description" />
<meta content="website" property="og:type" />
```

### Twitter Card
```html
<meta content="summary_large_image" name="twitter:card" />
<meta content="EricTech - Software Engineer & Tech Consultant" name="twitter:title" />
<meta content="Expert in AI, Full-stack Development, Web3, and Career Growth. Watch tutorials and book consultations." name="twitter:description" />
```

---

## 5. Features & Functionality

### 5.1 Dark Mode
- **Storage**: localStorage key "theme"
- **Default**: Light mode
- **Toggle**: Floating button (bottom-right)
- **Implementation**: CSS custom properties with `[data-theme='dark']` selector

### 5.2 Responsive Design
- **Mobile First**: Base styles for mobile
- **Breakpoints**:
  - `md:` 768px+ (tablets)
  - `lg:` 1024px+ (desktops)
- **Mobile Menu**: Hamburger icon toggles navigation

### 5.3 Smooth Scrolling
- **Anchor Links**: All navigation uses `#` anchors
- **Sections**: `id="home"`, `id="expertise"`, `id="projects"`, `id="contact"`

### 5.4 Hover Effects
- **Cards**: `hover-scale` class (scale 1.05)
- **Buttons**: Opacity 0.9 + translateY(-1px)
- **Images**: Scale 1.1 on project cards
- **Links**: Color change to cyan-bright

### 5.5 Animations
- **Hero Title**: `fade-in` (1s)
- **Hero Description**: `slide-up` (0.5s)
- **All Cards**: `hover-scale` with transition

---

## 6. Third-party Integrations

### 6.1 Trickle.so Integration (Optional)
```javascript
window.__PROTO_STATE__ = {
  "projectId": "proj_154haRYBF6b",
  "userId": "usr_0c9971ea40000001",
  "workspaceId": "workspace_id_usr_0c9971ea40000001",
  "memberId": "member_id_usr_0c9971ea40000001",
  "projectTitle": "EricTech Landing Page"
};
```

**Features**:
- Error reporting to parent window
- Element inspection mode
- Teleport functionality

**Note**: Can be removed if not using Trickle.so platform

### 6.2 Error Handling
- Global error listener
- Unhandled rejection listener
- PostMessage to parent window

---

## 7. Image Assets

### Profile Image
- **URL**: `https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/4a19b60b-1c03-4123-91d2-d79cf7a7461b.png`
- **Size**: 192x192px
- **Style**: Rounded with 4px cyan border

### Project Images
1. **Find Fitness Classes**: `https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/8885d859-3839-4604-b075-d5a772dd42fd.jpeg`
2. **Simple Shop**: `https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/91a08771-9de9-4875-ad56-fccaa4f228bb.jpeg`
3. **Match Me**: `https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/87fc50c2-2d09-4233-9fb3-82165ae358f7.png`

---

## 8. Step-by-Step Rebuild Guide

### Step 1: Setup HTML Structure
1. Create `index.html` with HTML5 doctype
2. Add meta tags (viewport, charset, SEO, Open Graph, Twitter)
3. Include CDN links (React, Tailwind, Font Awesome)

### Step 2: Define CSS Variables
1. Add `:root` CSS variables for light theme
2. Add `[data-theme='dark']` variables for dark theme
3. Include utility classes (card-bg, btn-primary, btn-secondary, text styles)
4. Add animation keyframes (fadeIn, slideUp, hover-scale)

### Step 3: Build React Components
1. **Navbar**: Fixed navigation with mobile menu
2. **Hero**: Profile image + heading + CTA
3. **ExpertiseSection**: 6 cards with icons and YouTube links
4. **ProjectsSection**: 3 project cards with hover overlays
5. **ConsultationForm**: 2 consultation cards
6. **Footer**: Social links + copyright
7. **ThemeToggle**: Floating button with localStorage

### Step 4: Initialize App
1. Create ErrorBoundary component
2. Create App component that renders all sections
3. Initialize theme from localStorage
4. Render app to `#root` element

### Step 5: Optional Integrations
1. Add Trickle.so scripts (if needed)
2. Configure error reporting
3. Add element inspection mode

### Step 6: Testing Checklist
- [ ] All links work correctly
- [ ] Mobile menu toggles properly
- [ ] Dark mode persists after refresh
- [ ] Smooth scrolling to sections
- [ ] Hover effects on all interactive elements
- [ ] Images load correctly
- [ ] Responsive design at all breakpoints
- [ ] Social links open in new tabs
- [ ] Consultation buttons link to calendars

---

## 9. Migration to Other Frameworks

### Next.js Migration
```javascript
// Convert to Next.js components
// pages/index.js
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// ... other imports

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExpertiseSection />
      <ProjectsSection />
      <ConsultationForm />
      <Footer />
      <ThemeToggle />
    </>
  )
}
```

**Required Changes**:
- Convert inline React.createElement to JSX
- Move components to `/components` directory
- Use Next.js Image component for optimization
- Add next/head for meta tags
- Configure Tailwind in `tailwind.config.js`

### Vue Migration
```vue
<!-- App.vue -->
<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <ExpertiseSection />
    <ProjectsSection />
    <ConsultationForm />
    <Footer />
    <ThemeToggle />
  </div>
</template>
```

**Required Changes**:
- Convert React components to Vue SFCs
- Use Vue composition API or options API
- Replace useState with ref/reactive
- Use Vue directives (v-if, v-for, @click)

### WordPress Theme
**Approach**: Convert to PHP templates
- `header.php` → Navbar
- `index.php` → All sections
- `footer.php` → Footer
- Custom post types for Projects and Expertise
- Theme customizer for colors and content

---

## 10. Performance Optimization

### Current Implementation
- CDN-based libraries (no build step)
- Minimal custom CSS
- Font Awesome (heavy, consider subset)

### Optimization Opportunities
1. **Bundle Size**:
   - Replace Font Awesome with SVG icons (~300KB savings)
   - Use React build version instead of CDN (~50KB savings)

2. **Images**:
   - Convert to WebP format
   - Add lazy loading
   - Use responsive images with srcset

3. **CSS**:
   - Purge unused Tailwind classes
   - Inline critical CSS

4. **JavaScript**:
   - Code splitting per component
   - Lazy load below-fold components

---

## 11. Accessibility Checklist

### Current Issues to Address
- [ ] Add ARIA labels to navigation links
- [ ] Add alt text to profile image
- [ ] Ensure keyboard navigation works
- [ ] Add skip to main content link
- [ ] Improve color contrast ratios (check WCAG AA)
- [ ] Add focus visible styles
- [ ] Add ARIA labels to social links
- [ ] Add ARIA expanded to mobile menu button

### WCAG 2.1 AA Compliance
- **Color Contrast**: Verify all text meets 4.5:1 ratio
- **Keyboard**: Ensure all interactive elements are keyboard accessible
- **Screen Readers**: Test with NVDA/JAWS
- **Focus Management**: Visible focus indicators

---

## 12. Deployment Options

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Add CNAME file for custom domain

### Netlify
1. Connect Git repository
2. Build command: None (static HTML)
3. Publish directory: `/`

### Vercel
1. Import Git repository
2. Framework: Other
3. Deploy

### Traditional Hosting
1. Upload `index.html` via FTP/SFTP
2. Ensure server supports HTTPS
3. Configure redirects if needed

---

## 13. Content Management

### Making Updates

#### Update Profile Image
Change URL in Hero component:
```javascript
src: "https://your-new-image-url.png"
```

#### Add New Project
Add object to projects array in ProjectsSection:
```javascript
{
  title: "Project Name",
  description: "Project description",
  image: "https://image-url.jpg",
  demoUrl: "https://demo-or-github-url.com"
}
```

#### Add New Expertise Area
Add object to expertise array in ExpertiseSection:
```javascript
{
  title: "Expertise Name",
  icon: "fa-icon-name",
  youtubeUrl: "https://youtube.com/..."
}
```

#### Update Social Links
Modify socialLinks array in Footer component

#### Change Color Scheme
Update CSS variables in `:root` and `[data-theme='dark']`

---

## 14. Version Control

### Recommended .gitignore
```
.DS_Store
node_modules/
dist/
.env
*.log
```

### Branch Strategy
- `main` → Production
- `develop` → Development
- Feature branches for new sections/updates

---

## 15. Analytics Integration

### Google Analytics 4
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Tracking Events
```javascript
// Track consultation button clicks
gtag('event', 'click', {
  'event_category': 'Consultation',
  'event_label': 'Free 15-min Call'
});
```

---

## 16. Security Considerations

### Current Implementation
- External links with `target="_blank"` (add `rel="noopener noreferrer"`)
- CDN integrity checks missing (add SRI)

### Improvements
```html
<!-- Add integrity checks -->
<script
  src="https://unpkg.com/react@18/umd/react.production.min.js"
  integrity="sha384-..."
  crossorigin="anonymous">
</script>
```

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' https://unpkg.com https://cdn.tailwindcss.com https://cdnjs.cloudflare.com 'unsafe-inline'; style-src 'self' https://cdnjs.cloudflare.com 'unsafe-inline';">
```

---

## 17. Browser Compatibility

### Minimum Supported Versions
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills Needed (for older browsers)
- CSS Custom Properties
- Flexbox/Grid
- ES6 features (from React)

---

---

## 18. Strategic Rebuild Priorities (NEW)

**READ THIS FIRST**: The original website design has structural flaws that prevent revenue generation. This section outlines build/kill decisions based on business analysis.

### Phase 1: Foundation (Week 1) - CRITICAL
**Goal**: Stop traffic loss, create revenue paths

#### ❌ KILL: Current Expertise Section Implementation
**Problem**: Cards link directly to YouTube → visitors leave site → no conversion
**Evidence**: 10K-58K YouTube views but <1% consultation bookings

**What to Remove**:
```javascript
// OLD: Don't use this pattern
{
  title: "Full Stack Development",
  icon: "fa-code",
  youtubeUrl: "https://www.youtube.com/@EricWTech/featured" // ❌ Sends traffic away
}
```

#### ✅ BUILD: Dual-Track Homepage
**Replace expertise section with two distinct value propositions**:

**B2B Track** (For Companies):
```javascript
const B2BServices = [
  {
    title: "AI Automation Workflows",
    description: "Custom n8n/Make integrations that save 20+ hours/week",
    cta: "View Templates",
    ctaUrl: "#lead-magnet", // Captures email
    icon: "fa-robot"
  },
  {
    title: "Implementation Projects",
    description: "End-to-end automation systems for sales, marketing, operations",
    cta: "See Case Studies",
    ctaUrl: "#case-studies", // On-site content
    icon: "fa-project-diagram"
  },
  {
    title: "Technical Consulting",
    description: "Strategy sessions + implementation roadmaps",
    cta: "Book Discovery Call",
    ctaUrl: "https://calendar.app.google/...",
    icon: "fa-comments"
  }
]
```

**B2C Track** (For Developers):
```javascript
const CareerServices = [
  {
    title: "Career Advancement Coaching",
    description: "Get promoted to senior/staff engineer in 12-18 months",
    cta: "Free Career Audit",
    ctaUrl: "#career-clarity-call",
    icon: "fa-chart-line"
  },
  {
    title: "Interview Preparation",
    description: "Resume review + technical interview mastery",
    cta: "Download Prep Guide",
    ctaUrl: "#lead-magnet", // Email capture
    icon: "fa-clipboard-check"
  },
  {
    title: "Skill Development",
    description: "AI automation, full-stack, career strategy",
    cta: "Join Waitlist",
    ctaUrl: "#course-waitlist", // Future courses
    icon: "fa-graduation-cap"
  }
]
```

#### ✅ BUILD: Email Capture System (HIGHEST PRIORITY)
**Lead Magnet**: "10 AI Automation Templates You Can Deploy Today"

**Landing Page Component**:
```javascript
function LeadMagnetSection() {
  return React.createElement('section', {
    className: 'section card-bg',
    id: 'lead-magnet'
  },
    React.createElement('div', { className: 'container max-w-4xl text-center' },
      React.createElement('h2', { className: 'text-4xl font-bold mb-4' },
        '🎁 Free: 10 AI Automation Templates (Worth $500)'
      ),
      React.createElement('p', { className: 'text-xl mb-8' },
        'The exact n8n workflows I use with clients to automate sales, marketing, and operations. Download in 60 seconds, deploy in 60 minutes.'
      ),
      React.createElement('form', {
        action: 'https://your-email-service.com/subscribe', // ConvertKit/Mailchimp
        method: 'POST',
        className: 'max-w-md mx-auto'
      },
        React.createElement('input', {
          type: 'email',
          name: 'email',
          placeholder: 'Enter your email',
          required: true,
          className: 'w-full px-4 py-3 mb-4 rounded-lg border-2'
        }),
        React.createElement('button', {
          type: 'submit',
          className: 'btn-primary w-full'
        }, 'Get Free Templates →')
      ),
      React.createElement('p', { className: 'text-sm text-medium-contrast mt-4' },
        '✓ No credit card required  ✓ Instant access  ✓ Unsubscribe anytime'
      )
    )
  )
}
```

#### ✅ ENHANCE: Consultation Section with Service Tiers
**Replace generic consultation cards with structured service offerings**:

**B2B Service Tiers**:
```javascript
const B2BConsultation = [
  {
    tier: "Free Audit",
    icon: "fa-search",
    title: "Automation Opportunity Analysis",
    duration: "15 minutes",
    price: "Free",
    description: "I'll identify 3 processes in your business that could save 10+ hours/week",
    outcome: "Custom proposal for implementation",
    buttonText: "Book Free Audit",
    url: "https://calendar.app.google/FmoWxnq7kCd1qsUv7",
    buttonStyle: "btn-primary"
  },
  {
    tier: "Strategy Session",
    icon: "fa-lightbulb",
    title: "Implementation Roadmap",
    duration: "1 hour",
    price: "$297",
    description: "Deep-dive into technical architecture, timeline, and ROI projections",
    outcome: "Technical spec + implementation plan",
    buttonText: "Book Strategy Session",
    url: "https://calendar.app.google/...",
    buttonStyle: "btn-secondary"
  },
  {
    tier: "Implementation",
    icon: "fa-tools",
    title: "Done-For-You Automation",
    duration: "2-6 weeks",
    price: "$2,500 - Custom",
    description: "Full automation system build, testing, training, and handoff",
    outcome: "Working automation + documentation",
    buttonText: "Request Proposal",
    url: "#contact",
    buttonStyle: "btn-secondary"
  }
]
```

**B2C Career Coaching Tiers**:
```javascript
const CareerCoaching = [
  {
    tier: "Free Clarity Call",
    icon: "fa-phone",
    title: "Career Blocker Diagnosis",
    duration: "15 minutes",
    price: "Free",
    description: "I'll identify the #1 thing blocking your next promotion/role",
    outcome: "Personalized action item",
    buttonText: "Book Clarity Call",
    url: "https://calendar.app.google/...",
    buttonStyle: "btn-primary"
  },
  {
    tier: "Coaching Session",
    icon: "fa-user-tie",
    title: "Career Acceleration Plan",
    duration: "1 hour",
    price: "$197",
    description: "Resume review + interview prep + negotiation strategy",
    outcome: "30-day action plan",
    buttonText: "Book Coaching",
    url: "https://calendar.app.google/CqyLrraYXexRJAQj6",
    buttonStyle: "btn-secondary"
  }
]
```

#### ❌ KILL: "Tech Educator" Positioning (No Courses Yet)
**Hero Section - OLD** (Don't use):
```javascript
// ❌ Creates credibility gap
"Hi, I'm Eric - Software Engineer & Tech Educator"
"Specializing in AI, Full-stack Development, Web3, and Career Growth"
```

**Hero Section - NEW** (Use this):
```javascript
function Hero() {
  return React.createElement('section', {
    className: 'section min-h-screen flex items-center justify-center',
    style: {
      background: 'linear-gradient(135deg, var(--cyan-light) 0%, var(--cyan-bright) 100%)',
      opacity: 0.2
    }
  },
    React.createElement('div', { className: 'container text-center max-w-3xl' },
      // Profile image (keep existing)
      React.createElement('img', {
        src: 'https://app.trickle.so/storage/public/images/usr_0c9971ea40000001/4a19b60b-1c03-4123-91d2-d79cf7a7461b.png',
        alt: 'Eric',
        className: 'w-48 h-48 rounded-full mx-auto mb-8 border-4 border-cyan-500'
      }),

      // NEW: Dual value proposition
      React.createElement('h1', { className: 'text-4xl md:text-6xl font-bold mb-6 fade-in' },
        "Hi, I'm Eric"
      ),
      React.createElement('h2', { className: 'text-2xl md:text-4xl font-semibold mb-6 text-high-contrast' },
        "AI Automation Consultant & Career Strategist"
      ),

      // Split value props
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-6 mb-8 slide-up' },
        // B2B
        React.createElement('div', { className: 'card-bg-dark p-6 rounded-lg' },
          React.createElement('h3', { className: 'text-xl font-bold mb-2' }, '💼 For Companies'),
          React.createElement('p', { className: 'text-medium-contrast' },
            'I build AI workflows that save 20+ hours/week - from lead qualification to customer onboarding, automated.'
          )
        ),
        // B2C
        React.createElement('div', { className: 'card-bg-dark p-6 rounded-lg' },
          React.createElement('h3', { className: 'text-xl font-bold mb-2' }, '👨‍💻 For Developers'),
          React.createElement('p', { className: 'text-medium-contrast' },
            'I help engineers get promoted to senior/staff roles faster with strategic career positioning.'
          )
        )
      ),

      // Dual CTAs
      React.createElement('div', { className: 'flex flex-col md:flex-row gap-4 justify-center' },
        React.createElement('a', {
          href: '#lead-magnet',
          className: 'btn-primary px-8 py-3 text-lg'
        }, 'Get Free Automation Templates 🎁'),
        React.createElement('a', {
          href: '#services',
          className: 'btn-secondary px-8 py-3 text-lg'
        }, 'Explore Services →')
      )
    )
  )
}
```

### Phase 2: Proof (Week 2-4)
**Goal**: Build trust, nurture leads, close deals

#### ✅ BUILD: Case Studies Section
```javascript
const caseStudies = [
  {
    client: "Real Estate Agency",
    challenge: "Spent 15 hours/week manually qualifying leads",
    solution: "Built WhatsApp AI bot with n8n + Supabase for lead qualification",
    results: {
      timeSaved: "15 hours/week",
      efficiency: "80% automation rate",
      roi: "Paid for itself in 2 weeks"
    },
    techStack: ["n8n", "Supabase", "WhatsApp API", "OpenAI"],
    testimonial: "Eric's automation saved us countless hours...",
    image: "case-study-1.jpg"
  }
  // Add 2 more case studies
]
```

#### ✅ BUILD: Career Resources Hub (Email Gate)
```javascript
const careerResources = [
  {
    title: "Senior Engineer Resume Template",
    description: "ATS-optimized format that gets interviews",
    downloadUrl: "/resources/resume-template.pdf", // After email capture
    icon: "fa-file-alt"
  },
  {
    title: "Tech Interview Prep Checklist",
    description: "200+ questions for senior/staff roles",
    downloadUrl: "/resources/interview-checklist.pdf",
    icon: "fa-clipboard-check"
  },
  {
    title: "Salary Negotiation Calculator",
    description: "Data-driven salary bands by role/location",
    downloadUrl: "/resources/salary-calculator.xlsx",
    icon: "fa-calculator"
  },
  {
    title: "Tech Stack Roadmap 2025",
    description: "What to learn for career advancement",
    downloadUrl: "/resources/tech-roadmap.pdf",
    icon: "fa-map"
  }
]
```

### Phase 3: Course Prep (Month 2-3)
**Goal**: Validate course model before full build

#### ✅ BUILD: Course Waitlist (Not Full Platform Yet)
```javascript
function CourseWaitlist() {
  return React.createElement('section', { className: 'section card-bg', id: 'course-waitlist' },
    React.createElement('div', { className: 'container max-w-4xl text-center' },
      React.createElement('h2', { className: 'text-4xl font-bold mb-4' },
        '🚀 Courses Coming Soon'
      ),
      React.createElement('p', { className: 'text-xl mb-6' },
        'I\'m building comprehensive courses on AI Automation and Career Advancement. Join the waitlist for early access and exclusive discounts.'
      ),

      // Planned courses preview
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-6 mb-8' },
        React.createElement('div', { className: 'card-bg-dark p-6 rounded-lg text-left' },
          React.createElement('h3', { className: 'text-2xl font-bold mb-2' }, 'AI Automation Expert'),
          React.createElement('p', { className: 'text-medium-contrast mb-4' },
            '8-week program: Build n8n workflows, AI agents, and automation systems from scratch'
          ),
          React.createElement('ul', { className: 'text-sm space-y-2' },
            React.createElement('li', null, '✓ 40+ hours of video content'),
            React.createElement('li', null, '✓ Real-world project builds'),
            React.createElement('li', null, '✓ Template library + code access'),
            React.createElement('li', null, '✓ Live Q&A sessions')
          )
        ),
        React.createElement('div', { className: 'card-bg-dark p-6 rounded-lg text-left' },
          React.createElement('h3', { className: 'text-2xl font-bold mb-2' }, 'Career Accelerator'),
          React.createElement('p', { className: 'text-medium-contrast mb-4' },
            '6-week program: Senior/staff engineer promotion blueprint'
          ),
          React.createElement('ul', { className: 'text-sm space-y-2' },
            React.createElement('li', null, '✓ Resume + LinkedIn optimization'),
            React.createElement('li', null, '✓ Interview mastery (system design, behavioral)'),
            React.createElement('li', null, '✓ Negotiation strategy frameworks'),
            React.createElement('li', null, '✓ 1:1 coaching included')
          )
        )
      ),

      // Waitlist form
      React.createElement('form', {
        action: 'https://your-email-service.com/waitlist',
        method: 'POST',
        className: 'max-w-md mx-auto'
      },
        React.createElement('input', {
          type: 'email',
          name: 'email',
          placeholder: 'Enter your email for early access',
          required: true,
          className: 'w-full px-4 py-3 mb-4 rounded-lg border-2'
        }),
        React.createElement('button', {
          type: 'submit',
          className: 'btn-primary w-full'
        }, 'Join Waitlist (Get 30% Launch Discount)')
      ),

      React.createElement('p', { className: 'text-sm text-medium-contrast mt-4' },
        'Expected launch: Q2 2025 | Waitlist members get first access + exclusive bonuses'
      )
    )
  )
}
```

### Implementation Checklist (Week 1 Priorities)

- [ ] **Day 1-2**: Email Capture
  - [ ] Set up ConvertKit/Mailchimp account
  - [ ] Create lead magnet landing page component
  - [ ] Link to existing GitHub automation templates
  - [ ] Add email capture CTAs to hero + expertise sections
  - [ ] Test form submission workflow

- [ ] **Day 3-4**: Homepage Restructure
  - [ ] Replace expertise section with B2B/B2C dual track
  - [ ] Update hero section with new value propositions
  - [ ] Remove "Tech Educator" references
  - [ ] Add "Join Waitlist" for future courses (set expectations)

- [ ] **Day 5**: Consultation Enhancement
  - [ ] Create service tier components (B2B: 3 tiers, B2C: 2 tiers)
  - [ ] Update consultation section with clear pricing
  - [ ] Add outcome descriptions to each tier
  - [ ] Link to existing Google Calendar URLs

- [ ] **Day 6-7**: Analytics + Testing
  - [ ] Add Google Analytics 4 tracking
  - [ ] Set up conversion goals (email capture, consultation bookings)
  - [ ] Test all CTAs and forms
  - [ ] Deploy and monitor initial metrics

---

## Contact & Support

For questions about this website or migration guide:
- **YouTube**: [@EricWTech](https://www.youtube.com/@EricWTech)
- **LinkedIn**: [ericwtech](https://www.linkedin.com/in/ericwtech/)
- **GitHub**: [erictechpro](https://github.com/erictechpro)

**📊 Strategic Analysis**: See STRATEGIC_PRODUCT_ANALYSIS.md for complete build/kill decisions and revenue roadmap
