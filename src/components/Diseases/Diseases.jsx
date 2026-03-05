import React, { useEffect, useRef, useState } from "react";
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
import m1 from "../../assets/images/m1.png";
import m2 from "../../assets/images/m2.png";
import m5 from "../../assets/images/m5.png";
import m6 from "../../assets/images/m6.png";
import m7 from "../../assets/images/m7.png";
import m8 from "../../assets/images/m8.png";
// import m9 from "../../assets/images/m9.png";
import m10 from "../../assets/images/m10.png";
import m11 from "../../assets/images/m11.png";
import m12 from "../../assets/images/m12.png";
import m14 from "../../assets/images/m14.png";
// import m9 from "../../assets/images/m9.png";
import m16 from "../../assets/images/m16.png";
import m17 from "../../assets/images/m17.png";
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

// Modal Only Diseases (Different from main section)
const modalDiseases = [
  // Cardiology
  { img: m1,name: "Coronary Artery Disease", desc: "Blocked heart arteries", category: "Cardiology" },
  { img: m2,name: "Arrhythmia", desc: "Irregular heart rhythm disorder", category: "Cardiology" },
  { name: "Cardiomyopathy", desc: "Heart muscle disease", category: "Cardiology" },

  // Neurology
  { name: "Stroke", desc: "Brain blood flow interruption", category: "Neurology" },
  { img: m5,name: "Epilepsy", desc: "Seizure disorder", category: "Neurology" },
  {name: "Parkinson’s Disease", desc: "Progressive nervous system disorder", category: "Neurology" },

  // Oncology
  {img: m7, name: "Lung Cancer", desc: "Malignant lung tumor", category: "Oncology" },
  { name: "Breast Cancer", desc: "Cancer affecting breast tissue", category: "Oncology" },
  { name: "Leukemia", desc: "Blood cancer", category: "Oncology" },

  // Gastroenterology
  {img: m10, name: "Pancreatitis", desc: "Inflammation of pancreas", category: "Gastroenterology" },
  {img: m11, name: "Hepatitis B", desc: "Liver infection", category: "Gastroenterology" },

  // Nephrology
  { name: "Chronic Kidney Disease", desc: "Gradual kidney function loss", category: "Nephrology" },

  // Pulmonology
  { name: "COPD", desc: "Chronic obstructive pulmonary disease", category: "Pulmonology" },

  // Dermatology
  {img: m14, name: "Psoriasis", desc: "Chronic skin condition", category: "Dermatology" },
  { name: "Melanoma", desc: "Serious skin cancer", category: "Dermatology" },

  // Orthopedics
  {img: m16, name: "Rheumatoid Arthritis", desc: "Autoimmune joint disorder", category: "Orthopedics" },

  // Urology
  {img: m17, name: "Prostate Cancer", desc: "Cancer of prostate gland", category: "Urology" },
];
const Diseases = () => {
  const sliderRef = useRef(null);
  const scrollPosition = useRef(0);
  const isPaused = useRef(false);
const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef(null);
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

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

useEffect(() => {
  if (!showModal) return;

  const modalElement = document.querySelector(".explore-modal");

  const handleScroll = () => {
    setIsOpen(false);
  };

  if (modalElement) {
    modalElement.addEventListener("scroll", handleScroll);
  }

  return () => {
    if (modalElement) {
      modalElement.removeEventListener("scroll", handleScroll);
    }
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

  const [showModal, setShowModal] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const categories = [
  "All",
  ...new Set(modalDiseases.map(d => d.category))
];

const filteredDiseases = modalDiseases.filter((d) => {
  const matchesSearch = d.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    d.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <section className="consult-container">
      <div className="header">
        <span className="disease-badge">Health Conditions</span>
        <div className="disease-title-row">
    
          <h1>Expert Care for  <span>Health Conditions & Disorders</span></h1>
      
          <div className="disease-nav-wrapper">
           <button
  className="disease-view-all"
  onClick={() => setShowModal(true)}
>
  Explore More
</button>
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
  {showModal && (
  <div
    className="explore-modal-overlay"
    onClick={() => setShowModal(false)}
  >
    <div
      className="explore-modal"
      onClick={(e) => e.stopPropagation()}
    >
      
      {/* HEADER */}
      <div className="explore-header">
  <div className="explore-title">
    <h2>Explore Medical Conditions</h2>
    <p>Browse diseases by category or search instantly</p>
  </div>

  <button
    className="explore-close"
    onClick={() => {
      setShowModal(false);
      setSearchTerm("");
      setSelectedCategory("All");
      setIsOpen(false);
    }}
  >
    ×
  </button>
</div>

      {/* CONTROLS */}
      <div className="explore-controls">
        <input
          type="text"
          placeholder="Search disease..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="dropdown-container" ref={dropdownRef}>
          <div
            className="dropdown-header"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedCategory}
            <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}></span>
          </div>

          {isOpen && (
            <div className="dropdown-menu">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`dropdown-item ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsOpen(false);
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RESULTS COUNT */}
      <div className="explore-results">
        Showing {filteredDiseases.length} conditions
      </div>

      {/* GRID */}
      <div className="explore-grid">
        {filteredDiseases.map((item, index) => (
  <div className="explore-card" key={index}>
    {/* This wrapper is the key for side-by-side alignment */}
    <div className="explore-card-content">
      <div className="explore-card-img">
        <img src={item.img} alt={item.name} />
      </div>
      
      <div className="explore-card-text">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span className="explore-category">{item.category}</span>
      </div>
    </div>
  </div>
))}
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Diseases;