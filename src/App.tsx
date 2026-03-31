import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import theme from './theme'
import Layout from './layout/index'
import Home from './pages/home'
import Services from './pages/services/index'
import PrivateProperty from './pages/services/private-property'
import Emergency from './pages/services/emergency'
import MassRelocation from './pages/services/mass-relocation'
import RaleighAuction from './pages/auction/raleigh'
import DurhamAuction from './pages/auction/durham'
import GreensboroAuction from './pages/auction/greensboro'
import ComingSoon from './pages/coming-soon'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/private-property' element={<PrivateProperty />} />
          <Route path='/services/emergency-response' element={<Emergency />} />
          <Route path='/services/mass-relocation' element={<MassRelocation />} />
          <Route path='/auction/raleigh' element={<RaleighAuction />} />
          <Route path='/auction/durham' element={<DurhamAuction />} />
          <Route path='/auction/greensboro' element={<GreensboroAuction />} />
          <Route path='/find-my-vehicle' element={<ComingSoon />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
