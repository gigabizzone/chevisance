import type { Metadata } from 'next'
import { Barlow, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/site'

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

const description =
  'International freight forwarding specialists in Mumbai. Air freight, sea freight, domestic logistics & warehousing. Get a free quote today.'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      'CHEVISANCE SHIPPING PVT. LTD. — International Freight Forwarding, Mumbai',
    template: '%s — Chevisance Shipping',
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    'freight forwarding Mumbai',
    'international freight forwarder India',
    'air freight Mumbai',
    'sea freight Mumbai',
    'ocean freight India',
    'FCL LCL shipping',
    'domestic logistics India',
    'road freight FTL LTL',
    'bonded warehouse Mumbai',
    'customs clearance Nhava Sheva',
    'logistics company Mumbai',
    'cargo services India',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title:
      'CHEVISANCE SHIPPING PVT. LTD. — International Freight Forwarding, Mumbai',
    description,
    url: siteConfig.url,
    siteName: 'Chevisance Shipping Pvt. Ltd.',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/stock/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chevisance Shipping — From Departure to Destination',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'CHEVISANCE SHIPPING PVT. LTD. — International Freight Forwarding, Mumbai',
    description,
    images: ['/images/stock/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  category: 'business',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  description:
    'International freight forwarding and logistics services from Mumbai, India — air freight, sea freight, domestic logistics and warehousing.',
  slogan: siteConfig.tagline,
  foundingDate: String(siteConfig.founded),
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/images/stock/og-image.jpg`,
  logo: `${siteConfig.url}/images/logos/chevisance_shipping_horizantal_web_logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.countryCode,
  },
  areaServed: ['India', 'Asia', 'Europe', 'North America'],
  openingHours: siteConfig.hours.schemaOrg,
  knowsAbout: [
    'Air Freight',
    'Sea Freight',
    'Ocean Freight',
    'Domestic Logistics',
    'Warehousing',
    'Customs Clearance',
    'Supply Chain Management',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${openSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
