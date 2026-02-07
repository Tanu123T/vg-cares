import { useEffect, useState } from "react";
import { hospitalData } from "../../data/hospitalData";
import { MapPin, Phone, Search, ChevronLeft } from "lucide-react"; // Added Search and Chevron
import { Link } from "react-router-dom";

import "./Hospitals.css"; 

const HospitalsPage = () => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [specialist, setSpecialist] = useState("all");
  const [selectedHospital, setSelectedHospital] = useState(null);

  const filteredHospitals = hospitalData.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase()) &&
    (country === "all" || h.country === country) &&
    (specialist === "all" || h.specialist === specialist)
  );

  /* ================= DETAILS VIEW ================= */
  if (selectedHospital) {
    return (
      <section id="detailsPage">
        <button className="back-link" onClick={() => setSelectedHospital(null)}>
          <ChevronLeft size={20} /> Back to Hospitals
        </button>

        <div className="details-card">
          <img
            src={selectedHospital.img}
            className="details-banner"
            alt={selectedHospital.name}
          />

          <div className="details-content">
            <div className="details-meta">
              <div>
                <span className="badge">
                  Verified • {selectedHospital.country}
                </span>
                <h1>{selectedHospital.name}</h1>
              </div>
              <div className="rating">★ {selectedHospital.rating}</div>
            </div>

            <p style={{ lineHeight: '1.6', color: '#4a5568' }}>{selectedHospital.desc}</p>

            <div className="details-grid">
              <div className="detail-item">
                <label>Specialty</label>
                <p>{selectedHospital.specialist}</p>
              </div>
              <div className="detail-item">
                <label>Address</label>
                <p>{selectedHospital.address}</p>
              </div>
              <div className="detail-item">
                <label>Phone</label>
                <p>{selectedHospital.phone}</p>
              </div>
              <div className="detail-item">
                <label>Accreditation</label>
                <p>JCI & ISO Certified</p>
              </div>
            </div>

            <div className="btn-group">
              <button className="btn btn-request" style={{ padding: '18px' }}>
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ================= LIST VIEW ================= */
  return (
    <section className="container">
      <header>
        <span className="badge">Verified Global Healthcare</span>
        <h1>Our Hospital Network</h1>
        <p>Connecting you to world-class medical facilities globally.</p>
      </header>

      {/* FILTERS - Now Responsive */}
      <div className="filter-section">
        <div className="search-wrapper">
          <Search size={18} className="search-icon-fixed" />
          <input
            type="text"
            placeholder="Search hospital name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <select value={country} onChange={e => setCountry(e.target.value)}>
          <option value="all">All Countries</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="UAE">UAE</option>
          <option value="Germany">Germany</option>
        </select>

        <select value={specialist} onChange={e => setSpecialist(e.target.value)}>
          <option value="all">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Oncology">Oncology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
      </div>

      <div className="stats-count">
        Found {filteredHospitals.length} Results
      </div>

      {/* GRID */}
      <div className="hospital-grid">
        {filteredHospitals.map(h => (
          <div className="hospital-card" key={h.id}>
            <img src={h.img} className="card-img" alt={h.name} />

            <div className="card-body">
              <span className="specialist-tag">{h.specialist}</span>

              <div className="card-top">
                <h3>{h.name}</h3>
                <span className="rating">★ {h.rating}</span>
              </div>

              <div className="info-row">
                <MapPin size={16} />
                <span>{h.address}</span>
              </div>

              <div className="info-row">
                <Phone size={16} />
                <span>{h.phone}</span>
              </div>

              <div className="btn-group">
                <button
                  className="btn btn-view"
                  onClick={() => setSelectedHospital(h)}
                >
                  View Details
                </button>
                <button className="btn btn-request">
                  Consultation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/" className="hospital-home-btn">
        <i className="fa-solid fa-house"></i>
      </Link>
    </section>
  );
};

export default HospitalsPage;