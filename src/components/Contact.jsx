import { useState } from "react"
import emailjs from "emailjs-com"
import Reveal from "./Reveal"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    emailjs
      .sendForm(
        "service_f61wule",
        "template_n3cmale",
        e.target,
        "9acRPUG36NKHU_7Pd"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
          e.target.reset()
        },
        () => {
          setError(true)
          setLoading(false)
        }
      )
  }

  return (
    <section id="contact" className="contact">
      <Reveal>
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          Reach out to discuss your project requirements. We respond promptly.
        </p>
      </Reveal>

      <div className="contact-grid">

        {/* CONTACT DETAILS */}
        <Reveal delay={0.1}>
          <div className="contact-card">
            <h3>Contact Details</h3>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+919702958781">+91 97029 58781</a>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:enquiries.bluebelldisplay@gmail.com">
                enquiries.bluebelldisplay@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>
                Block No. 4/1, Chatur Das Patel Dairy Compound, Jijamata Road, Near Santosh Dairy Farm, Vikas Nagar, Andheri East, Mumbai-400093<br />
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
        </Reveal>

        {/* CONTACT FORM */}
        <Reveal delay={0.2}>
          <div className="contact-card">
            <h3>Send a Message</h3>

            <form
              id="contact-form"
              className="contact-form"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="4"
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>

              {success && (
                <p style={{ color: "green", marginTop: "1rem" }}>
                  Thank you! We’ll get back to you shortly.
                </p>
              )}

              {error && (
                <p style={{ color: "red", marginTop: "1rem" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
