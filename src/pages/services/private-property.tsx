import { Box, Container, Typography } from '@mui/material'

function PrivatePropertyTowing() {
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
            Private Property Towing
          </Typography>
          <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 2.5, borderRadius: 1 }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Professional, compliant enforcement for residential communities, commercial properties, and HOAs.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: '#6B7A8D', lineHeight: 1.8 }}>
            Content coming soon — this section will include details on permit programs,
            signage requirements, towing authorization procedures, and property manager resources.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default PrivatePropertyTowing
