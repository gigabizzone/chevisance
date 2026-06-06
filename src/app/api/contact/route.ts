import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Sender must be on a domain verified in Resend (e.g. chevisance.com) so the
// message is SPF/DKIM-authenticated and lands in the Inbox (not spam).
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@chevisance.com'
const FROM = `Chevisance Shipping <${FROM_EMAIL}>`

// Escape user-supplied values before placing them in HTML.
const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 1) Notify the office inbox (nishant@chevisance.com via CONTACT_EMAIL)
    await resend.emails.send({
      from: FROM,
      to: process.env.CONTACT_EMAIL!,
      reply_to: email,
      subject: `New Enquiry — ${subject} — ${name}`,
      text:
        `New Website Enquiry\n\n` +
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n` +
        `Subject: ${subject}\n\nMessage:\n${message}\n`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Phone:</strong> ${esc(phone)}</p>
        <p><strong>Subject:</strong> ${esc(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${esc(message).replace(/\n/g, '<br/>')}</p>
      `,
    })

    // 2) Auto-reply to the submitter
    await resend.emails.send({
      from: FROM,
      to: email,
      reply_to: process.env.CONTACT_EMAIL!,
      subject: 'Thank you for contacting Chevisance Shipping',
      text:
        `Thank you, ${name}!\n\n` +
        `We have received your enquiry and will get back to you within 24 hours.\n\n` +
        `— CHEVISANCE SHIPPING PVT. LTD.`,
      html: `
        <h2>Thank you, ${esc(name)}!</h2>
        <p>We have received your enquiry and will get back to you within 24 hours.</p>
        <p>— CHEVISANCE SHIPPING PVT. LTD.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
