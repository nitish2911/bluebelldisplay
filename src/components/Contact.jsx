export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p className="contact-subtitle">
        Reach out to discuss your project requirements. We respond promptly.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>Contact Details</h3>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <a href="tel:+919999999999">+91 99999 99999</a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a href="mailto:info@bluebelldisplay.com">
              info@bluebelldisplay.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>
              Andheri East, Mumbai<br />
              Maharashtra, India
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">🕘</span>
            <span>
              Mon – Sat<br />
              10:00 AM – 7:00 PM
            </span>
          </div>

          {/* MAP */}
          <a
            href="https://maps.app.goo.gl/RQYxSE2PcfMZDXQs5"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <iframe
              title="Bluebell Display Location"
              src="https://www.google.com/maps?q=Andheri+East+Mumbai&output=embed"
              loading="lazy"
            />
            <span className="map-overlay">
              View on Google Maps
            </span>
          </a>
        </div>
        
        {/* CONTACT FORM */}
        <div className="contact-card">
          <h3>Send a Message</h3>

          <form id="contact-form" className="contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <input type="tel" placeholder="Phone number" />
            <textarea placeholder="Tell us about your project" rows="4" />
            <button type="submit">Submit Enquiry</button>
          </form>
        </div>



      </div>
    </section>
  )
}
