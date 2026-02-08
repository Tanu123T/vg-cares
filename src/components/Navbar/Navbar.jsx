import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".more-dropdown-trigger") &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /* -----------------------------
     SCROLL HANDLERS
  ------------------------------*/

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
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
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
      <div
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <button className="nav-item" onClick={goToHome}>
            Home
          </button>
        </li>

        <li>
          <button className="nav-item" onClick={goToServices}>
            Services
          </button>
        </li>

        <li>
          <button className="nav-item" onClick={goToCapabilities}>
            Our Capabilities
          </button>
        </li>

        {/* MORE DROPDOWN */}
        <li className="more-dropdown-trigger">
          <div
            className="nav-item more-text"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            More{" "}
            <i
              className={`fas fa-chevron-down ${
                isDropdownOpen ? "rotate" : ""
              }`}
            ></i>
          </div>

          <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
            <Link
              to="/doctors"
              className="dropdown-item"
              onClick={() => {
                setIsDropdownOpen(false);
                setIsMenuOpen(false);
              }}
            >
              <i className="fas fa-user-doctor"></i> Doctor
            </Link>

            <Link
              to="/hospitals"
              className="dropdown-item"
              onClick={() => {
                setIsDropdownOpen(false);
                setIsMenuOpen(false);
              }}
            >
              <i className="fas fa-hospital"></i> Hospital
            </Link>

            <Link
              to="/blogs"
              className="dropdown-item"
              onClick={() => {
                setIsDropdownOpen(false);
                setIsMenuOpen(false);
              }}
            >
              <i className="fas fa-book"></i> Blogs
            </Link>

            <Link
              to="/contact"
              className="dropdown-item"
              onClick={() => {
                setIsDropdownOpen(false);
                setIsMenuOpen(false);
              }}
            >
              <i className="fas fa-phone"></i> Contact Us
            </Link>
          </div>
        </li>

        {/* MOBILE AUTH */}
        <li className="mobile-only">
          <Link
            to="/signin"
            className="btn-signin"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In / Sign Up
          </Link>
        </li>
      </ul>

      {/* DESKTOP AUTH */}
      <Link to="/signin" className="btn-signin desktop-only">
        Sign In / Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
