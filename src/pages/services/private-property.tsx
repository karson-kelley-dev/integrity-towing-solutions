import { Box, Container, Grid, Typography } from '@mui/material'
import { AlarmClock, IdCard, Layers, LayoutDashboard, ParkingCircleOff, PhoneCall } from 'lucide-react'
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

        {/* Decorative triple arrows */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '7%', top: '50%', transform: 'translateY(-50%)', zIndex: 0, pointerEvents: 'none' }}>
          <TripleArrows color="#0057A5" height={180} opacity={0.07} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '5%', bottom: '15%', zIndex: 0, pointerEvents: 'none' }}>
          <TripleArrows color="#0057A5" height={80} opacity={0.04} />
        </Box>

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
                  Private Property Towing<br />in North Carolina
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
                  Parking enforcement built for property managers — written authorization, clear
                  documentation, and consistent processes that protect your property and residents.
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
                    {['Property Manager Portal', 'Signage & Install', 'Custom Program Tailored for Your Community', 'Account Manager', 'Immediate Towing', 'Parking Permits'].map((item) => (
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

      {/* ── Intro ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '-10px', bottom: '-20px', pointerEvents: 'none', zIndex: 0 }}>
          <TripleArrows color="#1D2B45" height={120} opacity={0.03} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <Box sx={{ width: 48, height: 3, background: '#0057A5', mb: 3, borderRadius: 1 }} />
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
                viewport={{ once: false, amount: 0.3 }}
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
                    Built for Property Managers (Not Just Tows)
                  </Typography>
                  <Box sx={{ width: 40, height: 3, background: '#0057A5', mb: 3, borderRadius: 1 }} />
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

      {/* ── Angle: intro → expect ── */}
      <AngleSeparator from="#ffffff" to="#D9DADF" />

      {/* ── What You Can Expect ── */}
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
                What You Can Expect
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

      {/* ── Wave: expect → why ITS ── */}
      <WaveSeparator from="#D9DADF" to="#1D2B45" flip />

      {/* ── Why ITS ── */}
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
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: '#ffffff', mb: 2, lineHeight: 1.2, fontSize: { xs: '1.7rem', md: '2rem' } }}
            >
              Why ITS for Private<br />Property Towing
            </Typography>
            <Box sx={{ width: 48, height: 3, background: '#0057A5', mb: 3, borderRadius: 1 }} />
            <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, mb: 2.5, fontSize: '0.95rem', maxWidth: 760 }}>
              Property Managers choose ITS because we operate like a partner, not a vendor. We take the time to
              understand your property and set up an enforcement program that is clear to residents, defensible
              when challenged, and consistent week after week. Our processes prioritize transparency and
              accountability — so you always know what happened, why it happened, and how it was documented.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, fontSize: '0.95rem', maxWidth: 760 }}>
              ITS also brings scale without sacrificing standards. With infrastructure across Raleigh, Durham,
              Chapel Hill, and Greensboro, we deliver one consistent approach across multi-property portfolios —
              helping Property Managers standardize enforcement, reduce administrative burden, and protect their
              reputation across every community they manage.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ── Wave: why ITS → CTA ── */}
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

export default PrivatePropertyTowing
