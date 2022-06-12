import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home/Home';
import ProjectsDetails from '../Projects/ProjectsDetails/ProjectsDetails';
import Notfound from '../Shared/Notfound/Notfound';
// framer motion
import { AnimatePresence } from 'framer-motion';

const AnimatedRoute = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location?.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/projects/:projectId" element={<ProjectsDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
