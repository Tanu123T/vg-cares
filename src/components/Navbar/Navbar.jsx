import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, UserRound, Hospital, BookOpen, Mail } from "lucide-react";

// THIS LINE KILLS THE AUTO-JUMP (Crucial)
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isFirstRender = useRef(true);

  // 1. Logic to handle smooth scrolling and URL cleaning
  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo(0, 0); // Force top on refresh
      isFirstRender.current = false;
      
      // Remove hash from URL silently so it doesn't jump on next refresh
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      return;
    }

    // Handle scrolling when a hash is actually present and clicked
    if (location.hash && location.pathname === "/") {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo-link">
          <div className="logo-mark"><span></span><span></span><span></span><span></span></div>
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

        <li className="more-dropdown-trigger" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}>
          <button className="nav-item dropdown-btn">
            More <ChevronDown size={16} className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`} />
          </button>
          
          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <Link to="/doctors" className="dropdown-item">
              <UserRound size={18} /> <span>Doctor</span>
            </Link>
            <Link to="/hospitals" className="dropdown-item">
              <Hospital size={18} /> <span>Hospital</span>
            </Link>
            <Link to="/blogs" className="dropdown-item">
              <BookOpen size={18} /> <span>Blogs</span>
            </Link>
            <Link to="/contact" className="dropdown-item">
              <Mail size={18} /> <span>Contact Us</span>
            </Link>
          </div>
        </li>
      </ul>

      <Link to="/signin" className="btn-signin">Sign In / Sign Up</Link>
    </nav>
  );
};

export default Navbar;