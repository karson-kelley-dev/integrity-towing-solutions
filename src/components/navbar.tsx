import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logoDark from '../assets/logo.svg'

const EMPLOYMENT_URL =
  'https://recruiting.paylocity.com/recruiting/jobs/All/c1bb61df-a5f3-4474-8acd-c589dceb0778/Integrity-Towing-Solutions?source=Indeed_Feed'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [auctionOpen, setAuctionOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  const go = (path: string) => {
    navigate(path)
    setMobileOpen(false)
    setServicesOpen(false)
    setAuctionOpen(false)
  }

  return (
    <>
      <header className={`container-vms header-container${isHome ? '' : ' inner-header'}`}>
        <div className="header-area">
          <div className="logo">
            <a href="/" onClick={(e) => { e.preventDefault(); go('/') }}>
              <img src={logoDark} alt="Integrity Towing Solutions" />
            </a>
          </div>
          <div className="header-right">
            {/* Desktop menu */}
            <div className="main-menu d-none d-lg-block">
              <ul className="menu">
                <li className={location.pathname === '/' ? 'current-menu-item' : ''}>
                  <a href="/" onClick={(e) => { e.preventDefault(); go('/') }}>About</a>
                </li>
                <li className={`menu-item-has-children${location.pathname.startsWith('/services') ? ' current-page-ancestor' : ''}`}>
                  <a href="#" onClick={(e) => e.preventDefault()}>Services</a>
                  <ul className="sub-menu">
                    <li className={location.pathname === '/services/private-property' ? 'current-menu-item' : ''}>
                      <a href="/services/private-property" onClick={(e) => { e.preventDefault(); go('/services/private-property') }}>Private Property Towing</a>
                    </li>
                    <li className={location.pathname === '/services/emergency-response' ? 'current-menu-item' : ''}>
                      <a href="/services/emergency-response" onClick={(e) => { e.preventDefault(); go('/services/emergency-response') }}>Emergency Response</a>
                    </li>
                    <li className={location.pathname === '/services/mass-relocation' ? 'current-menu-item' : ''}>
                      <a href="/services/mass-relocation" onClick={(e) => { e.preventDefault(); go('/services/mass-relocation') }}>Mass Relocation</a>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item-has-children${location.pathname.startsWith('/auction') ? ' current-page-ancestor' : ''}`}>
                  <a href="#" onClick={(e) => e.preventDefault()}>Auction</a>
                  <ul className="sub-menu">
                    <li className={location.pathname === '/auction/raleigh' ? 'current-menu-item' : ''}>
                      <a href="/auction/raleigh" onClick={(e) => { e.preventDefault(); go('/auction/raleigh') }}>Raleigh</a>
                    </li>
                    <li className={location.pathname === '/auction/durham' ? 'current-menu-item' : ''}>
                      <a href="/auction/durham" onClick={(e) => { e.preventDefault(); go('/auction/durham') }}>Durham</a>
                    </li>
                    <li className={location.pathname === '/auction/greensboro' ? 'current-menu-item' : ''}>
                      <a href="/auction/greensboro" onClick={(e) => { e.preventDefault(); go('/auction/greensboro') }}>Greensboro</a>
                    </li>
                  </ul>
                </li>
                <li className={location.pathname === '/find-my-vehicle' ? 'current-menu-item' : ''}>
                  <a href="/find-my-vehicle" onClick={(e) => { e.preventDefault(); go('/find-my-vehicle') }}>Find My Vehicle</a>
                </li>
                <li>
                  <a href={EMPLOYMENT_URL} target="_blank" rel="noopener noreferrer">Employment</a>
                </li>
                <li className={location.pathname === '/contact' ? 'current-menu-item' : ''}>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); go('/contact') }}>Contact</a>
                </li>
                <li className="menu-contact">
                  <a href="tel:9197909393">(919) 790-9393</a>
                </li>
              </ul>
            </div>

            {/* Mobile hamburger */}
            <button
              className="d-lg-none hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
              aria-label="Open menu"
            >
              <span style={{ display: 'block', width: 24, height: 2, background: '#fff', marginBottom: 5 }} />
              <span style={{ display: 'block', width: 24, height: 2, background: '#fff', marginBottom: 5 }} />
              <span style={{ display: 'block', width: 24, height: 2, background: '#fff' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, display: 'flex' }}>
          <div style={{ flex: 1, background: 'rgba(0,0,0,0.5)' }} onClick={() => setMobileOpen(false)} />
          <div style={{ width: 280, background: '#fff', overflowY: 'auto', padding: '20px 0' }}>
            <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block', marginLeft: 'auto', padding: '0 20px 16px', fontSize: 22, color: '#1D2B45' }}>✕</button>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[{ label: 'About', path: '/' }].map(({ label, path }) => (
                  <li key={path} style={{ borderBottom: '1px solid #eee' }}>
                    <a href={path} onClick={(e) => { e.preventDefault(); go(path) }} style={{ display: 'block', padding: '14px 20px', color: '#1D2B45', fontFamily: 'Saira, sans-serif', fontWeight: 600 }}>{label}</a>
                  </li>
                ))}
                <li style={{ borderBottom: '1px solid #eee' }}>
                  <button onClick={() => setServicesOpen(!servicesOpen)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '14px 20px', color: '#1D2B45', fontFamily: 'Saira, sans-serif', fontWeight: 600, fontSize: 18, cursor: 'pointer' }}>
                    Services {servicesOpen ? '▲' : '▼'}
                  </button>
                  {servicesOpen && (
                    <ul style={{ listStyle: 'none', padding: '0 0 0 20px', margin: 0, background: '#f9f9f9' }}>
                      {[
                        { label: 'Private Property Towing', path: '/services/private-property' },
                        { label: 'Emergency Response', path: '/services/emergency-response' },
                        { label: 'Mass Relocation', path: '/services/mass-relocation' },
                      ].map(({ label, path }) => (
                        <li key={path}>
                          <a href={path} onClick={(e) => { e.preventDefault(); go(path) }} style={{ display: 'block', padding: '10px 20px', color: '#1D2B45', fontFamily: 'Saira, sans-serif' }}>{label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li style={{ borderBottom: '1px solid #eee' }}>
                  <button onClick={() => setAuctionOpen(!auctionOpen)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '14px 20px', color: '#1D2B45', fontFamily: 'Saira, sans-serif', fontWeight: 600, fontSize: 18, cursor: 'pointer' }}>
                    Auction {auctionOpen ? '▲' : '▼'}
                  </button>
                  {auctionOpen && (
                    <ul style={{ listStyle: 'none', padding: '0 0 0 20px', margin: 0, background: '#f9f9f9' }}>
                      {[
                        { label: 'Raleigh', path: '/auction/raleigh' },
                        { label: 'Durham', path: '/auction/durham' },
                        { label: 'Greensboro', path: '/auction/greensboro' },
                      ].map(({ label, path }) => (
                        <li key={path}>
                          <a href={path} onClick={(e) => { e.preventDefault(); go(path) }} style={{ display: 'block', padding: '10px 20px', color: '#1D2B45', fontFamily: 'Saira, sans-serif' }}>{label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {[
                  { label: 'Find My Vehicle', path: '/find-my-vehicle' },
                  { label: 'Contact', path: '/contact' },
                ].map(({ label, path }) => (
                  <li key={path} style={{ borderBottom: '1px solid #eee' }}>
                    <a href={path} onClick={(e) => { e.preventDefault(); go(path) }} style={{ display: 'block', padding: '14px 20px', color: '#1D2B45', fontFamily: 'Saira, sans-serif', fontWeight: 600 }}>{label}</a>
                  </li>
                ))}
                <li style={{ borderBottom: '1px solid #eee' }}>
                  <a href={EMPLOYMENT_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '14px 20px', color: '#1D2B45', fontFamily: 'Saira, sans-serif', fontWeight: 600 }}>Employment</a>
                </li>
                <li>
                  <a href="tel:9197909393" style={{ display: 'block', padding: '14px 20px', color: '#0057A5', fontFamily: 'Saira, sans-serif', fontWeight: 700 }}>(919) 790-9393</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
