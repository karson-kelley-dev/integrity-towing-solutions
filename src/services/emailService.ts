import emailjs from '@emailjs/browser'

// ── Shared public key ─────────────────────────────────────────────────────────
// Found in EmailJS dashboard → Account → Public Key
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

// ── Subject → routing map ─────────────────────────────────────────────────────
// Each entry maps a dropdown option to a specific EmailJS service + template.
// serviceId  — EmailJS Email Service (one per sending email account)
// templateId — EmailJS Template (configure the "To" address inside each template)
export interface SubjectRoute {
  label: string     // shown in the dropdown
  value: string     // used as the email subject line
  serviceId: string
  templateId: string
}

export const SUBJECT_ROUTES: SubjectRoute[] = [
  {
    label: 'Private Property Towing',
    value: 'Private Property Towing',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
  },
  {
    label: 'Emergency Response',
    value: 'Emergency Response',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
  },
  {
    label: 'Mass Relocation',
    value: 'Mass Relocation',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
  },
  {
    label: 'Employment Application',
    value: 'Employment Application',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
  },
  {
    label: 'General Inquiry',
    value: 'General Inquiry',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
  },
]

// ── Payload sent to every template ───────────────────────────────────────────
// Template variables: {{from_name}}, {{from_email}}, {{phone}},
//                     {{address}}, {{subject}}, {{message}}
export interface EmailPayload {
  from_name: string
  from_email: string
  phone: string
  address: string
  message: string
}

// ── Send helper ───────────────────────────────────────────────────────────────
export async function sendEmail(route: SubjectRoute, payload: EmailPayload): Promise<void> {
  await emailjs.send(
    route.serviceId,
    route.templateId,
    { ...payload, subject: route.value },
    EMAILJS_PUBLIC_KEY,
  )
}
