import "./hero.css";
import heroImg from "../../assets/images/hero1.jpg";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hipaa-badge">HIPAA Compliant & Secure</div>

        <h1 className="hero-title">
          Your Health Journey, <br />
          <span className="animated-choice">Across Borders</span>
        </h1>

        <p className="hero-description">
         Explore secure and budget-friendly treatment results across the globe.
         VG Cares Global unites reliable healthcare providers with comprehensive
         medical trip collaboration on a single platform.
        </p>

        <div className="cta-group">
          <Link to="/signin" className="btn-book1">
            <span className="shimmer-text">Book Appointment →</span>
          </Link>

          <Link to="/doctors" className="btn-find">
            Find a Doctor
          </Link>
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

      <div className="hero-visual">
        <img src={heroImg} alt="Doctor" className="main-img" />

        <div className="stats-card">
          <div className="big-check"><Check size={30} /></div>
          <div className="stats-text">
            <h3>98%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;