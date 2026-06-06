'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionTag from './SectionTag'

export interface FAQItem {
  question: string
  answer: string
}

// Shared FAQ set (content.md — Services Archive & Quote pages).
export const faqs: FAQItem[] = [
  {
    question: 'What information do I need to provide for a freight quote?',
    answer:
      'To generate an accurate quote, we typically need the origin and destination, freight type (air/sea/road), commodity description, estimated weight or volume, and preferred delivery timeline. The more detail you provide, the more precise the quote.',
  },
  {
    question: 'How quickly will I receive a quotation?',
    answer:
      'For standard enquiries, we aim to respond with a quotation within 24 hours on business days. For urgent or complex shipments, please call us directly and we will prioritise your request.',
  },
  {
    question: 'Do you handle customs clearance as part of the service?',
    answer:
      'Yes. Customs brokerage and documentation support is an integral part of our freight forwarding services. Our team manages all import and export customs procedures on your behalf.',
  },
  {
    question: 'What types of cargo do you handle?',
    answer:
      'We handle a wide range of commodities — including agricultural products, chemicals, pharmaceuticals, perishables, reefer cargo, project cargo (ODC), containerised cargo, liquid cargo, and dangerous goods.',
  },
  {
    question: 'Do you offer door-to-door delivery?',
    answer:
      'Yes. Our end-to-end logistics service covers pickup from origin, transportation, customs clearance, and last-mile delivery to the final destination — for both international and domestic shipments.',
  },
  {
    question: 'Can you handle dangerous goods or liquid cargo?',
    answer:
      'Yes. Our sea freight team has specialist expertise in dangerous goods (IMDG) and liquid cargo (Flexi tanks). Please contact us with full details of your cargo and we will advise on the correct handling and documentation requirements.',
  },
]

export default function FAQAccordion({
  items = faqs,
}: {
  items?: FAQItem[]
}) {
  const [open, setOpen] = useState<number | null>(0)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-site max-w-3xl">
        <div className="text-center mb-12">
          <SectionTag>FAQ</SectionTag>
          <h2 className="section-heading mt-2">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {items.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden bg-bg-light/40"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-primary text-[17px]">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  )
}
