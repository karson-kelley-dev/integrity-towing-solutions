import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import logoWhite from '../assets/logo-white.png'

const EMPLOYMENT_URL =
  'https://recruiting.paylocity.com/recruiting/jobs/All/c1bb61df-a5f3-4474-8acd-c589dceb0778/Integrity-Towing-Solutions?source=Indeed_Feed'

const FooterLink = ({ label, path, navigate }: { label: string; path?: string; href?: string; navigate?: (p: string) => void }) => (
  <Box
    component={path ? 'a' : 'span'}
    href={path}
    onClick={path && navigate ? (e: React.MouseEvent) => { e.preventDefault(); navigate(path) } : undefined}
    sx={{
      display: 'block',
      color: 'rgba(255,255,255,0.65)',
      fontFamily: "'Saira', sans-serif",
      fontSize: '0.9rem',
      mb: 0.75,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.15s',
      '&:hover': { color: '#3EAACC', textDecoration: 'none' },
    }}
  >
    {label}
  </Box>
)

export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ bgcolor: '#1D2B45', color: '#fff', pt: { xs: 7, md: 9 }, pb: 0 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1.4fr' },
            gap: { xs: 4, md: 6 },
            pb: 7,
          }}
        >
          {/* Brand col */}
          <Box>
            <Box
              component="img"
              src={logoWhite}
              alt="Integrity Towing Solutions"
              sx={{ height: 50, width: 'auto', mb: 2.5, filter: 'brightness(0) invert(1)' }}
            />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 300, mb: 3 }}>
              Professional towing and parking management for property managers across the Triangle and Triad of North Carolina. Available 24 hours a day, 7 days a week.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <PhoneIcon sx={{ fontSize: 16, color: '#3EAACC' }} />
              <Box
                component="a"
                href="tel:9197909393"
                sx={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Saira', sans-serif", fontSize: '0.9rem', textDecoration: 'none', '&:hover': { color: '#3EAACC' } }}
              >
                (919) 790-9393
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ fontSize: 16, color: '#3EAACC' }} />
              <Box
                component="a"
                href="mailto:impound@integritytow.com"
                sx={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Saira', sans-serif", fontSize: '0.9rem', textDecoration: 'none', '&:hover': { color: '#3EAACC' } }}
              >
                impound@integritytow.com
              </Box>
            </Box>
          </Box>

          {/* Services col */}
          <Box>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Services
            </Typography>
            <FooterLink label="Private Property Towing" path="/services/private-property" navigate={navigate} />
            <FooterLink label="Emergency Response" path="/services/emergency-response" navigate={navigate} />
            <FooterLink label="Mass Relocation" path="/services/mass-relocation" navigate={navigate} />
            <FooterLink label="Vehicle Auctions" path="/auction/raleigh" navigate={navigate} />
          </Box>

          {/* Quick Links col */}
          <Box>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Quick Links
            </Typography>
            <FooterLink label="Home" path="/" navigate={navigate} />
            <FooterLink label="Find My Vehicle" path="/find-my-vehicle" navigate={navigate} />
            <FooterLink label="Contact Us" path="/contact" navigate={navigate} />
            <Box
              component="a"
              href={EMPLOYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'block',
                color: 'rgba(255,255,255,0.65)',
                fontFamily: "'Saira', sans-serif",
                fontSize: '0.9rem',
                mb: 0.75,
                textDecoration: 'none',
                '&:hover': { color: '#3EAACC' },
              }}
            >
              Employment
            </Box>
          </Box>

          {/* Locations col */}
          <Box>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Locations
            </Typography>
            {[
              { city: 'Raleigh', addr: '3201 Durham Drive, Raleigh, NC 27603', path: '/auction/raleigh' },
              { city: 'Durham', addr: '1025 Harvest Street, Durham, NC 27704', path: '/auction/durham' },
              { city: 'Greensboro', addr: '2040 Fairview Street, Greensboro, NC 27405', path: '/auction/greensboro' },
            ].map(({ city, addr, path }) => (
              <Box key={city} sx={{ mb: 2, display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 16, color: '#3EAACC', mt: 0.25, flexShrink: 0 }} />
                <Box>
                  <Box
                    component="a"
                    href={path}
                    onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate(path) }}
                    sx={{ display: 'block', color: '#fff', fontFamily: "'Saira', sans-serif", fontWeight: 600, fontSize: '0.9rem', mb: 0.25, textDecoration: 'none', '&:hover': { color: '#3EAACC' } }}
                  >
                    {city}
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                    {addr}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <AccessTimeIcon sx={{ fontSize: 16, color: '#3EAACC' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>
                Monday – Sunday, 24/7
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            justifyContent: 'space-between',
            py: 2.5,
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            &copy; {year} Integrity Towing Solutions. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2.5 }}>
            {[
              { label: 'Privacy Policy', path: '/privacy-policy' },
              { label: 'Terms of Service', path: '/terms-of-service' },
            ].map(({ label, path }) => (
              <Typography
                key={label}
                component="a"
                href={path}
                variant="body2"
                sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none', '&:hover': { color: 'rgba(255,255,255,0.7)' } }}
              >
                {label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
