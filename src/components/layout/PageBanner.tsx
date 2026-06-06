import Image from 'next/image'
import Link from 'next/link'

interface PageBannerProps {
  title: string
  breadcrumb: string
}

/**
 * Inner-page hero banner (PRD §5.3).
 * Renders the breadcrumb as a real navigable trail and exposes
 * BreadcrumbList JSON-LD for richer search results.
 */
export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
  const crumbs = breadcrumb.split('/').map((c) => c.trim())

  // Map each crumb label to a path for the trail.
  const hrefFor = (index: number): string => {
    if (index === 0) return '/'
    const known: Record<string, string> = {
      'About Us': '/about-us',
      Services: '/services',
      'Contact Us': '/contact-us',
      'Request a Quote': '/request-a-quote',
      'Air Freight': '/services/air-freight',
      'Sea Freight': '/services/sea-freight',
      'Domestic Logistics': '/services/domestic-logistics',
      'Warehouse Services': '/services/warehouse-services',
      'Privacy Policy': '/privacy-policy',
      'Terms of Service': '/terms-of-service',
    }
    return known[crumbs[index]] ?? '#'
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((name, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: hrefFor(i),
    })),
  }

  return (
    <section className="relative min-h-[260px] flex items-center justify-center text-center">
      <Image
        src="/images/stock/container-port-aerial.jpg"
        alt="Aerial view of a container port"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/72" />
      <div className="relative z-10 py-16 px-4">
        <h1 className="font-heading font-bold text-white text-[32px] sm:text-[42px] md:text-[48px] mb-3">
          {title}
        </h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-2 text-sm font-medium">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1
              return (
                <li key={i} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-accent">{c}</span>
                  ) : (
                    <>
                      <Link
                        href={hrefFor(i)}
                        className="text-white/80 hover:text-accent transition-colors"
                      >
                        {c}
                      </Link>
                      <span className="text-white/40">/</span>
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </section>
  )
}
