'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Clock, Phone } from 'lucide-react'
import { fadeRight, fadeLeft } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'
import { siteConfig } from '@/lib/site'

const features = [
  {
    Icon: Users,
    title: 'Expert Professional Team',
    text: 'Air freight service delivers the knowledge and opportunity to optimise every shipment. Get full-service support.',
  },
  {
    Icon: Clock,
    title: '24/7 Client Support',
    text: 'Our operations team provides round-the-clock support and communication, keeping you updated at every stage.',
  },
]

export default function AboutSnippet() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
        {/* Image + stat cards */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
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
          <div className="absolute -bottom-6 left-6 flex gap-4">
            <div className="bg-primary text-white rounded-xl px-6 py-4 shadow-card-hover">
              <div className="font-heading font-extrabold text-3xl text-orange">
                18+
              </div>
              <div className="text-xs text-white/80">Years of Experience</div>
            </div>
            <div className="bg-accent text-white rounded-xl px-6 py-4 shadow-card-hover">
              <div className="font-heading font-extrabold text-3xl">98%</div>
              <div className="text-xs text-white/90">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTag>About Us</SectionTag>
          <h2 className="section-heading mt-2 mb-5">
            Learn More About Our Mission and Vision
          </h2>
          <p className="text-gray-600 mb-8">
            Founded in 2008, Chevisance Shipping Pvt. Ltd. has grown into one of
            India&apos;s trusted freight forwarding companies — with deep
            expertise in air freight, ocean freight, domestic logistics, and
            warehousing. Our experienced team of 40+ professionals is committed
            to delivering every shipment on time, every time.
          </p>

          <div className="space-y-5 mb-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center flex-shrink-0">
                  <f.Icon className="text-accent" size={22} />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about-us" className="btn-primary">
              More About Us <ArrowRight size={18} />
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
