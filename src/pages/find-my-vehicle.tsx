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
import SearchIcon from '@mui/icons-material/Search'
import PhoneIcon from '@mui/icons-material/Phone'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BadgeIcon from '@mui/icons-material/Badge'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import PaymentIcon from '@mui/icons-material/Payment'
import AssignmentIcon from '@mui/icons-material/Assignment'

const NAVY = '#1D2B45'
const TEAL = '#3EAACC'
const BLUE = '#0057A5'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const RETRIEVAL_ITEMS = [
  { icon: <BadgeIcon sx={{ color: TEAL, fontSize: 28 }} />, label: 'Valid government-issued photo ID' },
  { icon: <DirectionsCarIcon sx={{ color: TEAL, fontSize: 28 }} />, label: 'Proof of vehicle ownership (title or registration)' },
  { icon: <PaymentIcon sx={{ color: TEAL, fontSize: 28 }} />, label: 'Payment for towing and storage fees' },
  { icon: <AssignmentIcon sx={{ color: TEAL, fontSize: 28 }} />, label: 'Authorization paperwork (if retrieving on behalf of owner)' },
]

export default function FindMyVehicle() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 7, md: 11 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1.5 }}>
              Vehicle Lookup &amp; Retrieval
            </Typography>
            <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.4rem', md: '3.2rem' }, color: '#fff', lineHeight: 1.1, mb: 2 }}>
              Find My Vehicle
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              If your vehicle was towed by Integrity Towing Solutions, use the link below to locate it,
              or call us directly for immediate assistance.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Main content ── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                Locate Your Vehicle
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 4 }}>
                Use our online lookup portal or call our 24/7 line to find out where your vehicle is being
                held and how to retrieve it.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="https://portal.integritytow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<SearchIcon />}
                  sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#2d4060' } }}
                >
                  Search Vehicle Lookup Portal
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  sx={{ borderColor: NAVY, color: NAVY, fontWeight: 700, '&:hover': { bgcolor: '#f5f7fa', borderColor: NAVY } }}
                >
                  Call (919) 790-9393
                </Button>
              </Box>

              <Typography variant="h3" sx={{ color: NAVY, fontSize: { xs: '1.4rem', md: '1.7rem' }, mb: 3 }}>
                What to Bring for Vehicle Retrieval
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
                {RETRIEVAL_ITEMS.map(({ icon, label }) => (
                  <Paper key={label} elevation={0} sx={{ p: 2.5, border: '1px solid #e8ecf0', borderRadius: 2, display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ flexShrink: 0, mt: 0.25 }}>{icon}</Box>
                    <Typography variant="body2" sx={{ color: '#1D2B45', fontWeight: 500, lineHeight: 1.6 }}>{label}</Typography>
                  </Paper>
                ))}
              </Box>

              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mt: 4 }}>
                Questions? Call us at{' '}
                <Box component="a" href="tel:9197909393" sx={{ color: BLUE, fontWeight: 600 }}>(919) 790-9393</Box>
                {' '}— we're available 24/7.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3.5, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: NAVY, mb: 2, fontWeight: 700 }}>Quick Contact</Typography>
                <List dense disablePadding>
                  {[
                    'Online portal available 24/7',
                    'Phone support 24 hours a day',
                    'Bring valid ID when retrieving',
                    'Payment accepted at all locations',
                  ].map((item) => (
                    <ListItem key={item} disablePadding sx={{ mb: 0.75 }}>
                      <ListItemIcon sx={{ minWidth: 26 }}><CheckCircleIcon sx={{ fontSize: 15, color: TEAL }} /></ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ fontSize: '0.875rem', color: '#4a5568' }} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  component="a"
                  href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 700, py: 1.75, mt: 3, boxShadow: 'none', '&:hover': { bgcolor: '#2d4060' } }}
                >
                  (919) 790-9393
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
