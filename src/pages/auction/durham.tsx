import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FadeInBox from '../../components/FadeInBox'
import heroBg from '../../assets/grid-hero.png'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const AUCTION_DETAILS = [
  'Auctions are open to the public',
  'Valid government-issued photo ID required to bid',
  'Payment due in full at time of purchase',
  'Vehicles sold as-is, no warranties expressed or implied',
  'Buyer responsible for transport of purchased vehicle',
]

const LOCATION = 'Durham'
const ADDRESS_LINE1 = '1025 Harvest Street'
const ADDRESS_LINE2 = 'Durham, NC 27704'
const FULL_ADDRESS = `${ADDRESS_LINE1}, ${ADDRESS_LINE2}`

export default function DurhamAuction() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 7, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(13,25,41,0.78)' }} />
        <Box sx={{ position: 'absolute', inset: 0, ...DOT_GRID }} />
        <Box sx={{ position: 'absolute', top: -80, left: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
              Vehicle Auctions
            </Typography>
          </Box>
          <Typography component="h1" sx={{
            fontFamily: "'Saira', sans-serif", fontWeight: 800,
            fontSize: { xs: '2.6rem', md: '3.8rem', lg: '4.4rem' },
            color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 2.5, maxWidth: 700,
          }}>
            {LOCATION}{' '}
            <Box component="span" sx={{ color: TEAL }}>Auction</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: 560, mb: 3 }}>
            Browse and bid on vehicles at our {LOCATION} facility. Public auctions are held regularly — call
            or check back for upcoming dates and current inventory.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <LocationOnIcon sx={{ color: TEAL, fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{FULL_ADDRESS}</Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInBox direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Location Info</Typography>
                </Box>
                <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                  {LOCATION} Vehicle Auction
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 3 }}>
                  <LocationOnIcon sx={{ color: TEAL, fontSize: 20, mt: 0.2, flexShrink: 0 }} />
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{FULL_ADDRESS}</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, mb: 5 }}>
                  ITS holds regular public auctions of unclaimed vehicles at our {LOCATION} facility.
                  All vehicles are sold as-is. Winning bidders must present a valid photo ID and submit
                  payment at the time of sale.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                  <Box sx={{ width: 28, height: 2, bgcolor: TEAL }} />
                  <Typography variant="h4" sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>Auction Details</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, mb: 6 }}>
                  {AUCTION_DETAILS.map((item) => (
                    <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: TEAL, flexShrink: 0, mt: 0.2 }} />
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ width: 28, height: 2, bgcolor: TEAL }} />
                  <Typography variant="h4" sx={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>Upcoming Auction Dates</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85 }}>
                  Auction schedule and vehicle listings are updated regularly. Call us at{' '}
                  <Box component="a" href="tel:9197909393" sx={{ color: TEAL, fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#fff' } }}>(919) 790-9393</Box>
                  {' '}for the current schedule and available inventory.
                </Typography>
              </FadeInBox>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <FadeInBox direction="left">
                <Box sx={{
                  p: 3.5,
                  background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)', borderTop: `3px solid ${TEAL}`,
                  borderRadius: 2.5, boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}>
                  <Typography variant="h6" sx={{ color: '#fff', mb: 3, fontWeight: 700, fontFamily: "'Saira', sans-serif" }}>Auction Info</Typography>

                  {[
                    { icon: <LocationOnIcon sx={{ color: TEAL, fontSize: 20 }} />, label: 'Location', value: <>{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</> },
                    { icon: <AccessTimeIcon sx={{ color: TEAL, fontSize: 20 }} />, label: 'Hours', value: <>By appointment /<br />scheduled auction dates</> },
                    { icon: <PhoneIcon sx={{ color: TEAL, fontSize: 20 }} />, label: 'Phone', value: <Box component="a" href="tel:9197909393" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontFamily: "'Saira', sans-serif", textDecoration: 'none', '&:hover': { color: TEAL } }}>(919) 790-9393</Box> },
                  ].map(({ icon, label, value }) => (
                    <Box key={label} sx={{ display: 'flex', gap: 1.5, mb: 2.5, pb: 2.5, borderBottom: '1px solid rgba(255,255,255,0.06)', '&:last-of-type': { borderBottom: 'none', mb: 3 } }}>
                      <Box sx={{ mt: 0.2, flexShrink: 0 }}>{icon}</Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', mb: 0.25, fontSize: '0.65rem' }}>{label}</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500, lineHeight: 1.5 }}>{value}</Typography>
                      </Box>
                    </Box>
                  ))}

                  <Button
                    fullWidth variant="contained" size="large" component="a" href="tel:9197909393" startIcon={<PhoneIcon />}
                    sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, py: 1.75, boxShadow: '0 4px 16px rgba(102,153,187,0.35)', '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                  >
                    Call for Schedule
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
