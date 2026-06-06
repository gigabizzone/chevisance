'use client'
import { motion } from 'framer-motion'
import { Truck, Globe2, Coins, Headset } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'

const cards = [
  {
    Icon: Truck,
    title: 'Quick and Fast Delivery',
    text: 'Seamlessly facilitating reliable delivery solutions across all freight modes — air, sea, road, and warehouse.',
  },
  {
    Icon: Globe2,
    title: 'Global Network Coverage',
    text: 'Extensive agent and partner network spanning Asia, Europe, North America, and all major international ports.',
  },
  {
    Icon: Coins,
    title: 'Cost-Effective Solutions',
    text: 'Competitive freight rates backed by strong relationships with major shipping lines and airline carriers.',
  },
  {
    Icon: Headset,
    title: '24/7 Customer Support',
    text: 'Our operations team is available around the clock to answer queries and provide real-time shipment updates.',
  },
]

export default function WhyChooseServices() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionTag>Why Choose Our Services</SectionTag>
          <h2 className="section-heading-white mt-2">
            Delivering More Than Amazing Shipments
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors"
            >
              <span className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
                <c.Icon className="text-white" size={24} />
              </span>
              <h3 className="text-white font-heading font-semibold text-lg mb-2">
                {c.title}
              </h3>
              <p className="text-white/70 text-sm">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
