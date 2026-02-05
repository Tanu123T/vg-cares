import React, { useState, useEffect } from "react";
import "./Blogs.css";

export default function Blogs() {
  const [activeBlog, setActiveBlog] = useState(null);

  const blogs = [
    {
      label: "Neurology",
      title: "Early Signs of Neurological Disorder",
      date: "Jan 2026",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
      excerpt:
        "Learn the early symptoms of neurological conditions and when medical attention is vital...",
      content: `
        <h3>Protecting Your Cognitive Health</h3><br/>
        Neurological health is often misunderstood.
        <ul>
          <li><b>Unexplained Muscle Weakness:</b> Sudden loss of grip strength.</li>
          <li><b>Sensory Changes:</b> Persistent tingling.</li>
          <li><b>Cognitive Fog:</b> Difficulty finding words.</li>
        </ul>
      `,
    },
    {
      label: "Gynaecology",
      title: "Essential Tips For Women's Health",
      date: "Dec 2025",
      img: "https://images.pexels.com/photos/3850689/pexels-photo-3850689.jpeg?w=800",
      excerpt:
        "Essential health tips to help women maintain hormonal well-being...",
      content: `
        <h3>Holistic Wellness for Women</h3><br/>
        <ul>
          <li><b>20s & 30s:</b> Reproductive health & nutrition.</li>
          <li><b>40s & 50s:</b> Heart health & menopause care.</li>
          <li><b>Routine Screening:</b> Pap smear & breast exams.</li>
        </ul>
      `,
    },
    {
      label: "Ophthalmology",
      title: "Protect Your Eyes from Digital Strain",
      date: "Dec 2025",
      img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800",
      excerpt:
        "Simple and effective ways to reduce eye strain caused by screens...",
      content: `
        <h3>Beating Computer Vision Syndrome</h3><br/>
        <ul>
          <li><b>20-20-20 Rule:</b> Look 20 feet away every 20 minutes.</li>
          <li><b>Blink Often:</b> Screens reduce blink rate.</li>
          <li><b>Screen Position:</b> 15–20° below eye level.</li>
        </ul>
      `,
    },
    {
      label: "General Health",
      title: "Importance Of Regular Health Checkups",
      date: "Dec 2025",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
      excerpt:
        "Regular health checkups help in early detection and prevention...",
      content: `
        <h3>Prevention is Key</h3><br/>
        <ul>
          <li><b>Metabolic Panel:</b> Kidney & liver function.</li>
          <li><b>Lipid Profile:</b> Cholesterol monitoring.</li>
          <li><b>Trend Tracking:</b> Detect issues early.</li>
        </ul>
      `,
    },
    {
      label: "Orthopedics",
      title: "Joint Pain: Causes & Treatment",
      date: "Dec 2025",
      img: "https://images.pexels.com/photos/3683102/pexels-photo-3683102.jpeg?w=800",
      excerpt:
        "Understand the reasons behind joint pain and modern treatments...",
      content: `
        <h3>Restoring Mobility</h3><br/>
        <ul>
          <li><b>Weight Management:</b> Reduces joint pressure.</li>
          <li><b>Nutrition:</b> Omega-3 & anti-inflammatory foods.</li>
          <li><b>Strengthening:</b> Muscle support for joints.</li>
        </ul>
      `,
    },
    {
      label: "Cardiology",
      title: "Daily Habits for a Healthy Heart",
      date: "Dec 2025",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800",
      excerpt:
        "Simple lifestyle changes to maintain your cardiovascular health...",
      content: `
        <h3>Fueling Longevity</h3><br/>
        <ul>
          <li><b>Sodium Control:</b> Prevents artery damage.</li>
          <li><b>Zone-2 Exercise:</b> Brisk walking works best.</li>
          <li><b>Fiber Intake:</b> Lowers bad cholesterol.</li>
        </ul>
      `,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = activeBlog ? "hidden" : "auto";
  }, [activeBlog]);

  return (
    <div className="blog-page-container">
      <header className="blog-header-section">
        <span className="blog-top-badge">Health Blogs</span>
        <h1 className="blog-main-title">Health Blogs & Articles</h1>
        <p className="blog-subtitle">
          Trusted medical insights from VG Care specialists
        </p>
      </header>

      <div className="article-grid-layout">
        {blogs.map((blog, index) => (
          <div className="article-card" key={index}>
            <div className="article-thumb-wrapper">
              <img
  src={blog.img}
  alt={blog.title}
  className="article-img-src"
/>

            </div>

            <div className="article-content-area">
              <span className="article-label">{blog.label}</span>
              <h3 className="article-heading">{blog.title}</h3>
              <p className="article-excerpt">{blog.excerpt}</p>

              <div className="article-meta-footer">
                <span className="article-post-date">{blog.date}</span>
                <span
                  className="article-read-link"
                  onClick={() => setActiveBlog(blog)}
                >
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeBlog && (
        <div
          className="post-modal-overlay"
          onClick={() => setActiveBlog(null)}
        >
          <div
            className="post-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="post-close-btn"
              onClick={() => setActiveBlog(null)}
            >
              &times;
            </span>

            <div className="post-scroll-container">
              <img
  src={activeBlog.img}
  alt={activeBlog.title}
  className="post-hero-image"
/>


              <div className="post-full-body">
                <div style={{ display: "flex", gap: "10px" }}>
                  <span className="article-label">{activeBlog.label}</span>
                  <span className="article-post-date">{activeBlog.date}</span>
                </div>

                <h2 style={{ color: "var(--blog-primary)" }}>
                  {activeBlog.title}
                </h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: activeBlog.content,
                  }}
                ></div>

                <hr />

                <p style={{ fontSize: "13px", color: "#999" }}>
                  Disclaimer: This blog is for informational purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
