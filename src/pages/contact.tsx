import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import QuoteForm from '../components/QuoteForm'

const NAVY = '#1D2B45'
const TEAL = '#3EAACC'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const CONTACT_ITEMS = [
  { icon: <PhoneIcon sx={{ color: TEAL, fontSize: 22 }} />, label: 'Phone', value: '(919) 790-9393', href: 'tel:9197909393' },
  { icon: <EmailIcon sx={{ color: TEAL, fontSize: 22 }} />, label: 'Email', value: 'impound@integritytow.com', href: 'mailto:impound@integritytow.com' },
  { icon: <AccessTimeIcon sx={{ color: TEAL, fontSize: 22 }} />, label: 'Hours', value: 'Monday – Sunday, 24/7', href: undefined },
]

const SERVICE_AREAS = [
  'Raleigh, NC',
  'Durham, NC',
  'Chapel Hill, NC',
  'Greensboro, NC',
  'Winston-Salem, NC',
  'And surrounding Triangle & Triad communities',
]

export default function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 7, md: 11 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1.5 }}>
              We're Here to Help
            </Typography>
            <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.4rem', md: '3.2rem' }, color: '#fff', lineHeight: 1.1, mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              Reach out to discuss your property's towing and parking enforcement needs. We're available{' '}
              <Box component="strong" sx={{ color: '#fff' }}>24 hours a day, 7 days a week.</Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }}>
            {/* Left: contact info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2 }}>
                Get In Touch
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 4 }}>
                Have a question about our services? Ready to start a parking enforcement program for your
                property? Fill out the form or call us directly.
              </Typography>

              {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                <Box key={label} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 2.5 }}>
                  <Box sx={{ mt: 0.25, flexShrink: 0 }}>{icon}</Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', mb: 0.25 }}>
                      {label}
                    </Typography>
                    {href ? (
                      <Box component="a" href={href} sx={{ color: NAVY, fontFamily: "'Saira', sans-serif", fontWeight: 600, fontSize: '1rem', textDecoration: 'none', '&:hover': { color: '#0057A5' } }}>
                        {value}
                      </Box>
                    ) : (
                      <Typography sx={{ color: NAVY, fontWeight: 600, fontSize: '1rem', fontFamily: "'Saira', sans-serif" }}>{value}</Typography>
                    )}
                  </Box>
                </Box>
              ))}

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ color: NAVY, fontSize: '1rem', mb: 1.5 }}>Service Areas</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {SERVICE_AREAS.map((area) => (
                    <Box key={area} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <LocationOnIcon sx={{ fontSize: 15, color: TEAL, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#4a5568' }}>{area}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Right: form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2 }}>
                <QuoteForm heading="Send Us a Message" defaultSubject="Contact Form" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
