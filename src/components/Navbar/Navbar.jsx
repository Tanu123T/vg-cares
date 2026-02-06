import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, UserRound, Hospital, BookOpen, Mail } from "lucide-react";

// Disable browser auto scroll restoration
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;

      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      return;
    }

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
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
        <div className="logo-text">
          <h2>VG Cares Global</h2>
          <p>Powered by VishwaGuru Infotech</p>
        </div>
      </Link>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="nav-item">
            Services
          </a>
        </li>
        <li>
          <a
            href="#capabilities"
            onClick={(e) => handleNavClick(e, "capabilities")}
            className="nav-item"
          >
            Our Capabilities
          </a>
        </li>

        <li
          className="more-dropdown-trigger"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="nav-item dropdown-btn">
            More{" "}
            <ChevronDown
              size={16}
              className={`arrow-icon ${isDropdownOpen ? "open" : ""}`}
            />
          </button>

          <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/doctors" className="dropdown-item">
              <UserRound size={18} /> Doctor
            </Link>
            <Link to="/hospitals" className="dropdown-item">
              <Hospital size={18} /> Hospital
            </Link>
            <Link to="/blogs" className="dropdown-item">
              <BookOpen size={18} /> Blogs
            </Link>
            <Link to="/contact" className="dropdown-item">
              <Mail size={18} /> Contact Us
            </Link>
          </div>
        </li>
      </ul>

      {/* Sign in */}
      <Link to="/signin" className="btn-signin">
        Sign In / Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
