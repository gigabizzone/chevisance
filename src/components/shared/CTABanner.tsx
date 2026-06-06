import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionTag from './SectionTag'

interface CTABannerProps {
  tag?: string
  headline?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABanner({
  tag = 'Get In Touch',
  headline = 'Delivering Smarter Logistics and Transportation Services for a Better Business',
  buttonText = 'Make An Enquiry',
  buttonHref = '/request-a-quote',
}: CTABannerProps) {
  return (
    <section className="relative bg-primary overflow-hidden py-20">
      <Image
        src="/images/stock/cta-port.jpg"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="container-site relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <SectionTag>{tag}</SectionTag>
          <h2 className="section-heading-white max-w-2xl mt-2">{headline}</h2>
        </div>
        <Link href={buttonHref} className="btn-primary whitespace-nowrap">
          {buttonText} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
