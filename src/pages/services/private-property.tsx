import QuoteForm from '../../components/QuoteForm'

const serviceCards = [
  { icon: '/images/icon-ppi.png', title: 'Property Manager Portal', description: 'Real-time visibility into parking trends, issues, and violations — plus a centralized place to track and manage every parking enforcement request.' },
  { icon: '/images/icon-custom-policies.png', title: 'Custom Program Tailored for Your Community', description: 'A parking enforcement plan built around your property type, resident flow, and problem areas — not a one-size-fits-all template.' },
  { icon: '/images/icon-roadside.png', title: 'Signage & Install', description: 'Professional, compliant signage — assessed for your layout and installed so expectations are clear and enforcement is defensible.' },
  { icon: '/images/icon-account-manager.png', title: 'Account Manager', description: 'A dedicated point of contact who knows your property, helps manage updates, and keeps the program running smoothly.' },
  { icon: '/images/icon-immediate-towing.png', title: 'Immediate Towing', description: 'When violations impact safety, access, or operations, we respond quickly to remove unauthorized vehicles and restore order.' },
  { icon: '/images/icon-parking-permits.png', title: 'Parking Permits', description: 'A structured permit process that helps residents and guests park correctly and reduces confusion, disputes, and unnecessary escalations.' },
]

const sidebarServices = [
  'Private Property Impound',
  'Signage & Install',
  'Custom Enforcement Programs',
  'Parking Permits',
  'Property Manager Portal',
  'Account Manager Support',
  'Immediate Towing (24/7)',
  'Multi-Property Portfolios',
]

function PrivatePropertyTowing() {
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
                  <h3>HOAs, Apartment Buildings, Commercial &amp; More</h3>
                  <h1>Private Property Towing<br />in North Carolina</h1>
                  <p>
                    When unauthorized vehicles park on your property, ITS will remove them with written
                    authorization, proper documentation, and consistent processes. Our mission is to keep
                    your property clear while <strong>putting you in control.</strong>
                  </p>
                </div>
              </div>
              <div className="banner-form col-md-6 p-5">
                <QuoteForm heading="Interested in us servicing your property?" defaultSubject="Private Property Towing" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="container-vms our-services-container">
        <div className="center-content">
          <div className="our-services-area">
            <div className="our-services-top-cont">
              <h2>Built for Property Managers (Not Just Tows)</h2>
              <p>
                When parking violations become the norm, your property pays the price — lost spaces for
                residents and guests, increased frustration, and avoidable safety and access issues.
                ITS provides private property towing built for property managers who need consistent
                enforcement without unnecessary drama.
              </p>
            </div>
            <div className="our-services-col-area">
              {serviceCards.map(({ icon, title, description }) => (
                <div className="our-services-col" key={title}>
                  <div className="svs-icon">
                    <img src={icon} alt={title} />
                  </div>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content + Sidebar ── */}
      <div className="center-content page_default_container">
        <div className="row justify-content-center">
          <div className="col-md-9 pe-md-4">
            <h2>Why ITS for Private Property Towing in North Carolina</h2>

            <p>
              When it comes to reliable private property towing services across the Triangle and Triad,
              ITS is your go-to partner. We specialize in delivering towing solutions that prioritize
              compliance, consistency, and clear communication for property owners and managers.
            </p>

            <h3>Partner, Not Vendor</h3>
            <ul>
              <li>We take time to understand your property and build an enforcement program that fits.</li>
              <li>Consistent communication with your team — not just when problems arise.</li>
            </ul>

            <h3>Defensible Process</h3>
            <ul>
              <li>Every tow is grounded in written authorization, proper signage, and NC statutory compliance.</li>
              <li>Documentation that stands up to questions, disputes, and reviews.</li>
            </ul>

            <h3>Consistent Execution</h3>
            <ul>
              <li>Same process, same standards, week after week across every property we manage.</li>
              <li>Predictable enforcement that residents and guests come to understand.</li>
            </ul>

            <h3>Multi-Market Scale</h3>
            <ul>
              <li>Infrastructure across Raleigh, Durham, Chapel Hill, and Greensboro.</li>
              <li>One consistent approach across multi-property portfolios.</li>
            </ul>

            <h3>Transparent Operations</h3>
            <ul>
              <li>Clients always know what is happening on their properties.</li>
              <li>Nothing falls through the cracks — every action is documented.</li>
            </ul>

            <h3>Dedicated to Private Property</h3>
            <ul>
              <li>ITS focuses exclusively on private property impound.</li>
              <li>Data-driven operations that improve enforcement effectiveness over time.</li>
            </ul>

            <h2>Types of Properties We Serve</h2>
            <p>
              ITS serves a wide range of private property types across the Triangle and Triad.
              Whether you manage a single complex or a large portfolio, we bring consistent standards
              and clear processes to every site.
            </p>
            <ul>
              <li>Apartment Communities</li>
              <li>HOA Communities</li>
              <li>Commercial Properties</li>
              <li>Retail Shopping Centers</li>
              <li>Office Parks</li>
              <li>Mixed-Use Developments</li>
              <li>Medical / Healthcare Facilities</li>
              <li>Hotels &amp; Hospitality</li>
              <li>Student Housing</li>
              <li>Storage Facilities</li>
              <li>Industrial Properties</li>
              <li>Restaurant &amp; Dining Complexes</li>
              <li>Sports &amp; Entertainment Venues</li>
              <li>Government Properties</li>
              <li>Educational Campuses</li>
              <li>Senior Living Communities</li>
              <li>Condominium Complexes</li>
              <li>Parking Decks &amp; Garages</li>
            </ul>

            <p>
              Property managers choose ITS because we operate like a partner, not a vendor. We take the
              time to understand your property and set up an enforcement program that is clear to
              residents, defensible when challenged, and consistent week after week.
              Contact us at <a href="tel:9197909393">(919) 790-9393</a> to get started.
            </p>
          </div>

          <div className="col-md-3">
            <div className="bg-light p-3" style={{ borderRadius: 8, position: 'sticky', top: 20 }}>
              <h3>Private Property Services</h3>
              <ul>
                {sidebarServices.map((s) => <li key={s}>{s}</li>)}
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

export default PrivatePropertyTowing
