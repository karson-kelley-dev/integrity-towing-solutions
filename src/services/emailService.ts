// ── Contact form email ────────────────────────────────────────────────────────
// The forms POST here → a Vercel serverless function (api/contact.js) → Resend.
// This replaces the old client-side EmailJS flow: no API key in the browser, the
// recipient isn't exposed, and mail sends from the company's own domain.
//
// Same-origin path — Vercel serves the function next to the site, so no CORS.
const CONTACT_ENDPOINT = '/api/contact'

// ── Subject dropdown ──────────────────────────────────────────────────────────
// Labels + values for the <Select>. Routing (who receives it) now lives in the
// serverless function, so no per-subject service/template ids here anymore.
export interface SubjectRoute {
  label: string
  value: string
}

export const SUBJECT_ROUTES: SubjectRoute[] = [
  { label: 'Parking Enforcement', value: 'Parking Enforcement' },
  { label: 'Emergency Response', value: 'Emergency Response' },
  { label: 'Mass Relocation', value: 'Mass Relocation' },
  { label: 'Employment Application', value: 'Employment Application' },
  { label: 'General Inquiry', value: 'General Inquiry' },
]

// ── Send ──────────────────────────────────────────────────────────────────────
// Signature unchanged from the EmailJS version, so the forms don't change.
export interface EmailPayload {
  from_name: string
  from_email: string
  phone: string
  address: string
  message: string
}

export async function sendEmail(route: SubjectRoute, payload: EmailPayload): Promise<void> {
  const res = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: payload.from_name,
      email: payload.from_email,
      phone: payload.phone,
      address: payload.address,
      subject: route.value,
      message: payload.message,
    }),
  })
  if (!res.ok) {
    throw new Error(`Contact send failed: ${res.status}`)
  }
}
