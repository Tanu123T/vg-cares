import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Handle clicks from the Navbar itself
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on /doctors, go home with the hash
      navigate(`/#${sectionId}`);
    }
    setIsDropdownOpen(false);
  };

  // 2. The Fix: Only scroll on mount if a hash exists, otherwise force top
  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const id = location.hash.replace("#", "");
      // Delay prevents the browser from jumping before React is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
      return () => clearTimeout(timer);
    } else if (location.pathname === "/" && !location.hash) {
      // Force scroll to top on fresh landing
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={() => window.scrollTo(0,0)} className="logo-link">
          <div className="logo-mark">
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="logo-text">
            <h2>VG Cares Global</h2>
            <p>Powered by VishwaGuru Infotech</p>
          </div>
        </Link>
      </div>

      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-item">Home</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-item">Services</a></li>
        <li><a href="#capabilities" onClick={(e) => handleNavClick(e, 'capabilities')} className="nav-item">Our Capabilities</a></li>

        <li className="more-dropdown-trigger">
          <span className="nav-item" onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={{cursor:'pointer'}}>
            More <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
          </span>
          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <Link to="/doctors" className="dropdown-item">Doctor</Link>
            <Link to="/hospitals" className="dropdown-item">Hospital</Link>
            <Link to="/blogs" className="dropdown-item">Blogs</Link>
            <Link to="/contact" className="dropdown-item">Contact Us</Link>
          </div>
        </li>
      </ul>

      <Link to="/signin" className="btn-signin">Sign In / Sign Up</Link>
    </nav>
  );
};

export default Navbar;