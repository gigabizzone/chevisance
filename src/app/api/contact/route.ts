import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// The trick: We give it a fake key so it doesn't crash during the build step. 
// At runtime, Cloudflare will automatically replace it with your real key!
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummykey1234567890123456789')

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@chevisance.com'
const FROM = `Chevisance Shipping <${FROM_EMAIL}>`

const yn = (v: unknown) => (v ? 'Yes' : 'No')

const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export async function POST(req: NextRequest) {
  try {
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

    // 1) Notify the office inbox
    await resend.emails.send({
      from: FROM,
      to: process.env.CONTACT_EMAIL || 'nishant@chevisance.com',
      reply_to: email,
      subject: `Quote Request — ${freightType} — ${name}`,
      text: `New Quote Request\nName: ${name}\nFreight Type: ${freightType}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${esc(name)} | <strong>Company:</strong> ${esc(company || 'N/A')}</p>
        <p><strong>Email:</strong> ${esc(email)} | <strong>Phone:</strong> ${esc(phone)}</p>
        <h3>Shipment Details</h3>
        <p><strong>Freight Type:</strong> ${esc(freightType)}</p>
        <p><strong>From:</strong> ${esc(departure)} &rarr; <strong>To:</strong> ${esc(destination)}</p>
        <p><strong>Commodity:</strong> ${esc(commodity)}</p>
      `,
    })

    // 2) Auto-reply to the submitter
    await resend.emails.send({
      from: FROM,
      to: email,
      reply_to: process.env.CONTACT_EMAIL || 'nishant@chevisance.com',
      subject: 'We have received your quote request — Chevisance Shipping',
      text: `Thank you, ${name}! Our freight specialists will review your request and get back to you within 24 hours.`,
      html: `
        <h2>Thank you, ${esc(name)}!</h2>
        <p>Our freight specialists will review your request and get back to you within 24 hours.</p>
        <p>— CHEVISANCE SHIPPING PVT. LTD.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quote form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
