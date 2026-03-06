import React, { useEffect } from "react";
import "./About.css";
import { FaHospital, FaGlobeAsia, FaHeartbeat, FaUserMd, FaArrowRight } from "react-icons/fa";

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
    
    // Magnetic Effect for the Floating Nodes
    const handleVgcMouse = (e) => {
      const vgcNodes = document.querySelectorAll(".vgc-magnetic-node");
      vgcNodes.forEach((node) => {
        const vgcRect = node.getBoundingClientRect();
        const vgcX = (e.clientX - vgcRect.left - vgcRect.width / 2) * 0.2;
        const vgcY = (e.clientY - vgcRect.top - vgcRect.height / 2) * 0.2;
        node.style.transform = `translate(${vgcX}px, ${vgcY}px)`;
      });
    };

    window.addEventListener("mousemove", handleVgcMouse);
    return () => {
      vgcObserver.disconnect();
      window.removeEventListener("mousemove", handleVgcMouse);
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
        
        {/* LEFT: THE MORPHING VISUAL CORE */}
        <div className="vgc-visual-nucleus vgc-reveal vgc-fade-left">
          <div className="vgc-nucleus-container">
            {/* The SVG Morphing Mask */}
            <svg viewBox="0 0 200 200" className="vgc-morph-svg">
              <defs>
                <clipPath id="vgc-organic-clip">
                  <path d="M44.7,-76.4C58.3,-69.2,69.9,-57.4,77.5,-43.7C85.1,-30,88.7,-15,86.9,-0.9C85.2,13.1,78.2,26.2,69.5,38.1C60.8,50,50.3,60.8,37.8,68.8C25.3,76.8,10.7,82,-3.1,87.4C-16.9,92.8,-29.9,98.3,-41.8,93.4C-53.7,88.5,-64.5,73.1,-71.9,59.3C-79.3,45.5,-83.4,33.2,-84.3,20.8C-85.2,8.4,-82.9,-4.1,-78.9,-16.1C-74.9,-28.1,-69.3,-39.6,-59.9,-49.2C-50.5,-58.8,-37.3,-66.6,-24,-74.2C-10.7,-81.8,2.7,-89.2,17.7,-88.7C32.7,-88.2,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </clipPath>
              </defs>
              <image 
                href="https://images.unsplash.com/photo-1576091160550-2173dba999ef" 
                width="100%" height="100%" 
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#vgc-organic-clip)"
              />
            </svg>
            
            {/* INTERACTIVE NODES (Non-rectangular features) */}
            <div className="vgc-magnetic-node vgc-node-top"><FaHospital /><span>Top Hospitals</span></div>
            <div className="vgc-magnetic-node vgc-node-right"><FaUserMd /><span>Expert Doctors</span></div>
            <div className="vgc-magnetic-node vgc-node-bottom"><FaGlobeAsia /><span>Global Patients</span></div>
            <div className="vgc-magnetic-node vgc-node-left"><FaHeartbeat /><span>Complete Care</span></div>
          </div>
        </div>

        {/* RIGHT: DYNAMIC CONTENT FLOW */}
        <div className="vgc-text-nucleus">
          <div className="vgc-label-tag vgc-reveal vgc-fade-up">Premium Healthcare Gateway</div>
          <h2 className="vgc-hero-title vgc-reveal vgc-fade-up">
            About <span>VGCares Global</span>
          </h2>
          
          <div className="vgc-description-pillar vgc-reveal vgc-fade-up">
            <p>
              VGCares Global is an advanced healthcare tourism platform designed to
              connect international patients with India's most trusted hospitals,
              expert doctors, and modern medical infrastructure. Our platform
              simplifies the entire medical journey — from consultation and
              hospital selection to travel assistance and post-treatment care.
            </p>
            <p>
              With India's growing reputation as a global healthcare hub, VGCares
              ensures transparency, affordability, and world-class treatment
              options for patients across the globe while maintaining the highest
              standards of medical care and patient safety.
            </p>
          </div>

          {/* DYNAMIC STATS (No borders/boxes) */}
          <div className="vgc-stats-grid vgc-reveal vgc-fade-up">
            <div className="vgc-stat-unit">
              <span className="vgc-stat-val">100%</span>
              <span className="vgc-stat-lbl">Transparency</span>
            </div>
            <div className="vgc-stat-unit">
              <span className="vgc-stat-val">500+</span>
              <span className="vgc-stat-lbl">Specialists</span>
            </div>
            <div className="vgc-stat-unit">
              <span className="vgc-stat-val">24/7</span>
              <span className="vgc-stat-lbl">Patient Support</span>
            </div>
          </div>

          {/* MISSION & VISION GLASS-SHAPES */}
          <div className="vgc-mission-vision-stage vgc-reveal vgc-fade-up">
            <div className="vgc-leaf-panel vgc-mission-panel">
              <div className="vgc-panel-inner">
                <h3>Our Mission</h3>
                <p>To make world-class healthcare accessible and affordable for patients worldwide by connecting them with India's most trusted medical institutions.</p>
              </div>
            </div>
            <div className="vgc-leaf-panel vgc-vision-panel">
              <div className="vgc-panel-inner">
                <h3>Our Vision</h3>
                <p>To become a global leader in medical tourism by building a transparent and technology-driven healthcare ecosystem that empowers patients.</p>
              </div>
            </div>
          </div>

          <button className="vgc-action-trigger vgc-reveal vgc-fade-up">
            Explore Services <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;