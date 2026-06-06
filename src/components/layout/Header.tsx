'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
]

const services = [
  { name: 'Air Freight', href: '/services/air-freight' },
  { name: 'Sea Freight', href: '/services/sea-freight' },
  { name: 'Domestic Logistics', href: '/services/domestic-logistics' },
  { name: 'Warehouse Services', href: '/services/warehouse-services' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Logo contrast: the home hero has a LIGHT background (needs the dark logo at
  // the top), while inner page banners are DARK (need the white logo). Once the
  // header is scrolled it is always solid dark teal, so use the white logo.
  // Dark surface = header scrolled (solid teal) OR an inner page (dark banner
  // behind the transparent header). The home hero is LIGHT, so at the top of the
  // home page nav links must be dark to stay visible.
  const onDark = isScrolled || !isHome

  const logoSrc = onDark
    ? '/images/logos/chevisance_shipping_horizantal_web_w_logo.png'
    : '/images/logos/chevisance_shipping_horizantal_web_logo.png'

  const navLinkClass = `text-[15px] font-body font-medium transition-colors hover:text-accent ${
    onDark ? 'text-white' : 'text-primary'
  }`

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo (swaps dark/white based on scroll) */}
        <Link href="/" aria-label="Chevisance Shipping — home">
          <Image
            src={logoSrc}
            alt="Chevisance Shipping Pvt. Ltd."
            width={200}
            height={50}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 ${navLinkClass}`}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services <ChevronDown size={16} />
            </Link>
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-3 w-56">
                <div className="bg-white rounded-lg shadow-card-hover overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-3 text-sm text-text-dark hover:bg-bg-light hover:text-primary transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/contact-us" className={navLinkClass}>
            Contact Us
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/request-a-quote"
          className="hidden lg:inline-flex btn-primary"
        >
          Get a Quote <ArrowRight size={18} />
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden ${onDark ? 'text-white' : 'text-primary'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-accent/20 px-6 py-4 space-y-1">
          {[
            { href: '/', label: 'Home' },
            { href: '/about-us', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/contact-us', label: 'Contact Us' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white py-2.5 border-b border-accent/10 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block text-white/80 py-2 pl-4 text-sm hover:text-accent transition-colors"
            >
              — {s.name}
            </Link>
          ))}
          <Link
            href="/request-a-quote"
            className="btn-primary w-full justify-center text-center mt-4"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </header>
  )
}
