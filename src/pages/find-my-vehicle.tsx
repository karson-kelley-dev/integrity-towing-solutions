import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import SearchIcon from '@mui/icons-material/Search'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BadgeIcon from '@mui/icons-material/Badge'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import PaymentIcon from '@mui/icons-material/Payment'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FadeInBox from '../components/FadeInBox'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const BLUE = '#0057A5'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const RETRIEVAL_ITEMS = [
  { icon: <BadgeIcon sx={{ fontSize: 28, color: TEAL }} />, label: 'Valid government-issued photo ID', num: '01' },
  { icon: <DirectionsCarIcon sx={{ fontSize: 28, color: TEAL }} />, label: 'Proof of vehicle ownership (title or registration)', num: '02' },
  { icon: <PaymentIcon sx={{ fontSize: 28, color: TEAL }} />, label: 'Payment for towing and storage fees', num: '03' },
  { icon: <AssignmentIcon sx={{ fontSize: 28, color: TEAL }} />, label: 'Authorization paperwork (if retrieving on behalf of owner)', num: '04' },
]

const QUICK_ITEMS = [
  'Online portal available 24/7',
  'Phone support 24 hours a day',
  'Bring valid ID when retrieving',
  'Payment accepted at all locations',
]

export default function FindMyVehicle() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 7, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', bottom: -100, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
              Vehicle Lookup &amp; Retrieval
            </Typography>
          </Box>
          <Typography component="h1" sx={{
            fontFamily: "'Saira', sans-serif", fontWeight: 800,
            fontSize: { xs: '2.6rem', md: '3.8rem', lg: '4.4rem' },
            color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 2.5, maxWidth: 700,
          }}>
            Find My{' '}
            <Box component="span" sx={{ color: TEAL }}>Vehicle</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: 540, mb: 5 }}>
            If your vehicle was towed by Integrity Towing Solutions, use the portal below to locate it —
            or call us directly for immediate assistance.
          </Typography>

          {/* Big CTA buttons */}
          <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component="a"
              href="https://portal.integritytow.com"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<SearchIcon />}
              endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
              sx={{
                bgcolor: TEAL, color: '#fff', fontWeight: 700, fontSize: '1rem',
                px: 3.5, py: 1.75,
                boxShadow: '0 4px 20px rgba(102,153,187,0.4)',
                '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' },
                transition: 'all 0.2s',
              }}
            >
              Search Vehicle Lookup Portal
            </Button>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href="tel:9197909393"
              startIcon={<PhoneIcon />}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontWeight: 700, fontSize: '1rem',
                px: 3, py: 1.75,
                '&:hover': { borderColor: TEAL, bgcolor: 'rgba(102,153,187,0.08)', transform: 'translateY(-2px)' },
                transition: 'all 0.2s',
              }}
            >
              Call (919) 790-9393
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Main content ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInBox direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>
                    Retrieval Checklist
                  </Typography>
                </Box>
                <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                  What to Bring for Vehicle Retrieval
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, mb: 5 }}>
                  Use our online lookup portal or call our 24/7 line to find out where your vehicle is
                  being held and how to retrieve it.
                </Typography>

                {/* Retrieval items as numbered dark cards */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' }, gap: 2.5, mb: 5 }}>
                  {RETRIEVAL_ITEMS.map(({ icon, label, num }) => (
                    <FadeInBox key={label} sx={{ height: '100%' }}>
                      <Box sx={{
                        p: 3,
                        bgcolor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 2.5,
                        display: 'flex', gap: 2, alignItems: 'flex-start',
                        position: 'relative', overflow: 'hidden',
                        transition: 'border-color 0.2s, background 0.2s',
                        '&:hover': { borderColor: 'rgba(102,153,187,0.3)', bgcolor: 'rgba(102,153,187,0.04)' },
                        height: '100%',
                      }}>
                        {/* Ghost number */}
                        <Typography sx={{
                          position: 'absolute', right: 8, bottom: -4,
                          fontSize: '4rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)',
                          fontFamily: "'Saira', sans-serif", lineHeight: 1, userSelect: 'none',
                        }}>{num}</Typography>

                        <Box sx={{
                          width: 48, height: 48, borderRadius: 2,
                          bgcolor: 'rgba(102,153,187,0.1)', border: '1px solid rgba(102,153,187,0.2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          {icon}
                        </Box>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500, lineHeight: 1.65, pt: 0.5 }}>
                          {label}
                        </Typography>
                      </Box>
                    </FadeInBox>
                  ))}
                </Box>

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85 }}>
                  Questions? Call us at{' '}
                  <Box component="a" href="tel:9197909393" sx={{ color: TEAL, fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#fff' } }}>
                    (919) 790-9393
                  </Box>
                  {' '}— we're available 24/7.
                </Typography>
              </FadeInBox>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <FadeInBox direction="left">
                <Box sx={{ position: 'sticky', top: 90 }}>
                  {/* Glass card */}
                  <Box sx={{
                    p: 3.5,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderTop: `3px solid ${TEAL}`,
                    borderRadius: 2.5,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    mb: 2.5,
                  }}>
                    <Typography variant="h6" sx={{ color: '#fff', mb: 2.5, fontWeight: 700, fontFamily: "'Saira', sans-serif" }}>
                      Quick Reference
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {QUICK_ITEMS.map((item) => (
                        <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                          <CheckCircleIcon sx={{ fontSize: 15, color: TEAL, flexShrink: 0, mt: 0.35 }} />
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    component="a"
                    href="tel:9197909393"
                    startIcon={<PhoneIcon />}
                    sx={{
                      bgcolor: TEAL, color: '#fff', fontWeight: 700, py: 1.75,
                      boxShadow: '0 4px 16px rgba(102,153,187,0.35)',
                      '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' },
                      transition: 'all 0.2s',
                      mb: 1.5,
                    }}
                  >
                    (919) 790-9393
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    component="a"
                    href="https://portal.integritytow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<SearchIcon />}
                    sx={{
                      borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontWeight: 600, py: 1.75,
                      '&:hover': { borderColor: TEAL, color: '#fff', bgcolor: 'rgba(102,153,187,0.06)' },
                      transition: 'all 0.2s',
                    }}
                  >
                    Vehicle Portal
                  </Button>
                </Box>
              </FadeInBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
