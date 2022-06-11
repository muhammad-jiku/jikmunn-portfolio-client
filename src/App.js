import React from 'react';
import './App.css';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import ProjectsDetails from './pages/Projects/ProjectsDetails/ProjectsDetails';
import Notfound from './pages/Shared/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/projects/:projectId" element={<ProjectsDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
