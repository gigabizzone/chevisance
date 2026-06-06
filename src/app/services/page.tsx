import type { Metadata } from 'next'
import PageBanner from '@/components/layout/PageBanner'
import SectionTag from '@/components/shared/SectionTag'
import ServicesRows from '@/components/services/ServicesRows'
import WhyChooseServices from '@/components/services/WhyChooseServices'
import WorkingProcess from '@/components/shared/WorkingProcess'
import QuoteForm from '@/components/forms/QuoteForm'
import FAQAccordion from '@/components/shared/FAQAccordion'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'Freight & Logistics Services — Chevisance Shipping',
  description:
    'Air freight, sea freight, domestic logistics & warehousing. End-to-end cargo management across India and worldwide.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" breadcrumb="Home / Services" />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container-site text-center max-w-3xl mx-auto">
          <SectionTag>Services We Provide</SectionTag>
          <h2 className="section-heading mt-2 mb-5">
            Reliable Global Freight &amp; Cargo Services
          </h2>
          <p className="text-gray-600">
            At Chevisance Shipping, we offer a complete range of freight
            forwarding and logistics solutions — designed to simplify your supply
            chain, reduce costs, and ensure every shipment reaches its
            destination on time.
          </p>
        </div>
      </section>

      {/* Alternating service rows */}
      <ServicesRows />

      {/* Why choose our services */}
      <WhyChooseServices />

      {/* Working process */}
      <WorkingProcess />

      {/* Embedded quote form */}
      <section className="py-20 bg-bg-light">
        <div className="container-site">
          <QuoteForm />
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />

      <CTABanner />
    </>
  )
}
