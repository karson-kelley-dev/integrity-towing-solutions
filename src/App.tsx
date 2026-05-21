import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

import Layout from './layout/index'
import Auction from './pages/auction/index'
// import DurhamAuction from './pages/auction/durham'
// import GreensboroAuction from './pages/auction/greensboro'
// import RaleighAuction from './pages/auction/raleigh'
import ComingSoon from './pages/coming-soon'
import Contact from './pages/contact'
import Employment from './pages/employment'
import Home from './pages/home'
import Emergency from './pages/services/emergency'
import MassRelocation from './pages/services/mass-relocation'
import PrivateProperty from './pages/services/private-property'

// <Route path="/find-my-vehicle" element={<FindMyVehicle />} />

function WithLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Standalone — no navbar/footer */}
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* All other routes wrapped in Layout */}
        <Route element={<WithLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/private-property" element={<PrivateProperty />} />
          <Route path="/services/emergency-response" element={<Emergency />} />
          <Route path="/services/mass-relocation" element={<MassRelocation />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment" element={<Employment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
