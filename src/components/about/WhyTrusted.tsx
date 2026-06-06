'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe2, Truck, Warehouse } from 'lucide-react'
import { fadeRight, fadeLeft, staggerContainer, fadeUp } from '@/lib/animations'

const features = [
  {
    Icon: Globe2,
    title: 'Global Logistics Operation',
    text: 'Connecting businesses with reliable international transport and logistics operations across all major trade routes.',
  },
  {
    Icon: Truck,
    title: 'International Transportation',
    text: 'Reliable and efficient international transportation solutions across all borders — air, sea, and road.',
  },
  {
    Icon: Warehouse,
    title: 'Warehousing Technique',
    text: 'Advanced warehousing and container handling techniques for efficient storage and inventory management.',
  },
]

export default function WhyTrusted() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card"
        >
          <Image
            src="/images/stock/trucks-highway.jpg"
            alt="Fleet of freight trucks on a highway"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeLeft}
            className="section-heading mb-8"
          >
            Why We Are Trusted as Leaders in Logistics Solutions
          </motion.h2>
          <div className="space-y-6">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <span className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <f.Icon className="text-white" size={22} />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
