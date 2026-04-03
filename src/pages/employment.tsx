import QuoteForm from '../components/QuoteForm'

function Employment() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="home-banner-section">
        <div
          className="home-banner-container has-form inner-banner"
          style={{ backgroundImage: 'url(/theme-assets/bgr-home-banner.jpg)' }}
        >
          <div className="center-content">
            <div className="row">
              <div className="banner-content mb-5 col-md-6">
                <div className="me-md-4">
                  <h3>Towers, Office Staff, Sales and More!</h3>
                  <h1>Employment</h1>
                  <p>
                    We're looking for talented individuals to join one of North Carolina's premier towing
                    and vehicle management companies. If you're driven, dependable, and ready to make a
                    difference — we want to hear from you.
                  </p>
                </div>
              </div>
              <div className="banner-form col-md-6 p-5">
                <h4 style={{ textAlign: 'center' }}>For Questions:</h4>
                <p style={{ textAlign: 'center' }}>
                  <a className="lmore-btn-dark" href="tel:9197909393">Call: (919) 790-9393</a>
                </p>
                <QuoteForm heading="Send Your Application:" defaultSubject="Employment Application" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── About strip ── */}
      <div className="container-vms our-services-container about-svs-container">
        <div className="center-content">
          <div className="about-top-cont">
            <h3>Start Your Career!</h3>
            <p>
              Join the best in the business in an exciting, fast-paced environment where you can thrive
              and make a difference. We are looking for confident, career-driven individuals who are
              committed to the success of our growing company. Fill out the form above or call us directly
              to learn about current openings.
            </p>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="center-content page_default_container">
        <div className="row justify-content-center">
          <div className="col-md-9 pe-md-4">
            <h2>Why Work at Integrity Towing Solutions?</h2>
            <p>
              ITS is a growing towing and parking enforcement company serving the Triangle and Triad
              regions of North Carolina. We operate 24/7 and take pride in delivering professional,
              reliable service across our markets. Our team is the backbone of everything we do.
            </p>

            <h3>Competitive Pay &amp; Benefits</h3>
            <p>
              We offer competitive compensation packages for qualified candidates. Our team members are
              valued and rewarded for their hard work and commitment.
            </p>

            <h3>Career Growth</h3>
            <p>
              We promote from within wherever possible. Whether you're starting out or looking to advance,
              ITS provides a path forward for motivated individuals.
            </p>

            <h3>Supportive Team Environment</h3>
            <p>
              Our operators, dispatchers, and office staff work together as a unit. You'll be supported
              from day one with training, clear expectations, and a team that has your back.
            </p>

            <h2>Open Positions</h2>

            <h3>Tow Truck Operators</h3>
            <ul>
              <li>Valid NC driver's license required (CDL preferred for heavy-duty)</li>
              <li>Experience with flatbed, wheel-lift, and/or heavy wrecker preferred</li>
              <li>Ability to work rotating shifts including nights and weekends</li>
              <li>Professional demeanor and clean driving record</li>
            </ul>

            <h3>Dispatch &amp; Office Staff</h3>
            <ul>
              <li>Strong communication and multi-tasking skills</li>
              <li>Experience in dispatch, customer service, or logistics a plus</li>
              <li>Computer proficiency required</li>
              <li>Ability to handle high-pressure, time-sensitive situations calmly</li>
            </ul>

            <h3>Sales &amp; Account Management</h3>
            <ul>
              <li>Experience in B2B sales or property management relationships preferred</li>
              <li>Self-motivated with strong relationship-building skills</li>
              <li>Familiarity with the Triangle/Triad commercial real estate market a plus</li>
            </ul>

            <p>
              To apply, fill out the form above or call us at{' '}
              <a href="tel:9197909393">(919) 790-9393</a>. You can also email your resume directly to{' '}
              <a href="mailto:impound@integritytow.com">impound@integritytow.com</a>.
            </p>
          </div>

          <div className="col-md-3">
            <div className="bg-light p-3" style={{ borderRadius: 8, position: 'sticky', top: 20 }}>
              <h3>Open Roles</h3>
              <ul>
                <li>Tow Truck Operator</li>
                <li>Heavy Wrecker Operator</li>
                <li>Dispatcher</li>
                <li>Office Staff</li>
                <li>Sales / Account Manager</li>
              </ul>
              <p style={{ marginTop: 16 }}>
                <a href="tel:9197909393" className="lmore-btn-dark" style={{ display: 'block', textAlign: 'center' }}>
                  (919) 790-9393
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Employment
