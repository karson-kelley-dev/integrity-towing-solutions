import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
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

const SIDEBAR_ITEMS = [
  'Construction Projects', 'Real Estate Developments', 'Event Planning',
  'Municipal Projects', 'Corporate Relocations', 'University & School Projects',
  'Parking Lot Resurfacing', 'HOA Transitions & Renovations',
]

const FEATURES = [
  { title: 'Advanced Equipment & Technology', body: 'Professional-grade towing and relocation equipment to handle a wide range of vehicle types safely and efficiently.' },
  { title: 'Highly Skilled & Certified Operators', body: 'Trained, experienced operators who execute large moves with care, precision, and professionalism.' },
  { title: 'Flexible Scheduling', body: 'Flexible scheduling for time-sensitive relocations and last-minute changes.' },
]

const BENEFITS = [
  { title: 'Efficiency & Reliability', body: 'Coordinated teams and clear execution that keep relocations on schedule and minimize downtime.' },
  { title: 'Safety & Site Security', body: 'Disciplined procedures that protect vehicles, people, and property throughout the relocation.' },
  { title: 'Customized Solutions', body: 'A relocation plan tailored to your site constraints, timeline, and stakeholder requirements.' },
]

const TIPS = [
  { title: 'Plan Ahead', body: 'Confirm volume, timeline, towing windows, and approved drop locations early to keep the move smooth.' },
  { title: 'Communicate Clearly', body: 'Align stakeholders on where vehicles go, when towing occurs, and what signage/notifications are required.' },
  { title: 'Coordinate Logistics', body: 'Define access points, staging areas, sequencing, and any permitting needs before execution begins.' },
  { title: 'Monitor Progress', body: 'Stay aligned during the move with updates and a clear point of contact for adjustments.' },
  { title: 'Prioritize Safety', body: 'Ensure safe work zones, proper routing, and disciplined procedures throughout the project.' },
]

function ContentGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: { xs: 1.5, md: 2 }, mb: 2 }}>
      {items.map(({ title, body }) => (
        <Box key={title} sx={{
          p: { xs: 2, md: 3 },
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderLeft: `3px solid ${TEAL}`,
          borderRadius: 2,
        }}>
          <Typography variant="h6" sx={{ color: '#fff', fontSize: '0.975rem', fontWeight: 700, mb: 1.25 }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>{body}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default function MassRelocation() {
  const navigate = useNavigate()
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 4, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(13,25,41,0.78)' }} />
        <Box sx={{ position: 'absolute', inset: 0, ...DOT_GRID }} />
        <Box sx={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
                <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
                  Construction Projects, Events &amp; Relocations
                </Typography>
              </Box>
              <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', mb: 2.5 }}>
                Mass Relocation
                <Box component="span" sx={{ color: TEAL, display: 'block' }}>Towing Services</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', lineHeight: 1.85, mb: 4, maxWidth: 480 }}>
                ITS provides organized small to large-scale vehicle relocation services for multifamily communities, commercial properties, municipalities, infrastructure projects, and special events. Whether supporting capital improvements, parking lot renovations, property transitions, or coordinated city operations, our teams execute with clear communication, disciplined coordination, and minimal disruption to daily operations.
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
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Let's Plan Your Project</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>Tell us about your upcoming operation.</Typography>
                </Box>
                <ServiceForm categories={[
                  { key: 'assessment', label: 'Property Assessment', shortLabel: 'New Project' },
                  { key: 'support-ticket', label: 'Open Support Ticket', shortLabel: 'General Inquiry' },
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
                Efficient planning. Coordinated execution. Minimal disruption.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.0625rem', lineHeight: 1.85 }}>
                From planning logistics upfront to keeping stakeholders informed throughout the process, ITS helps keep projects organized, accessible, and moving efficiently from start to finish.
              </Typography>
            </Box>
          </FadeInBox>
        </Container>
      </Box>

      {/* ── Content + Sidebar ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 6, md: 12 }, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 4, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInBox direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Features</Typography>
                </Box>
                <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                  Features of Our Vehicle Relocation Services
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, mb: 4 }}>
                  When it comes to large-scale projects requiring the relocation of multiple vehicles, the right partner
                  is the difference between an orderly move and a logistical headache. ITS supports property teams,
                  contractors, and event stakeholders with experienced operators, the right equipment, and a process
                  built for high-volume coordination.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ width: 28, height: 2, bgcolor: TEAL }} />
                  <Typography variant="h4" sx={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>What This Service Includes</Typography>
                </Box>
                <ContentGrid items={FEATURES} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5, mt: { xs: 3, md: 4 } }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Benefits</Typography>
                </Box>
                <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.5rem', md: '1.8rem' }, mb: 3 }}>
                  Benefits of Choosing ITS
                </Typography>
                <ContentGrid items={BENEFITS} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5, mt: { xs: 3, md: 4 } }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Planning Tips</Typography>
                </Box>
                <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.5rem', md: '1.8rem' }, mb: 3 }}>
                  Tips for a Successful Project Move
                </Typography>
                <ContentGrid items={TIPS} />

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, mt: 3 }}>
                  Ready to plan your relocation project? Contact ITS at{' '}
                  <Box component="a" href="tel:9197909393" sx={{ color: TEAL, fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#fff' } }}>(919) 790-9393</Box>.
                </Typography>
              </FadeInBox>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <FadeInBox direction="left">
                <Box sx={{ position: 'sticky', top: 90 }}>
                  <Box sx={{
                    p: 3, mb: 2.5,
                    background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)', borderTop: `3px solid ${TEAL}`,
                    borderRadius: 2.5, boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  }}>
                    <Typography variant="h6" sx={{ color: '#fff', mb: 2.5, fontSize: '1rem', fontWeight: 700, fontFamily: "'Saira', sans-serif" }}>Project Types</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                      {SIDEBAR_ITEMS.map((s) => (
                        <Box key={s} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                          <CheckCircleIcon sx={{ fontSize: 14, color: TEAL, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>{s}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Button
                    fullWidth variant="contained" size="large" component="a" href="tel:9197909393" startIcon={<PhoneIcon />}
                    sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, py: 1.75, boxShadow: '0 4px 16px rgba(102,153,187,0.35)', '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                  >
                    (919) 790-9393
                  </Button>
                </Box>
              </FadeInBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CTA Section ── */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 6, md: 8 }, textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Container maxWidth="md">
          <FadeInBox>
            <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2, fontWeight: 700 }}>
              Planning a mass relocation?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', mb: 4, maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
              From construction projects to property transitions, ITS coordinates every detail so your timeline stays on track.
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
              Let's Coordinate
            </Button>
          </FadeInBox>
        </Container>
      </Box>

    </>
  )
}
