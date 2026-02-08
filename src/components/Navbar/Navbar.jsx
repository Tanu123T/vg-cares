import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
     CLOSE DROPDOWN ON OUTSIDE CLICK
  ========================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".more-dropdown-trigger") &&
        !e.target.closest(".menu-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /* =========================
     NAVIGATION HELPERS
  ========================= */
  const goToHome = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const goToServices = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "services" } });
    }
  };

  const goToCapabilities = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      document
        .getElementById("capabilities")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "capabilities" } });
    }
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo-container" onClick={goToHome}>
        <div className="logo-mark">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="logo-text">
          <h2>VG Cares Global</h2>
          <p>Powered by VishwaGuru Infotech</p>
        </div>
      </div>

      {/* MOBILE TOGGLE */}
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><button className="nav-item" onClick={goToHome}>Home</button></li>
        <li><button className="nav-item" onClick={goToServices}>Services</button></li>
        <li><button className="nav-item" onClick={goToCapabilities}>Our Capabilities</button></li>

        {/* MORE */}
        <li className="more-dropdown-trigger">
          <div
            className="nav-item more-text"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            More <i className={`fas fa-chevron-down ${isDropdownOpen ? "rotate" : ""}`} />
          </div>

          <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/doctors" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Doctor</Link>
            <Link to="/hospitals" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Hospital</Link>
            <Link to="/blogs" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
            <Link to="/contact" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
