'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Globe2 } from 'lucide-react'
import { fadeRight, fadeLeft } from '@/lib/animations'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-bg-light to-white overflow-hidden">
      <div className="container-site grid lg:grid-cols-2 gap-12 items-center min-h-[700px] pt-32 pb-16 lg:py-32">
        {/* Text */}
        <div>
          <motion.h1
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-heading font-extrabold text-primary text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] mb-6"
          >
            From Departure to Destination
          </motion.h1>
          <motion.p
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-text-dark/80 text-base lg:text-lg max-w-xl mb-8 leading-relaxed"
          >
            We provide reliable and efficient freight forwarding and logistics
            solutions tailored to meet your business needs. From departure to
            destination, our dedicated team simplifies your supply chain and
            delivers outstanding results — every time.
          </motion.p>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            <Link href="/services" className="btn-primary">
              Explore Services <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border"
          >
            <div className="flex items-center gap-2">
              <Users className="text-accent" size={22} />
              <span className="text-sm font-semibold text-primary">
                500+ Satisfied Customers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="text-accent" size={22} />
              <span className="text-sm font-semibold text-primary">
                End-to-End Logistics Solutions
              </span>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="relative aspect-[9/7] w-full rounded-2xl overflow-hidden shadow-card-hover"
        >
          <Image
            src="/images/stock/hero-composite.jpg"
            alt="Air, sea, and road freight logistics composite — plane, cargo ship and truck"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  )
}
