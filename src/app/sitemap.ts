import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/air-freight', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/sea-freight', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/domestic-logistics', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/warehouse-services', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact-us', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/request-a-quote', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
