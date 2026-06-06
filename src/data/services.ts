// Service data driving the Services Archive page (content.md — Services List).
// The 4 individual service pages pass their own detail props to
// <ServiceDetailLayout /> (see each page.tsx).

export interface ServiceRow {
  id: string
  number: string
  tag: string
  title: string
  body: string
  bullets: string[]
  slug: string
  image: string
  imageAlt: string
}

export const servicesData: ServiceRow[] = [
  {
    id: 'sea-freight',
    number: '01',
    tag: 'Sea Freight',
    title: 'Ocean Freight Solutions',
    body: 'Strategic partnerships at major container ports worldwide give us access to reliable FCL, LCL, and consolidated ocean freight services. We manage everything from booking to customs clearance and final delivery.',
    bullets: [
      'FCL (Full Container Load) & LCL (Less than Container Load)',
      'Consolidation Services',
      'Dangerous Goods & Liquid Cargo Handling',
      'Door-to-Door Delivery',
    ],
    slug: '/services/sea-freight',
    image: '/images/stock/cargo-ship-sea.jpg',
    imageAlt: 'Cargo ship loaded with containers at sea',
  },
  {
    id: 'air-freight',
    number: '02',
    tag: 'Air Freight',
    title: 'Air Cargo Solutions',
    body: 'We work with trusted airline partners on key international trade routes, offering flexible and fast air cargo services for businesses of all sizes — from urgent express shipments to standard consolidated air freight.',
    bullets: [
      'Urgent, Standard, and Custom Shipping Options',
      'Global Carrier Network',
      'Door-to-Door Delivery',
      'Real-Time Shipment Tracking',
    ],
    slug: '/services/air-freight',
    image: '/images/stock/cargo-plane-airport.jpg',
    imageAlt: 'Cargo plane on an airport runway',
  },
  {
    id: 'domestic-logistics',
    number: '03',
    tag: 'Road Transport',
    title: 'Domestic Road Freight',
    body: 'Our domestic logistics services cover India and the Indian Subcontinent, including cross-border transport to Bangladesh. We offer FTL and LTL road freight with full customs coordination and shipment tracking.',
    bullets: [
      'FTL (Full Truck Load) & LTL (Less Than Truck Load)',
      'Nationwide pickup from major cities and business centres',
      'India–Bangladesh cross-border transport',
      'Customs Coordination & Tracking',
    ],
    slug: '/services/domestic-logistics',
    image: '/images/stock/trucks-highway.jpg',
    imageAlt: 'Fleet of freight trucks on a highway',
  },
  {
    id: 'warehouse-services',
    number: '04',
    tag: 'Warehousing',
    title: 'Warehousing & Storage',
    body: 'Our warehousing solutions are fully integrated with our freight forwarding operations — providing seamless end-to-end logistics. From bonded warehouses to open container storage, we offer flexible and secure options.',
    bullets: [
      'Custom Bonded Warehousing',
      'Container Stuffing & De-stuffing',
      'Value-Added Services (labelling, packing, repacking)',
      'Inventory Management Support',
    ],
    slug: '/services/warehouse-services',
    image: '/images/stock/warehouse-interior.jpg',
    imageAlt: 'Warehouse interior with forklifts and storage racks',
  },
]

// Sidebar navigation list (used on all 4 service detail pages).
export const serviceNavLinks = [
  { name: 'Air Freight', href: '/services/air-freight' },
  { name: 'Sea Freight', href: '/services/sea-freight' },
  { name: 'Domestic Logistics', href: '/services/domestic-logistics' },
  { name: 'Warehouse Services', href: '/services/warehouse-services' },
]
