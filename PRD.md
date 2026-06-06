# PRD — Product Requirements Document
## CHEVISANCE SHIPPING PVT. LTD. Website

> **Version:** 2.0 | **Date:** 2026-06-06 | **Status:** Approved for Development
> **Client:** CHEVISANCE SHIPPING PVT. LTD., Mumbai, India
> **Change from v1.0:** Platform changed from WordPress to **Next.js** (client request — performance, security, no plugin maintenance)

---

## 1. Project Overview

| Field | Detail |
|---|---|
| Project Name | Chevisance Shipping Corporate Website |
| Client | CHEVISANCE SHIPPING PVT. LTD. |
| Website Type | Corporate / B2B Service Website |
| Platform | Next.js 14 (App Router) + React + TypeScript + Tailwind CSS |
| Hosting | Hostinger — Node.js App |
| Primary Goal | Generate freight enquiry leads & establish digital brand credibility |
| Tagline | "From Departure to Destination" |
| Target Audience | B2B importers/exporters, logistics managers, business owners (India + global) |

### Business Objectives
1. Convert website visitors into freight enquiry leads via the "Request a Quote" form
2. Establish credibility for B2B logistics buyers across India and global markets
3. Clearly showcase all 4 service lines (Air Freight, Sea Freight, Domestic Logistics, Warehouse)
4. Present 18+ years of company experience and introduce the leadership team
5. Rank organically for freight forwarding keywords in Mumbai / India

---

## 2. Brand Identity

### 2.1 Color Palette
> Colors extracted directly from the Chevisance Shipping PNG logo assets.

| Role | Name | Hex | CSS Variable | Usage |
|---|---|---|---|---|
| Primary | Dark Teal | `#1E4B5A` | `--color-primary` | Header bg (sticky), footer, dark sections |
| Accent | Bright Teal | `#2DA5B4` | `--color-accent` | CTA buttons, icons, badge tags, hover states |
| Bg Light | Teal Tint | `#EBF4F6` | `--color-bg-light` | Alternating section backgrounds, card backgrounds |
| Text Dark | Near Black | `#1A2B30` | `--color-text-dark` | Body text, headings on light backgrounds |
| Text Light | White | `#FFFFFF` | `--color-text-light` | Text on dark sections |
| Border | Subtle | `#CBD8DC` | `--color-border` | Form borders, card dividers |
| Step/Tag | Accent Orange | `#E8663D` | `--color-orange` | Step numbers, badge tags (per design reference) |

### 2.2 Typography
> Loaded via `next/font/google` — zero layout shift, zero external font request.

| Element | Font | Weight | Desktop Size | Mobile Size |
|---|---|---|---|---|
| H1 (Hero) | Barlow | 800 ExtraBold | 56–70px | 36–42px |
| H2 (Section headings) | Barlow | 700 Bold | 36–42px | 28–32px |
| H3 (Card/sub headings) | Barlow | 600 SemiBold | 22–26px | 20px |
| Body text | Open Sans | 400 Regular | 15–16px | 15px |
| Nav links | Open Sans | 500 Medium | 15px | 16px |
| Button labels | Barlow | 600 SemiBold | 15px | 15px |
| Tag / Label pills | Open Sans | 600 | 12px uppercase | 12px |

### 2.3 Logo Asset Usage Guide

| File | Where to Use |
|---|---|
| `chevisance_shipping_horizantal_web_logo.png` | Header — sticky/scrolled state (dark logo on white) |
| `chevisance_shipping_horizantal_web_w_logo.png` | Header — transparent hero state (white logo on dark) |
| `chevisance_shipping_horizantal_big_W_logo.png` | Footer (white on dark teal) |
| `chevisance_shipping logo.png` | Square icon logo |
| `favicon.png` | Browser tab icon — place in `/app/favicon.ico` or `/public/favicon.png` |

All logo files go in `/public/images/logos/`.

### 2.4 Button Styles (Tailwind classes)

| Type | Classes | Hover |
|---|---|---|
| Primary CTA | `bg-accent text-white rounded-full px-7 py-3.5 font-semibold font-heading` | `hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg` |
| Primary + Arrow | Same + arrow icon (→) as SVG or lucide-react | Same |
| Outline | `border border-primary text-primary rounded-full px-7 py-3.5` | `hover:bg-primary hover:text-white` |
| Dark (footer/form) | `bg-primary text-white rounded px-7 py-3.5` | `hover:bg-accent` |

---

## 3. Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Framework | Next.js | 14 (App Router) | SSR/SSG, routing, API routes, image optimisation |
| UI Library | React | 18 | Component-based UI |
| Language | TypeScript | 5+ | Type safety |
| Styling | Tailwind CSS | 3 | Utility-first CSS |
| Fonts | next/font/google | built-in | Barlow + Open Sans, zero layout shift |
| Images | next/image | built-in | Automatic optimisation, lazy loading, WebP |
| Animations | Framer Motion | latest | Scroll/entrance animations, hover effects |
| Forms | React Hook Form | latest | Form state + validation |
| Validation | Zod | latest | Form schema validation |
| Email | Resend | latest | API route email delivery (form notifications) |
| Icons | Lucide React | latest | UI icons |
| SEO | Next.js Metadata API | built-in | Per-page meta, OG tags, structured data |
| Hosting | Hostinger Node.js | — | Deployed as Node.js app |

### npm Package List

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^3.0.0",
    "zod": "^3.0.0",
    "resend": "^3.0.0",
    "lucide-react": "^0.383.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

---

## 4. Site Architecture

```
/ (Home)
├── /about-us
├── /services
│   ├── /services/air-freight
│   ├── /services/sea-freight
│   ├── /services/domestic-logistics
│   └── /services/warehouse-services
├── /contact-us
├── /request-a-quote
└── /api
    ├── /api/contact      (POST — contact form handler)
    └── /api/quote        (POST — quote form handler)
```

### Navigation Menu

**Desktop:**
`Home` | `About Us` | `Services ▾` | `Contact Us` | `[Get a Quote →]` (pill CTA button)

**Services Dropdown:**
Air Freight | Sea Freight | Domestic Logistics | Warehouse Services

---

## 5. Global Components

### 5.1 Header

| Property | Spec |
|---|---|
| Component | `components/layout/Header.tsx` |
| Default (hero) | `position: fixed`, transparent background, white logo (`_w_` variant), white nav links |
| Scrolled (>80px) | `bg-primary` (`#1E4B5A`), dark-variant logo swaps in via state |
| Logo swap | Use `useEffect` scroll listener; swap `src` prop on `<Image>` based on `isScrolled` state |
| CTA Button | "Get a Quote →" — `bg-accent` pill, links to `/request-a-quote` |
| Mobile (<992px) | Hamburger button → slide-down or drawer menu with all links + CTA |
| Transition | `transition-all duration-300` on header for smooth bg change |

### 5.2 Footer

| Property | Spec |
|---|---|
| Component | `components/layout/Footer.tsx` |
| Background | `bg-primary` (`#1E4B5A`) |
| Layout | 4-column grid: Logo+social / Company links / Services links / Contact info |
| Col 1 | White logo + tagline + LinkedIn, Facebook, Instagram, X icons (lucide-react) |
| Col 2 | Company: Home, About Us, Services, Contact Us |
| Col 3 | Services: Air Freight, Sea Freight, Domestic Logistics, Warehouse, Get a Quote |
| Col 4 | Contact: Address (Mumbai), Email, Phone |
| Bottom bar | `border-t border-accent` — copyright text centred |

### 5.3 Inner Page Banner

| Property | Spec |
|---|---|
| Component | `components/layout/PageBanner.tsx` |
| Props | `title: string`, `breadcrumb: string` |
| Background | Port/container image as `next/image` fill + `bg-primary/70` overlay |
| Height | `min-h-[260px]` |
| Content | H1 white centred 42px + breadcrumb in accent teal below |
| Reused on | All inner pages (About, Services, individual services, Contact, Quote) |

### 5.4 CTA Banner

| Property | Spec |
|---|---|
| Component | `components/shared/CTABanner.tsx` |
| Props | `headline?: string`, `buttonText?: string`, `buttonHref?: string` |
| Background | `bg-primary` + port image overlay with opacity |
| Default headline | "Delivering Smarter Logistics and Transportation Services for a Better Business" |
| Button | "Make An Enquiry →" — `bg-accent` pill |

### 5.5 Scrolling Marquee Ticker

| Property | Spec |
|---|---|
| Component | `components/shared/MarqueeTicker.tsx` |
| Background | `bg-accent` (`#2DA5B4`) |
| Text | White uppercase 13px letter-spacing-2 |
| Content | GLOBAL SHIPPING ✈ AIR FREIGHT ✈ SEA FREIGHT ✈ SUPPLY CHAIN ✈ WAREHOUSING ✈ DOMESTIC LOGISTICS ✈ CUSTOMS CLEARANCE ✈ |
| Animation | CSS `@keyframes marquee` or Framer Motion `animate={{ x: [0, '-50%'] }}` loop |

---

## 6. Page-by-Page Specifications

---

### PAGE 1 — Home (`/`)

**Metadata:**
```ts
title: 'CHEVISANCE SHIPPING PVT. LTD. — International Freight Forwarding, Mumbai'
description: 'International freight forwarding specialists in Mumbai. Air freight, sea freight, domestic logistics & warehousing. Get a free quote today.'
```

#### Section 1 — Hero

| Property | Spec |
|---|---|
| Background | `bg-[#EBF4F6]` gradient to white. Right: `next/image` logistics composite |
| Layout | 2-column (`lg:grid-cols-2`), vertically centred |
| H1 | "From Departure to Destination" — Barlow 800, `text-primary` |
| Subtext | Intro paragraph — Open Sans 400, `text-text-dark` |
| CTA | "Explore Services →" — primary button → `/services` |
| Trust strip | Avatar row + "500+ Satisfied Customers" |
| Animation | Framer Motion: H1 fadeRight, subtext fadeRight delay 0.2s, image fadeLeft delay 0.3s |

#### Section 2 — Features Strip

- Background: `bg-primary`
- Tag + H2 "What Makes Us the Best Cargo Company"
- 3 image cards (cargo ship / freight / delivery)
- Each card: `next/image` full-bleed, gradient overlay, white title, accent icon badge

#### Section 3 — About Snippet

- Background: white
- 2-col: logistics collage image left | stats + feature rows right
- Stat cards: "18+ Years Experience" (dark) / "98% Customer Satisfaction" (teal)
- CTA: "More About Us →" → `/about-us` + phone number

#### Section 4 — Services Grid

- Background: `bg-primary`
- 4-col service cards, each with image + icon + title + short description + "Explore More →" link
- Cards link to: `/services/air-freight`, `/services/sea-freight`, `/services/domestic-logistics`, `/services/warehouse-services`

#### Section 5 — Why Choose Us

- Background: `bg-[#EBF4F6]`
- 3-col: 3 feature rows left | cargo ship image | 3 feature rows right

#### Section 6 — Projects Gallery

- Background: `bg-primary`
- 3-col image grid with hover overlay (title + arrow icon)

#### Section 7 — Working Process

- Background: `bg-[#EBF4F6]`
- 3 horizontal steps with dotted connector line

#### Section 8 — Marquee Ticker

See §5.5 — `<MarqueeTicker />`

#### Section 9 — Contact Teaser Form

- 2-col: port/truck image left | contact form right (`<ContactForm />`)
- H2 "Need Help? We're Here"

#### Section 10 — Testimonials

- Background: `bg-primary`
- 3 placeholder cards, star ratings, quotes
- Client to provide real testimonials before go-live

---

### PAGE 2 — About Us (`/about-us`)

**Metadata:**
```ts
title: 'About Us — Chevisance Shipping Pvt. Ltd.'
description: '18+ years of freight forwarding expertise. Meet the leadership team at Chevisance Shipping — trusted logistics partner, Mumbai.'
```

| Section | Component / Content |
|---|---|
| Page Banner | `<PageBanner title="About Us" breadcrumb="Home / About Us" />` |
| Mission & Vision | 2-col: collage image + stats (18+ yrs / 40+ team / 98%) + mission tabs |
| Working Process | `<WorkingProcess />` (shared component) |
| Marquee Ticker | `<MarqueeTicker />` |
| Why Trusted | 2-col: trucks image + 3 icon rows (Global Ops / Intl Transport / Warehousing) |
| Leadership Team | 2 director cards — Nishant Sutrave + Sakshi Sutrave |
| Testimonials | `<Testimonials />` (shared) |
| Client Logos | `<ClientLogos />` — 5 partner logos, greyscale |
| CTA Banner | `<CTABanner headline="Ready to Partner With Us?" />` |

**Director Card Content:**

**Nishant Sutrave** — Director & Promoter
15+ years in import/export logistics. Expert in freight forwarding, customs clearance, and project cargo management near Nhava Sheva. Leads a team of 40+ skilled professionals.

**Sakshi Sutrave** — Director & Business Development Manager
20+ years in global logistics. Secured multimillion-dollar contracts and built a partner network across Asia, Europe, and North America.

---

### PAGE 3 — Services Archive (`/services`)

**Metadata:**
```ts
title: 'Freight & Logistics Services — Chevisance Shipping Pvt. Ltd.'
description: 'Air freight, sea freight, domestic logistics & warehousing. End-to-end cargo management across India and worldwide.'
```

| Section | Content |
|---|---|
| Page Banner | `<PageBanner title="Our Services" />` |
| Intro | Tag + H2 "Reliable Global Freight & Cargo Services" + paragraph |
| Services List | 4 alternating rows (image/content) — numbered 01–04 |
| Why Choose | Dark teal bg, 4 icon cards (Quick Delivery / Global Network / Cost-Effective / 24/7 Support) |
| Working Process | `<WorkingProcess />` |
| Embedded Quote Form | `<QuoteForm />` in split-panel design |
| FAQ Accordion | 5–6 questions (see §6.9) |

**Service Rows (alternating):**

| # | Service | Layout | Tag |
|---|---|---|---|
| 01 | Sea Freight | Image LEFT / Content RIGHT | "Sea Freight" |
| 02 | Air Freight | Content LEFT / Image RIGHT | "Air Freight" |
| 03 | Domestic Logistics | Image LEFT / Content RIGHT | "Road Transport" |
| 04 | Warehouse Services | Content LEFT / Image RIGHT | "Warehousing" |

Each row: numbered badge + tag pill + H3 + bullet list + "Explore More →" CTA linking to the service page.

---

### PAGES 4–7 — Individual Service Pages

All 4 use one shared layout template (`ServiceDetailLayout`). Swap content via props or a data file.

**Layout:** 2-column with sidebar (`lg:grid-cols-[2fr_1fr]`)

**Main Content:**
1. `next/image` hero photo
2. H2 — service headline
3. Body paragraphs (2)
4. 2 feature pill cards (icon + title + description)
5. Teal callout box (key quote)
6. H3 "Key Benefits"
7. Checklist (icon + benefit text)

**Sidebar:**
1. Services nav widget — all 4 services listed, current page highlighted `bg-accent`
2. Contact card — port image bg + `bg-primary/80` overlay + phone + email + "Contact Us →" button

**Below 2-col:**
- Client logos row (`<ClientLogos />`)
- `<CTABanner />`

---

#### PAGE 4 — Air Freight (`/services/air-freight`)

```ts
title: 'Air Freight Services Mumbai — Chevisance Shipping'
description: 'Fast & reliable international air cargo solutions. Door-to-door delivery, customs clearance, global carrier network.'
```

| Element | Content |
|---|---|
| H2 | "Fast, Reliable & Global Air Cargo Solutions" |
| Feature pills | Door-to-Door Delivery / End-to-End Visibility |
| Callout | "From urgent shipments to standard cargo — we deliver on time, every time." |
| Benefits (6) | Fast Delivery Times / Global Carrier Network / Flexible Options / Shipment Tracking / Customs Brokerage / Competitive Pricing |

---

#### PAGE 5 — Sea Freight (`/services/sea-freight`)

```ts
title: 'Sea Freight / Ocean Freight Mumbai — Chevisance Shipping'
description: 'FCL, LCL, consolidation, liquid cargo & dangerous goods. Global ocean freight from major Indian ports.'
```

| Element | Content |
|---|---|
| H2 | "Reliable Global Ocean Freight Solutions" |
| Feature pills | FCL & LCL Solutions / Dangerous Goods Expertise |
| Callout | "From FCL to specialised liquid cargo — we manage your ocean shipments end-to-end." |
| Capabilities (9) | FCL / LCL / Import & Export / Consolidation / Specialised Cargo / Liquid Cargo / Dangerous Goods / Door-to-Door / Global Freight Management |

---

#### PAGE 6 — Domestic Logistics (`/services/domestic-logistics`)

```ts
title: 'Domestic Logistics Services India — Chevisance Shipping'
description: 'FTL & LTL road freight across India and Bangladesh. Intercity cargo movement with tracking and customs support.'
```

| Element | Content |
|---|---|
| H2 | "Domestic Road Freight Across India & the Subcontinent" |
| Feature pills | Nationwide Coverage / India–Bangladesh Transit |
| Callout | "From Mumbai to the Northeast — we move your cargo reliably across India." |
| Capabilities (6) | FTL / LTL / Intercity Freight / Commercial Cargo / Customs Coordination / Tracking & Reporting |

---

#### PAGE 7 — Warehouse Services (`/services/warehouse-services`)

```ts
title: 'Warehouse & Storage Services — Chevisance Shipping Mumbai'
description: 'Bonded warehouse, open container storage, stuffing & de-stuffing. Integrated warehousing solutions in Mumbai.'
```

| Element | Content |
|---|---|
| H2 | "Secure, Flexible & Cost-Effective Warehousing Solutions" |
| Feature pills | Custom Bonded Warehousing / Value-Added Services |
| Callout | "One roof. Complete logistics — storage, handling, distribution, and more." |
| Capabilities (8) | Custom Bonded Warehousing / General Goods Storage / Open Container Storage / Container Stuffing & De-stuffing / Inventory Management / Agricultural Commodity Handling / Empty Container Parking & Repair / End-to-End Distribution |

---

### PAGE 8 — Contact Us (`/contact-us`)

```ts
title: 'Contact Us — Chevisance Shipping Mumbai'
description: 'Get in touch with Chevisance Shipping Pvt. Ltd. for all freight and logistics enquiries. Office in Mumbai, India.'
```

| Section | Content |
|---|---|
| Page Banner | `<PageBanner title="Contact Us" />` |
| Contact Section | 2-col: truck image left + `<ContactForm />` right |
| Info Cards | 4-col: Email / Phone / Office Location / Opening Hours |
| CTA Banner | Dark teal. "Delivering Smarter Logistics Solutions." |

**Contact Info (client to confirm):**
- Email: [client to provide]
- Phone: [client to provide]
- Address: Mumbai, India (full address from client)
- Opening Hours: Monday–Saturday, 10:00am–6:00pm IST

---

### PAGE 9 — Request a Quote (`/request-a-quote`)

```ts
title: 'Request a Freight Quote — Chevisance Shipping'
description: 'Submit a freight forwarding quote request online. Air, sea, domestic & warehouse services. Fast response guaranteed.'
```

| Section | Content |
|---|---|
| Page Banner | `<PageBanner title="Request a Quote" />` |
| How It Works | 3-step card section (Submit / Process / Receive Quote) |
| Quote Form | Full-width `<QuoteForm />` in split-panel design |
| FAQ Accordion | 5–6 Q&As |
| CTA Banner | "Ready to Ship? Let's Talk." |

**Quote Form Fields:**

```
Personal Data:
  Your Name*      |  Phone Number*
  Email Address*

Shipment Information:
  Freight Type*      |  Departure City/Port*  |  Destination City/Port*
  Commodity/Goods*   |  Company Name
  Est. Weight (kg)   |  Additional Notes (textarea)

Options:
  ☐ Incoterms Support Required
  ☐ Express / Urgent Delivery
  ☐ Cargo Insurance Required

[ SUBMIT REQUEST ] — full-width dark teal button
```

---

### FAQ Questions (Services Archive + Quote Pages)
1. What information do I need to provide for a quote?
2. How quickly will I receive a quotation?
3. Do you handle customs clearance as part of the service?
4. What types of cargo do you handle?
5. Do you offer door-to-door delivery?
6. Can you handle dangerous goods or liquid cargo?

---

## 7. Animations (Framer Motion)

All scroll/entrance animations via **Framer Motion** `motion` components.

**Standard variants to define in `lib/animations.ts`:**

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

export const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay, ease: 'easeOut' }
  })
}
```

**Usage pattern:**
```tsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  custom={0.2}
>
  ...content
</motion.div>
```

---

## 8. SEO — Metadata per Page

Using the Next.js 14 **Metadata API** (no third-party plugin needed).

| Page | Title | Description |
|---|---|---|
| Home | CHEVISANCE SHIPPING PVT. LTD. — International Freight Forwarding, Mumbai | International freight forwarding specialists in Mumbai. Air freight, sea freight, domestic logistics & warehousing. Get a free quote today. |
| About | About Us — Chevisance Shipping Pvt. Ltd. | 18+ years of freight forwarding expertise. Meet the leadership team at Chevisance Shipping — trusted logistics partner, Mumbai. |
| Services | Freight & Logistics Services — Chevisance Shipping | Air freight, sea freight, domestic logistics & warehousing. End-to-end cargo management across India and worldwide. |
| Air Freight | Air Freight Services Mumbai — Chevisance Shipping | Fast & reliable international air cargo solutions. Door-to-door delivery, customs clearance, global carrier network. |
| Sea Freight | Sea Freight / Ocean Freight Mumbai — Chevisance Shipping | FCL, LCL, consolidation, liquid cargo & dangerous goods. Global ocean freight from major Indian ports. |
| Domestic | Domestic Logistics Services India — Chevisance Shipping | FTL & LTL road freight across India and Bangladesh. Intercity cargo movement with tracking and customs support. |
| Warehouse | Warehouse & Storage Services — Chevisance Shipping Mumbai | Bonded warehouse, open container storage, stuffing & de-stuffing. Integrated warehousing solutions in Mumbai. |
| Contact | Contact Us — Chevisance Shipping Mumbai | Get in touch with Chevisance Shipping Pvt. Ltd. for all freight and logistics enquiries. Office in Mumbai, India. |
| Quote | Request a Freight Quote — Chevisance Shipping | Submit a freight forwarding quote request online. Air, sea, domestic & warehouse services. Fast response guaranteed. |

**Additional SEO:**
- OpenGraph tags (og:title, og:description, og:image) for all pages
- Twitter card meta tags
- LocalBusiness JSON-LD structured data in root `layout.tsx`
- `robots.txt` and `sitemap.xml` generated via `app/robots.ts` and `app/sitemap.ts`
- All `<Image>` components must include descriptive `alt` text

---

## 9. Form API Routes

Both forms submit to Next.js API routes that send emails via **Resend**.

| Form | Route | Email Subject | Sends To |
|---|---|---|---|
| Contact Us | `POST /api/contact` | "New Enquiry — [Name] — Chevisance Shipping" | Client email |
| Request a Quote | `POST /api/quote` | "Quote Request — [Freight Type] — [Name]" | Client email |

Both routes also send a confirmation auto-reply to the submitter.

**Resend Setup:**
1. Create free account at https://resend.com (100 emails/day free)
2. Add and verify sender domain
3. Store API key in `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_EMAIL=info@chevisanceshipping.com
   ```

---

## 10. Responsive Design

| Breakpoint | Tailwind Prefix | Width | Layout |
|---|---|---|---|
| Mobile | (default) | <640px | Single column, stacked, hamburger nav |
| Tablet | `md:` | 640–1023px | 2-col max, service cards 2×2 |
| Desktop | `lg:` | 1024–1279px | Full multi-column layouts |
| Wide | `xl:` | ≥1280px | Max-width container 1280px centred |

All interactive elements: minimum touch target 44×44px on mobile.

---

## 11. Performance Requirements

| Metric | Target |
|---|---|
| Google PageSpeed (mobile) | ≥ 75 |
| Google PageSpeed (desktop) | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Core Web Vitals | All green |

Achieved via:
- `next/image`: automatic WebP conversion, lazy loading, blur placeholder
- `next/font`: fonts inlined, zero external requests
- Static generation (`generateStaticParams`) for service sub-pages
- Minimal client-side JS (animations only where visible)

---

## 12. Stock Photography Guidelines

**Sources:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Search: "cargo ship", "air freight", "container port", "freight truck", "warehouse forklift"

**Image Storage:** `/public/images/stock/`

**Minimum Image Set:**

| # | Description | Used On | Min Size |
|---|---|---|---|
| 1 | Cargo plane at airport runway | Air freight hero, Services row | 1920×1080 |
| 2 | Cargo ship at sea | Sea freight hero, Services row 01 | 1920×1080 |
| 3 | Container port aerial | All page banners | 1920×600 |
| 4 | Fleet of trucks on highway | Domestic logistics, Contact | 1920×1080 |
| 5 | Warehouse interior with forklifts | Warehouse hero | 1920×1080 |
| 6 | Globe + logistics collage | Homepage hero right, About page | 900×900 |
| 7 | Sunset port / golden hour | CTA banners, testimonials bg | 1920×900 |
| 8 | Plane + ship + truck composite | Homepage hero right panel | 900×700 |

All images to be placed in `/public/images/stock/` with descriptive filenames (e.g., `cargo-ship-sea.jpg`).

---

## 13. Content Checklist (Client to Provide)

- [ ] Business email address (for form notifications + Resend sender)
- [ ] Phone number(s)
- [ ] Full office address (Mumbai)
- [ ] Opening hours
- [ ] Director photos — Nishant & Sakshi Sutrave (min 400×400px, portrait)
- [ ] Client/partner company logos (5–6 logos for logo row)
- [ ] Real testimonial quotes (minimum 3, with permission to publish)
- [ ] Social media profile URLs (LinkedIn, Facebook, Instagram, X)
- [ ] Any awards, certifications, or accreditation badges

---

*End of PRD v2.0*
