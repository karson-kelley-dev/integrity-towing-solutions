import { Box, Container, Grid, Typography } from '@mui/material'
import { BarChart2, Calendar, Clock, Eye, MessageSquare, Settings, ShieldCheck, TrendingUp, Truck, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'

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
  { Icon: MessageSquare, title: 'Communicate Clearly', description: 'Align stakeholders on where vehicles go, when towing occurs, and what signage and notifications are required.' },
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
          py: { xs: 10, md: 14 },
          textAlign: 'center',
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
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
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
              Services
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', sm: '2.8rem', md: '3.4rem' },
                color: '#ffffff',
                lineHeight: 1.1,
                mb: 2,
                fontFamily: "'Saira', sans-serif",
                letterSpacing: { xs: '-0.5px', md: '-1px' },
              }}
            >
              Mass Relocation<br />Towing Services
            </Typography>
            <Box sx={{ width: 60, height: 4, background: '#E1AD00', mx: 'auto', mb: 3, borderRadius: 2 }} />
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.85,
                maxWidth: 580,
                mx: 'auto',
              }}
            >
              Efficient, organized towing support for large-scale moves and repositioning — planned
              logistics, clear communication, and minimal disruption for your site.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ── Intro + Sidebar ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }}>
            {/* Main content */}
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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
                  Large-Scale Vehicle Moves
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, lineHeight: 1.2, fontSize: { xs: '1.7rem', md: '2rem' } }}
                >
                  Moving high volumes efficiently,<br />safely, and on schedule.
                </Typography>
                <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 3, borderRadius: 1 }} />
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
                    borderLeft: '3px solid #E1AD00',
                    pl: 2,
                    lineHeight: 1.6,
                    mb: 3.5,
                  }}
                >
                  Efficient planning. Coordinated execution. Minimal disruption.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  When it comes to large-scale projects requiring the relocation of multiple vehicles, the
                  right partner is the difference between an orderly move and a logistical headache. ITS
                  supports property teams, contractors, and event stakeholders with experienced operators,
                  the right equipment, and a process built for high-volume coordination.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  From staging and sequencing to safe drop locations and documentation, our team manages
                  the details that keep large-scale moves on track — whether you're relocating vehicles
                  across a site or off-site for a defined window.
                </Typography>
              </motion.div>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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
                      color: '#E1AD00',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      mb: 1.25,
                      fontFamily: "'Saira', sans-serif",
                    }}
                  >
                    Who We Serve
                  </Typography>
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
                  <Box sx={{ width: 36, height: 3, background: '#E1AD00', mb: 2.5, borderRadius: 1 }} />

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
                                background: 'rgba(225,173,0,0.6)',
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

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#F5F6F8' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                What We Bring
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                Features of Our Vehicle<br />Relocation Services
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', borderRadius: 1 }} />
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
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
                        borderTop: '3px solid #E1AD00',
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

      {/* ── Benefits ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#1D2B45' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                Why ITS
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#ffffff', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                Benefits of Choosing ITS
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', borderRadius: 1 }} />
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <Grid container spacing={3} justifyContent="center">
              {benefits.map(({ Icon, title, description }) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Box sx={{ textAlign: 'center', px: 2 }}>
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

      {/* ── Tips ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                Best Practices
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                Tips for a Successful Project Move
              </Typography>
              <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', borderRadius: 1 }} />
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
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
                        borderLeft: '3px solid #E1AD00',
                        borderRadius: 1,
                        height: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: '#0057A5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          mt: 0.25,
                        }}
                      >
                        <Icon size={17} color="#E1AD00" />
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
    </Box>
  )
}

export default MassRelocation
