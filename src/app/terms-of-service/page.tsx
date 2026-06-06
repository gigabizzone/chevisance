import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service — Chevisance Shipping',
  description:
    'The terms and conditions governing your use of the Chevisance Shipping Pvt. Ltd. website and any enquiries or quote requests submitted through it.',
  alternates: { canonical: '/terms-of-service' },
}

const LAST_UPDATED = '6 June 2026'

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      breadcrumb="Home / Terms of Service"
      lastUpdated={LAST_UPDATED}
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the website of <strong>CHEVISANCE SHIPPING PVT. LTD.</strong>{' '}
        (&ldquo;Chevisance Shipping&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
        or &ldquo;our&rdquo;). By accessing or using this website, you agree to
        be bound by these Terms. If you do not agree, please do not use the
        website.
      </p>

      <h2>1. Use of the Website</h2>
      <p>
        This website is provided for general information about our freight
        forwarding and logistics services and to allow you to contact us or
        request a quotation. You agree to use the website only for lawful
        purposes and in a manner that does not infringe the rights of, or
        restrict the use of, the website by any third party.
      </p>

      <h2>2. Services and Quotations</h2>
      <p>
        Information on this website is for general guidance only and does not
        constitute a binding offer. Any quotation provided in response to your
        enquiry is an estimate based on the information you supply and is subject
        to confirmation, availability, and our separate written agreement.
        Actual freight, logistics, and warehousing services are governed by the
        specific terms agreed between you and Chevisance Shipping for each
        engagement, together with applicable carrier terms and trade regulations.
      </p>

      <h2>3. Accuracy of Information You Provide</h2>
      <p>
        When you submit an enquiry or quote request, you agree to provide
        accurate, current, and complete information. You are responsible for the
        accuracy of shipment details (such as commodity, weight, origin, and
        destination), and you acknowledge that incorrect information may affect
        quotations, timelines, customs clearance, and service delivery.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on this website — including text, graphics, logos, images,
        and design — is the property of Chevisance Shipping or its licensors and
        is protected by applicable intellectual property laws. You may not copy,
        reproduce, distribute, or create derivative works from any part of this
        website without our prior written consent.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website in any way that violates applicable laws</li>
        <li>
          Attempt to gain unauthorised access to the website, its servers, or
          related systems
        </li>
        <li>
          Introduce viruses, malware, or other harmful code, or otherwise
          interfere with the proper functioning of the website
        </li>
        <li>Submit false, misleading, or fraudulent information</li>
      </ul>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis. While we strive to keep the information accurate
        and up to date, we make no warranties or representations, express or
        implied, regarding the completeness, accuracy, reliability, or
        availability of the website or its content.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Chevisance Shipping shall not be
        liable for any indirect, incidental, special, or consequential damages
        arising out of or in connection with your use of, or inability to use,
        this website. Nothing in these Terms limits any liability that cannot be
        excluded under applicable law.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        This website may contain links to third-party websites that are not
        operated by us. We are not responsible for the content, policies, or
        practices of any third-party websites.
      </p>

      <h2>9. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        India. Any disputes arising in connection with these Terms or your use
        of the website shall be subject to the exclusive jurisdiction of the
        courts of Mumbai, Maharashtra, India.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may revise these Terms from time to time. The updated version will be
        posted on this page with a new &ldquo;Last updated&rdquo; date. Your
        continued use of the website after changes are posted constitutes
        acceptance of the revised Terms.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </li>
        <li>
          <strong>Phone:</strong>{' '}
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
            {siteConfig.phone}
          </a>
        </li>
        <li>
          <strong>Address:</strong> {siteConfig.address.full}
        </li>
      </ul>
    </LegalPage>
  )
}
