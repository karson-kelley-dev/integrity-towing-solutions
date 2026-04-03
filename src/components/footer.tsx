import { useNavigate } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'

const EMPLOYMENT_URL =
  'https://recruiting.paylocity.com/recruiting/jobs/All/c1bb61df-a5f3-4474-8acd-c589dceb0778/Integrity-Towing-Solutions?source=Indeed_Feed'

function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="container-vms footer-container">
      <div className="center-content">
        <div className="footer-col-area">
          <div className="footer-col widget_media_image">
            <img src={logoWhite} alt="Integrity Towing Solutions" />
          </div>
          <div className="footer-col">
            <h5>Locations</h5>
            <ul>
              <li>Raleigh / Durham, NC</li>
              <li>Greensboro, NC</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Business Hours</h5>
            <ul>
              <li>Monday – Sunday</li>
              <li>24 Hours / 7 Days a Week</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact Us</h5>
            <ul>
              <li><a href="tel:9197909393">(919) 790-9393</a></li>
              <li><a href="mailto:impound@integritytow.com">impound@integritytow.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Integrity Towing Solutions</p>
          <div className="footer-bottom-rgt">
            <ul className="menu">
              <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a></li>
              <li><a href="/services/private-property" onClick={(e) => { e.preventDefault(); navigate('/services/private-property') }}>Private Property</a></li>
              <li><a href="/services/emergency-response" onClick={(e) => { e.preventDefault(); navigate('/services/emergency-response') }}>Emergency Response</a></li>
              <li><a href="/services/mass-relocation" onClick={(e) => { e.preventDefault(); navigate('/services/mass-relocation') }}>Mass Relocation</a></li>
              <li><a href={EMPLOYMENT_URL} target="_blank" rel="noopener noreferrer">Employment</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact') }}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
