import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import PhoneIcon from '@mui/icons-material/Phone'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Collapse from '@mui/material/Collapse'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Popper from '@mui/material/Popper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import itsIcon from '../assets/its-icon.png'
import logoDark from '../assets/logo.svg'
import itsIconWhite from '/images/icon-its-white.png'

const PORTAL_URL = 'https://portal.integritytow.com/login'
const EMPLOYMENT_URL =
  'https://recruiting.paylocity.com/recruiting/jobs/All/c1bb61df-a5f3-4474-8acd-c589dceb0778/Integrity-Towing-Solutions?source=Indeed_Feed'
const TEAL = '#6699BB'
const NAVY = '#1D2B45'
const DARK = '#0d1929'

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

// ─── Desktop dropdown with dark glass panel ────────────────────────────────
function DesktopDropdown({
  label, items, active, navigate,
}: {
  label: string
  items: { label: string; path: string }[]
  active: boolean
  navigate: (path: string) => void
}) {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open_ = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true) }
  const close = () => { closeTimer.current = setTimeout(() => setOpen(false), 160) }

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box onMouseEnter={open_} onMouseLeave={close} sx={{ display: 'inline-flex', position: 'relative' }}>
        <Button
          ref={anchorRef}
          endIcon={open ? <ExpandLessIcon sx={{ fontSize: '0.85rem !important', opacity: 0.7 }} /> : <ExpandMoreIcon sx={{ fontSize: '0.85rem !important', opacity: 0.7 }} />}
          sx={{
            color: active ? TEAL : 'rgba(255,255,255,0.82)',
            fontFamily: "'Saira', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            textTransform: 'none',
            letterSpacing: '0.01em',
            px: 1.5, py: 0.75,
            borderRadius: 1,
            minWidth: 0,
            position: 'relative',
            '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.06)' },
            '&::after': active ? {
              content: '""', position: 'absolute', bottom: 0, left: '12px', right: '12px',
              height: '2px', bgcolor: TEAL, borderRadius: '2px',
            } : {},
          }}
        >
          {label}
        </Button>

        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" sx={{ zIndex: 1400 }}>
          <Box
            onMouseEnter={open_}
            onMouseLeave={close}
            sx={{
              mt: 0.75,
              minWidth: 220,
              borderRadius: 2,
              overflow: 'hidden',
              background: 'rgba(13,25,41,0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}
          >
            {items.map(({ label: itemLabel, path }) => (
              <Box
                key={path}
                onClick={() => { setOpen(false); navigate(path) }}
                sx={{
                  px: 2.5, py: 1.5,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  '&:last-child': { borderBottom: 'none' },
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: "'Saira', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'background 0.15s, color 0.15s',
                  '&:hover': { bgcolor: 'rgba(102,153,187,0.1)', color: '#fff' },
                  '&:hover .nav-arrow': { opacity: 1, transform: 'translateX(0)' },
                }}
              >
                {itemLabel}
                <ArrowForwardIcon
                  className="nav-arrow"
                  sx={{ fontSize: 14, opacity: 0, transform: 'translateX(-4px)', transition: 'opacity 0.15s, transform 0.15s', color: TEAL }}
                />
              </Box>
            ))}
          </Box>
        </Popper>
      </Box>
    </ClickAwayListener>
  )
}

// ─── Nav link with active indicator ────────────────────────────────────────
function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: active ? TEAL : 'rgba(255,255,255,0.82)',
        fontFamily: "'Saira', sans-serif",
        fontWeight: 500,
        fontSize: '0.9rem',
        textTransform: 'none',
        letterSpacing: '0.01em',
        px: 1.5, py: 0.75,
        borderRadius: 1,
        minWidth: 0,
        position: 'relative',
        '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.06)' },
        '&::after': active ? {
          content: '""', position: 'absolute', bottom: 0, left: '12px', right: '12px',
          height: '2px', bgcolor: TEAL, borderRadius: '2px',
        } : {},
      }}
    >
      {label}
    </Button>
  )
}

// ─── Main Navbar ───────────────────────────────────────────────────────────
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [auctionOpen, setAuctionOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          zIndex: 1200,
          bgcolor: scrolled ? 'rgba(13,25,41,0.96)' : 'rgba(13,25,41,0.0)',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.3)' : 'none',
          transition: 'background 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        <Box sx={{ maxWidth: '1920px', mx: 'auto', width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar disableGutters sx={{ py: { xs: 0.75, md: 1 }, minHeight: { xs: 64, md: 72 } }}>

            {/* Logo */}
            <Box
              component="a"
              href="/"
              onClick={(e) => { e.preventDefault(); go('/') }}
              sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, mr: 3, textDecoration: 'none' }}
            >
              <Box
                component="img"
                src={logoDark}
                alt="Integrity Towing Solutions"
                sx={{ height: { xs: 36, md: 42 }, width: 'auto', filter: 'brightness(0) invert(1)', transition: 'opacity 0.2s', '&:hover': { opacity: 0.85 } }}
              />
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 4 }}>
              <NavLink label="Home" active={isActive('/')} onClick={() => go('/')} />
              <DesktopDropdown label="Services" items={SERVICES} active={isServicesActive} navigate={go} />
              <DesktopDropdown label="Auction" items={AUCTIONS} active={isAuctionActive} navigate={go} />
              {/* <NavLink label="Find My Vehicle" active={isActive('/find-my-vehicle')} onClick={() => go('/find-my-vehicle')} /> */}
              <Box
                component="a"
                href={EMPLOYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(255,255,255,0.82)', fontFamily: "'Saira', sans-serif", fontWeight: 500,
                  fontSize: '0.9rem', textDecoration: 'none', px: 1.5, py: 0.75, borderRadius: 1,
                  letterSpacing: '0.01em',
                  '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.06)' },
                }}
              >
                Employment
              </Box>
              <NavLink label="Contact" active={isActive('/contact')} onClick={() => go('/contact')} />
            </Box>

            {/* Desktop right */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2, ml: 'auto', flexShrink: 0 }}>
              {/* Portal */}
              <Box
                component="a"
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex', alignItems: 'center', gap: 1,
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px', px: 1.25, py: 0.6,
                  textDecoration: 'none',
                  bgcolor: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.2s, background 0.2s',
                  '&:hover': { borderColor: TEAL, bgcolor: 'rgba(102,153,187,0.08)' },
                }}
              >
                <Box component="img" src={itsIconWhite} alt="Portal" sx={{ height: 26, width: 'auto' }} />
                <Box sx={{ borderLeft: '1px solid rgba(255,255,255,0.12)', pl: 1 }}>
                  <Typography sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 700, fontSize: '0.62rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.1, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Client</Typography>
                  <Typography sx={{ fontFamily: "'Saira', sans-serif", fontWeight: 700, fontSize: '0.62rem', color: TEAL, lineHeight: 1.1, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Portal</Typography>
                </Box>
              </Box>

              {/* Phone */}
              <Box
                component="a"
                href="tel:9197909393"
                sx={{
                  display: 'flex', alignItems: 'center', gap: 0.75,
                  color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                  fontFamily: "'Saira', sans-serif", fontWeight: 600, fontSize: '0.9rem',
                  '&:hover': { color: TEAL },
                  transition: 'color 0.2s',
                }}
              >
                <PhoneIcon sx={{ fontSize: 16 }} />
                (919) 790-9393
              </Box>

              {/* CTA */}
              <Button
                variant="contained"
                size="medium"
                onClick={() => go('/contact')}
                sx={{
                  bgcolor: TEAL, color: '#fff', fontWeight: 700, px: 2.5, py: 0.9,
                  fontSize: '0.875rem',
                  boxShadow: '0 4px 14px rgba(102,153,187,0.35)',
                  '&:hover': { bgcolor: '#4D7A9A', boxShadow: '0 6px 20px rgba(102,153,187,0.45)' },
                  transition: 'all 0.2s',
                }}
              >
                Get a Quote
              </Button>
            </Box>

            {/* Mobile right */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, ml: 'auto', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="a"
                href="tel:9197909393"
                sx={{ display: 'flex', alignItems: 'center', color: TEAL, textDecoration: 'none' }}
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
        </Box>
      </AppBar>

      {/* ─── Mobile Drawer ─────────────────────────────────────────────────── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 'min(300px, calc(100vw - 24px))',
            bgcolor: DARK,
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      >
        {/* Drawer header */}
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          px: 2.5, py: 2.25,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <Box component="img" src={logoDark} alt="ITS" sx={{ height: 34, width: 'auto', filter: 'brightness(0) invert(1)' }} />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'rgba(255,255,255,0.6)', p: 0.75, '&:hover': { color: '#fff' } }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Nav items */}
        <List disablePadding sx={{ flex: 1 }}>
          {[
            { label: 'Home', action: () => go('/') },
          ].map(({ label, action }) => (
            <Box key={label}>
              <ListItemButton onClick={action} sx={{
                py: 1.75, px: 3,
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.04)' },
              }}>
                <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 600, color: '#fff', fontFamily: "'Saira', sans-serif", fontSize: '0.95rem' }} />
              </ListItemButton>
            </Box>
          ))}

          {/* Services */}
          <ListItemButton onClick={() => setServicesOpen(!servicesOpen)} sx={{
            py: 1.75, px: 3, borderBottom: '1px solid rgba(255,255,255,0.05)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.04)' },
          }}>
            <ListItemText primary="Services" primaryTypographyProps={{ fontWeight: 600, color: '#fff', fontFamily: "'Saira', sans-serif", fontSize: '0.95rem' }} />
            {servicesOpen ? <ExpandLessIcon sx={{ color: TEAL, fontSize: 18 }} /> : <ExpandMoreIcon sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 18 }} />}
          </ListItemButton>
          <Collapse in={servicesOpen}>
            {SERVICES.map(({ label, path }) => (
              <ListItemButton key={path} onClick={() => go(path)} sx={{
                py: 1.25, pl: 5, pr: 3,
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                bgcolor: 'rgba(0,0,0,0.2)',
                '&:hover': { bgcolor: 'rgba(102,153,187,0.08)' },
              }}>
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: TEAL, mr: 1.5, flexShrink: 0 }} />
                <ListItemText primary={label} primaryTypographyProps={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontFamily: "'Saira', sans-serif" }} />
              </ListItemButton>
            ))}
          </Collapse>

          {/* Auction */}
          <ListItemButton onClick={() => setAuctionOpen(!auctionOpen)} sx={{
            py: 1.75, px: 3, borderBottom: '1px solid rgba(255,255,255,0.05)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.04)' },
          }}>
            <ListItemText primary="Auction" primaryTypographyProps={{ fontWeight: 600, color: '#fff', fontFamily: "'Saira', sans-serif", fontSize: '0.95rem' }} />
            {auctionOpen ? <ExpandLessIcon sx={{ color: TEAL, fontSize: 18 }} /> : <ExpandMoreIcon sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 18 }} />}
          </ListItemButton>
          <Collapse in={auctionOpen}>
            {AUCTIONS.map(({ label, path }) => (
              <ListItemButton key={path} onClick={() => go(path)} sx={{
                py: 1.25, pl: 5, pr: 3,
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                bgcolor: 'rgba(0,0,0,0.2)',
                '&:hover': { bgcolor: 'rgba(102,153,187,0.08)' },
              }}>
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: TEAL, mr: 1.5, flexShrink: 0 }} />
                <ListItemText primary={label} primaryTypographyProps={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontFamily: "'Saira', sans-serif" }} />
              </ListItemButton>
            ))}
          </Collapse>

          {[
            // { label: 'Find My Vehicle', action: () => go('/find-my-vehicle') },
            { label: 'Contact', action: () => go('/contact') },
          ].map(({ label, action }) => (
            <Box key={label}>
              <ListItemButton onClick={action} sx={{
                py: 1.75, px: 3, borderBottom: '1px solid rgba(255,255,255,0.05)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.04)' },
              }}>
                <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 600, color: '#fff', fontFamily: "'Saira', sans-serif", fontSize: '0.95rem' }} />
              </ListItemButton>
            </Box>
          ))}
          <Box>
            <ListItemButton
              component="a"
              href={EMPLOYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                py: 1.75, px: 3, borderBottom: '1px solid rgba(255,255,255,0.05)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.04)' },
              }}
            >
              <ListItemText primary="Employment" primaryTypographyProps={{ fontWeight: 600, color: '#fff', fontFamily: "'Saira', sans-serif", fontSize: '0.95rem' }} />
              <OpenInNewIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.3)' }} />
            </ListItemButton>
          </Box>
        </List>

        {/* Drawer footer actions */}
        <Box sx={{ px: 3, pt: 3, pb: 1, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            component="a"
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Box component="img" src={itsIcon} alt="ITS" sx={{ height: 20, width: 'auto' }} />}
            endIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />}
            sx={{
              borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)',
              fontWeight: 700, mb: 1.5, justifyContent: 'space-between',
              '&:hover': { borderColor: TEAL, color: '#fff', bgcolor: 'rgba(102,153,187,0.08)' },
              transition: 'all 0.2s',
            }}
          >
            Client Portal
          </Button>
          <Button
            fullWidth variant="contained" size="large" href="tel:9197909393" component="a"
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: NAVY, color: '#fff', fontWeight: 700, mb: 1.5, boxShadow: 'none', '&:hover': { bgcolor: '#2d4060' } }}
          >
            (919) 790-9393
          </Button>
          <Button
            fullWidth variant="contained" size="large" onClick={() => go('/contact')}
            sx={{ bgcolor: TEAL, color: '#fff', fontWeight: 700, boxShadow: 'none', '&:hover': { bgcolor: '#4D7A9A' } }}
          >
            Get a Quote
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
