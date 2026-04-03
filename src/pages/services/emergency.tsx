import { Box, Container, Grid, Typography } from '@mui/material'
import { AlertTriangle, Ban, Car, Calendar, FileText, Lock, Shield, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

function TripleArrows({ color = '#0057A5', height = 60, opacity = 1 }: { color?: string; height?: number; opacity?: number }) {
  const width = height * (117 / 60)
  return (
    <svg viewBox="0 0 117 60" width={width} height={height} style={{ opacity, display: 'block' }} xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,0 23,0 35,30 23,60 0,60 12,30" fill={color} />
      <polygon points="41,0 64,0 76,30 64,60 41,60 53,30" fill={color} />
      <polygon points="82,0 105,0 117,30 105,60 82,60 94,30" fill={color} />
    </svg>
  )
}

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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const services = [
  {
    Icon: Truck,
    title: 'Emergency Response Towing',
    description: 'Rapid towing support for urgent situations — day or night.',
  },
  {
    Icon: AlertTriangle,
    title: 'Accident Scene Management & Vehicle Removal',
    description: 'Efficient scene clearing to restore traffic flow and reduce secondary risk.',
  },
  {
    Icon: Lock,
    title: 'Impound Services',
    description: 'Secure, documented impound services when vehicles must be held before release.',
  },
  {
    Icon: Ban,
    title: 'Illegal Parking Enforcement',
    description: 'Removal support for illegally parked vehicles impacting access, safety corridors, or operations.',
  },
  {
    Icon: Car,
    title: 'Abandoned Vehicle Removal',
    description: 'Assistance removing abandoned vehicles from public or private property.',
  },
  {
    Icon: FileText,
    title: 'Evidence Towing & Secure Storage',
    description: 'Secure towing and storage protocols for vehicles requiring documented handling.',
  },
  {
    Icon: Calendar,
    title: 'Relocation of Vehicles for Public Events & Construction Projects',
    description: 'Organized relocations to support event operations and construction access with minimal disruption.',
  },
  {
    Icon: Shield,
    title: 'Secure Transport of Seized Vehicles',
    description: 'Discreet, controlled transport handled with the professionalism and documentation required.',
  },
]

const sidebarServices = [
  'Emergency Response Towing',
  'Accident Scene Management & Vehicle Removal',
  'Impound Services',
  'Illegal Parking Enforcement',
  'Abandoned Vehicle Removal',
  'Evidence Towing & Secure Storage',
  'Relocation of Vehicles for Public Events & Construction Projects',
  'Secure Transport of Seized Vehicles',
]

function EmergencyResponse() {
  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(150deg, #1D2B45 0%, #253654 55%, #2E4168 100%)',
          pt: { xs: 13, md: 17 },
          pb: { xs: 8, md: 12 },
          overflow: 'hidden',
          minHeight: { xs: '50vh', md: 'auto' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Dot grid texture */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 4 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2rem', sm: '2.8rem', md: '3.8rem' },
                    color: '#ffffff',
                    lineHeight: 1.08,
                    mb: 2,
                    fontFamily: "'Saira', sans-serif",
                    letterSpacing: { xs: '-0.5px', md: '-1.5px' },
                  }}
                >
                  Emergency Response &<br />Accident Scene Management
                </Typography>
                <Box sx={{ width: 60, height: 4, background: '#0057A5', mb: 3, borderRadius: 2 }} />
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.72)',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.85,
                    maxWidth: 500,
                  }}
                >
                  Fast, coordinated response for incidents and disabled vehicles — helping restore access,
                  reduce risk, and keep traffic and cities moving.
                </Typography>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
                    <TripleArrows color="#0057A5" height={260} opacity={0.07} />
                  </Box>
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      p: 3.5,
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderLeft: '3px solid #0057A5',
                      borderRadius: 2,
                      maxWidth: 320,
                    }}
                  >
                    {sidebarServices.map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, borderBottom: '1px solid rgba(255,255,255,0.07)', '&:last-child': { borderBottom: 'none' } }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#0057A5', flexShrink: 0 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontFamily: "'Saira', sans-serif" }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Wave: hero → intro ── */}
      <WaveSeparator from="#1D2B45" to="#ffffff" />

      {/* ── Intro + Sidebar ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '-10px', bottom: '-20px', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#1D2B45" height={120} opacity={0.03} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, md: 8 }}>
            {/* Main content */}
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
              >
                <Box sx={{ width: 48, height: 3, background: '#0057A5', mb: 3, borderRadius: 1 }} />
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  When an incident blocks access, disrupts traffic flow, or creates a safety risk, response time
                  and coordination matter. ITS provides emergency response towing and accident scene support to
                  help clear vehicles quickly and restore order safely. We work with dispatch, first responders,
                  and on-site stakeholders to keep operations moving.
                </Typography>
                <Typography
                  sx={{
                    color: '#1D2B45',
                    fontWeight: 700,
                    fontSize: '1rem',
                    fontFamily: "'Saira', sans-serif",
                    borderLeft: '3px solid #0057A5',
                    pl: 2,
                    lineHeight: 1.6,
                    mb: 3.5,
                  }}
                >
                  Rapid response. Safe recovery. Professional execution.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  Our priority is public safety and efficient scene clearance from the moment we arrive.
                  Whether it's an accident, a disabled vehicle, or a situation requiring secure transport,
                  our team follows disciplined procedures and uses the right equipment to remove vehicles
                  with care and precision.
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, mt: 1, lineHeight: 1.2, fontSize: { xs: '1.4rem', md: '1.6rem' } }}
                >
                  Supporting Public Safety Partners Across North Carolina
                </Typography>
                <Box sx={{ width: 40, height: 3, background: '#0057A5', mb: 2.5, borderRadius: 1 }} />
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  Emergency work leaves no margin for error. ITS brings trained operators, coordinated
                  dispatch, and the resources to handle complex removals and recoveries — without creating
                  additional risk at the scene. The goal is simple: reduce downtime, improve safety, and
                  get roads, lots, and access points back to normal as quickly as possible.
                </Typography>
              </motion.div>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
              >
                <Box
                  sx={{
                    background: '#1D2B45',
                    borderRadius: 2,
                    p: { xs: 3, md: 3.5 },
                    position: { md: 'sticky' },
                    top: { md: 100 },
                  }}
                >
                  <Typography
                    sx={{
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      mb: 1.5,
                      fontFamily: "'Saira', sans-serif",
                      lineHeight: 1.3,
                    }}
                  >
                    Emergency Response Services
                  </Typography>
                  <Box sx={{ width: 36, height: 3, background: '#0057A5', mb: 2.5, borderRadius: 1 }} />
                  <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none' }}>
                    {sidebarServices.map((item) => (
                      <Box
                        component="li"
                        key={item}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.25,
                          py: 0.85,
                          borderBottom: '1px solid rgba(255,255,255,0.07)',
                          '&:last-child': { borderBottom: 'none' },
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#0057A5',
                            flexShrink: 0,
                            mt: '7px',
                          }}
                        />
                        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.55 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Wave: intro → services grid ── */}
      <WaveSeparator from="#ffffff" to="#1D2B45" flip />

      {/* ── Services Grid ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#1D2B45', position: 'relative', overflow: 'hidden' }}>
        {/* Dot grid */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
        {/* Watermark arrows */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#0057A5" height={160} opacity={0.05} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={3}>
              {services.map(({ Icon, title, description }) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Box
                      sx={{
                        background: '#ffffff',
                        borderTop: '3px solid #0057A5',
                        borderRadius: 2,
                        p: 3,
                        height: '100%',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                      }}
                    >
                      <Box sx={{ mb: 2.5 }}>
                        <Icon size={44} strokeWidth={1.25} color="#0057A5" />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#1D2B45',
                          mb: 1,
                          fontSize: '0.9rem',
                          fontFamily: "'Saira', sans-serif",
                          lineHeight: 1.3,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography sx={{ color: '#6B7A8D', fontSize: '0.83rem', lineHeight: 1.7 }}>
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

      {/* ── Wave: services grid → CTA ── */}
      <WaveSeparator from="#1D2B45" to="#0057A5" flip />

      {/* ── CTA ── */}
      <Box sx={{ background: '#0057A5', py: { xs: 7, md: 9 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#0057A5" height={200} opacity={0.08} />
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
              <Box
                component="a"
                href="tel:9197909393"
                sx={{
                  display: 'inline-block',
                  background: '#ffffff',
                  color: '#1D2B45',
                  fontWeight: 700,
                  px: 4,
                  py: 1.6,
                  fontSize: '0.95rem',
                  borderRadius: 1,
                  textDecoration: 'none',
                  fontFamily: "'Saira', sans-serif",
                  transition: 'background 0.2s',
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: 320, sm: 'none' },
                  '&:hover': { background: 'rgba(255,255,255,0.9)' },
                }}
              >
                (919) 790-9393
              </Box>
              <Box
                component="a"
                href="/contact"
                sx={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: '#ffffff',
                  fontWeight: 700,
                  px: 4,
                  py: 1.6,
                  fontSize: '0.95rem',
                  borderRadius: 1,
                  textDecoration: 'none',
                  fontFamily: "'Saira', sans-serif",
                  border: '1px solid rgba(255,255,255,0.45)',
                  transition: 'border-color 0.2s, background 0.2s',
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: 320, sm: 'none' },
                  '&:hover': { borderColor: '#ffffff', background: 'rgba(255,255,255,0.08)' },
                }}
              >
                Contact Us
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

    </Box>
  )
}

export default EmergencyResponse
