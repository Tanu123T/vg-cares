import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserRound, Hospital, BookOpen, Mail } from "lucide-react";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate(); // Added this to enable cross-page navigation
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
      return; 
    }

    if (isFirstRender.current) {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
      isFirstRender.current = false;
    }

    if (location.hash && location.pathname === "/") {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", window.location.pathname);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // FIX: Logic updated to work from other pages
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page (like /blogs), navigate back home with the hash
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

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
        <li><a href="#home" className="nav-item" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#services" className="nav-item" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
        <li><a href="#capabilities" className="nav-item" onClick={(e) => handleNavClick(e, 'capabilities')}>Our Capabilities</a></li>

        <li className="more-dropdown-trigger">
          <div className="nav-item more-text" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            More <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
          </div>

          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <Link to="/doctors" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <UserRound size={18} /> <span>Doctor</span>
            </Link>
            <Link to="/hospitals" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <Hospital size={18} /> <span>Hospital</span>
            </Link>
            <Link to="/blogs" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <BookOpen size={18} /> <span>Blogs</span>
            </Link>
            <Link to="/contact" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
              <Mail size={18} /> <span>Contact Us</span>
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