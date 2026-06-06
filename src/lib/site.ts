/**
 * Central site configuration.
 *
 * All client-supplied details that are still pending ("[client to provide]")
 * are kept here so they can be swapped in one place before go-live.
 * Replace each PLACEHOLDER_* value with the real detail provided by the client.
 */

export const PLACEHOLDER = '[client to provide]'

export const siteConfig = {
  name: 'CHEVISANCE SHIPPING PVT. LTD.',
  shortName: 'Chevisance Shipping',
  tagline: 'From Departure to Destination',
  motto: 'Customer Satisfaction and Continuity in Business is Our Motto.',
  founded: 2008,

  // Used by metadata, sitemap, robots, JSON-LD. Pulls from env when available.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',

  // ── Contact details ───────────────────────────────────────────────
  phone: '+91 900 469 5256',
  phoneLabel: 'Call Us Anytime',
  email: 'nishant@chevisance.com',
  address: {
    street:
      '11th floor / 1111, The Summit Business Bay - Omkar, Nr. WEH Metro, opp. PVR cinema, Gundavali, Andheri - Kurla Road, Andheri East',
    locality: 'Mumbai',
    region: 'Maharashtra',
    postalCode: '400093',
    country: 'India',
    countryCode: 'IN',
    full: '11th floor / 1111, The Summit Business Bay - Omkar, Nr. WEH Metro, opp. PVR cinema, Gundavali, Andheri - Kurla Road, Andheri East, Mumbai - 400093, Maharashtra, INDIA',
  },
  hours: {
    days: 'Monday – Saturday',
    time: '10:00 AM – 6:00 PM IST',
    schemaOrg: 'Mo-Sa 10:00-18:00',
  },
} as const

export type SiteConfig = typeof siteConfig
