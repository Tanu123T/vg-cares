import { useEffect, useRef } from "react";

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
      if (index === -1) {
        path.style.strokeDashoffset = pathLength;
      } else {
        /**
         * RE-CALIBRATED MAP FOR STEPS 7-10
         * I have reduced the values for 7, 8, and 9 to stop the overshoot.
         */
        const progressMap = [
          0.00, // Card 1
          0.12, // Card 2
          0.20, // Card 3
          0.30, // Card 4
          0.38, // Card 5
          0.48, // Card 6 (Working correctly here)
          0.58, // Card 7 - Pulled back (Was 0.62)
          0.69, // Card 8 - Pulled back (Was 0.78)
          0.82, // Card 9 - Pulled back (Was 0.88)
          1.00  // Card 10 - Always 1.0
        ];

        const progress = progressMap[index];
        path.style.strokeDashoffset = pathLength - (pathLength * progress);
      }

      stepRefs.current.forEach((step, i) => {
        if (!step) return;
        if (index !== -1 && i <= index) {
          step.classList.add("jt-active");
        } else {
          step.classList.remove("jt-active");
        }
      });
    };

    const currentSteps = stepRefs.current;
    currentSteps.forEach((step, i) => {
      if (!step) return;
      step.onmouseenter = () => updatePath(i);
      step.onmouseleave = () => updatePath(-1);
    });

    return () => {
      currentSteps.forEach((step) => {
        if (step) {
          step.onmouseenter = null;
          step.onmouseleave = null;
        }
      });
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        .roadmap-section {
          width: 100%;
          padding: 0;
          margin-top: 80px;
          overflow: hidden;
          background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
                      url("../../assets/images/roadmapbg.png") center/cover;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .jt-header {
          max-width: 72rem;
          margin: 0 auto 1px auto;
          padding-top: 60px;
          text-align: center;
        }
        .jt-header h1 { font-size: 2.25rem; font-weight: 800; color: #1e293b; }
        .jt-header h1 span { color: #2563eb; }
        .jt-header p { color: #64748b; font-weight: 600; }

        .jt-scroll-viewport { width: 100%; overflow-x: auto; overflow-y: hidden; }

        .jt-container {
          width: 1200px;
          height: 1100px;
          margin: 0 auto;
          position: relative;
        }

        .jt-path-svg { position: absolute; inset: 0; pointer-events: none; }
        .jt-path-bg { stroke: #f1f5f9; stroke-width: 4; fill: none; }
        .jt-path-active {
          stroke: #2563eb;
          stroke-width: 5;
          fill: none;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.6s ease-out;
        }

        .jt-step-card { position: absolute; z-index: 10; }
        .jt-card {
          background: #fff;
          padding: 14px 20px;
          width: 280px;
          min-height: 80px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 14px;
          align-items: center;
          position: relative;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }

        .jt-card:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 20px 25px rgba(0,0,0,0.08);
          z-index: 50;
        }

        .jt-arrow-wrapper {
          margin-left: auto;
          color: #000;
          display: flex;
          align-items: center;
          transition: opacity 0.2s ease;
        }

        .jt-card:hover .jt-arrow-wrapper { display: none; }
        .jt-desc { display: none; font-size: 12px; color: #64748b; margin-top: 2px; line-height: 1.4; animation: fadeIn 0.3s forwards; }
        .jt-card:hover .jt-desc { display: block; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .jt-number {
          position: absolute;
          top: -10px;
          left: 20px;
          width: 22px;
          height: 22px;
          font-size: 10px;
          font-weight: 800;
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 7px;
          display: grid; place-items: center;
        }
        .jt-active .jt-number { background: #2563eb; color: #fff; border-color: #2563eb; }

        .jt-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid; place-items: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .jt-icon-blue { background: rgba(59,130,246,.12); color: #2563eb; }
        .jt-icon-green { background: rgba(34,197,94,.12); color: #16a34a; }
        .jt-icon-orange { background: rgba(249,115,22,.12); color: #ea580c; }
        .jt-icon-purple { background: rgba(168,85,247,.12); color: #9333ea; }

        .jt-info span:first-child { font-weight: 700; font-size: 16px; color: #1e293b; display: block; }

        /* COORDINATES - EXACTLY AS PER YOUR LAYOUT */
        .jt-s1 { top:120px; left:100px; }
        .jt-s2 { top:420px; left:180px; }
        .jt-s3 { top:320px; left:320px; }
        .jt-s4 { top:250px; left:600px; }
        .jt-s5 { top:400px; left:660px; }
        .jt-s6 { top:550px; left:720px; }
        .jt-s7 { top:690px; left:820px; }
        .jt-s8 { top:880px; left:820px; }
        .jt-s9 { top:880px; left:510px; }
        .jt-s10 { top:865px; left:200px; }
      `}</style>

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
    </>
  );
}