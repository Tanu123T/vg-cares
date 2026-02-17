import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");

  // ✅ Detect Mobile Screen
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const dropdownTimeoutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const isMoreActive =
  location.pathname === "/doctors" ||
  location.pathname === "/hospitals" ||
  location.pathname === "/blogs" ||
  location.pathname === "/contact";


  /* =========================
     SCREEN RESIZE DETECTION
  ========================= */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =========================
     CLOSE DROPDOWN ON OUTSIDE CLICK (DESKTOP ONLY)
  ========================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile) return; // ❌ disable for mobile

      if (
        !e.target.closest(".more-dropdown-trigger") &&
        !e.target.closest(".menu-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);
  
  useEffect(() => {
  const handleScroll = () => {
    if (location.pathname !== "/") return;

    const sections = ["home", "services", "capabilities"];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [location.pathname]);

useEffect(() => {
  if (location.pathname !== "/") {
    setActiveSection("");
  }
}, [location.pathname]);


  /* =========================
     DESKTOP HOVER HANDLERS
  ========================= */
  const handleDropdownMouseEnter = () => {
    if (isMobile) return; // ❌ no hover logic on mobile

    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (isMobile) return;

    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  /* =========================
     MOBILE CLICK HANDLER
  ========================= */
  const handleMoreClick = (e) => {
    if (!isMobile) return; // desktop handled by hover

    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  /* =========================
     NAVIGATION HELPERS
  ========================= */
  const goToHome = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const goToServices = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    if (location.pathname === "/") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "services" } });
    }
  };

  const goToCapabilities = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

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
        <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <button
  className={`nav-item ${activeSection === "home" ? "active" : ""}`}
  onClick={goToHome}
>
  Home
</button>
        </li>

        <li>
          <button
  className={`nav-item ${activeSection === "services" ? "active" : ""}`}
  onClick={goToServices}
>
  Services
</button>

        </li>

        <li>
          <button
  className={`nav-item ${activeSection === "capabilities" ? "active" : ""}`}
  onClick={goToCapabilities}
>
  Our Capabilities
</button>

        </li>

        {/* MORE */}
        <li
          className="more-dropdown-trigger"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className={`nav-item more-text ${isMoreActive ? "active" : ""}`} onClick={handleMoreClick}>

            More
            <i
              className={`fa-solid fa-chevron-down ${
                isDropdownOpen ? "rotate" : ""
              }`}
            />
          </div>

          <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/doctors" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
              <i className="fa-solid fa-user-doctor" />
              Doctor
            </Link>

            <Link to="/hospitals" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
              <i className="fa-solid fa-hospital" />
              Hospital
            </Link>

            <Link to="/blogs" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
              <i className="fa-solid fa-book" />
              Blogs
            </Link>

            <Link to="/contact" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
              <i className="fa-solid fa-phone" />
              Contact
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
