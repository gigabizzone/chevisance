'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Plane, Ship, Truck, Warehouse, ArrowRight } from 'lucide-react'
import { zoomIn, staggerContainer } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'

const services = [
  {
    service: 'Air Freight',
    description:
      'Fast and reliable international air cargo — door-to-door, customs-ready, fully tracked.',
    href: '/services/air-freight',
    image: '/images/stock/cargo-plane-airport.jpg',
    Icon: Plane,
  },
  {
    service: 'Sea Freight',
    description:
      'FCL, LCL, and consolidation across major global ports. End-to-end ocean freight management.',
    href: '/services/sea-freight',
    image: '/images/stock/cargo-ship-sea.jpg',
    Icon: Ship,
  },
  {
    service: 'Domestic Logistics',
    description:
      'FTL and LTL road freight across India and the Indian Subcontinent including Bangladesh.',
    href: '/services/domestic-logistics',
    image: '/images/stock/trucks-highway.jpg',
    Icon: Truck,
  },
  {
    service: 'Warehouse Services',
    description:
      'Bonded and general warehousing, container handling, and value-added logistics services.',
    href: '/services/warehouse-services',
    image: '/images/stock/warehouse-interior.jpg',
    Icon: Warehouse,
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionTag>Services</SectionTag>
          <h2 className="section-heading-white mt-2">
            Reliable Logistics Service Solutions for Everyone
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s, i) => (
            <motion.article
              key={s.service}
              variants={zoomIn}
              custom={i * 0.1}
              className="card-base group flex flex-col"
            >
              <div className="relative h-44">
                {/* Inner wrapper clips the zooming image; the badge below stays
                    outside it so it can overlap the content area on top. */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.service} services`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <span className="absolute -bottom-5 left-5 z-20 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-card ring-4 ring-white">
                  <s.Icon className="text-white" size={22} />
                </span>
              </div>
              <div className="p-6 pt-8 flex flex-col flex-1">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {s.service}
                </h3>
                <p className="text-sm text-gray-600 mb-5 flex-1">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
