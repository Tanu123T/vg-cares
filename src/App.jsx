import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from './components/Services/Services';
import Feedback from './components/Feedback/Feedback';
import Download_app from './components/Download_app/Download_app';
import Partners from './components/Partners/Partners';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import MedicalMap from './components/MedicalMap/MedicalMap';
import Diseases from './components/Diseases/Diseases';
import Doctors_approach from './components/Doctors_approach/Doctors_approach';
import Doctors from './pages/Doctors/Doctors'; 
import Blogs from './pages/Blogs/Blogs'; 
import Hospitals from './pages/Hospitals/Hospitals';  
import Features from './components/Features/Features';
import ContactUs from './pages/Contact_us/Contact_us';
import Roadmap from './components/Roadmap/Roadmap';
import AIAssistant from './components/AIAssistant/AIAssistant';
import { Contact } from 'lucide-react';   


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <BrowserRouter>
      <Navbar />
      {isHomePage && <AIAssistant />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Diseases />
            <Doctors_approach />
            <Roadmap />
            <Feedback />
            <Stats />
            <Features/>
            <MedicalMap />
            <Download_app />
            <Partners />
            <Footer />
          </>
        } />
        <Route path="/doctors" element={
          <>
            <Doctors />
            <Footer />
          </>
        } />
        <Route path="/hospitals" element={
          <>
            <Hospitals />
            <Footer />
          </>
         } />
        <Route path="/blogs" element={
          <>
            
            <Blogs />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <ContactUs />
            <Footer />
          </>
        } />
        <Route path="/signin" element={
          <>
            <div style={{padding: '100px 20px', textAlign: 'center'}}>
              <h1>Sign In page coming soon...</h1>
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
