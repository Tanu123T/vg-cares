import "./hero.css";
import { Link } from "react-router-dom";
import herobg from "../../assets/images/herobg.png";
import { useEffect } from "react";

const Hero = () => {
  // Combine the white-to-transparent gradient with your background image
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 10) 40%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0) 100%), url(${herobg})`
  };
 useEffect(() => {
    animateCounter("patients", 0, 300, 1000);
    animateCounter("doctors", 0, 150, 1000);
  }, []);
  
  return (
    <section className="hero" id="home" style={backgroundStyle}>
      <div className="hero-content">


        <h1 className="hero-title">
          Your Health Journey, <br />
          <span className="animated-choice">Across Borders</span>
        </h1>

        <p className="hero-description">
          We help you access reliable doctors, modern hospitals, and complete medical travel support-all designed to be budget-friendly and stress-free.
        </p>

        <div className="cta-group-container">
        <p class="hero-start-line">
  Start Your Medical Journey Now !
</p>
          <div className="cta-group">
            <Link to="/signin" className="btn-book1">
              <span className="shimmer-text"> Get Started  →</span>
            </Link>

            <Link to="/doctors" className="btn-find">
              Find a Doctor
            </Link>
          </div>
          </div>
<div className="trust-row">

  <div className="trust-item">
    <h3><span id="patients">0</span>+</h3>
    <p>Patients Served</p>
  </div>

  <div className="trust-item">
    <h3><span id="doctors">0</span>+</h3>
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
 function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    if (!element) return;

    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      const percentage = Math.min(progress / duration, 1);
      const value = Math.floor(start + (end - start) * percentage);

      element.innerText = value;

      if (percentage < 1) {
        requestAnimationFrame(animation);
      } else {
        element.innerText = end;
      }
    }

    requestAnimationFrame(animation);
  }
export default Hero;