import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ pb: { xs: '64px', md: 0 } }}>{children}</Box>
      <Footer />

      {/* Sticky mobile call bar */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          bgcolor: '#1D2B45',
          borderTop: '2px solid #3EAACC',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.25)',
        }}
      >
        <Button
          fullWidth
          component="a"
          href="tel:9197909393"
          startIcon={<PhoneIcon />}
          sx={{
            color: '#fff',
            fontFamily: "'Saira', sans-serif",
            fontWeight: 700,
            py: 1.75,
            fontSize: '1.0625rem',
            borderRadius: 0,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
          }}
        >
          (919) 790-9393
        </Button>
      </Box>
    </>
  )
}
