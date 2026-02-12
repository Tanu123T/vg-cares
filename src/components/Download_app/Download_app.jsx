import React, { useEffect, useRef } from 'react';
import "./Download_app.css";

import playStoreImg from "../../assets/images/playstore.png";
import appStoreImg from "../../assets/images/appstore.png";
import phoneImg from "../../assets/images/downloadapp.png";

const DownloadApp = () => {
  // Use a ref instead of document.getElementById
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return; // Guard clause to prevent errors

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      
      // Calculate rotation
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="downloadapp">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Attach the ref here */}
      <section className="app-card" ref={cardRef}>
        <div className="app-content">
          <h1 className="app-title">
            Download the <br />
            <span className="gradient-text">VG Care App</span> now!
          </h1>

          <p className="app-description">
            Seamless access to international hospitals, doctors, and treatment
            support with VG Care. Your health journey, simplified.
          </p>

          <div className="store-btns">
            <a href="#" className="btn-link">
              <img src={playStoreImg} alt="Get it on Google Play" />
            </a>
            <a href="#" className="btn-link">
              <img src={appStoreImg} alt="Download on the App Store" />
            </a>
          </div>
        </div>

        {/* Right Phone */}
        <div className="phone-wrapper">
          <div className="phone-frame"></div>
          <img
            src={phoneImg}
            alt="VG Care App Interface"
            className="phone-img"
          />
        </div>
      </section>
    </section>
  );
};

export default DownloadApp;