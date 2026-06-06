import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Chevisance Shipping',
  description:
    'How Chevisance Shipping Pvt. Ltd. collects, uses, and protects your personal information when you use our website and freight forwarding services.',
  alternates: { canonical: '/privacy-policy' },
}

const LAST_UPDATED = '6 June 2026'

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      breadcrumb="Home / Privacy Policy"
      lastUpdated={LAST_UPDATED}
    >
      <p>
        At <strong>CHEVISANCE SHIPPING PVT. LTD.</strong> (&ldquo;Chevisance
        Shipping&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;), we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website or use our freight
        forwarding and logistics services. By using this website, you consent to
        the practices described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide to us</h3>
      <p>
        When you submit our contact or quote-request forms, or otherwise
        communicate with us, we may collect:
      </p>
      <ul>
        <li>Your name and company name</li>
        <li>Email address and phone number</li>
        <li>
          Shipment details (freight type, origin and destination, commodity,
          estimated weight, and any additional notes you provide)
        </li>
        <li>Any other information you choose to include in your message</li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        When you visit our website, we may automatically collect limited
        technical information such as your IP address, browser type, device
        information, pages visited, and the date and time of your visit. This is
        used for security, analytics, and to improve our website.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your enquiries and prepare freight quotations</li>
        <li>Provide, operate, and manage our logistics services</li>
        <li>Communicate with you about your shipments and requests</li>
        <li>Improve our website, services, and customer experience</li>
        <li>Comply with legal, regulatory, and customs obligations</li>
      </ul>

      <h2>3. Cookies and Tracking Technologies</h2>
      <p>
        Our website may use cookies and similar technologies to enable core
        functionality and to understand how visitors use the site. You can
        control or disable cookies through your browser settings; however, some
        parts of the website may not function as intended without them.
      </p>

      <h2>4. How We Share Your Information</h2>
      <p>
        We do <strong>not</strong> sell or rent your personal information. We may
        share your information only with:
      </p>
      <ul>
        <li>
          Trusted service providers who help us operate our website and
          communications (for example, our email delivery provider), under
          appropriate confidentiality obligations
        </li>
        <li>
          Carriers, customs brokers, and logistics partners strictly as
          necessary to fulfil and coordinate your shipments
        </li>
        <li>
          Government, customs, or regulatory authorities where required by law
        </li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures designed
        to protect your personal information against unauthorised access, loss,
        misuse, or alteration. However, no method of transmission over the
        internet is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil
        the purposes described in this policy, including to meet legal,
        accounting, customs, or reporting requirements.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Subject to applicable law, you may have the right to access, correct,
        update, or request deletion of your personal information, and to object
        to or restrict certain processing. To exercise any of these rights,
        please contact us using the details below.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of those websites and
        encourage you to review their privacy policies.
      </p>

      <h2>9. Children&rsquo;s Privacy</h2>
      <p>
        Our website and services are intended for businesses and are not
        directed at children. We do not knowingly collect personal information
        from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated &ldquo;Last updated&rdquo; date.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle your
        information, please contact us:
      </p>
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
