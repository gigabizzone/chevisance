import type { Metadata } from 'next'
import { FileText, Search, BadgeCheck } from 'lucide-react'
import PageBanner from '@/components/layout/PageBanner'
import SectionTag from '@/components/shared/SectionTag'
import QuoteForm from '@/components/forms/QuoteForm'
import FAQAccordion from '@/components/shared/FAQAccordion'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'Request a Freight Quote — Chevisance Shipping',
  description:
    'Submit a freight forwarding quote request online. Air, sea, domestic & warehouse services. Fast response guaranteed.',
  alternates: { canonical: '/request-a-quote' },
}

const steps = [
  {
    Icon: FileText,
    label: 'STEP — 01',
    title: 'Submit Your Enquiry',
    text: 'Fill in the quote form with your shipment details — freight type, origin, destination, and cargo information.',
  },
  {
    Icon: Search,
    label: 'STEP — 02',
    title: 'We Process Your Request',
    text: 'Our freight specialists review your requirements and contact you if any additional information is needed.',
  },
  {
    Icon: BadgeCheck,
    label: 'STEP — 03',
    title: 'Receive Your Quote',
    text: 'We provide a detailed, competitive quotation tailored to your specific shipment needs — within 24 hours.',
  },
]

export default function QuotePage() {
  return (
    <>
      <PageBanner title="Request a Quote" breadcrumb="Home / Request a Quote" />

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <SectionTag>How It Works</SectionTag>
            <h2 className="section-heading mt-2 mb-4">
              We Maintain a Simple Work Process
            </h2>
            <p className="text-gray-600">
              Getting a freight quote from Chevisance Shipping is quick and
              straightforward. Follow our simple 3-step process and receive a
              tailored quote within 24 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.label}
                className="bg-bg-light rounded-xl p-8 text-center"
              >
                <span className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <s.Icon className="text-white" size={26} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange mb-2">
                  {s.label}
                </p>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="pb-20 bg-white">
        <div className="container-site">
          <QuoteForm />
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />

      <CTABanner
        tag="Get In Touch"
        headline="Ready to Ship? Let's Talk."
        buttonText="Contact Us"
        buttonHref="/contact-us"
      />
    </>
  )
}
