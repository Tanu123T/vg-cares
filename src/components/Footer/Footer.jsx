import { useEffect } from "react";
import "./Footer.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from "../../assets/images/vgcares.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const goToAbout = () => {
    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "about" } });
    }
  };

  return (
    <>
      <div className="glow-overlay"></div>

      <footer className="vg-footer">
        <div className="footer-container">

          <div className="footer-header reveal">
            <div className="brand-info">
              <div className="brand-logo">
                <img src={logoImg} alt="VGCares Global" className="site-logo" />
                <span className="brand-name">VGCares Global</span>
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

                <li>
                  <button type="button" className="footer-link-btn" onClick={goToAbout}>
                    About Us
                  </button>
                </li>
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
                <span>+91 90 9631 4957</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@techvishwaguru.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-location-dot"></i>
                <span>UG-04, Indialand Global Tech Park, Hinjewadi Phase 1, Pune, Maharashtra 411057</span>
              </div>
            </div>
          </div>

        </div>

        <div className="copyright">
          VGCAREs GLOBAL. ALL RIGHTS RESERVED
        </div>
      </footer>
    </>
  );
};

export default Footer;
