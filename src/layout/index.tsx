import type { ReactNode } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

interface LayoutProps {
  children?: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div id="wrapper">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
