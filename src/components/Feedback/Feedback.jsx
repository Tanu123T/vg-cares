import "./Feedback.css";

const testimonials = [
  { text: "The appointment booking process was smooth and easy to understand.", name: "James Thompson" },
  { text: "Doctors were very professional and supportive.", name: "Emily Carter" },
  { text: "Very clean interface and user-friendly design.", name: "Rahul Mehta" },
  { text: "I love how I can see my medical history easily.", name: "Sarah Jenkins" },
  { text: "The staff was incredibly helpful when I had trouble.", name: "David Wilson" },
  { text: "Booking my treatment was incredibly simple.", name: "Michael Anderson" },
  { text: "Transparency in pricing helped me make decisions.", name: "Olivia Brown" },
  { text: "The coordination team stayed in touch throughout.", name: "Daniel Garcia" },
  { text: "Experience was seamless from consultation to follow-up.", name: "Sophia Martinez" },
  { text: "Reminders ensured I never missed appointments.", name: "Ethan Walker" },
  { text: "Travel arrangements were handled professionally.", name: "Noah Clark" },
  { text: "Customer support was responsive and kind.", name: "Liam Hall" }
];

const Card = ({ item }) => (
  <div className="patient-card-modern">
    <div className="card-inner">
      <div className="quote-mark">“</div>
      <p className="comment-text">{item.text}</p>
      
      <div className="card-bottom">
        <div className="user-meta">
          <div className="user-icon-box">
            <i className="fa-solid fa-user-doctor"></i>
          </div>
          <span className="user-name">{item.name}</span>
        </div>
        <div className="star-rating-group">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Feedback() {
  return (
    <section className="feedback-container">
      {/* Dynamic Background Elements */}
      <div className="bg-visuals">
        <div className="bg-blob blob-blue"></div>
        <div className="bg-blob blob-green"></div>
        <div className="bg-grid-overlay"></div>
      </div>

      <div className="feedback-header">
        <span className="status-pill">Patient Testimonials</span>
        <h2 className="main-heading">Trusted by Patients <span>Worldwide</span></h2>
      </div>

      <div className="infinite-wrapper">
        <div className="scroll-track">
          {/* Double the data for seamless looping */}
          {[...testimonials, ...testimonials].map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}