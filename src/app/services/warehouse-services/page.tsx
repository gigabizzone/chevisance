import type { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Warehouse & Storage Services Mumbai — Chevisance Shipping',
  description:
    'Bonded warehouse, open container storage, container stuffing & de-stuffing. Integrated warehousing solutions in Mumbai.',
  alternates: { canonical: '/services/warehouse-services' },
}

export default function WarehouseServicesPage() {
  return (
    <ServiceDetailLayout
      title="Warehouse Services"
      breadcrumb="Home / Services / Warehouse Services"
      heroImage="/images/stock/warehouse-interior.jpg"
      heroImageAlt="Warehouse interior with forklifts, racks and stored cargo"
      headline="Secure, Flexible & Cost-Effective Warehousing Solutions"
      body1="Our warehousing solutions are fully integrated with our freight forwarding and transportation services — providing a seamless, end-to-end logistics experience. We operate bonded and general warehouses equipped with trailers, reach stackers, and forklifts for efficient cargo handling."
      body2="From open container storage to value-added services such as labelling, sticker application, packing, and repacking — our warehouse team handles every requirement. We also support agricultural commodity handling, empty container storage, parking, repair, and maintenance."
      featurePills={[
        {
          icon: 'warehouse',
          title: 'Custom Bonded Warehousing',
          desc: 'Secure bonded storage with full customs compliance for import and export cargo.',
        },
        {
          icon: 'tags',
          title: 'Value-Added Services',
          desc: 'Labelling, packing, repacking, sticker application, and inventory management support.',
        },
      ]}
      callout="One roof. Complete logistics — storage, handling, distribution, and value-added services."
      benefitsHeading="Our Capabilities"
      benefits={[
        'Custom Bonded Warehousing',
        'General Goods Storage',
        'Open Container Storage',
        'Container Handling, Transportation, Stuffing & De-stuffing',
        'Inventory Management Support',
        'Agricultural Commodity Handling',
        'Empty Container Storage, Parking, Repair & Maintenance',
        'End-to-End Distribution Support',
      ]}
      currentSlug="/services/warehouse-services"
    />
  )
}
