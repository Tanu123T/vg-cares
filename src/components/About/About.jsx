import React, { useEffect } from "react";
import "./About.css";
import { FaHospital, FaGlobeAsia, FaHeartbeat, FaUserMd } from "react-icons/fa";

function About() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image fade-up">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Medical Tourism"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <h2 className="about-title fade-up">
            About <span>VGCares Global</span>
          </h2>

          <p className="about-description fade-up">
            VGCares Global is an advanced healthcare tourism platform designed to
            connect international patients with India's most trusted hospitals,
            expert doctors, and modern medical infrastructure. Our platform
            simplifies the entire medical journey — from consultation and
            hospital selection to travel assistance and post-treatment care.
          </p>

          <p className="about-description fade-up">
            With India's growing reputation as a global healthcare hub, VGCares
            ensures transparency, affordability, and world-class treatment
            options for patients across the globe while maintaining the highest
            standards of medical care and patient safety.
          </p>

          {/* FEATURES */}
          <div className="about-features fade-up">

            <div className="feature">
              <FaHospital className="icon"/>
              <h4>Top Hospitals</h4>
              <p>Partnered with India's leading hospitals and certified facilities.</p>
            </div>

            <div className="feature">
              <FaUserMd className="icon"/>
              <h4>Expert Doctors</h4>
              <p>Access to experienced specialists across multiple fields.</p>
            </div>

            <div className="feature">
              <FaGlobeAsia className="icon"/>
              <h4>Global Patients</h4>
              <p>Helping international patients receive affordable care.</p>
            </div>

            <div className="feature">
              <FaHeartbeat className="icon"/>
              <h4>Complete Care</h4>
              <p>End-to-end support including treatment, travel, and recovery.</p>
            </div>

          </div>

          {/* MISSION & VISION */}
          <div className="mission-vision fade-up">

            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To make world-class healthcare accessible and affordable for
                patients worldwide by connecting them with India's most trusted
                medical institutions and specialists.
              </p>
            </div>

            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To become a global leader in medical tourism by building a
                transparent and technology-driven healthcare ecosystem that
                empowers patients to make confident medical decisions.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;