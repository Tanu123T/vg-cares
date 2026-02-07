import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.more-dropdown-trigger') && !event.target.closest('.menu-toggle')) {
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

      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#services" className="nav-item" onClick={() => setIsMenuOpen(false)}>Services</a></li>
        <li><a href="#capabilities" className="nav-item" onClick={() => setIsMenuOpen(false)}>Our Capabilities</a></li>

        <li className="more-dropdown-trigger">
          <div 
            className="nav-item more-text" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            More <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
          </div>

          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <Link to="/doctors" className="dropdown-item" onClick={() => {setIsDropdownOpen(false); setIsMenuOpen(false);}}>
              <i className="fas fa-user-doctor"></i> Doctor
            </Link>
            <Link to="/hospitals" className="dropdown-item" onClick={() => {setIsDropdownOpen(false); setIsMenuOpen(false);}}>
              <i className="fas fa-hospital"></i> Hospital
            </Link>
            <Link to="/blogs" className="dropdown-item" onClick={() => {setIsDropdownOpen(false); setIsMenuOpen(false);}}>
              <i className="fas fa-book"></i> Blogs
            </Link>
            <Link to="/contact" className="dropdown-item" onClick={() => {setIsDropdownOpen(false); setIsMenuOpen(false);}}>
              <i className="fas fa-phone"></i> Contact Us
            </Link>
          </div>
        </li>

        <li className="mobile-only">
          <Link to="/signin" className="btn-signin" onClick={() => setIsMenuOpen(false)}>
            Sign In / Sign Up
          </Link>
        </li>
      </ul>

      <Link to="/signin" className="btn-signin desktop-only">
        Sign In / Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;