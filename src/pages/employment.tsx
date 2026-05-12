import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupsIcon from '@mui/icons-material/Groups'
import QuoteForm from '../components/QuoteForm'
import FadeInBox from '../components/FadeInBox'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const OPEN_ROLES = [
  'Tow Truck Operator',
  'Heavy Wrecker Operator',
  'Dispatcher',
  'Office Staff',
  'Sales / Account Manager',
]

const POSITIONS = [
  {
    title: 'Tow Truck Operators',
    requirements: [
      "Valid NC driver's license required (CDL preferred for heavy-duty)",
      'Experience with flatbed, wheel-lift, and/or heavy wrecker preferred',
      'Ability to work rotating shifts including nights and weekends',
      'Professional demeanor and clean driving record',
    ],
  },
  {
    title: 'Dispatch & Office Staff',
    requirements: [
      'Strong communication and multi-tasking skills',
      'Experience in dispatch, customer service, or logistics a plus',
      'Computer proficiency required',
      'Ability to handle high-pressure, time-sensitive situations calmly',
    ],
  },
  {
    title: 'Sales & Account Management',
    requirements: [
      'Experience in B2B sales or property management relationships preferred',
      'Self-motivated with strong relationship-building skills',
      'Familiarity with the Triangle/Triad commercial real estate market a plus',
    ],
  },
]

const WHY_WORK = [
  { title: 'Competitive Pay & Benefits', body: 'We offer competitive compensation packages for qualified candidates. Our team members are valued and rewarded for their hard work and commitment.', icon: <AttachMoneyIcon /> },
  { title: 'Career Growth', body: "We promote from within wherever possible. Whether you're starting out or looking to advance, ITS provides a path forward for motivated individuals.", icon: <TrendingUpIcon /> },
  { title: 'Supportive Team Environment', body: "Our operators, dispatchers, and office staff work together as a unit. You'll be supported from day one with training, clear expectations, and a team that has your back.", icon: <GroupsIcon /> },
]

export default function Employment() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -100, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
                <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
                  Towers, Office Staff, Sales and More!
                </Typography>
              </Box>
              <Typography component="h1" sx={{
                fontFamily: "'Saira', sans-serif", fontWeight: 800,
                fontSize: { xs: '2.6rem', md: '3.6rem' },
                color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 2.5,
              }}>
                Join the{' '}
                <Box component="span" sx={{ color: TEAL }}>ITS Team</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', lineHeight: 1.85, mb: 4, maxWidth: 480 }}>
                We're looking for talented individuals to join one of North Carolina's premier towing
                and vehicle management companies. If you're driven, dependable, and ready to make a
                difference — we want to hear from you.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component="a"
                href="tel:9197909393"
                startIcon={<PhoneIcon />}
                sx={{
                  bgcolor: TEAL, color: '#fff', fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(102,153,187,0.35)',
                  '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' },
                  transition: 'all 0.2s',
                }}
              >
                Call (919) 790-9393
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 24px 64px rgba(0,0,0,0.4)', borderTop: `4px solid ${TEAL}` }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Send Your Application</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>We'll be in touch to discuss open positions.</Typography>
                </Box>
                <QuoteForm heading="" defaultSubject="Employment Application" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── About strip ── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 6, md: 8 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(102,153,187,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <FadeInBox>
            <Box sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2 }}>
                Start Your Career!
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.0625rem', lineHeight: 1.85 }}>
                Join the best in the business in an exciting, fast-paced environment where you can thrive
                and make a difference. We are looking for confident, career-driven individuals who are
                committed to the success of our growing company.
              </Typography>
            </Box>
          </FadeInBox>
        </Container>
      </Box>

      {/* ── Why Work + Positions ── */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeInBox direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>
                    Why ITS
                  </Typography>
                </Box>
                <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                  Why Work at Integrity Towing Solutions?
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, mb: 5 }}>
                  ITS is a growing towing and parking enforcement company serving the Triangle and Triad
                  regions of North Carolina. We take pride in delivering professional, reliable service.
                  Our team is the backbone of everything we do.
                </Typography>

                {/* Why Work cards */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 2.5, mb: 7 }}>
                  {WHY_WORK.map(({ title, body, icon }, i) => (
                    <FadeInBox key={title} delay={i * 100}>
                      <Box sx={{
                        p: 3,
                        bgcolor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderTop: `3px solid ${TEAL}`,
                        borderRadius: 2.5,
                        height: '100%',
                        transition: 'background 0.2s, border-color 0.2s',
                        '&:hover': { bgcolor: 'rgba(102,153,187,0.05)', borderColor: 'rgba(102,153,187,0.3)' },
                      }}>
                        <Box sx={{
                          width: 44, height: 44, borderRadius: '50%',
                          background: 'rgba(102,153,187,0.12)', border: '1px solid rgba(102,153,187,0.2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: TEAL, mb: 2, '& svg': { fontSize: '1.3rem' },
                        }}>
                          {icon}
                        </Box>
                        <Typography variant="h6" sx={{ color: '#fff', fontSize: '1rem', mb: 1 }}>{title}</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{body}</Typography>
                      </Box>
                    </FadeInBox>
                  ))}
                </Box>

                {/* Open Positions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Box sx={{ width: 32, height: 2, bgcolor: TEAL }} />
                  <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem' }}>
                    Open Positions
                  </Typography>
                </Box>

                {POSITIONS.map(({ title, requirements }, i) => (
                  <FadeInBox key={title} delay={i * 80}>
                    <Box sx={{
                      mb: 4,
                      pb: 4,
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                      '&:last-child': { borderBottom: 'none' },
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ width: 28, height: 2, bgcolor: TEAL, borderRadius: 2, flexShrink: 0 }} />
                        <Typography variant="h5" sx={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>{title}</Typography>
                      </Box>
                      <Box sx={{ pl: 0.5, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {requirements.map((r) => (
                          <Box key={r} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                            <CheckCircleIcon sx={{ fontSize: 15, color: TEAL, flexShrink: 0, mt: 0.35 }} />
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{r}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </FadeInBox>
                ))}

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, mt: 2 }}>
                  To apply, fill out the form above or call us at{' '}
                  <Box component="a" href="tel:9197909393" sx={{ color: TEAL, fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#fff' } }}>(919) 790-9393</Box>
                  . You can also email your resume to{' '}
                  <Box component="a" href="mailto:impound@integritytow.com" sx={{ color: TEAL, fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#fff' } }}>impound@integritytow.com</Box>.
                </Typography>
              </FadeInBox>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <FadeInBox direction="left">
                <Box sx={{ position: 'sticky', top: 90 }}>
                  <Box sx={{
                    p: 3, mb: 2.5,
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderTop: `3px solid ${TEAL}`,
                    borderRadius: 2.5,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  }}>
                    <Typography variant="h6" sx={{ color: '#fff', mb: 2.5, fontSize: '1rem', fontWeight: 700, fontFamily: "'Saira', sans-serif" }}>
                      Open Roles
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                      {OPEN_ROLES.map((s) => (
                        <Box key={s} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                          <CheckCircleIcon sx={{ fontSize: 14, color: TEAL, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>{s}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Button
                    fullWidth variant="contained" size="large" component="a" href="tel:9197909393" startIcon={<PhoneIcon />}
                    sx={{
                      bgcolor: TEAL, color: '#fff', fontWeight: 700, py: 1.75,
                      boxShadow: '0 4px 16px rgba(102,153,187,0.35)',
                      '&:hover': { bgcolor: '#4D7A9A', transform: 'translateY(-2px)' },
                      transition: 'all 0.2s',
                    }}
                  >
                    (919) 790-9393
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
