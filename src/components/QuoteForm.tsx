import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

interface QuoteFormProps {
  heading?: string
  defaultSubject?: string
}

export default function QuoteForm({
  heading = 'Request a Quote:',
  defaultSubject = 'General Inquiry',
}: QuoteFormProps) {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', address: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.firstName} ${form.lastName}`.trim(),
          from_email: form.email,
          phone: form.phone || 'Not provided',
          address: form.address || 'Not provided',
          subject: defaultSubject,
          message: form.message,
          to_email: 'impound@integritytow.com',
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ firstName: '', lastName: '', phone: '', email: '', address: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '20px 0', textAlign: 'center' }}>
        <p style={{ color: '#1D2B45', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Message Sent!</p>
        <p style={{ color: '#42454A', fontSize: 16 }}>Thanks for reaching out. We'll be in touch shortly.</p>
      </div>
    )
  }

  return (
    <div>
      {heading && <h4 style={{ textAlign: 'center' }}>{heading}</h4>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-2 mb-2">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="First Name *"
              value={form.firstName}
              onChange={set('firstName')}
              required
              style={{ height: 52, borderRadius: 8, border: '1px solid #ccc', fontSize: 16, padding: '0 14px', fontFamily: 'Saira, sans-serif' }}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={form.lastName}
              onChange={set('lastName')}
              style={{ height: 52, borderRadius: 8, border: '1px solid #ccc', fontSize: 16, padding: '0 14px', fontFamily: 'Saira, sans-serif' }}
            />
          </div>
        </div>
        <div className="row g-2 mb-2">
          <div className="col-6">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone number"
              value={form.phone}
              onChange={set('phone')}
              style={{ height: 52, borderRadius: 8, border: '1px solid #ccc', fontSize: 16, padding: '0 14px', fontFamily: 'Saira, sans-serif' }}
            />
          </div>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email *"
              value={form.email}
              onChange={set('email')}
              required
              style={{ height: 52, borderRadius: 8, border: '1px solid #ccc', fontSize: 16, padding: '0 14px', fontFamily: 'Saira, sans-serif' }}
            />
          </div>
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Property / Address"
            value={form.address}
            onChange={set('address')}
            style={{ height: 52, borderRadius: 8, border: '1px solid #ccc', fontSize: 16, padding: '0 14px', fontFamily: 'Saira, sans-serif' }}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="(required) Comments or notes *"
            rows={5}
            value={form.message}
            onChange={set('message')}
            required
            style={{ borderRadius: 8, border: '1px solid #ccc', fontSize: 16, padding: '10px 14px', fontFamily: 'Saira, sans-serif', resize: 'none' }}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="lmore-btn-dark"
            style={{ width: '100%', cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}
          >
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
        </div>
        {status === 'error' && (
          <p style={{ color: '#c0392b', fontSize: 14, marginTop: 10, textAlign: 'center' }}>
            Something went wrong. Please try again or call us at (919) 790-9393.
          </p>
        )}
      </form>
    </div>
  )
}
