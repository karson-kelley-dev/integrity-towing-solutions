import { Box, Container, Typography } from '@mui/material'

function GreensboroAuction() {
  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1D2B45 0%, #2E4168 100%)',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 800, mb: 2 }}>
            Vehicle Auction — Greensboro
          </Typography>
          <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 2.5, borderRadius: 1 }} />
          <Typography sx={{ color: '#3EAACC', fontSize: '1rem', fontWeight: 700, mb: 1 }}>
            2040 Fairview Street, Greensboro, NC 27405
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7 }}>
            Upcoming auctions at our Greensboro location
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: '#6B7A8D', lineHeight: 1.8 }}>
            Auction schedule, upcoming listings, and bidding information coming soon.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default GreensboroAuction
