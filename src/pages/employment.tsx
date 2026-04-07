import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PhoneIcon from '@mui/icons-material/Phone'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WorkIcon from '@mui/icons-material/Work'
import QuoteForm from '../components/QuoteForm'

const NAVY = '#1D2B45'
const TEAL = '#3EAACC'
const LIGHT = '#F5F7FA'
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
      'Valid NC driver\'s license required (CDL preferred for heavy-duty)',
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
  {
    title: 'Competitive Pay & Benefits',
    body: 'We offer competitive compensation packages for qualified candidates. Our team members are valued and rewarded for their hard work and commitment.',
  },
  {
    title: 'Career Growth',
    body: 'We promote from within wherever possible. Whether you\'re starting out or looking to advance, ITS provides a path forward for motivated individuals.',
  },
  {
    title: 'Supportive Team Environment',
    body: 'Our operators, dispatchers, and office staff work together as a unit. You\'ll be supported from day one with training, clear expectations, and a team that has your back.',
  },
]

export default function Employment() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1.5 }}>
                Towers, Office Staff, Sales and More!
              </Typography>
              <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.4rem', md: '3.2rem' }, color: '#fff', lineHeight: 1.1, mb: 2.5 }}>
                Join the ITS Team
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.8, mb: 4 }}>
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
                sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#34919e' } }}
              >
                Call (919) 790-9393
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ bgcolor: '#fff', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
                <Box sx={{ borderLeft: `4px solid ${TEAL}`, pl: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Send Your Application</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>We'll be in touch to discuss open positions.</Typography>
                </Box>
                <QuoteForm heading="" defaultSubject="Employment Application" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── About strip ── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2 }}>
              Start Your Career!
            </Typography>
            <Typography variant="body1" sx={{ color: '#4a5568', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              Join the best in the business in an exciting, fast-paced environment where you can thrive
              and make a difference. We are looking for confident, career-driven individuals who are
              committed to the success of our growing company.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Why Work + Positions ── */}
      <Box sx={{ bgcolor: LIGHT, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                Why Work at Integrity Towing Solutions?
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 4 }}>
                ITS is a growing towing and parking enforcement company serving the Triangle and Triad
                regions of North Carolina. We operate 24/7 and take pride in delivering professional,
                reliable service across our markets. Our team is the backbone of everything we do.
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mb: 6 }}>
                {WHY_WORK.map(({ title, body }) => (
                  <Paper key={title} elevation={0} sx={{ p: 3, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2 }}>
                    <WorkIcon sx={{ color: TEAL, fontSize: 32, mb: 1.5 }} />
                    <Typography variant="h6" sx={{ color: NAVY, fontSize: '1rem', mb: 1 }}>{title}</Typography>
                    <Typography variant="body2" sx={{ color: '#4a5568', lineHeight: 1.75 }}>{body}</Typography>
                  </Paper>
                ))}
              </Box>

              <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.5rem', md: '1.8rem' }, mb: 3 }}>
                Open Positions
              </Typography>
              {POSITIONS.map(({ title, requirements }) => (
                <Box key={title} sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 28, height: 3, bgcolor: TEAL, borderRadius: 2, flexShrink: 0 }} />
                    <Typography variant="h5" sx={{ color: NAVY, fontSize: '1.125rem' }}>{title}</Typography>
                  </Box>
                  <List dense disablePadding sx={{ pl: 0.5 }}>
                    {requirements.map((r) => (
                      <ListItem key={r} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}><CheckCircleIcon sx={{ fontSize: 16, color: TEAL }} /></ListItemIcon>
                        <ListItemText primary={r} primaryTypographyProps={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.7 }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}

              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mt: 2 }}>
                To apply, fill out the form above or call us at{' '}
                <Box component="a" href="tel:9197909393" sx={{ color: '#0057A5', fontWeight: 600 }}>(919) 790-9393</Box>.
                You can also email your resume directly to{' '}
                <Box component="a" href="mailto:impound@integritytow.com" sx={{ color: '#0057A5', fontWeight: 600 }}>impound@integritytow.com</Box>.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: 'sticky', top: 24 }}>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, mb: 2, fontSize: '1rem', fontWeight: 700 }}>Open Roles</Typography>
                  <List dense disablePadding>
                    {OPEN_ROLES.map((s) => (
                      <ListItem key={s} disablePadding sx={{ mb: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 26 }}><CheckCircleIcon sx={{ fontSize: 15, color: TEAL }} /></ListItemIcon>
                        <ListItemText primary={s} primaryTypographyProps={{ fontSize: '0.875rem', color: '#4a5568' }} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  component="a"
                  href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 700, py: 1.75, boxShadow: 'none', '&:hover': { bgcolor: '#2d4060' } }}
                >
                  (919) 790-9393
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
