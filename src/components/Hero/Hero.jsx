import "./hero.css";
import { Link } from "react-router-dom";
import herobg from "../../assets/images/herobg.png";

const Hero = () => {
  // Combine the white-to-transparent gradient with your background image
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 10) 40%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0) 100%), url(${herobg})`
  };
  return (
    <section className="hero" id="home" style={backgroundStyle}>
      <div className="hero-content">
        <div className="hipaa-badge">HIPAA Compliant & Secure</div>

        <h1 className="hero-title">
          Your Health Journey, <br />
          <span className="animated-choice">Across Borders</span>
        </h1>

        <p className="hero-description">
          We help you access reliable doctors, modern hospitals, and complete medical travel support — all designed to be budget-friendly and stress-free.
        </p>

        <div className="cta-group-container">
          <h4>Start Your Medical Journey Today!</h4>
          <div className="cta-group">
            <Link to="/signin" className="btn-book1">
              <span className="shimmer-text"> Get Started Now  →</span>
            </Link>

            <Link to="/doctors" className="btn-find">
              Find a Doctor
            </Link>
          </div>
          </div>

          <div className="trust-row">
            <div className="trust-item">
              <div className="check-circle-small">✓</div>
              50K+ Patients
            </div>

            <div className="trust-item">
              <div className="check-circle-small">✓</div>
              500+ Doctors
            </div>

            <div className="trust-item">
              <div className="check-circle-small">✓</div>
              24/7 Support
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;