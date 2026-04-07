import { useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PhoneIcon from '@mui/icons-material/Phone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import logoDark from '../assets/logo.svg'

const EMPLOYMENT_URL =
  'https://recruiting.paylocity.com/recruiting/jobs/All/c1bb61df-a5f3-4474-8acd-c589dceb0778/Integrity-Towing-Solutions?source=Indeed_Feed'

const SERVICES = [
  { label: 'Private Property Towing', path: '/services/private-property' },
  { label: 'Emergency Response', path: '/services/emergency-response' },
  { label: 'Mass Relocation', path: '/services/mass-relocation' },
]

const AUCTIONS = [
  { label: 'Raleigh', path: '/auction/raleigh' },
  { label: 'Durham', path: '/auction/durham' },
  { label: 'Greensboro', path: '/auction/greensboro' },
]

const NAV_LINK_SX = {
  color: 'rgba(255,255,255,0.88)',
  fontFamily: "'Saira', sans-serif",
  fontWeight: 500,
  fontSize: '0.9375rem',
  textTransform: 'none',
  letterSpacing: '0.01em',
  px: 1.5,
  py: 0.75,
  borderRadius: 1,
  minWidth: 0,
  '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
}

interface DropdownMenuProps {
  label: string
  items: { label: string; path: string }[]
  active: boolean
  navigate: (path: string) => void
  closeDrawer?: () => void
}

function DesktopDropdown({ label, items, active, navigate }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  let closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ display: 'inline-flex' }}>
      <Button
        ref={anchorRef}
        endIcon={open ? <ExpandLessIcon sx={{ fontSize: '1rem !important' }} /> : <ExpandMoreIcon sx={{ fontSize: '1rem !important' }} />}
        sx={{
          ...NAV_LINK_SX,
          color: active ? '#3EAACC' : 'rgba(255,255,255,0.88)',
          '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
        }}
      >
        {label}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" sx={{ zIndex: 1300 }}>
        <Paper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          elevation={8}
          sx={{ mt: 0.5, minWidth: 220, borderRadius: 2, overflow: 'hidden' }}
        >
          <MenuList dense disablePadding>
            {items.map(({ label: itemLabel, path }) => (
              <MenuItem
                key={path}
                onClick={() => { setOpen(false); navigate(path) }}
                sx={{
                  fontFamily: "'Saira', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  py: 1.25,
                  px: 2.5,
                  color: '#1D2B45',
                  '&:hover': { bgcolor: '#f0f7ff', color: '#0057A5' },
                }}
              >
                {itemLabel}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  )
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [auctionOpen, setAuctionOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const go = (path: string) => {
    navigate(path)
    setDrawerOpen(false)
    setServicesOpen(false)
    setAuctionOpen(false)
  }

  const isActive = (path: string) => location.pathname === path
  const isServicesActive = location.pathname.startsWith('/services')
  const isAuctionActive = location.pathname.startsWith('/auction')

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: '#1D2B45', zIndex: 1200 }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 0.5, minHeight: { xs: 64, md: 70 } }}>
            {/* Logo */}
            <Box
              component="a"
              href="/"
              onClick={(e) => { e.preventDefault(); go('/') }}
              sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, mr: 3 }}
            >
              <Box
                component="img"
                src={logoDark}
                alt="Integrity Towing Solutions"
                sx={{ height: { xs: 38, md: 44 }, width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', flex: 1, gap: 0.5 }}>
              <Button
                sx={{ ...NAV_LINK_SX, color: isActive('/') ? '#3EAACC' : 'rgba(255,255,255,0.88)' }}
                onClick={() => go('/')}
              >
                Home
              </Button>

              <DesktopDropdown
                label="Services"
                items={SERVICES}
                active={isServicesActive}
                navigate={go}
              />

              <DesktopDropdown
                label="Auction"
                items={AUCTIONS}
                active={isAuctionActive}
                navigate={go}
              />

              <Button
                sx={{ ...NAV_LINK_SX, color: isActive('/find-my-vehicle') ? '#3EAACC' : 'rgba(255,255,255,0.88)' }}
                onClick={() => go('/find-my-vehicle')}
              >
                Find My Vehicle
              </Button>

              <Button
                component="a"
                href={EMPLOYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...NAV_LINK_SX }}
              >
                Employment
              </Button>

              <Button
                sx={{ ...NAV_LINK_SX, color: isActive('/contact') ? '#3EAACC' : 'rgba(255,255,255,0.88)' }}
                onClick={() => go('/contact')}
              >
                Contact
              </Button>
            </Box>

            {/* Desktop right: phone + CTA */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2, ml: 'auto', flexShrink: 0 }}>
              <Box
                component="a"
                href="tel:9197909393"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  color: 'rgba(255,255,255,0.88)',
                  textDecoration: 'none',
                  fontFamily: "'Saira', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  '&:hover': { color: '#3EAACC', textDecoration: 'none' },
                }}
              >
                <PhoneIcon sx={{ fontSize: 18 }} />
                (919) 790-9393
              </Box>
              <Button
                variant="contained"
                size="medium"
                onClick={() => go('/contact')}
                sx={{
                  bgcolor: '#3EAACC',
                  color: '#fff',
                  fontWeight: 700,
                  px: 2.5,
                  py: 1,
                  '&:hover': { bgcolor: '#34919e' },
                  boxShadow: 'none',
                }}
              >
                Get a Quote
              </Button>
            </Box>

            {/* Mobile hamburger */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, ml: 'auto', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="a"
                href="tel:9197909393"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#3EAACC',
                  textDecoration: 'none',
                }}
              >
                <PhoneIcon sx={{ fontSize: 22 }} />
              </Box>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: '#fff', p: 1 }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 300, bgcolor: '#fff' } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, py: 2, bgcolor: '#1D2B45' }}>
          <Box
            component="img"
            src={logoDark}
            alt="Integrity Towing Solutions"
            sx={{ height: 36, width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding>
          <ListItemButton onClick={() => go('/')} sx={{ py: 1.5, px: 3 }}>
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600, color: '#1D2B45' }} />
          </ListItemButton>
          <Divider />

          {/* Services */}
          <ListItemButton onClick={() => setServicesOpen(!servicesOpen)} sx={{ py: 1.5, px: 3 }}>
            <ListItemText primary="Services" primaryTypographyProps={{ fontWeight: 600, color: '#1D2B45' }} />
            {servicesOpen ? <ExpandLessIcon sx={{ color: '#1D2B45' }} /> : <ExpandMoreIcon sx={{ color: '#1D2B45' }} />}
          </ListItemButton>
          <Collapse in={servicesOpen}>
            {SERVICES.map(({ label, path }) => (
              <ListItemButton key={path} onClick={() => go(path)} sx={{ py: 1.25, pl: 5, bgcolor: '#f8f9fa' }}>
                <ListItemText primary={label} primaryTypographyProps={{ fontSize: '0.9rem', color: '#4a5568' }} />
              </ListItemButton>
            ))}
          </Collapse>
          <Divider />

          {/* Auction */}
          <ListItemButton onClick={() => setAuctionOpen(!auctionOpen)} sx={{ py: 1.5, px: 3 }}>
            <ListItemText primary="Auction" primaryTypographyProps={{ fontWeight: 600, color: '#1D2B45' }} />
            {auctionOpen ? <ExpandLessIcon sx={{ color: '#1D2B45' }} /> : <ExpandMoreIcon sx={{ color: '#1D2B45' }} />}
          </ListItemButton>
          <Collapse in={auctionOpen}>
            {AUCTIONS.map(({ label, path }) => (
              <ListItemButton key={path} onClick={() => go(path)} sx={{ py: 1.25, pl: 5, bgcolor: '#f8f9fa' }}>
                <ListItemText primary={label} primaryTypographyProps={{ fontSize: '0.9rem', color: '#4a5568' }} />
              </ListItemButton>
            ))}
          </Collapse>
          <Divider />

          <ListItemButton onClick={() => go('/find-my-vehicle')} sx={{ py: 1.5, px: 3 }}>
            <ListItemText primary="Find My Vehicle" primaryTypographyProps={{ fontWeight: 600, color: '#1D2B45' }} />
          </ListItemButton>
          <Divider />

          <ListItemButton component="a" href={EMPLOYMENT_URL} target="_blank" rel="noopener noreferrer" sx={{ py: 1.5, px: 3 }}>
            <ListItemText primary="Employment" primaryTypographyProps={{ fontWeight: 600, color: '#1D2B45' }} />
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={() => go('/contact')} sx={{ py: 1.5, px: 3 }}>
            <ListItemText primary="Contact" primaryTypographyProps={{ fontWeight: 600, color: '#1D2B45' }} />
          </ListItemButton>
          <Divider />
        </List>

        <Box sx={{ p: 3, mt: 'auto' }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            href="tel:9197909393"
            component="a"
            startIcon={<PhoneIcon />}
            sx={{
              bgcolor: '#1D2B45',
              color: '#fff',
              fontWeight: 700,
              mb: 1.5,
              '&:hover': { bgcolor: '#2d4060' },
              boxShadow: 'none',
            }}
          >
            (919) 790-9393
          </Button>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => go('/contact')}
            sx={{
              bgcolor: '#3EAACC',
              color: '#fff',
              fontWeight: 700,
              '&:hover': { bgcolor: '#34919e' },
              boxShadow: 'none',
            }}
          >
            Get a Quote
          </Button>
        </Box>

        <Typography sx={{ textAlign: 'center', pb: 2, color: '#9ca3af', fontSize: '0.8rem' }}>
          Available 24/7 — (919) 790-9393
        </Typography>
      </Drawer>
    </>
  )
}
