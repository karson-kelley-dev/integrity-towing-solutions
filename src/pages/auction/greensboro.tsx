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
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const NAVY = '#1D2B45'
const TEAL = '#3EAACC'
const DOT_GRID = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const AUCTION_DETAILS = [
  'Auctions are open to the public',
  'Valid government-issued photo ID required to bid',
  'Payment due in full at time of purchase',
  'Vehicles sold as-is, no warranties expressed or implied',
  'Buyer responsible for towing or transport of purchased vehicle',
]

export default function GreensboroAuction() {
  return (
    <>
      {/* ── Hero ── */}
      <Box sx={{ bgcolor: NAVY, ...DOT_GRID, pt: { xs: 10, md: 14 }, pb: { xs: 7, md: 11 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ maxWidth: 700 }}>
            <Typography variant="overline" sx={{ color: TEAL, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.8rem', display: 'block', mb: 1.5 }}>
              Vehicle Auctions
            </Typography>
            <Typography component="h1" sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 800, fontSize: { xs: '2.4rem', md: '3.2rem' }, color: '#fff', lineHeight: 1.1, mb: 2 }}>
              Greensboro Auction
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              Bid on impounded and recovered vehicles at our Greensboro location. Auctions are held
              regularly — call or check back for upcoming dates and listings.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{ color: NAVY, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                Greensboro Vehicle Auction
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', mb: 3 }}>
                <LocationOnIcon sx={{ color: TEAL, fontSize: 20, mt: 0.25, flexShrink: 0 }} />
                <Typography variant="body1" sx={{ color: '#4a5568', fontWeight: 500 }}>
                  2040 Fairview Street, Greensboro, NC 27405
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8, mb: 4 }}>
                ITS holds regular public auctions of impounded and unclaimed vehicles at our Greensboro
                facility. Vehicles are sold as-is. All winning bidders must provide a valid photo ID and
                payment at time of sale.
              </Typography>

              <Typography variant="h4" sx={{ color: NAVY, fontSize: '1.25rem', mb: 2 }}>Auction Details</Typography>
              <List dense disablePadding>
                {AUCTION_DETAILS.map((item) => (
                  <ListItem key={item} disablePadding sx={{ mb: 0.75 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}><CheckCircleIcon sx={{ fontSize: 16, color: TEAL }} /></ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.7 }} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h4" sx={{ color: NAVY, fontSize: '1.25rem', mt: 4, mb: 2 }}>Upcoming Auction Dates</Typography>
              <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.8 }}>
                Auction schedule and vehicle listings are updated regularly. Call us at{' '}
                <Box component="a" href="tel:9197909393" sx={{ color: '#0057A5', fontWeight: 600 }}>(919) 790-9393</Box>
                {' '}for the current schedule and available inventory.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3.5, border: '1px solid #e8ecf0', borderTop: `4px solid ${TEAL}`, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: NAVY, mb: 2.5, fontWeight: 700 }}>Auction Info</Typography>
                <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                  <LocationOnIcon sx={{ color: TEAL, fontSize: 20, flexShrink: 0, mt: 0.2 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', mb: 0.25 }}>Location</Typography>
                    <Typography variant="body2" sx={{ color: NAVY, fontWeight: 500 }}>2040 Fairview Street<br />Greensboro, NC 27405</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                  <AccessTimeIcon sx={{ color: TEAL, fontSize: 20, flexShrink: 0, mt: 0.2 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', mb: 0.25 }}>Hours</Typography>
                    <Typography variant="body2" sx={{ color: NAVY, fontWeight: 500 }}>By appointment /<br />scheduled auction dates</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
                  <PhoneIcon sx={{ color: TEAL, fontSize: 20, flexShrink: 0, mt: 0.2 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', mb: 0.25 }}>Phone</Typography>
                    <Box component="a" href="tel:9197909393" sx={{ color: NAVY, fontWeight: 600, fontFamily: "'Saira', sans-serif", textDecoration: 'none', '&:hover': { color: '#0057A5' } }}>
                      (919) 790-9393
                    </Box>
                  </Box>
                </Box>
                <Button
                  fullWidth variant="contained" size="large" component="a" href="tel:9197909393"
                  startIcon={<PhoneIcon />}
                  sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 700, py: 1.75, boxShadow: 'none', '&:hover': { bgcolor: '#2d4060' } }}
                >
                  Call for Schedule
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
