import React, { useEffect } from "react";
import "./Doctors_approach.css";

import hosp1 from "../../assets/images/DA1.png";
import hosp2 from "../../assets/images/DA2.png";
import hosp3 from "../../assets/images/DA3.png";
import hosp4 from "../../assets/images/DA4.png";
import hosp5 from "../../assets/images/DA5.png";
import hosp6 from "../../assets/images/DA6.png";

function Approach() {
  useEffect(() => {
    const feedbacks = [
      { text: "We increased patient appointments 40% using VG Care's digital scheduling system.", hospital: "Birla Hospital", img: hosp1 },
      { text: "The dashboard provides a seamless view of our entire staff and patient load.", hospital: "Apollo Health City", img: hosp2 },
      { text: "Onboarding 50+ doctors was done effortlessly. The digital platform is highly intuitive.", hospital: "City General Hospital", img: hosp3 },
      { text: "Telemedicine integration allowed us to reach remote patients.", hospital: "Sunrise Multispeciality", img: hosp4 },
      { text: "Automated billing saved our admin team over 20 hours every week.", hospital: "Grace Medical Center", img: hosp5 },
      { text: "Scheduling and records management are now perfectly synced.", hospital: "Wellness Trust Hospital", img: hosp6 }
    ];

    const track = document.getElementById("sliderTrack");
    const dotsContainer = document.getElementById("dotsContainer");

    // 🔥 IMPORTANT FIX — clear old slides & dots
    track.innerHTML = "";
    dotsContainer.innerHTML = "";

    let currentIndex = 0;
    let interval;

    feedbacks.forEach((item, index) => {
      const slide = document.createElement("div");
      slide.className = "testimonial-card";
      slide.innerHTML = `
        <img src="${item.img}" alt="${item.hospital}" />
        <div class="testimonial-info">
          <p>"${item.text}"</p>
          <small>- ${item.hospital}</small>
        </div>
      `;
      track.appendChild(slide);

      const dot = document.createElement("span");
      dot.className = index === 0 ? "dot active" : "dot";
      dot.onclick = () => {
        currentIndex = index;
        update();
        reset();
      };
      dotsContainer.appendChild(dot);
    });

    function update() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      document.querySelectorAll(".dot").forEach((d, i) =>
        d.classList.toggle("active", i === currentIndex)
      );
    }

    function start() {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % feedbacks.length;
        update();
      }, 5000);
    }

    function reset() {
      clearInterval(interval);
      start();
    }

    document.getElementById("nextBtn").onclick = () => {
      currentIndex = (currentIndex + 1) % feedbacks.length;
      update();
      reset();
    };

    document.getElementById("prevBtn").onclick = () => {
      currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
      update();
      reset();
    };

    start();

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header className="hero-flex">
        <div className="hero-text">
          <span className="badge">For Hospitals and Clinics</span>
          <h1>Onboard your Doctors & manage patients care at scale</h1>
          <p>Onboard doctors, streamline schedules, and serve more appointments digitally under one unified platform.</p>
          <div className="hero-btns">
            <button className="btn btn-blue">Register your Hospital</button>
            <button className="btn btn-green">Onboard doctors now</button>
          </div>
        </div>

        <div className="hero-side-cards">
          <div className="mini-card">
            <div className="icon-circle green-tint"><i className="fa-solid fa-user-doctor"></i></div>
            <h3>Onboard Doctors<br />easily</h3>
          </div>
          <div className="mini-card">
            <div className="icon-circle orange-tint"><i className="fa-solid fa-id-card"></i></div>
            <h3>Centralized Doctor<br />management</h3>
          </div>
        </div>
      </header>

      <section className="feature-grid">
        <div className="card_DA"><div className="icon-large"><i className="fa-solid fa-bullhorn"></i></div><h2>Expand Your Reach</h2><p>Connect with more patients online</p></div>
        <div className="card_DA"><div className="icon-large"><i className="fa-solid fa-laptop"></i></div><h2>Online Appointments</h2><p>Schedule and consult with ease</p></div>
        <div className="card_DA"><div className="icon-large"><i className="fa-solid fa-calendar-check"></i></div><h2>Manage patient Records</h2><p>Secure and streamline your practice</p></div>
      </section>

     <nav class="pill-bar">
                <div class="pill"><i class="fa-solid fa-chart-pie"></i> Dashboard</div>
                <div class="pill"><i class="fa-solid fa-video"></i> Telemedicine and chat</div>
                <div class="pill"><i class="fa-solid fa-calendar-days"></i> Appointment Management</div>
                <div class="pill"><i class="fa-solid fa-file-invoice-dollar"></i> Billing and Reporting</div>
            </nav>

      <div className="bottom-flex-container">
        <div className="vg-points-card">
          <div className="vg-point-item"><div className="vg-icon-sm v-green"><i className="fa-solid fa-notes-medical"></i></div><div className="vg-point-text"><h4>VGCARE Wellness Plans</h4><p>Personalized health & fitness journeys for long-term health.</p></div></div>
          <div className="vg-point-item"><div className="vg-icon-sm v-blue"><i className="fa-solid fa-user-nurse"></i></div><div className="vg-point-text"><h4>Virtual Guidance & Support</h4><p>24/7 access to health coaches and medical professionals.</p></div></div>
          <div className="vg-point-item"><div className="vg-icon-sm v-red"><i className="fa-solid fa-heart-pulse"></i></div><div className="vg-point-text"><h4>Remote Monitoring & Alerts</h4><p>Receive critical health alerts and real-time vitals tracking.</p></div></div>
        </div>

        <div className="slider-column">
          <section className="testimonial-carousel" id="carousel">
            <button className="nav-btn prev-btn" id="prevBtn"><i className="fa-solid fa-chevron-left"></i></button>
            <div className="slider-viewport">
              <div className="slider-track" id="sliderTrack"></div>
            </div>
            <button className="nav-btn next-btn" id="nextBtn"><i className="fa-solid fa-chevron-right"></i></button>
          </section>
          <div className="dots-container" id="dotsContainer"></div>
        </div>
      </div>
    </div>
  );
}

export default Approach;