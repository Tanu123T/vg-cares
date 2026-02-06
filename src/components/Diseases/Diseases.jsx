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

const diseases = [
  { img: d1, name: "Heart Failure" },
  { img: d2, name: "Brain Tumor" },
  { img: d3, name: "Pulmonary Fibrosis" },
  { img: d4, name: "Liver Cirrhosis" },
  { img: d5, name: "Kidney Failure" },
  { img: d6, name: "Gastroenterology" },
  { img: d7, name: "Neurology" },
  { img: d8, name: "Orthopedics" },
  { img: d9, name: "Urology" },
  { img: d10, name: "Dermatology" },
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

    // 1. Prevent double-cloning
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

    // 2. Optimized Auto-scroll Function
    const autoScroll = () => {
      if (!isPaused.current) {
        scrollPosition.current -= autoScrollSpeed;

        // Reset to middle for infinite effect
        if (Math.abs(scrollPosition.current) >= slider.scrollWidth / 2) {
          scrollPosition.current = 0;
        }

        slider.style.transform = `translateX(${scrollPosition.current}px)`;
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
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
        <span className="disease-badge">Diseases</span>
        <div className="disease-title-row">
          <h1>Consult top doctors online for any health concern</h1>
          <div className="disease-nav-wrapper">
            <a href="/doctors">
              <button className="disease-view-all">View all Specialists →</button>
            </a>
          </div>
        </div>
        <p className="disease-subtitle">
          Private online consultation with verified doctors in all specialties.
        </p>
      </div>

      <div className="disease-slider-wrapper">
        <button className="disease-outside-arrow left" onClick={prevSlide}>
          &lt;
        </button>

        <div className="disease-slider-viewport">
          <div
            className="disease-specialist-grid"
            ref={sliderRef}
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
          >
            {diseases.map((item, index) => (
              <div className="disease-card" key={index}>
                <div className="disease-circle-container">
                  <div className="disease-dashed-outline"></div>
                  <div className="disease-icon-inner">
                    <img src={item.img} alt={item.name} />
                  </div>
                </div>
                <h3>{item.name}</h3>
                <button className="disease-consult-btn">Consult Now</button>
              </div>
            ))}
          </div>
        </div>

        <button className="disease-outside-arrow right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Diseases;