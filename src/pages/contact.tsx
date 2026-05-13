import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import heroBg from '../assets/grid-hero.png'
import FadeInBox from '../components/FadeInBox'
import QuoteForm from '../components/QuoteForm'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const CONTACT_ITEMS = [
  { icon: <PhoneIcon sx={{ fontSize: 22, color: TEAL }} />, label: 'Phone', value: '(919) 790-9393', href: 'tel:9197909393' },
  { icon: <EmailIcon sx={{ fontSize: 22, color: TEAL }} />, label: 'Email', value: 'impound@integritytow.com', href: 'mailto:impound@integritytow.com' },
]

const SERVICE_AREAS = [
  'Raleigh, NC', 'Durham, NC', 'Chapel Hill, NC',
  'Greensboro, NC', 'Winston-Salem, NC', 'And surrounding communities',
]

export default function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 5, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(29,43,69,0.85)' }} />
        <Box sx={{ position: 'absolute', inset: 0, ...DOT_GRID }} />
        {/* Teal glow */}
        <Box sx={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
              We're Here to Help
            </Typography>
          </Box>
          <Typography component="h1" sx={{
            fontFamily: "'Saira', sans-serif", fontWeight: 800,
            fontSize: { xs: '2.6rem', md: '3.6rem', lg: '4.2rem' },
            color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 2.5, maxWidth: 700,
          }}>
            Contact <Box component="span" sx={{ color: TEAL }}>Us</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: 560 }}>
            Reach out to discuss your property's towing and parking enforcement needs.
          </Typography>

          {/* Contact callout row */}
          <Box sx={{
            display: 'flex', gap: { xs: 2, md: 4 }, flexWrap: 'wrap', mt: 5,
          }}>
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
                  Have a question about our services? Ready to start a parking enforcement program for your property?
                  Fill out the form or call us directly.
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

            {/* Right: form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInBox direction="left">
                <Box sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: '#fff',
                  borderRadius: 3,
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                  borderTop: `4px solid ${TEAL}`,
                }}>
                  <Typography variant="h5" sx={{ color: NAVY, fontWeight: 700, mb: 0.5, fontFamily: "'Saira', sans-serif" }}>
                    Send Us a Message
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d', mb: 3 }}>
                    We'll respond within 1 business hour.
                  </Typography>
                  <QuoteForm heading="" defaultSubject="Contact Form" />
                </Box>
              </FadeInBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
