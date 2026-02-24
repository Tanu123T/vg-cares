import React, { useState, useEffect } from 'react';
import { treatmentData } from '../../data/treatments';
import './Treatments.css';
import { useNavigate } from "react-router-dom";   // ✅ added

const Treatments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Orthopedic');
  const [search, setSearch] = useState('');
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate(); // ✅ added

  if (!treatmentData) return null;

  // BODY LOCK LOGIC
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => setAnimate(true), 10);

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;

      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isModalOpen]);

  const previews = [
    { ...treatmentData.Orthopedic[0], cat: 'Orthopedic' },
    { ...treatmentData.Cardiac[0], cat: 'Cardiac' },
    { ...treatmentData.Cancer[0], cat: 'Oncology' },
    { ...treatmentData.Cosmetic[0], cat: 'Cosmetic' },
    { ...treatmentData.Orthopedic[1], cat: 'Orthopedic' },
    { ...treatmentData.Cardiac[1], cat: 'Cardiac' }
  ];

  const categories = Object.keys(treatmentData);
  const currentCategoryData = treatmentData[activeTab] || [];
  const filteredData = currentCategoryData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="treatments-section">
      <div className="container-treatment">

        {/* --- HERO SECTION --- */}
        <div className="modern-heading">
          <span className="glass-badge">Explore Our Excellence</span>
          <h2>The World's Finest <span className="gradient-text">Medical Packages</span></h2>
          <div className="heading-line"></div>
          <p>We've curated 50+ specialized surgical plans with top-tier hospitals globally.</p>
        </div>

        {/* --- TOP PREVIEW CARDS --- */}
        <div className="preview-grid">
          {previews.map(item => (
            <div className="luxury-card" key={item.id}>
              <div className="tagname_image">
                <div className="tag_name">
                  <div className="card-tag">{item.cat}</div>
                  <div className="item-name">
                    <h3>{item.name}</h3>
                  </div>
                  <p className="luxury-price">
                    Starting from <span>{item.price}</span>
                  </p>
                </div>
                <div className="luxury-image">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>

              <div className="luxury-divider"></div>

              {/* ✅ Get Treatment Plans linked to signin */}
              <button
                className="vgc-btn-inquiry2"
                onClick={() => navigate("/signin")}
              >
                Get Treatment Plans
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button
            className="shiny-view-btn"
            onClick={() => setIsModalOpen(true)}
          >
            <span>Explore 50+ Treatment Plans</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* --- FULL DASHBOARD MODAL --- */}
        {isModalOpen && (
          <div
            className={`vgc-modal-overlay ${animate ? 'vgc-active' : ''}`}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="vgc-modal-window"
              onClick={e => e.stopPropagation()}
            >

              <aside className="vgc-modal-sidebar">
                <div className="vgc-sidebar-header">
                  <div className="vgc-pulse-dot"></div>
                  <span>CATALOG</span>
                </div>

                <div className="vgc-sidebar-nav-container">
                  <nav className="vgc-sidebar-nav">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        className={`vgc-nav-btn ${activeTab === cat ? 'vgc-active' : ''}`}
                        onClick={() => {
                          setActiveTab(cat);
                          setSearch('');
                        }}
                      >
                        <i className={`fas ${
                          cat === 'Orthopedic'
                            ? 'fa-bone'
                            : cat === 'Cardiac'
                            ? 'fa-heartbeat'
                            : cat === 'Cancer'
                            ? 'fa-ribbon'
                            : 'fa-spa'
                        }`}></i>
                        <span>{cat}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              <main className="vgc-modal-main">
                <header className="vgc-modal-header">
                  <div className="vgc-search-bar">
                    <i className="fas fa-search"></i>
                    <input
                      type="text"
                      placeholder={`Search ${activeTab}...`}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  <button
                    className="vgc-close-modal"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </header>

                <div className="vgc-modal-body">
                  <div className="vgc-list-head">
                    <span>Specialized Procedure</span>
                    <span>Recovery Time</span>
                    <span>Starting Est.</span>
                    <span>Selection</span>
                  </div>

                  <div className="vgc-list-scroll">
                    {filteredData.length > 0 ? (
                      filteredData.map((item, idx) => (
                        <div
                          className="vgc-list-row"
                          key={item.id || idx}
                          style={{ '--delay': idx }}
                        >
                          <div className="vgc-row-name">
                            <div>
                              <h4>{item.name}</h4>
                              <small>Stay: {item.stay}</small>
                            </div>
                          </div>

                          <div className="vgc-row-recovery">
                            <span>{item.recovery}</span>
                          </div>

                          <div className="vgc-row-price">
                            {item.price}
                          </div>

                          <div className="vgc-row-action">
                            {/* ✅ Details linked to signin */}
                            <button
                              className="vgc-btn-inquiry"
                              onClick={() => navigate("/signin")}
                            >
                              Details
                              <i className="fas fa-chevron-right"></i>
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="vgc-no-results">
                        No procedures found matching your search.
                      </div>
                    )}
                  </div>
                </div>
              </main>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Treatments;