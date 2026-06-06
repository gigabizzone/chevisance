'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { servicesData } from '@/data/services'

export default function ServicesRows() {
  return (
    <section>
      {servicesData.map((service, i) => {
        const imageRight = i % 2 === 1
        return (
          <motion.div
            key={service.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col ${
              imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } ${i % 2 === 0 ? 'bg-bg-light' : 'bg-white'}`}
          >
            {/* Image */}
            <div className="lg:w-1/2 relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute top-6 left-6 font-heading font-extrabold text-5xl text-white/90 drop-shadow">
                {service.number}
              </span>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 flex items-center p-8 lg:p-16">
              <div>
                <span className="section-tag">{service.tag}</span>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mt-2 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.body}</p>
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                        <Check size={12} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={service.slug} className="btn-primary">
                  Explore More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )
      })}
    </section>
  )
}
