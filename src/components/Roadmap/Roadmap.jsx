import { useEffect, useRef } from "react";
import "./Roadmap.css";

const journeySteps = [
  { id: 1, title: "Get started", desc: "Create your account in just a few steps.", icon: "fa-solid fa-user-plus", color: "jt-icon-blue", cls: "jt-s1" },
  { id: 2, title: "Tell us about you", desc: "Share your details and medical reports.", icon: "fa-solid fa-file-alt", color: "jt-icon-green", cls: "jt-s2" },
  { id: 3, title: "Explore options", desc: "Discover hospitals, doctors, and treatments.", icon: "fa-solid fa-search", color: "jt-icon-orange", cls: "jt-s3" },
  { id: 4, title: "Talk to a doctor", desc: "Get consultation online or meet in person.", icon: "fa-solid fa-video", color: "jt-icon-purple", cls: "jt-s4" },
  { id: 5, title: "Know the cost", desc: "Get a clear idea of treatment expenses.", icon: "fa-solid fa-dollar-sign", color: "jt-icon-blue", cls: "jt-s5" },
  { id: 6, title: "Travel made easy", desc: "Planning your trip and logistics seamlessly.", icon: "fa-solid fa-plane", color: "jt-icon-green", cls: "jt-s6" },
  { id: 7, title: "Confirm plan", desc: "Securely complete the next steps.", icon: "fa-solid fa-check-circle", color: "jt-icon-orange", cls: "jt-s7" },
  { id: 8, title: "Begin Treatment", desc: "Receive care at your chosen hospital.", icon: "fa-solid fa-briefcase-medical", color: "jt-icon-purple", cls: "jt-s8" },
  { id: 9, title: "Recovery Care", desc: "We support you during recovery.", icon: "fa-solid fa-heart", color: "jt-icon-blue", cls: "jt-s9" },
  { id: 10, title: "Experience", desc: "Help others by sharing your journey.", icon: "fa-solid fa-comment-dots", color: "jt-icon-green", cls: "jt-s10" }
];

export default function JourneyTimeline() {
  const pathRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const updatePath = (index) => {
      const progress = index === -1 ? 0 : index / (journeySteps.length - 1);
      path.style.strokeDashoffset = pathLength - (pathLength * progress);

      stepRefs.current.forEach((step, i) => {
        if (index !== -1 && i <= index) {
          step.classList.add("jt-active");
        } else {
          step.classList.remove("jt-active");
        }
      });
    };

    stepRefs.current.forEach((step, i) => {
      if (!step) return;
      step.onmouseenter = () => updatePath(i);
      step.onmouseleave = () => updatePath(-1);
    });
  }, []);

  return (
    <section className="roadmap-section">
      <div className="jt-header">
        <h1>Your easy path to <span>World class Medical Care</span></h1>
        <p>Hover to zoom details • Swipe to track progress</p>
      </div>

      <div className="jt-scroll-viewport">
        <div className="jt-container">
          <svg className="jt-path-svg" viewBox="0 0 1200 1100">
            <path className="jt-path-bg" d="M 220 180 C 220 350, 240 450, 320 450 S 450 350, 580 320 S 720 350, 750 480 S 850 650, 930 750 S 950 900, 930 950 S 650 880, 550 880 S 350 900, 300 950" />
            <path ref={pathRef} className="jt-path-active" d="M 220 180 C 220 350, 240 450, 320 450 S 450 350, 580 320 S 720 350, 750 480 S 850 650, 930 750 S 950 900, 930 950 S 650 880, 550 880 S 350 900, 300 950" />
          </svg>

          {journeySteps.map((step, i) => (
            <div key={step.id} ref={(el) => (stepRefs.current[i] = el)} className={`jt-step-card ${step.cls}`}>
              <div className="jt-card">
                <div className="jt-number">{step.id}</div>
                <div className={`jt-icon ${step.color}`}>
                  <i className={step.icon}></i>
                </div>
                <div className="jt-info">
                  <span>{step.title}</span>
                  <div className="jt-desc">{step.desc}</div>
                </div>
                <div className="jt-arrow-wrapper">
                  <svg width="12" height="18" viewBox="0 0 10 16" fill="none">
                    <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}