import React from "react";
import "./Doctors_approach.css";
import { useNavigate } from "react-router-dom";
import { addRipple } from "../../utils/useScrollReveal";

// Image Imports
import hosp1 from "../../assets/images/DA1.png";
import hosp2 from "../../assets/images/DA2.png";
import hosp3 from "../../assets/images/DA3.png";
import hosp4 from "../../assets/images/DA4.png";
import hosp5 from "../../assets/images/DA5.png";
import hosp6 from "../../assets/images/DA6.png";

const feedbacks = [
  { text: "We increased patient appointments 40% using VG Care's digital scheduling system.", hospital: "Birla Hospital", img: hosp1 },
  { text: "The dashboard provides a seamless view of our entire staff and patient load.", hospital: "Apollo Health City", img: hosp2 },
  { text: "Onboarding 50+ doctors was done effortlessly. The digital platform is highly intuitive.", hospital: "City General Hospital", img: hosp3 },
  { text: "Telemedicine integration allowed us to reach remote patients.", hospital: "Sunrise Multispeciality", img: hosp4 },
  { text: "Automated billing saved our admin team over 20 hours every week.", hospital: "Grace Medical Center", img: hosp5 },
  { text: "Scheduling and records management are now perfectly synced.", hospital: "Wellness Trust Hospital", img: hosp6 }
];

function Approach() {
  const navigate = useNavigate();

  return (
    <div className="container-approach">
      <header className="hero-flex1" data-aos="fade-up">
        <div className="hero-text1">
          <span className="badge1">Provider Network</span>
          <h1 className="approach-h1">Register hospitals on VGCares Global, <br /><span>Grow without Limits</span></h1>
          <p className="approach-p">Onboard your specialists, automate your scheduling, and secure your data with a platform built for the demands of Medical Tourism.</p>
        </div>

        <div className="catchy-button">
          <p className="catchy-text">Want to expand your hospital’s reach?</p>
          <div className="hero-btn1">
            <button className="btn1 btn-green1 vg-ripple-btn" onClick={(e) => { addRipple(e); navigate("/signin"); }}>
              Register your Hospital
            </button>
          </div>
        </div>
      </header>

      <section className="feature-row1">
        <div className="feature-panel1" data-aos="fade-left" data-aos-delay="100">
          <div className="feature-icon1"><i className="fa-solid fa-bullhorn"></i></div>
          <div className="feature-content1">
            <h2>Expand Your Reach</h2>
            <p>Connect with more patients online.</p>
          </div>
        </div>

        <div className="feature-panel1" data-aos="fade-right" data-aos-delay="200">
          <div className="feature-icon1"><i className="fa-solid fa-laptop"></i></div>
          <div className="feature-content1">
            <h2>Digital Scheduling</h2>
            <p>Schedule and consult with ease.</p>
          </div>
        </div>

        <div className="feature-panel1" data-aos="fade-up" data-aos-delay="300">
          <div className="feature-icon1"><i className="fa-solid fa-calendar-check"></i></div>
          <div className="feature-content1">
            <h2>Manage Patient Records</h2>
            <p>Secure and streamline your practice.</p>
          </div>
        </div>
      </section>

      <nav className="pill-bar1">
        <div className="pill1"><i className="fa-solid fa-chart-pie"></i> Dashboard</div>
        <div className="pill1"><i className="fa-solid fa-video"></i> Telemedicine and chat</div>
        <div className="pill1"><i className="fa-solid fa-calendar-days"></i> Appointment Management</div>
        <div className="pill1"><i className="fa-solid fa-file-invoice-dollar"></i> Billing and Reporting</div>
      </nav>

      <div className="bottom-flex-container1">
        <div className="slider-column1">
          <div className="marquee-window">
            <div className="marquee-track">
              {/* Double the array for a seamless infinite loop */}
              {[...feedbacks, ...feedbacks].map((item, index) => (
                <div className="individual-feedback-card" key={index}>
                  <img src={item.img} alt={item.hospital} className="hosp-img-slide" />
                  <div className="hosp-info-slide">
                    <p>"{item.text}"</p>
                    <small>- {item.hospital}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-side-cards1">
          <div className="mini-card1 vg-card-hover" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-circle1 green-tint1"><i className="fa-solid fa-user-doctor"></i></div>
            <h3>Onboard Doctors<br />easily</h3>
          </div>
          <div className="mini-card1 vg-card-hover" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-circle1 orange-tint1"><i className="fa-solid fa-id-card"></i></div>
            <h3>Centralized Doctor<br />management</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;