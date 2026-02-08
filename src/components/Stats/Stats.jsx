import { useEffect } from "react";
import "./Stats.css";

const StatsCard = () => {
  useEffect(() => {
    const counters = document.querySelectorAll("[data-target]");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        // We parse current text to a number to avoid issues with symbols during calculation
        const count = parseInt(counter.innerText) || 0;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);


  return (
    <section className="stats-card2">
      <div className="stat-item">
        <span className="stat-num blue" data-target="50">0</span>
        <span className="stat-num blue">+</span>
        <div className="stat-label">Partner Hospitals</div>
        <div className="stat-sub">Across continents</div>
      </div>

      <div className="stat-item">
        <span className="stat-num green" data-target="1000">0</span>
        <span className="stat-num green">+</span>
        <div className="stat-label">Exchange Patients</div>
        <div className="stat-sub">Successfully treated</div>
      </div>

      <div className="stat-item">
        <span className="stat-num orange" data-target="95">0</span>
        <span className="stat-num orange">%</span>
        <div className="stat-label">Satisfaction Rate</div>
        <div className="stat-sub">Patient feedback</div>
      </div>

      <div className="stat-item">
        <span className="stat-num navy">24/7</span>
        <div className="stat-label">Global Support</div>
        <div className="stat-sub">Multilingual assistance</div>
      </div>
    </section>
  );
};

export default StatsCard;