import QuoteForm from '../../components/QuoteForm'

const serviceCards = [
  { icon: '/images/icon-roadside.png', title: 'Emergency Response Towing', description: 'Rapid towing support for urgent situations — day or night, any vehicle type.' },
  { icon: '/images/icon-ppi.png', title: 'Accident Scene Management & Vehicle Removal', description: 'Efficient scene clearing to restore traffic flow and reduce secondary risk.' },
  { icon: '/images/icon-commercial.png', title: 'Impound Services', description: 'Secure, documented impound services when vehicles must be held before release.' },
  { icon: '/images/icon-immediate-towing.png', title: 'Illegal Parking Enforcement', description: 'Removal support for illegally parked vehicles impacting access, safety corridors, or operations.' },
  { icon: '/images/icon-mass.png', title: 'Abandoned Vehicle Removal', description: 'Assistance removing abandoned vehicles from public or private property.' },
  { icon: '/images/icon-custom-policies.png', title: 'Evidence Towing & Secure Storage', description: 'Secure towing and storage protocols for vehicles requiring documented handling.' },
  { icon: '/images/icons-municpality.png', title: 'Relocation of Vehicles for Public Events & Construction Projects', description: 'Organized relocations to support event operations and construction access with minimal disruption.' },
  { icon: '/images/icon-account-manager.png', title: 'Secure Transport of Seized Vehicles', description: 'Discreet, controlled transport handled with the professionalism and documentation required.' },
]

const sidebarServices = [
  'Emergency Response Towing',
  'Accident Scene Management & Vehicle Removal',
  'Impound Services',
  'Illegal Parking Enforcement',
  'Abandoned Vehicle Removal',
  'Evidence Towing & Secure Storage',
  'Relocation of Vehicles for Public Events & Construction Projects',
  'Secure Transport of Seized Vehicles',
]

function EmergencyResponse() {
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
                  <h3>24/7 Emergency Towing &amp; Accident Scene Support</h3>
                  <h1>Emergency Response &amp;<br />Accident Scene Management</h1>
                  <p>
                    When an incident blocks access, disrupts traffic, or creates a safety risk, response
                    time and coordination matter. ITS provides <strong>fast, professional emergency towing
                    and accident scene support</strong> to help clear vehicles quickly and restore order safely.
                  </p>
                </div>
              </div>
              <div className="banner-form col-md-6 p-5">
                <h4 style={{ textAlign: 'center' }}>For 24 Hour Immediate Service:</h4>
                <p style={{ textAlign: 'center' }}>
                  <a className="lmore-btn-dark" href="tel:9197909393">Call: (919) 790-9393</a>
                </p>
                <QuoteForm heading="Request a Quote:" defaultSubject="Emergency Response" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="container-vms our-services-container about-svs-container">
        <div className="center-content">
          <div className="about-top-cont">
            <h3>Supporting Public Safety Partners Across North Carolina</h3>
            <p>
              ITS provides emergency response towing and accident scene support to help clear vehicles
              quickly and restore order safely. We work with dispatch, first responders, and on-site
              stakeholders to keep operations moving. Our priority is public safety and efficient scene
              clearance from the moment we arrive.
            </p>
          </div>
        </div>
      </div>

      {/* ── Content + Sidebar ── */}
      <div className="center-content page_default_container">
        <div className="row justify-content-center">
          <div className="col-md-9 pe-md-4">
            <h2>Emergency Response &amp; Accident Scene Capabilities</h2>

            <p>
              When it comes to emergency response towing and accident scene management, ITS brings trained
              operators, coordinated dispatch, and the resources to handle complex removals and recoveries —
              without creating additional risk at the scene.
            </p>

            <h3>Rapid Response Towing</h3>
            <ul>
              <li>Day-or-night dispatch for urgent vehicle removal situations.</li>
              <li>Coordination with first responders and on-site stakeholders.</li>
            </ul>

            <h3>Accident Scene Management</h3>
            <ul>
              <li>Efficient scene clearing to restore traffic flow and reduce secondary risk.</li>
              <li>Trained operators who follow disciplined procedures at every scene.</li>
            </ul>

            <h3>Secure Impound & Storage</h3>
            <ul>
              <li>Documented impound services when vehicles must be held before release.</li>
              <li>Evidence towing and secure storage protocols for vehicles requiring special handling.</li>
            </ul>

            <h3>Abandoned &amp; Illegal Vehicle Removal</h3>
            <ul>
              <li>Removal of abandoned vehicles from public or private property.</li>
              <li>Support for illegally parked vehicles impacting access or safety corridors.</li>
            </ul>

            <h3>Event &amp; Construction Support</h3>
            <ul>
              <li>Organized vehicle relocations for public events and construction projects.</li>
              <li>Minimal disruption to site operations during relocation windows.</li>
            </ul>

            <p>
              The goal is simple: reduce downtime, improve safety, and get roads, lots, and access points
              back to normal as quickly as possible. Contact ITS at{' '}
              <a href="tel:9197909393">(919) 790-9393</a> for emergency response support.
            </p>

            <h2>Emergency Response Services</h2>
            <div className="row">
              {serviceCards.map(({ icon, title, description }) => (
                <div className="col-md-6 mb-4" key={title}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <img src={icon} alt={title} style={{ width: 48, height: 'auto', flexShrink: 0 }} />
                    <div>
                      <h5 style={{ marginBottom: 6 }}>{title}</h5>
                      <p style={{ marginBottom: 0 }}>{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3">
            <div className="bg-light p-3" style={{ borderRadius: 8, position: 'sticky', top: 20 }}>
              <h3>Emergency Services</h3>
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

export default EmergencyResponse
