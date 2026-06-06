'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone required'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof schema>

const subjectOptions = [
  'General Enquiry',
  'Air Freight',
  'Sea Freight',
  'Domestic Logistics',
  'Warehouse Services',
  'Other',
]

interface ContactFormProps {
  /** Override the submit button label (e.g. "Free Consultation" on the home teaser). */
  submitLabel?: string
}

export default function ContactForm({
  submitLabel = 'Send Message',
}: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register('name')}
            placeholder="Your Name*"
            className="input-base"
            aria-label="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address*"
            className="input-base"
            aria-label="Email Address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Phone Number*"
            className="input-base"
            aria-label="Phone Number"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <select
            {...register('subject')}
            className="input-base"
            aria-label="Select Subject"
            defaultValue=""
          >
            <option value="" disabled>
              Select Subject
            </option>
            {subjectOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>
      <div>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Your Message*"
          className="input-base resize-none"
          aria-label="Your Message"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : submitLabel}
        {status !== 'sending' && <ArrowRight size={18} />}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">
          Thank you! We have received your enquiry and will get back to you
          within 24 hours.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}
