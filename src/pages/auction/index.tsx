import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import EmailIcon from '@mui/icons-material/Email'
import GavelIcon from '@mui/icons-material/Gavel'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ScheduleIcon from '@mui/icons-material/Schedule'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import heroBg from '../../assets/grid-hero.png'
import FadeInBox from '../../components/FadeInBox'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const AUCTION_SCHEDULE = [
  { location: 'Raleigh', address: '3201 Durham Drive, Raleigh, NC 27603', cadence: 'Weekly' },
  { location: 'Durham', address: '1025 Harvest Street, Durham, NC 27704', cadence: 'Monthly' },
  { location: 'Greensboro', address: '2040 Fairview Street, Greensboro, NC 27405', cadence: 'Monthly' },
]

const PICKUP_HOURS = [
  { label: 'Monday – Tuesday (following auction)', hours: '10:00 AM – 3:00 PM' },
  { label: 'Late Pickup (Tuesday – Thursday)', hours: '10:00 AM – 3:00 PM' },
  { label: 'Friday Pickup', hours: '10:00 AM – 12:00 PM' },
]

const AUCTION_LOCATIONS = [
  { label: 'Raleigh Auction', href: 'https://app.marketplace.autura.com/auctions/series/RDU-NC/245', icon: <GavelIcon /> },
  { label: 'Durham Auction', href: 'https://app.marketplace.autura.com/auctions/series/RDU-NC/249', icon: <GavelIcon /> },
  { label: 'Greensboro Auction', href: 'https://app.marketplace.autura.com/auctions/series/GSO-NC/403', icon: <GavelIcon /> },
  { label: 'Schedule Vehicle Pickup', href: 'https://calendly.com/itsauction', icon: <CalendarTodayIcon /> },
]

export default function Auction() {
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
            Public Vehicle{' '}
            <Box component="span" sx={{ color: TEAL }}>Auctions</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.62)', fontSize: { xs: '1rem', md: '1.175rem' }, lineHeight: 1.8, maxWidth: 600, mb: 3 }}>
            ITS conducts regular public vehicle auctions through our online auction platform powered by Autura. Buyers can browse available inventory, review upcoming sales, place bids online, and schedule vehicle pickup through the links below.
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 560 }}>
            Our auction process is designed to be straightforward, organized, and easy to follow for both public buyers and licensed dealers.
          </Typography>
        </Container>
      </Box>

      {/* ── Auction Access & Resources ── */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 5, md: 8 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(102,153,187,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <FadeInBox>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>
                Auction Access &amp; Resources
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex', gap: { xs: 2, md: 3 }, flexWrap: 'wrap', mt: 3,
            }}>
              {AUCTION_LOCATIONS.map(({ label, href, icon }) => (
                <Button
                  key={label}
                  variant="outlined"
                  size="large"
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                  startIcon={icon}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 600,
                    px: 3, py: 1.5, fontSize: '0.9rem',
                    '&:hover': { borderColor: TEAL, bgcolor: 'rgba(102,153,187,0.08)' },
                    transition: 'all 0.2s',
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </FadeInBox>
        </Container>
      </Box>

      {/* ── Auction Schedule & Pickup ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            {/* Left: Schedule + Locations */}
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeInBox direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Auction Schedule</Typography>
                </Box>
                <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 4 }}>
                  Locations &amp; Frequency
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 6 }}>
                  {AUCTION_SCHEDULE.map(({ location, address, cadence }) => (
                    <Box key={location} sx={{
                      p: { xs: 2.5, md: 3 },
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderLeft: `3px solid ${TEAL}`,
                      borderRadius: 2,
                      display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, sm: 3 },
                      alignItems: { sm: 'center' },
                    }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, mb: 0.5 }}>{location}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                          <LocationOnIcon sx={{ fontSize: 14, color: TEAL }} />
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{address}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{
                        px: 2, py: 0.75, borderRadius: 1.5,
                        bgcolor: 'rgba(102,153,187,0.1)',
                        border: '1px solid rgba(102,153,187,0.2)',
                        flexShrink: 0,
                      }}>
                        <Typography sx={{ color: TEAL, fontWeight: 600, fontSize: '0.82rem', fontFamily: "'Saira', sans-serif", letterSpacing: '0.02em' }}>
                          {cadence}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Pickup Schedule */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Vehicle Pickup</Typography>
                </Box>
                <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.5rem', md: '1.8rem' }, mb: 3 }}>
                  Pickup Schedule
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 5 }}>
                  {PICKUP_HOURS.map(({ label, hours }) => (
                    <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <ScheduleIcon sx={{ fontSize: 18, color: TEAL, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</Typography>
                        <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{hours}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Tow-Out */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Tow-Out Assistance</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, mb: 2 }}>
                  We offer tow-out services to deliver your auction vehicle to you. For pricing and availability, contact{' '}
                  <Box component="a" href="mailto:auction@integritytow.com" sx={{ color: TEAL, fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#fff' } }}>
                    auction@integritytow.com
                  </Box>.
                </Typography>
              </FadeInBox>
            </Grid>

            {/* Right: Sidebar */}
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeInBox direction="left">
                <Box sx={{
                  position: { md: 'sticky' }, top: 90,
                }}>
                  <Box sx={{
                    p: 3.5,
                    background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)', borderTop: `3px solid ${TEAL}`,
                    borderRadius: 2.5, boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  }}>
                    <Typography variant="h6" sx={{ color: '#fff', mb: 3, fontWeight: 700, fontFamily: "'Saira', sans-serif" }}>
                      Auction Questions?
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, mb: 3 }}>
                      For auction questions, inventory information, pickup coordination, or additional support:
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 2.5, pb: 2.5, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <Box sx={{ mt: 0.2, flexShrink: 0 }}>
                        <EmailIcon sx={{ color: TEAL, fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', mb: 0.25, fontSize: '0.65rem' }}>Email</Typography>
                        <Box component="a" href="mailto:auction@integritytow.com" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontFamily: "'Saira', sans-serif", fontSize: '0.95rem', textDecoration: 'none', '&:hover': { color: TEAL } }}>
                          auction@integritytow.com
                        </Box>
                      </Box>
                    </Box>

                    {/* Location list */}
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', mb: 1.5, fontSize: '0.65rem' }}>Locations</Typography>
                    {AUCTION_SCHEDULE.map(({ location, address }) => (
                      <Box key={location} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 2 }}>
                        <LocationOnIcon sx={{ fontSize: 16, color: TEAL, mt: 0.25, flexShrink: 0 }} />
                        <Box>
                          <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{location}</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>{address}</Typography>
                        </Box>
                      </Box>
                    ))}

                    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Button
                        fullWidth variant="contained" size="large"
                        component="a" href="https://app.marketplace.autura.com/auctions/series/RDU-NC/245" target="_blank" rel="noopener noreferrer"
                        startIcon={<GavelIcon />}
                        sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, py: 1.75, boxShadow: '0 4px 16px rgba(102,153,187,0.35)', '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                      >
                        View Auction Platform
                      </Button>
                      <Button
                        fullWidth variant="outlined" size="large"
                        component="a" href="mailto:auction@integritytow.com"
                        startIcon={<EmailIcon />}
                        sx={{ borderColor: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 600, py: 1.75, '&:hover': { borderColor: TEAL, bgcolor: 'rgba(102,153,187,0.08)' }, transition: 'all 0.2s' }}
                      >
                        Contact Auction Team
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </FadeInBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
