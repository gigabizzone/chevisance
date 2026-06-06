# project.md — Developer Implementation Guide
## CHEVISANCE SHIPPING PVT. LTD. Website

> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Resend
> **Dev Environment:** VS Code + Claude Code (local) → Hostinger Node.js (live)
> **Reference:** See `PRD.md` for all design specs, brand colors, content, and page copy.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Project Initialisation](#2-project-initialisation)
3. [Folder Structure](#3-folder-structure)
4. [Tailwind CSS Configuration](#4-tailwind-css-configuration)
5. [Global Styles](#5-global-styles)
6. [Fonts Setup](#6-fonts-setup)
7. [Root Layout & Metadata](#7-root-layout--metadata)
8. [Shared Components](#8-shared-components)
9. [Layout Components (Header + Footer)](#9-layout-components-header--footer)
10. [Animation Variants](#10-animation-variants)
11. [Page Build Guide](#11-page-build-guide)
12. [API Routes (Forms)](#12-api-routes-forms)
13. [Form Components](#13-form-components)
14. [SEO — Metadata & Structured Data](#14-seo--metadata--structured-data)
15. [Image Guidelines](#15-image-guidelines)
16. [Environment Variables](#16-environment-variables)
17. [Hostinger Deployment](#17-hostinger-deployment)
18. [Testing Checklist](#18-testing-checklist)
19. [Go-Live Checklist](#19-go-live-checklist)

---

## 1. Prerequisites

### Required Software
| Tool | Purpose | Install |
|---|---|---|
| Node.js ≥ 18 | Runtime | https://nodejs.org (LTS) |
| VS Code | Editor | https://code.visualstudio.com |
| Claude Code | AI coding assistant | VS Code marketplace: "Claude Code" |
| Git | Version control | https://git-scm.com |

### VS Code Extensions (recommended)
- ESLint
- Tailwind CSS IntelliSense
- Prettier
- TypeScript Vue Plugin (optional)

### Assets to have ready before starting
- All PNG logo files from the `Chevisance Shipping` project folder
- Stock photos downloaded from Unsplash/Pexels (see PRD §12)
- Resend account created at https://resend.com (free tier: 100 emails/day)

---

## 2. Project Initialisation

Open VS Code, then open the integrated terminal (`Ctrl+`` ` or `View → Terminal`).

```bash
# Create Next.js project
npx create-next-app@latest chevisance-shipping \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd chevisance-shipping

# Install all required dependencies
npm install framer-motion react-hook-form @hookform/resolvers zod resend lucide-react clsx tailwind-merge

# Open in VS Code
code .
```

When `create-next-app` asks:
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **Yes**
- App Router: **Yes**
- Import alias: **Yes** → `@/*`

Start the dev server:
```bash
npm run dev
```
Open http://localhost:3000 — you should see the Next.js welcome page.

---

## 3. Folder Structure

After setup, organise the project as follows:

```
chevisance-shipping/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (fonts, header, footer, metadata)
│   │   ├── page.tsx                   # Home page
│   │   ├── globals.css                # Tailwind + custom CSS
│   │   ├── about-us/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx               # Services archive
│   │   │   ├── air-freight/
│   │   │   │   └── page.tsx
│   │   │   ├── sea-freight/
│   │   │   │   └── page.tsx
│   │   │   ├── domestic-logistics/
│   │   │   │   └── page.tsx
│   │   │   └── warehouse-services/
│   │   │       └── page.tsx
│   │   ├── contact-us/
│   │   │   └── page.tsx
│   │   ├── request-a-quote/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts           # Contact form email handler
│   │   │   └── quote/
│   │   │       └── route.ts           # Quote form email handler
│   │   ├── robots.ts                  # Auto-generate robots.txt
│   │   └── sitemap.ts                 # Auto-generate sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageBanner.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesStrip.tsx
│   │   │   ├── AboutSnippet.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ProjectsGallery.tsx
│   │   │   ├── WorkingProcess.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ContactTeaser.tsx
│   │   ├── services/
│   │   │   ├── ServiceDetailLayout.tsx  # Shared layout for all 4 service pages
│   │   │   └── ServiceSidebar.tsx
│   │   ├── shared/
│   │   │   ├── MarqueeTicker.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   ├── SectionTag.tsx
│   │   │   ├── WorkingProcess.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ClientLogos.tsx
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── QuoteForm.tsx
│   ├── lib/
│   │   ├── animations.ts              # Framer Motion variants
│   │   └── utils.ts                   # cn() helper (clsx + tailwind-merge)
│   └── data/
│       └── services.ts                # Service page content data
├── public/
│   ├── images/
│   │   ├── logos/                     # All PNG logo files
│   │   └── stock/                     # Downloaded stock photos
│   └── favicon.png
├── .env.local                         # API keys (never commit to git)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Tailwind CSS Configuration

Replace `tailwind.config.ts` with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E4B5A',
        accent:  '#2DA5B4',
        'bg-light': '#EBF4F6',
        'text-dark': '#1A2B30',
        border: '#CBD8DC',
        orange: '#E8663D',
      },
      fontFamily: {
        heading: ['var(--font-barlow)', 'sans-serif'],
        body:    ['var(--font-open-sans)', 'sans-serif'],
      },
      borderRadius: {
        btn: '30px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(30, 75, 90, 0.12)',
        'card-hover': '0 12px 32px rgba(30, 75, 90, 0.22)',
      },
      maxWidth: {
        site: '1280px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 5. Global Styles

Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-body text-text-dark text-[15px] leading-[1.7] antialiased;
  }

  h1, h2, h3, h4, h5 {
    @apply font-heading text-primary leading-tight;
  }
}

@layer components {
  /* Container */
  .container-site {
    @apply max-w-site mx-auto px-4 sm:px-6 lg:px-8;
  }

  /* Buttons */
  .btn-primary {
    @apply inline-flex items-center gap-2 bg-accent text-white font-heading font-semibold
           text-[15px] rounded-btn px-7 py-3.5
           transition-all duration-300
           hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg;
  }

  .btn-outline {
    @apply inline-flex items-center gap-2 border border-primary text-primary font-heading font-semibold
           text-[15px] rounded-btn px-7 py-3.5
           transition-all duration-300
           hover:bg-primary hover:text-white;
  }

  .btn-dark {
    @apply inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold
           text-[15px] rounded px-7 py-3.5
           transition-all duration-300
           hover:bg-accent;
  }

  /* Section tag pill */
  .section-tag {
    @apply inline-block border border-accent text-accent text-xs font-semibold
           uppercase tracking-wider rounded-full px-4 py-1 mb-3;
  }

  /* Section headings */
  .section-heading {
    @apply font-heading font-bold text-[36px] md:text-[42px] leading-tight;
  }

  .section-heading-white {
    @apply section-heading text-white;
  }

  /* Cards */
  .card-base {
    @apply bg-white rounded-xl overflow-hidden shadow-card
           transition-all duration-300
           hover:-translate-y-1.5 hover:shadow-card-hover;
  }

  /* Form inputs */
  .input-base {
    @apply w-full border border-border rounded px-4 py-3
           font-body text-sm text-text-dark
           transition-all duration-300
           focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
           placeholder:text-gray-400;
  }

  /* Sidebar nav item */
  .sidebar-nav-item {
    @apply flex items-center gap-2 px-4 py-2.5 rounded text-sm font-body font-medium
           text-text-dark transition-all duration-300
           hover:bg-primary hover:text-white hover:pl-6;
  }

  .sidebar-nav-item.active {
    @apply bg-primary text-white;
  }
}

/* Marquee animation */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-track {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 35s linear infinite;
}
```

---

## 6. Fonts Setup

In `src/app/layout.tsx`, load fonts via `next/font/google`:

```tsx
import { Barlow, Open_Sans } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})
```

Apply to `<html>` tag:
```tsx
<html lang="en" className={`${barlow.variable} ${openSans.variable}`}>
```

---

## 7. Root Layout & Metadata

`src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { Barlow, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'CHEVISANCE SHIPPING PVT. LTD. — International Freight Forwarding, Mumbai',
    template: '%s — Chevisance Shipping',
  },
  description: 'International freight forwarding specialists in Mumbai. Air freight, sea freight, domestic logistics & warehousing.',
  openGraph: {
    siteName: 'Chevisance Shipping Pvt. Ltd.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${openSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## 8. Shared Components

### `src/lib/utils.ts`
```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `src/lib/animations.ts`
```ts
import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
```

### `src/components/shared/SectionTag.tsx`
```tsx
export default function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="section-tag">{children}</span>
}
```

### `src/components/shared/CTABanner.tsx`
```tsx
import Link from 'next/link'
import Image from 'next/image'

interface CTABannerProps {
  headline?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABanner({
  headline = 'Delivering Smarter Logistics and Transportation Services for a Better Business',
  buttonText = 'Make An Enquiry →',
  buttonHref = '/request-a-quote',
}: CTABannerProps) {
  return (
    <section className="relative bg-primary overflow-hidden py-20">
      <Image
        src="/images/stock/cta-port.jpg"
        alt="Container port"
        fill
        className="object-cover opacity-30"
      />
      <div className="container-site relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading-white max-w-xl mt-2">{headline}</h2>
        </div>
        <Link href={buttonHref} className="btn-primary whitespace-nowrap">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
```

### `src/components/shared/MarqueeTicker.tsx`
```tsx
export default function MarqueeTicker() {
  const items = [
    'GLOBAL SHIPPING', 'AIR FREIGHT', 'SEA FREIGHT',
    'SUPPLY CHAIN', 'WAREHOUSING', 'DOMESTIC LOGISTICS', 'CUSTOMS CLEARANCE',
  ]
  const content = items.map((item, i) => (
    <span key={i} className="mx-8 inline-flex items-center gap-4">
      {item} <span className="text-white/60">✈</span>
    </span>
  ))

  return (
    <div className="bg-accent py-3.5 overflow-hidden">
      <div className="marquee-track text-white text-[13px] font-semibold tracking-[2px] uppercase">
        {content}{content}
      </div>
    </div>
  )
}
```

### `src/components/layout/PageBanner.tsx`
```tsx
import Image from 'next/image'
import Link from 'next/link'

interface PageBannerProps {
  title: string
  breadcrumb: string
}

export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative min-h-[260px] flex items-center justify-center text-center">
      <Image
        src="/images/stock/container-port-aerial.jpg"
        alt="Container port"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/72" />
      <div className="relative z-10 py-16 px-4">
        <h1 className="font-heading font-bold text-white text-[42px] md:text-[48px] mb-3">
          {title}
        </h1>
        <p className="text-accent text-sm font-medium">{breadcrumb}</p>
      </div>
    </section>
  )
}
```

### `src/components/shared/WorkingProcess.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionTag from './SectionTag'

const steps = [
  { num: '01', title: 'Receive Cargo', desc: 'We collect or receive your shipment with care from pickup to intake.' },
  { num: '02', title: 'Process & Coordinate', desc: 'Full documentation, customs processing, and carrier booking handled.' },
  { num: '03', title: 'Deliver to Destination', desc: 'On-time delivery with real-time tracking at every stage.' },
]

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="container-site">
        <div className="text-center mb-12">
          <SectionTag>Working Process</SectionTag>
          <h2 className="section-heading mt-2">We Deliver Through a Smooth Logistics Process</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} custom={i * 0.15} className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-800 text-accent text-xl">{step.num}</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

---

## 9. Layout Components (Header + Footer)

### `src/components/layout/Header.tsx`
```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'Air Freight',         href: '/services/air-freight' },
  { name: 'Sea Freight',         href: '/services/sea-freight' },
  { name: 'Domestic Logistics',  href: '/services/domestic-logistics' },
  { name: 'Warehouse Services',  href: '/services/warehouse-services' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isScrolled
              ? '/images/logos/chevisance_shipping_horizantal_web_logo.png'
              : '/images/logos/chevisance_shipping_horizantal_web_w_logo.png'
            }
            alt="Chevisance Shipping"
            width={200} height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {['/', '/about-us', '/contact-us'].map(([href, label]) => (
            <Link key={href}
              href={href}
              className="text-white text-[15px] font-body font-medium hover:text-accent transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-white text-[15px] font-medium hover:text-accent transition-colors">
              Services <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-card-hover overflow-hidden">
                {services.map(s => (
                  <Link key={s.href} href={s.href}
                    className="block px-5 py-3 text-sm text-text-dark hover:bg-bg-light hover:text-primary transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <Link href="/request-a-quote" className="hidden lg:inline-flex btn-primary">
          Get a Quote →
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-accent/20 px-6 py-4 space-y-3">
          {[['/', 'Home'], ['/about-us', 'About Us'], ['/services', 'Services'], ['/contact-us', 'Contact Us']].map(([href, label]) => (
            <Link key={href} href={href}
              className="block text-white py-2 border-b border-accent/10 hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          {services.map(s => (
            <Link key={s.href} href={s.href}
              className="block text-white/80 py-1.5 pl-4 text-sm hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              — {s.name}
            </Link>
          ))}
          <Link href="/request-a-quote" className="btn-primary w-full text-center mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote →
          </Link>
        </div>
      )}
    </header>
  )
}
```

> **Note for Claude Code:** Replace the nav links array with proper label mapping. The pattern above is a shorthand placeholder — fix the Home/About Us/Contact Us labels correctly.

### `src/components/layout/Footer.tsx`

Build a 4-column footer with:
- Column 1: `<Image>` white logo + tagline + social icon links (LinkedIn, Facebook, Instagram, X via lucide-react)
- Column 2: "Company" heading + Link list (Home, About Us, Services, Contact Us)
- Column 3: "Our Services" heading + Link list (all 4 service pages + Get a Quote)
- Column 4: "Contact Us" heading + address, email, phone
- Bottom bar: copyright text + `border-t border-accent`

Full background: `bg-primary` / text: white

---

## 10. Animation Variants

Already defined in `src/lib/animations.ts` (see §8).

**Standard usage pattern in any component:**
```tsx
'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

// In JSX:
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  custom={0}        // delay in seconds
>
  ...
</motion.div>
```

**For staggered card rows:**
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-4 gap-6"
>
  {cards.map((card, i) => (
    <motion.div key={i} variants={fadeUp} custom={i * 0.1}>
      ...
    </motion.div>
  ))}
</motion.div>
```

---

## 11. Page Build Guide

### 11.1 Home Page (`src/app/page.tsx`)

```tsx
import HeroSection from '@/components/home/HeroSection'
import FeaturesStrip from '@/components/home/FeaturesStrip'
import AboutSnippet from '@/components/home/AboutSnippet'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import WorkingProcess from '@/components/shared/WorkingProcess'
import MarqueeTicker from '@/components/shared/MarqueeTicker'
import ContactTeaser from '@/components/home/ContactTeaser'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTABanner from '@/components/shared/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesStrip />
      <AboutSnippet />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectsGallery />
      <WorkingProcess />
      <MarqueeTicker />
      <ContactTeaser />
      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
```

**`HeroSection.tsx` key structure:**
```tsx
// 2-col grid: text left, image right
// min-h-screen (or min-h-[700px]), bg-bg-light
// Text: H1 (Barlow 800 text-primary), subtext, btn-primary to /services
// Trust bar: avatar images + text
// Image: next/image with logistics composite
// All elements: motion.div with fadeRight/fadeLeft variants
```

**`ServicesGrid.tsx` key structure:**
```tsx
// bg-primary section
// 4-column grid of service cards
// Each card: next/image, overlay gradient, accent icon badge, white title, "Explore More →" link
// Cards link to: /services/air-freight etc.
// Use staggerContainer + zoomIn variants
```

---

### 11.2 About Us Page (`src/app/about-us/page.tsx`)

```tsx
import type { Metadata } from 'next'
import PageBanner from '@/components/layout/PageBanner'
import WorkingProcess from '@/components/shared/WorkingProcess'
import MarqueeTicker from '@/components/shared/MarqueeTicker'
import Testimonials from '@/components/shared/Testimonials'
import ClientLogos from '@/components/shared/ClientLogos'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'About Us — Chevisance Shipping Pvt. Ltd.',
  description: '18+ years of freight forwarding expertise. Meet the leadership team at Chevisance Shipping — trusted logistics partner, Mumbai.',
}

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" breadcrumb="Home / About Us" />
      {/* Mission & Vision section */}
      {/* Working Process */}
      <WorkingProcess />
      <MarqueeTicker />
      {/* Why Trusted section */}
      {/* Leadership / Directors section */}
      <Testimonials />
      <ClientLogos />
      <CTABanner headline="Ready to Partner With Us?" buttonText="Request a Quote →" buttonHref="/request-a-quote" />
    </>
  )
}
```

**Leadership section cards** (2 cards side-by-side):
```tsx
const directors = [
  {
    name: 'Nishant Sutrave',
    title: 'Director & Promoter',
    bio: '15+ years in import/export logistics. Expert in freight forwarding, customs clearance, and project cargo management near Nhava Sheva. Leads a team of 40+ skilled professionals.',
    image: '/images/directors/nishant-sutrave.jpg', // client to provide
  },
  {
    name: 'Sakshi Sutrave',
    title: 'Director & Business Development Manager',
    bio: '20+ years in global logistics. Secured multimillion-dollar contracts and built a partner network across Asia, Europe, and North America.',
    image: '/images/directors/sakshi-sutrave.jpg',
  },
]
```

---

### 11.3 Services Archive (`src/app/services/page.tsx`)

Sections in order:
1. `<PageBanner title="Our Services" />`
2. Intro (tag + H2 + paragraph)
3. **4 alternating service rows** (see below)
4. **Why Choose Us** — 4 icon cards on `bg-primary`
5. `<WorkingProcess />`
6. **Embedded Quote Form** — `<QuoteForm />` in split-panel layout
7. **FAQ Accordion** (build with `useState` open/close)
8. `<CTABanner />`

**Service rows data** (define in `src/data/services.ts`):
```ts
export const servicesData = [
  {
    id: 'sea-freight',
    number: '01',
    tag: 'Sea Freight',
    title: 'Ocean Freight Solutions',
    slug: '/services/sea-freight',
    bullets: ['FCL & LCL', 'Consolidation Services', 'Door-to-Door Delivery'],
    image: '/images/stock/cargo-ship-sea.jpg',
  },
  {
    id: 'air-freight',
    number: '02',
    tag: 'Air Freight',
    title: 'Air Cargo Solutions',
    slug: '/services/air-freight',
    bullets: ['Fast Delivery Times', 'Global Carrier Network', 'Shipment Tracking'],
    image: '/images/stock/cargo-plane-airport.jpg',
  },
  {
    id: 'domestic-logistics',
    number: '03',
    tag: 'Road Transport',
    title: 'Domestic Road Freight',
    slug: '/services/domestic-logistics',
    bullets: ['FTL & LTL', 'India–Bangladesh Transit', 'Nationwide Coverage'],
    image: '/images/stock/trucks-highway.jpg',
  },
  {
    id: 'warehouse-services',
    number: '04',
    tag: 'Warehousing',
    title: 'Warehousing & Storage',
    slug: '/services/warehouse-services',
    bullets: ['Custom Bonded Warehouse', 'Container Stuffing & De-stuffing', 'Value-Added Services'],
    image: '/images/stock/warehouse-interior.jpg',
  },
]
```

**Alternating rows pattern:**
```tsx
{servicesData.map((service, i) => (
  <div key={service.id}
    className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
    gap-0 min-h-[400px] ${i % 2 === 0 ? 'bg-primary' : 'bg-bg-light'}`}
  >
    <div className="lg:w-1/2 relative min-h-[300px]">
      <Image src={service.image} alt={service.title} fill className="object-cover" />
    </div>
    <div className="lg:w-1/2 flex items-center p-10 lg:p-16">
      {/* numbered badge, tag, title, bullets, CTA */}
    </div>
  </div>
))}
```

---

### 11.4 Individual Service Pages (Air / Sea / Domestic / Warehouse)

**Build one template, reuse for all four.** Create `src/components/services/ServiceDetailLayout.tsx`:

```tsx
import Image from 'next/image'
import Link from 'next/link'
import PageBanner from '@/components/layout/PageBanner'
import ServiceSidebar from './ServiceSidebar'
import ClientLogos from '@/components/shared/ClientLogos'
import CTABanner from '@/components/shared/CTABanner'

interface ServiceDetailProps {
  title: string
  breadcrumb: string
  heroImage: string
  headline: string
  body1: string
  body2: string
  featurePills: { icon: string; title: string; desc: string }[]
  callout: string
  benefits: string[]
  currentSlug: string
}

export default function ServiceDetailLayout({
  title, breadcrumb, heroImage, headline,
  body1, body2, featurePills, callout, benefits, currentSlug
}: ServiceDetailProps) {
  return (
    <>
      <PageBanner title={title} breadcrumb={breadcrumb} />
      <section className="py-20">
        <div className="container-site">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
            {/* Main Content */}
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image src={heroImage} alt={title} fill className="object-cover" />
              </div>
              <h2 className="section-heading mb-5">{headline}</h2>
              <p className="mb-4 text-gray-600">{body1}</p>
              <p className="mb-8 text-gray-600">{body2}</p>
              {/* Feature pills */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {featurePills.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-bg-light rounded-lg">
                    <span className="text-accent text-2xl">{p.icon}</span>
                    <div>
                      <div className="font-semibold text-primary font-heading">{p.title}</div>
                      <div className="text-xs text-gray-600">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Callout */}
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 italic text-primary font-medium">
                {callout}
              </div>
              {/* Benefits */}
              <h3 className="font-heading font-semibold text-xl mb-4">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Sidebar */}
            <ServiceSidebar currentSlug={currentSlug} />
          </div>
        </div>
      </section>
      <ClientLogos />
      <CTABanner />
    </>
  )
}
```

**Each service page just imports the layout and passes its data:**
```tsx
// src/app/services/air-freight/page.tsx
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata = { title: 'Air Freight Services Mumbai — Chevisance Shipping', ... }

export default function AirFreightPage() {
  return (
    <ServiceDetailLayout
      title="Air Freight"
      breadcrumb="Home / Services / Air Freight"
      heroImage="/images/stock/cargo-plane-airport.jpg"
      headline="Fast, Reliable & Global Air Cargo Solutions"
      body1="We work with trusted airline partners across key international trade routes, providing fast and reliable air freight solutions for businesses of all sizes."
      body2="From urgent express shipments to standard consolidated air cargo, our team manages every step — booking, documentation, customs clearance, and last-mile delivery."
      featurePills={[
        { icon: '🚀', title: 'Door-to-Door Delivery', desc: 'Complete pickup to delivery management' },
        { icon: '📡', title: 'End-to-End Visibility', desc: 'Real-time shipment tracking at every stage' },
      ]}
      callout="From urgent shipments to standard cargo — we deliver on time, every time."
      benefits={[
        'Fast Delivery Times', 'Global Carrier Network', 'Flexible Options (urgent / standard / custom)',
        'Real-Time Shipment Tracking', 'Customs Brokerage Support', 'Competitive Pricing',
      ]}
      currentSlug="/services/air-freight"
    />
  )
}
```

**Duplicate and fill in data for:** Sea Freight, Domestic Logistics, Warehouse Services (content from PRD §6).

---

### 11.5 Contact Us Page (`src/app/contact-us/page.tsx`)

```tsx
import PageBanner from '@/components/layout/PageBanner'
import ContactForm from '@/components/forms/ContactForm'
import CTABanner from '@/components/shared/CTABanner'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = { title: 'Contact Us — Chevisance Shipping Mumbai', ... }

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" breadcrumb="Home / Contact Us" />

      {/* Form Section */}
      <section className="py-20">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative min-h-[400px] rounded-xl overflow-hidden">
            <Image src="/images/stock/trucks-highway.jpg" alt="Freight trucks" fill className="object-cover" />
          </div>
          {/* Right: Form */}
          <div>
            <span className="section-tag">Consultations</span>
            <h2 className="section-heading mt-2 mb-6">Need Help? We're Here</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-bg-light">
        <div className="container-site grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email, Phone, Address, Hours — each with icon, heading, value */}
        </div>
      </section>

      <CTABanner headline="Delivering Smarter Logistics Solutions" />
    </>
  )
}
```

---

### 11.6 Request a Quote Page (`src/app/request-a-quote/page.tsx`)

```tsx
import PageBanner from '@/components/layout/PageBanner'
import QuoteForm from '@/components/forms/QuoteForm'
import CTABanner from '@/components/shared/CTABanner'

export const metadata = { title: 'Request a Freight Quote — Chevisance Shipping', ... }

export default function QuotePage() {
  return (
    <>
      <PageBanner title="Request a Quote" breadcrumb="Home / Request a Quote" />
      {/* How It Works — 3-step cards */}
      {/* Quote Form */}
      <section className="py-20">
        <div className="container-site">
          <QuoteForm />
        </div>
      </section>
      {/* FAQ Accordion */}
      <CTABanner headline="Ready to Ship? Let's Talk." />
    </>
  )
}
```

---

## 12. API Routes (Forms)

### `src/app/api/contact/route.ts`
```ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    // Notify client
    await resend.emails.send({
      from: 'noreply@yourdomain.com',    // must be verified in Resend
      to: process.env.CONTACT_EMAIL!,
      subject: `New Enquiry — ${subject} — Chevisance Shipping`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // Auto-reply to submitter
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: email,
      subject: 'Thank you for contacting Chevisance Shipping',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your enquiry and will get back to you within 24 hours.</p>
        <p>— CHEVISANCE SHIPPING PVT. LTD.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

### `src/app/api/quote/route.ts`
```ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, freightType, departure, destination,
            commodity, company, weight, notes,
            incoterms, express, insurance } = data

    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: process.env.CONTACT_EMAIL!,
      subject: `Quote Request — ${freightType} — ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${name} | <strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <h3>Shipment Details</h3>
        <p><strong>Freight Type:</strong> ${freightType}</p>
        <p><strong>From:</strong> ${departure} → <strong>To:</strong> ${destination}</p>
        <p><strong>Commodity:</strong> ${commodity}</p>
        <p><strong>Weight:</strong> ${weight || 'Not provided'}</p>
        <h3>Options</h3>
        <p>Incoterms: ${incoterms ? 'Yes' : 'No'} | Express: ${express ? 'Yes' : 'No'} | Insurance: ${insurance ? 'Yes' : 'No'}</p>
        <h3>Notes</h3>
        <p>${notes || 'None'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

---

## 13. Form Components

### `src/components/forms/ContactForm.tsx`
```tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  name:    z.string().min(2, 'Name required'),
  email:   z.string().email('Valid email required'),
  phone:   z.string().min(7, 'Phone required'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('success'); reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input {...register('name')} placeholder="Your Name*" className="input-base" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register('email')} placeholder="Email Address*" className="input-base" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input {...register('phone')} placeholder="Phone Number*" className="input-base" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <select {...register('subject')} className="input-base">
            <option value="">Select Subject</option>
            <option>General Enquiry</option>
            <option>Air Freight</option>
            <option>Sea Freight</option>
            <option>Domestic Logistics</option>
            <option>Warehouse Services</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <textarea {...register('message')} rows={5} placeholder="Your Message*" className="input-base resize-none" />
      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
        {status === 'sending' ? 'Sending...' : 'Send Message →'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">✓ Thank you! We'll get back to you within 24 hours.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  )
}
```

**`QuoteForm.tsx`** — same pattern as ContactForm but with all the quote-specific fields (freightType dropdown, departure, destination, commodity, weight, checkboxes). Submits to `/api/quote`.

---

## 14. SEO — Metadata & Structured Data

### Metadata (each page's `page.tsx`)
```tsx
export const metadata: Metadata = {
  title: 'Page Title — Chevisance Shipping',
  description: 'Page description...',
  openGraph: {
    title: 'Page Title',
    description: 'Page description...',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
}
```

### JSON-LD Structured Data (root `layout.tsx`)
```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CHEVISANCE SHIPPING PVT. LTD.',
  description: 'International freight forwarding and logistics services from Mumbai, India.',
  url: 'https://yourdomain.com',
  telephone: '[PHONE]',
  email: '[EMAIL]',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 10:00-18:00',
}

// In <head>:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
```

### `src/app/robots.ts`
```ts
import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

### `src/app/sitemap.ts`
```ts
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yourdomain.com', lastModified: new Date() },
    { url: 'https://yourdomain.com/about-us' },
    { url: 'https://yourdomain.com/services' },
    { url: 'https://yourdomain.com/services/air-freight' },
    { url: 'https://yourdomain.com/services/sea-freight' },
    { url: 'https://yourdomain.com/services/domestic-logistics' },
    { url: 'https://yourdomain.com/services/warehouse-services' },
    { url: 'https://yourdomain.com/contact-us' },
    { url: 'https://yourdomain.com/request-a-quote' },
  ]
}
```

---

## 15. Image Guidelines

All images use `next/image` — automatic WebP conversion, lazy loading, responsive srcsets.

**Logos** → `/public/images/logos/`
**Stock photos** → `/public/images/stock/`
**Director photos** → `/public/images/directors/`

**next/image usage:**
```tsx
// For full-width/hero images (fill mode):
<div className="relative w-full h-[500px]">
  <Image src="/images/stock/cargo-ship-sea.jpg" alt="Cargo ship at sea" fill className="object-cover" priority />
</div>

// For fixed-size images:
<Image src="/images/logos/chevisance_shipping_horizantal_web_logo.png"
  alt="Chevisance Shipping" width={200} height={50} className="h-12 w-auto" />
```

Always provide a descriptive `alt` attribute. Add `priority` to above-the-fold images.

---

## 16. Environment Variables

Create `.env.local` in the project root (never commit to Git):

```env
# Resend email API
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Client's email (form notifications sent here)
CONTACT_EMAIL=info@chevisanceshipping.com

# Site URL (for metadata and sitemap)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Add `.env.local` to `.gitignore` (it should already be there from create-next-app).

On Hostinger, set these as environment variables in the Node.js app settings.

---

## 17. Hostinger Deployment

### Step 1 — Prepare for Production

```bash
# Test the production build locally
npm run build
npm run start
# Visit http://localhost:3000 — verify everything works
```

### Step 2 — Create a `server.js` for Hostinger

Create `server.js` in the project root:
```js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = false
const hostname = '0.0.0.0'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, () => {
    console.log(`> Ready on port ${port}`)
  })
})
```

### Step 3 — Update `package.json`

Add start script:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "node server.js",
  "lint": "next lint"
}
```

### Step 4 — Upload to Hostinger

**Option A — Git Deploy (recommended):**
1. Push project to a GitHub/GitLab repo (exclude `node_modules`, `.env.local`)
2. In Hostinger hPanel → Git → connect repo → pull to server
3. SSH into server and run `npm install --production && npm run build`

**Option B — FTP Upload:**
1. Run `npm run build` locally
2. Upload via FileZilla: project root (excluding `node_modules`) to `public_html/` or your app folder
3. SSH in: `npm install --production` then start the app

### Step 5 — Configure Hostinger Node.js App

1. hPanel → **Advanced → Node.js**
2. **Application root:** `/home/yourusername/public_html` (or your app folder)
3. **Application URL:** your domain
4. **Application startup file:** `server.js`
5. **Node.js version:** 20 (LTS)
6. Click **Create** / **Save**

### Step 6 — Environment Variables on Hostinger

In hPanel → Node.js → **Environment Variables**, add:
- `RESEND_API_KEY` = your Resend API key
- `CONTACT_EMAIL` = client's email
- `NEXT_PUBLIC_SITE_URL` = https://yourdomain.com
- `NODE_ENV` = production

### Step 7 — SSL & Domain

- hPanel → SSL → Enable Free SSL (Let's Encrypt) for your domain
- Ensure HTTPS redirect is active

### Step 8 — Restart App

After all config: hPanel → Node.js → **Restart** the application.

---

## 18. Testing Checklist

### Pages
- [ ] Home — all 10 sections render, no layout breaks
- [ ] About Us — director cards show, process steps visible
- [ ] Services Archive — all 4 rows, FAQ accordion opens/closes
- [ ] Air Freight service page — sidebar links work, benefits list shows
- [ ] Sea Freight service page
- [ ] Domestic Logistics service page
- [ ] Warehouse Services service page
- [ ] Contact Us — form visible, info cards show
- [ ] Request a Quote — form fields present, checkboxes work

### Navigation
- [ ] All desktop nav links navigate correctly
- [ ] Services dropdown appears on hover, all 4 links work
- [ ] Mobile hamburger opens/closes
- [ ] Mobile nav shows all links including services sub-items
- [ ] Logo clicks through to home
- [ ] "Get a Quote →" button in header navigates to /request-a-quote
- [ ] All footer links work

### Forms
- [ ] Contact form: submit with empty fields → validation errors shown
- [ ] Contact form: submit with valid data → success message shown
- [ ] Contact form: notification email received at client address
- [ ] Contact form: auto-reply received by submitter
- [ ] Quote form: all validation rules work
- [ ] Quote form: successful submission → success state shown
- [ ] Quote form: notification email received at client address

### Design & Responsiveness
- [ ] Header transparent on homepage hero, transitions to solid on scroll
- [ ] Logo swaps from white to dark on scroll
- [ ] All Framer Motion animations trigger on scroll (once only)
- [ ] Marquee ticker scrolls continuously
- [ ] All stock images load, no broken images
- [ ] All `next/image` images have alt text
- [ ] Service card hover effects work
- [ ] Button hover states work (translateY + shadow)
- [ ] Mobile (375px): no horizontal scroll, single-column layout
- [ ] Tablet (768px): correct 2-col adjustments
- [ ] Desktop (1280px): full layout, max-width centred

### Performance
- [ ] `npm run build` completes with no errors
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] Google PageSpeed (mobile) ≥ 75
- [ ] Google PageSpeed (desktop) ≥ 90
- [ ] No console errors in browser DevTools

### SEO
- [ ] `<title>` and `<meta description>` correct on all 9 pages
- [ ] OG image and tags present
- [ ] `/sitemap.xml` accessible and lists all pages
- [ ] `/robots.txt` accessible
- [ ] JSON-LD valid at https://validator.schema.org
- [ ] All images have descriptive alt attributes

### Production (on Hostinger)
- [ ] Site loads over HTTPS with valid SSL certificate
- [ ] HTTP → HTTPS redirect works
- [ ] API routes work on live domain (test form submissions)
- [ ] Environment variables set correctly on server
- [ ] No 500 errors in production

---

## 19. Go-Live Checklist

- [ ] `npm run build` → 0 errors, 0 TypeScript errors
- [ ] All placeholder content replaced with real client content
- [ ] Director photos uploaded and displaying
- [ ] Real testimonials added
- [ ] Client's actual email, phone, address in the site
- [ ] Resend sender domain verified
- [ ] Test form emails sent from live domain and received
- [ ] Google Analytics or other analytics set up (optional — ask client)
- [ ] Domain DNS propagated (check: https://dnschecker.org)
- [ ] SSL active and auto-renew enabled
- [ ] Submit sitemap to Google Search Console
- [ ] Share live URL with client for final sign-off
- [ ] Hand over to client:
  - Live URL + Hostinger hPanel credentials
  - GitHub repo access (if applicable)
  - Resend account credentials
  - Instructions for updating content (which files/components hold what text)

---

## Quick Command Reference

```bash
npm run dev          # Start local dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server (uses server.js)
npm run lint         # Run ESLint
npx tsc --noEmit     # TypeScript check only
```

---

*End of project.md v2.0 — Reference PRD.md for all content, design specs, and brand guidelines.*
