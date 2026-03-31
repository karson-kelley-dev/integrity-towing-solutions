import { Toolbar } from '@mui/material'
import type { ReactNode } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

interface LayoutProps {
  children?: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Navbar />
      {/* Spacer matches the actual AppBar Toolbar height exactly */}
      <Toolbar sx={{ py: '0.4rem', flexShrink: 0 }} />
      <main style={{ margin: 0, padding: 0, flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
