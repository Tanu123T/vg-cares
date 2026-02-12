import React, { useEffect } from "react";
import {
  Video,
  ShieldCheck,
  Calculator,
  MapPin,
  Network,
  Cpu,
  Globe,
  LayoutDashboard,
  HandHeart,
} from "lucide-react";

import "./Features.css";

export default function Features() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    // Target all reveal types
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <section className="capabilities-container capabilities-wrapper" id="capabilities">
      
      {/* Header Section */}
      <div className="capabilities-text-center reveal">
        <div className="capabilities-badge">Our Capabilities</div>
        <h2 className="capabilities-header-title">
          Features That Bridge <br />
          <span>Borders</span>
        </h2>
      </div>

      {/* Top Features Grid */}
      <div className="capabilities-top-grid">
        <div className="capabilities-feature-card reveal">
          <div className="capabilities-icon-wrapper">
            <div className="capabilities-pulse"></div>
            <Video className="anim-video" size={32} />
          </div>
          <h3>Video Consultation</h3>
          <p>Connect with global specialists instantly from your home.</p>
        </div>

        <div className="capabilities-feature-card reveal">
          <div className="capabilities-icon-wrapper">
            <div className="capabilities-pulse"></div>
            <ShieldCheck className="anim-shield" size={32} />
          </div>
          <h3>Verified Network</h3>
          <p>Accredited hospitals and expert doctors. Trust in one choice.</p>
        </div>

        <div className="capabilities-feature-card reveal">
          <div className="capabilities-icon-wrapper">
            <div className="capabilities-pulse"></div>
            <Calculator className="anim-calc" size={32} />
          </div>
          <h3>Transparent Pricing</h3>
          <p>AI-driven currency converter for total financial clarity.</p>
        </div>

        <div className="capabilities-feature-card reveal">
          <div className="capabilities-icon-wrapper">
            <div className="capabilities-pulse"></div>
            <MapPin className="anim-pin" size={32} />
          </div>
          <h3>End-to-End Care</h3>
          <p>Travel, stay, and appointments all in one convenient place.</p>
        </div>
      </div>

      <h3 className="capabilities-overview-label reveal">
        Comprehensive Features Overview
      </h3>

      {/* Bottom Detailed Grid */}
      <div className="capabilities-bottom-grid">
        <div className="capabilities-section-box capabilities-blue-section reveal-left">
          <h4>Medical Excellence</h4>
          <div className="capabilities-mini-card-container">

            <div className="capabilities-mini-card-wrapper">
              <div className="capabilities-mini-card-front">
                <div className="capabilities-mini-icon capabilities-blue-mini">
                  <Network className="anim-shield" />
                </div>
                <p>Patient Data Security</p>
              </div>
              <div className="capabilities-mini-card-back">
                Protecting your health information, every step of the way
              </div>
            </div>

            <div className="capabilities-mini-card-wrapper">
              <div className="capabilities-mini-card-front">
                <div className="capabilities-mini-icon capabilities-blue-mini">
                  <Cpu className="anim-shield" />
                </div>
                <p>AI Cost Calculator</p>
              </div>
              <div className="capabilities-mini-card-back">
                Quickly calculate expected medical expenses in seconds
              </div>
            </div>

            <div className="capabilities-mini-card-wrapper">
              <div className="capabilities-mini-card-front">
                <div className="capabilities-mini-icon capabilities-blue-mini">
                  <ShieldCheck className="anim-shield" />
                </div>
                <p>Insurance Help</p>
              </div>
              <div className="capabilities-mini-card-back">
                Our team helps you manage claims and insurance processes smoothly.
              </div>
            </div>
          </div>
        </div>

        <div className="capabilities-section-box capabilities-green-section reveal-right">
          <h4>Logistics & Safety</h4>
          <div className="capabilities-mini-card-container">
            
            <div className="capabilities-mini-card-wrapper">
              <div className="capabilities-mini-card-front">
                <div className="capabilities-mini-icon capabilities-green-mini">
                  <Globe className="anim-globe" />
                </div>
                <p>Travel Assistance</p>
              </div>
              <div className="capabilities-mini-card-back">
                Complete travel support for a smooth medical trip
              </div>
            </div>

            <div className="capabilities-mini-card-wrapper">
              <div className="capabilities-mini-card-front">
                <div className="capabilities-mini-icon capabilities-green-mini">
                  <LayoutDashboard className="anim-video" />
                </div>
                <p>Visa Management</p>
              </div>
              <div className="capabilities-mini-card-back">
                Easy and hassle-free medical visa support
              </div>
            </div>

            <div className="capabilities-mini-card-wrapper">
              <div className="capabilities-mini-card-front">
                <div className="capabilities-mini-icon capabilities-green-mini">
                  <HandHeart className="anim-heart" />
                </div>
                <p>Aftercare & Followups</p>
              </div>
              <div className="capabilities-mini-card-back">
                Continuous support and follow-up care after your treatment.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}