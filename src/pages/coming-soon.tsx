import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import heroBg from '../assets/grid-hero.png'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

export default function ComingSoon() {
  return (
    <Box sx={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      px: { xs: 3, md: 4 },
    }}>
      {/* Background layers */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(13,25,41,0.82)' }} />
      <Box sx={{ position: 'absolute', inset: 0, ...DOT_GRID }} />
      {/* Subtle teal glow */}
      <Box sx={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 640 }}>

        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: { xs: 5, md: 7 } }}>
          <Box component="img" src="/images/icon-its-white.png" alt="Integrity Towing Solutions" sx={{ height: { xs: 80, md: 100 }, width: 'auto' }} />
        </Box>

        {/* Eyebrow */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
          <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.16em', fontSize: '0.72rem' }}>
            Spring Cleaning — New Things Ahead
          </Typography>
          <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
        </Box>

        {/* Headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Saira', sans-serif",
            fontWeight: 800,
            fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4rem' },
            color: '#fff',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            mb: 2.5,
          }}
        >
          We're Freshening
          <Box component="span" sx={{ color: TEAL, display: 'block' }}>Things Up.</Box>
        </Typography>

        {/* Body */}
        <Typography variant="body1" sx={{
          color: 'rgba(255,255,255,0.58)',
          fontSize: { xs: '1rem', md: '1.0625rem' },
          lineHeight: 1.85,
          mb: { xs: 5, md: 6 },
          maxWidth: 480,
          mx: 'auto',
        }}>
          Something exciting is on its way. In the meantime, we're still on the road and ready to help — give us a call or send us a message.
        </Typography>

        {/* CTAs */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            component="a"
            href="tel:9197909393"
            startIcon={<PhoneIcon />}
            sx={{
              bgcolor: TEAL,
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.9375rem',
              px: 3.5,
              py: 1.5,
              boxShadow: '0 4px 24px rgba(102,153,187,0.35)',
              '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' },
              transition: 'all 0.2s',
            }}
          >
            (919) 790-9393
          </Button>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href="mailto:impound@integritytow.com"
            startIcon={<EmailIcon />}
            sx={{
              borderColor: 'rgba(255,255,255,0.25)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.9375rem',
              px: 3.5,
              py: 1.5,
              '&:hover': { borderColor: TEAL, bgcolor: 'rgba(102,153,187,0.08)' },
              transition: 'all 0.2s',
            }}
          >
            Send a Message
          </Button>
        </Box>

        {/* Divider */}
        <Box sx={{ width: 48, height: 1, bgcolor: 'rgba(255,255,255,0.1)', mx: 'auto', mt: { xs: 6, md: 8 } }} />

        {/* Footer note */}
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', display: 'block', mt: 2.5, fontSize: '0.75rem', letterSpacing: '0.06em' }}>
          INTEGRITY TOWING SOLUTIONS &nbsp;·&nbsp; RALEIGH, NC
        </Typography>
      </Box>
    </Box>
  )
}
