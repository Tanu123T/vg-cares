import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Stethoscope,
  Hospital,
  FileText,
  Phone
} from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">VG Cares Global</div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a className="nav-item" href="#">Home</a>
          <a className="nav-item" href="#">Services</a>
          <a className="nav-item" href="#">Our Capabilities</a>

          <div className="nav-item more">
            <button
              className="more-btn"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More <ChevronDown size={16} />
            </button>

            {moreOpen && (
              <div className="dropdown">
                <a href="#"><Stethoscope size={16} /> Doctor</a>
                <a href="#"><Hospital size={16} /> Hospital</a>
                <a href="#"><FileText size={16} /> Blogs</a>
                <a href="#"><Phone size={16} /> Contact Us</a>
              </div>
            )}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="mobile-actions">
            <button className="signin">Sign In</button>
            <button className="signup">Sign Up</button>
          </div>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
