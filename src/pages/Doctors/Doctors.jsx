import { useState, useMemo } from "react";
import { doctorData } from "../../data/doctorData";
import "./Doctors.css";
import { Video, X, Star, Search } from "lucide-react";

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = useMemo(() => {
    return doctorData.filter((doctor) => {
      const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase());
      const matchesSpecialty = specialty === "All" || doctor.specialty === specialty;
      return matchesSearch && matchesSpecialty;
    });
  }, [search, specialty]);

  return (
    <div className="doctors-page-wrapper">
      {/* 1. Header */}
      <div className="doctors-header-container">
        <div className="verified-header">✓ VERIFIED GLOBAL HEALTHCARE</div>
        <h1>Our Doctor Network</h1>
        <p>Connecting you to world-class medical specialists globally.</p>
      </div>

      {/* 2. Dual Search Section */}
      <section className="doctors-search-section">
        <div className="search-outer-container">
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search by doctor name, specialty, or hospital..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-box">
            <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
              <option value="All">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>
        </div>
        <div className="results-count">
          Found <b>{filteredDoctors.length}</b> doctors
        </div>
      </section>

      {/* 3. Doctor Cards Grid */}
      <main id="doctorGrid">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="card-top">
              <img src={doctor.image} alt={doctor.name} className="doctor-img" />
              <div className="doctor-title">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
              </div>
            </div>

            <div className="card-stats">
              <div className="rating-pill">
                <Star size={14} fill="#ffcc00" color="#ffcc00" /> {doctor.rating}
              </div>
              <span className="exp-text">{doctor.experience} EXPERIENCE</span>
            </div>

            <div className="card-features">
              <span className="tele-link">
                <Video size={14} /> Teleconsultation
              </span>
              <span className="board-badge">Am. Board of {doctor.specialty}</span>
            </div>

            <div className="card-price">
              <span className="amount">{doctor.consultationFee}</span>
              <span className="unit">per consultation</span>
            </div>

            <div className="card-footer">
              <button 
                className="btn-book-now" 
                onClick={() => setSelectedDoctor(doctor)} // Logic to open modal
              >
                Book Now
              </button>
              <button className="btn-video-alt">
                <Video size={18} />
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* 4. Functional Booking Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedDoctor(null)}>
              <X size={24} />
            </button>
            
            <img src={selectedDoctor.image} alt="" className="modal-avatar" />
            <h2>Confirm Booking</h2>
            <p className="modal-text">
              Schedule your appointment with <br/> 
              <b>{selectedDoctor.name}</b>
            </p>
            
            <div className="modal-fee-box">
                <label>Consultation Fee</label>
                <div className="fee">{selectedDoctor.consultationFee}</div>
            </div>

            <button 
              className="confirm-btn"
              onClick={() => {
                alert(`Appointment Requested with ${selectedDoctor.name}!`);
                setSelectedDoctor(null);
              }}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}