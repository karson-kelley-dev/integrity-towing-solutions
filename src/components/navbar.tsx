import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'

const EMPLOYMENT_URL =
  'https://recruiting.paylocity.com/recruiting/jobs/All/c1bb61df-a5f3-4474-8acd-c589dceb0778/Integrity-Towing-Solutions?source=Indeed_Feed'

const serviceLinks = [
  { label: 'Private Property Towing', path: '/services/private-property' },
  { label: 'Emergency Response & Accident Scene', path: '/services/emergency-response' },
  { label: 'Mass Relocation', path: '/services/mass-relocation' },
]

const auctionLinks = [
  { label: 'Raleigh', path: '/auction/raleigh' },
  { label: 'Durham', path: '/auction/durham' },
  { label: 'Greensboro', path: '/auction/greensboro' },
]

const btnSx = {
  color: 'rgba(255,255,255,0.9)',
  fontWeight: 700,
  fontSize: '0.82rem',
  letterSpacing: '0.3px',
  fontFamily: "'Saira', sans-serif",
  transition: 'color 0.2s ease',
  '&:hover': { color: 'rgba(255,255,255,0.7)', background: 'transparent' },
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null)
  const [auctionAnchor, setAuctionAnchor] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const handleNavClick = (path: string) => {
    navigate(path)
    setMobileOpen(false)
    setServicesAnchor(null)
    setAuctionAnchor(null)
  }

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={() => setMobileOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavClick('/')} sx={{ color: '#1D2B45' }}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        {serviceLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(link.path)}
              sx={{ color: '#1D2B45', pl: link.path === '/services' ? 2 : 4 }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ color: '#1D2B45' }}>
            <ListItemText primary="Auction" primaryTypographyProps={{ fontWeight: 700 }} />
          </ListItemButton>
        </ListItem>
        {auctionLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton onClick={() => handleNavClick(link.path)} sx={{ color: '#1D2B45', pl: 4 }}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavClick('/find-my-vehicle')} sx={{ color: '#1D2B45' }}>
            <ListItemText primary="Find My Vehicle" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href={EMPLOYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#1D2B45' }}
          >
            <ListItemText primary="Employment" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavClick('/contact')} sx={{ color: '#1D2B45' }}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#1D2B45',
        boxShadow: '0 2px 16px rgba(29, 43, 69, 0.3)',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: '0.4rem', px: '0 !important' }}>
          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img src={logoWhite} alt="Integrity Towing Solutions" style={{ height: '52px', width: 'auto' }} />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            <Button onClick={() => navigate('/')} sx={btnSx}>About</Button>

            <Button endIcon={<KeyboardArrowDownIcon />} onClick={(e) => setServicesAnchor(e.currentTarget)} sx={btnSx}>
              Services
            </Button>
            <Menu anchorEl={servicesAnchor} open={Boolean(servicesAnchor)} onClose={() => setServicesAnchor(null)} slotProps={{ paper: { sx: { mt: 1 } } }}>
              {serviceLinks.map((link) => (
                <MenuItem key={link.path} onClick={() => handleNavClick(link.path)} sx={{ fontFamily: "'Saira', sans-serif", fontSize: '0.9rem' }}>
                  {link.label}
                </MenuItem>
              ))}
            </Menu>

            <Button endIcon={<KeyboardArrowDownIcon />} onClick={(e) => setAuctionAnchor(e.currentTarget)} sx={btnSx}>
              Auction
            </Button>
            <Menu anchorEl={auctionAnchor} open={Boolean(auctionAnchor)} onClose={() => setAuctionAnchor(null)} slotProps={{ paper: { sx: { mt: 1 } } }}>
              {auctionLinks.map((link) => (
                <MenuItem key={link.path} onClick={() => handleNavClick(link.path)} sx={{ fontFamily: "'Saira', sans-serif", fontSize: '0.9rem' }}>
                  {link.label}
                </MenuItem>
              ))}
            </Menu>

            <Button onClick={() => navigate('/find-my-vehicle')} sx={btnSx}>Find My Vehicle</Button>
            <Button component="a" href={EMPLOYMENT_URL} target="_blank" rel="noopener noreferrer" sx={btnSx}>
              Employment
            </Button>
            <Button onClick={() => navigate('/contact')} sx={btnSx}>Contact</Button>
            <Button
              component="a"
              href="tel:9197909393"
              sx={{
                ...btnSx,
                ml: 1,
                background: '#ffffff',
                color: '#1D2B45',
                px: 2.5,
                py: 0.9,
                fontSize: '0.85rem',
                borderRadius: 1,
                '&:hover': { background: 'rgba(255,255,255,0.88)', color: '#1D2B45' },
              }}
            >
              (919) 790-9393
            </Button>
          </Box>

          <IconButton
            color="inherit"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'rgba(255,255,255,0.9)' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ display: { xs: 'block', md: 'none' } }}>
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Navbar
