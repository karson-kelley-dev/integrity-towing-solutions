import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PhoneIcon from '@mui/icons-material/Phone'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import heroBg from '../../assets/grid-hero.png'
import FadeInBox from '../../components/FadeInBox'
import ServiceForm from '../../components/ServiceForm'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const BLUE = '#0057A5'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const SERVICE_CARDS = [
  { icon: '/images/icon-roadside.png', title: 'Emergency Response Towing', description: 'Rapid towing support for urgent situations—day or night.' },
  { icon: '/images/icon-ppi.png', title: 'Accident Scene Management & Vehicle Removal', description: 'Efficient scene clearing to restore traffic flow and reduce secondary risk.' },
  { icon: '/images/icon-commercial.png', title: 'Impound Services', description: 'Secure, documented impound services when vehicles must be held before release.' },
  { icon: '/images/icon-immediate-towing.png', title: 'Illegal Parking Enforcement', description: 'Removal support for illegally parked vehicles impacting access, safety corridors, or operations.' },
  { icon: '/images/icon-mass.png', title: 'Abandoned Vehicle Removal', description: 'Assistance removing abandoned vehicles from public or private property.' },
  { icon: '/images/icon-custom-policies.png', title: 'Evidence Towing & Secure Storage', description: 'Secure towing and storage protocols for vehicles requiring documented handling.' },
  { icon: '/images/icons-municpality.png', title: 'Relocation of Vehicles for Public Events & Construction Projects', description: 'Organized relocations to support event operations and construction access with minimal disruption.' },
  { icon: '/images/icon-account-manager.png', title: 'Secure Transport of Seized Vehicles', description: 'Discreet, controlled transport handled with the professionalism and documentation required.' },
]

export default function EmergencyResponse() {
  const navigate = useNavigate()
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 4, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(13,25,41,0.78)' }} />
        <Box sx={{ position: 'absolute', inset: 0, ...DOT_GRID }} />
        <Box sx={{ position: 'absolute', bottom: -80, left: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
                <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
                  Emergency Towing &amp; Accident Scene Support
                </Typography>
              </Box>
              <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', mb: 2.5 }}>
                Emergency Response &amp;
                <Box component="span" sx={{ color: TEAL, display: 'block' }}>Accident Scene Management</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', lineHeight: 1.85, mb: 3, maxWidth: 480 }}>
                ITS provides 24/7 operational support for accident scenes, roadway incidents, disabled vehicles, and emergency response situations throughout the communities we serve. As an active police rotation partner, our teams work alongside law enforcement, fire departments, state agencies, and Hazmat personnel to help keep roadways clear, traffic moving, and scenes operating safely and efficiently.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained" size="large" component="a" href="tel:9197909393" startIcon={<PhoneIcon />}
                  sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, boxShadow: '0 4px 20px rgba(102,153,187,0.35)', '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                >
                  (919) 790-9393
                </Button>
                <Button
                  variant="outlined" size="large" onClick={() => navigate('/contact')} endIcon={<ArrowForwardIcon />}
                  sx={{ display: { xs: 'inline-flex', md: 'none' }, borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontWeight: 600, '&:hover': { borderColor: TEAL, bgcolor: 'rgba(102,153,187,0.08)' }, transition: 'all 0.2s' }}
                >
                  Send a Message
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 24px 64px rgba(0,0,0,0.4)', borderTop: `4px solid ${TEAL}` }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Request a Quote</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>For emergency service call (919) 790-9393 directly.</Typography>
                </Box>
                <ServiceForm categories={[
                  { key: 'client-support', label: 'Client Support', shortLabel: 'Client Support' },
                  { key: 'enforcement', label: 'Enforcement Questions', shortLabel: 'Enforcement' },
                ]} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── About strip ── */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 5, md: 8 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(102,153,187,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <FadeInBox>
            <Box sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2 }}>
                Rapid response. Safe recovery. Professional execution.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.0625rem', lineHeight: 1.85, mb: 3 }}>
                Public safety and efficient scene clearance are our priorities from the moment we arrive. Whether responding to an accident, disabled vehicle, or secure transport situation, our teams follow disciplined procedures and use the right equipment to recover and remove vehicles safely, efficiently, and with care.
              </Typography>
              <Typography variant="h4" sx={{ display: { xs: 'none', md: 'block' }, color: '#fff', fontSize: { xs: '1.2rem', md: '1.4rem' }, mb: 1.5 }}>
                Supporting Public Safety Partners Across North Carolina
              </Typography>
              <Typography variant="body1" sx={{ display: { xs: 'none', md: 'block' }, color: 'rgba(255,255,255,0.55)', fontSize: '1.0625rem', lineHeight: 1.85 }}>
                Emergency response work leaves no margin for error. ITS provides trained operators, coordinated dispatch, and the operational support needed to handle complex recoveries without creating additional risk at the scene. Our goal is simple: improve safety, reduce roadway disruption, and help return roads, properties, and access points back to normal as quickly as possible.
              </Typography>
            </Box>
          </FadeInBox>
        </Container>
      </Box>

      {/* ── Service Cards ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 5, md: 10 }, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <FadeInBox>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Services</Typography>
            </Box>
            <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '2rem' }, mb: { xs: 3, md: 5 } }}>
              Emergency Response Services
            </Typography>
          </FadeInBox>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }, gap: { xs: 1.5, sm: 2.5 } }}>
            {SERVICE_CARDS.map(({ icon, title, description }, i) => (
              <FadeInBox key={title} delay={i * 60}>
                <Box sx={{
                  p: { xs: 2, sm: 3 }, height: '100%',
                  bgcolor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderTop: `3px solid ${TEAL}`, borderRadius: 2.5,
                  display: 'flex', flexDirection: 'column', gap: 1.5,
                  transition: 'background 0.2s, border-color 0.2s',
                  '&:hover': { bgcolor: 'rgba(102,153,187,0.05)', borderColor: 'rgba(102,153,187,0.3)' },
                }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: DARK, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Box component="img" src={icon} alt={title} sx={{ height: 26, width: 'auto' }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: '#fff', fontSize: '0.95rem' }}>{title}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{description}</Typography>
                </Box>
              </FadeInBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA Section ── */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 6, md: 8 }, textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Container maxWidth="md">
          <FadeInBox>
            <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2, fontWeight: 700 }}>
              Need reliable emergency response and scene management?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', mb: 4, maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
              ITS provides coordinated towing and recovery support around the clock — trained operators, the right equipment, and disciplined execution.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: TEAL, color: '#fff', fontWeight: 700, fontSize: '1rem',
                px: 4, py: 1.6,
                boxShadow: '0 4px 20px rgba(102,153,187,0.4)',
                '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' },
                transition: 'all 0.2s',
              }}
            >
              Get in Touch
            </Button>
          </FadeInBox>
        </Container>
      </Box>

    </>
  )
}
