import { useEffect } from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="glow-overlay"></div>

      <footer className="vg-footer">
        <div className="footer-container">

          <div className="footer-header reveal">
            <div className="brand-info">
              <div className="brand-logo">
                <i className="fas fa-heart-pulse logo-symbol"></i>
                <span className="brand-name">VG Care Global</span>
              </div>
              <p className="brand-text">
                Simplifying global healthcare through innovation. Access top-tier
                specialists and manage your medical records securely, anywhere in
                the world.
              </p>
            </div>

            <div className="social-icons">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-grid">
            <div className="col reveal">
              <h3>Company</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="/#capabilities">Capabilities</a></li>
                <li><Link to="/hospitals">Global Network</Link></li>
                <li><Link to="/doctors">Find a Doctor</Link></li>
              </ul>
            </div>

            <div className="col reveal">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Primary Care</a></li>
                <li><a href="#">Specialty Care</a></li>
                <li><a href="#">Emergency Help</a></li>
                <li><a href="#">Wellness & Prevention</a></li>
                <li><a href="#">Diagnostics</a></li>
                <li><a href="#">Vaccination</a></li>
              </ul>
            </div>

            <div className="col reveal">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Global Terms</a></li>
              </ul>
            </div>

            <div className="col reveal">
              <h3>Global Contact</h3>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>1800-123-4567</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>contact@vgcareglobal.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-location-dot"></i>
                <span>UG4, Indialand Techpark, Pune, India 411057</span>
              </div>
            </div>
          </div>

          <div className="trust-bar reveal">
            {[
              "HIPAA Compliant",
              "50k+ Patients",
              "500+ Doctors",
              "24/7 Support",
              "Verified Clinics",
            ].map((item, i) => (
              <div className="footer-badge" key={i}>
                <div className="check-box">✓</div> {item}
              </div>
            ))}
          </div>

        </div>

        <div className="copyright">
          © 2024 VG CARE GLOBAL. ALL RIGHTS RESERVED
        </div>
      </footer>
    </>
  );
};

export default Footer;
