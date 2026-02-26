import React, { useEffect } from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Video Consultation",
    desc: "Connect with world class specialist with comfort of your home.",
    icon: "fa-video",
    color: "green",
    card: "card-special1",
     points: [
      "Instant Specialist Matching",
      "Secure HD Video Sessions",
      "Digital Prescriptions",
      "Easy Follow-up Scheduling"
    ]
  },
  {
    title: "Travel Assistance",
    desc: "Complete medical visa support and travel arrangements handled for you.",
    icon: "fa-plane",
    color: "blue",
    card: "card-blue",
    points: [
      "Medical Visa Documentation",
      "Flight & Stay Coordination",
      "Airport Pickup Support",
      "End-to-End Travel Planning"
    ]
  },
  {
    title: "Verified Hospitals",
    desc: "Access to accredited medical facilities with proven track records.",
    icon: "fa-circle-check",
    color: "green",
    card: "card-special1",
    points: [
      "Accredited Institutions",
      "Advanced Infrastructure",
      "Experienced Medical Teams",
      "Proven Success Records"
    ]
  },
  {
    title: "Cost Estimation",
    desc: "We provide transparent estimates so you can focus on your recovery, not your bills.",
    icon: "fa-indian-rupee-sign",
    color: "blue",
    card: "card-blue",
    points: [
      "Detailed Cost Breakdown",
      "Transparent Pricing",
      "No Hidden Charges",
      "Insurance Guidance"
    ]
  },
  {
    title: "Data Security",
    desc: "All patient information is encrypted and fully protected.",
    icon: "fa-lock",
    color: "green",
    card: "card-special1",
    points: [
      "End-to-End Encryption",
      "Secure Cloud Storage",
      "HIPAA-Compliant Systems",
      "Role-Based Access Control"
    ]
  },
  {
    title: "24/7 Support",
    desc: "Our team is available around the clock to assist you anytime.",
    icon: "fa-earth-americas",
    color: "blue",
    card: "card-blue",
    points: [
      "Dedicated Care Team",
      "Multilingual Assistance",
      "Emergency Coordination",
      "Real-Time Query Resolution"
    ]
  },
];

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            // FIX: Remove "show" when scrolling away so it animates again next time
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } 
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    /* ADDED id="services" for the Navbar scroll logic */
    <section className="expertise" id="services">
      <span className="badge">Our Expertise</span>

      <h1 className="service-title">
        Smart, Secure & Seamless <span>Healthcare</span>
      </h1>

      <p className="desc"><b>
        Smart medical solutions tailored to your needs. We ensure accessibility, clarity, and complete data protection.</b>
      </p>
    
      <div className="grid">
  {servicesData.map((item, index) => {
    return (
      <div className={`card ${item.card}`} key={index}>
        
        <div className="card-top">
          <div className={`icon ${item.color}`}>
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
          <h3>{item.title}</h3>
        </div>

        <p className="main-desc">{item.desc}</p>
                <div className="divider"></div>
        <div className="extra-content">
          <ul>
  {item.points.map((point, i) => (
    <li key={i}>✔ {point}</li>
  ))}
</ul>
        </div>

      </div>
    );
  })}
</div>
    
    </section>
  );
};

export default Services;