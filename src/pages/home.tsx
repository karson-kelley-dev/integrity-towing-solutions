import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import Box, { type BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import GlobalStyles from '@mui/material/GlobalStyles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroBg from '../assets/zoomed-out-grid.png'
import FadeInBox from '../components/FadeInBox'

// ─── Brand constants ───────────────────────────────────────────────────────
const NAVY = '#1D2B45'
const DARK = '#0d1929'
const BLUE = '#0057A5'
const TEAL = '#6699BB'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

// ─── TiltCard ─────────────────────────────────────────────────────────────
function TiltCard({ children, maxAngle = 6, sx, ...props }: { maxAngle?: number } & BoxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isTouch = useRef(typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch.current) return
    const el = ref.current; if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * maxAngle * 2}deg) rotateX(${-y * maxAngle * 2}deg)`
  }
  const handleMouseLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'
  }
  return (
    <Box ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      sx={{ transition: 'transform 0.4s ease', transformStyle: 'preserve-3d', ...sx }} {...props}>
      {children}
    </Box>
  )
}

// ─── Data ──────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
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
]

const SERVICES = [
  {
    icon: '/images/icon-ppi.png',
    title: 'Private Property Towing',
    description:
      'Parking enforcement built for property managers — written authorization, clear documentation, and consistent processes that protect your property and residents.',
    path: '/services/private-property',
    accent: TEAL,
  },
  {
    icon: '/images/icon-roadside.png',
    title: 'Emergency Response & Accident Scene Management',
    description:
      'Fast, coordinated response for incidents and disabled vehicles — helping restore access, reduce risk, and keep traffic and cities moving.',
    path: '/services/emergency-response',
    accent: BLUE,
  },
  {
    icon: '/images/icon-mass.png',
    title: 'Mass Relocation Towing Services',
    description:
      'Efficient, organized towing support for large-scale moves and repositioning — planned logistics, clear communication, and minimal disruption for your site.',
    path: '/services/mass-relocation',
    accent: TEAL,
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <GlobalStyles styles={{
        '@keyframes heroWordReveal': {
          from: { opacity: 0, transform: 'translateY(52px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes heroLineReveal': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        '@keyframes floatY': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }} />

      {/* ══════════════════════════════════════════════════════════════════
          HERO — full-bleed image, left content overlay
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ position: 'relative', zIndex: 0, height: { xs: 'auto', md: '100vh' }, minHeight: { xs: '100vh', md: 'unset' }, overflow: 'hidden', display: 'flex', alignItems: 'stretch' }}>

        {/* Full-bleed background image */}
        <Box
          ref={heroImageRef}
          sx={{
            position: 'absolute',
            inset: '-15% 0',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            bgcolor: '#0a1525',
            willChange: 'transform',
          }}
        />
        {/* Dark overlay across entire image */}
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(13,25,41,0.35)' }} />
        {/* Teal glow — top right corner */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, transparent 45%, rgba(102,153,187,0.18) 100%)' }} />

        {/* Left content box */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: { xs: '100%', md: '54%' },
            background: {
              xs: 'rgba(13,25,41,0.5)',
              md: 'linear-gradient(to right, rgba(13,25,41,0.92) 0%, rgba(13,25,41,0.78) 60%, rgba(13,25,41,0.0) 100%)',
            },
            ...DOT_GRID,
            borderRadius: { xs: 0, md: '0 0 72px 0' },
            pt: { xs: 8, md: 11 },
            pb: { xs: 6, md: 6 },
            pr: { xs: 3, md: 10 },
            pl: { xs: 3, sm: 4, md: 6, lg: 10 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Teal glow top-left */}
          <Box sx={{
            position: 'absolute', top: -80, left: -80, width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(102,153,187,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Top content group */}
          <Box>

          {/* Overline */}
          <Box sx={{ overflow: 'hidden', mb: 2, position: 'relative', zIndex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem',
                display: 'block',
                animation: 'heroWordReveal 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both',
              }}
            >
              Parking Management &amp; Towing Services
            </Typography>
          </Box>

          {/* Animated teal accent line */}
          <Box sx={{
            width: 72, height: 3, bgcolor: TEAL, borderRadius: 2, mb: 3,
            transformOrigin: 'left',
            animation: 'heroLineReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both',
            position: 'relative', zIndex: 1,
          }} />

          {/* H1 — word-by-word stagger */}
          
          <Typography
            component="h1"
            aria-label="Parking Management Done Right."
            sx={{
              fontFamily: "'Saira', sans-serif",
              fontWeight: 800,
              fontSize: { xs: '2.6rem', sm: '3.2rem', md: '3.8rem', lg: '4.6rem' },
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              mb: 3,
              position: 'relative', zIndex: 1,
            }}
          >
            {['Parking', 'Management'].map((word, i) => (
              <Box
                key={word}
                component="span"
                sx={{ display: 'inline-block', overflow: 'hidden', mr: '0.28em' }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    animation: `heroWordReveal 0.7s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.1}s both`,
                  }}
                >
                  {word}
                </Box>
              </Box>
            ))}
            <Box component="span" sx={{ display: 'block', color: TEAL, overflow: 'hidden' }}>
              <Box
                component="span"
                sx={{ display: 'inline-block', animation: 'heroWordReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.62s both' }}
              >
                Done Right.
              </Box>
            </Box>
          </Typography>

          {/* Body copy */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.68)',
              fontSize: { xs: '1rem', md: '1.175rem' },
              lineHeight: 1.85,
              mb: 4,
              maxWidth: 520,
              animation: 'heroWordReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.75s both',
              position: 'relative', zIndex: 1,
            }}
          >
            Integrity Towing Solutions is a private property impound partner built to bring professionalism,
            compliance, and clear accountability to parking enforcement. We exist to raise the standard
            for private property impound — giving property managers a towing partner they can rely on.
          </Typography>

          {/* CTAs */}
          <Box sx={{
            display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap',
            animation: 'heroWordReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.88s both',
            position: 'relative', zIndex: 1,
          }}>
            <Button
              variant="contained"
              size="large"
              component="a"
              href="tel:9197909393"
              startIcon={<PhoneIcon />}
              sx={{
                bgcolor: TEAL, color: '#fff', fontWeight: 700, fontSize: '1rem',
                px: 3.5, py: 1.6,
                boxShadow: '0 4px 20px rgba(102,153,187,0.4)',
                '&:hover': { bgcolor: '#4D7A9A', boxShadow: '0 6px 28px rgba(102,153,187,0.5)', transform: 'translateY(-2px)' },
                transition: 'all 0.2s',
              }}
            >
              (919) 790-9393
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                const el = document.getElementById('services')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
              }}
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontWeight: 600, fontSize: '1rem',
                px: 3, py: 1.6,
                '&:hover': { borderColor: TEAL, bgcolor: 'rgba(102,153,187,0.08)', transform: 'translateY(-2px)' },
                transition: 'all 0.2s',
              }}
            >
              Our Services
            </Button>
          </Box>
          </Box>{/* end top content group */}
        </Box>

        {/* Scroll indicator */}
        <Box sx={{
          position: 'absolute', bottom: 32, left: '26%', transform: 'translateX(-50%)',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.4s',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          zIndex: 2,
          pointerEvents: 'none',
        }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Scroll
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: TEAL, animation: 'floatY 1.8s ease-in-out infinite' }} />
        </Box>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          LOCATION STRIP — thin glass bar floating over section boundary
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK, pt: { xs: 3, md: 3 }, pb: 0 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <FadeInBox>
            <Box sx={{
              mt: { md: -6 },
              position: 'relative',
              zIndex: 10,
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderTop: `3px solid ${TEAL}`,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 3, md: 6 },
              py: { xs: 2.25, md: 2 },
              px: { xs: 2, md: 4 },
              flexWrap: 'wrap',
            }}>
              {(['Raleigh', 'Durham', 'Greensboro'] as const).map((city, i, arr) => (
                <Box key={city} sx={{ display: 'flex', alignItems: 'center', gap: { xs: 3, md: 6 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon sx={{ color: TEAL, fontSize: 15 }} />
                    <Typography sx={{
                      color: 'rgba(255,255,255,0.75)',
                      fontFamily: "'Saira', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}>
                      {city}
                    </Typography>
                  </Box>
                  {i < arr.length - 1 && (
                    <Box sx={{ width: 1, height: 20, bgcolor: 'rgba(255,255,255,0.12)' }} />
                  )}
                </Box>
              ))}
            </Box>
          </FadeInBox>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK, pt: { xs: 3, md: 5 }, pb: { xs: 5, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(102,153,187,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <FadeInBox>
            <Box sx={{ maxWidth: 820 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
                <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
                  About ITS
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: { xs: '1rem', md: '1.0625rem' }, lineHeight: 1.9 }}>
                Every tow is grounded in written authorization, proper signage, and compliance with North Carolina statutes,
                backed by documentation that stands up to questions and reviews. We operate with transparency, so clients
                always know what is happening on their properties and nothing falls through the cracks. We focus exclusively
                on private property impound and use data-driven operations to improve enforcement over time. Today, ITS manages
                over 1,100 parking enforcement programs across Raleigh, Durham, Chapel Hill, and Greensboro — delivering a
                consistent standard in every market.
              </Typography>
            </Box>
          </FadeInBox>
        </Container>
      </Box>


      {/* ══════════════════════════════════════════════════════════════════
          SERVICES — cinematic full-width panels
      ══════════════════════════════════════════════════════════════════ */}
      <Box id="services" sx={{ bgcolor: NAVY }}>
        {/* Section label */}
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, pt: { xs: 5, md: 8 }, pb: { xs: 3, md: 6 } }}>
          <FadeInBox>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
                What We Do
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 600 }}>
              Services Built Around Your Operation
            </Typography>
          </FadeInBox>
        </Container>

        {/* Service cards grid */}
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, pb: { xs: 5, md: 10 } }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 3.5 },
          }}>
            {SERVICES.map(({ icon, title, description, path, accent }, i) => (
              <FadeInBox key={title} direction="up" delay={i * 100} distance={36}>
                <Box
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderTop: `3px solid ${accent}`,
                    borderRadius: 2.5,
                    p: { xs: 2.5, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'background 0.2s, transform 0.2s',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.065)',
                      transform: { md: 'translateY(-4px)' },
                    },
                  }}
                >
                  {/* ── Mobile: collapsed header row ── */}
                  <Box
                    onClick={() => setExpandedService(expandedService === i ? null : i)}
                    sx={{
                      display: { xs: 'flex', md: 'none' },
                      alignItems: 'center',
                      gap: 2,
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <Box sx={{
                      width: 38, height: 38, borderRadius: 1.5, flexShrink: 0,
                      bgcolor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Box component="img" src={icon} alt={title} sx={{ height: 20, width: 'auto' }} />
                    </Box>
                    <Typography sx={{
                      color: '#fff', fontWeight: 700,
                      fontSize: '1rem', lineHeight: 1.3, flex: 1,
                    }}>
                      {title}
                    </Typography>
                    <ExpandMoreIcon sx={{
                      color: accent, flexShrink: 0,
                      transform: expandedService === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }} />
                  </Box>

                  {/* ── Mobile: collapsible body ── */}
                  <Box sx={{
                    display: { xs: 'block', md: 'none' },
                    maxHeight: expandedService === i ? '320px' : 0,
                    overflow: 'hidden',
                    opacity: expandedService === i ? 1 : 0,
                    transition: 'max-height 0.35s ease, opacity 0.25s ease',
                    pt: expandedService === i ? 2.5 : 0,
                  }}>
                    <Typography variant="body2" sx={{
                      color: 'rgba(255,255,255,0.58)',
                      lineHeight: 1.85, mb: 2.5,
                    }}>
                      {description}
                    </Typography>
                    <Button
                      variant="text"
                      onClick={() => navigate(path)}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: accent, fontWeight: 700, p: 0, fontSize: '0.875rem',
                        alignSelf: 'flex-start',
                        letterSpacing: '0.04em',
                        '&:hover': { bgcolor: 'transparent', color: '#fff', '& .MuiButton-endIcon': { transform: 'translateX(5px)' } },
                        '& .MuiButton-endIcon': { transition: 'transform 0.2s' },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>

                  {/* ── Desktop: full card layout ── */}
                  <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', height: '100%' }}>
                    <Box sx={{
                      width: 52, height: 52, borderRadius: 1.5,
                      bgcolor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mb: 3,
                    }}>
                      <Box component="img" src={icon} alt={title} sx={{ height: 26, width: 'auto' }} />
                    </Box>
                    <Typography variant="h3" sx={{
                      color: '#fff', fontWeight: 700,
                      fontSize: '1.4rem',
                      lineHeight: 1.25, mb: 1.75,
                    }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: 'rgba(255,255,255,0.58)',
                      lineHeight: 1.85, mb: 3.5, flex: 1,
                    }}>
                      {description}
                    </Typography>
                    <Button
                      variant="text"
                      onClick={() => navigate(path)}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: accent, fontWeight: 700, p: 0, fontSize: '0.875rem',
                        alignSelf: 'flex-start',
                        letterSpacing: '0.04em',
                        '&:hover': { bgcolor: 'transparent', color: '#fff', '& .MuiButton-endIcon': { transform: 'translateX(5px)' } },
                        '& .MuiButton-endIcon': { transition: 'transform 0.2s' },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </FadeInBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ══════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK, ...DOT_GRID, py: { xs: 6, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <FadeInBox>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1 }}>
                What Clients Say
              </Typography>
              <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Trusted by Property Managers Across NC
              </Typography>
            </Box>
          </FadeInBox>
          {/* Carousel — all breakpoints */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, md: 2 } }}>
            <IconButton
              onClick={() => setActiveTestimonial((activeTestimonial + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}
              sx={{
                color: TEAL, flexShrink: 0,
                bgcolor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': { bgcolor: 'rgba(102,153,187,0.15)' },
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon />
            </IconButton>
            <Box sx={{ flex: 1, maxWidth: { md: 720 }, mx: 'auto' }}>
              <TiltCard sx={{
                p: { xs: 3, md: 3.5 },
                bgcolor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderLeft: `3px solid ${TEAL}`,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography sx={{ color: TEAL, fontSize: '3rem', lineHeight: 0.8, fontFamily: 'Georgia, serif', mb: 1.5, mt: -0.5 }}>
                  &ldquo;
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, flex: 1, mb: 2.5, fontStyle: 'italic' }}>
                  {TESTIMONIALS[activeTestimonial].quote}
                </Typography>
                <Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontFamily: "'Saira', sans-serif", fontSize: '0.95rem' }}>
                    {TESTIMONIALS[activeTestimonial].name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', fontFamily: "'Saira', sans-serif" }}>
                    {TESTIMONIALS[activeTestimonial].source}
                  </Typography>
                </Box>
              </TiltCard>
            </Box>
            <IconButton
              onClick={() => setActiveTestimonial((activeTestimonial + 1) % TESTIMONIALS.length)}
              sx={{
                color: TEAL, flexShrink: 0,
                bgcolor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': { bgcolor: 'rgba(102,153,187,0.15)' },
              }}
              aria-label="Next testimonial"
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
          {/* Dot indicators */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.25, mt: 3 }}>
            {TESTIMONIALS.map((_, i) => (
              <Box
                key={i}
                onClick={() => setActiveTestimonial(i)}
                sx={{
                  width: i === activeTestimonial ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: i === activeTestimonial ? TEAL : 'rgba(255,255,255,0.22)',
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background-color 0.2s ease',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>


    </>
  )
}
