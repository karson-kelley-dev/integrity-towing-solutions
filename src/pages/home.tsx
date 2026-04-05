import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const [tstIndex, setTstIndex] = useState(0)

  const prev = () => setTstIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setTstIndex((i) => (i + 1) % testimonials.length)

  const { quote, name, source } = testimonials[tstIndex]

  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="home-banner-section">
        <div
          className="home-banner-container home-banner"
          style={{ backgroundImage: 'url(/theme-assets/bgr-home-banner.jpg)' }}
        >
          <div className="center-content">
            <div className="banner-content">
              <h3>Parking Management &amp; Towing Services</h3>
              <h1>Parking Management<br />Done Right.</h1>
              <p>
                ITS is committed to being your preferred towing and parking enforcement partner across the
                Triangle and Triad of North Carolina. With trained professionals, compliant processes, and
                data-driven operations, our mission is to bring accountability and reliability to parking
                enforcement — consistently, across every property we manage.
              </p>
              <p style={{ marginTop: 24 }}>
                <a className="lmore-btn-dark" href="tel:9197909393">Call: (919) 790-9393</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <div className="container-vms our-services-container">
        <div className="center-content">
          <div className="our-services-area">
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
        <div className="testimonial-slider-area" style={{ position: 'relative' }}>
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              background: `#fff url(/theme-assets/bgr-testimonial-prev.png) no-repeat center center / 19px 16px`,
              width: 50,
              height: 50,
              border: '2px solid #1D2B45',
              borderRadius: '50%',
              position: 'absolute',
              left: -10,
              top: '55%',
              transform: 'translateY(-55%)',
              cursor: 'pointer',
              zIndex: 10,
            }}
          />

          {/* Single testimonial card */}
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

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              background: `#fff url(/theme-assets/bgr-testimonial-prev.png) no-repeat center center / 19px 16px`,
              width: 50,
              height: 50,
              border: '2px solid #1D2B45',
              borderRadius: '50%',
              position: 'absolute',
              right: -10,
              top: '55%',
              transform: 'translateY(-55%) rotate(180deg)',
              cursor: 'pointer',
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
