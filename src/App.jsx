import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import "./animations.css";
import { useParallax } from "./utils/useScrollReveal";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";

import Feedback from "./components/Feedback/Feedback";
import Download_app from "./components/Download_app/Download_app";
import Partners from "./components/Partners/Partners";

import Footer from "./components/Footer/Footer";
import MedicalMap from "./components/MedicalMap/MedicalMap";
import Diseases from "./components/Diseases/Diseases";
import Doctors_approach from "./components/Doctors_approach/Doctors_approach";

import Roadmap from "./components/Roadmap/Roadmap";
import AIAssistant from "./components/AIAssistant/AIAssistant";
import Treatments from "./components/Treatments/Treatments";


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
      const section = document.getElementById(location.state.scrollTo);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

      // clear state so it doesn't scroll again
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
         <About />
      <Treatments />
      <Roadmap />
      <Diseases />
      <Services />
      <Doctors_approach />
      <Feedback />
      <MedicalMap />
      <Download_app />
      <Partners />
      <Footer />
    </>
  );
}

/* =========================
   APP
========================= */
export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  // Global parallax for all [data-vg-parallax] elements
  useParallax();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<><AIAssistant /><Home /></>} />
        <Route path="/doctors" element={<><Doctors /><Footer /></>} />
        <Route path="/hospitals" element={<><Hospitals /><Footer /></>} />
        <Route path="/blogs" element={<><Blogs /><Footer /></>} />
        <Route path="/contact" element={<><ContactUs /><Footer /></>} />
        <Route
          path="/signin"
          element={
            <>
              <div style={{ padding: "100px 20px", textAlign: "center" }}>
                <h1>Sign In page coming soon...</h1>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}