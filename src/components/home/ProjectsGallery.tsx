'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'

const projects = [
  { caption: 'Air Freight Logistics', image: '/images/stock/gallery-air.jpg' },
  {
    caption: 'Secure Warehousing Solutions',
    image: '/images/stock/gallery-warehouse.jpg',
  },
  {
    caption: 'Fast Express Delivery',
    image: '/images/stock/gallery-express.jpg',
  },
]

export default function ProjectsGallery() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionTag>Our Work</SectionTag>
            <h2 className="section-heading-white mt-2">
              Delivering Excellence in Logistics Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:gap-3 transition-all"
          >
            View More Projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.caption}
              variants={fadeUp}
              custom={i * 0.12}
              className="group relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src={p.image}
                alt={p.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <h3 className="text-white font-heading font-semibold text-lg">
                  {p.caption}
                </h3>
                <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white" size={18} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
