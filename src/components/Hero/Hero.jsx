import "./hero.css";
import { Link } from "react-router-dom";
import herobg from "../../assets/images/herobg.png";
import { addRipple } from "../../utils/useScrollReveal";

const Hero = () => {
  // Static trust numbers (removed count-up animation)

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 10) 40%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0) 100%), url(${herobg})`
  };

  return (
    <section className="hero" id="home" style={backgroundStyle}>
      {/* Floating ambient orbs */}
      <div className="vg-hero-orb vg-hero-orb-1" aria-hidden="true" />
      <div className="vg-hero-orb vg-hero-orb-2" aria-hidden="true" />

      <div className="hero-content">

        <h1
          className="hero-title"
          data-aos="fade-down"
          data-vg-delay="1"
        >
          Care That Travels <span className="animated-choice"> With You</span>
        </h1>

        <p
          className="hero-description"
          data-aos="fade-up"
          data-vg-delay="2"
        >
          We help you access reliable doctors, modern hospitals, and complete medical travel support-all designed to be budget-friendly and stress-free.
        </p>

        <div className="cta-group-container" data-aos="zoom-in" data-aos-delay="300">
          <p className="hero-start-line">
            Start Your Medical Journey Now !
          </p>
          <div className="cta-group">
            <Link
              to="/signin"
              className="btn-book1 vg-ripple-btn"
              onClick={addRipple}
            >
              <span className="shimmer-text">Get Started   →</span>
            </Link>

            <Link
              to="/doctors"
              className="btn-find vg-ripple-btn"
              onClick={addRipple}
            >
              Find a Doctor
            </Link>
          </div>
        </div>

        <div className="trust-row" data-aos="fade-up" data-aos-delay="400">
          <div className="trust-item">
            <h3><span>500</span>+</h3>
            <p>Patients Served</p>
          </div>

          <div className="trust-item">
            <h3><span>500</span>+</h3>
            <p>Verified Doctors</p>
          </div>

          <div className="trust-item">
            <h3><span>24/7</span></h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
