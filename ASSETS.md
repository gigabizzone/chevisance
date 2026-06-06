# Asset & Content Swap Guide — Chevisance Shipping

Everything below currently uses a **clearly labelled placeholder** so the site
builds and previews cleanly. Replace each item with the real asset/value before
go-live. Regenerate placeholders any time with:

```bash
node scripts/generate-placeholders.mjs
```

---

## 1. Text details (`src/lib/site.ts`)

All `[client to provide]` values live in one file — edit `src/lib/site.ts`:

| Field | Where it shows |
|---|---|
| `phone` | Header/About call-out, Footer, Contact cards, Sidebar, Quote form, JSON-LD |
| `email` | Footer, Contact cards, Sidebar, Quote form, JSON-LD |
| `address.full` | Footer, Contact "Our Office" card |
| `social.*` (LinkedIn / Facebook / Instagram / X) | Footer social icons |

Also set the real domain in **`.env.local`** → `NEXT_PUBLIC_SITE_URL`
(used by metadata, canonical URLs, sitemap, robots, JSON-LD).

---

## 2. Logos — `public/images/logos/`

| Placeholder file | Replace with | Used on |
|---|---|---|
| `logo-horizontal-white.svg` | White/light horizontal logo | Header (scrolled & inner pages), Footer |
| `logo-horizontal-dark.svg` | Dark horizontal logo | Header on the light home hero |
| `favicon.svg` (root `public/`) | Brand favicon (SVG and/or `favicon.png`) | Browser tab |

> You may keep the `.svg` names (drop in real SVGs) **or** supply PNG/JPG and
> update the `src` paths in `Header.tsx`, `Footer.tsx`, `ClientLogos.tsx`.

---

## 3. Stock photography — `public/images/stock/`

Suggested sources & sizes are in **PRD §12**. Recommended real photos:

| Placeholder file | Suggested photo |
|---|---|
| `og-image.svg` | 1200×630 social share image |
| `container-port-aerial.svg` | Aerial container port (all page banners) |
| `cta-port.svg` | Sunset/golden-hour port (CTA banners, sidebar card) |
| `hero-composite.svg` | Plane + ship + truck composite (home hero) |
| `about-collage.svg` | Logistics operations collage (home + about) |
| `why-choose-ship.svg` | Cargo ship, portrait crop |
| `cargo-ship-sea.svg` | Cargo ship at sea |
| `cargo-plane-airport.svg` | Cargo plane on runway |
| `trucks-highway.svg` | Fleet of trucks on highway |
| `warehouse-interior.svg` | Warehouse interior with forklifts |
| `freight-containers.svg` | Freight/containers close-up |
| `delivery-logistics.svg` | Delivery operations |
| `gallery-air.svg` / `gallery-warehouse.svg` / `gallery-express.svg` | Projects gallery tiles |

---

## 4. Director photos — `public/images/directors/`

| Placeholder file | Replace with |
|---|---|
| `nishant-sutrave.svg` | Nishant Sutrave headshot (min 400×400, portrait) |
| `sakshi-sutrave.svg` | Sakshi Sutrave headshot (min 400×400, portrait) |

---

## 5. Email (Resend)

In `.env.local` set `RESEND_API_KEY`, `CONTACT_EMAIL`, and `RESEND_FROM_EMAIL`
(a verified sender on your Resend domain). Form notifications + auto-replies are
handled by `src/app/api/contact/route.ts` and `src/app/api/quote/route.ts`.
