import { Box, Container, Grid, Typography } from '@mui/material'
import { BarChart2, Calendar, Clock, Eye, MessageSquare, Settings, ShieldCheck, TrendingUp, Truck, UserCheck } from 'lucide-react'
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

function AngleSeparator({ from, to }: { from: string; to: string }) {
  return (
    <Box sx={{ display: 'block', lineHeight: 0, background: to, mt: '-1px', pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px' }}>
        <polygon points="0,0 1440,0 1440,50 0,10" fill={from} />
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

const projectTypes = [
  {
    category: 'Construction Projects',
    items: ['New building construction', 'Road and infrastructure development', 'Parking lot resurfacing and expansion'],
  },
  {
    category: 'Real Estate Developments',
    items: ['New apartment complexes', 'Commercial property developments', 'HOA transitions and renovations'],
  },
  {
    category: 'Event Planning',
    items: ['Festivals, concerts, and sporting events', 'Corporate events and conferences', 'Movie and TV production sets'],
  },
  {
    category: 'Municipal Projects',
    items: ['Public works and utilities projects', 'Urban redevelopment and road closures'],
  },
  {
    category: 'Corporate Relocations',
    items: ['Business fleet relocations', 'Employee vehicle transportation'],
  },
  {
    category: 'University & School Projects',
    items: ['Campus construction and renovations', 'Large events and commencements'],
  },
]

const features = [
  {
    Icon: Truck,
    title: 'Advanced Equipment & Technology',
    description:
      'Professional-grade towing and relocation equipment to handle a wide range of vehicle types safely and efficiently.',
  },
  {
    Icon: UserCheck,
    title: 'Highly Skilled & Certified Operators',
    description:
      'Trained, experienced operators who execute large moves with care, precision, and professionalism.',
  },
  {
    Icon: Clock,
    title: '24/7 Availability',
    description:
      'Flexible scheduling and around-the-clock availability for time-sensitive relocations and last-minute changes.',
  },
]

const benefits = [
  {
    Icon: TrendingUp,
    title: 'Efficiency & Reliability',
    description:
      'Coordinated teams and clear execution that keep relocations on schedule and minimize downtime.',
  },
  {
    Icon: ShieldCheck,
    title: 'Safety & Site Security',
    description:
      'Disciplined procedures that protect vehicles, people, and property throughout the relocation.',
  },
  {
    Icon: Settings,
    title: 'Customized Solutions',
    description:
      'A relocation plan tailored to your site constraints, timeline, and stakeholder requirements.',
  },
]

const tips = [
  { Icon: Calendar, title: 'Plan Ahead', description: 'Confirm volume, timeline, towing windows, and approved drop locations early to keep the move smooth.' },
  { Icon: MessageSquare, title: 'Communicate Clearly', description: 'Align stakeholders on where vehicles go, when towing occurs, and what signage/notifications are required.' },
  { Icon: BarChart2, title: 'Coordinate Logistics', description: 'Define access points, staging areas, sequencing, and any permitting needs before execution begins.' },
  { Icon: Eye, title: 'Monitor Progress', description: 'Stay aligned during the move with updates and a clear point of contact for adjustments.' },
  { Icon: ShieldCheck, title: 'Prioritize Safety', description: 'Ensure safe work zones, proper routing, and disciplined procedures throughout the project.' },
]

function MassRelocation() {
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
                  Mass Relocation<br />Towing Services
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
                  Efficient, organized towing support for large-scale moves and repositioning — planned
                  logistics, clear communication, and minimal disruption for your site.
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
                    <TripleArrows color="#0057A5" height={260} opacity={0.15} />
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
                    {['Construction Projects', 'Real Estate Developments', 'Event Planning', 'Municipal Projects', 'Corporate Relocations', 'University & School Projects'].map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, borderBottom: '1px solid rgba(255,255,255,0.07)', '&:last-child': { borderBottom: 'none' } }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#D9DADF', flexShrink: 0 }} />
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
                  Need to relocate a large number of vehicles for a construction project, major event, or
                  property transition? ITS provides organized mass relocation towing services designed to move
                  high volumes efficiently, safely, and with minimal disruption. We plan the logistics up front,
                  execute with disciplined coordination, and keep stakeholders informed throughout the move.
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
                  Efficient planning. Coordinated execution. Minimal disruption.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  From staging and sequencing to safe drop locations and documentation, our team manages
                  the details that keep large-scale moves on track. Whether you're relocating vehicles
                  across a site or off-site for a defined window, ITS helps you protect timelines, reduce
                  risk, and keep operations moving.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  When it comes to large-scale projects requiring the relocation of multiple vehicles, the
                  right partner is the difference between an orderly move and a logistical headache. ITS
                  supports property teams, contractors, and event stakeholders with experienced operators,
                  the right equipment, and a process built for high-volume coordination.
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
                    Project Types
                  </Typography>
                  <Box sx={{ width: 36, height: 3, background: '#0057A5', mb: 2.5, borderRadius: 1 }} />

                  {projectTypes.map(({ category, items }) => (
                    <Box key={category} sx={{ mb: 2.5 }}>
                      <Typography
                        sx={{
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          mb: 0.75,
                          fontFamily: "'Saira', sans-serif",
                        }}
                      >
                        {category}
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none' }}>
                        {items.map((item) => (
                          <Box
                            component="li"
                            key={item}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1.25,
                              py: 0.4,
                            }}
                          >
                            <Box
                              sx={{
                                width: 5,
                                height: 5,
                                borderRadius: '50%',
                                background: 'rgba(217,218,223,0.5)',
                                flexShrink: 0,
                                mt: '7px',
                              }}
                            />
                            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Angle: intro → features ── */}
      <AngleSeparator from="#ffffff" to="#D9DADF" />

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#D9DADF', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '-10px', bottom: '-20px', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#1D2B45" height={120} opacity={0.03} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                Features of Our Vehicle<br />Relocation Services
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#0057A5', mx: 'auto', borderRadius: 1 }} />
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 5, fontSize: '0.95rem', maxWidth: 760, mx: 'auto', textAlign: 'center' }}>
              When it comes to large-scale projects requiring the relocation of multiple vehicles, the
              right partner is the difference between an orderly move and a logistical headache. ITS
              supports property teams, contractors, and event stakeholders with experienced operators,
              the right equipment, and a process built for high-volume coordination.
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={3} justifyContent="center">
              {features.map(({ Icon, title, description }) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Box
                      sx={{
                        background: '#ffffff',
                        border: '1px solid rgba(29,43,69,0.08)',
                        borderTop: '3px solid #0057A5',
                        borderRadius: 2,
                        p: 3.5,
                        height: '100%',
                        boxShadow: '0 2px 12px rgba(29,43,69,0.06)',
                      }}
                    >
                      <Box sx={{ mb: 2.5 }}>
                        <Icon size={52} strokeWidth={1.25} color="#0057A5" />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#1D2B45',
                          mb: 1,
                          fontSize: '0.95rem',
                          fontFamily: "'Saira', sans-serif",
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography sx={{ color: '#6B7A8D', fontSize: '0.87rem', lineHeight: 1.75 }}>
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

      {/* ── Wave: features → benefits ── */}
      <WaveSeparator from="#D9DADF" to="#1D2B45" flip />

      {/* ── Benefits ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#1D2B45', position: 'relative', overflow: 'hidden' }}>
        {/* Dot grid */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
        {/* Watermark arrows */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#ffffff" height={160} opacity={0.04} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#ffffff', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                Benefits of Choosing ITS
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#0057A5', mx: 'auto', borderRadius: 1 }} />
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={3} justifyContent="center">
              {benefits.map(({ Icon, title, description }) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Box sx={{ textAlign: 'center', px: 2 }}>
                      <Box sx={{ mb: 2.5, display: 'flex', justifyContent: 'center' }}>
                        <Icon size={44} color="#D9DADF" strokeWidth={1.25} />
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
                      <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.75 }}>
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

      {/* ── Wave: benefits → tips ── */}
      <WaveSeparator from="#1D2B45" to="#ffffff" />

      {/* ── Tips ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '-10px', bottom: '-20px', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#1D2B45" height={120} opacity={0.03} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                Tips for a Successful Project Move
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#0057A5', mx: 'auto', borderRadius: 1 }} />
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={3}>
              {tips.map(({ Icon, title, description }, i) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: i < 3 ? 4 : 6 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2.5,
                        p: 3,
                        border: '1px solid rgba(29,43,69,0.1)',
                        borderLeft: '3px solid #0057A5',
                        borderRadius: 1,
                        height: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: '#1D2B45',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          mt: 0.25,
                        }}
                      >
                        <Icon size={17} color="#ffffff" />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: '#1D2B45',
                            mb: 0.75,
                            fontSize: '0.95rem',
                            fontFamily: "'Saira', sans-serif",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography sx={{ color: '#6B7A8D', fontSize: '0.87rem', lineHeight: 1.7 }}>
                          {description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── Wave: tips → CTA ── */}
      <WaveSeparator from="#ffffff" to="#0057A5" flip />

      {/* ── CTA ── */}
      <Box sx={{ background: '#0057A5', py: { xs: 7, md: 9 }, position: 'relative', overflow: 'hidden' }}>
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

export default MassRelocation
