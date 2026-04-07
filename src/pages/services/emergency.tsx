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
  { icon: '/images/icon-roadside.png', title: 'Emergency Response Towing', description: 'Rapid towing support for urgent situations — day or night, any vehicle type.' },
  { icon: '/images/icon-ppi.png', title: 'Accident Scene Management & Vehicle Removal', description: 'Efficient scene clearing to restore traffic flow and reduce secondary risk.' },
  { icon: '/images/icon-commercial.png', title: 'Impound Services', description: 'Secure, documented impound services when vehicles must be held before release.' },
  { icon: '/images/icon-immediate-towing.png', title: 'Illegal Parking Enforcement', description: 'Removal support for illegally parked vehicles impacting access, safety corridors, or operations.' },
  { icon: '/images/icon-mass.png', title: 'Abandoned Vehicle Removal', description: 'Assistance removing abandoned vehicles from public or private property.' },
  { icon: '/images/icon-custom-policies.png', title: 'Evidence Towing & Secure Storage', description: 'Secure towing and storage protocols for vehicles requiring documented handling.' },
  { icon: '/images/icons-municpality.png', title: 'Relocation for Public Events & Construction', description: 'Organized relocations to support event operations and construction access with minimal disruption.' },
  { icon: '/images/icon-account-manager.png', title: 'Secure Transport of Seized Vehicles', description: 'Discreet, controlled transport handled with the professionalism and documentation required.' },
]

const SIDEBAR_SERVICES = [
  'Emergency Response Towing',
  'Accident Scene Management & Vehicle Removal',
  'Impound Services',
  'Illegal Parking Enforcement',
  'Abandoned Vehicle Removal',
  'Evidence Towing & Secure Storage',
  'Relocation for Public Events & Construction',
  'Secure Transport of Seized Vehicles',
]

const CAPABILITIES = [
  {
    title: 'Rapid Response Towing',
    bullets: ['Day-or-night dispatch for urgent vehicle removal situations.', 'Coordination with first responders and on-site stakeholders.'],
  },
  {
    title: 'Accident Scene Management',
    bullets: ['Efficient scene clearing to restore traffic flow and reduce secondary risk.', 'Trained operators who follow disciplined procedures at every scene.'],
  },
  {
    title: 'Secure Impound & Storage',
    bullets: ['Documented impound services when vehicles must be held before release.', 'Evidence towing and secure storage protocols for vehicles requiring special handling.'],
  },
  {
    title: 'Abandoned & Illegal Vehicle Removal',
    bullets: ['Removal of abandoned vehicles from public or private property.', 'Support for illegally parked vehicles impacting access or safety corridors.'],
  },
  {
    title: 'Event & Construction Support',
    bullets: ['Organized vehicle relocations for public events and construction projects.', 'Minimal disruption to site operations during relocation windows.'],
  },
]

export default function EmergencyResponse() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1.5 }}>
                24/7 Emergency Towing &amp; Accident Scene Support
              </Typography>
              <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', mb: 2.5 }}>
                Emergency Response &amp;<br />Accident Scene Management
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.8, mb: 3 }}>
                When an incident blocks access, disrupts traffic, or creates a safety risk, response time and coordination matter.
                ITS provides <Box component="strong" sx={{ color: '#fff' }}>fast, professional emergency towing and accident scene support</Box> to help clear vehicles quickly and restore order safely.
              </Typography>
              <Box sx={{ bgcolor: 'rgba(62,170,204,0.15)', border: '1px solid rgba(62,170,204,0.3)', borderRadius: 2, p: 2.5, mb: 3 }}>
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>For 24-Hour Immediate Service:</Typography>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#34919e' } }}
                >
                  Call (919) 790-9393
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ bgcolor: '#fff', borderRadius: 3, p: { xs: 3, md: 4 }, boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
                <Box sx={{ borderLeft: `4px solid ${TEAL}`, pl: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Request a Quote</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>For emergency service call (919) 790-9393 directly.</Typography>
                </Box>
                <QuoteForm heading="" defaultSubject="Emergency Response" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── About strip ── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.6rem', md: '2rem' }, mb: 2 }}>
              Supporting Public Safety Partners Across North Carolina
            </Typography>
            <Typography variant="body1" sx={{ color: '#4a5568', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              ITS provides emergency response towing and accident scene support to help clear vehicles
              quickly and restore order safely. We work with dispatch, first responders, and on-site
              stakeholders to keep operations moving. Our priority is public safety and efficient scene
              clearance from the moment we arrive.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Service Cards ── */}
      <Box sx={{ bgcolor: LIGHT, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.6rem', md: '2rem' }, mb: 4, textAlign: 'center' }}>
            Emergency Response Services
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {SERVICE_CARDS.map(({ icon, title, description }) => (
              <Paper key={title} elevation={0} sx={{ p: 3, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: 1.5, transition: 'box-shadow 0.25s, transform 0.25s', '&:hover': { boxShadow: '0 8px 32px rgba(0,0,0,0.06), 0 0 0 2px #3EAACC', transform: 'translateY(-3px)' } }}>
                <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Box component="img" src={icon} alt={title} sx={{ height: 26, width: 'auto' }} />
                </Box>
                <Typography variant="h6" sx={{ color: NAVY, fontSize: '0.975rem' }}>{title}</Typography>
                <Typography variant="body2" sx={{ color: '#4a5568', lineHeight: 1.7 }}>{description}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Content + Sidebar ── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                Emergency Response &amp; Accident Scene Capabilities
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 4 }}>
                When it comes to emergency response towing and accident scene management, ITS brings trained
                operators, coordinated dispatch, and the resources to handle complex removals and recoveries —
                without creating additional risk at the scene.
              </Typography>

              {CAPABILITIES.map(({ title, bullets }) => (
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

              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mt: 3 }}>
                The goal is simple: reduce downtime, improve safety, and get roads, lots, and access points
                back to normal as quickly as possible. Contact ITS at{' '}
                <Box component="a" href="tel:9197909393" sx={{ color: '#0057A5', fontWeight: 600 }}>(919) 790-9393</Box>
                {' '}for emergency response support.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: 'sticky', top: 90 }}>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, mb: 2, fontSize: '1rem', fontWeight: 700 }}>Emergency Services</Typography>
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
