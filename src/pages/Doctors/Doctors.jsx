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
      const matchesName = doctor.name.toLowerCase().includes(search.toLowerCase());
      const matchesSpecialty = specialty === "All" || doctor.specialty === specialty;
      return matchesName && matchesSpecialty;
    });
  }, [search, specialty]);

  return (
    <div style={{ background: '#fcfdfe', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* 1. Header */}
      <div className="doctors-header-container">
        <div className="verified-header">✓ VERIFIED GLOBAL HEALTHCARE</div>
        <h1 style={{ color: '#007bff', fontSize: '48px', fontWeight: '800', margin: '10px 0' }}>Our Doctor Network</h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>Connecting you to world-class medical specialists globally.</p>
      </div>

      {/* 2. Elongated Search Section */}
      <section className="doctors-search-section">
        <div className="search-container">
          <div className="search-input-wrapper">
            {/* Added Search Icon from Lucide for better scaling */}
            <Search size={20} style={{ position: 'absolute', left: '18px', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input2"
            />
          </div>

          <div className="filter-dropdown">
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>
        </div>
        <div className="search-results-info">
          Found <b>{filteredDoctors.length}</b> doctors
        </div>
      </section>

      {/* 3. Original Doctor Cards */}
      <main id="doctorGrid">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card" style={{ background: 'white', padding: '20px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
            <div className="doctor-profile" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <div className="doctor-avatar">
                <img src={doctor.image} alt={doctor.name} style={{ width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' }} />
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name" style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{doctor.name}</h3>
                <p className="doctor-specialty" style={{ color: '#007bff', margin: 0, fontSize: '14px', fontWeight: '600' }}>{doctor.specialty}</p>
              </div>
            </div>

            <div className="doctor-meta" style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '13px' }}>
              <div className="rating" style={{ background: '#fff9e6', color: '#ffcc00', padding: '4px 8px', borderRadius: '5px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={14} fill="#ffcc00" /> {doctor.rating}
              </div>
              <div className="experience" style={{ color: '#94a3b8', paddingTop: '4px' }}>
                {doctor.experience} EXPERIENCE
              </div>
            </div>

            <div className="doctor-tags" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
              <span style={{ color: '#007bff', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Video size={14} /> Teleconsultation
              </span>
              <span style={{ background: '#fff0f0', color: '#ff4d4d', padding: '4px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 'bold', width: 'fit-content' }}>
                Am. Board of {doctor.specialty}
              </span>
            </div>

            <div className="doctor-fee" style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>{doctor.consultationFee}</span>
              <span style={{ color: '#94a3b8', fontSize: '12px', marginLeft: '5px' }}>per consultation</span>
            </div>

            <div className="doctor-actions" style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn-book" 
                onClick={() => setSelectedDoctor(doctor)}
                style={{ flex: 1, background: '#007bff', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}
              >
                Book Now
              </button>
              <button style={{ background: 'none', border: '1px solid #eef2f6', padding: '12px', borderRadius: '10px', cursor: 'pointer' }}>
                <Video size={18} color="#94a3b8" />
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* 4. Booking Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedDoctor(null)} 
              style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8' }}
            >
              <X size={24} />
            </button>
            <img src={selectedDoctor.image} alt="" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px', border: '4px solid #f8fafc' }} />
            <h2 style={{ margin: '0 0 10px 0', fontSize: '22px' }}>Confirm Booking</h2>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.5', marginBottom: '25px' }}>
              Schedule your appointment with <br/> 
              <b style={{ color: '#1e293b' }}>{selectedDoctor.name}</b>
            </p>
            <button 
              onClick={() => { alert("Appointment Requested!"); setSelectedDoctor(null); }}
              style={{ width: '100%', background: '#007bff', color: 'white', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: '700', fontSize: '16px', cursor: 'pointer' }}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}