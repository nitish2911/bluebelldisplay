import Reveal from "./Reveal"

export default function About() {
  return (
    <section id="about" className="about">
      <Reveal>
        <h2>About Bluebell Display</h2>
      </Reveal>
      <div className="about-grid">

        {/* Founder */}
        <Reveal delay={0.1}>
          <div className="about-card">
            <div className="about-icon">👤</div>
            <h3>Founded on Experience</h3>
            <p>
              Bluebell Display was founded by <br></br><strong>Mr Atul Yadav</strong>, bringing
              over <strong>25+ years of hands-on experience</strong> in exhibition
              design, fabrication, and display solutions.
            </p>
          </div>
        </Reveal>

        {/* Location */}
        <Reveal delay={0.2}>
          <div className="about-card">
            <div className="about-icon">📍</div>
            <h3>Strategic Mumbai Location</h3>
            <p>
              Our warehouse and workspace in <strong>Andheri East, Mumbai </strong>
              is close to major exhibition venues such as <strong>NESCO Exhibition
              Centre</strong>, <strong>Bombay Exhibition Centre</strong>, and
              <strong> Jio World Convention Centre</strong>, enabling faster
              coordination, meetings, and execution.
            </p>
          </div>
        </Reveal>

        {/* Specialization */}
        <Reveal delay={0.3}>
          <div className="about-card">
            <div className="about-icon">🧱</div>
            <h3>Exhibition & QSR Expertise</h3>
            <p>
              We specialize in <strong>exhibition kiosks, stalls, and displays</strong>
              for corporate brands, while also delivering durable and
              brand-consistent <strong>QSR food kiosks</strong> for malls, IT parks,
              commercial spaces, and metro stations.
            </p>
          </div>
        </Reveal>

        {/* Pan India */}
        <Reveal delay={0.4}>
          <div className="about-card">
            <div className="about-icon">🇮🇳</div>
            <h3>Pan-India Execution</h3>
            <p>
              With presence and execution capabilities in <strong>Delhi, Hyderabad,
              Chennai, Ahmedabad, Pune, and Goa</strong>, we regularly take up
              projects across India with consistent quality standards.
            </p>
          </div>
        </Reveal>

        {/* Long-term Relationships */}
        <Reveal delay={0.5}>
          <div className="about-card">
            <div className="about-icon">🤝</div>
            <h3>Long-Term Client Relationships</h3>
            <p>
              We maintain strong industry tie-ups with corporate customers, with
              several clients working with us for <strong>over 10 years</strong> —
              a reflection of trust, consistency, and delivery reliability.
            </p>
          </div>
        </Reveal>

        {/* Technology */}
        <Reveal delay={0.6}>
          <div className="about-card">
            <div className="about-icon">🧠</div>
            <h3>Modern & AI-Driven Design</h3>
            <p>
              We use <strong>modern 3D design and visualization tools</strong> to
              help customers clearly see concepts before fabrication. Our workflow
              is increasingly <strong>AI-assisted</strong> to improve accuracy,
              speed, and design outcomes.
            </p>
          </div>
        </Reveal>

        {/* Workforce & Safety */}
        <Reveal delay={0.7}>
          <div className="about-card">
            <div className="about-icon">🦺</div>
            <h3>Trained Workforce & Safety Standards</h3>
            <p>
              Our workforce is well trained and follows strict
              <strong> safety protocols</strong> during fabrication and on-site
              installation, ensuring safe operations and dependable execution.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
