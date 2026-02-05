import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Diseases />
            <Doctors_approach />
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
            <div style={{padding: '100px 20px', textAlign: 'center'}}>
              <h1>Hospitals page coming soon...</h1>
            </div>
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
            <div style={{padding: '100px 20px', textAlign: 'center'}}>
              <h1>Contact page coming soon...</h1>
            </div>
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
