import { Box, Container, Typography } from '@mui/material'

function MassRelocation() {
  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0057A5 0%, #1D2B45 100%)',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 800, mb: 2 }}>
            Mass Relocation Towing Services
          </Typography>
          <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 2.5, borderRadius: 1 }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Organized, large-scale vehicle relocation for events, construction, and emergency clearances.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: '#6B7A8D', lineHeight: 1.8 }}>
            Content coming soon — this section will include fleet capacity, logistics planning,
            coordination process, and past project examples.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default MassRelocation
