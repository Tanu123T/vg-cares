import { useState, useMemo, useRef, useEffect } from "react";
import { doctorData } from "../../data/doctorData";
import "./Doctors.css";
import { Video, X, Star, Search, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
  if (!isDropdownOpen) return;

  // 1. Snapshot the vertical position of the dropdown when opened
  const initialRect = dropdownRef.current?.getBoundingClientRect();
  const initialTop = initialRect ? initialRect.top : 0;

  const handleScrollBehavior = (event) => {
    if (!dropdownRef.current) return;

    // 2. CHECK: If the scroll is happening INSIDE the dropdown list, STOP here.
    // This allows your new scrollbar to work!
    if (event.target.classList?.contains('dropdown-floating-menu')) {
      return;
    }

    // 3. Get the NEW position of the filter box
    const currentRect = dropdownRef.current.getBoundingClientRect();
    
    // 4. If the box moved more than 1px (meaning the main page scrolled), CLOSE IT
    if (Math.abs(currentRect.top - initialTop) > 1) {
      setIsDropdownOpen(false); // FIXED: matched your state name
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // FIXED: matched your state name
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);
  // 'true' is critical to detect the scroll properly
  window.addEventListener("scroll", handleScrollBehavior, true);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
    window.removeEventListener("scroll", handleScrollBehavior, true);
  };
}, [isDropdownOpen]); // Re-run when it opens to reset lastScrollY// Keep dependency array empty to prevent infinite re-renders

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
        <div className="verified-header">VERIFIED GLOBAL HEALTHCARE</div>
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
              placeholder="Search by doctor name, speciality, or hospital..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-box modern-dropdown" ref={dropdownRef}>
            <div 
              className={`dropdown-header ${isDropdownOpen ? "active" : ""}`} 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{specialty === "All" ? "All Specialities" : specialty}</span>
              <ChevronDown className={`chevron ${isDropdownOpen ? "rotate" : ""}`} size={18} />
            </div>

            {isDropdownOpen && (
              <div className="dropdown-floating-menu" style={{ overflowY: 'auto', maxHeight: '250px' }}>
                {["All", "Cardiology", "Dermatology", "Neurology", "Orthopedics","Gynecology","Ophthalmology","Oncology","Pediatrics","Psychiatry"].map((opt) => (
  <div 
    key={opt} 
    /* The logic below applies the 'selected' class equally to any active option */
    className={`dropdown-item ${specialty === opt ? "selected" : ""}`}
    onClick={() => {
      setSpecialty(opt);
      setIsDropdownOpen(false);
    }}
  >
    {opt === "All" ? "All Specialties" : opt}
  </div>
))}
              </div>
            )}
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
                Teleconsultation
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
                <Video size={18} />
                Book Appointment
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
                setSelectedDoctor(null);
                navigate('/signin');
              }}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      )}
      <Link to="/"  className="doctor-home-btn"><i class="fa-solid fa-house"></i></Link>
    </div>
  );
}