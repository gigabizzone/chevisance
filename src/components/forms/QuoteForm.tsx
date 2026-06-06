'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(7, 'Phone required'),
  email: z.string().email('Valid email required'),
  freightType: z.string().min(1, 'Please select a freight type'),
  departure: z.string().min(2, 'Departure required'),
  destination: z.string().min(2, 'Destination required'),
  commodity: z.string().min(2, 'Commodity required'),
  company: z.string().optional(),
  weight: z.string().optional(),
  notes: z.string().optional(),
  incoterms: z.boolean().optional(),
  express: z.boolean().optional(),
  insurance: z.boolean().optional(),
})

type QuoteFormData = z.infer<typeof schema>

const freightTypes = [
  'Air Freight',
  'Sea Freight',
  'Domestic Logistics',
  'Warehouse Services',
]

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: QuoteFormData) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const err = (msg?: string) =>
    msg ? <p className="text-red-500 text-xs mt-1">{msg}</p> : null

  return (
    <div className="grid lg:grid-cols-[1fr_1.6fr] rounded-2xl overflow-hidden shadow-card border border-border">
      {/* Left info panel */}
      <div className="bg-primary text-white p-8 lg:p-10">
        <h2 className="font-heading font-bold text-2xl mb-3 text-white">
          REQUEST A QUOTE
        </h2>
        <p className="text-white/70 text-sm mb-8">
          Tell us about your shipment and our freight specialists will get back
          to you with a tailored quotation within 24 hours.
        </p>
        <ul className="space-y-5 text-sm">
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-accent" />
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="hover:text-accent transition-colors"
            >
              {siteConfig.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-accent" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-accent transition-colors break-all"
            >
              {siteConfig.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Clock size={18} className="text-accent" />
            <span>
              {siteConfig.hours.days}, {siteConfig.hours.time}
            </span>
          </li>
        </ul>
      </div>

      {/* Right form panel */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 lg:p-10 space-y-6"
        noValidate
      >
        {/* Personal Data */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            Personal Data
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register('name')}
                placeholder="Your Name"
                className="input-base"
                aria-label="Your Name"
              />
              {err(errors.name?.message)}
            </div>
            <div>
              <input
                {...register('phone')}
                type="tel"
                placeholder="Phone Number"
                className="input-base"
                aria-label="Phone Number"
              />
              {err(errors.phone?.message)}
            </div>
            <div className="sm:col-span-2">
              <input
                {...register('email')}
                type="email"
                placeholder="Email Address"
                className="input-base"
                aria-label="Email Address"
              />
              {err(errors.email?.message)}
            </div>
          </div>
        </div>

        {/* Shipment Information */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            Shipment Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <select
                {...register('freightType')}
                className="input-base"
                aria-label="Freight Type"
                defaultValue=""
              >
                <option value="" disabled>
                  Freight Type
                </option>
                {freightTypes.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              {err(errors.freightType?.message)}
            </div>
            <div>
              <input
                {...register('departure')}
                placeholder="City or Port of Origin"
                className="input-base"
                aria-label="Departure City / Port"
              />
              {err(errors.departure?.message)}
            </div>
            <div>
              <input
                {...register('destination')}
                placeholder="City or Port of Destination"
                className="input-base"
                aria-label="Destination City / Port"
              />
              {err(errors.destination?.message)}
            </div>
            <div>
              <input
                {...register('commodity')}
                placeholder="e.g. Agricultural Goods, Electronics, Chemicals"
                className="input-base"
                aria-label="Commodity / Goods Type"
              />
              {err(errors.commodity?.message)}
            </div>
            <div>
              <input
                {...register('company')}
                placeholder="Your Company Name (optional)"
                className="input-base"
                aria-label="Company Name"
              />
            </div>
            <div className="sm:col-span-2">
              <input
                {...register('weight')}
                type="number"
                placeholder="e.g. 500"
                className="input-base"
                aria-label="Estimated Weight in kg"
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                {...register('notes')}
                rows={4}
                placeholder="Any special requirements, packaging details, or other information"
                className="input-base resize-none"
                aria-label="Additional Notes"
              />
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
          {[
            { id: 'incoterms', label: 'Incoterms Support Required' },
            { id: 'express', label: 'Express / Urgent Delivery' },
            { id: 'insurance', label: 'Cargo Insurance Required' },
          ].map((opt) => (
            <label
              key={opt.id}
              className="flex items-center gap-2 text-sm text-text-dark cursor-pointer"
            >
              <input
                type="checkbox"
                {...register(opt.id as 'incoterms' | 'express' | 'insurance')}
                className="w-4 h-4 accent-accent"
              />
              {opt.label}
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-dark w-full justify-center disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending…' : 'SUBMIT REQUEST'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm">
            Thank you for your enquiry! Our freight specialists will review your
            request and get back to you within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-sm">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </form>
    </div>
  )
}
