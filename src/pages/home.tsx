import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Building2, Clock, FileCheck, MessageSquare, ShieldCheck, Truck, Zap } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function scrollToServices() {
  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
}

// ── Brand motif ──────────────────────────────────────────────────────────────
function TripleArrows({ color = '#E1AD00', height = 60, opacity = 1 }: { color?: string; height?: number; opacity?: number }) {
  const width = height * (117 / 60)
  return (
    <svg viewBox="0 0 117 60" width={width} height={height} style={{ opacity, display: 'block' }} xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 23,0 35,30 23,60 0,60 12,30" fill={color} />
      <polygon points="41,0 64,0 76,30 64,60 41,60 53,30" fill={color} />
      <polygon points="82,0 105,0 117,30 105,60 82,60 94,30" fill={color} />
    </svg>
  )
}

// ── Wave separator between sections ─────────────────────────────────────────
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

// ── Angle separator (subtle, for near-identical colors) ──────────────────────
function AngleSeparator({ from, to }: { from: string; to: string }) {
  return (
    <Box sx={{ display: 'block', lineHeight: 0, background: to, mt: '-1px', pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px' }}>
        <polygon points="0,0 1440,0 1440,50 0,10" fill={from} />
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

// ── Animated counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.8 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }
    let frame = 0
    const frames = 55
    const timer = setInterval(() => {
      frame++
      setCount(Math.round((frame / frames) * target))
      if (frame >= frames) clearInterval(timer)
    }, 18)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
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
    title: 'Emergency Response & Accident Scene',
    description:
      'Fast, coordinated response for incidents and disabled vehicles — helping restore access, reduce risk, and keep traffic and cities moving.',
    path: '/services/emergency-response',
  },
  {
    Icon: Truck,
    title: 'Mass Relocation Towing',
    description:
      'Efficient, organized towing support for large-scale moves and repositioning — planned logistics, clear communication, and minimal disruption for your site.',
    path: '/services/mass-relocation',
  },
]

const pillars = [
  {
    Icon: Clock,
    title: 'Rapid Response',
    description: 'On-site fast, day or night. We respond to calls faster than any competitor across the Triangle and Triad.',
  },
  {
    Icon: FileCheck,
    title: 'Full Documentation',
    description: 'Every tow is logged with photos, timestamps, and digital reports — keeping your property protected from liability.',
  },
  {
    Icon: MessageSquare,
    title: 'Direct Communication',
    description: 'Your dedicated property liaison is always reachable. No call centers, no runaround, no surprises.',
  },
  {
    Icon: ShieldCheck,
    title: 'Code Compliant',
    description: 'Every tow meets North Carolina statutory requirements, so you and your residents are always covered.',
  },
]

const quotes = [
  {
    quote:
      'Integrity Towing has been an invaluable partner for our property. Their response time and professionalism set them apart from anyone we\u2019ve worked with before.',
    author: 'Property Manager, Raleigh',
  },
  {
    quote:
      'We manage over a dozen communities and Integrity handles all of them. Consistent, reliable, and they always keep us informed.',
    author: 'Regional Property Manager, Durham',
  },
  {
    quote:
      'The team at Integrity understands what property managers need. Clear communication, proper documentation, and zero complaints from residents.',
    author: 'Community Manager, Greensboro',
  },
]

// ── Component ────────────────────────────────────────────────────────────────
function Home() {
  const navigate = useNavigate()

  return (
    <Box>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(150deg, #1D2B45 0%, #253654 55%, #2E4168 100%)',
          color: '#ffffff',
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          overflow: 'hidden',
          minHeight: { xs: '62vh', md: 'auto' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Dot grid texture */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 }, position: 'relative', zIndex: 1, width: '100%' }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">

            {/* Left: text content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <Typography
                  sx={{
                    color: '#E1AD00',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    mb: 2,
                    fontFamily: "'Saira', sans-serif",
                  }}
                >
                  Serving the Triangle &amp; Triad
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.4rem' },
                    letterSpacing: { xs: '-0.5px', md: '-2px' },
                    lineHeight: 1.05,
                    mb: 3,
                    fontFamily: "'Saira', sans-serif",
                  }}
                >
                  Parking Management<br />Done Right.
                </Typography>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left' }}
                >
                  <Box sx={{ width: 60, height: 4, background: '#E1AD00', mb: 3.5, borderRadius: 2 }} />
                </motion.div>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.72)',
                    mb: 5,
                    fontWeight: 500,
                    lineHeight: 1.85,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    maxWidth: 500,
                  }}
                >
                  Serving property owners and managers across Raleigh, Durham, Chapel Hill, and
                  Greensboro with integrity, professionalism, and around-the-clock availability.
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
                      background: '#E1AD00',
                      color: '#1D2B45',
                      fontWeight: 700,
                      px: 4,
                      py: 1.6,
                      fontSize: '0.95rem',
                      letterSpacing: '0.3px',
                      boxShadow: 'none',
                      '&:hover': { background: '#c99c00', boxShadow: 'none' },
                    }}
                  >
                    Our Services
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="tel:9197909393"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.35)',
                      color: '#ffffff',
                      fontWeight: 700,
                      px: 4,
                      py: 1.6,
                      fontSize: '0.95rem',
                      '&:hover': { borderColor: '#E1AD00', color: '#E1AD00', background: 'transparent' },
                    }}
                  >
                    (919) 790-9393
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            {/* Right: stat panel */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <Box sx={{ position: 'relative', width: 360 }}>
                  {/* Background arrows */}
                  <Box sx={{ position: 'absolute', right: -50, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
                    <TripleArrows color="#E1AD00" height={300} opacity={0.06} />
                  </Box>

                  {/* Stat cards */}
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    {[
                      { value: '24/7', label: 'Always Available', sub: 'No holidays, no exceptions' },
                      { value: '1,100+', label: 'Programs Managed', sub: 'Across the Triangle & Triad' },
                      { value: '3', label: 'NC Locations', sub: 'Raleigh · Durham · Greensboro' },
                    ].map(({ value, label, sub }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                      >
                        <Box
                          sx={{
                            mb: i < 2 ? 2 : 0,
                            p: 3,
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderLeft: '3px solid #E1AD00',
                            borderRadius: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 900,
                              fontSize: '2.5rem',
                              color: '#ffffff',
                              fontFamily: "'Saira', sans-serif",
                              lineHeight: 1,
                              mb: 0.5,
                            }}
                          >
                            {value}
                          </Typography>
                          <Typography
                            sx={{
                              color: 'rgba(255,255,255,0.85)',
                              fontWeight: 700,
                              fontSize: '0.85rem',
                              fontFamily: "'Saira', sans-serif",
                              mb: 0.25,
                            }}
                          >
                            {label}
                          </Typography>
                          <Typography sx={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.74rem', fontFamily: "'Saira', sans-serif" }}>
                            {sub}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ── Wave: hero → stats ─────────────────────────────────────────────── */}
      <WaveSeparator from="#1D2B45" to="#E1AD00" />

      {/* ── Stats Strip ───────────────────────────────────────────────────── */}
      <Box sx={{ background: '#E1AD00', py: { xs: 3.5, md: 4.5 } }}>
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={stagger}
          >
            <Grid container>
              {[
                { label: 'Always Available', node: <span>24 / 7</span> },
                { label: 'Locations Across NC', node: <AnimatedCounter target={3} /> },
                { label: 'Programs Managed', node: <AnimatedCounter target={1100} suffix="+" /> },
              ].map(({ label, node }, i) => (
                <Grid
                  key={label}
                  size={{ xs: 4 }}
                  sx={{
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid rgba(29,43,69,0.18)' : 'none',
                    px: { xs: 1, sm: 2, md: 3 },
                  }}
                >
                  <motion.div variants={fadeUp}>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2.4rem' },
                        color: '#1D2B45',
                        lineHeight: 1,
                        fontFamily: "'Saira', sans-serif",
                      }}
                    >
                      {node}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.55rem', sm: '0.65rem', md: '0.75rem' },
                        color: 'rgba(29,43,69,0.7)',
                        mt: 0.75,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontFamily: "'Saira', sans-serif",
                      }}
                    >
                      {label}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── Wave: stats → about ────────────────────────────────────────────── */}
      <WaveSeparator from="#E1AD00" to="#ffffff" flip />

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-40px', bottom: '-30px', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#E1AD00" height={200} opacity={0.04} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <Typography
                  sx={{
                    color: '#0057A5',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    mb: 1.5,
                    fontFamily: "'Saira', sans-serif",
                  }}
                >
                  Who We Are
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, lineHeight: 1.2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
                >
                  Built on Integrity.<br />Driven by Results.
                </Typography>
                <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 3, borderRadius: 1 }} />
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  Integrity Towing Solutions is a private property impound partner built to bring
                  professionalism, compliance, and clear accountability to parking enforcement. We
                  exist to raise the standard for private property impound — giving property managers
                  a towing partner they can rely on.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  Every tow is grounded in written authorization, proper signage, and compliance with
                  North Carolina statutes, backed by documentation that stands up to questions and
                  reviews. We focus exclusively on private property impound and use data-driven
                  operations to improve enforcement over time. Today, ITS manages over 1,100 parking
                  enforcement programs across Raleigh, Durham, Chapel Hill, and Greensboro —
                  delivering a consistent standard in every market.
                </Typography>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
              >
                <Grid container spacing={2}>
                  {[
                    { label: 'Licensed & Insured', detail: 'Fully licensed in North Carolina with comprehensive liability coverage.' },
                    { label: '24 / 7 Availability', detail: 'Around-the-clock dispatch — no holidays, no exceptions.' },
                    { label: 'Triangle & Triad', detail: 'Serving Raleigh, Durham, Chapel Hill, and Greensboro across four markets.' },
                    { label: 'Compliance First', detail: 'Every tow meets NC statutory requirements, protecting you from liability.' },
                  ].map(({ label, detail }) => (
                    <Grid key={label} size={{ xs: 12, sm: 6 }}>
                      <motion.div variants={fadeUp}>
                        <Box
                          sx={{
                            p: 2.5,
                            border: '1px solid rgba(29,43,69,0.1)',
                            borderLeft: '3px solid #E1AD00',
                            borderRadius: 1,
                            height: '100%',
                          }}
                        >
                          <Typography sx={{ fontWeight: 700, color: '#1D2B45', mb: 0.5, fontSize: '0.9rem', fontFamily: "'Saira', sans-serif" }}>
                            {label}
                          </Typography>
                          <Typography sx={{ color: '#6B7A8D', fontSize: '0.82rem', lineHeight: 1.65 }}>
                            {detail}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Angle: about → services (near-identical colors) ───────────────── */}
      <AngleSeparator from="#ffffff" to="#F5F6F8" />

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <Box id="services-section" sx={{ py: { xs: 7, md: 10 }, background: '#F5F6F8' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  color: '#0057A5',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 1.5,
                  fontFamily: "'Saira', sans-serif",
                }}
              >
                What We Do
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1D2B45', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                Three Core Services
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 2.5, borderRadius: 1 }} />
              <Typography sx={{ color: '#6B7A8D', maxWidth: 520, lineHeight: 1.8, fontWeight: 500 }}>
                From routine private property enforcement to large-scale relocations, we provide
                comprehensive towing and parking management solutions.
              </Typography>
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
                        borderTop: '4px solid #E1AD00',
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
                            color: '#E1AD00',
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

      {/* ── Wave: services → why choose us ────────────────────────────────── */}
      <WaveSeparator from="#F5F6F8" to="#1D2B45" flip />

      {/* ── Why Choose Us ─────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#1D2B45', position: 'relative', overflow: 'hidden' }}>
        {/* Dot grid */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
        {/* Watermark arrows */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#E1AD00" height={180} opacity={0.05} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  color: '#E1AD00',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 1.5,
                  fontFamily: "'Saira', sans-serif",
                }}
              >
                Why Property Managers Choose Us
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#ffffff', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                More Than Just a Tow Truck
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 2.5, borderRadius: 1 }} />
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 480, lineHeight: 1.8, fontWeight: 500 }}>
                We don't just tow vehicles — we manage risk, reduce complaints, and keep your properties protected.
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={{ xs: 5, md: 4 }}>
              {pillars.map(({ Icon, title, description }) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <motion.div variants={fadeUp}>
                    <Box sx={{ px: { md: 1 } }}>
                      <Box sx={{ mb: 2.5 }}>
                        <Icon size={44} color="#E1AD00" strokeWidth={1.25} />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#ffffff',
                          mb: 1.25,
                          fontSize: '1rem',
                          fontFamily: "'Saira', sans-serif",
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                        {description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── Wave: why → testimonials ───────────────────────────────────────── */}
      <WaveSeparator from="#1D2B45" to="#D9DADF" />

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#D9DADF', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#1D2B45" height={160} opacity={0.04} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  color: '#0057A5',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 1.5,
                  fontFamily: "'Saira', sans-serif",
                }}
              >
                Client Feedback
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1D2B45', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                What Property Managers Say
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 2.5, borderRadius: 1 }} />
              <Typography sx={{ color: '#6B7A8D', lineHeight: 1.7, fontWeight: 500 }}>
                Trusted by property management professionals across North Carolina
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={4}>
              {quotes.map((q, i) => (
                <Grid key={i} size={{ xs: 12, md: 4 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Box
                      sx={{
                        background: '#ffffff',
                        border: '1px solid rgba(29,43,69,0.07)',
                        borderLeft: '4px solid #E1AD00',
                        borderRadius: 2,
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 2px 16px rgba(29,43,69,0.07)',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#E1AD00',
                          fontSize: '3.5rem',
                          lineHeight: 0.8,
                          mb: 2,
                          fontFamily: "'Saira', sans-serif",
                          opacity: 0.75,
                        }}
                      >
                        &ldquo;
                      </Typography>
                      <Typography
                        sx={{ color: '#1D2B45', lineHeight: 1.85, mb: 3, fontStyle: 'italic', flex: 1, fontSize: '0.95rem' }}
                      >
                        {q.quote}
                      </Typography>
                      <Typography sx={{ color: '#E1AD00', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.3px' }}>
                        — {q.author}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── Wave: testimonials → CTA ───────────────────────────────────────── */}
      <WaveSeparator from="#D9DADF" to="#004A8F" flip />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <Box sx={{ background: '#004A8F', py: { xs: 7, md: 9 }, position: 'relative', overflow: 'hidden' }}>
        {/* Dot grid */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff', mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              Ready to protect your property?
            </Typography>
            <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 3, borderRadius: 1 }} />
            <Typography sx={{ color: 'rgba(255,255,255,0.72)', mb: 4.5, lineHeight: 1.85, fontWeight: 500 }}>
              Contact us today for a free consultation and learn how Integrity Towing Solutions can serve your community.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
              <Button
                variant="contained"
                href="tel:9197909393"
                sx={{ background: '#E1AD00', color: '#1D2B45', fontWeight: 700, px: 4, py: 1.6, fontSize: '0.95rem', boxShadow: 'none', width: { xs: '100%', sm: 'auto' }, maxWidth: { xs: 320, sm: 'none' }, '&:hover': { background: '#c99c00', boxShadow: 'none' } }}
              >
                (919) 790-9393
              </Button>
              <Button
                variant="outlined"
                onClick={scrollToServices}
                sx={{ borderColor: 'rgba(255,255,255,0.45)', color: '#ffffff', fontWeight: 700, px: 4, py: 1.6, fontSize: '0.95rem', width: { xs: '100%', sm: 'auto' }, maxWidth: { xs: 320, sm: 'none' }, '&:hover': { borderColor: '#ffffff', background: 'rgba(255,255,255,0.08)' } }}
              >
                View Services
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

    </Box>
  )
}

export default Home
