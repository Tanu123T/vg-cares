import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.more-dropdown-trigger')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-mark">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="logo-text">
          <h2>VG Cares Global</h2>
          <p>Powered by VishwaGuru Infotech</p>
        </div>
      </div>

      <ul className="nav-links">
        {/* ONE-SCROLL links */}
        <li>
          <a href="#home" className="nav-item">Home</a>
        </li>
        <li>
          <a href="#services" className="nav-item">Services</a>
        </li>
        <li>
          <a href="#capabilities" className="nav-item">Our Capabilities</a>
        </li>

        {/* DROPDOWN (new pages) */}
        <li className="more-dropdown-trigger">
          <span 
            className="nav-item" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            More <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
          </span>

          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <Link to="/doctors" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <i className="fas fa-user-doctor"></i> Doctor
            </Link>
            <Link to="/hospitals" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <i className="fas fa-hospital"></i> Hospital
            </Link>
            <Link to="/blogs" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <i className="fas fa-book"></i> Blogs
            </Link>
            <Link to="/contact" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <i className="fas fa-phone"></i> Contact Us
            </Link>
          </div>
        </li>
      </ul>

      <Link to="/signin" className="btn-signin">
        Sign In / Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
