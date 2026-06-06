'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { fadeRight, fadeLeft } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'
import { siteConfig } from '@/lib/site'

const stats = [
  { value: '18+', label: 'Years of Experience' },
  { value: '40+', label: 'Team Members' },
  { value: '98%', label: 'Customer Satisfaction' },
]

const tabs = [
  {
    label: 'Our Mission & Vision',
    text: 'We are committed to providing the highest standards of freight forwarding and logistics services. Our mission is to simplify international and domestic supply chains for businesses of all sizes — delivering reliability, transparency, and efficiency from departure to destination.',
  },
  {
    label: 'Our Value & Speciality',
    text: 'Work quality is our passion. We bring deep expertise across air freight, ocean freight, road transport, and warehousing — backed by a network of global agents and a team that puts customer success at the centre of every decision.',
  },
]

export default function MissionVision() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
        {/* Image + stats */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative aspect-[5/4] w-full rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/images/stock/about-collage.jpg"
              alt="Chevisance Shipping logistics operations collage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center bg-bg-light rounded-xl py-5 px-2"
              >
                <div className="font-heading font-extrabold text-2xl text-orange">
                  {s.value}
                </div>
                <div className="text-xs text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content + tabs */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTag>About</SectionTag>
          <h2 className="section-heading mt-2 mb-6">
            Learn More About Our Mission and Vision
          </h2>

          {/* Tab buttons */}
          <div className="flex gap-2 mb-5">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-heading font-semibold transition-colors ${
                  active === i
                    ? 'bg-accent text-white'
                    : 'bg-bg-light text-primary hover:bg-border/50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <p className="text-gray-600 mb-8 min-h-[96px]">{tabs[active].text}</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact-us" className="btn-primary">
              Contact With Us <ArrowRight size={18} />
            </Link>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="text-accent" size={20} />
              </span>
              <div>
                <div className="text-xs text-gray-500">
                  {siteConfig.phoneLabel}
                </div>
                <div className="font-heading font-semibold text-primary">
                  {siteConfig.phone}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
