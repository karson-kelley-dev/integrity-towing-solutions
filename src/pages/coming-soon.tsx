import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function ComingSoon() {
  const navigate = useNavigate()

  return (
    <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#D9DADF' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#1D2B45', mb: 2 }}>
          Coming Soon
        </Typography>
        <Typography sx={{ color: '#6B7A8D', lineHeight: 1.7, mb: 4 }}>
          This feature is currently under development. In the meantime, give us a call
          at <strong>(919) 790-9393</strong> and we'll help you locate your vehicle.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{ background: '#E1AD00', color: '#1D2B45', fontWeight: 700, px: 4, py: 1.5, '&:hover': { background: '#c99c00' } }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  )
}

export default ComingSoon
