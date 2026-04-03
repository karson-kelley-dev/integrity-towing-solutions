import QuoteForm from '../../components/QuoteForm'

const sidebarItems = [
  'Construction Projects',
  'Real Estate Developments',
  'Event Planning',
  'Municipal Projects',
  'Corporate Relocations',
  'University & School Projects',
  'Parking Lot Resurfacing',
  'HOA Transitions & Renovations',
]

function MassRelocation() {
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
                  <h3>Construction Projects, Events &amp; Relocations</h3>
                  <h1>Mass Relocation<br />Towing Services</h1>
                  <p>
                    Need to relocate a large number of vehicles for a major project or event? ITS is a
                    <strong> North Carolina Mass Relocation Towing Company</strong> that offers efficient
                    and reliable services to handle large-scale vehicle relocations for your project needs.
                  </p>
                </div>
              </div>
              <div className="banner-form col-md-6 p-5">
                <h4 style={{ textAlign: 'center' }}>For 24 Hour Immediate Service:</h4>
                <p style={{ textAlign: 'center' }}>
                  <a className="lmore-btn-dark" href="tel:9197909393">Call: (919) 790-9393</a>
                </p>
                <QuoteForm heading="Let's plan your project and request a quote:" defaultSubject="Mass Relocation" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── About strip ── */}
      <div className="container-vms our-services-container about-svs-container">
        <div className="center-content">
          <div className="about-top-cont">
            <h3>The Right Partner for High-Volume Vehicle Moves</h3>
            <p>
              At ITS, our highly trained staff is dedicated to providing rapid and safe, damage-free services
              for large-scale vehicle relocations. Our primary concern is the safety and efficiency of your
              project operations. ITS helps you protect timelines, reduce risk, and keep operations moving.
            </p>
          </div>
        </div>
      </div>

      {/* ── Content + Sidebar ── */}
      <div className="center-content page_default_container">
        <div className="row justify-content-center">
          <div className="col-md-9 pe-md-4">
            <h2>Features of Our Vehicle Relocation Services</h2>

            <p>
              When it comes to large-scale projects requiring the relocation of multiple vehicles, the right
              partner is the difference between an orderly move and a logistical headache. ITS supports
              property teams, contractors, and event stakeholders with experienced operators, the right
              equipment, and a process built for high-volume coordination.
            </p>

            <h3>Advanced Equipment &amp; Technology</h3>
            <p>
              We utilize professional-grade towing equipment to ensure that every vehicle is handled with
              care. Our fleet allows us to manage various types of vehicles safely and efficiently, minimizing
              the risk of damage during transport.
            </p>

            <h3>Highly Skilled &amp; Certified Operators</h3>
            <p>
              Our team of towing operators is trained and experienced. They execute large moves with care,
              precision, and professionalism — handling even the most challenging towing scenarios.
            </p>

            <h3>24/7 Availability</h3>
            <p>
              Emergencies and last-minute changes can occur at any time. We offer flexible scheduling and
              around-the-clock availability, ensuring we are always ready when you need us.
            </p>

            <h2>Benefits of Choosing ITS</h2>

            <h3>Efficiency &amp; Reliability</h3>
            <p>
              Coordinated teams and clear execution keep relocations on schedule and minimize downtime.
              We pride ourselves on quick response times and the ability to handle large volumes efficiently.
            </p>

            <h3>Safety &amp; Site Security</h3>
            <p>
              Safety is our top priority. We adhere to stringent safety standards, protect both our team
              and your vehicles, and ensure optimal performance throughout every relocation.
            </p>

            <h3>Customized Solutions</h3>
            <p>
              We understand that each project has unique requirements. We offer solutions tailored to your
              site constraints, timeline, and stakeholder requirements — whether you need short-term storage,
              multi-stakeholder coordination, or specialized handling.
            </p>

            <h2>Tips for a Successful Project Move</h2>

            <h3>Plan Ahead</h3>
            <p>
              Confirm volume, timeline, towing windows, and approved drop locations early to keep the
              move smooth. Early planning helps ensure a seamless and efficient operation.
            </p>

            <h3>Communicate Clearly</h3>
            <p>
              Align stakeholders on where vehicles go, when towing occurs, and what signage/notifications
              are required. Clear communication helps prevent misunderstandings.
            </p>

            <h3>Coordinate Logistics</h3>
            <p>
              Define access points, staging areas, sequencing, and any permitting needs before execution
              begins. Proper logistics planning keeps the site running efficiently.
            </p>

            <h3>Monitor Progress</h3>
            <p>
              Stay aligned during the move with updates and a clear point of contact for adjustments.
              Real-time communication keeps the project on track.
            </p>

            <h3>Prioritize Safety</h3>
            <p>
              Ensure safe work zones, proper routing, and disciplined procedures throughout the project.
              Our team follows safety protocols at every step.
            </p>

            <p>
              Ready to plan your relocation project? Contact ITS at{' '}
              <a href="tel:9197909393">(919) 790-9393</a> to discuss your needs.
            </p>
          </div>

          <div className="col-md-3">
            <div className="bg-light p-3" style={{ borderRadius: 8, position: 'sticky', top: 20 }}>
              <h3>Project Types</h3>
              <ul>
                {sidebarItems.map((s) => <li key={s}>{s}</li>)}
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

export default MassRelocation
