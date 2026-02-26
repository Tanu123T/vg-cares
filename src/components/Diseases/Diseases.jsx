import React, { useEffect, useRef } from "react";
import "./Diseases.css";
import d1 from "../../assets/images/d1.png";
import d2 from "../../assets/images/d2.png";
import d3 from "../../assets/images/d3.png";
import d4 from "../../assets/images/d4.png";
import d5 from "../../assets/images/d5.png";
import d6 from "../../assets/images/d6.png";
import d7 from "../../assets/images/d7.png";
import d8 from "../../assets/images/d8.png";
import d9 from "../../assets/images/d9.png";
import d10 from "../../assets/images/d10.png";
import { Link } from "react-router-dom";

const diseases = [
  { img: d1, name: "Heart Failure", desc: "Advanced Heart Care" },
  { img: d2, name: "Brain Tumor", desc: "Comprehensive Neuro Oncology Care" },
  { img: d3, name: "Asthma", desc: "Advanced Respiratory Care" },
  { img: d4, name: "Liver Cirrhosis", desc: "Chronic Liver Disease Management" },
  { img: d5, name: "Kidney Failure", desc: "Comprehensive Renal Care" },
  { img: d6, name: "Peritonitis", desc: "Emergency Abdominal Infection Treatment" },
  { img: d7, name: "Neurology" , desc: "Brain and Nerve Care"},
  { img: d8, name: "Orthopedics", desc: "Bone and Joint Care" },
  { img: d9, name: "Urology" , desc: "Urinary Tract Care"},
  { img: d10, name: "Dermatology", desc: "Skin and Hair Care" },
];

const Diseases = () => {
  const sliderRef = useRef(null);
  const scrollPosition = useRef(0);
  const isPaused = useRef(false);

  const scrollStep = 210;
  const autoScrollSpeed = 0.5;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // 1. Prevent double-cloning by checking a data attribute
    if (!slider.dataset.cloned) {
      const cards = Array.from(slider.children);
      if (cards.length > 0) {
        cards.forEach((card) => {
          slider.appendChild(card.cloneNode(true));
        });
        slider.dataset.cloned = "true";
      }
    }

    let rafId = null;

    // 2. Auto-scroll function
    const autoScroll = () => {
      if (!isPaused.current) {
        scrollPosition.current -= autoScrollSpeed;

        // Reset to middle for infinite effect once it hits halfway
        if (Math.abs(scrollPosition.current) >= slider.scrollWidth / 2) {
          scrollPosition.current = 0;
        }

        slider.style.transform = `translateX(${scrollPosition.current}px)`;
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);

    // Cleanup: stop animation when component unmounts
    return () => cancelAnimationFrame(rafId);
  }, []);

  const nextSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isPaused.current = true;
    scrollPosition.current -= scrollStep;
    slider.style.transition = "transform 0.4s ease";
    slider.style.transform = `translateX(${scrollPosition.current}px)`;

    setTimeout(() => {
      if (slider) slider.style.transition = "none";
      isPaused.current = false;
    }, 450);
  };

  const prevSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isPaused.current = true;
    scrollPosition.current += scrollStep;
    slider.style.transition = "transform 0.4s ease";
    slider.style.transform = `translateX(${scrollPosition.current}px)`;

    setTimeout(() => {
      if (slider) slider.style.transition = "none";
      isPaused.current = false;
    }, 450);
  };

  return (
    <section className="consult-container">
      <div className="header">
        <span className="disease-badge">Health Conditions</span>
        <div className="disease-title-row">
    
          <h1>Expert Care for  <span>Health Conditions & Disorders</span></h1>
      
          <div className="disease-nav-wrapper">
            <a href="/doctors" className="disease-view-all-link">
              <button className="disease-view-all">View More</button>
            </a>
          </div>
        </div>
        <p className="disease-subtitle">
          Connect with experienced specialists for accurate diagnosis and advanced treatment of complex<br /> health conditions.
        </p>
      </div>

        <div className="timeline-wrapper">

    {/* TOP ROW */}
    <div className="timeline-row top">
      {diseases.slice(0, 5).map((item, index) => (
      <div className="timeline-item" key={index}>
<div className="timeline-card">
  <div className="card-text">
    <h3>{item.name}</h3>
    <p>{item.desc}</p>
  </div>

  <div className="card-image">
    <img src={item.img} alt={item.name} />
  </div>
</div>
</div>
      ))}
    </div>

    {/* CENTER LINE */}
    <div className="timeline-line"></div>

    {/* BOTTOM ROW */}
    <div className="timeline-row bottom">
      {diseases.slice(5, 10).map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-card">
  <div className="card-text">
    <h3>{item.name}</h3>
    <p>{item.desc}</p>
  </div>

  <div className="card-image">
    <img src={item.img} alt={item.name} />
  </div>
</div>
        </div>
      ))}
    </div>

  </div>
    </section>
  );
};

export default Diseases;