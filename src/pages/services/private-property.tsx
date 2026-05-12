import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import QuoteForm from '../../components/QuoteForm'
import FadeInBox from '../../components/FadeInBox'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const BLUE = '#0057A5'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const SERVICE_CARDS = [
  { icon: '/images/icon-its-white.png', title: 'Property Manager Portal', description: 'Real-time visibility into parking trends, issues, and violations — plus a centralized place to track and manage every parking enforcement request.' },
  { icon: '/images/icon-custom-policies.png', title: 'Custom Program Tailored for Your Community', description: 'A parking enforcement plan built around your property type, resident flow, and problem areas — not a one-size-fits-all template.' },
  { icon: '/images/icon-sign.svg', title: 'Signage & Install', description: 'Professional, compliant signage — assessed for your layout and installed so expectations are clear and enforcement is defensible.' },
  { icon: '/images/icon-account-manager.png', title: 'Account Manager', description: 'A dedicated point of contact who knows your property, helps manage updates, and keeps the program running smoothly.' },
  { icon: '/images/icon-immediate-towing.png', title: 'Immediate Towing', description: 'When violations impact safety, access, or operations, we respond quickly to remove unauthorized vehicles and restore order.' },
  { icon: '/images/icon-parking-permits.png', title: 'Parking Permits', description: 'A structured permit process that helps residents and guests park correctly and reduces confusion, disputes, and unnecessary escalations.' },
]

const SIDEBAR_SERVICES = [
  'Private Property Impound', 'Signage & Install', 'Custom Enforcement Programs',
  'Parking Permits', 'Property Manager Portal', 'Account Manager Support',
  'Immediate Towing', 'Multi-Property Portfolios',
]

export default function PrivatePropertyTowing() {
  const navigate = useNavigate()
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
                <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
                  HOAs, Apartment Buildings, Commercial &amp; More
                </Typography>
              </Box>
              <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', mb: 2.5 }}>
                Private Property Towing
                <Box component="span" sx={{ color: TEAL, display: 'block' }}>in North Carolina</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', lineHeight: 1.85, mb: 4, maxWidth: 480 }}>
                When parking violations become the norm, your property pays the price—lost spaces for residents
                and guests, increased frustration, and avoidable safety and access issues. ITS provides private
                property towing built for property managers who need consistent enforcement without unnecessary
                drama. We combine clear communication, compliant processes, and disciplined operations to keep
                your lots, lanes, and fire zones clear.
              </Typography>
              <Button
                variant="contained" size="large" component="a" href="tel:9197909393" startIcon={<PhoneIcon />}
                sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, boxShadow: '0 4px 20px rgba(102,153,187,0.35)', '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
              >
                (919) 790-9393
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 24px 64px rgba(0,0,0,0.4)', borderTop: `4px solid ${TEAL}` }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Interested in us servicing your property?</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>We'll get back to you within 1 business hour.</Typography>
                </Box>
                <QuoteForm heading="" defaultSubject="Private Property Towing" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Service Cards ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <FadeInBox>
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>What You Can Expect</Typography>
              </Box>
              <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2, maxWidth: 600 }}>
                Built for Property Managers (Not Just Tows)
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', maxWidth: 640, fontSize: '1.0625rem', lineHeight: 1.8 }}>
                Private property towing works best when it's structured like a program—not a random call when things
                get bad. ITS designs parking enforcement programs around your property type, layout, and resident
                flow, then executes with consistency. The result is predictable enforcement, better resident
                understanding of the rules, and fewer escalations for your team.
              </Typography>
            </Box>
          </FadeInBox>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 2.5 }}>
            {SERVICE_CARDS.map(({ icon, title, description }, i) => (
              <FadeInBox key={title} delay={i * 80}>
                <Box sx={{
                  p: 3.5, height: '100%',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderTop: `3px solid ${TEAL}`,
                  borderRadius: 2.5,
                  display: 'flex', flexDirection: 'column', gap: 2,
                  transition: 'background 0.2s, border-color 0.2s',
                  '&:hover': { bgcolor: 'rgba(102,153,187,0.05)', borderColor: 'rgba(102,153,187,0.3)' },
                }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: 2, bgcolor: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Box component="img" src={icon} alt={title} sx={{ height: 28, width: 'auto' }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: '#fff', fontSize: '1.0rem' }}>{title}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{description}</Typography>
                </Box>
              </FadeInBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Content + Sidebar ── */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInBox direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>Why ITS</Typography>
                </Box>
                <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                  Why ITS for Private Property Towing in North Carolina
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, mb: 3 }}>
                  Property Managers choose ITS because we operate like a partner, not a vendor. We take the time
                  to understand your property and set up an enforcement program that is clear to residents,
                  defensible when challenged, and consistent week after week. Our processes prioritize
                  transparency and accountability—so you always know what happened, why it happened, and how
                  it was documented.
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9 }}>
                  ITS also brings scale without sacrificing standards. With infrastructure across Raleigh,
                  Durham, Chapel Hill, and Greensboro, we deliver one consistent approach across
                  multi-property portfolios—helping Property Managers standardize enforcement, reduce
                  administrative burden, and protect their reputation across every community they manage.
                </Typography>
              </FadeInBox>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <FadeInBox direction="left">
                <Box sx={{ position: 'sticky', top: 90 }}>
                  <Box sx={{
                    p: 3, mb: 2.5,
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)', borderTop: `3px solid ${TEAL}`,
                    borderRadius: 2.5, boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  }}>
                    <Typography variant="h6" sx={{ color: '#fff', mb: 2.5, fontSize: '1rem', fontWeight: 700, fontFamily: "'Saira', sans-serif" }}>
                      Private Property Services
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                      {SIDEBAR_SERVICES.map((s) => (
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

      {/* ── CTA ── */}
      <FadeInBox>
        <Box sx={{ bgcolor: BLUE, py: { xs: 7, md: 9 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.65)', fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1 }}>
                  Ready to Get Started?
                </Typography>
                <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.9rem', md: '2.5rem' }, mb: 2, lineHeight: 1.2 }}>
                  Let's Build a Parking Enforcement Program for Your Property
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.75 }}>
                  Serving the Triangle and Triad — Raleigh, Durham, Chapel Hill, Greensboro, and surrounding communities.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained" size="large" component="a" href="tel:9197909393"
                    startIcon={<PhoneIcon />} fullWidth
                    sx={{ bgcolor: '#fff', color: BLUE, fontWeight: 700, fontSize: '1.0625rem', py: 1.75, boxShadow: 'none', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
                  >
                    Call (919) 790-9393
                  </Button>
                  <Button
                    variant="outlined" size="large" onClick={() => navigate('/contact')} fullWidth
                    sx={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', fontWeight: 600, fontSize: '1rem', py: 1.75, '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
                  >
                    Send a Message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </FadeInBox>
    </>
  )
}
