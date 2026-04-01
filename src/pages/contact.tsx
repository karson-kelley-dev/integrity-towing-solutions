import {
  Box,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react'

// ── EmailJS config ────────────────────────────────────────────────────────────
// 1. Sign up at emailjs.com
// 2. Create a service connected to your email provider
// 3. Create a template with variables: from_name, from_email, phone, subject, message, to_email
// 4. Replace these placeholders with your actual IDs
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

// ── Subject → destination inbox ───────────────────────────────────────────────
// Update these email addresses to match your actual inboxes
const SUBJECT_ROUTING: Record<string, string> = {
  'General Inquiry':                'impound@integritytow.com',
  'Private Property Towing':        'impound@integritytow.com',
  'Emergency Response':             'impound@integritytow.com',
  'Mass Relocation':                'impound@integritytow.com',
  'Find My Vehicle / Retrieval':    'impound@integritytow.com',
  'Employment / Careers':           'impound@integritytow.com',
  'Billing / Account':              'impound@integritytow.com',
  'Other':                          'impound@integritytow.com',
}

// ── Brand motif ───────────────────────────────────────────────────────────────
function TripleArrows({ color = '#E1AD00', height = 60, opacity = 1 }: { color?: string; height?: number; opacity?: number }) {
  const width = height * (117 / 60)
  return (
    <svg viewBox="0 0 117 60" width={width} height={height} style={{ opacity, display: 'block' }} xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 23,0 35,30 23,60 0,60 12,30" fill={color} />
      <polygon points="41,0 64,0 76,30 64,60 41,60 53,30" fill={color} />
      <polygon points="82,0 105,0 117,30 105,60 82,60 94,30" fill={color} />
    </svg>
  )
}

function WaveSeparator({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  const path = flip
    ? 'M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z'
    : 'M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z'
  return (
    <Box sx={{ display: 'block', lineHeight: 0, background: to, mt: '-1px', pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '72px' }}>
        <path d={path} fill={from} />
      </svg>
    </Box>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

// ── Shared input styles ───────────────────────────────────────────────────────
const inputSx = {
  '& .MuiOutlinedInput-root': {
    fontFamily: "'Saira', sans-serif",
    '& fieldset': { borderColor: 'rgba(29,43,69,0.2)' },
    '&:hover fieldset': { borderColor: '#1D2B45' },
    '&.Mui-focused fieldset': { borderColor: '#E1AD00', borderWidth: 2 },
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Saira', sans-serif",
    '&.Mui-focused': { color: '#E1AD00' },
  },
  '& .MuiInputBase-input': { fontFamily: "'Saira', sans-serif" },
}

// ── Component ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) return
    setStatus('sending')

    const toEmail = SUBJECT_ROUTING[form.subject] ?? 'impound@integritytow.com'

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || 'Not provided',
          subject: form.subject,
          message: form.message,
          to_email: toEmail,
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <Box>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(150deg, #1D2B45 0%, #253654 55%, #2E4168 100%)',
          pt: { xs: 13, md: 17 },
          pb: { xs: 8, md: 12 },
          overflow: 'hidden',
          minHeight: { xs: '38vh', md: 'auto' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#E1AD00" height={260} opacity={0.06} />
        </Box>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 }, position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <Typography sx={{ color: '#E1AD00', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', mb: 1.5, fontFamily: "'Saira', sans-serif" }}>
              Contact
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
                color: '#ffffff',
                lineHeight: 1.05,
                mb: 2.5,
                fontFamily: "'Saira', sans-serif",
                letterSpacing: { xs: '-0.5px', md: '-1.5px' },
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ width: 60, height: 4, background: '#E1AD00', borderRadius: 2 }} />
          </motion.div>
        </Container>
      </Box>

      {/* ── Wave: hero → form ─────────────────────────────────────────────── */}
      <WaveSeparator from="#1D2B45" to="#ffffff" />

      {/* ── Form + Info ───────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }}>

            {/* Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <Typography
                  sx={{ color: '#0057A5', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', mb: 1.5, fontFamily: "'Saira', sans-serif" }}
                >
                  Send Us a Message
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#1D2B45', mb: 1.5, fontSize: { xs: '1.8rem', md: '2.1rem' } }}>
                  Contact Us
                </Typography>
                <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 2.5, borderRadius: 1 }} />
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.8, mb: 4, fontSize: '0.95rem' }}>
                  Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                {status === 'success' ? (
                  <Box
                    sx={{
                      p: 4,
                      border: '1px solid rgba(29,43,69,0.1)',
                      borderLeft: '4px solid #E1AD00',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                  >
                    <CheckCircle size={28} color="#E1AD00" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#1D2B45', mb: 0.75, fontSize: '1rem', fontFamily: "'Saira', sans-serif" }}>
                        Message Sent
                      </Typography>
                      <Typography sx={{ color: '#6B7A8D', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        Thanks for reaching out. We'll be in touch shortly.
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2.5}>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Full Name *"
                          fullWidth
                          value={form.name}
                          onChange={handleChange('name')}
                          required
                          sx={inputSx}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Email Address *"
                          type="email"
                          fullWidth
                          value={form.email}
                          onChange={handleChange('email')}
                          required
                          sx={inputSx}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Phone Number"
                          type="tel"
                          fullWidth
                          value={form.phone}
                          onChange={handleChange('phone')}
                          sx={inputSx}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Subject *"
                          select
                          fullWidth
                          value={form.subject}
                          onChange={handleChange('subject')}
                          required
                          sx={inputSx}
                        >
                          {Object.keys(SUBJECT_ROUTING).map((s) => (
                            <MenuItem key={s} value={s} sx={{ fontFamily: "'Saira', sans-serif", fontSize: '0.9rem' }}>
                              {s}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Message *"
                          multiline
                          rows={5}
                          fullWidth
                          value={form.message}
                          onChange={handleChange('message')}
                          required
                          sx={inputSx}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Box
                          component="button"
                          type="submit"
                          disabled={status === 'sending'}
                          sx={{
                            width: '100%',
                            py: 1.9,
                            background: status === 'sending' ? 'rgba(225,173,0,0.7)' : '#E1AD00',
                            color: '#1D2B45',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            fontFamily: "'Saira', sans-serif",
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase',
                            border: 'none',
                            borderRadius: 1,
                            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1.5,
                            transition: 'background 0.2s',
                            '&:hover:not(:disabled)': { background: '#c99c00' },
                          }}
                        >
                          {status === 'sending' ? (
                            <>
                              <CircularProgress size={16} sx={{ color: '#1D2B45' }} />
                              Sending…
                            </>
                          ) : 'Send Message'}
                        </Box>
                      </Grid>

                      {status === 'error' && (
                        <Grid size={{ xs: 12 }}>
                          <Typography sx={{ color: '#c0392b', fontSize: '0.85rem', fontFamily: "'Saira', sans-serif" }}>
                            Something went wrong. Please try again or call us directly at (919) 790-9393.
                          </Typography>
                        </Grid>
                      )}

                    </Grid>
                  </Box>
                )}
              </motion.div>
            </Grid>

            {/* Contact info sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <Box
                  sx={{
                    background: '#1D2B45',
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    position: { md: 'sticky' },
                    top: { md: 100 },
                  }}
                >
                  <Typography sx={{ color: '#E1AD00', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', mb: 1.25, fontFamily: "'Saira', sans-serif" }}>
                    Reach Us Directly
                  </Typography>
                  <Typography sx={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', mb: 1.5, fontFamily: "'Saira', sans-serif", lineHeight: 1.3 }}>
                    We're Available 24/7
                  </Typography>
                  <Box sx={{ width: 36, height: 3, background: '#E1AD00', mb: 3, borderRadius: 1 }} />

                  {[
                    { Icon: Phone, label: 'Phone', value: '(919) 790-9393', href: 'tel:9197909393' },
                    { Icon: Mail, label: 'Email', value: 'impound@integritytow.com', href: 'mailto:impound@integritytow.com' },
                  ].map(({ Icon, label, value, href }) => (
                    <Box key={label} sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'flex-start' }}>
                      <Box sx={{ width: 38, height: 38, borderRadius: 1, background: 'rgba(225,173,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} color="#E1AD00" strokeWidth={1.5} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Saira', sans-serif", mb: 0.25 }}>
                          {label}
                        </Typography>
                        <Box
                          component="a"
                          href={href}
                          sx={{ color: '#ffffff', fontSize: '0.9rem', fontFamily: "'Saira', sans-serif", textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: '#E1AD00' } }}
                        >
                          {value}
                        </Box>
                      </Box>
                    </Box>
                  ))}

                  <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', pt: 3, mb: 3 }}>
                    <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem', mb: 1.5, fontFamily: "'Saira', sans-serif" }}>
                      Business Hours
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: "'Saira', sans-serif" }}>
                      Monday – Sunday<br />24 Hours / 7 Days a Week
                    </Typography>
                  </Box>

                  <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', pt: 3 }}>
                    <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem', mb: 2, fontFamily: "'Saira', sans-serif" }}>
                      Locations
                    </Typography>
                    {[
                      { city: 'Raleigh', address: '3201 Durham Drive, NC 27603' },
                      { city: 'Durham', address: '1025 Harvest Street, NC 27704' },
                      { city: 'Greensboro', address: '2040 Fairview Street, NC 27405' },
                    ].map(({ city, address }) => (
                      <Box key={city} sx={{ display: 'flex', gap: 1.5, mb: 2, alignItems: 'flex-start' }}>
                        <MapPin size={15} color="#E1AD00" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 3 }} />
                        <Box>
                          <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.82rem', fontFamily: "'Saira', sans-serif" }}>{city}</Typography>
                          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontFamily: "'Saira', sans-serif", lineHeight: 1.5 }}>{address}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </Box>

    </Box>
  )
}

export default Contact
