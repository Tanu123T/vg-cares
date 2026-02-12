import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Feedback from "./components/Feedback/Feedback";
import Download_app from "./components/Download_app/Download_app";
import Partners from "./components/Partners/Partners";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import MedicalMap from "./components/MedicalMap/MedicalMap";
import Diseases from "./components/Diseases/Diseases";
import Doctors_approach from "./components/Doctors_approach/Doctors_approach";
import Features from "./components/Features/Features";
import Roadmap from "./components/Roadmap/Roadmap";
import AIAssistant from "./components/AIAssistant/AIAssistant";

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
      <Footer />
    </>
  );
}

/* =========================
   APP
========================= */
export default function App() {
  const location = useLocation();
  
  const hiddenRoutes = ["/hospitals", "/blogs", "/doctors", "/contact"];
  const shouldHideAI = hiddenRoutes.some(route => location.pathname.startsWith(route));

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {!shouldHideAI && <AIAssistant key="home-ai" />}

      <Routes>
        <Route path="/" element={<Home />} />
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