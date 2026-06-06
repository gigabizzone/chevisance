import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import PageBanner from '@/components/layout/PageBanner'
import SectionTag from '@/components/shared/SectionTag'
import ContactForm from '@/components/forms/ContactForm'
import CTABanner from '@/components/shared/CTABanner'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us — Chevisance Shipping Mumbai',
  description:
    'Get in touch with Chevisance Shipping Pvt. Ltd. for all freight and logistics enquiries. Mumbai, India.',
  alternates: { canonical: '/contact-us' },
}

const infoCards = [
  {
    Icon: Mail,
    heading: 'Send Us an Email',
    value: siteConfig.email,
    sub: '',
    href: `mailto:${siteConfig.email}`,
  },
  {
    Icon: Phone,
    heading: 'Call Us',
    value: siteConfig.phone,
    sub: '',
    href: `tel:${siteConfig.phone.replace(/\s+/g, '')}`,
  },
  {
    Icon: MapPin,
    heading: 'Our Office',
    value: `${siteConfig.address.locality}, ${siteConfig.address.country}`,
    sub: siteConfig.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      siteConfig.address.full
    )}`,
  },
  {
    Icon: Clock,
    heading: 'Working Hours',
    value: siteConfig.hours.days,
    sub: siteConfig.hours.time,
    href: '',
  },
]

const stats = [
  { value: '18+', label: 'Years of Experience' },
  { value: '40+', label: 'Team Members' },
  { value: '98%', label: 'Customer Satisfaction' },
]

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" breadcrumb="Home / Contact Us" />

      {/* Contact form */}
      <section className="py-20 bg-white">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[440px] rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/images/stock/trucks-highway.jpg"
              alt="Freight trucks on the highway"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionTag>Consultations</SectionTag>
            <h2 className="section-heading mt-2 mb-6">
              Need Help? We&apos;re Here
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-bg-light">
        <div className="container-site grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.heading}
              className="bg-white rounded-xl p-7 shadow-card text-center"
            >
              <span className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <card.Icon className="text-accent" size={24} />
              </span>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {card.heading}
              </h3>
              {card.href ? (
                <a
                  href={card.href}
                  className="text-sm text-text-dark break-words hover:text-accent transition-colors"
                  {...(card.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {card.value}
                </a>
              ) : (
                <p className="text-sm text-text-dark break-words">
                  {card.value}
                </p>
              )}
              {card.sub && (
                <p className="text-xs text-gray-500 mt-1">{card.sub}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Achievement / stats */}
      <section className="py-20 bg-white">
        <div className="container-site text-center">
          <h2 className="section-heading mb-12 max-w-2xl mx-auto">
            Celebrating Years of Success and Community Trust
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-heading font-extrabold text-5xl text-orange">
                  {s.value}
                </div>
                <div className="text-sm text-gray-600 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Get In Touch"
        headline="Delivering Smarter Logistics and Transportation Services"
        buttonText="Make An Enquiry"
        buttonHref="/request-a-quote"
      />
    </>
  )
}
