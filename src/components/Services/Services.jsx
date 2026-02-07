import React, { useEffect } from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Video Consultation",
    desc: "Connect with world class specialist with comfort of your home.",
    icon: "fa-video",
    color: "green",
    card: "card-special1",
  },
  {
    title: "Travel Assistance",
    desc: "Complete medical visa support and travel arrangements handled for you.",
    icon: "fa-plane",
    color: "blue",
    card: "card-blue",
  },
  {
    title: "Verified Hospitals",
    desc: "Access to accredited medical facilities with proven track records.",
    icon: "fa-circle-check",
    color: "orange",
    card: "card-orange",
  },
  {
    title: "Cost Estimation",
    desc: "Transparent pricing with no hidden fees.",
    icon: "fa-indian-rupee-sign",
    color: "sky",
    card: "card-sky",
  },
  {
    title: "Data Security",
    desc: "All patient information is encrypted and fully protected.",
    icon: "fa-lock",
    color: "green",
    card: "card-special1",
  },
  {
    title: "24/7 Support",
    desc: "Our team is available around the clock to assist you anytime.",
    icon: "fa-earth-americas",
    color: "blue",
    card: "card-blue",
  },
];

const Services = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    /* ADDED id="services" for the Navbar scroll logic */
    <section className="expertise" id="services">
      <span className="badge">Our Expertise</span>

      <h1 className="service-title">
        Comprehensive Care Designed for You
      </h1>

      <p className="desc"><b>
        Healthcare that fits your life. Our services are built to be accessible, transparent and secure.</b>
      </p>
    
      <div className="grid">
        {servicesData.map((item, index) => (
          <div className={`card ${item.card}`} key={index}>
            <div className={`icon ${item.color}`}>
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default Services;