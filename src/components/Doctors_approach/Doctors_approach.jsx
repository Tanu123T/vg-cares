import React, { useState, useEffect, useCallback } from "react";
import "./Doctors_approach.css";
import { useNavigate } from "react-router-dom";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="container-approach">
      <header className="hero-flex1">
        <div className="hero-text1">
          <span className="badge1">For Hospitals and Clinics</span>
          <h1 className="approach-h1">Onboard your Doctors & manage patients care at scale</h1>
          <p className="approach-p">Onboard doctors, streamline schedules, and serve more appointments digitally under one unified platform.</p>
          <div className="hero-btns1">
            <button className="btn1 btn-green1" onClick={() => navigate("/signin")}>Register your Hospital</button>
          </div>
        </div>

        <div className="hero-side-cards1">
          <div className="mini-card1">
            <div className="icon-circle1 green-tint1"><i className="fa-solid fa-user-doctor"></i></div>
            <h3>Onboard Doctors<br />easily</h3>
          </div>
          <div className="mini-card1">
            <div className="icon-circle1 orange-tint1"><i className="fa-solid fa-id-card"></i></div>
            <h3>Centralized Doctor<br />management</h3>
          </div>
        </div>
      </header>

      <section className="feature-grid1">
        <div className="card_DA1">
          <div className="icon-large1"><i className="fa-solid fa-bullhorn"></i></div>
          <h2>Expand Your Reach</h2>
          <p>Connect with more patients online</p>
        </div>
        <div className="card_DA1">
          <div className="icon-large1"><i className="fa-solid fa-laptop"></i></div>
          <h2>Online Appointments</h2>
          <p>Schedule and consult with ease</p>
        </div>
        <div className="card_DA1">
          <div className="icon-large1"><i className="fa-solid fa-calendar-check"></i></div>
          <h2>Manage patient Records</h2>
          <p>Secure and streamline your practice</p>
        </div>
      </section>

      <nav className="pill-bar1">
        <div className="pill1"><i className="fa-solid fa-chart-pie"></i> Dashboard</div>
        <div className="pill1"><i className="fa-solid fa-video"></i> Telemedicine and chat</div>
        <div className="pill1"><i className="fa-solid fa-calendar-days"></i> Appointment Management</div>
        <div className="pill1"><i className="fa-solid fa-file-invoice-dollar"></i> Billing and Reporting</div>
      </nav>

      <div className="bottom-flex-container1">
        <div className="vg-points-card1">
          <div className="vg-point-item1">
            <div className="vg-icon-sm1 v-green1"><i className="fa-solid fa-notes-medical"></i></div>
            <div className="vg-point-text1">
              <h4>VGCARE Wellness Plans</h4>
              <p>Personalized health & fitness journeys for long-term health.</p>
            </div>
          </div>
          <div className="vg-point-item1">
            <div className="vg-icon-sm1 v-blue1"><i className="fa-solid fa-user-nurse"></i></div>
            <div className="vg-point-text1">
              <h4>Virtual Guidance & Support</h4>
              <p>24/7 access to health coaches and medical professionals.</p>
            </div>
          </div>
          <div className="vg-point-item1">
            <div className="vg-icon-sm1 v-red1"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="vg-point-text1">
              <h4>Remote Monitoring & Alerts</h4>
              <p>Receive critical health alerts and real-time vitals tracking.</p>
            </div>
          </div>
        </div>

        <div className="slider-column1">
          <section className="testimonial-carousel1">
            <button className="nav-btn1 prev-btn1" onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></button>
            <div className="slider-viewport1">
              <div className="slider-track1" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {feedbacks.map((item, index) => (
                  <div className="testimonial-card1" key={index}>
                    <img src={item.img} alt={item.hospital} />
                    <div className="testimonial-info1">
                      <p>"{item.text}"</p>
                      <small>- {item.hospital}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="nav-btn1 next-btn1" onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></button>
          </section>
          <div className="dots-container1">
            {feedbacks.map((_, index) => (
              <span 
                key={index} 
                className={`dot1 ${currentIndex === index ? "active1" : ""}`} 
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;