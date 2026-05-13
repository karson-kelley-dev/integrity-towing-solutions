import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  )
}
