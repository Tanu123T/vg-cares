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

    // clone cards for infinite scroll
    const cards = [...slider.children];
    cards.forEach(card => {
      slider.appendChild(card.cloneNode(true));
    });

    const autoScroll = () => {
      if (!isPaused.current) {
        scrollPosition.current -= autoScrollSpeed;

        if (Math.abs(scrollPosition.current) >= slider.scrollWidth / 2) {
          scrollPosition.current = 0;
        }

        slider.style.transform = `translateX(${scrollPosition.current}px)`;
      }
      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }, []);

  const nextSlide = () => {
    const slider = sliderRef.current;
    scrollPosition.current -= scrollStep;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(${scrollPosition.current}px)`;
    setTimeout(() => (slider.style.transition = "none"), 500);
  };

  const prevSlide = () => {
    const slider = sliderRef.current;
    scrollPosition.current += scrollStep;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(${scrollPosition.current}px)`;
    setTimeout(() => (slider.style.transition = "none"), 500);
  };

  return (
    <section className="consult-container">
      <div className="header">
        <span className="disease-badge">Diseases</span>

        <div className="disease-title-row">
          <h1>Consult top doctors online for any health concern</h1>

          <div className="disease-nav-wrapper">
            <button onClick={prevSlide} className="disease-scroll-arrow">←</button>
            <button onClick={nextSlide} className="disease-scroll-arrow">→</button>
            <button className="disease-view-all">View all Specialists →</button>
          </div>
        </div>

        <p className="disease-subtitle">
          Private online consultation with verified doctors in all specialist.
        </p>
      </div>

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
    </section>
  );
};

export default Diseases;