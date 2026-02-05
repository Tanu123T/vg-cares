import { useEffect } from "react";
import {
  Video,
  ShieldCheck,
  Calculator,
  MapPin,
  Network,
  Cpu,
  Globe,
  LayoutDashboard,
  HandHeart
} from "lucide-react";

import "./Features.css";

export default function Capabilities() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach(el => observer.observe(el));

  }, []);

  return (
    <section className="capabilities-container capabilities-wrapper">

      <div className="capabilities-text-center reveal">
        <div className="capabilities-badge">Our Capabilities</div>
        <h2 className="capabilities-header-title">
          Features That Bridge <br />
          <span>Borders</span>
        </h2>
      </div>

      {/* TOP CARDS */}
      <div className="capabilities-top-grid">

        <Card icon={<Video />} title="Video Consultation" text="Connect with global specialists instantly from your home." anim="anim-video" />

        <Card icon={<ShieldCheck />} title="Verified Network" text="Accredited hospitals and expert doctors." anim="anim-shield" />

        <Card icon={<Calculator />} title="Transparent Pricing" text="AI-driven currency converter." anim="anim-calc" />

        <Card icon={<MapPin />} title="End-to-End Care" text="Travel, stay, appointments in one place." anim="anim-pin" />

      </div>

      <h3 className="capabilities-overview-label reveal">
        Comprehensive Features Overview
      </h3>

      <div className="capabilities-bottom-grid">

        {/* BLUE */}
        <div className="capabilities-section-box capabilities-blue-section reveal-left">
          <h4>Medical Excellence</h4>

          <Mini icon={<Network />} title="Provider Directory" />

          <Mini icon={<Cpu />} title="AI Quote Engine" />

          <Mini icon={<ShieldCheck />} title="Insurance Help" />
        </div>

        {/* GREEN */}
        <div className="capabilities-section-box capabilities-green-section reveal-right">
          <h4>Logistics & Safety</h4>

          <Mini icon={<Globe />} title="Travel & Visa" green />

          <Mini icon={<LayoutDashboard />} title="Visa Desk Dashboard" green />

          <Mini icon={<HandHeart />} title="Aftercare" green />

        </div>

      </div>

    </section>
  );
}

/* CARD COMPONENT */

function Card({ icon, title, text, anim }) {
  return (
    <div className="capabilities-feature-card reveal">
      <div className={`capabilities-icon-wrapper ${anim}`}>
        <div className="capabilities-pulse"></div>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

/* MINI CARD */

function Mini({ icon, title, green }) {
  return (
    <div className="capabilities-mini-card-wrapper">
      <div className="capabilities-mini-card-front">
        <div className={`capabilities-mini-icon ${green ? "capabilities-green-mini" : "capabilities-blue-mini"}`}>
          {icon}
        </div>
        <p>{title}</p>
      </div>

      <div className="capabilities-mini-card-back">
        Feature description
      </div>
    </div>
  );
}
