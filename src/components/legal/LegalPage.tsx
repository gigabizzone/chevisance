import PageBanner from '@/components/layout/PageBanner'

interface LegalPageProps {
  title: string
  breadcrumb: string
  lastUpdated: string
  children: React.ReactNode
}

/** Shared layout for long-form legal pages (Privacy Policy, Terms of Service). */
export default function LegalPage({
  title,
  breadcrumb,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <>
      <PageBanner title={title} breadcrumb={breadcrumb} />
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-site max-w-4xl">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {lastUpdated}
          </p>
          <div className="legal-content">{children}</div>
        </div>
      </section>
    </>
  )
}
