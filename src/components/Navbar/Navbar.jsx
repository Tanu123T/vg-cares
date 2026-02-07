import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, UserRound, Hospital, BookOpen, Mail } from "lucide-react";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // 1. If we are NOT on the home page (e.g., /blogs, /doctors), 
    // always jump to the absolute top and STOP the logic there.
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
      return; 
    }

    // 2. Handle Initial Load / Refresh on Home Page
    if (isFirstRender.current) {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
      isFirstRender.current = false;
    }

    // 3. Handle Section Scrolling ONLY if on Home Page and a Hash exists
    if (location.hash && location.pathname === "/") {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Clean hash from URL after scrolling
          window.history.replaceState(null, "", window.location.pathname);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]); // This triggers on every page change

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
      </ul>

      <Link to="/signin" className="btn-signin">Sign In / Sign Up</Link>
    </nav>
  );
};

export default Navbar;