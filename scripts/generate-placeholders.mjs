// Generates labelled placeholder image assets (SVG) so the site renders
// cleanly before real photography/logos arrive. Run: `node scripts/generate-placeholders.mjs`
// Replace each file with the real asset (matching the filename) before go-live.
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const PRIMARY = '#1E4B5A'
const ACCENT = '#2DA5B4'
const BG_LIGHT = '#EBF4F6'
const ORANGE = '#E8663D'

function write(relPath, content) {
  const full = join(publicDir, relPath)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, content.trim() + '\n', 'utf8')
  console.log('  ✓', relPath)
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Generic stock photo placeholder
function stock(w, h, label, note = 'PLACEHOLDER — replace with real photo') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${PRIMARY}"/>
      <stop offset="1" stop-color="${ACCENT}"/>
    </linearGradient>
    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="2" fill="#ffffff" opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#dots)"/>
  <text x="50%" y="48%" fill="#ffffff" font-family="Arial, sans-serif" font-size="${Math.round(Math.min(w, h) / 12)}" font-weight="700" text-anchor="middle">${esc(label)}</text>
  <text x="50%" y="58%" fill="#ffffff" opacity="0.7" font-family="Arial, sans-serif" font-size="${Math.round(Math.min(w, h) / 28)}" text-anchor="middle">${esc(note)}</text>
</svg>`
}

// Brand wordmark logo (white or dark variant)
function logo(variant) {
  const text = variant === 'white' ? '#ffffff' : PRIMARY
  const sub = variant === 'white' ? '#9fd3da' : '#5b7a83'
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="56" viewBox="0 0 240 56" role="img" aria-label="Chevisance Shipping logo placeholder">
  <rect x="2" y="10" width="36" height="36" rx="9" fill="${ACCENT}"/>
  <path d="M11 32 h18 l-3 6 h-12 z" fill="#ffffff"/>
  <circle cx="20" cy="22" r="5" fill="${ORANGE}"/>
  <text x="48" y="27" fill="${text}" font-family="Arial, sans-serif" font-size="19" font-weight="800" letter-spacing="0.5">CHEVISANCE</text>
  <text x="48" y="44" fill="${sub}" font-family="Arial, sans-serif" font-size="10.5" font-weight="600" letter-spacing="2.6">SHIPPING PVT. LTD.</text>
</svg>`
}

// Director avatar placeholder
function director(name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480" viewBox="0 0 400 480" role="img" aria-label="${esc(name)} photo placeholder">
  <rect width="400" height="480" fill="${BG_LIGHT}"/>
  <circle cx="200" cy="180" r="80" fill="${ACCENT}" opacity="0.35"/>
  <path d="M80 460 q120 -160 240 0 z" fill="${ACCENT}" opacity="0.35"/>
  <text x="50%" y="50%" fill="${PRIMARY}" font-family="Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">${esc(name)}</text>
  <text x="50%" y="55%" fill="${PRIMARY}" opacity="0.6" font-family="Arial, sans-serif" font-size="13" text-anchor="middle">Photo — client to provide</text>
</svg>`
}

function favicon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${PRIMARY}"/>
  <path d="M16 38 h32 l-6 10 h-20 z" fill="#ffffff"/>
  <circle cx="32" cy="24" r="9" fill="${ORANGE}"/>
</svg>`
}

console.log('Generating placeholder assets…')

// Logos
write('images/logos/logo-horizontal-white.svg', logo('white'))
write('images/logos/logo-horizontal-dark.svg', logo('dark'))

// Favicon + OG
write('favicon.svg', favicon())
write('images/stock/og-image.svg', stock(1200, 630, 'CHEVISANCE SHIPPING', 'From Departure to Destination'))

// Banners / wide
write('images/stock/container-port-aerial.svg', stock(1920, 600, 'CONTAINER PORT (aerial)'))
write('images/stock/cta-port.svg', stock(1920, 900, 'SUNSET PORT'))

// Hero / about
write('images/stock/hero-composite.svg', stock(900, 700, 'PLANE • SHIP • TRUCK'))
write('images/stock/about-collage.svg', stock(900, 720, 'LOGISTICS COLLAGE'))
write('images/stock/why-choose-ship.svg', stock(720, 960, 'CARGO SHIP'))

// Service / feature
write('images/stock/cargo-ship-sea.svg', stock(1920, 1080, 'CARGO SHIP AT SEA'))
write('images/stock/cargo-plane-airport.svg', stock(1920, 1080, 'CARGO PLANE'))
write('images/stock/trucks-highway.svg', stock(1920, 1080, 'TRUCKS ON HIGHWAY'))
write('images/stock/warehouse-interior.svg', stock(1920, 1080, 'WAREHOUSE INTERIOR'))
write('images/stock/freight-containers.svg', stock(1280, 960, 'FREIGHT CONTAINERS'))
write('images/stock/delivery-logistics.svg', stock(1280, 960, 'DELIVERY OPERATIONS'))

// Gallery
write('images/stock/gallery-air.svg', stock(800, 800, 'AIR FREIGHT'))
write('images/stock/gallery-warehouse.svg', stock(800, 800, 'WAREHOUSING'))
write('images/stock/gallery-express.svg', stock(800, 800, 'EXPRESS DELIVERY'))

// Directors
write('images/directors/nishant-sutrave.svg', director('Nishant Sutrave'))
write('images/directors/sakshi-sutrave.svg', director('Sakshi Sutrave'))

console.log('Done.')
