import { useState, useMemo } from "react";
import { doctorData } from "../../data/doctorData";
import "./Doctors.css";
import { Video } from "lucide-react";

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const filteredDoctors = useMemo(() => {
    return doctorData.filter((doctor) => {
      const matchesName = doctor.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesSpecialty =
        specialty === "All" || doctor.specialty === specialty;

      return matchesName && matchesSpecialty;
    });
  }, [search, specialty]);

  const clearFilters = () => {
    setSearch("");
    setSpecialty("All");
  };

  const bookConsultation = (doctor) => {
    alert(
      `Booking consultation with ${doctor.name} at ${doctor.hospital}.`
    );
  };

  const viewProfile = (doctor) => {
    alert(`Viewing profile of ${doctor.name}`);
  };

  return (
    <>
      {/* SEARCH + FILTER */}
      <section className="doctors-search-section">
        <div className="search-container">
          <div className="search-input-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search by doctor name, specialty, or hospital..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="search-clear"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          <div className="filter-dropdown">
            <i className="fas fa-filter filter-icon"></i>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Oncology">Oncology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Psychiatry">Psychiatry</option>
            </select>
          </div>

          {(search || specialty !== "All") && (
            <button onClick={clearFilters} className="clear-filters-btn">
              <i className="fas fa-redo"></i> Clear All
            </button>
          )}
        </div>
        
        <div className="search-results-info">
          {filteredDoctors.length > 0 && (
            <span>Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}</span>
          )}
        </div>
      </section>

      {/* GRID */}
      <main id="doctorGrid" className="max-w-7xl mx-auto">
        {filteredDoctors.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <div className="text-slate-400 text-lg mb-4">
              No doctors found matching your criteria
            </div>
            <button
              onClick={clearFilters}
              className="text-blue-600 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id}>
              <div className="doctor-profile">
                <div className="doctor-avatar">
                  <img src={doctor.image} alt={doctor.name} />
                </div>

                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                </div>
              </div>

              <div className="doctor-meta">
                <div className="rating">
                  <span className="rating-star">★</span>
                  {doctor.rating}
                </div>
                <div className="experience">
                  {doctor.experience} EXPERIENCE
                </div>
              </div>

              <div className="doctor-tags">
                <span className="tag tag-teleconsultation">
                  <Video size={14} /> Teleconsultation
                </span>
                <span className="tag tag-board">
                  Am. Board of {doctor.specialty}
                </span>
              </div>

              <div className="doctor-fee">
                <span className="fee-amount">
                  {doctor.consultationFee}
                </span>
                <span className="fee-label">per consultation</span>
              </div>

              <div className="doctor-actions">
                <button
                  className="btn-book"
                  onClick={() => bookConsultation(doctor)}
                >
                  Book Now
                </button>

                <button
                  className="btn-teleconsult"
                  onClick={() => viewProfile(doctor)}
                >
                  <Video size={14} /> Teleconsult
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
}
