import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    title: 'Private Property Towing',
    description:
      'Compliant, professional towing enforcement for residential and commercial properties. We handle permit programs, signage requirements, and property manager coordination.',
    path: '/services/private-property',
  },
  {
    title: 'Emergency Response & Accident Scene Management',
    description:
      'Rapid response towing for accident scenes, working alongside law enforcement and emergency services to restore traffic flow and manage vehicle recovery.',
    path: '/services/emergency-response',
  },
  {
    title: 'Mass Relocation Towing Services',
    description:
      'Organized, large-scale vehicle relocation for events, construction, property turnovers, and emergency clearances across our service areas.',
    path: '/services/mass-relocation',
  },
]

function Services() {
  const navigate = useNavigate()

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
            Our Services
          </Typography>
          <Box sx={{ width: 48, height: 3, background: '#E1AD00', mx: 'auto', mb: 2.5, borderRadius: 1 }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Comprehensive towing and parking management solutions for property owners,
            managers, and municipalities across North Carolina.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, background: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((svc) => (
              <Grid key={svc.title} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(29,43,69,0.1)',
                    borderTop: '4px solid #E1AD00',
                    boxShadow: '0 4px 20px rgba(29,43,69,0.08)',
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 14px 36px rgba(29,43,69,0.14)' },
                  }}
                  onClick={() => navigate(svc.path)}
                >
                  <CardContent sx={{ flex: 1, p: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#1D2B45' }}>
                      {svc.title}
                    </Typography>
                    <Typography sx={{ color: '#6B7A8D', lineHeight: 1.8, mb: 3, fontSize: '0.9rem' }}>
                      {svc.description}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#0057A5',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.7px',
                      }}
                    >
                      Learn More →
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Services
