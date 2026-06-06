import HeroSection from '@/components/home/HeroSection'
import FeaturesStrip from '@/components/home/FeaturesStrip'
import AboutSnippet from '@/components/home/AboutSnippet'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import WorkingProcess from '@/components/shared/WorkingProcess'
import MarqueeTicker from '@/components/shared/MarqueeTicker'
import ContactTeaser from '@/components/home/ContactTeaser'
import CTABanner from '@/components/shared/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesStrip />
      <AboutSnippet />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectsGallery />
      <WorkingProcess />
      <MarqueeTicker />
      <ContactTeaser />
      <CTABanner />
    </>
  )
}
