import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import SendIcon from '@mui/icons-material/Send'

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const INPUT_SX = {
  '& .MuiOutlinedInput-root': {
    fontFamily: "'Saira', sans-serif",
    fontSize: '0.9375rem',
    bgcolor: 'rgba(255,255,255,0.97)',
    '& fieldset': { borderColor: 'rgba(0,0,0,0.15)' },
    '&:hover fieldset': { borderColor: '#3EAACC' },
    '&.Mui-focused fieldset': { borderColor: '#1D2B45', borderWidth: 2 },
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Saira', sans-serif",
    fontSize: '0.9375rem',
    '&.Mui-focused': { color: '#1D2B45' },
  },
}

interface QuoteFormProps {
  heading?: string
  defaultSubject?: string
  dark?: boolean
}

export default function QuoteForm({
  heading = 'Request a Quote',
  defaultSubject = 'General Inquiry',
  dark = false,
}: QuoteFormProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  })
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

  const textColor = dark ? '#fff' : '#1D2B45'

  if (status === 'success') {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <CheckCircleOutlineIcon sx={{ fontSize: 52, color: '#3EAACC', mb: 1.5 }} />
        <Typography variant="h6" sx={{ color: textColor, fontWeight: 700, mb: 1 }}>
          Message Sent!
        </Typography>
        <Typography variant="body1" sx={{ color: dark ? 'rgba(255,255,255,0.7)' : '#4a5568' }}>
          Thanks for reaching out. We'll be in touch shortly.
        </Typography>
      </Box>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {heading && (
        <Typography
          variant="h6"
          sx={{ color: textColor, fontWeight: 700, mb: 2.5, textAlign: 'center', fontSize: '1.125rem' }}
        >
          {heading}
        </Typography>
      )}

      <Grid container spacing={1.5}>
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label="First Name *"
            value={form.firstName}
            onChange={set('firstName')}
            required
            sx={INPUT_SX}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            value={form.lastName}
            onChange={set('lastName')}
            sx={INPUT_SX}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            sx={INPUT_SX}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label="Email *"
            type="email"
            value={form.email}
            onChange={set('email')}
            required
            sx={INPUT_SX}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Property / Address"
            value={form.address}
            onChange={set('address')}
            sx={INPUT_SX}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Message *"
            multiline
            rows={4}
            value={form.message}
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
              bgcolor: '#1D2B45',
              color: '#fff',
              fontWeight: 700,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': { bgcolor: '#2d4060' },
              '&:disabled': { bgcolor: '#6b7a8d', color: '#fff' },
              boxShadow: 'none',
            }}
          >
            {status === 'sending' ? 'Sending…' : 'Submit Request'}
          </Button>
        </Grid>
      </Grid>

      {status === 'error' && (
        <Typography variant="body2" sx={{ color: '#c0392b', mt: 1.5, textAlign: 'center' }}>
          Something went wrong. Please try again or call us at (919) 790-9393.
        </Typography>
      )}
    </Box>
  )
}
