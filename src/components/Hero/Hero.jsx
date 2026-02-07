import "./hero.css";
import heroImg from "../../assets/images/hero1.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hipaa-badge">HIPAA Compliant & Secure</div>

        <h1 className="hero-title" style={{ color: "black", fontFamily: "Poppins", }}>
          Your Health, Your Schedule, <br />
          <span className="animated-choice" style={{ fontFamily: "Poppins" }}>
            Your Choice
          </span>
        </h1>

        <p className="hero-description">
          Quality care, simplified. Book appointments with trusted healthcare
          providers, consult online, and manage your wellness journey—all in one
          place.
        </p>

        <div className="cta-group">
          <a href="#services" className="btn-book1">
            <span className="shimmer-text">Book Appointment →</span>
          </a>

          <a href="/doctors" className="btn-find">
            Find a Doctor <i className="fas fa-search"></i>
          </a>
        </div>

        <div className="trust-row">
          <div className="trust-item">
            <div className="check-circle-small">
              <i className="fas fa-check"></i>
            </div>
            50K + Patients
          </div>

          <div className="trust-item">
            <div className="check-circle-small">
              <i className="fas fa-check"></i>
            </div>
            500+ Doctors
          </div>

          <div className="trust-item">
            <div className="check-circle-small">
              <i className="fas fa-check"></i>
            </div>
            24/7 Support
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img src={heroImg} alt="Doctor" className="main-img" />

        <div className="stats-card">
          <div className="big-check">
            <i className="fas fa-check" style={{ fontSize: "24px", color: "white" }}></i>
          </div>
          <div className="stats-text">
            <h3>98%</h3>
            <p style={{ color: "#333", fontWeight: "600" }}>Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
