import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Sender must be on a domain verified in Resend (e.g. chevisance.com) so the
// message is SPF/DKIM-authenticated and lands in the Inbox (not spam).
// new commit
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@chevisance.com'
const FROM = `Chevisance Shipping <${FROM_EMAIL}>`

const yn = (v: unknown) => (v ? 'Yes' : 'No')

// Escape user-supplied values before placing them in HTML.
const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export async function POST(req: NextRequest) {
  try {
    // Initialize Resend INSIDE the POST function to prevent build-time crashes on Cloudflare
    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await req.json()
    const {
      name,
      email,
      phone,
      freightType,
      departure,
      destination,
      commodity,
      company,
      weight,
      notes,
      incoterms,
      express,
      insurance,
    } = data

    if (
      !name ||
      !email ||
      !phone ||
      !freightType ||
      !departure ||
      !destination ||
      !commodity
    ) {
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
      subject: `Quote Request — ${freightType} — ${name}`,
      text:
        `New Quote Request\n\n` +
        `Name: ${name} | Company: ${company || 'N/A'}\n` +
        `Email: ${email} | Phone: ${phone}\n\n` +
        `Freight Type: ${freightType}\n` +
        `From: ${departure} -> To: ${destination}\n` +
        `Commodity: ${commodity}\n` +
        `Estimated Weight (kg): ${weight || 'Not provided'}\n\n` +
        `Incoterms Support: ${yn(incoterms)} | Express/Urgent: ${yn(express)} | Cargo Insurance: ${yn(insurance)}\n\n` +
        `Additional Notes:\n${notes || 'None'}\n`,
      html: `
        <h2>New Quote Request</h2>
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${esc(name)} | <strong>Company:</strong> ${esc(company || 'N/A')}</p>
        <p><strong>Email:</strong> ${esc(email)} | <strong>Phone:</strong> ${esc(phone)}</p>
        <h3>Shipment Details</h3>
        <p><strong>Freight Type:</strong> ${esc(freightType)}</p>
        <p><strong>From:</strong> ${esc(departure)} &rarr; <strong>To:</strong> ${esc(destination)}</p>
        <p><strong>Commodity:</strong> ${esc(commodity)}</p>
        <p><strong>Estimated Weight (kg):</strong> ${esc(weight || 'Not provided')}</p>
        <h3>Options</h3>
        <p>Incoterms Support: ${yn(incoterms)} | Express / Urgent: ${yn(express)} | Cargo Insurance: ${yn(insurance)}</p>
        <h3>Additional Notes</h3>
        <p>${notes ? esc(notes).replace(/\n/g, '<br/>') : 'None'}</p>
      `,
    })

    // 2) Auto-reply to the submitter
    await resend.emails.send({
      from: FROM,
      to: email,
      reply_to: process.env.CONTACT_EMAIL!,
      subject: 'We have received your quote request — Chevisance Shipping',
      text:
        `Thank you, ${name}!\n\n` +
        `Thank you for your enquiry! Our freight specialists will review your request and get back to you within 24 hours.\n\n` +
        `— CHEVISANCE SHIPPING PVT. LTD.`,
      html: `
        <h2>Thank you, ${esc(name)}!</h2>
        <p>Thank you for your enquiry! Our freight specialists will review your
        request and get back to you within 24 hours.</p>
        <p>— CHEVISANCE SHIPPING PVT. LTD.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quote form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
