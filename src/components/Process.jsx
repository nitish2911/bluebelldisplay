import Reveal from "./Reveal"

export default function Process() {
  return (
    <section id="process" className="process">
      <Reveal>
        <h2>Our Design & Build Process</h2>
        <p className="process-subtitle">
          A proven workflow that ensures quality, speed, and consistency — from
          concept to installation.
        </p>
      </Reveal>
      <div className="process-grid">
        <Reveal delay={0.1}>
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Understand the Requirement</h3>
            <p>
              We begin by understanding your brand, objectives, space constraints,
              and operational needs.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Design & Visualization</h3>
            <p>
              Our design team creates layouts, 3D visuals, and graphics aligned
              with your brand identity.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
        <div className="process-step">
          <div className="step-number">03</div>
          <h3>Fabrication & Production</h3>
          <p>
            We fabricate using quality materials, ensuring durability, finish,
            and compliance with industry standards.
          </p>
        </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Delivery & Installation</h3>
            <p>
              On-time delivery and professional installation at exhibitions,
              malls, events, or outdoor locations.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
