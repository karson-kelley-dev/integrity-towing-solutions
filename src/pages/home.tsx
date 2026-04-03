import { useNavigate } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

const services = [
  {
    icon: '/images/icon-ppi.png',
    title: 'Private Property Towing',
    description: 'Parking enforcement built for property managers — written authorization, clear documentation, and consistent processes that protect your property and residents.',
    path: '/services/private-property',
    btnLabel: 'Learn More',
  },
  {
    icon: '/images/icon-roadside.png',
    title: 'Emergency Response & Accident Scene Management',
    description: 'Fast, coordinated response for incidents and disabled vehicles — helping restore access, reduce risk, and keep traffic and cities moving.',
    path: '/services/emergency-response',
    btnLabel: 'Learn More',
  },
  {
    icon: '/images/icon-mass.png',
    title: 'Mass Relocation Towing Services',
    description: 'Efficient, organized towing support for large-scale moves and repositioning — planned logistics, clear communication, and minimal disruption for your site.',
    path: '/services/mass-relocation',
    btnLabel: 'Learn More',
  },
]

const testimonials = [
  { quote: '[PLACEHOLDER — Add client testimonial here]', name: '[Client Name]', source: 'Google Review' },
  { quote: '[PLACEHOLDER — Add client testimonial here]', name: '[Client Name]', source: 'Google Review' },
]

function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="home-banner-section">
        <div
          className="home-banner-container home-banner has-form"
          style={{ backgroundImage: 'url(/theme-assets/bgr-home-banner.jpg)' }}
        >
          <div className="center-content">
            <div className="row">
              <div className="banner-content mb-5 col-md-6">
                <div className="me-md-4">
                  <h3>Parking Management &amp; Towing Services</h3>
                  <h1>Parking Management<br />Done Right.</h1>
                  <p>
                    Serving the Triangle and Triad of North Carolina. When you choose ITS, you're choosing
                    a towing partner where <strong>reliability, compliance, and documentation</strong> are
                    the standard — not the exception.
                  </p>
                </div>
              </div>
              <div className="banner-form col-md-6 p-5">
                <h4 style={{ textAlign: 'center' }}>For 24 Hour Immediate Service:</h4>
                <p style={{ textAlign: 'center' }}>
                  <a className="lmore-btn-dark" href="tel:9197909393">Call: (919) 790-9393</a>
                </p>
                <QuoteForm heading="Request a Quote:" defaultSubject="General Inquiry" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <div className="container-vms our-services-container">
        <div className="center-content">
          <div className="our-services-area">
            <div className="our-services-top-cont">
              <h2>About Integrity Towing Solutions</h2>
              <p>
                ITS is committed to being your preferred towing and parking enforcement partner across the
                Triangle and Triad of North Carolina. With trained professionals, compliant processes, and
                data-driven operations, our mission is to bring accountability and reliability to parking
                enforcement — consistently, across every property we manage.
              </p>
            </div>
            <div className="our-services-col-area">
              {services.map(({ icon, title, description, path, btnLabel }) => (
                <div className="our-services-col" key={title}>
                  <div className="svs-icon">
                    <img src={icon} alt={title} />
                  </div>
                  <h5>{title}</h5>
                  <p>{description}</p>
                  <div className="svs-btn">
                    <a
                      className="lmore-btn"
                      href={path}
                      onClick={(e) => { e.preventDefault(); navigate(path) }}
                    >
                      {btnLabel}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="container testimonial-container">
        <div className="testimonial-slider-area">
          <div className="row">
            {testimonials.map(({ quote, name, source }, i) => (
              <div key={i} className="col-md-6">
                <div className="tst-item-cont">
                  <div className="tst-item-cont-info">
                    <div className="qut" />
                    <p>{quote}</p>
                    <div className="author">
                      <strong>{name}</strong>
                      <small>{source}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
