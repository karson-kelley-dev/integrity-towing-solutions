function DurhamAuction() {
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
              <h3>Vehicle Auctions</h3>
              <h1>Durham Auction</h1>
              <p>
                Bid on impounded and recovered vehicles at our Durham location. Auctions are held
                regularly — call or check back for upcoming dates and listings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="center-content" style={{ padding: '80px 20px' }}>
        <div className="row">
          <div className="col-md-8">
            <h2>Durham Vehicle Auction</h2>
            <p>
              <strong>Location:</strong> 1025 Harvest Street, Durham, NC 27704
            </p>
            <p>
              ITS holds regular public auctions of impounded and unclaimed vehicles at our Durham
              facility. Vehicles are sold as-is. All winning bidders must provide a valid photo ID and
              payment at time of sale.
            </p>

            <h3>Auction Details</h3>
            <ul>
              <li>Auctions are open to the public</li>
              <li>Valid government-issued photo ID required to bid</li>
              <li>Payment due in full at time of purchase</li>
              <li>Vehicles sold as-is, no warranties expressed or implied</li>
              <li>Buyer responsible for towing or transport of purchased vehicle</li>
            </ul>

            <h3>Upcoming Auction Dates</h3>
            <p>
              Auction schedule and vehicle listings are updated regularly. Call us at{' '}
              <a href="tel:9197909393">(919) 790-9393</a> for the current schedule and available
              inventory.
            </p>
          </div>

          <div className="col-md-4">
            <div className="bg-light p-3" style={{ borderRadius: 8 }}>
              <h3>Auction Info</h3>
              <ul>
                <li><strong>Location:</strong> 1025 Harvest Street, Durham, NC 27704</li>
                <li><strong>Hours:</strong> By appointment / scheduled auction dates</li>
                <li><strong>Phone:</strong> <a href="tel:9197909393">(919) 790-9393</a></li>
              </ul>
              <p style={{ marginTop: 16 }}>
                <a href="tel:9197909393" className="lmore-btn-dark" style={{ display: 'block', textAlign: 'center' }}>
                  Call for Schedule
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DurhamAuction
