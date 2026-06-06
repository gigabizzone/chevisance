'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionTag from '@/components/shared/SectionTag'

// Director photos are placeholders — client to provide headshots
// (min 400×400px). See PRD §13 Content Checklist.
const directors = [
  {
    name: 'Nishant Sutrave',
    title: 'Director & Promoter',
    image: '/images/directors/nishant-sutrave.jpg',
    bio: 'With over 15 years of experience in import and export logistics, Nishant Sutrave is the operational backbone of Chevisance Shipping. His expertise spans freight forwarding, customs clearance, transportation, warehousing, breakbulk handling, and project cargo management — with deep knowledge of operations near Nhava Sheva, India’s largest container port. Nishant has built and grown the Chevisance brand into one of India’s leading freight forwarding companies, leading a dedicated team of 40+ skilled professionals. Known for his attention to detail, patience, and unwavering commitment to customer satisfaction.',
  },
  {
    name: 'Sakshi Sutrave',
    title: 'Director & Business Development Manager',
    image: '/images/directors/sakshi-sutrave.jpg',
    bio: 'Sakshi Sutrave brings over 20 years of global logistics experience to Chevisance Shipping. A results-driven leader in business development, she has secured a multimillion-dollar contract with a major international e-commerce company and significantly expanded the company’s agent and partner network across Asia, Europe, and North America. Her expertise covers logistics management, freight forwarding, contract negotiation, market analysis, and team leadership. Sakshi believes in the power of teamwork, innovation, and sustainability to drive the future of logistics.',
  },
]

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionTag>Our Team</SectionTag>
          <h2 className="section-heading mt-2">Meet Our Leadership Team</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {directors.map((d) => (
            <motion.article
              key={d.name}
              variants={fadeUp}
              className="bg-bg-light rounded-2xl overflow-hidden shadow-card flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-44 h-56 sm:h-auto flex-shrink-0">
                <Image
                  src={d.image}
                  alt={`${d.name} — ${d.title}, Chevisance Shipping`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 176px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary">
                  {d.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-3">
                  {d.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{d.bio}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
