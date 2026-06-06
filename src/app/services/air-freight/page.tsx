import type { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Air Freight Services Mumbai — Chevisance Shipping',
  description:
    'Fast & reliable international air cargo solutions from Mumbai. Door-to-door delivery, customs clearance, global carrier network.',
  alternates: { canonical: '/services/air-freight' },
}

export default function AirFreightPage() {
  return (
    <ServiceDetailLayout
      title="Air Freight"
      breadcrumb="Home / Services / Air Freight"
      heroImage="/images/stock/cargo-plane-airport.jpg"
      heroImageAlt="Cargo plane on an airport runway being loaded"
      headline="Fast, Reliable & Global Air Cargo Solutions"
      body1="Chevisance Shipping works with trusted airline partners across key international trade routes, delivering fast and reliable air freight solutions for businesses of all sizes. Whether you need urgent express cargo or standard consolidated air shipments, we provide a seamless, door-to-door service backed by years of experience."
      body2="Our air freight team manages every step of the process — from booking and documentation to customs clearance and final delivery. With defined lead times, end-to-end shipment visibility, and a global carrier network, you can count on us to get your cargo where it needs to go — on time, every time."
      featurePills={[
        {
          icon: 'package-check',
          title: 'Door-to-Door Delivery',
          desc: 'Complete pickup-to-delivery management with no handover gaps.',
        },
        {
          icon: 'eye',
          title: 'End-to-End Visibility',
          desc: 'Real-time shipment tracking and reporting at every stage.',
        },
      ]}
      callout="From urgent express shipments to standard consolidated air cargo — we deliver on time, every time."
      benefitsHeading="Key Benefits"
      benefits={[
        'Fast Delivery Times — defined lead times on all major international routes',
        'Global Carrier Network — partnerships with leading international airlines',
        'Flexible Options — urgent, standard, and custom shipping solutions',
        'Real-Time Shipment Tracking — full visibility from origin to destination',
        'Customs Brokerage Support — complete import/export documentation handled',
        'Competitive Pricing — strong carrier relationships mean the best available rates',
      ]}
      currentSlug="/services/air-freight"
    />
  )
}
