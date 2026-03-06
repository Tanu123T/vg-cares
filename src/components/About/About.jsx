import React, { useEffect } from "react";
import "./About.css";
import { FaArrowRight } from "react-icons/fa";
import CircularGallery from './CircularGallery'

function About() {
  useEffect(() => {
    const vgcObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vgc-active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".vgc-reveal").forEach((el) => vgcObserver.observe(el));

    return () => {
      vgcObserver.disconnect();
    };
  }, []);

  return (
    <section className="vgc-about-wrapper">
      {/* Animated Organic Backdrop */}
      <div className="vgc-fluid-bg">
        <div className="vgc-liquid-sphere vgc-sphere-one"></div>
        <div className="vgc-liquid-sphere vgc-sphere-two"></div>
        <div className="vgc-liquid-sphere vgc-sphere-three"></div>
      </div>

      <div className="vgc-main-layout">

        {/* LEFT: VERTICAL CIRCULAR GALLERY */}
        <div className="vgc-visual-nucleus vgc-reveal vgc-fade-left">
          <div className="vgc-gallery-container">
            <CircularGallery 
              items={[
                { image: '/src/assets/images/aboutus2.jpeg', text: 'VGCares Team' },
                { image: '/src/assets/images/aboutus3.jpeg', text: 'Our Facilities' },
                { image: '/src/assets/images/aboutus4.jpeg', text: 'Patient Care' },
                { image: '/src/assets/images/about1.jpeg', text: 'VGCares Global' }
              ]}
              bend={3}
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
              textColor="#ffffff"
              autoScroll={true}         // enable automatic rotation
              autoSpeed={0.2}           // control scroll pace (optional)
            />
          </div>
        </div>

        {/* RIGHT: DYNAMIC CONTENT FLOW */}
        <div className="vgc-text-nucleus">
          <h2 className="vgc-hero-title vgc-reveal vgc-fade-up">
            About <span>VGCares Global</span>
          </h2>

          <div className="vgc-description-pillar vgc-reveal vgc-fade-up">
            <p>
              VGCares Global is an advanced healthcare tourism platform designed to connect international patients with India's most trusted hospitals, expert doctors, and modern medical infrastructure. Our platform simplifies the entire medical journey — from consultation and hospital selection to travel assistance and post-treatment care.
            </p>
            <p>
              With India's growing reputation as a global healthcare hub, VGCares ensures transparency, affordability, and world-class treatment options for patients across the globe while maintaining the highest standards of medical care and patient safety.

            </p>
          </div>

       
          {/* MISSION & VISION GLASS-SHAPES */}
          <div className="vgc-mission-vision-stage vgc-reveal vgc-fade-up">
            <div className="vgc-leaf-panel vgc-mission-panel">
              <div className="vgc-panel-inner">
                <h3>Our Mission</h3>
                <p>To make world-class healthcare accessible and affordable for patients worldwide by connecting them with India's most trusted medical institutions and specialists.</p>
              </div>
            </div>
            <div className="vgc-leaf-panel vgc-vision-panel">
              <div className="vgc-panel-inner">
                <h3>Our Vision</h3>
                <p>To become a global leader in medical tourism by building a transparent and technology-driven healthcare ecosystem that empowers patients to make confident medical decisions.</p>
              </div>
            </div>
          </div>

          <button className="vgc-action-trigger vgc-reveal vgc-fade-up">
            Get Started<FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;