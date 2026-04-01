import { Box, Container, Grid, Typography } from '@mui/material'
import { AlarmClock, IdCard, Layers, LayoutDashboard, ParkingCircleOff, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const features = [
  {
    Icon: LayoutDashboard,
    title: 'Property Manager Portal',
    description:
      'Real-time visibility into parking trends, issues, and violations — plus a centralized place to track and manage every parking enforcement request.',
  },
  {
    Icon: ParkingCircleOff,
    title: 'Signage & Install',
    description:
      'Professional, compliant signage — assessed for your layout and installed so expectations are clear and enforcement is defensible.',
  },
  {
    Icon: Layers,
    title: 'Custom Program Tailored for Your Community',
    description:
      'A parking enforcement plan built around your property type, resident flow, and problem areas — not a one-size-fits-all template.',
  },
  {
    Icon: PhoneCall,
    title: 'Account Manager',
    description:
      'A dedicated point of contact who knows your property, helps manage updates, and keeps the program running smoothly.',
  },
  {
    Icon: AlarmClock,
    title: 'Immediate Towing',
    description:
      'When violations impact safety, access, or operations, we respond quickly to remove unauthorized vehicles and restore order.',
  },
  {
    Icon: IdCard,
    title: 'Parking Permits',
    description:
      'A structured permit process that helps residents and guests park correctly and reduces confusion, disputes, and unnecessary escalations.',
  },
]

function PrivatePropertyTowing() {
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
              Private Property Towing<br />in North Carolina
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
              Parking enforcement built for property managers — written authorization, clear
              documentation, and consistent processes that protect your property and residents.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ── Intro ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
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
                  The Problem We Solve
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, lineHeight: 1.2, fontSize: { xs: '1.7rem', md: '2rem' } }}
                >
                  When parking violations become<br />the norm, your property pays.
                </Typography>
                <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 3, borderRadius: 1 }} />
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  When parking violations become the norm, your property pays the price — lost spaces for residents
                  and guests, increased frustration, and avoidable safety and access issues. ITS provides private
                  property towing built for property managers who need consistent enforcement without unnecessary drama.
                </Typography>
                <Typography sx={{ color: '#6B7A8D', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  We combine clear communication, compliant processes, and disciplined operations to keep your lots,
                  lanes, and fire zones clear.
                </Typography>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <Box sx={{ background: '#1D2B45', borderRadius: 2, p: { xs: 3.5, md: 4.5 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#ffffff',
                      fontWeight: 800,
                      mb: 2,
                      fontFamily: "'Saira', sans-serif",
                      fontSize: '1.2rem',
                      lineHeight: 1.3,
                    }}
                  >
                    Built for Property Managers — Not Just Tows
                  </Typography>
                  <Box sx={{ width: 40, height: 3, background: '#E1AD00', mb: 3, borderRadius: 1 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, fontSize: '0.9rem' }}>
                    Private property towing works best when it's structured like a program — not a random call when
                    things get bad. ITS designs parking enforcement programs around your property type, layout, and
                    resident flow, then executes with consistency.
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, fontSize: '0.9rem', mt: 2 }}>
                    The result is predictable enforcement, better resident understanding of the rules, and fewer
                    escalations for your team.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── What You Can Expect ── */}
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
                What's Included
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: '#1D2B45', mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
              >
                What You Can Expect
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
                        <Icon size={58} strokeWidth={1.25} color="#0057A5" />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#1D2B45',
                          mb: 1,
                          fontSize: '0.95rem',
                          fontFamily: "'Saira', sans-serif",
                          lineHeight: 1.3,
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

      {/* ── Why ITS ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: '#1D2B45' }}>
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
                    color: '#E1AD00',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    mb: 1.5,
                    fontFamily: "'Saira', sans-serif",
                  }}
                >
                  Why Choose ITS
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, color: '#ffffff', mb: 2, lineHeight: 1.2, fontSize: { xs: '1.7rem', md: '2rem' } }}
                >
                  Why ITS for Private<br />Property Towing
                </Typography>
                <Box sx={{ width: 48, height: 3, background: '#E1AD00', mb: 3, borderRadius: 1 }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem' }}>
                  Property Managers choose ITS because we operate like a partner, not a vendor. We take the time to
                  understand your property and set up an enforcement program that is clear to residents, defensible
                  when challenged, and consistent week after week. Our processes prioritize transparency and
                  accountability — so you always know what happened, why it happened, and how it was documented.
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  ITS also brings scale without sacrificing standards. With infrastructure across Raleigh, Durham,
                  Chapel Hill, and Greensboro, we deliver one consistent approach across multi-property portfolios —
                  helping Property Managers standardize enforcement, reduce administrative burden, and protect their
                  reputation across every community they manage.
                </Typography>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <Grid container spacing={2}>
                  {[
                    { label: 'Partner, Not Vendor', detail: 'We invest time to understand your property and build an enforcement program that fits.' },
                    { label: 'Defensible Process', detail: 'Every tow is documented and compliant — built to stand up to questions and reviews.' },
                    { label: 'Consistent Execution', detail: 'Same process, same standards, week after week across every property we manage.' },
                    { label: 'Multi-Market Scale', detail: 'One unified approach across Raleigh, Durham, Chapel Hill, and Greensboro.' },
                  ].map(({ label, detail }) => (
                    <Grid key={label} size={{ xs: 12, sm: 6 }}>
                      <motion.div variants={fadeUp}>
                        <Box
                          sx={{
                            p: 2.5,
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderLeft: '3px solid #E1AD00',
                            borderRadius: 1,
                            height: '100%',
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 700, color: '#ffffff', mb: 0.5, fontSize: '0.9rem', fontFamily: "'Saira', sans-serif" }}
                          >
                            {label}
                          </Typography>
                          <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', lineHeight: 1.65 }}>
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
    </Box>
  )
}

export default PrivatePropertyTowing
