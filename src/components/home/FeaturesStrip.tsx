'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Ship, Package, Truck } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'

const cards = [
  {
    title: 'Global Shipping Solutions',
    image: '/images/stock/cargo-ship-sea.jpg',
    Icon: Ship,
    alt: 'Cargo ship at sea',
  },
  {
    title: 'Cost-Effective Logistics',
    image: '/images/stock/freight-containers.jpg',
    Icon: Package,
    alt: 'Freight shipping containers',
  },
  {
    title: 'Fast Reliable Delivery',
    image: '/images/stock/delivery-logistics.jpg',
    Icon: Truck,
    alt: 'Delivery and logistics operations',
  },
]

export default function FeaturesStrip() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionTag>Our Features</SectionTag>
          <h2 className="section-heading-white mt-2">
            What Makes Us the Best Cargo Company
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              custom={i * 0.12}
              className="group relative h-72 rounded-xl overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <card.Icon className="text-white" size={20} />
                </span>
                <h3 className="text-white font-heading font-semibold text-lg">
                  {card.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
