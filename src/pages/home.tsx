import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import PhoneIcon from '@mui/icons-material/Phone'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckIcon from '@mui/icons-material/Check'
import BusinessIcon from '@mui/icons-material/Business'
import MapIcon from '@mui/icons-material/Map'
import VerifiedIcon from '@mui/icons-material/Verified'
import QuoteForm from '../components/QuoteForm'

// ─── Brand constants ───────────────────────────────────────────────────────
const NAVY = '#1D2B45'
const BLUE = '#0057A5'
const TEAL = '#3EAACC'
const LIGHT = '#F5F7FA'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

// ─── Data ──────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: '/images/icon-ppi.png',
    title: 'Private Property Towing',
    description:
      'Parking enforcement built for property managers — written authorization, clear documentation, and consistent processes that protect your property and residents.',
    path: '/services/private-property',
  },
  {
    icon: '/images/icon-roadside.png',
    title: 'Emergency Response & Accident Scene Management',
    description:
      'Fast, coordinated response for incidents and disabled vehicles — helping restore access, reduce risk, and keep traffic and cities moving.',
    path: '/services/emergency-response',
  },
  {
    icon: '/images/icon-mass.png',
    title: 'Mass Relocation Towing Services',
    description:
      'Efficient, organized towing support for large-scale moves and repositioning — planned logistics, clear communication, and minimal disruption for your site.',
    path: '/services/mass-relocation',
  },
]

const STATS = [
  { icon: <BusinessIcon sx={{ fontSize: 32, color: TEAL }} />, value: '3', label: 'NC Locations' },
  { icon: <MapIcon sx={{ fontSize: 32, color: TEAL }} />, value: 'Triangle & Triad', label: 'Service Areas' },
  { icon: <VerifiedIcon sx={{ fontSize: 32, color: TEAL }} />, value: '24/7', label: 'Always Available' },
  { icon: <CheckIcon sx={{ fontSize: 32, color: TEAL }} />, value: '100%', label: 'Documented & Compliant' },
]

const WHY_US = [
  {
    title: 'Partner, Not Vendor',
    body: 'We take time to understand your property and build an enforcement program that fits — consistent communication, not just when problems arise.',
  },
  {
    title: 'Defensible Process',
    body: 'Every tow is grounded in written authorization, proper signage, and NC statutory compliance. Documentation that stands up to disputes.',
  },
  {
    title: 'Consistent Execution',
    body: 'Same process, same standards, week after week across every property we manage. Predictable enforcement that residents understand.',
  },
  {
    title: 'Multi-Market Scale',
    body: 'Infrastructure across Raleigh, Durham, Chapel Hill, and Greensboro — one consistent approach across multi-property portfolios.',
  },
  {
    title: 'Transparent Operations',
    body: 'Clients always know what is happening on their properties. Nothing falls through the cracks — every action is documented.',
  },
  {
    title: '24/7 Availability',
    body: 'Emergencies and last-minute changes can occur at any time. We offer flexible scheduling and around-the-clock availability.',
  },
]

// ─── Component ─────────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <Box
        sx={{
          bgcolor: NAVY,
          ...DOT_GRID,
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Teal gradient glow top-right */}
        <Box
          sx={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(62,170,204,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            {/* Left: copy */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{
                  color: TEAL,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  fontSize: '0.8rem',
                  display: 'block',
                  mb: 1.5,
                }}
              >
                Parking Management &amp; Towing Services
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontFamily: "'Saira', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '2.6rem', sm: '3.2rem', md: '3.8rem', lg: '4.25rem' },
                  color: '#fff',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  mb: 3,
                }}
              >
                Parking Management
                <Box component="span" sx={{ color: TEAL, display: 'block' }}>Done Right.</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.8,
                  maxWidth: 560,
                  mb: 4,
                }}
              >
                ITS is committed to being your preferred towing and parking enforcement partner across the
                Triangle and Triad of North Carolina. With trained professionals, compliant processes, and
                data-driven operations, our mission is to bring accountability and reliability to parking
                enforcement — consistently, across every property we manage.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  sx={{
                    bgcolor: TEAL,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    px: 3.5,
                    py: 1.6,
                    boxShadow: '0 4px 20px rgba(62,170,204,0.35)',
                    '&:hover': { bgcolor: '#34919e', boxShadow: '0 6px 24px rgba(62,170,204,0.45)' },
                  }}
                >
                  (919) 790-9393
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/services/private-property')}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.35)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1.6,
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Grid>

            {/* Right: quote form card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
                }}
              >
                <Box sx={{ borderLeft: `4px solid ${TEAL}`, pl: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700, mb: 0.25 }}>
                    Request a Free Quote
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>
                    We typically respond within 1 business hour.
                  </Typography>
                </Box>
                <QuoteForm heading="" defaultSubject="Homepage Quote Request" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: BLUE, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 3, md: 0 },
              divideX: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {STATS.map(({ icon, value, label }) => (
              <Box
                key={label}
                sx={{
                  textAlign: 'center',
                  px: { md: 3 },
                  borderRight: { md: '1px solid rgba(255,255,255,0.15)' },
                  '&:last-child': { borderRight: 'none' },
                }}
              >
                <Box sx={{ mb: 0.75 }}>{icon}</Box>
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.75rem' }, fontFamily: "'Saira', sans-serif", lineHeight: 1.1 }}>
                  {value}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontFamily: "'Saira', sans-serif", mt: 0.25 }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1 }}
            >
              What We Do
            </Typography>
            <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}>
              Our Services
            </Typography>
            <Typography variant="body1" sx={{ color: '#4a5568', maxWidth: 600, mx: 'auto', fontSize: '1.0625rem' }}>
              From private property enforcement to large-scale relocations, ITS delivers towing solutions
              built around your operation.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {SERVICES.map(({ icon, title, description, path }) => (
              <Grid key={title} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #e8ecf0',
                    borderTop: `4px solid ${TEAL}`,
                    borderRadius: 2,
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={icon}
                    alt={title}
                    sx={{ height: 52, width: 'auto', objectFit: 'contain', objectPosition: 'left', mb: 2.5 }}
                  />
                  <Typography variant="h5" sx={{ color: NAVY, mb: 1.5, fontSize: '1.2rem' }}>
                    {title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.75, flex: 1, mb: 3 }}>
                    {description}
                  </Typography>
                  <Button
                    variant="text"
                    onClick={() => navigate(path)}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: BLUE,
                      fontWeight: 600,
                      p: 0,
                      alignSelf: 'flex-start',
                      '&:hover': { bgcolor: 'transparent', color: NAVY },
                    }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          WHY CHOOSE ITS
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: LIGHT, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
            {/* Left: intro text */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                variant="overline"
                sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1 }}
              >
                Why ITS
              </Typography>
              <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '2rem', md: '2.4rem' }, mb: 2.5 }}>
                A Better Kind of Towing Partner
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 3 }}>
                When it comes to reliable private property towing services across the Triangle and Triad,
                ITS is your go-to partner. We specialize in delivering towing solutions that prioritize
                compliance, consistency, and clear communication for property owners and managers.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  bgcolor: NAVY,
                  color: '#fff',
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#2d4060' },
                  boxShadow: 'none',
                }}
              >
                Talk to Us
              </Button>
            </Grid>

            {/* Right: value grid */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                  gap: 3,
                }}
              >
                {WHY_US.map(({ title, body }) => (
                  <Box key={title}>
                    <Box sx={{ width: 36, height: 3, bgcolor: TEAL, mb: 1.5, borderRadius: 2 }} />
                    <Typography variant="h6" sx={{ color: NAVY, mb: 1, fontSize: '1.0625rem' }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4a5568', lineHeight: 1.75 }}>
                      {body}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="overline"
              sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1 }}
            >
              What Clients Say
            </Typography>
            <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Trusted by Property Managers Across NC
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                quote: 'ITS has been a reliable partner for our apartment community. Their team is professional, responsive, and the documentation they provide is thorough and defensible.',
                name: 'Property Manager',
                source: 'Raleigh, NC',
              },
              {
                quote: "Finally a towing company that actually communicates. We always know what's happening on our properties, and enforcement has been consistent since day one.",
                name: 'Regional Portfolio Manager',
                source: 'Triangle Area',
              },
              {
                quote: "We've worked with several towing companies over the years. ITS stands out for their process and accountability — exactly what we needed.",
                name: 'HOA Board Member',
                source: 'Greensboro, NC',
              },
            ].map(({ quote, name, source }) => (
              <Grid key={name} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderLeft: `3px solid ${TEAL}`,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      color: TEAL,
                      fontSize: '3rem',
                      lineHeight: 0.8,
                      fontFamily: 'Georgia, serif',
                      mb: 1.5,
                      mt: -0.5,
                    }}
                  >
                    &ldquo;
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, flex: 1, mb: 2.5, fontStyle: 'italic' }}>
                    {quote}
                  </Typography>
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontFamily: "'Saira', sans-serif", fontSize: '0.95rem' }}>
                      {name}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', fontFamily: "'Saira', sans-serif" }}>
                      {source}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: BLUE, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{ color: 'rgba(255,255,255,0.65)', fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1 }}
              >
                Ready to Get Started?
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: '#fff', fontSize: { xs: '1.9rem', md: '2.5rem' }, mb: 2, lineHeight: 1.2 }}
              >
                Let's Build a Parking Enforcement Program for Your Property
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.75 }}>
                Serving the Triangle and Triad — Raleigh, Durham, Chapel Hill, Greensboro, and surrounding communities. Available 24/7.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  fullWidth
                  sx={{
                    bgcolor: '#fff',
                    color: BLUE,
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    py: 1.75,
                    boxShadow: 'none',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                  }}
                >
                  Call (919) 790-9393
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  fullWidth
                  sx={{
                    borderColor: 'rgba(255,255,255,0.5)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: 1.75,
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  Send a Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
