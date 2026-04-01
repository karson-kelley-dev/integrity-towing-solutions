import { Box, Container, Grid, Typography } from '@mui/material'
import { AlertTriangle, Ban, Calendar, Car, FileText, Lock, Shield, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

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
    title: 'Relocation for Public Events & Construction Projects',
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
  'Accident Scene Management',
  'Vehicle Removal',
  'Impound Services',
  'Illegal Parking Enforcement',
  'Abandoned Vehicle Removal',
  'Evidence Towing',
  'Secure Storage',
  'Relocation for Public Events',
  'Construction Project Support',
  'Secure Transport of Seized Vehicles',
  'First Responder Coordination',
]

function EmergencyResponse() {
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
              Emergency Response &<br />Accident Scene Management
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
              Fast, coordinated response for incidents and disabled vehicles — helping restore access,
              reduce risk, and keep traffic and cities moving.
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
                  When Seconds Count
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, lineHeight: 1.2, fontSize: { xs: '1.7rem', md: '2rem' } }}
                >
                  When an incident blocks access,<br />response time and coordination matter.
                </Typography>
                <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 3, borderRadius: 1 }} />
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
                    borderLeft: '3px solid #E1AD00',
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
                    What We Handle
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
                    Emergency Response Services
                  </Typography>
                  <Box sx={{ width: 36, height: 3, background: '#E1AD00', mb: 2.5, borderRadius: 1 }} />
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
                            background: '#E1AD00',
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

      {/* ── Services Grid ── */}
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
                Supporting Public Safety Partners
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#ffffff', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                Our Emergency Response Capabilities
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
              {services.map(({ Icon, title, description }) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Box
                      sx={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderTop: '3px solid #E1AD00',
                        borderRadius: 2,
                        p: 3,
                        height: '100%',
                      }}
                    >
                      <Box sx={{ mb: 2.5 }}>
                        <Icon size={44} strokeWidth={1.25} color="#E1AD00" />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#ffffff',
                          mb: 1,
                          fontSize: '0.9rem',
                          fontFamily: "'Saira', sans-serif",
                          lineHeight: 1.3,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.83rem', lineHeight: 1.7 }}>
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
    </Box>
  )
}

export default EmergencyResponse
