import React from 'react';
import './App.css';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import ProjectsDetails from './pages/Projects/ProjectsDetails/ProjectsDetails';
import Notfound from './pages/Shared/Notfound/Notfound';
// import AnimatedRoute from './pages/AnimatedRoute/AnimatedRoute';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './pages/AnimatedRoute/ScrollToTop';
import Particle from './pages/AnimatedRoute/Particle';

function App() {
  // framermotion
  const location = useLocation();
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Particle />
      <AnimatePresence>
        <Routes location={location} key={location?.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/projects" element={<Projects />} />  */}
          <Route path="/projects/:projectId" element={<ProjectsDetails />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AnimatePresence>
      {/* <AnimatedRoute /> */}
      <Footer />
    </div>
  );
}

export default App;
