'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeRight, fadeLeft } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[440px] rounded-2xl overflow-hidden shadow-card"
        >
          <Image
            src="/images/stock/trucks-highway.jpg"
            alt="Freight trucks on the highway"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTag>Consultations</SectionTag>
          <h2 className="section-heading mt-2 mb-6">Need Help? We&apos;re Here</h2>
          <ContactForm submitLabel="Free Consultation" />
        </motion.div>
      </div>
    </section>
  )
}
