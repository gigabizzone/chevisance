# CLAUDE.md — Chevisance Shipping Website Project Context

This file is read automatically by Claude Code when you open this project.
Do not delete it. It tells Claude Code everything it needs to build the website correctly.

---

## Project Overview

**Client:** CHEVISANCE SHIPPING PVT. LTD.
**Type:** Corporate website — international freight forwarding company
**Location:** Mumbai, India
**Tagline:** "From Departure to Destination"
**Founded:** 2008 (as Chanting Sea Logistics, rebranded to Chevisance Shipping)

---

## Your 4 Reference Files (READ ALL BEFORE WRITING ANY CODE)

| File | Purpose |
|---|---|
| `PRD.md` | Design specs, brand colors, page list, SEO metadata, responsive breakpoints, performance targets |
| `project.md` | Complete implementation guide — folder structure, all component code, API routes, config files, animations library, deployment setup |
| `content.md` | **Every word on every page** — all headings, paragraphs, bullets, labels, form fields, stats, CTAs, FAQ Q&As. Use this as the single source of truth for copy. |
| `MEMORY.md` | Company background, director bios, service descriptions, logo assets. Use for context and any content gaps. |

---

## Tech Stack (Do Not Change)

- **Framework:** Next.js 14 with App Router (`src/app/`)
- **Language:** TypeScript throughout
- **Styling:** Tailwind CSS v3 with custom brand tokens (see `tailwind.config.ts` in `project.md`)
- **Animations:** Framer Motion (variants defined in `src/lib/animations.ts`)
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend via Next.js API routes
- **Icons:** Lucide React
- **Fonts:** next/font/google — Barlow (headings) + Open Sans (body)
- **Images:** next/image for all images (WebP, lazy loading, responsive srcsets)
- **Deployment:** Hostinger Node.js App via custom `server.js`

---

## Brand Colors (Use These Exactly)

```ts
primary:    '#1E4B5A'   // dark teal — used in header, footer, banner backgrounds
accent:     '#2DA5B4'   // bright teal — CTAs, links, highlights, pills
'bg-light': '#EBF4F6'   // light teal — alternating section backgrounds
'text-dark':'#1A2B30'   // near-black — body text
border:     '#CBD8DC'   // light border
orange:     '#E8663D'   // warm orange — stat numbers, numbered badges, accents
```

---

## Typography

```ts
fontFamily: {
  heading: ['var(--font-barlow)', 'sans-serif'],   // H1–H4, nav, buttons, tags
  body:    ['var(--font-open-sans)', 'sans-serif'], // paragraphs, labels, form text
}
```

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx                       ← root layout (fonts, global metadata)
│   ├── page.tsx                         ← Home page
│   ├── about-us/page.tsx
│   ├── services/
│   │   ├── page.tsx                     ← Services archive
│   │   ├── air-freight/page.tsx
│   │   ├── sea-freight/page.tsx
│   │   ├── domestic-logistics/page.tsx
│   │   └── warehouse-services/page.tsx
│   ├── contact-us/page.tsx
│   ├── request-a-quote/page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── quote/route.ts
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageBanner.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesStrip.tsx
│   │   ├── AboutSnippet.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProjectsGallery.tsx
│   │   ├── WorkingProcess.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactTeaser.tsx
│   ├── services/
│   │   ├── ServiceDetailLayout.tsx      ← shared template for all 4 service pages
│   │   └── ServiceSidebar.tsx
│   ├── shared/
│   │   ├── MarqueeTicker.tsx
│   │   ├── CTABanner.tsx
│   │   ├── SectionTag.tsx
│   │   ├── WorkingProcess.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ClientLogos.tsx
│   │   └── FAQAccordion.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       └── QuoteForm.tsx
├── lib/
│   ├── animations.ts                    ← fadeUp, fadeRight, zoomIn, staggerContainer
│   └── utils.ts                         ← cn() utility (clsx + tailwind-merge)
└── data/
    └── services.ts                      ← service row data for archive page
```

---

## Key Rules for Building

1. **All copy comes from `content.md`** — do not invent or paraphrase text. Use the exact words provided.
2. **All design decisions come from `PRD.md`** — colors, spacing, page layout, component structure.
3. **All code patterns come from `project.md`** — component templates, API route code, animation usage, Tailwind config.
4. **Use `<ServiceDetailLayout />` for all 4 service pages** — pass content as props, do not duplicate layout code.
5. **Use `next/image` for all images** — never raw `<img>` tags.
6. **Use Framer Motion variants from `src/lib/animations.ts`** — do not define inline animation objects.
7. **Use `.btn-primary`, `.input-base`, `.section-tag` CSS classes** (defined in `globals.css`) — do not write inline button or input styles.
8. **Forms use React Hook Form + Zod** — no uncontrolled inputs.
9. **API routes use Resend** — RESEND_API_KEY and CONTACT_EMAIL come from `.env.local`.
10. **SEO:** every page has `export const metadata` using the values in `content.md §Page Metadata`.

---

## Environment Variables Required (`.env.local`)

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@chevisanceshipping.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Content Gaps (Client to Supply Before Go-Live)

The following items are marked as `[client to provide]` in `content.md`:

- [ ] Phone number
- [ ] Email address
- [ ] Full office address
- [ ] Director headshot photos (Nishant Sutrave, Sakshi Sutrave)
- [ ] Real client testimonials (minimum 3)
- [ ] Partner/client logo files (5–6 logos, preferably SVG or PNG)
- [ ] Actual domain name (replace `yourdomain.com` in `.env.local` and `sitemap.ts`)
- [ ] Stock photos for Hero section, Features strip, Gallery section

---

## Quick Start Commands

```bash
npm install
npm run dev          # development server on http://localhost:3000
npm run build        # production build
npm run start        # run production build locally
```

---

## Deployment (Hostinger Node.js App)

1. `npm run build`
2. Upload `/.next`, `/public`, `package.json`, `package-lock.json`, `server.js` to Hostinger
3. Run `npm install --production` on the server
4. Set environment variables in Hostinger dashboard
5. Start with `node server.js` — Hostinger's Node.js App manager handles process management

See `server.js` code in `project.md §Deployment`.

---

*This file is part of the Chevisance Shipping website project context set.*
*Other files in this set: PRD.md · project.md · content.md · MEMORY.md*
