import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
]

const serviceLinks = [
  { href: '/services/air-freight', label: 'Air Freight' },
  { href: '/services/sea-freight', label: 'Sea Freight' },
  { href: '/services/domestic-logistics', label: 'Domestic Logistics' },
  { href: '/services/warehouse-services', label: 'Warehouse Services' },
  { href: '/request-a-quote', label: 'Get a Quote' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Logo + tagline */}
          <div>
            <Image
              src="/images/logos/chevisance_shipping_horizantal_web_w_logo.png"
              alt="Chevisance Shipping Pvt. Ltd."
              width={220}
              height={55}
              className="h-12 w-auto mb-5"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              We deliver reliable freight forwarding and logistics solutions
              worldwide — with safety, speed, and dedication.
            </p>
          </div>

          {/* Col 2 — Company */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span>
                  <span className="text-white">Head Office</span>
                  <br />
                  <span className="text-white/60">{siteConfig.address.full}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-accent">
        <div className="container-site py-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 text-sm text-white/70 text-center">
          <p>© 2024 CHEVISANCE SHIPPING PVT. LTD. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/terms-of-service"
              className="hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p>
            Website Engineered with{' '}
            <span aria-label="love" role="img" className="text-red-500">
              ❤️
            </span>{' '}
            by{' '}
            <a
              href="https://gigawebzone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline"
            >
              GigaWebZone LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
