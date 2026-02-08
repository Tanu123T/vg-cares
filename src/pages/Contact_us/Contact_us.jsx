import React, { useState } from "react";
import "./Contact_us.css";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      alert("Success! Your message has been sent to VG Care.");
      setLoading(false);
      e.target.reset();
    }, 1800);
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <div className="contact-container">
        {/* LEFT SIDE: INFO */}
        <div className="contact-left">
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p>
              Have a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div className="info-content">
                <h3>Email</h3>
                <p>support@vgcare.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91 75xxxxxxxs</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div className="info-content">
                <h3>Office</h3>
                <p>123 Medical Center, Healthcare City, Bangalore, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3 style={{ marginBottom: "15px" }}>Follow Us</h3>
            <div className="social-icons" style={{ display: "flex", gap: "12px" }}>
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" required placeholder="Enter name" />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input type="email" required placeholder="Enter email" />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" required placeholder="How can we help?" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea required placeholder="Tell us more about your needs..."></textarea>
            </div>

            <button className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              {!loading && <i className="fas fa-paper-plane" style={{ marginLeft: "8px" }}></i>}
            </button>
          </form>
        </div>
      </div>

      <Link to="/" className="contactus-home-btn">
        <i className="fa-solid fa-house"></i>
      </Link>
    </div>
  );
};

export default ContactUs;