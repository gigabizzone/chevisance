'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionTag from './SectionTag'

const steps = [
  {
    num: '01',
    title: 'Receive Cargo',
    desc: 'We collect or receive your shipment with full documentation — safely and on schedule.',
  },
  {
    num: '02',
    title: 'Process & Coordinate',
    desc: 'We handle all documentation, customs processing, and carrier booking for a seamless handover.',
  },
  {
    num: '03',
    title: 'Deliver to Destination',
    desc: 'On-time delivery with real-time tracking and reporting at every stage of the journey.',
  },
]

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionTag>Working Process</SectionTag>
          <h2 className="section-heading mt-2">
            We Deliver Through a Smooth Logistics Process
          </h2>
        </div>
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Dotted connector line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] border-t-2 border-dashed border-accent/40"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i * 0.15}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-5 relative z-10 shadow-card">
                <span className="font-heading font-extrabold text-xl">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
