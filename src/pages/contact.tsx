import AssessmentIcon from '@mui/icons-material/Assessment'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import EmailIcon from '@mui/icons-material/Email'
import GavelIcon from '@mui/icons-material/Gavel'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import SearchIcon from '@mui/icons-material/Search'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import heroBg from '../assets/grid-hero.png'
import FadeInBox from '../components/FadeInBox'
import { sendEmail, SUBJECT_ROUTES, type SubjectRoute } from '../services/emailService'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const INPUT_SX = {
  '& .MuiOutlinedInput-root': {
    fontFamily: "'Saira', sans-serif",
    fontSize: '0.9375rem',
    bgcolor: 'rgba(255,255,255,0.97)',
    '& fieldset': { borderColor: 'rgba(0,0,0,0.15)' },
    '&:hover fieldset': { borderColor: '#6699BB' },
    '&.Mui-focused fieldset': { borderColor: '#1D2B45', borderWidth: 2 },
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Saira', sans-serif",
    fontSize: '0.9375rem',
    '&.Mui-focused': { color: '#1D2B45' },
  },
}

const CONTACT_ITEMS = [
  { icon: <PhoneIcon sx={{ fontSize: 22, color: TEAL }} />, label: 'Phone', value: '(919) 790-9393', href: 'tel:9197909393' },
  { icon: <EmailIcon sx={{ fontSize: 22, color: TEAL }} />, label: 'Email', value: 'impound@integritytow.com', href: 'mailto:impound@integritytow.com' },
]

const SERVICE_AREAS = [
  'Raleigh, NC', 'Durham, NC', 'Chapel Hill, NC',
  'Greensboro, NC', 'Winston-Salem, NC', 'And surrounding communities',
]

const CATEGORIES = [
  {
    key: 'assessment',
    icon: <AssessmentIcon />,
    label: 'Property Assessment',
    shortLabel: 'Assessment',
    description: 'New to ITS? Let us evaluate your parking needs.',
  },
  {
    key: 'client-support',
    icon: <HeadsetMicIcon />,
    label: 'Client Support',
    shortLabel: 'Support',
    description: 'Already a partner? We\'re here to help.',
  },
  {
    key: 'permits',
    icon: <ConfirmationNumberIcon />,
    label: 'Permits & Signage',
    shortLabel: 'Permits',
    description: 'Request new permits, signage updates, or replacements.',
  },
  {
    key: 'enforcement',
    icon: <GavelIcon />,
    label: 'Enforcement Questions',
    shortLabel: 'Enforcement',
    description: 'Questions about an enforcement action or vehicle status.',
  },
  {
    key: 'support-ticket',
    icon: <SearchIcon />,
    label: 'Open Support Ticket',
    shortLabel: 'Ticket',
    description: 'General inquiries and support requests.',
  },
]

export default function Contact() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState<Record<string, string>>({})

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const cat = CATEGORIES[activeCategory]
    if (!form.firstName || !form.email || !form.message) return
    setStatus('sending')
    try {
      // Find matching route or fall back to General Inquiry
      const route: SubjectRoute = SUBJECT_ROUTES.find(r => r.value === 'General Inquiry') ?? SUBJECT_ROUTES[0]
      await sendEmail(route, {
        from_name: `${form.firstName} ${form.lastName || ''}`.trim(),
        from_email: form.email,
        phone: form.phone || 'Not provided',
        address: form.propertyName || form.propertyAddress || 'Not provided',
        message: `[${cat.label}]${form.accountId ? ` Account: ${form.accountId}` : ''}${form.requestType ? ` Type: ${form.requestType}` : ''}${form.vehicleInfo ? ` Vehicle: ${form.vehicleInfo}` : ''}${form.date ? ` Date: ${form.date}` : ''}${form.priority ? ` Priority: ${form.priority}` : ''}${form.unitCount ? ` Units: ${form.unitCount}` : ''}\n\n${form.message}`,
      })
      setStatus('success')
      setForm({})
    } catch {
      setStatus('error')
    }
  }

  const handleCategoryChange = (i: number) => {
    setActiveCategory(i)
    setStatus('idle')
    setForm({})
  }

  const cat = CATEGORIES[activeCategory]

  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 5, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(13,25,41,0.78)' }} />
        <Box sx={{ position: 'absolute', inset: 0, ...DOT_GRID }} />
        <Box sx={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
              How Can We Help?
            </Typography>
          </Box>
          <Typography component="h1" sx={{
            fontFamily: "'Saira', sans-serif", fontWeight: 800,
            fontSize: { xs: '2.6rem', md: '3.6rem', lg: '4.2rem' },
            color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 2.5, maxWidth: 700,
          }}>
            Contact <Box component="span" sx={{ color: TEAL }}>Us</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.62)', fontSize: { xs: '1rem', md: '1.175rem' }, lineHeight: 1.8, maxWidth: 560 }}>
            Select a category below to route your request to the right team.
          </Typography>

          {/* Contact callout row */}
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, flexWrap: 'wrap', mt: 5 }}>
            {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
              <FadeInBox key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(102,153,187,0.18) 0%, rgba(102,153,187,0.04) 70%)',
                  border: '1px solid rgba(102,153,187,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {icon}
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', fontSize: '0.65rem', mb: 0.25 }}>
                    {label}
                  </Typography>
                  {href ? (
                    <Box component="a" href={href} sx={{ color: '#fff', fontFamily: "'Saira', sans-serif", fontWeight: 600, fontSize: { xs: '0.875rem', sm: '0.95rem' }, textDecoration: 'none', '&:hover': { color: TEAL }, wordBreak: 'break-all' }}>
                      {value}
                    </Box>
                  ) : (
                    <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: { xs: '0.875rem', sm: '0.95rem' }, fontFamily: "'Saira', sans-serif" }}>{value}</Typography>
                  )}
                </Box>
              </FadeInBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 6, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }}>

            {/* Left: contact info + service areas */}
            <Grid size={{ xs: 12, md: 4 }}>
              <FadeInBox direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>
                    Get In Touch
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '1.9rem' }, mb: 2 }}>
                  Ready When You Are
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, mb: 5 }}>
                  Choose a request type to get started, or call us directly for immediate assistance.
                </Typography>

                {/* Contact items */}
                {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                  <Box key={label} sx={{
                    display: 'flex', gap: 2, alignItems: 'flex-start', mb: 3,
                    pb: 3, borderBottom: '1px solid rgba(255,255,255,0.06)',
                    '&:last-of-type': { borderBottom: 'none' },
                  }}>
                    <Box sx={{
                      mt: 0.25, flexShrink: 0,
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(102,153,187,0.1)',
                      border: '1px solid rgba(102,153,187,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', mb: 0.25, fontSize: '0.65rem' }}>
                        {label}
                      </Typography>
                      {href ? (
                        <Box component="a" href={href} sx={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Saira', sans-serif", fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { color: TEAL } }}>
                          {value}
                        </Box>
                      ) : (
                        <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.95rem', fontFamily: "'Saira', sans-serif" }}>{value}</Typography>
                      )}
                    </Box>
                  </Box>
                ))}

                {/* Service areas */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.12em', fontSize: '0.65rem', display: 'block', mb: 2 }}>
                    Service Areas
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {SERVICE_AREAS.map((area) => (
                      <Box key={area} sx={{
                        display: 'flex', alignItems: 'center', gap: 0.75,
                        bgcolor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 1.5, px: 1.5, py: 0.6,
                      }}>
                        <LocationOnIcon sx={{ fontSize: 12, color: TEAL, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', wordBreak: 'break-word' }}>{area}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </FadeInBox>
            </Grid>

            {/* Right: category tabs + form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInBox direction="left">
                <Box sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: '#fff',
                  borderRadius: 3,
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                  borderTop: `4px solid ${TEAL}`,
                }}>
                  {/* Category selector */}
                  <Box sx={{
                    display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap',
                  }}>
                    {CATEGORIES.map((c, i) => (
                      <Box
                        key={c.key}
                        onClick={() => handleCategoryChange(i)}
                        sx={{
                          display: 'flex', alignItems: 'center', gap: 1,
                          px: { xs: 1.5, sm: 2 }, py: 1, borderRadius: 1.5,
                          cursor: 'pointer',
                          bgcolor: activeCategory === i ? NAVY : 'rgba(0,0,0,0.04)',
                          color: activeCategory === i ? '#fff' : '#4a5568',
                          border: `1px solid ${activeCategory === i ? NAVY : 'rgba(0,0,0,0.1)'}`,
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: activeCategory === i ? NAVY : 'rgba(0,0,0,0.08)',
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: { xs: 16, sm: 18 },
                            color: activeCategory === i ? TEAL : 'rgba(0,0,0,0.35)',
                          },
                        }}
                      >
                        {c.icon}
                        <Typography sx={{
                          fontFamily: "'Saira', sans-serif",
                          fontWeight: 600,
                          fontSize: { xs: '0.72rem', sm: '0.8rem' },
                          letterSpacing: '0.02em',
                          display: { xs: 'none', sm: 'block' },
                        }}>
                          {c.label}
                        </Typography>
                        <Typography sx={{
                          fontFamily: "'Saira', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.72rem',
                          letterSpacing: '0.02em',
                          display: { xs: 'block', sm: 'none' },
                        }}>
                          {c.shortLabel}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Category description */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ color: NAVY, fontWeight: 700, mb: 0.5, fontFamily: "'Saira', sans-serif" }}>
                      {cat.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7a8d' }}>
                      {cat.description}
                    </Typography>
                  </Box>

                  {status === 'success' ? (
                    <Box sx={{ py: 4, textAlign: 'center' }}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 52, color: TEAL, mb: 1.5 }} />
                      <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700, mb: 1 }}>
                        Request Submitted
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#4a5568', mb: 3 }}>
                        Thanks for reaching out. We'll be in touch shortly.
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => { setStatus('idle'); setForm({}) }}
                        sx={{ borderColor: NAVY, color: NAVY, fontWeight: 600, '&:hover': { borderColor: TEAL, color: TEAL } }}
                      >
                        Submit Another Request
                      </Button>
                    </Box>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                      <Grid container spacing={1.5}>
                        {/* Common fields: name, phone, email */}
                        <Grid size={{ xs: 6 }}>
                          <TextField fullWidth label="First Name *" value={form.firstName || ''} onChange={set('firstName')} required sx={INPUT_SX} />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <TextField fullWidth label="Last Name" value={form.lastName || ''} onChange={set('lastName')} sx={INPUT_SX} />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <TextField fullWidth label="Phone" type="tel" value={form.phone || ''} onChange={set('phone')} sx={INPUT_SX} />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <TextField fullWidth label="Email *" type="email" value={form.email || ''} onChange={set('email')} required sx={INPUT_SX} />
                        </Grid>

                        {/* Category-specific fields */}
                        {cat.key === 'assessment' && (
                          <>
                            <Grid size={{ xs: 12 }}>
                              <TextField fullWidth label="Property Name" value={form.propertyName || ''} onChange={set('propertyName')} sx={INPUT_SX} />
                            </Grid>
                            <Grid size={{ xs: 8 }}>
                              <TextField fullWidth label="Property Address" value={form.propertyAddress || ''} onChange={set('propertyAddress')} sx={INPUT_SX} />
                            </Grid>
                            <Grid size={{ xs: 4 }}>
                              <TextField fullWidth label="Unit Count" type="number" value={form.unitCount || ''} onChange={set('unitCount')} sx={INPUT_SX} />
                            </Grid>
                          </>
                        )}

                        {cat.key === 'client-support' && (
                          <>
                            <Grid size={{ xs: 7 }}>
                              <TextField fullWidth label="Property Name" value={form.propertyName || ''} onChange={set('propertyName')} sx={INPUT_SX} />
                            </Grid>
                            <Grid size={{ xs: 5 }}>
                              <TextField fullWidth label="Account / Client ID" value={form.accountId || ''} onChange={set('accountId')} sx={INPUT_SX} />
                            </Grid>
                          </>
                        )}

                        {cat.key === 'permits' && (
                          <>
                            <Grid size={{ xs: 7 }}>
                              <TextField fullWidth label="Property Name" value={form.propertyName || ''} onChange={set('propertyName')} sx={INPUT_SX} />
                            </Grid>
                            <Grid size={{ xs: 5 }}>
                              <FormControl fullWidth sx={INPUT_SX}>
                                <InputLabel>Request Type</InputLabel>
                                <Select
                                  label="Request Type"
                                  value={form.requestType || ''}
                                  onChange={e => setForm(prev => ({ ...prev, requestType: e.target.value }))}
                                  sx={{ fontFamily: "'Saira', sans-serif", fontSize: '0.9375rem' }}
                                >
                                  <MenuItem value="New Permits" sx={{ fontFamily: "'Saira', sans-serif" }}>New Permits</MenuItem>
                                  <MenuItem value="Permit Replacement" sx={{ fontFamily: "'Saira', sans-serif" }}>Permit Replacement</MenuItem>
                                  <MenuItem value="Signage Update" sx={{ fontFamily: "'Saira', sans-serif" }}>Signage Update</MenuItem>
                                  <MenuItem value="Signage Install" sx={{ fontFamily: "'Saira', sans-serif" }}>Signage Install</MenuItem>
                                  <MenuItem value="Other" sx={{ fontFamily: "'Saira', sans-serif" }}>Other</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                          </>
                        )}

                        {cat.key === 'enforcement' && (
                          <>
                            <Grid size={{ xs: 7 }}>
                              <TextField fullWidth label="Property Name" value={form.propertyName || ''} onChange={set('propertyName')} sx={INPUT_SX} />
                            </Grid>
                            <Grid size={{ xs: 5 }}>
                              <TextField fullWidth label="Date of Incident" type="date" value={form.date || ''} onChange={set('date')} InputLabelProps={{ shrink: true }} sx={INPUT_SX} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                              <TextField fullWidth label="Vehicle Info (make, model, plate)" value={form.vehicleInfo || ''} onChange={set('vehicleInfo')} sx={INPUT_SX} />
                            </Grid>
                          </>
                        )}

                        {cat.key === 'support-ticket' && (
                          <Grid size={{ xs: 12 }}>
                            <FormControl fullWidth sx={INPUT_SX}>
                              <InputLabel>Priority</InputLabel>
                              <Select
                                label="Priority"
                                value={form.priority || ''}
                                onChange={e => setForm(prev => ({ ...prev, priority: e.target.value }))}
                                sx={{ fontFamily: "'Saira', sans-serif", fontSize: '0.9375rem' }}
                              >
                                <MenuItem value="Low" sx={{ fontFamily: "'Saira', sans-serif" }}>Low</MenuItem>
                                <MenuItem value="Normal" sx={{ fontFamily: "'Saira', sans-serif" }}>Normal</MenuItem>
                                <MenuItem value="High" sx={{ fontFamily: "'Saira', sans-serif" }}>High</MenuItem>
                                <MenuItem value="Urgent" sx={{ fontFamily: "'Saira', sans-serif" }}>Urgent</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        )}

                        {/* Message — always present */}
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label={cat.key === 'assessment' ? 'Current pain points / notes *' : 'Message *'}
                            multiline
                            rows={4}
                            value={form.message || ''}
                            onChange={set('message')}
                            required
                            sx={INPUT_SX}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            disabled={status === 'sending'}
                            endIcon={status === 'sending' ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                            sx={{
                              bgcolor: NAVY, color: '#fff', fontWeight: 700,
                              py: 1.5, fontSize: '1rem',
                              '&:hover': { bgcolor: '#2d4060' },
                              '&:disabled': { bgcolor: '#6b7a8d', color: '#fff' },
                              boxShadow: 'none',
                            }}
                          >
                            {status === 'sending' ? 'Sending...' : 'Submit Request'}
                          </Button>
                        </Grid>
                      </Grid>

                      {status === 'error' && (
                        <Typography variant="body2" sx={{ color: '#c0392b', mt: 1.5, textAlign: 'center' }}>
                          Something went wrong. Please try again or call us at (919) 790-9393.
                        </Typography>
                      )}
                    </Box>
                  )}
                </Box>
              </FadeInBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
