import React, { useState, useEffect } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [activeBlog, setActiveBlog] = useState(null);

  const blogs = [
    {
      label: "Neurology",
      title: "Early Signs of Neurological Disorder",
      date: "Jan 2026",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
      excerpt: "Learn the early symptoms of neurological conditions and when medical attention is vital...",
      content: `
        <h3 style="color:#0d6efd">Protecting Your Cognitive Health</h3><br/>
        <p>Neurological health is often misunderstood but critical for daily function.</p><br/>
        <ul>
          <li><b>Unexplained Muscle Weakness:</b> Sudden loss of grip strength.</li>
          <li><b>Sensory Changes:</b> Persistent tingling or numbness.</li>
          <li><b>Cognitive Fog:</b> Difficulty finding words or concentrating.</li>
        </ul>
      `,
    },
    {
      label: "Gynaecology",
      title: "Essential Tips For Women's Health",
      date: "Dec 2025",
      img: "https://images.pexels.com/photos/3850689/pexels-photo-3850689.jpeg?w=800",
      excerpt: "Essential health tips to help women maintain hormonal well-being...",
      content: `
        <h3 style="color:#0d6efd">Holistic Wellness for Women</h3><br/>
        <ul>
          <li><b>20s & 30s:</b> Focus on reproductive health & nutrition.</li>
          <li><b>40s & 50s:</b> Heart health & menopause care.</li>
          <li><b>Routine Screening:</b> Don't skip Pap smears & breast exams.</li>
        </ul>
      `,
    },
    {
        label: "Cardiology",
        title: "Daily Habits for a Healthy Heart",
        date: "Dec 2025",
        img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800",
        excerpt: "Simple lifestyle changes to maintain your cardiovascular health...",
        content: `
          <h3 style="color:#0d6efd">Fueling Longevity</h3><br/>
          <ul>
            <li><b>Sodium Control:</b> Prevents artery damage.</li>
            <li><b>Zone-2 Exercise:</b> Brisk walking 30 mins daily works best.</li>
            <li><b>Fiber Intake:</b> Lowers bad cholesterol levels.</li>
          </ul>
        `,
      },
      // Add more blog objects here as needed
  ];

  // Disable body scroll when modal is open
  useEffect(() => {
    if (activeBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
              <img src={blog.img} alt={blog.title} />
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

      {/* MODAL VIEW */}
      {activeBlog && (
        <div className="post-modal-overlay" onClick={() => setActiveBlog(null)}>
          <div className="post-modal-window" onClick={(e) => e.stopPropagation()}>
            <span className="post-close-btn" onClick={() => setActiveBlog(null)}>
              &times;
            </span>

            <div className="post-scroll-container">
              <img src={activeBlog.img} alt={activeBlog.title} className="post-hero-image" />
              <div className="post-full-body">
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                  <span className="article-label">{activeBlog.label}</span>
                  <span className="article-post-date">{activeBlog.date}</span>
                </div>

                <h2 style={{ color: "var(--blog-primary)", marginBottom: "20px" }}>
                  {activeBlog.title}
                </h2>

                <div
                  className="content-html"
                  dangerouslySetInnerHTML={{ __html: activeBlog.content }}
                ></div>

                <hr style={{ margin: "30px 0", opacity: "0.1" }} />

                <p style={{ fontSize: "13px", color: "#999" }}>
                  Disclaimer: This blog is for informational purposes only. Consult a doctor for medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Home Button */}
      <Link to="/" className="blog-home-btn">
        <i className="fa-solid fa-house"></i>
      </Link>
    </div>
  );
}