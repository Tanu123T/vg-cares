import React from "react";
import "./Services.css";


const servicesData = [
  {
    title: "Video Consultation",
    desc: "Connect with world class specialist with comfort of your home.",
    icon1: "fa-video",
    color: "green",
    card: "card-special1",
    points: [
      "Instant Specialist Matching",
      "Digital Prescriptions",
      "Easy Follow-up Scheduling"
    ]
  },
  {
    title: "Travel Assistance",
    desc: "Complete medical visa support and travel arrangements handled for you.",
    icon1: "fa-plane",
    color: "blue",
    card: "card-blue",
    points: [
      "Medical Visa Documentation",
      "Flight & Stay Coordination",
      "End-to-End Travel Planning"
    ]
  },
  {
    title: "Follow-Up Care",
    desc: "Continuous medical support even after treatment.",
    icon1: "fa-circle-check",
    color: "green",
    card: "card-special1",
    points: [
      "Post-treatment consultation",
      "Recovery monitoring",
      "Doctor follow-up scheduling",
    ]
  },
  {
    title: "Cost Estimation",
    desc: "We provide transparent estimates so you can focus on your recovery, not your bills.",
    icon1: "fa-indian-rupee-sign",
    color: "blue",
    card: "card-blue",
    points: [
      "Detailed Cost Breakdown",
      "No Hidden Charges and Transparent Pricing",
      "Insurance Guidance"
    ]
  },
  {
    title: "Patient Support",
    desc: "Dedicated assistance to guide patients throughout their medical journey..",
    icon1: "fa-hands-helping",
    color: "green",
    card: "card-special1",
    points: [
      "Treatment guidance",
      "24/7 patient assistance",
      "Help with hospital processes"
    ]
  },
  {
    title: "24/7 Support",
    desc: "Our team is available around the clock to assist you anytime.",
    icon1: "fa-earth-americas",
    color: "blue",
    card: "card-blue",
    points: [
      "Dedicated Care Team",
      "Multilingual Assistance",
      "Emergency Coordination",
    ]
  },
];

const Services = () => {
  return (
    /* ADDED id="services" for the Navbar scroll logic */
    <section className="expertise" id="services">
      <span className="badge" data-aos="fade-up">Our Expertise</span>

      <h1 className="service-title" data-aos="fade-up" data-aos-delay="100">
        Smart, Secure &amp; Seamless <span>Healthcare</span>
      </h1>

      <p className="desc" data-aos="fade-up" data-aos-delay="200"><b>
        Smart medical solutions tailored to your needs. We ensure accessibility, clarity, and complete data protection.</b>
      </p>

      <div className="grid">
        {servicesData.map((item, index) => {
          const delay = (index % 3) + 1; // stagger 1-3 within each row
          return (
            <div
              className={`card ${item.card} vg-card-hover`}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={delay * 100}
            >

              <div className="card-top1">
                <div className={`icon1 ${item.color}`}>
                  <i className={`fa-solid ${item.icon1}`}></i>
                </div>
                <h3>{item.title}</h3>
              </div>

              <div className="main-content">
  <p className="main-desc">{item.desc}</p>
  <div className="divider"></div>
</div>
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