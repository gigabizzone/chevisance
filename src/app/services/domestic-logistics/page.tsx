import type { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Domestic Logistics Services India — Chevisance Shipping',
  description:
    'FTL & LTL road freight across India and Bangladesh. Intercity cargo movement with tracking and customs coordination.',
  alternates: { canonical: '/services/domestic-logistics' },
}

export default function DomesticLogisticsPage() {
  return (
    <ServiceDetailLayout
      title="Domestic Logistics"
      breadcrumb="Home / Services / Domestic Logistics"
      heroImage="/images/stock/trucks-highway.jpg"
      heroImageAlt="Fleet of freight trucks travelling on an Indian highway"
      headline="Domestic Road Freight Across India & the Subcontinent"
      body1="Our domestic logistics services provide comprehensive road freight coverage across India — with nationwide cargo pickup from major cities and business centres. We specialise in both Full Truck Load (FTL) and Less Than Truck Load (LTL) movements, giving you flexibility regardless of shipment size."
      body2="In addition to India-wide coverage, we also manage cross-border freight transport to Bangladesh — handling customs coordination, documentation, and last-mile delivery across the Indian Subcontinent. Our tracking and reporting systems keep you informed at every stage."
      featurePills={[
        {
          icon: 'map-pinned',
          title: 'Nationwide Coverage',
          desc: 'Pickup and delivery across all major Indian cities and industrial centres.',
        },
        {
          icon: 'globe',
          title: 'India–Bangladesh Transit',
          desc: 'Cross-border road freight with full customs coordination and documentation.',
        },
      ]}
      callout="From Mumbai to the Northeast — we move your cargo reliably across India and the Subcontinent."
      benefitsHeading="Our Capabilities"
      benefits={[
        'FTL (Full Truck Load)',
        'LTL (Less Than Truck Load)',
        'Intercity Freight Movement',
        'Commercial Cargo Handling',
        'India–Bangladesh Cross-Border Transport',
        'Customs Coordination & Documentation',
        'Shipment Tracking & Reporting',
        'End-to-End Distribution Support',
      ]}
      currentSlug="/services/domestic-logistics"
    />
  )
}
