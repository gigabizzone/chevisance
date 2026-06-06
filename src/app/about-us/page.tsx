import type { Metadata } from 'next'
import PageBanner from '@/components/layout/PageBanner'
import MissionVision from '@/components/about/MissionVision'
import WhyTrusted from '@/components/about/WhyTrusted'
import LeadershipTeam from '@/components/about/LeadershipTeam'
import WorkingProcess from '@/components/shared/WorkingProcess'
import MarqueeTicker from '@/components/shared/MarqueeTicker'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'About Us — Chevisance Shipping Pvt. Ltd.',
  description:
    '18+ years of freight forwarding expertise. Meet the leadership team at Chevisance Shipping — trusted logistics partner, Mumbai, India.',
  alternates: { canonical: '/about-us' },
}

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" breadcrumb="Home / About Us" />
      <MissionVision />
      <WorkingProcess />
      <MarqueeTicker />
      <WhyTrusted />
      <LeadershipTeam />
      <CTABanner
        tag="Get In Touch"
        headline="Ready to Partner With Us?"
        buttonText="Request a Quote"
        buttonHref="/request-a-quote"
      />
    </>
  )
}
