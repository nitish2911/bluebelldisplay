import Reveal from "./Reveal"

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <Reveal>
        <h2>Industries We Serve</h2>
        <p className="industries-subtitle">
          We build physical brand experiences for businesses that operate at scale.
        </p>
      </Reveal>

      <div className="industries-grid">

        {/* CORPORATE */}
        <Reveal delay={0.1}>
          <div className="industry-card">
            <div className="industry-icon">🏢</div>
            <h3>Corporate & Enterprise Brands</h3>
            <p className="industry-desc">
              End-to-end exhibition and branding solutions for enterprise clients
              looking to stand out at trade shows and corporate events.
            </p>

            <ul>
              <li>Exhibition stall design & fabrication</li>
              <li>Corporate kiosks & display units</li>
              <li>Stage design for launches & conferences</li>
              <li>Branding, signage & visual communication</li>
            </ul>
          </div>
        </Reveal>

        {/* QSR */}
        <Reveal delay={0.2}>
          <div className="industry-card">
            <div className="industry-icon">🍔</div>
            <h3>QSR & Food Chains</h3>
            <p className="industry-desc">
              Functional, durable, and brand-aligned food kiosks designed
              for speed, hygiene, and scalability.
            </p>

            <ul>
              <li>Food kiosks & modular counters</li>
              <li>Mall & outdoor QSR setups</li>
              <li>Fabrication with food-grade materials</li>
              <li>Brand-focused design & layouts</li>
            </ul>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
