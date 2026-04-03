import QuoteForm from '../components/QuoteForm'

function Contact() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="home-banner-section">
        <div
          className="home-banner-container inner-banner"
          style={{ backgroundImage: 'url(/theme-assets/bgr-home-banner.jpg)' }}
        >
          <div className="center-content">
            <div className="banner-content">
              <h3>We're Here to Help</h3>
              <h1>Contact Us</h1>
              <p>
                Reach out to discuss your property's towing and parking enforcement needs. We're available
                <strong> 24 hours a day, 7 days a week.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact Content ── */}
      <div className="center-content" style={{ padding: '80px 20px' }}>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-address" style={{ paddingTop: 40 }}>
              <h3>Get In Touch</h3>
              <p>
                Have a question about our services? Ready to start a parking enforcement program for your
                property? Fill out the form or call us directly.
              </p>
              <ul>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:9197909393">(919) 790-9393</a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:impound@integritytow.com" className="cnt-email">impound@integritytow.com</a>
                </li>
                <li>
                  <strong>Hours:</strong> Monday – Sunday, 24/7
                </li>
              </ul>
              <h4 style={{ marginTop: 32 }}>Service Areas</h4>
              <ul>
                <li>Raleigh, NC</li>
                <li>Durham, NC</li>
                <li>Chapel Hill, NC</li>
                <li>Greensboro, NC</li>
                <li>Winston-Salem, NC</li>
                <li>And surrounding Triangle &amp; Triad communities</li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <QuoteForm heading="Send Us a Message" defaultSubject="Contact Form" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
