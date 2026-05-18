import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import SendIcon from '@mui/icons-material/Send'
import { sendEmail, SUBJECT_ROUTES, type SubjectRoute } from '../services/emailService'

const NAVY = '#1D2B45'
const TEAL = '#6699BB'

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

export interface ServiceFormCategory {
  key: string
  label: string
  shortLabel: string
}

interface ServiceFormProps {
  categories: ServiceFormCategory[]
  defaultCategory?: number
}

export default function ServiceForm({ categories, defaultCategory = 0 }: ServiceFormProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState<Record<string, string>>({})

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const cat = categories[activeCategory]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.email || !form.message) return
    setStatus('sending')
    try {
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

  if (status === 'success') {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <CheckCircleOutlineIcon sx={{ fontSize: 52, color: TEAL, mb: 1.5 }} />
        <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700, mb: 1 }}>
          Request Submitted
        </Typography>
        <Typography variant="body1" sx={{ color: '#4a5568' }}>
          Thanks for reaching out. We'll be in touch shortly.
        </Typography>
      </Box>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {/* Category toggle — only show if more than 1 */}
      {categories.length > 1 && (
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          {categories.map((c, i) => (
            <Box
              key={c.key}
              onClick={() => handleCategoryChange(i)}
              sx={{
                flex: 1, textAlign: 'center',
                px: 1.5, py: 1, borderRadius: 1.5,
                cursor: 'pointer',
                bgcolor: activeCategory === i ? NAVY : 'rgba(0,0,0,0.04)',
                color: activeCategory === i ? '#fff' : '#4a5568',
                border: `1px solid ${activeCategory === i ? NAVY : 'rgba(0,0,0,0.1)'}`,
                transition: 'all 0.2s',
                '&:hover': { bgcolor: activeCategory === i ? NAVY : 'rgba(0,0,0,0.08)' },
              }}
            >
              <Typography sx={{
                fontFamily: "'Saira', sans-serif", fontWeight: 600,
                fontSize: { xs: '0.7rem', sm: '0.78rem' },
                letterSpacing: '0.02em',
              }}>
                {c.shortLabel}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Grid container spacing={1.5}>
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

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label={cat.key === 'assessment' ? 'Current pain points / notes *' : 'Message *'}
            multiline
            rows={3}
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
  )
}
