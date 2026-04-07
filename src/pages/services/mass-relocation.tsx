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

const SIDEBAR_ITEMS = [
  'Construction Projects',
  'Real Estate Developments',
  'Event Planning',
  'Municipal Projects',
  'Corporate Relocations',
  'University & School Projects',
  'Parking Lot Resurfacing',
  'HOA Transitions & Renovations',
]

const FEATURES = [
  {
    title: 'Advanced Equipment & Technology',
    body: 'We utilize professional-grade towing equipment to ensure that every vehicle is handled with care. Our fleet allows us to manage various types of vehicles safely and efficiently, minimizing the risk of damage during transport.',
  },
  {
    title: 'Highly Skilled & Certified Operators',
    body: 'Our team of towing operators is trained and experienced. They execute large moves with care, precision, and professionalism — handling even the most challenging towing scenarios.',
  },
  {
    title: '24/7 Availability',
    body: 'Emergencies and last-minute changes can occur at any time. We offer flexible scheduling and around-the-clock availability, ensuring we are always ready when you need us.',
  },
]

const BENEFITS = [
  {
    title: 'Efficiency & Reliability',
    body: 'Coordinated teams and clear execution keep relocations on schedule and minimize downtime. We pride ourselves on quick response times and the ability to handle large volumes efficiently.',
  },
  {
    title: 'Safety & Site Security',
    body: 'Safety is our top priority. We adhere to stringent safety standards, protect both our team and your vehicles, and ensure optimal performance throughout every relocation.',
  },
  {
    title: 'Customized Solutions',
    body: 'We understand that each project has unique requirements. We offer solutions tailored to your site constraints, timeline, and stakeholder requirements — whether you need short-term storage, multi-stakeholder coordination, or specialized handling.',
  },
]

const TIPS = [
  { title: 'Plan Ahead', body: 'Confirm volume, timeline, towing windows, and approved drop locations early to keep the move smooth. Early planning helps ensure a seamless and efficient operation.' },
  { title: 'Communicate Clearly', body: 'Align stakeholders on where vehicles go, when towing occurs, and what signage/notifications are required. Clear communication helps prevent misunderstandings.' },
  { title: 'Coordinate Logistics', body: 'Define access points, staging areas, sequencing, and any permitting needs before execution begins. Proper logistics planning keeps the site running efficiently.' },
  { title: 'Monitor Progress', body: 'Stay aligned during the move with updates and a clear point of contact for adjustments. Real-time communication keeps the project on track.' },
  { title: 'Prioritize Safety', body: 'Ensure safe work zones, proper routing, and disciplined procedures throughout the project. Our team follows safety protocols at every step.' },
]

export default function MassRelocation() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1.5 }}>
                Construction Projects, Events &amp; Relocations
              </Typography>
              <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', mb: 2.5 }}>
                Mass Relocation<br />Towing Services
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem', lineHeight: 1.8, mb: 4 }}>
                Need to relocate a large number of vehicles for a major project or event? ITS is a{' '}
                <Box component="strong" sx={{ color: '#fff' }}>North Carolina Mass Relocation Towing Company</Box>{' '}
                that offers efficient and reliable services to handle large-scale vehicle relocations for your project needs.
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
                  <Typography variant="h6" sx={{ color: NAVY, fontWeight: 700 }}>Let's Plan Your Project</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7a8d' }}>Request a quote for your relocation needs.</Typography>
                </Box>
                <QuoteForm heading="" defaultSubject="Mass Relocation" />
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
              The Right Partner for High-Volume Vehicle Moves
            </Typography>
            <Typography variant="body1" sx={{ color: '#4a5568', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              At ITS, our highly trained staff is dedicated to providing rapid and safe, damage-free services
              for large-scale vehicle relocations. Our primary concern is the safety and efficiency of your
              project operations. ITS helps you protect timelines, reduce risk, and keep operations moving.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content + Sidebar ── */}
      <Box sx={{ bgcolor: LIGHT, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                Features of Our Vehicle Relocation Services
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 4 }}>
                When it comes to large-scale projects requiring the relocation of multiple vehicles, the right
                partner is the difference between an orderly move and a logistical headache. ITS supports
                property teams, contractors, and event stakeholders with experienced operators, the right
                equipment, and a process built for high-volume coordination.
              </Typography>

              {FEATURES.map(({ title, body }) => (
                <Box key={title} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <Box sx={{ width: 28, height: 3, bgcolor: TEAL, borderRadius: 2, flexShrink: 0 }} />
                    <Typography variant="h5" sx={{ color: NAVY, fontSize: '1.125rem' }}>{title}</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, pl: 4.5 }}>{body}</Typography>
                </Box>
              ))}

              <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.5rem', md: '1.8rem' }, mt: 5, mb: 3 }}>
                Benefits of Choosing ITS
              </Typography>
              {BENEFITS.map(({ title, body }) => (
                <Box key={title} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <Box sx={{ width: 28, height: 3, bgcolor: TEAL, borderRadius: 2, flexShrink: 0 }} />
                    <Typography variant="h5" sx={{ color: NAVY, fontSize: '1.125rem' }}>{title}</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, pl: 4.5 }}>{body}</Typography>
                </Box>
              ))}

              <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.5rem', md: '1.8rem' }, mt: 5, mb: 3 }}>
                Tips for a Successful Project Move
              </Typography>
              {TIPS.map(({ title, body }) => (
                <Box key={title} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <Box sx={{ width: 28, height: 3, bgcolor: TEAL, borderRadius: 2, flexShrink: 0 }} />
                    <Typography variant="h5" sx={{ color: NAVY, fontSize: '1.125rem' }}>{title}</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, pl: 4.5 }}>{body}</Typography>
                </Box>
              ))}

              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mt: 3 }}>
                Ready to plan your relocation project? Contact ITS at{' '}
                <Box component="a" href="tel:9197909393" sx={{ color: '#0057A5', fontWeight: 600 }}>(919) 790-9393</Box>
                {' '}to discuss your needs.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: 'sticky', top: 24 }}>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: NAVY, mb: 2, fontSize: '1rem', fontWeight: 700 }}>Project Types</Typography>
                  <List dense disablePadding>
                    {SIDEBAR_ITEMS.map((s) => (
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
