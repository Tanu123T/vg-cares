import { useState } from "react";
import "./Contact_us.css";

export default function ContactUs() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      alert("Success! Your message has been sent to VG Care.");
      setSending(false);
      e.target.reset();
    }, 1800);
  };

  return (
    <>
      {/* HEADER */}
      <section className="header">
        <h1>Contact Us</h1>
        <p>Our expert team is here to help. Get in touch for a free consultation.</p>
      </section>

      {/* FORM */}
      <div className="main-container">
        <h2>Send us a Message</h2>
        <p className="subtext">We'll respond within 2 hours.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone" />
          </div>

          <div className="form-group">
            <label>Treatment Interest</label>
            <select defaultValue="">
              <option value="" disabled>
                Select treatment
              </option>
              <option value="general">General Checkup</option>
              <option value="surgery">Surgery</option>
              <option value="dental">Dental</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Subject *</label>
            <input
              type="text"
              placeholder="What can we help you with?"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Message *</label>
            <textarea
              placeholder="Tell us about your medical tourism needs..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit" disabled={sending}>
            {sending ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin"></i> Sending...
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i> Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {/* INFO SECTION */}
      <div className="info-section">
        <div className="info-box">
          <div className="icon-circle">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="info-text">
            <strong>Email</strong>
            <span>support@VGCare.com</span>
          </div>
        </div>

        <div className="info-box">
          <div className="icon-circle">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="info-text">
            <strong>Phone</strong>
            <span>+91 7588567014</span>
          </div>
        </div>

        <div className="info-box">
          <div className="icon-circle">
            <i className="fa-solid fa-clock"></i>
          </div>
          <div className="info-text">
            <strong>Hours</strong>
            <span>24/7 Support Available</span>
          </div>
        </div>
      </div>

      {/* BACK HOME */}
      <a href="/" className="back-home">
        <i className="fa-solid fa-house"></i> Back to Home
      </a>

      <div className="glow-overlay"></div>
    </>
  );
}
