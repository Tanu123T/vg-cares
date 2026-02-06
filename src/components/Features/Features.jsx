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
  HandHeart,
} from "lucide-react";

import "./Features.css";

export default function Capabilities() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className="capabilities-container capabilities-wrapper"
      id="capabilities"
    >
      {/* Header */}
      <div className="capabilities-text-center reveal">
        <div className="capabilities-badge">Our Capabilities</div>
        <h2 className="capabilities-header-title">
          Features That Bridge <br />
          <span>Borders</span>
        </h2>
      </div>

      {/* Top Grid */}
      <div className="capabilities-top-grid">
        <FeatureCard
          icon={<Video size={32} />}
          title="Video Consultation"
          text="Connect with global specialists instantly from your home."
        />

        <FeatureCard
          icon={<ShieldCheck size={32} />}
          title="Verified Network"
          text="Accredited hospitals and expert doctors. Trust in one choice."
        />

        <FeatureCard
          icon={<Calculator size={32} />}
          title="Transparent Pricing"
          text="AI-driven currency converter for total financial clarity."
        />

        <FeatureCard
          icon={<MapPin size={32} />}
          title="End-to-End Care"
          text="Travel, stay, and appointments all in one convenient place."
        />
      </div>

      <h3 className="capabilities-overview-label reveal">
        Comprehensive Features Overview
      </h3>

      {/* Bottom Grid */}
      <div className="capabilities-bottom-grid">
        {/* Medical Excellence */}
        <SectionBox
          title="Medical Excellence"
          className="capabilities-blue-section reveal-left"
          items={[
            {
              icon: <Network />,
              title: "Provider Directory",
              back: "Secure medical data vault for patient records and history",
            },
            {
              icon: <Cpu />,
              title: "AI Quote Engine",
              back: "Telehealth concierge for instant billing and cost estimates",
            },
            {
              icon: <ShieldCheck />,
              title: "Insurance Help",
              back: "Seamless insurance concierge and global coverage support",
            },
          ]}
          miniClass="capabilities-blue-mini"
        />

        {/* Logistics & Safety */}
        <SectionBox
          title="Logistics & Safety"
          className="capabilities-green-section reveal-right"
          items={[
            {
              icon: <Globe />,
              title: "Travel & Visa",
              back: "Medical transfers, flights, and hotel coordination globally",
            },
            {
              icon: <LayoutDashboard />,
              title: "Visa Desk Dashboard",
              back: "Managed medical transfer arrangements and homes",
            },
            {
              icon: <HandHeart />,
              title: "Aftercare & Follow-ups",
              back: "Emergency help and immediate post-op support 24/7",
            },
          ]}
          miniClass="capabilities-green-mini"
        />
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function FeatureCard({ icon, title, text }) {
  return (
    <div className="capabilities-feature-card reveal">
      <div className="capabilities-icon-wrapper">
        <div className="capabilities-pulse"></div>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function SectionBox({ title, items, className, miniClass }) {
  return (
    <div className={`capabilities-section-box ${className}`}>
      <h4>{title}</h4>
      <div className="capabilities-mini-card-container">
        {items.map((item, i) => (
          <div className="capabilities-mini-card-wrapper" key={i}>
            <div className="capabilities-mini-card-front">
              <div className={`capabilities-mini-icon ${miniClass}`}>
                {item.icon}
              </div>
              <p>{item.title}</p>
            </div>
            <div className="capabilities-mini-card-back">{item.back}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
