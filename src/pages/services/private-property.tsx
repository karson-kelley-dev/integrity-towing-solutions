import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PhoneIcon from '@mui/icons-material/Phone'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import QuoteForm from '../../components/QuoteForm'

const NAVY = '#1D2B45'
const TEAL = '#3EAACC'
const LIGHT = '#F5F7FA'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const SERVICE_CARDS = [
  { icon: '/images/icon-its-white.png', title: 'Property Manager Portal', description: 'Real-time visibility into parking trends, issues, and violations — plus a centralized place to track and manage every parking enforcement request.' },
  { icon: '/images/icon-custom-policies.png', title: 'Custom Program Tailored for Your Community', description: 'A parking enforcement plan built around your property type, resident flow, and problem areas — not a one-size-fits-all template.' },
  { icon: '/images/icon-sign.svg', title: 'Signage & Install', description: 'Professional, compliant signage — assessed for your layout and installed so expectations are clear and enforcement is defensible.' },
  { icon: '/images/icon-account-manager.png', title: 'Account Manager', description: 'A dedicated point of contact who knows your property, helps manage updates, and keeps the program running smoothly.' },
  { icon: '/images/icon-immediate-towing.png', title: 'Immediate Towing', description: 'When violations impact safety, access, or operations, we respond quickly to remove unauthorized vehicles and restore order.' },
  { icon: '/images/icon-parking-permits.png', title: 'Parking Permits', description: 'A structured permit process that helps residents and guests park correctly and reduces confusion, disputes, and unnecessary escalations.' },
]

const SIDEBAR_SERVICES = [
  'Private Property Impound',
  'Signage & Install',
  'Custom Enforcement Programs',
  'Parking Permits',
  'Property Manager Portal',
  'Account Manager Support',
  'Immediate Towing (24/7)',
  'Multi-Property Portfolios',
]

const WHY = [
  { title: 'Partner, Not Vendor', bullets: ['We take time to understand your property and build an enforcement program that fits.', 'Consistent communication with your team — not just when problems arise.'] },
  { title: 'Defensible Process', bullets: ['Every tow is grounded in written authorization, proper signage, and NC statutory compliance.', 'Documentation that stands up to questions, disputes, and reviews.'] },
  { title: 'Consistent Execution', bullets: ['Same process, same standards, week after week across every property we manage.', 'Predictable enforcement that residents and guests come to understand.'] },
  { title: 'Multi-Market Scale', bullets: ['Infrastructure across Raleigh, Durham, Chapel Hill, and Greensboro.', 'One consistent approach across multi-property portfolios.'] },
  { title: 'Transparent Operations', bullets: ['Clients always know what is happening on their properties.', 'Nothing falls through the cracks — every action is documented.'] },
  { title: 'Dedicated to Private Property', bullets: ['ITS focuses exclusively on private property impound.', 'Data-driven operations that improve enforcement effectiveness over time.'] },
]

const PROPERTY_TYPES = [
  'Apartment Communities', 'HOA Communities', 'Commercial Properties', 'Retail Shopping Centers',
  'Office Parks', 'Mixed-Use Developments', 'Medical / Healthcare Facilities', 'Hotels & Hospitality',
  'Student Housing', 'Storage Facilities', 'Industrial Properties', 'Restaurant & Dining Complexes',
  'Sports & Entertainment Venues', 'Government Properties', 'Educational Campuses',
  'Senior Living Communities', 'Condominium Complexes', 'Parking Decks & Garages',
]

export default function PrivatePropertyTowing() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1.5 }}>
                HOAs, Apartment Buildings, Commercial &amp; More
              </Typography>
              <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', mb: 2.5 }}>
                Private Property Towing<br />in North Carolina
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.8, mb: 4 }}>
                When unauthorized vehicles park on your property, ITS will remove them with written
                authorization, proper documentation, and consistent processes. Our mission is to keep
                your property clear while <Box component="strong" sx={{ color: '#fff' }}>putting you in control.</Box>
              </Typography>
              <Button
                variant="contained"
                size="large"
                component="a"
                href="tel:9197909393"
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#34919e' } }}
              >
                (919) 790-9393
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ bgcolor: '#fff', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
                <Box sx={{ borderLeft: `4px solid ${TEAL}`, pl: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Interested in us servicing your property?</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>We'll get back to you within 1 business hour.</Typography>
                </Box>
                <QuoteForm heading="" defaultSubject="Private Property Towing" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Service Cards ── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2 }}>
              Built for Property Managers (Not Just Tows)
            </Typography>
            <Typography variant="body1" sx={{ color: '#4a5568', maxWidth: 640, mx: 'auto', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              When parking violations become the norm, your property pays the price — lost spaces for residents and guests,
              increased frustration, and avoidable safety and access issues. ITS provides private property towing built for
              property managers who need consistent enforcement without unnecessary drama.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {SERVICE_CARDS.map(({ icon, title, description }) => (
              <Paper key={title} elevation={0} sx={{ p: 3.5, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 2, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 32px rgba(0,0,0,0.08)' } }}>
                <Box sx={{ width: 52, height: 52, borderRadius: 2, bgcolor: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Box component="img" src={icon} alt={title} sx={{ height: 28, width: 'auto' }} />
                </Box>
                <Typography variant="h6" sx={{ color: NAVY, fontSize: '1.05rem' }}>{title}</Typography>
                <Typography variant="body2" sx={{ color: '#4a5568', lineHeight: 1.75 }}>{description}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Content + Sidebar ── */}
      <Box sx={{ bgcolor: LIGHT, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            {/* Main content */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                Why ITS for Private Property Towing in North Carolina
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 4 }}>
                When it comes to reliable private property towing services across the Triangle and Triad,
                ITS is your go-to partner. We specialize in delivering towing solutions that prioritize
                compliance, consistency, and clear communication for property owners and managers.
              </Typography>

              {WHY.map(({ title, bullets }) => (
                <Box key={title} sx={{ mb: 3.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <Box sx={{ width: 28, height: 3, bgcolor: TEAL, borderRadius: 2, flexShrink: 0 }} />
                    <Typography variant="h5" sx={{ color: NAVY, fontSize: '1.125rem' }}>{title}</Typography>
                  </Box>
                  <List dense disablePadding sx={{ pl: 0.5 }}>
                    {bullets.map((b) => (
                      <ListItem key={b} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}><CheckCircleIcon sx={{ fontSize: 16, color: TEAL }} /></ListItemIcon>
                        <ListItemText primary={b} primaryTypographyProps={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.7 }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}

              <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.5rem', md: '1.8rem' }, mt: 5, mb: 2 }}>
                Types of Properties We Serve
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 3 }}>
                ITS serves a wide range of private property types across the Triangle and Triad.
                Whether you manage a single complex or a large portfolio, we bring consistent standards
                and clear processes to every site.
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 1 }}>
                {PROPERTY_TYPES.map((t) => (
                  <Box key={t} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 15, color: TEAL, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#4a5568', fontSize: '0.875rem' }}>{t}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mt: 4 }}>
                Property managers choose ITS because we operate like a partner, not a vendor. We take the
                time to understand your property and set up an enforcement program that is clear to
                residents, defensible when challenged, and consistent week after week.
                Contact us at{' '}
                <Box component="a" href="tel:9197909393" sx={{ color: '#0057A5', fontWeight: 600 }}>(919) 790-9393</Box>
                {' '}to get started.
              </Typography>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: 'sticky', top: 24 }}>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, mb: 2, fontSize: '1rem', fontWeight: 700 }}>Private Property Services</Typography>
                  <List dense disablePadding>
                    {SIDEBAR_SERVICES.map((s) => (
                      <ListItem key={s} disablePadding sx={{ mb: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 26 }}><CheckCircleIcon sx={{ fontSize: 15, color: TEAL }} /></ListItemIcon>
                        <ListItemText primary={s} primaryTypographyProps={{ fontSize: '0.875rem', color: '#4a5568' }} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  component="a"
                  href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 700, py: 1.75, boxShadow: 'none', '&:hover': { bgcolor: '#2d4060' } }}
                >
                  (919) 790-9393
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
