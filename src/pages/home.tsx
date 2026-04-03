import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Building2, Truck, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function scrollToServices() {
  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
}

// ── Brand motif ──────────────────────────────────────────────────────────────
function TripleArrows({ color = '#ffffff', height = 60, opacity = 1 }: { color?: string; height?: number; opacity?: number }) {
  const width = height * (117 / 60)
  return (
    <svg viewBox="0 0 117 60" width={width} height={height} style={{ opacity, display: 'block' }} xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 23,0 35,30 23,60 0,60 12,30" fill={color} />
      <polygon points="41,0 64,0 76,30 64,60 41,60 53,30" fill={color} />
      <polygon points="82,0 105,0 117,30 105,60 82,60 94,30" fill={color} />
    </svg>
  )
}

// ── Angle separator ──────────────────────────────────────────────────────────
function AngleSeparator({ from, to }: { from: string; to: string }) {
  return (
    <Box sx={{ display: 'block', lineHeight: 0, background: to, mt: '-1px', pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px' }}>
        <polygon points="0,0 1440,0 1440,50 0,10" fill={from} />
      </svg>
    </Box>
  )
}

// ── Wave separator ───────────────────────────────────────────────────────────
function WaveSeparator({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  const path = flip
    ? 'M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z'
    : 'M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z'
  return (
    <Box sx={{ display: 'block', lineHeight: 0, background: to, mt: '-1px', pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '72px' }}>
        <path d={path} fill={from} />
      </svg>
    </Box>
  )
}

// ── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    Icon: Building2,
    title: 'Private Property Towing',
    description:
      'Parking enforcement built for property managers — written authorization, clear documentation, and consistent processes that protect your property and residents.',
    path: '/services/private-property',
  },
  {
    Icon: Zap,
    title: 'Emergency Response & Accident Scene Management',
    description:
      'Fast, coordinated response for incidents and disabled vehicles — helping restore access, reduce risk, and keep traffic and cities moving.',
    path: '/services/emergency-response',
  },
  {
    Icon: Truck,
    title: 'Mass Relocation Towing Services',
    description:
      'Efficient, organized towing support for large-scale moves and repositioning — planned logistics, clear communication, and minimal disruption for your site.',
    path: '/services/mass-relocation',
  },
]

// ── Component ────────────────────────────────────────────────────────────────
function Home() {
  const navigate = useNavigate()

  return (
    <Box>

      {/* ── Hero: full-viewport split ────────────────────────────────────── */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          overflow: 'hidden',
        }}
      >
        {/* Left: brand motif panel */}
        <Box
          sx={{
            width: { xs: '100%', md: '42%' },
            minHeight: { xs: '52vw', md: '100vh' },
            background: 'linear-gradient(135deg, #1e293b, #334155)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            pt: { xs: 9, md: 0 },
            pb: { xs: 4, md: 0 },
          }}
        >
          {/* Dot grid */}
          <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
          {/* Subtle corner arrows */}
          <Box sx={{ position: 'absolute', bottom: -20, right: -30, pointerEvents: 'none', opacity: 0.06 }}>
            <TripleArrows color="#ffffff" height={200} />
          </Box>
          {/* Main brand motif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <TripleArrows color="#ffffff" height={220} opacity={0.9} />
          </motion.div>
        </Box>

        {/* Right: content panel */}
        <Box
          sx={{
            width: { xs: '100%', md: '58%' },
            minHeight: { xs: 'auto', md: '100vh' },
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            px: { xs: 3, sm: 5, md: 8, lg: 10 },
            pt: { xs: 5, md: 0 },
            pb: { xs: 8, md: 0 },
            borderLeft: { md: 'none' },
          }}
        >
          <Box sx={{ maxWidth: 520 }}>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <Typography
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem' },
                  color: '#1D2B45',
                  lineHeight: 1.05,
                  letterSpacing: { xs: '-0.5px', md: '-1.5px' },
                  mb: 2,
                  fontFamily: "'Saira', sans-serif",
                }}
              >
                Parking Management<br />Done Right.
              </Typography>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              >
                <Box sx={{ width: 60, height: 4, background: '#0057A5', mb: 3, borderRadius: 2 }} />
              </motion.div>

              <Typography
                sx={{
                  color: '#6B7A8D',
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  lineHeight: 1.85,
                  mb: 4,
                  fontFamily: "'Saira', sans-serif",
                }}
              >
                A private property impound partner built to bring professionalism,
                compliance, and clear accountability to parking enforcement across
                North Carolina.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'stretch', sm: 'center' },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToServices}
                  sx={{
                    background: '#1D2B45',
                    color: '#ffffff',
                    fontWeight: 700,
                    px: 4,
                    py: 1.6,
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                    boxShadow: 'none',
                    '&:hover': { background: '#253654', boxShadow: 'none' },
                  }}
                >
                  Our Services
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="tel:9197909393"
                  sx={{
                    borderColor: 'rgba(29,43,69,0.25)',
                    color: '#1D2B45',
                    fontWeight: 700,
                    px: 4,
                    py: 1.6,
                    fontSize: '0.95rem',
                    '&:hover': { borderColor: '#1D2B45', background: 'rgba(29,43,69,0.04)' },
                  }}
                >
                  (919) 790-9393
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#ffffff', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(29,43,69,0.08)' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-40px', bottom: '-30px', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#1D2B45" height={200} opacity={0.03} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Grid container spacing={{ xs: 0, md: 8 }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, lineHeight: 1.2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                  About Integrity Towing Solutions
                </Typography>
                <Box sx={{ width: 48, height: 3, background: '#0057A5', mb: 3, borderRadius: 1 }} />
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  Integrity Towing Solutions is a private property impound partner built to bring
                  professionalism, compliance, and clear accountability to parking enforcement. We
                  exist to raise the standard for private property impound — giving property managers
                  a towing partner they can rely on.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  Every tow is grounded in written authorization, proper signage, and compliance with
                  North Carolina statutes, backed by documentation that stands up to questions and
                  reviews. We operate with transparency, so clients always know what is happening on
                  their properties and nothing falls through the cracks. We focus exclusively on
                  private property impound and use data-driven operations to improve enforcement over
                  time. Today, ITS manages over 1,100 parking enforcement programs across Raleigh,
                  Durham, Chapel Hill, and Greensboro — delivering a consistent standard in every market.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── Angle: about → services ───────────────────────────────────────── */}
      <AngleSeparator from="#ffffff" to="#D9DADF" />

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <Box id="services-section" sx={{ py: { xs: 7, md: 10 }, background: '#D9DADF' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1D2B45', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                What We Do
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#0057A5', mx: 'auto', borderRadius: 1 }} />
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={4}>
              {services.map(({ Icon, title, description, path }) => (
                <Grid key={title} size={{ xs: 12, md: 4 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Card
                      onClick={() => navigate(path)}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid rgba(29,43,69,0.1)',
                        borderTop: '4px solid #0057A5',
                        boxShadow: '0 4px 20px rgba(29,43,69,0.08)',
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 16px 40px rgba(29,43,69,0.14)',
                        },
                      }}
                    >
                      <CardContent sx={{ flex: 1, p: 4 }}>
                        <Box sx={{ mb: 3 }}>
                          <Icon size={48} color="#0057A5" strokeWidth={1.25} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 1.5, color: '#1D2B45', lineHeight: 1.3, fontSize: '1.05rem' }}
                        >
                          {title}
                        </Typography>
                        <Typography sx={{ color: '#6B7A8D', lineHeight: 1.8, mb: 3, fontSize: '0.9rem' }}>
                          {description}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#0057A5',
                            fontWeight: 700,
                            fontSize: '0.78rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.7px',
                          }}
                        >
                          Learn More →
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── Wave: services → CTA ──────────────────────────────────────────── */}
      <WaveSeparator from="#D9DADF" to="#0057A5" flip />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <Box sx={{ background: '#0057A5', py: { xs: 6, md: 8 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#ffffff" height={200} opacity={0.06} />
        </Box>
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff', mb: 3, fontSize: { xs: '1.6rem', md: '2rem' }, fontFamily: "'Saira', sans-serif" }}>
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
              <Button
                variant="contained"
                href="tel:9197909393"
                sx={{ background: '#ffffff', color: '#1D2B45', fontWeight: 700, px: 4, py: 1.6, fontSize: '0.95rem', boxShadow: 'none', width: { xs: '100%', sm: 'auto' }, maxWidth: { xs: 320, sm: 'none' }, '&:hover': { background: 'rgba(255,255,255,0.9)', boxShadow: 'none' } }}
              >
                (919) 790-9393
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/contact')}
                sx={{ borderColor: 'rgba(255,255,255,0.45)', color: '#ffffff', fontWeight: 700, px: 4, py: 1.6, fontSize: '0.95rem', width: { xs: '100%', sm: 'auto' }, maxWidth: { xs: 320, sm: 'none' }, '&:hover': { borderColor: '#ffffff', background: 'rgba(255,255,255,0.08)' } }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

    </Box>
  )
}

export default Home
