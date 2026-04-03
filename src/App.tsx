import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

import Layout from './layout/index'
import Home from './pages/home'
import PrivateProperty from './pages/services/private-property'
import Emergency from './pages/services/emergency'
import MassRelocation from './pages/services/mass-relocation'
import RaleighAuction from './pages/auction/raleigh'
import DurhamAuction from './pages/auction/durham'
import GreensboroAuction from './pages/auction/greensboro'
import FindMyVehicle from './pages/find-my-vehicle'
import Contact from './pages/contact'
import Employment from './pages/employment'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/private-property" element={<PrivateProperty />} />
          <Route path="/services/emergency-response" element={<Emergency />} />
          <Route path="/services/mass-relocation" element={<MassRelocation />} />
          <Route path="/auction/raleigh" element={<RaleighAuction />} />
          <Route path="/auction/durham" element={<DurhamAuction />} />
          <Route path="/auction/greensboro" element={<GreensboroAuction />} />
          <Route path="/find-my-vehicle" element={<FindMyVehicle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment" element={<Employment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
