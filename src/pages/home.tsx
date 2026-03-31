import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Building2, Clock, FileCheck, MessageSquare, ShieldCheck, Truck, Zap } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

// ── Animated counter (resets and re-runs each time it enters view) ───────────
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

// ── Data ────────────────────────────────────────────────────────────────────
const services = [
  {
    Icon: Building2,
    title: 'Private Property Towing',
    description:
      'Professional and compliant towing for apartment communities, commercial properties, and HOAs across the Triangle and Triad.',
    path: '/services/private-property',
  },
  {
    Icon: Zap,
    title: 'Emergency Response & Accident Scene',
    description:
      'Rapid deployment for accident scene management, coordinating with first responders to clear roadways safely and efficiently.',
    path: '/services/emergency-response',
  },
  {
    Icon: Truck,
    title: 'Mass Relocation Towing',
    description:
      'Large-scale vehicle relocation for events, construction projects, and property management operations — handled end-to-end.',
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

// ── Component ───────────────────────────────────────────────────────────────
function Home() {
  const navigate = useNavigate()

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(150deg, #1D2B45 0%, #253654 55%, #2E4168 100%)',
          color: '#ffffff',
          minHeight: { xs: '72vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 120px)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: { xs: 8, md: 14 }, px: { xs: 3, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', sm: '3rem', md: '4.2rem' },
                letterSpacing: { xs: '-0.5px', sm: '-1px', md: '-2px' },
                lineHeight: 1.08,
                mb: 3,
                fontFamily: "'Saira', sans-serif",
              }}
            >
              Parking Management<br />Done Right.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
          >
            <Box sx={{ width: 60, height: 4, background: '#E1AD00', mx: 'auto', mb: 3, borderRadius: 2 }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.72)',
                mb: 5,
                fontWeight: 400,
                lineHeight: 1.85,
                fontSize: { xs: '1rem', md: '1.15rem' },
                maxWidth: 540,
                mx: 'auto',
              }}
            >
              Serving property owners and managers across Raleigh, Durham, and Greensboro
              with integrity, professionalism, and around-the-clock availability.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/services')}
                sx={{
                  background: '#E1AD00',
                  color: '#1D2B45',
                  fontWeight: 700,
                  px: 4,
                  py: 1.6,
                  fontSize: '0.95rem',
                  letterSpacing: '0.3px',
                  boxShadow: 'none',
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: 320, sm: 'none' },
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
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: 320, sm: 'none' },
                  '&:hover': { borderColor: '#E1AD00', color: '#E1AD00', background: 'transparent' },
                }}
              >
                (919) 790-9393
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ── Stats Strip ── */}
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
                { label: 'Properties Managed', node: <AnimatedCounter target={500} suffix="+" /> },
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
                        fontWeight: 600,
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

      {/* ── About ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
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
                  Integrity Towing Solutions is a North Carolina–based private property towing and
                  parking management company serving the Triangle and Triad regions. We partner
                  directly with property managers, apartment communities, HOAs, and commercial
                  property owners to enforce parking rules fairly and professionally.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  Every tow we perform is fully documented, legally compliant, and handled with the
                  professionalism your residents and tenants expect. We're not just a towing company
                  — we're a long-term partner in protecting your property.
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
                    { label: 'Triangle & Triad', detail: 'Serving Raleigh, Durham, and Greensboro from three dedicated locations.' },
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

      {/* ── Services ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1D2B45', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                What We Do
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 2.5, borderRadius: 1 }} />
              <Typography sx={{ color: '#6B7A8D', maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
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
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: '50%',
                            background: '#0057A5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3,
                          }}
                        >
                          <Icon size={22} color="#E1AD00" />
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

      {/* ── Why Choose Us ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#1D2B45' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#ffffff', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                Why Property Managers Choose Us
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 2.5, borderRadius: 1 }} />
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}>
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
                    <Box sx={{ textAlign: 'center', px: { md: 1 } }}>
                      <Box
                        sx={{
                          width: 62,
                          height: 62,
                          borderRadius: '50%',
                          background: 'rgba(62,170,204,0.12)',
                          border: '2px solid rgba(62,170,204,0.45)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2.5,
                        }}
                      >
                        <Icon size={24} color="#E1AD00" />
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

      {/* ── Testimonials ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#D9DADF' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >

            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1D2B45', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                What Property Managers Say
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 2.5, borderRadius: 1 }} />
              <Typography sx={{ color: '#6B7A8D', lineHeight: 1.7 }}>
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
                          fontFamily: 'Georgia, serif',
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

      {/* ── CTA ── */}
      <Box sx={{ background: '#0057A5', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, color: '#ffffff', mb: 1.5, fontSize: { xs: '1.4rem', md: '1.8rem' } }}
            >
              Ready to protect your property?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.72)', mb: 4, lineHeight: 1.8 }}>
              Contact us today for a free consultation and learn how Integrity Towing Solutions can serve your community.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
              }}
            >
              <Button
                variant="outlined"
                onClick={() => navigate('/services')}
                sx={{
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: '#ffffff',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: 320, sm: 'none' },
                  '&:hover': { borderColor: '#ffffff', background: 'rgba(255,255,255,0.08)' },
                }}
              >
                View Services
              </Button>
              <Button
                variant="contained"
                href="tel:9197909393"
                sx={{
                  background: '#E1AD00',
                  color: '#1D2B45',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  boxShadow: 'none',
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: 320, sm: 'none' },
                  '&:hover': { background: '#c99c00', boxShadow: 'none' },
                }}
              >
                (919) 790-9393
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
