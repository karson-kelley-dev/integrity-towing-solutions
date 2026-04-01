import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import theme from './theme'
import Layout from './layout/index'
import Home from './pages/home'
import PrivateProperty from './pages/services/private-property'
import Emergency from './pages/services/emergency'
import MassRelocation from './pages/services/mass-relocation'
import RaleighAuction from './pages/auction/raleigh'
import DurhamAuction from './pages/auction/durham'
import GreensboroAuction from './pages/auction/greensboro'
import ComingSoon from './pages/coming-soon'
import Contact from './pages/contact'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services/private-property' element={<PrivateProperty />} />
          <Route path='/services/emergency-response' element={<Emergency />} />
          <Route path='/services/mass-relocation' element={<MassRelocation />} />
          <Route path='/auction/raleigh' element={<RaleighAuction />} />
          <Route path='/auction/durham' element={<DurhamAuction />} />
          <Route path='/auction/greensboro' element={<GreensboroAuction />} />
          <Route path='/find-my-vehicle' element={<ComingSoon />} />
          <Route path='/contact' element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
