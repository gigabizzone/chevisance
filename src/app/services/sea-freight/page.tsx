import type { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Sea Freight / Ocean Freight Mumbai — Chevisance Shipping',
  description:
    'FCL, LCL, consolidation, liquid cargo & dangerous goods. Global ocean freight solutions from major Indian ports.',
  alternates: { canonical: '/services/sea-freight' },
}

export default function SeaFreightPage() {
  return (
    <ServiceDetailLayout
      title="Sea Freight"
      breadcrumb="Home / Services / Sea Freight"
      heroImage="/images/stock/cargo-ship-sea.jpg"
      heroImageAlt="Container cargo ship sailing at sea"
      headline="Reliable Global Ocean Freight Solutions"
      body1="Chevisance Shipping has built strategic partnerships at major container ports worldwide, giving us access to competitive rates and reliable capacity on key ocean freight trade lanes. Whether you need a full container or a less-than-container consolidation, our team manages every detail of your ocean shipment."
      body2="From FCL and LCL to specialised cargo handling — including liquid cargo in Flexi tanks and dangerous goods — we provide comprehensive ocean freight solutions with full customs support and end-to-end visibility."
      featurePills={[
        {
          icon: 'container',
          title: 'FCL & LCL Solutions',
          desc: 'Full Container Load and Less than Container Load options across all major global routes.',
        },
        {
          icon: 'alert-triangle',
          title: 'Dangerous Goods Expertise',
          desc: 'Specialist handling for IMDG classified cargo and liquid cargo in Flexi tanks.',
        },
      ]}
      callout="From FCL to specialised liquid cargo — we manage your ocean shipments end-to-end."
      benefitsHeading="Our Capabilities"
      benefits={[
        'FCL (Full Container Load)',
        'LCL (Less than Container Load)',
        'International Import & Export',
        'Consolidation Services',
        'Specialised Project Cargo Handling',
        'Liquid Cargo Transportation (Flexi tank)',
        'Dangerous Goods Expertise (IMDG)',
        'Door-to-Door Logistics',
        'Global Freight Management',
      ]}
      currentSlug="/services/sea-freight"
    />
  )
}
