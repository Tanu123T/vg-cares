import { useEffect, useRef, useState } from "react";
import "./Feedback.css";

const testimonials = [
  {
    text: "The appointment booking process was smooth and easy to understand. Adding more time slot options would make it even more convenient.",
    name: "James Thompson"
  },
  {
    text: "Doctors were very professional and supportive. The medical care I received was exceptional and far exceeded my expectations.",
    name: "Emily Carter"
  },
  {
    text: "Very clean interface and user-friendly design. Managing my appointments felt effortless and the reminders were very helpful.",
    name: "Rahul Mehta"
  },
  {
    text: "I love how I can see my medical history and upcoming visits all in one place. Truly a game changer for healthcare management.",
    name: "Sarah Jenkins"
  },
  {
    text: "The staff was incredibly helpful when I had trouble with my insurance details. Fast response times and very kind people.",
    name: "David Wilson"
  }
];

export default function Feedback() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const showTestimonial = (i) => {
    trackRef.current.style.transform = `translateX(-${i * 20}%)`;
    setCurrent(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrent((prev) => {
          const next = (prev + 1) % testimonials.length;
          showTestimonial(next);
          return next;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="feedback-section">
      <div className="feedback-wave-container">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill="#f2fbff"/>
          <path d="M0.00,60.00 C150.00,130.00 350.00,20.00 500.00,70.00 L500.00,150.00 L0.00,150.00 Z" fill="#e6f5fd"/>
          <path d="M0.00,80.00 C150.00,110.00 350.00,50.00 500.00,90.00 L500.00,150.00 L0.00,150.00 Z" fill="#d7eef9"/>
        </svg>
      </div>

      <div className="feedback-content-wrapper">
        <span className="feedback-status-badge">Feedback and Experiences</span>
        <h2 className="feedback-main-title">What our Patients Say</h2>

        <div
          className="patient-testimonial-card-stable"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonial-viewport">
            <div className="testimonial-track" ref={trackRef}>
              {testimonials.map((item, index) => (
                <div className="testimonial-slide" key={index}>
                  <p className="patient-comment">"{item.text}"</p>

                  <div className="patient-card-footer">
                    <div className="patient-profile">
                      <div className="patient-avatar-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <span className="patient-name">{item.name}</span>
                    </div>

                    <div className="patient-rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="feedback-dots-container">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`feedback-nav-dot ${current === i ? "active" : ""}`}
              onClick={() => showTestimonial(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}