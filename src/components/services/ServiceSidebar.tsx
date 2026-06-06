import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, ChevronRight } from 'lucide-react'
import { serviceNavLinks } from '@/data/services'
import { siteConfig } from '@/lib/site'

interface ServiceSidebarProps {
  currentSlug: string
}

export default function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-28 self-start">
      {/* Services nav widget */}
      <div className="bg-bg-light rounded-xl p-6">
        <h3 className="font-heading font-semibold text-lg mb-4 text-primary">
          Logistics Services
        </h3>
        <nav className="space-y-2" aria-label="Services">
          {serviceNavLinks.map((link) => {
            const isActive = link.href === currentSlug
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`sidebar-nav-item ${isActive ? 'active' : 'bg-white'}`}
              >
                {link.name}
                <ChevronRight size={16} />
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Contact card */}
      <div className="relative rounded-xl overflow-hidden p-7 text-white">
        <Image
          src="/images/stock/cta-port.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10">
          <h3 className="font-heading font-semibold text-xl mb-2 text-white">
            Call Us Anytime
          </h3>
          <p className="text-white/75 text-sm mb-6">
            We&apos;re here to help with all your freight needs
          </p>
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="hover:text-accent transition-colors"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-accent transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <Link href="/contact-us" className="btn-primary w-full justify-center">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </aside>
  )
}
