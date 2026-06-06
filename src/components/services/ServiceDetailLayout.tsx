'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Check,
  PackageCheck,
  Eye,
  Container,
  AlertTriangle,
  MapPinned,
  Globe,
  Warehouse,
  Tags,
  type LucideIcon,
} from 'lucide-react'
import PageBanner from '@/components/layout/PageBanner'
import ServiceSidebar from './ServiceSidebar'
import CTABanner from '@/components/shared/CTABanner'
import { fadeUp } from '@/lib/animations'

// Icon names are passed as strings (Server -> Client boundary can't serialize
// component functions) and resolved to Lucide components here.
const iconMap: Record<string, LucideIcon> = {
  'package-check': PackageCheck,
  eye: Eye,
  container: Container,
  'alert-triangle': AlertTriangle,
  'map-pinned': MapPinned,
  globe: Globe,
  warehouse: Warehouse,
  tags: Tags,
}

export type FeaturePillIcon = keyof typeof iconMap

export interface FeaturePill {
  icon: FeaturePillIcon
  title: string
  desc: string
}

export interface ServiceDetailProps {
  title: string
  breadcrumb: string
  heroImage: string
  heroImageAlt: string
  headline: string
  body1: string
  body2: string
  featurePills: FeaturePill[]
  callout: string
  benefitsHeading?: string
  benefits: string[]
  currentSlug: string
}

export default function ServiceDetailLayout({
  title,
  breadcrumb,
  heroImage,
  heroImageAlt,
  headline,
  body1,
  body2,
  featurePills,
  callout,
  benefitsHeading = 'Key Benefits',
  benefits,
  currentSlug,
}: ServiceDetailProps) {
  return (
    <>
      <PageBanner title={title} breadcrumb={breadcrumb} />
      <section className="py-20">
        <div className="container-site">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            {/* Main content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <h2 className="section-heading mb-5">{headline}</h2>
              <p className="mb-4 text-gray-600">{body1}</p>
              <p className="mb-8 text-gray-600">{body2}</p>

              {/* Feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {featurePills.map((p) => {
                  const Icon = iconMap[p.icon]
                  return (
                  <div
                    key={p.title}
                    className="flex items-start gap-3 p-5 bg-bg-light rounded-lg"
                  >
                    <span className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon className="text-white" size={20} />}
                    </span>
                    <div>
                      <div className="font-semibold text-primary font-heading">
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{p.desc}</div>
                    </div>
                  </div>
                  )
                })}
              </div>

              {/* Callout */}
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 italic text-primary font-medium">
                {callout}
              </div>

              {/* Benefits / Capabilities */}
              <h3 className="font-heading font-semibold text-2xl mb-5">
                {benefitsHeading}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
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
            </motion.div>

            {/* Sidebar */}
            <ServiceSidebar currentSlug={currentSlug} />
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
