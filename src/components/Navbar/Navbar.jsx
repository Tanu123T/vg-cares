import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".navbar")) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleNavigation = (targetId) => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        // Offset for the fixed navbar (approx 80px)
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => handleNavigation("home")}>
        <div className="logo-mark">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="logo-text">
          <h2>VG Cares Global</h2>
          <p>Powered by VishwaGuru Infotech</p>
        </div>
      </div>

      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><button className="nav-item" onClick={() => handleNavigation("home")}>Home</button></li>
        <li><button className="nav-item" onClick={() => handleNavigation("services")}>Services</button></li>
        <li><button className="nav-item" onClick={() => handleNavigation("capabilities")}>Capabilities</button></li>

        <li className="more-dropdown-trigger">
          <div className="nav-item" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            More <i className="fa-solid fa-chevron-down" style={{marginLeft: '5px', fontSize: '0.7rem'}} />
          </div>
          <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/doctors" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Doctor</Link>
            <Link to="/hospitals" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Hospital</Link>
            <Link to="/contact" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </li>

        <li className="mobile-only">
          <Link to="/signin" className="btn-signin" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
        </li>
      </ul>

      <Link to="/signin" className="btn-signin desktop-only">Sign In</Link>
    </nav>
  );
};

export default Navbar;