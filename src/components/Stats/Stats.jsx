import { useEffect, useRef } from "react";
import "./Stats.css";
import { useCountUp } from "../../utils/useScrollReveal";

const StatsCard = () => {
  const hospitalsRef = useRef(null);
  const patientsRef = useRef(null);
  const satisfyRef = useRef(null);

  // Count-up triggers once visible
  useCountUp(hospitalsRef, 50, 1800);
  useCountUp(patientsRef, 1000, 2200);
  useCountUp(satisfyRef, 95, 1600);

  return (
    <section className="stats-card2" data-aos="zoom-in">
      <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
        <span className="stat-num blue" ref={hospitalsRef}>0</span>
        <span className="stat-num blue">+</span>
        <div className="stat-label">Partner Hospitals</div>
        <div className="stat-sub">Across continents</div>
      </div>

      <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
        <span className="stat-num green" ref={patientsRef}>0</span>
        <span className="stat-num green">+</span>
        <div className="stat-label">Exchange Patients</div>
        <div className="stat-sub">Successfully treated</div>
      </div>

      <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
        <span className="stat-num orange" ref={satisfyRef}>0</span>
        <span className="stat-num orange">%</span>
        <div className="stat-label">Satisfaction Rate</div>
        <div className="stat-sub">Patient feedback</div>
      </div>

      <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
        <span className="stat-num navy">24/7</span>
        <div className="stat-label">Global Support</div>
        <div className="stat-sub">Multilingual assistance</div>
      </div>
    </section>
  );
};

export default StatsCard;