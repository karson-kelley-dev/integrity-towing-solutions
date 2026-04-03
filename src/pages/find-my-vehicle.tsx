function FindMyVehicle() {
  return (
    <>
      <div className="home-banner-section">
        <div
          className="home-banner-container inner-banner"
          style={{ backgroundImage: 'url(/theme-assets/bgr-home-banner.jpg)' }}
        >
          <div className="center-content">
            <div className="banner-content">
              <h3>Vehicle Lookup &amp; Retrieval</h3>
              <h1>Find My Vehicle</h1>
              <p>
                If your vehicle was towed by Integrity Towing Solutions, use the link below to locate it,
                or call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="center-content" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Locate Your Vehicle</h2>
        <p style={{ maxWidth: 600, margin: '0 auto 32px auto' }}>
          Use our online lookup portal or call our 24/7 line to find out where your vehicle is being held
          and how to retrieve it.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            className="lmore-btn-dark"
            href="https://portal.integritytow.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Vehicle Lookup Portal
          </a>
          <a className="lmore-btn" href="tel:9197909393">
            Call (919) 790-9393
          </a>
        </div>
        <div style={{ marginTop: 48 }}>
          <h3>What to Bring for Vehicle Retrieval</h3>
          <ul style={{ listStyle: 'disc', maxWidth: 500, margin: '20px auto', textAlign: 'left' }}>
            <li>Valid government-issued photo ID</li>
            <li>Proof of vehicle ownership (title or registration)</li>
            <li>Payment for towing and storage fees</li>
            <li>Authorization paperwork (if retrieving on behalf of owner)</li>
          </ul>
          <p>
            Questions? Call us at <a href="tel:9197909393">(919) 790-9393</a> — we're available 24/7.
          </p>
        </div>
      </div>
    </>
  )
}

export default FindMyVehicle
