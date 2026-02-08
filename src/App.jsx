import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

/* ========= GLOBAL COMPONENTS ========= */
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AIAssistant from "./components/AIAssistant/AIAssistant";

/* ========= HOME SECTIONS ========= */
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Diseases from "./components/Diseases/Diseases";
import Doctors_approach from "./components/Doctors_approach/Doctors_approach";
import Roadmap from "./components/Roadmap/Roadmap";
import Feedback from "./components/Feedback/Feedback";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import MedicalMap from "./components/MedicalMap/MedicalMap";
import Download_app from "./components/Download_app/Download_app";
import Partners from "./components/Partners/Partners";

/* ========= PAGES ========= */
import Doctors from "./pages/Doctors/Doctors";
import Blogs from "./pages/Blogs/Blogs";
import Hospitals from "./pages/Hospitals/Hospitals";
import ContactUs from "./pages/Contact_us/Contact_us";

/* =========================
   HOME PAGE
========================= */
function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // wait until DOM is painted
      requestAnimationFrame(() => {
        const section = document.getElementById(location.state.scrollTo);
        section?.scrollIntoView({ behavior: "smooth" });

        // clear state to prevent re-scroll
        navigate("/", { replace: true });
      });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Services />
      <Diseases />
      <Doctors_approach />
      <Roadmap />
      <Feedback />
      <Stats />
      <Features />
      <MedicalMap />
      <Download_app />
      <Partners />
    </>
  );
}

/* =========================
   APP
========================= */
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar />
      {isHomePage && <AIAssistant />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/signin"
          element={
            <div style={{ padding: "100px 20px", textAlign: "center" }}>
              <h1>Sign In page coming soon...</h1>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
