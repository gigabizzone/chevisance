'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Users,
  BadgeDollarSign,
  Globe2,
  Eye,
  Warehouse,
  Headset,
} from 'lucide-react'
import { fadeRight, fadeLeft, zoomIn } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'

const left = [
  {
    Icon: Users,
    title: 'Expert Professionals',
    text: 'A team of 40+ experienced logistics and freight forwarding specialists managing your cargo.',
  },
  {
    Icon: BadgeDollarSign,
    title: 'Competitive Pricing',
    text: 'Strong ties with major shipping lines and carriers allow us to offer the most competitive freight rates.',
  },
  {
    Icon: Globe2,
    title: 'Global Reach',
    text: 'Worldwide network of agents, customs brokers, and logistics partners across Asia, Europe, and North America.',
  },
]

const right = [
  {
    Icon: Eye,
    title: 'End-to-End Visibility',
    text: 'Full tracking and reporting at every stage — from origin to final delivery.',
  },
  {
    Icon: Warehouse,
    title: 'Warehouse Facility',
    text: 'Bonded and general warehousing integrated with our freight forwarding services for seamless logistics.',
  },
  {
    Icon: Headset,
    title: '24/7 Support',
    text: 'Round-the-clock client communication and operations support — always available when you need us.',
  },
]

function FeatureRow({
  Icon,
  title,
  text,
  align,
}: {
  Icon: typeof Users
  title: string
  text: string
  align: 'left' | 'right'
}) {
  return (
    <div
      className={`flex items-start gap-4 ${
        align === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''
      }`}
    >
      <span className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center flex-shrink-0">
        <Icon className="text-accent" size={22} />
      </span>
      <div>
        <h3 className="font-heading font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionTag>Why Choose Us</SectionTag>
          <h2 className="section-heading mt-2">
            Why We Are Considered the Best in Business
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10 order-2 lg:order-1"
          >
            {left.map((f) => (
              <FeatureRow key={f.title} {...f} align="right" />
            ))}
          </motion.div>

          {/* Center image */}
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-card order-1 lg:order-2"
          >
            <Image
              src="/images/stock/why-choose-ship.jpg"
              alt="Cargo ship carrying shipping containers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10 order-3"
          >
            {right.map((f) => (
              <FeatureRow key={f.title} {...f} align="left" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
