import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FadeInBox from '../../components/FadeInBox'

const NAVY = '#1D2B45'
const DARK = '#0d1929'
const TEAL = '#6699BB'
const BLUE = '#0057A5'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const SERVICES = [
  {
    icon: '/images/icon-ppi.png',
    num: '01',
    title: 'Private Property Towing',
    description: 'Compliant, professional towing enforcement for residential and commercial properties. We handle permit programs, signage requirements, and property manager coordination.',
    path: '/services/private-property',
    accent: TEAL,
  },
  {
    icon: '/images/icon-roadside.png',
    num: '02',
    title: 'Emergency Response & Accident Scene Management',
    description: 'Rapid response towing for accident scenes, working alongside law enforcement and emergency services to restore traffic flow and manage vehicle recovery.',
    path: '/services/emergency-response',
    accent: BLUE,
  },
  {
    icon: '/images/icon-mass.png',
    num: '03',
    title: 'Mass Relocation Towing Services',
    description: 'Organized, large-scale vehicle relocation for events, construction, property turnovers, and emergency clearances across our service areas.',
    path: '/services/mass-relocation',
    accent: TEAL,
  },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 7, md: 10 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -100, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,153,187,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: TEAL }} />
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.75rem' }}>
              What We Do
            </Typography>
          </Box>
          <Typography component="h1" sx={{
            fontFamily: "'Saira', sans-serif", fontWeight: 800,
            fontSize: { xs: '2.6rem', md: '3.8rem', lg: '4.4rem' },
            color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', mb: 2.5, maxWidth: 700,
          }}>
            Our{' '}
            <Box component="span" sx={{ color: TEAL }}>Services</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: 560 }}>
            Comprehensive towing and parking management solutions for property owners,
            managers, and municipalities across North Carolina.
          </Typography>
        </Container>
      </Box>

      {/* ── Cinematic service panels ── */}
      <Box sx={{ bgcolor: DARK }}>
        {SERVICES.map(({ icon, num, title, description, path, accent }, i) => {
          const flip = i % 2 === 1
          return (
            <FadeInBox key={title} direction="up" distance={32}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 'auto', md: 420 },
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  clipPath: i < SERVICES.length - 1 ? { md: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)' } : undefined,
                  mb: i < SERVICES.length - 1 ? { md: -5 } : 0,
                  '&:hover .svc-stripe': { width: 6 },
                }}
              >
                <Box sx={{
                  position: 'absolute', inset: 0,
                  bgcolor: i === 0 ? '#0f1e32' : i === 1 ? '#101c2e' : '#0b1928',
                  backgroundImage: `radial-gradient(ellipse at ${flip ? '80%' : '20%'} 50%, rgba(102,153,187,0.07) 0%, transparent 60%)`,
                }} />
                <Box sx={{
                  position: 'absolute', inset: 0,
                  background: flip
                    ? 'linear-gradient(90deg, rgba(13,25,41,0.55) 0%, rgba(13,25,41,0.96) 60%)'
                    : 'linear-gradient(90deg, rgba(13,25,41,0.96) 40%, rgba(13,25,41,0.55) 100%)',
                }} />
                <Typography sx={{
                  position: 'absolute',
                  fontSize: { xs: '8rem', md: '18rem' }, fontWeight: 900,
                  color: 'rgba(255,255,255,0.03)', fontFamily: "'Saira', sans-serif",
                  lineHeight: 1, right: flip ? 'auto' : '1%', left: flip ? '1%' : 'auto',
                  bottom: '-8%', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em',
                }}>{num}</Typography>
                <Box className="svc-stripe" sx={{
                  position: 'absolute', top: 0, bottom: 0,
                  left: flip ? 'auto' : 0, right: flip ? 0 : 'auto',
                  width: 3, bgcolor: accent, transition: 'width 0.3s ease',
                }} />
                <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1, py: { xs: 5, md: 0 } }}>
                  <Box sx={{ display: 'flex', flexDirection: flip ? 'row-reverse' : 'row' }}>
                    <Box sx={{ maxWidth: { xs: '100%', md: 500 }, ml: flip ? 'auto' : 0 }}>
                      <Typography sx={{ color: accent, fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: "'Saira', sans-serif", mb: 1.5 }}>
                        {num}
                      </Typography>
                      <Box sx={{
                        width: 50, height: 50, borderRadius: 1.5,
                        bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5,
                      }}>
                        <Box component="img" src={icon} alt={title} sx={{ height: 26, width: 'auto' }} />
                      </Box>
                      <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.4rem', md: '1.7rem' }, lineHeight: 1.2, mb: 2 }}>
                        {title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, mb: 3.5 }}>
                        {description}
                      </Typography>
                      <Button
                        variant="text"
                        onClick={() => navigate(path)}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          color: accent, fontWeight: 700, p: 0, fontSize: '0.875rem', letterSpacing: '0.04em',
                          '&:hover': { bgcolor: 'transparent', color: '#fff', '& .MuiButton-endIcon': { transform: 'translateX(5px)' } },
                          '& .MuiButton-endIcon': { transition: 'transform 0.2s' },
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </FadeInBox>
          )
        })}
      </Box>
    </>
  )
}
