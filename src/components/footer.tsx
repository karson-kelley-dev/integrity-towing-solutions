import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'

const EMPLOYMENT_URL =
  'https://recruiting.paylocity.com/recruiting/jobs/All/c1bb61df-a5f3-4474-8acd-c589dceb0778/Integrity-Towing-Solutions?source=Indeed_Feed'

const locations = [
  { city: 'Raleigh', address: '3201 Durham Drive', zip: 'Raleigh, NC 27603' },
  { city: 'Durham', address: '1025 Harvest Street', zip: 'Durham, NC 27704' },
  { city: 'Greensboro', address: '2040 Fairview Street', zip: 'Greensboro, NC 27405' },
]

const footerLinks = [
  { label: 'About', path: '/' },
  { label: 'Private Property Towing', path: '/services/private-property' },
  { label: 'Emergency Response', path: '/services/emergency-response' },
  { label: 'Mass Relocation', path: '/services/mass-relocation' },
  { label: 'Find My Vehicle', path: '/find-my-vehicle' },
  { label: 'Employment', path: EMPLOYMENT_URL, external: true },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
]

const headingSx = {
  color: '#ffffff',
  fontWeight: 700,
  mb: 2.5,
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
  fontSize: '0.72rem',
  fontFamily: "'Saira', sans-serif",
}

const linkSx = {
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  fontSize: '0.875rem',
  cursor: 'pointer',
  fontFamily: "'Saira', sans-serif",
  transition: 'color 0.2s ease',
  '&:hover': { color: '#E1AD00' },
}

function Footer() {
  const navigate = useNavigate()

  return (
    <Box component="footer" sx={{ background: '#1D2B45', color: 'rgba(255,255,255,0.5)' }}>
      {/* Main grid */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
          <Grid container spacing={6}>
            {/* Logo + tagline */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ mb: 2 }}>
                <img
                  src={logoWhite}
                  alt="Integrity Towing Solutions"
                  style={{ height: '56px', width: 'auto', display: 'block' }}
                />
              </Box>
              <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', fontFamily: "'Saira', sans-serif", lineHeight: 1.7 }}>
                Professional towing &amp; parking management across the Triangle and Triad.
              </Typography>
            </Grid>

            {/* Locations */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={headingSx}>Locations</Typography>
              {locations.map((loc) => (
                <Box key={loc.city} sx={{ mb: 2.5 }}>
                  <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', fontFamily: "'Saira', sans-serif", mb: 0.25 }}>
                    {loc.city}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.6, fontFamily: "'Saira', sans-serif" }}>
                    {loc.address}<br />{loc.zip}
                  </Typography>
                </Box>
              ))}
            </Grid>

            {/* Hours & Contact */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={headingSx}>Hours &amp; Contact</Typography>
              <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', mb: 0.5, fontFamily: "'Saira', sans-serif" }}>
                Business Hours
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', mb: 3, lineHeight: 1.7, fontFamily: "'Saira', sans-serif" }}>
                Monday – Sunday<br />24 Hours / 7 Days a Week
              </Typography>
              <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', mb: 0.75, fontFamily: "'Saira', sans-serif" }}>
                Contact Us
              </Typography>
              <Link href="tel:9197909393" sx={{ ...linkSx, display: 'block', mb: 0.5 }}>
                (919) 790-9393
              </Link>
              <Link href="mailto:impound@integritytow.com" sx={{ ...linkSx, display: 'block' }}>
                impound@integritytow.com
              </Link>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={headingSx}>Quick Links</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {footerLinks.map((link) =>
                  link.external ? (
                    <Link key={link.label} href={link.path} target="_blank" rel="noopener noreferrer" sx={linkSx}>
                      {link.label}
                    </Link>
                  ) : (
                    <Typography key={link.label} onClick={() => navigate(link.path)} sx={linkSx}>
                      {link.label}
                    </Typography>
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)' }} />

      <Box sx={{ py: 3 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
          <Typography sx={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)', fontFamily: "'Saira', sans-serif" }}>
            &copy; {new Date().getFullYear()} Integrity Towing Solutions. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
