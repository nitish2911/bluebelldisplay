import Reveal from "./Reveal"

export default function Services() {
  return (
    <section id="services" className="services">
      <Reveal>
        <h2>What We Do</h2>
        <p className="services-subtitle">
          We design, build, and deliver complete display solutions for brands.
        </p>
      </Reveal>
      

      <div className="services-grid">
        <Reveal delay={0.1}>
          <Service
            title="Exhibition Stall Design & Fabrication"
            desc="End-to-end design and fabrication of custom exhibition stalls."
            icon="🧱"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Service
            title="Kiosk Design & Fabrication"
            desc="Functional and attractive kiosks for corporate and QSR brands."
            icon="🏪"
          />
        </Reveal>

        <Reveal delay={0.3}>
          <Service
            title="Signage, Logo & Graphics"
            desc="Brand signage, logo applications, and display graphics."
            icon="🎨"
          />
        </Reveal>

        <Reveal delay={0.4}>
          <Service
            title="Corporate Event Stage Design"
            desc="Stage design and production for corporate events and launches."
            icon="🎤"
          />
        </Reveal>

        <Reveal delay={0.5}>
          <Service
            title="360° Brand Promotion Solutions"
            desc="Complete exhibition and brand promotion support under one roof."
            icon="🔄"
          />
        </Reveal>
      </div>
    </section>
  )
}

function Service({ title, desc, icon }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
