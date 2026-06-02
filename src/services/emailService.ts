import emailjs from '@emailjs/browser'

// ── Shared public key ─────────────────────────────────────────────────────────
// Found in EmailJS dashboard → Account → Public Key
export const EMAILJS_PUBLIC_KEY = 'aVPic-0A3lHEPhWLS'

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
    label: 'Parking Enforcement',
    value: 'Parking Enforcement',
    serviceId: 'service_hei7b9a',
    templateId: 'template_iweg7am',
  },
  {
    label: 'Emergency Response',
    value: 'Emergency Response',
    serviceId: 'service_hei7b9a',
    templateId: 'template_iweg7am',
  },
  {
    label: 'Mass Relocation',
    value: 'Mass Relocation',
    serviceId: 'service_hei7b9a',
    templateId: 'template_iweg7am',
  },
  {
    label: 'Employment Application',
    value: 'Employment Application',
    serviceId: 'service_hei7b9a',
    templateId: 'template_iweg7am',
  },
  {
    label: 'General Inquiry',
    value: 'General Inquiry',
    serviceId: 'service_hei7b9a',
    templateId: 'template_iweg7am',
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
